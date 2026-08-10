"use client";

/**
 * ThreeBackground
 * ----------------
 * The hero's signature visual: a slowly-rotating field of connected nodes
 * with small gold "signal" pulses traveling along random edges — a nod to
 * leads/data moving through a pipeline, and to the node motif in the studio
 * mark itself. All Three.js/WebGL logic is isolated to this file and is
 * only ever mounted client-side (see Hero.tsx, which loads it via
 * next/dynamic with ssr: false) so it can never run into SSR/hydration
 * issues.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 64;
const CONNECT_DISTANCE = 1.85;
const FIELD_RADIUS = 4.2;
const PULSE_COUNT = 5;

/** Deterministic PRNG so the network layout is stable across renders. */
function seededRandom(seed: number) {
  let t = seed;
  return function random() {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function useNetworkGeometry() {
  return useMemo(() => {
    const rand = seededRandom(42);
    const nodes: THREE.Vector3[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      const r = FIELD_RADIUS * Math.cbrt(rand());
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.5; // flatten to a wide, shallow field
      const z = r * Math.cos(phi) * 0.6;
      nodes.push(new THREE.Vector3(x, y, z));
    }

    const edges: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < CONNECT_DISTANCE) {
          edges.push([i, j]);
        }
      }
    }

    return { nodes, edges };
  }, []);
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function Nodes({ nodes }: { nodes: THREE.Vector3[] }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const colors = useMemo(() => {
    const rand = seededRandom(7);
    return nodes.map(() => (rand() > 0.5 ? "#3fe9cf" : "#5b9bf0"));
  }, [nodes]);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    nodes.forEach((pos, i) => {
      dummy.position.copy(pos);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, new THREE.Color(colors[i]));
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [nodes, colors]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, nodes.length]}>
      <sphereGeometry args={[0.035, 8, 8]} />
      <meshBasicMaterial vertexColors toneMapped={false} />
    </instancedMesh>
  );
}

function Edges({
  nodes,
  edges,
}: {
  nodes: THREE.Vector3[];
  edges: [number, number][];
}) {
  const geometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      positions[i * 6 + 0] = nodes[a].x;
      positions[i * 6 + 1] = nodes[a].y;
      positions[i * 6 + 2] = nodes[a].z;
      positions[i * 6 + 3] = nodes[b].x;
      positions[i * 6 + 4] = nodes[b].y;
      positions[i * 6 + 5] = nodes[b].z;
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [nodes, edges]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#1e3a5f" transparent opacity={0.4} />
    </lineSegments>
  );
}

/** Small gold spheres that travel along random edges — the "signal" motif. */
function Pulses({
  nodes,
  edges,
  active,
}: {
  nodes: THREE.Vector3[];
  edges: [number, number][];
  active: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const pulses = useRef(
    Array.from({ length: PULSE_COUNT }).map(() => ({
      edge: edges[Math.floor(Math.random() * edges.length)],
      t: Math.random(),
      speed: 0.12 + Math.random() * 0.14,
    }))
  );

  useFrame((_, delta) => {
    if (!active || !groupRef.current || edges.length === 0) return;
    pulses.current.forEach((p, i) => {
      p.t += delta * p.speed;
      if (p.t >= 1) {
        p.t = 0;
        p.edge = edges[Math.floor(Math.random() * edges.length)];
      }
      const [a, b] = p.edge;
      const mesh = groupRef.current!.children[i] as THREE.Mesh | undefined;
      if (mesh) mesh.position.lerpVectors(nodes[a], nodes[b], p.t);
    });
  });

  return (
    <group ref={groupRef}>
      {pulses.current.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#e8b34c" toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function NetworkScene() {
  const { nodes, edges } = useNetworkGeometry();
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const pointer = useRef({ x: 0, y: 0 });
  const baseRotation = useRef(0);

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    if (!prefersReducedMotion) {
      baseRotation.current += delta * 0.045;
    }
    const targetY = baseRotation.current + pointer.current.x * 0.25;
    const targetX = pointer.current.y * 0.12;
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.03);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetX, 0.03);
  });

  return (
    <group ref={groupRef}>
      <Nodes nodes={nodes} />
      <Edges nodes={nodes} edges={edges} />
      <Pulses nodes={nodes} edges={edges} active={!prefersReducedMotion} />
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 6], fov: 45 }}
      >
        <NetworkScene />
      </Canvas>
    </div>
  );
}

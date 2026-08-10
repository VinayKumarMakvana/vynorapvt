"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// The Three.js canvas is isolated in its own file and only ever mounted
// client-side — ssr:false keeps WebGL entirely out of the server render.
const ThreeBackground = dynamic(() => import("@/components/canvas/ThreeBackground"), {
  ssr: false,
});

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <ThreeBackground />

      {/* Legibility gradients so the network field never fights the copy */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-void-fade" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-void-fade-top" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-shell relative py-20 text-center"
      >
        <motion.span variants={item} className="eyebrow mx-auto mb-6 inline-block">
          Full-Stack Web Consulting — NY · India · Dubai · Entire World Wide
        </motion.span>

        <motion.h1
          variants={item}
          className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-primary sm:text-5xl lg:text-6xl"
        >
          Transforming Local Businesses into{" "}
          <span className="text-signal-gradient">Premium Digital Experiences</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-ink-secondary sm:text-lg"
        >
          Custom, high-performance web solutions designed to increase bookings
          and revenue for clinics, salons, and home services.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#contact" variant="primary" size="lg">
            Request a Free Website Audit
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#about" variant="ghost" size="lg">
            View Portfolio
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

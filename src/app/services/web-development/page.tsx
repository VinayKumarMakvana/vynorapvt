"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Layers, Cpu, Globe } from "lucide-react";

export default function WebDevelopmentPage() {
  const features = [
    { title: "Modern Tech Stacks", desc: "React, Next.js, Node.js, and Python. We build with the latest, most secure frameworks.", icon: <Code2 className="text-azure w-8 h-8" /> },
    { title: "Scalable Architecture", desc: "Microservices and serverless deployments designed to scale infinitely with your user base.", icon: <Layers className="text-navy w-8 h-8" /> },
    { title: "API-First Development", desc: "Seamless integrations with third-party tools, payment gateways, and existing enterprise ERPs.", icon: <Cpu className="text-azure w-8 h-8" /> },
    { title: "Global CDN Delivery", desc: "Edge computing and optimized asset delivery for sub-second load times globally.", icon: <Globe className="text-navy w-8 h-8" /> },
  ];

  return (
    <main className="bg-white min-h-screen text-navy">
      
      {/* Service Hero */}
      <section className="relative pt-48 pb-32 border-b border-corporate-border overflow-hidden bg-corporate-gray">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-azure opacity-5 blur-[200px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-navy-light hover:text-azure transition-colors mb-8">
              <ArrowRight size={14} className="rotate-180" /> Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-tight mb-8">
              Web <br /><span className="font-bold">Engineering.</span>
            </h1>
            <p className="text-xl text-navy-muted max-w-2xl leading-relaxed">
              We build high-performance, secure, and infinitely scalable web platforms. From complex enterprise portals to blazingly fast marketing sites, our engineering ensures digital dominance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex gap-6"
              >
                <div className="shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-navy-muted leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-24 border-y border-corporate-border bg-corporate-gray text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-navy-light mb-12">Powered by Enterprise Grade Technologies</p>
        <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto opacity-70">
          <span className="text-2xl font-mono font-bold text-navy">React</span>
          <span className="text-2xl font-mono font-bold text-navy">Next.js</span>
          <span className="text-2xl font-mono font-bold text-navy">Node.js</span>
          <span className="text-2xl font-mono font-bold text-navy">Python</span>
          <span className="text-2xl font-mono font-bold text-navy">AWS</span>
          <span className="text-2xl font-mono font-bold text-navy">PostgreSQL</span>
        </div>
      </section>

    </main>
  );
}

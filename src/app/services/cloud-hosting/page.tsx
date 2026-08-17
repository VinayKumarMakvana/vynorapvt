"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Server, Shield, Cloud, Activity } from "lucide-react";

export default function CloudHostingPage() {
  const features = [
    { title: "High Availability", desc: "99.99% uptime guarantees through multi-region cloud deployment.", icon: <Activity className="text-azure w-8 h-8" /> },
    { title: "Enterprise Security", desc: "DDoS protection, WAF, and end-to-end encryption for all sensitive data.", icon: <Shield className="text-navy w-8 h-8" /> },
    { title: "Managed Infrastructure", desc: "We handle the servers, updates, and scaling, so you can focus on business.", icon: <Server className="text-azure w-8 h-8" /> },
    { title: "Cloud Migration", desc: "Seamless, zero-downtime migration to AWS, Azure, or Google Cloud.", icon: <Cloud className="text-navy w-8 h-8" /> },
  ];

  return (
    <main className="bg-white min-h-screen text-navy">
      <section className="relative pt-48 pb-32 border-b border-corporate-border overflow-hidden bg-corporate-gray">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-azure opacity-5 blur-[200px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-navy-light hover:text-azure transition-colors mb-8">
              <ArrowRight size={14} className="rotate-180" /> Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-tight mb-8">
              Cloud & <br /><span className="font-bold">Hosting.</span>
            </h1>
            <p className="text-xl text-navy-muted max-w-2xl leading-relaxed">
              Secure, scalable, and resilient infrastructure. We architect cloud environments that guarantee performance under any load.
            </p>
          </motion.div>
        </div>
      </section>

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
    </main>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Search, BarChart3, Target } from "lucide-react";

export default function DigitalMarketingPage() {
  const features = [
    { title: "Search Engine Optimization", desc: "Technical and content SEO to ensure you rank #1 for high-intent keywords.", icon: <Search className="text-azure w-8 h-8" /> },
    { title: "Conversion Rate Optimization", desc: "A/B testing and funnel analysis to maximize the ROI of your existing traffic.", icon: <TrendingUp className="text-navy w-8 h-8" /> },
    { title: "Data Analytics", desc: "Advanced tracking setup providing crystal-clear visibility into user behavior.", icon: <BarChart3 className="text-azure w-8 h-8" /> },
    { title: "Performance Marketing", desc: "High-ROI paid campaigns across Google, LinkedIn, and Meta networks.", icon: <Target className="text-navy w-8 h-8" /> },
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
              Digital <br /><span className="font-bold">Marketing.</span>
            </h1>
            <p className="text-xl text-navy-muted max-w-2xl leading-relaxed">
              Data-driven strategies that capture market share. We align technical performance with aggressive visibility campaigns.
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

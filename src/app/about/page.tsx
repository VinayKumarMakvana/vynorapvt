"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-corporate-gray min-h-screen pt-40 pb-32 text-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <span className="text-azure text-xs font-bold uppercase tracking-widest mb-6 block">Our Vision</span>
          <h1 className="text-5xl md:text-7xl font-display font-light leading-tight max-w-4xl">
            Empowering global enterprises through <span className="font-bold text-transparent bg-clip-text bg-azure-gradient">relentless innovation.</span>
          </h1>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-square w-full max-w-[500px] mx-auto bg-black border border-corporate-border rounded-2xl overflow-hidden relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]"
          >
             <Image 
                src="/images/logo_badge.jpg" 
                alt="VYNORA Logo Badge" 
                fill 
                className="object-cover"
                priority
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-display font-bold mb-8">The VYNORA Story</h2>
            <p className="text-navy-muted leading-relaxed mb-6">
              Founded on the principles of engineering excellence and clean, corporate design, VYNORA was established to bridge the gap between complex technological requirements and intuitive user experiences.
            </p>
            <p className="text-navy-muted leading-relaxed">
              We don't just build websites; we architect digital ecosystems that serve as the foundation for your future growth. Our team of elite engineers and designers are obsessed with delivering measurable impact.
            </p>
          </motion.div>
        </div>

      </div>
    </main>
  );
}

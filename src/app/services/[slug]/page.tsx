"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ServiceDynamicPage({ params }: { params: { slug: string } }) {
  // Convert slug to Title Case
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="bg-corporate-gray min-h-screen pt-40 pb-32 text-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-light hover:text-azure transition-colors mb-16">
          <ArrowLeft size={16} /> All Services
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-azure text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Service Capability</span>
          <h1 className="text-5xl md:text-7xl font-display font-super-light leading-tight max-w-4xl">
            Enterprise <span className="font-medium">{title}</span>
          </h1>
        </motion.div>

        {/* Story Section */}
        <div className="bg-white border border-corporate-border p-12 lg:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-t-[3px] border-t-azure">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-light mb-8">Engineering excellence in {title}.</h2>
            <p className="text-navy-muted leading-relaxed mb-6 text-lg font-medium">
              We provide Tier-1 {title} solutions designed for massive scale and extreme resilience. From monolithic refactoring to greenfield deployments, our architectures are built to handle millions of transactions.
            </p>
            <p className="text-navy-muted leading-relaxed text-lg mb-12 font-medium">
              Partner with VYNORA to leverage state-of-the-art tooling, rigorous CI/CD pipelines, and a culture obsessed with performance metrics.
            </p>

            <Link href="/contact" className="inline-block px-8 py-4 bg-navy text-white text-[13px] font-bold uppercase tracking-widest hover:bg-azure transition-colors">
              Request a Consultation
            </Link>
          </motion.div>
        </div>

      </div>
    </main>
  );
}

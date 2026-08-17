"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function IndustryPage({ params }: { params: { slug: string } }) {
  // Convert slug (e.g., 'financial-services') to Title Case ('Financial Services')
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="bg-corporate-gray min-h-screen pt-40 pb-32 text-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-light hover:text-azure transition-colors mb-16">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-azure text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Industry Focus</span>
          <h1 className="text-5xl md:text-7xl font-display font-super-light leading-tight max-w-4xl">
            Empowering <span className="font-medium">{title}</span>
          </h1>
        </motion.div>

        {/* Story Section */}
        <div className="bg-white border border-corporate-border p-12 lg:p-20 shadow-corporate">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-light mb-8">Architecting the future of {title}.</h2>
            <p className="text-navy-muted leading-relaxed mb-6 text-lg">
              The {title} sector is undergoing rapid digital transformation. At VYNORA, we engineer specialized platforms, predictive AI models, and secure data pipelines specifically tailored for the unique challenges of this industry.
            </p>
            <p className="text-navy-muted leading-relaxed text-lg mb-12">
              Our elite teams are deploying cloud-native architectures that reduce operational costs and accelerate time-to-market. Explore our case studies to see how we drive measurable impact in {title}.
            </p>

            <Link href="/contact" className="inline-block px-8 py-4 bg-navy text-white text-sm font-bold uppercase tracking-widest hover:bg-azure transition-colors">
              Discuss Your Project
            </Link>
          </motion.div>
        </div>

      </div>
    </main>
  );
}

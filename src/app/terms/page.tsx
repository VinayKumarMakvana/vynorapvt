"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-corporate-gray min-h-screen pt-40 pb-32 text-navy">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-azure text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Legal Disclosures</span>
          <h1 className="text-4xl md:text-5xl font-display font-light mb-8">Terms of Use</h1>
          <p className="text-navy-muted leading-relaxed font-medium mb-16">Last updated: Jun 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-navy-muted font-medium prose-headings:font-display prose-headings:font-bold prose-headings:text-navy prose-a:text-azure hover:prose-a:text-navy"
        >
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using the VYNORA DIGITAL website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h3>2. Intellectual Property Rights</h3>
          <p>
            The Site and its original content, features, and functionality are owned by VYNORA DIGITAL and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h3>3. Enterprise Service Agreements</h3>
          <p>
            While these Terms of Use govern the general usage of our public-facing website, all enterprise software development, cloud hosting, and consulting services are governed by separate, individually negotiated Master Services Agreements (MSAs) and Statements of Work (SOWs).
          </p>

          <h3>4. Limitation of Liability</h3>
          <p>
            In no event shall VYNORA DIGITAL, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
          
          <h3>5. Changes to Terms</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

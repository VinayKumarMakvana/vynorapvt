"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="bg-corporate-gray min-h-screen pt-40 pb-32 text-navy">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-azure text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Legal Disclosures</span>
          <h1 className="text-4xl md:text-5xl font-display font-light mb-8">Privacy Policy</h1>
          <p className="text-navy-muted leading-relaxed font-medium mb-16">Last updated: Jun 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-navy-muted font-medium prose-headings:font-display prose-headings:font-bold prose-headings:text-navy prose-a:text-azure hover:prose-a:text-navy"
        >
          <h3>1. Introduction</h3>
          <p>
            VYNORA DIGITAL ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h3>2. The Data We Collect About You</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          </ul>

          <h3>3. How We Use Your Personal Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h3>4. Data Security & Compliance</h3>
          <p>
            As an enterprise technology provider, we take data security extremely seriously. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We are fully compliant with GDPR, CCPA, and SOC2 regulations.
          </p>
          
          <h3>5. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer at: <a href="mailto:vynorapvt@gmail.com">vynorapvt@gmail.com</a>.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

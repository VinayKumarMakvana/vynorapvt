"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      business: formData.get("business"),
      website: formData.get("website"),
      challenge: formData.get("challenge"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const resData = await response.json();
        setErrorMsg(resData.error || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-corporate-gray min-h-screen pt-40 pb-32 text-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-azure text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Enterprise Support</span>
            <h1 className="text-5xl md:text-7xl font-display font-light leading-tight mb-8">
              Let's build <br /><span className="font-bold text-transparent bg-clip-text bg-azure-gradient">the future.</span>
            </h1>
            <p className="text-xl text-navy-muted max-w-lg leading-relaxed mb-16">
              Ready to accelerate your digital transformation? Reach out to our engineering and strategy teams to discuss your enterprise objectives.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 border border-corporate-border rounded-xl shadow-sm">
                <p className="text-navy font-bold mb-2 uppercase tracking-widest text-xs">Direct Inquiries</p>
                <a href="mailto:vynorapvt@gmail.com" className="text-xl md:text-2xl font-display text-azure hover:text-navy transition-colors">vynorapvt@gmail.com</a>
              </div>
              
              <div className="bg-white p-8 border border-corporate-border rounded-xl shadow-sm">
                <p className="text-navy font-bold mb-2 uppercase tracking-widest text-xs">Global Headquarters</p>
                <p className="text-navy-muted font-medium">1200 Innovation Drive<br/>Tech District, Suite 400<br/>New York, NY 10001</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-14 border border-corporate-border rounded-xl shadow-corporate relative overflow-hidden"
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-12"
                >
                  <CheckCircle size={64} className="text-azure mb-6" />
                  <h3 className="text-3xl font-display font-bold text-navy mb-4">Request Sent</h3>
                  <p className="text-navy-muted font-medium text-lg">Thank you for reaching out. An enterprise strategist will contact you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-2xl font-bold mb-8 text-navy">Request a Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-3">Full Name</label>
                  <input required name="name" type="text" className="w-full bg-corporate-gray/50 border border-corporate-border p-4 outline-none focus:border-azure transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-3">Work Email</label>
                  <input required name="email" type="email" className="w-full bg-corporate-gray/50 border border-corporate-border p-4 outline-none focus:border-azure transition-colors" placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-3">Company</label>
                  <input required name="business" type="text" className="w-full bg-corporate-gray/50 border border-corporate-border p-4 outline-none focus:border-azure transition-colors" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-3">Website (Optional)</label>
                  <input name="website" type="url" className="w-full bg-corporate-gray/50 border border-corporate-border p-4 outline-none focus:border-azure transition-colors" placeholder="https://" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-3">How can we help?</label>
                <textarea required name="challenge" rows={5} className="w-full bg-corporate-gray/50 border border-corporate-border p-4 outline-none focus:border-azure transition-colors resize-none" placeholder="Briefly describe your project or engineering challenge..." />
              </div>

              {errorMsg && (
                <p className="text-red-500 text-sm font-bold">{errorMsg}</p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-navy text-white text-[11px] font-bold uppercase tracking-[0.3em] py-5 hover:bg-azure transition-colors disabled:opacity-70 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}

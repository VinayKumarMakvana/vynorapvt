"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud, CheckCircle } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleTitle: string;
}

export default function ApplicationModal({ isOpen, onClose, roleTitle }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    formData.append("roleTitle", roleTitle);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMsg("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white w-full max-w-2xl relative z-10 shadow-corporate border border-corporate-border rounded-xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-8 border-b border-corporate-border">
            <div>
              <span className="eyebrow mb-2">Apply Now</span>
              <h3 className="text-2xl font-bold text-navy">{roleTitle}</h3>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-corporate-gray rounded-full transition-colors">
              <X size={24} className="text-navy-muted" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-8 overflow-y-auto">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={64} className="text-azure mb-6" />
                <h4 className="text-2xl font-bold text-navy mb-2">Application Received!</h4>
                <p className="text-navy-muted">We will review your profile and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Full Name</label>
                    <input required name="name" type="text" className="w-full border border-corporate-border bg-corporate-gray/30 p-3 outline-none focus:border-azure transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Email Address</label>
                    <input required name="email" type="email" className="w-full border border-corporate-border bg-corporate-gray/30 p-3 outline-none focus:border-azure transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Portfolio / LinkedIn URL</label>
                  <input required name="link" type="url" className="w-full border border-corporate-border bg-corporate-gray/30 p-3 outline-none focus:border-azure transition-colors" placeholder="https://" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Why are you a great fit?</label>
                  <textarea required name="coverLetter" rows={4} className="w-full border border-corporate-border bg-corporate-gray/30 p-3 outline-none focus:border-azure transition-colors resize-none" placeholder="Tell us about your experience..." />
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Resume Upload</label>
                  <div className="border-2 border-dashed border-corporate-border p-6 text-center hover:border-azure hover:bg-corporate-gray/20 transition-colors relative cursor-pointer group">
                    <input required type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    <UploadCloud size={32} className="mx-auto text-navy-muted group-hover:text-azure transition-colors mb-2" />
                    <p className="text-sm font-medium text-navy">
                      {fileName ? <span className="text-azure">{fileName}</span> : "Click or drag file to upload"}
                    </p>
                    <p className="text-xs text-navy-muted mt-1">PDF, DOC, DOCX up to 5MB</p>
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-sm font-bold">{errorMsg}</p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-navy text-white font-bold tracking-widest uppercase text-sm py-4 hover:bg-azure transition-colors disabled:opacity-70 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    "Submit Application"
                  )}
                </button>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

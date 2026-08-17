"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ApplicationModal from "@/components/ApplicationModal";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const jobs = [
    {
      title: "Freelance Business Development Manager (BDM) / Sales Closer",
      icon: "💼",
      objective: "To search for potential clients, pitch your services, handle negotiations, and successfully close the deals.",
      responsibilities: [
        "Market research to identify businesses needing apps, website development, or cloud migrations.",
        "Reaching out to clients via cold emails, LinkedIn, Upwork, or direct calls.",
        "Setting up introductory calls, presenting your services, and closing the contract."
      ],
      payment: "High Commission-Based. A fixed percentage (e.g., 10% to 20%) of the total project value won from the client. Paid only after the client makes the payment."
    },
    {
      title: "Freelance Full-Stack Developer",
      icon: "💻",
      objective: "To handle the complete end-to-end development of websites, web applications, and backend systems.",
      responsibilities: [
        "Writing frontend code (the visual part users interact with).",
        "Building backend systems (servers, databases, and core business logic).",
        "Implementing API Integrations (payment gateways, login systems, maps, etc.)."
      ],
      payment: "Project-Based Milestones. Payment is divided into parts (e.g., 25% on design approval, 50% on mid-development, 25% on final deployment)."
    },
    {
      title: "Freelance Product Designer (UI/UX & Analytics)",
      icon: "🎨",
      objective: "To create user-friendly designs for your platforms and analyze user behavior to improve the overall product experience.",
      responsibilities: [
        "Wireframing, prototyping, and designing the user interface (UI) for websites and mobile apps.",
        "Focusing on Experience Design (UX) to make sure the platform is extremely easy to navigate.",
        "Setting up basic user analytics to see how clients interact with the live design."
      ],
      payment: "Fixed Project-Based Fee. Paid as a flat rate per project/per screen package after delivery of final Figma or Adobe XD source files."
    },
    {
      title: "Freelance DevSecOps Engineer (Cloud & Cybersecurity)",
      icon: "🛡️",
      objective: "To set up secure cloud infrastructure, deploy the developer's code, and defend the network against cyber threats.",
      responsibilities: [
        "Setting up cloud environments on platforms like AWS, Google Cloud, or Azure.",
        "Automating code deployment pipelines to make the system fast and stable.",
        "Implementing rigid firewalls, SSL certificates, and security protocols to ensure bulletproof Cybersecurity."
      ],
      payment: "Project Deployment Fee / Hourly Task Rate. Paid a fixed amount for the initial infrastructure setup, and then an hourly or per-task rate for occasional security audits or maintenance."
    },
    {
      title: "Freelance Cross-Platform Mobile App Developer",
      icon: "📱",
      objective: "To build high-performance mobile apps for both iOS and Android simultaneously using a single codebase.",
      responsibilities: [
        "Developing mobile applications using frameworks like Flutter or React Native.",
        "Syncing the mobile app seamlessly with the backend APIs provided by the Full-Stack Developer.",
        "Testing and publishing the application on the Apple App Store and Google Play Store."
      ],
      payment: "Project-Based Milestones. Paid in fixed chunks based on specific app feature completions and successful app store deployment."
    }
  ];

  return (
    <main className="bg-corporate-gray min-h-screen pt-40 pb-32 text-navy relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <span className="text-azure text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Join VYNORA</span>
          <h1 className="text-5xl md:text-7xl font-display font-light leading-tight max-w-4xl">
            Build the digital future. <br /><span className="font-medium text-transparent bg-clip-text bg-azure-gradient">Work on your terms.</span>
          </h1>
          <p className="mt-8 text-xl text-navy-muted max-w-2xl leading-relaxed">
            We are looking for elite freelance talent to collaborate on enterprise-grade projects. Apply below to join our global network of experts.
          </p>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-12">
          {jobs.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-corporate-border rounded-xl shadow-sm hover:shadow-corporate transition-shadow duration-500 overflow-hidden"
            >
              <div className="p-8 md:p-12 border-b border-corporate-border flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="text-4xl">{job.icon}</div>
                  <h3 className="text-2xl font-display font-bold text-navy">{job.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedRole(job.title)}
                  className="px-8 py-4 bg-navy text-white text-[11px] font-bold uppercase tracking-widest hover:bg-azure transition-colors whitespace-nowrap"
                >
                  Apply Now
                </button>
              </div>

              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 bg-corporate-gray/20">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-navy mb-4">Role Objective</h4>
                  <p className="text-navy-muted leading-relaxed font-medium mb-8">{job.objective}</p>
                  
                  <h4 className="text-sm font-bold uppercase tracking-widest text-azure mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} /> Payment Model
                  </h4>
                  <p className="text-navy-muted leading-relaxed font-medium">{job.payment}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-navy mb-4">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <span className="text-azure mt-1">&bull;</span>
                        <span className="text-navy-muted leading-relaxed font-medium">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <ApplicationModal 
        isOpen={!!selectedRole} 
        onClose={() => setSelectedRole(null)} 
        roleTitle={selectedRole || ""} 
      />
    </main>
  );
}

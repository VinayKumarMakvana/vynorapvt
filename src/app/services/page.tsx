"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Layout, Cloud, TrendingUp, Smartphone, ShieldCheck, Database } from "lucide-react";

export default function ServicesHub() {
  const services = [
    {
      id: "01",
      title: "Frontend Development",
      href: "/services/frontend-development",
      desc: "Creating highly responsive, visually stunning web applications using Next.js and React.",
      icon: <Layout size={32} strokeWidth={1} />
    },
    {
      id: "02",
      title: "Backend Development",
      href: "/services/backend-development",
      desc: "Architecting robust, scalable server-side systems and resilient database structures.",
      icon: <Code size={32} strokeWidth={1} />
    },
    {
      id: "03",
      title: "Mobile App Development",
      href: "/services/mobile-app-development",
      desc: "Building cross-platform iOS and Android applications with native-like performance.",
      icon: <Smartphone size={32} strokeWidth={1} />
    },
    {
      id: "04",
      title: "API Integrations",
      href: "/services/api-integrations",
      desc: "Connecting enterprise software, payment gateways, and third-party tools seamlessly.",
      icon: <Database size={32} strokeWidth={1} />
    },
    {
      id: "05",
      title: "Cloud & Hosting",
      href: "/services/cloud-hosting",
      desc: "Deploying secure, resilient cloud infrastructure to guarantee uptime and fast global delivery.",
      icon: <Cloud size={32} strokeWidth={1} />
    },
    {
      id: "06",
      title: "Cybersecurity",
      href: "/services/cybersecurity",
      desc: "Implementing rigid firewalls, threat detection, and zero-trust architectures.",
      icon: <ShieldCheck size={32} strokeWidth={1} />
    },
    {
      id: "07",
      title: "Data & Analytics",
      href: "/services/data-analytics",
      desc: "Transforming raw metrics into actionable intelligence and predictive models.",
      icon: <TrendingUp size={32} strokeWidth={1} />
    },
    {
      id: "08",
      title: "Experience Design (UI/UX)",
      href: "/services/ui-ux",
      desc: "Crafting intuitive and immersive user interfaces that drive engagement and business conversion.",
      icon: <Layout size={32} strokeWidth={1} />
    }
  ];

  return (
    <main className="bg-corporate-gray min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32 text-center"
        >
          <span className="text-azure text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-display font-light leading-tight max-w-4xl mx-auto text-navy">
            Engineering solutions that <span className="font-bold text-transparent bg-clip-text bg-azure-gradient">transform business.</span>
          </h1>
        </motion.div>

        {/* Services Grid (Bento Box style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.8 }}
            >
              <Link href={service.href} className="block group p-10 bg-white border border-corporate-border rounded-xl hover:shadow-corporate hover:border-azure/30 transition-all relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 bg-azure-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="flex justify-between items-start mb-10 text-navy-muted group-hover:text-azure transition-colors">
                  {service.icon}
                  <div className="w-10 h-10 rounded-full border border-corporate-border flex items-center justify-center group-hover:border-azure group-hover:text-azure transition-all bg-white">
                    <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <h2 className="text-2xl font-display font-bold mb-4 text-navy group-hover:text-azure transition-colors">{service.title}</h2>
                <p className="text-navy-muted leading-relaxed font-medium mt-auto">
                  {service.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [activeStory, setActiveStory] = useState(0);

  const topStories = [
    { title: "VYNORA AI Suite Launch", desc: "Accelerate enterprise intelligence with our new generative AI platform.", type: "Platform", image: "/images/story_ai_suite.jpg" },
    { title: "Cloud Migration Success", desc: "How we moved a Fortune 500 retailer to AWS with zero downtime.", type: "Case Study", image: "/images/story_cloud_migration.jpg" },
    { title: "The Future of CX", desc: "Exploring micro-interactions and predictive UX in modern apps.", type: "Research", image: "/images/story_future_cx.jpg" },
  ];

  return (
    <main className="bg-corporate-gray min-h-screen text-navy">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        
        {/* Stunning Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.jpg" 
            alt="Cinematic Mountain Peaks" 
            fill 
            className="object-cover"
            priority
          />
          {/* Subtle overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/80 mix-blend-multiply"></div>
        </div>

        {/* Center Tagline & Search */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-ultra-thin text-white mb-12 tracking-tight drop-shadow-2xl"
          >
            Navigate your <span className="font-super-light">digital future</span>
          </motion.h1>
        </div>

        {/* Overlapping Bottom Insight Cards (Classic Infosys style) */}
        <div className="absolute bottom-0 left-0 w-full px-6 lg:px-12 z-20 translate-y-1/2">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "VYNORA Topaz", desc: "An AI-first set of services." },
              { title: "VYNORA Cobalt", desc: "Enterprise cloud platforms." },
              { title: "Tech Compass", desc: "Navigating digital disruption." },
              { title: "ESG Vision", desc: "Sustainable digital engineering." }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + (idx * 0.1) }}
              >
                <Link href="/services" className="block bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-t-[3px] border-azure hover:-translate-y-2 transition-transform duration-500 h-full group relative overflow-hidden">
                  <h3 className="text-[17px] font-bold text-navy mb-3 group-hover:text-azure transition-colors pr-6">{card.title}</h3>
                  <p className="text-sm text-navy-muted font-medium leading-relaxed">{card.desc}</p>
                  <ArrowUpRight size={20} className="absolute top-8 right-6 text-azure opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing for overlapping cards */}
      <div className="h-40 bg-white"></div>

      {/* 2. TOP STORIES CAROUSEL */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-display font-super-light text-navy mb-16">Top Stories</h2>
          
          <div className="bg-white border border-corporate-border rounded-xl flex flex-col md:flex-row shadow-corporate hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500 overflow-hidden group">
            {/* High-end Abstract Glassmorphism Visual */}
            <div className="md:w-1/2 h-80 md:h-auto relative overflow-hidden bg-corporate-gray">
               <Image 
                  src={topStories[activeStory].image} 
                  alt={topStories[activeStory].title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
               />
            </div>
            
            {/* Content side */}
            <div className="md:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative bg-white">
              <span className="eyebrow mb-6">{topStories[activeStory].type}</span>
              <h3 className="text-3xl md:text-5xl font-display font-super-light text-navy mb-8 leading-tight">{topStories[activeStory].title}</h3>
              <p className="text-navy-muted text-lg leading-relaxed mb-16 font-medium">{topStories[activeStory].desc}</p>
              
              <Link href="/services" className="fine-link w-max flex items-center gap-2">
                Read Story <ArrowUpRight size={16} strokeWidth={2} />
              </Link>

              {/* Carousel Navigator */}
              <div className="absolute bottom-12 right-12 flex items-center gap-6">
                <span className="text-xs font-mono font-bold tracking-widest text-navy-muted">{activeStory + 1} / {topStories.length}</span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setActiveStory(prev => prev === 0 ? topStories.length - 1 : prev - 1)}
                    className="w-12 h-12 rounded-full border border-corporate-border flex items-center justify-center hover:border-azure hover:text-azure transition-colors bg-white"
                  >
                    <ChevronLeft size={20} strokeWidth={1.5} />
                  </button>
                  <button 
                    onClick={() => setActiveStory(prev => prev === topStories.length - 1 ? 0 : prev + 1)}
                    className="w-12 h-12 rounded-full border border-corporate-border flex items-center justify-center hover:border-azure hover:text-azure transition-colors bg-white"
                  >
                    <ChevronRight size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DARK "ENGINEERING IN ACTION" SECTION */}
      <section className="py-40 bg-navy text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-azure/10 rounded-full blur-[200px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-white/10 pb-12">
            <h2 className="text-5xl md:text-7xl font-display font-ultra-thin max-w-2xl leading-tight">
              Engineering <br/><span className="font-medium text-azure">in Action.</span>
            </h2>
            <Link href="/services" className="text-[13px] font-bold uppercase tracking-widest text-white hover:text-azure transition-colors flex items-center gap-2 mb-2">
              View All Case Studies <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Revolutionizing Retail", desc: "Implemented predictive inventory AI saving $4M annually.", image: "/images/retail_ai.jpg" },
              { title: "Healthcare Data Platform", desc: "Secure, HIPAA-compliant cloud migration for 50+ hospitals.", image: "/images/healthcare_cloud.jpg" },
              { title: "FinTech App Scaling", desc: "Refactored monolithic architecture to handle 10M+ daily users.", image: "/images/fintech_scale.jpg" }
            ].map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="w-full aspect-video relative overflow-hidden mb-8 border border-white/10 rounded">
                   <Image 
                     src={study.image} 
                     alt={study.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                   />
                   <div className="absolute top-4 left-4 w-10 h-10 bg-navy/80 backdrop-blur flex items-center justify-center border border-white/20">
                      <span className="font-mono text-[11px] font-bold text-azure tracking-[0.3em]">0{idx + 1}</span>
                   </div>
                </div>
                <h3 className="text-3xl font-super-light mb-4 group-hover:text-azure transition-colors">{study.title}</h3>
                <p className="text-white/60 mb-8 line-clamp-2 leading-relaxed font-light">{study.desc}</p>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-azure group-hover:text-white transition-colors">
                  I'm Curious <ArrowUpRight size={16} strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES & SERVICES QUICK LINKS */}
      <section className="py-32 bg-corporate-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            <div>
              <h4 className="text-xl font-display font-medium text-navy mb-8 pb-4 border-b border-corporate-border">Industries</h4>
              <ul className="space-y-4 text-[15px] text-navy-muted font-medium">
                <li><Link href="/industries/financial-services" className="hover:text-azure transition-colors">Financial Services</Link></li>
                <li><Link href="/industries/healthcare" className="hover:text-azure transition-colors">Healthcare</Link></li>
                <li><Link href="/industries/retail-cpg" className="hover:text-azure transition-colors">Retail & CPG</Link></li>
                <li><Link href="/industries/manufacturing" className="hover:text-azure transition-colors">Manufacturing</Link></li>
                <li><Link href="/industries/communications" className="hover:text-azure transition-colors">Communications</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-display font-medium text-navy mb-8 pb-4 border-b border-transparent"></h4>
              <ul className="space-y-4 text-[15px] text-navy-muted font-medium mt-1">
                <li><Link href="/industries/energy-utilities" className="hover:text-azure transition-colors">Energy & Utilities</Link></li>
                <li><Link href="/industries/insurance" className="hover:text-azure transition-colors">Insurance</Link></li>
                <li><Link href="/industries/life-sciences" className="hover:text-azure transition-colors">Life Sciences</Link></li>
                <li><Link href="/industries/logistics" className="hover:text-azure transition-colors">Logistics</Link></li>
                <li><Link href="/industries/public-sector" className="hover:text-azure transition-colors">Public Sector</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-display font-medium text-navy mb-8 pb-4 border-b border-corporate-border">Services</h4>
              <ul className="space-y-4 text-[15px] text-navy-muted font-medium">
                <li><Link href="/services/web-development" className="hover:text-azure transition-colors">Digital Engineering</Link></li>
                <li><Link href="/services/cloud-hosting" className="hover:text-azure transition-colors">Cloud Platforms</Link></li>
                <li><Link href="/services/ui-ux" className="hover:text-azure transition-colors">Experience Design</Link></li>
                <li><Link href="/services/digital-marketing" className="hover:text-azure transition-colors">Digital Marketing</Link></li>
                <li><Link href="/services/data-analytics" className="hover:text-azure transition-colors">Data & Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-display font-medium text-navy mb-8 pb-4 border-b border-transparent"></h4>
              <ul className="space-y-4 text-[15px] text-navy-muted font-medium mt-1">
                <li><Link href="/services/cybersecurity" className="hover:text-azure transition-colors">Cybersecurity</Link></li>
                <li><Link href="/services/frontend-development" className="hover:text-azure transition-colors">Frontend Development</Link></li>
                <li><Link href="/services/backend-development" className="hover:text-azure transition-colors">Backend Development</Link></li>
                <li><Link href="/services/mobile-app-development" className="hover:text-azure transition-colors">Mobile App Development</Link></li>
                <li><Link href="/services/api-integrations" className="hover:text-azure transition-colors">API Integrations</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

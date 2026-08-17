"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Navigate your next');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const categories = [
    { name: 'Navigate your next' },
    { name: 'Industries' },
    { name: 'Services' },
    { name: 'Platforms' },
    { name: 'Knowledge Institute' },
    { name: 'About Us' },
    { name: 'Careers' },
    { name: 'Contact Us' }
  ];

  const subLinks: Record<string, { title: string; href: string; desc?: string }[]> = {
    'Navigate your next': [
      { title: 'The Digital Future', href: '/about', desc: 'Our vision for the next decade of enterprise tech.' },
      { title: 'Enterprise Agility', href: '/services', desc: 'Scaling operations with rapid deployments.' },
      { title: 'Cloud Transformation', href: '/services/cloud-hosting', desc: 'Secure, resilient, and infinite scale.' },
    ],
    'Industries': [
      { title: 'Financial Services', href: '/services', desc: 'Modernizing legacy banking architecture.' },
      { title: 'Healthcare', href: '/services', desc: 'HIPAA-compliant platforms and data systems.' },
      { title: 'Retail & E-Commerce', href: '/services', desc: 'High-conversion storefronts and predictive UX.' },
    ],
    'Services': [
      { title: 'Web Engineering', href: '/services/web-development', desc: 'Custom, high-performance platforms.' },
      { title: 'Experience Design', href: '/services/ui-ux', desc: 'User-centric research and prototyping.' },
      { title: 'Cloud & Hosting', href: '/services/cloud-hosting', desc: '99.99% uptime cloud architecture.' },
      { title: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Data-driven visibility strategies.' },
    ],
    'Platforms': [
      { title: 'VYNORA Topaz (AI)', href: '/services', desc: 'Generative AI and machine learning solutions.' },
      { title: 'VYNORA Cobalt', href: '/services/cloud-hosting', desc: 'Enterprise cloud infrastructure.' },
    ],
    'Knowledge Institute': [
      { title: 'Research & Insights', href: '/about', desc: 'Whitepapers on the future of digital tech.' },
      { title: 'Case Studies', href: '/services', desc: 'Deep dives into our engineering success.' },
    ],
    'About Us': [
      { title: 'The VYNORA Story', href: '/about', desc: 'Founded on engineering excellence.' },
      { title: 'Our Leadership', href: '/about', desc: 'Meet the visionaries behind the code.' },
      { title: 'Corporate Governance', href: '/privacy', desc: 'Strict compliance and data security.' },
    ],
    'Careers': [
      { title: 'Explore Opportunities', href: '/careers', desc: 'Join our elite engineering and design teams.' },
      { title: 'Life at VYNORA', href: '/careers', desc: 'A culture of relentless innovation.' },
    ],
    'Contact Us': [
      { title: 'Global Offices', href: '/contact', desc: 'Reach our teams worldwide.' },
      { title: 'Support', href: '/contact', desc: '24/7 dedicated enterprise support.' },
    ]
  };

  const currentSubLinks = subLinks[activeCategory] || [];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const rightPaneVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || menuOpen ? 'bg-white shadow-sm border-b border-corporate-border' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 h-20">
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 focus:outline-none transition-transform hover:scale-110 ${isScrolled || menuOpen ? 'text-navy' : 'text-white'}`}
            >
              {menuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
            </button>
            
            <Link href="/" className="flex items-center gap-2 relative z-50" onClick={() => setMenuOpen(false)}>
              <Image 
                src="/images/logo_horizontal.png" 
                alt="VYNORA Logo" 
                width={180} 
                height={45} 
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className={`flex gap-6 text-[15px] font-medium ${isScrolled || menuOpen ? 'text-navy' : 'text-white'}`}>
              <Link href="/services" className="hover:text-azure transition-colors">Navigate your next</Link>
              <Link href="/careers" className="hover:text-azure transition-colors">Careers</Link>
            </nav>
            <div className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-colors ${isScrolled || menuOpen ? 'border-corporate-border bg-corporate-gray hover:border-azure' : 'border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20'}`}>
              <Search size={16} />
              <input 
                type="text" 
                placeholder="Ask Vynora" 
                className="bg-transparent border-none focus:outline-none w-32 text-sm placeholder:text-inherit"
              />
            </div>
            <Globe size={24} className={`cursor-pointer hover:text-azure transition-colors ${isScrolled || menuOpen ? 'text-navy' : 'text-white'}`} />
          </div>

        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-white pt-20 flex overflow-hidden"
          >
            {/* Left Sidebar (Categories) */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white border-r border-corporate-border overflow-y-auto pt-8 pb-32 h-full shadow-[20px_0_40px_-20px_rgba(0,0,0,0.05)] relative z-10">
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col"
              >
                {categories.map((cat) => (
                  <motion.li key={cat.name} variants={itemVariants}>
                    <button
                      onMouseEnter={() => setActiveCategory(cat.name)}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full text-left px-8 py-5 text-xl lg:text-2xl font-display transition-all duration-300 flex justify-between items-center group ${
                        activeCategory === cat.name 
                          ? 'text-azure font-medium bg-azure/5' 
                          : 'text-navy hover:bg-corporate-gray'
                      }`}
                    >
                      <span className={`relative ${activeCategory === cat.name ? 'translate-x-2' : 'group-hover:translate-x-2'} transition-transform duration-300`}>
                        {cat.name}
                      </span>
                      {activeCategory === cat.name && (
                        <motion.div layoutId="activeArrow" className="text-azure">
                           <ArrowRight size={24} strokeWidth={1.5} />
                        </motion.div>
                      )}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Right Pane (Sublinks Grid) */}
            <div className="hidden md:block md:w-2/3 lg:w-3/4 bg-[#f8f9fa] overflow-y-auto h-full pt-16 px-16 pb-32 relative">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  variants={rightPaneVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="relative z-10 max-w-4xl"
                >
                  <motion.h2 variants={linkVariants} className="text-sm font-bold uppercase tracking-widest-xl text-azure mb-12 border-b border-corporate-border pb-6">
                    {activeCategory}
                  </motion.h2>
                  
                  {currentSubLinks.length > 0 ? (
                    <div className="flex flex-col gap-8">
                      {currentSubLinks.map((link, idx) => (
                        <motion.div key={idx} variants={linkVariants}>
                          <Link 
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="group block"
                          >
                            <h3 className="text-4xl md:text-5xl font-display font-super-light text-navy mb-2 group-hover:text-azure transition-colors duration-300 flex items-center gap-4">
                              {link.title}
                              <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-azure" size={32} strokeWidth={1} />
                            </h3>
                            {link.desc && (
                              <p className="text-lg text-navy-muted font-medium ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                {link.desc}
                              </p>
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.p variants={linkVariants} className="text-navy-muted text-xl italic font-light">
                      Links for {activeCategory} are coming soon.
                    </motion.p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t border-corporate-border bg-corporate-gray pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo_horizontal.png" 
                alt="VYNORA Logo" 
                width={180} 
                height={45} 
                className="object-contain"
              />
            </Link>
            <p className="text-lg font-display text-navy-muted mb-6 max-w-sm leading-relaxed">
              Architecting the digital future for global enterprises.
            </p>
            <a href="mailto:vynorapvt@gmail.com" className="text-base font-medium text-azure hover:text-navy transition-colors">
              vynorapvt@gmail.com
            </a>
          </div>

          {/* Links Cols */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-navy-light mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-navy-muted font-medium">
                <li><Link href="/about" className="hover:text-azure transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-azure transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-azure transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-navy-light mb-6">Expertise</h4>
              <ul className="space-y-4 text-sm text-navy-muted font-medium">
                <li><Link href="/services/web-development" className="hover:text-azure transition-colors">Web Engineering</Link></li>
                <li><Link href="/services/ui-ux" className="hover:text-azure transition-colors">Experience Design</Link></li>
                <li><Link href="/services/cloud-hosting" className="hover:text-azure transition-colors">Cloud & Hosting</Link></li>
                <li><Link href="/services/digital-marketing" className="hover:text-azure transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-navy-light mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-navy-muted font-medium">
                <li><Link href="/privacy" className="hover:text-azure transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-azure transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-corporate-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-navy-light font-medium uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} VYNORA DIGITAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://linkedin.com/company/vynora-pvt" target="_blank" rel="noopener noreferrer" className="hover:text-azure transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

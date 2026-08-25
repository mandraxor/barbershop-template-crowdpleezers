'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services & Pricing', href: '/services' },
    { name: 'Barbers', href: '/barbers' },
    { name: 'Lookbook', href: '/lookbook' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0D13]/95 border-b border-white/10 w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4 w-full">
        
        {/* Left: Logo / Branding */}
        <Link href="/" className="flex items-center space-x-3 group shrink-0 min-h-[44px]">
          <div className="w-10 h-10 sm:w-11 sm:h-11 border border-[#C5A059]/40 bg-[#141824]/90 flex items-center justify-center shadow-lg group-hover:border-[#C5A059] transition-all shrink-0 p-1">
            <img 
              src="/assets/images/ch_logo_gold.png" 
              alt="Centennial Hills Barbershop Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            />
          </div>
          <div>
            <div className="font-serif font-bold text-sm sm:text-base tracking-[0.14em] text-[#F5F5F0] uppercase leading-none whitespace-nowrap">
              CENTENNIAL HILLS
            </div>
            <p className="text-[8px] sm:text-[9px] font-mono tracking-[0.20em] text-[#C5A059] uppercase mt-1 whitespace-nowrap font-medium">BARBERSHOP • LAS VEGAS</p>
          </div>
        </Link>

        {/* Right (Desktop): Clean horizontal nav menu links */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-8 text-xs font-mono font-medium uppercase tracking-[0.16em]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-2 relative min-h-[44px] flex items-center whitespace-nowrap ${
                  isActive
                    ? 'text-[#C5A059] font-bold'
                    : 'text-[#94A3B8] hover:text-[#F5F5F0]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right (Mobile): Hamburger menu icon (☰) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-gray-300 hover:text-white border border-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-white/5 transition-colors shrink-0"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A059]" /> : <Menu className="w-6 h-6 text-[#F5F5F0]" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090D] border-b border-white/10 px-6 py-6 space-y-2 font-mono text-sm uppercase tracking-widest animate-fadeIn w-full max-w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 min-h-[44px] flex items-center ${
                  isActive ? 'text-[#C5A059] font-bold pl-3 border-l-2 border-[#C5A059] bg-white/5' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

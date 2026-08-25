'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, MapPin, Menu, X } from 'lucide-react';
import config from '@/config/shop-config.json';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Barbers', href: '/barbers' },
    { name: 'Lookbook', href: '/lookbook' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Bar (Hidden on Mobile < 768px) */}
      <div className="hidden md:block border-b border-white/5 py-2 px-3 text-[11px] font-mono tracking-wider text-[#94A3B8] bg-[#07090D] text-center overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <a 
            href={config.location.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 truncate hover:text-[#C5A059] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse shrink-0"></span>
            <span className="truncate">{config.location.plaza} • {config.location.address} • Walk-Ins Welcomed</span>
          </a>
          <a 
            href={`tel:${config.shop.phoneRaw}`} 
            className="hover:text-[#C5A059] flex items-center space-x-1 shrink-0 font-bold transition-colors min-h-[30px]"
          >
            <Phone className="w-3 h-3 text-[#C5A059]" />
            <span>{config.shop.phone}</span>
          </a>
        </div>
      </div>

      {/* Sticky Main Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0D13]/90 border-b border-white/10 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4 w-full">
          
          {/* Logo Branding */}
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

          {/* Desktop Nav Links (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono font-medium uppercase tracking-[0.18em]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-2 relative min-h-[44px] flex items-center ${
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

          {/* Right Action CTAs & Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
            {/* Desktop Quick Call Button */}
            <a 
              href={`tel:${config.shop.phoneRaw}`} 
              className="hidden md:inline-flex btn-brass-outline px-4 py-2.5 text-xs font-mono min-h-[44px] items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
              {config.shop.phone}
            </a>
            
            {/* Desktop Book Chair Button */}
            <a 
              href={config.shop.booksyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:inline-flex btn-brass-primary px-4 sm:px-6 py-2.5 text-xs font-mono min-h-[44px] items-center"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Book Chair
            </a>
            
            {/* Mobile Hamburger Toggle (Only element visible beside logo on mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-gray-300 hover:text-white border border-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A059]" /> : <Menu className="w-6 h-6 text-[#F5F5F0]" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07090D] border-b border-white/10 px-6 py-6 space-y-2 font-mono text-sm uppercase tracking-widest animate-fadeIn">
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
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a 
                href={config.shop.booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setMobileMenuOpen(false)}
                className="btn-brass-primary w-full min-h-[44px] flex items-center justify-center text-xs"
              >
                Book Appointment Online
              </a>
              <a 
                href={`tel:${config.shop.phoneRaw}`} 
                className="btn-brass-outline w-full min-h-[44px] flex items-center justify-center text-xs"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                Call {config.shop.phone}
              </a>
              <a 
                href={config.location.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-brass-outline w-full min-h-[44px] flex items-center justify-center text-xs"
              >
                <MapPin className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                Get Directions
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

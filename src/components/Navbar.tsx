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
      {/* Top Utility Bar */}
      <div className="border-b border-white/5 py-2 px-3 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#94A3B8] bg-[#07090D] text-center overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center justify-center space-x-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse shrink-0"></span>
            <span className="truncate">{config.location.plaza} • {config.location.address} • Walk-Ins Welcomed</span>
          </div>
          <a href={`tel:${config.shop.phoneRaw}`} className="hover:text-[#C5A059] flex items-center justify-center space-x-1 shrink-0 font-bold transition-colors">
            <Phone className="w-3 h-3 text-[#C5A059]" />
            <span>{config.shop.phone}</span>
          </a>
        </div>
      </div>

      {/* Sticky Main Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0D13]/90 border-b border-white/10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo Monogram */}
          <Link href="/" className="flex items-center space-x-3.5 group shrink-0">
            <div className="w-11 h-11 border border-[#C5A059]/60 bg-[#141824] flex items-center justify-center shadow-lg group-hover:border-[#C5A059] transition-all shrink-0">
              <span className="font-serif font-black text-sm text-[#DFBA68] tracking-tighter">CHB</span>
            </div>
            <div>
              <div className="font-serif font-bold text-sm sm:text-base tracking-[0.14em] text-[#F5F5F0] uppercase leading-none whitespace-nowrap">
                CENTENNIAL HILLS
              </div>
              <p className="text-[8px] sm:text-[9px] font-mono tracking-[0.20em] text-[#C5A059] uppercase mt-1 whitespace-nowrap font-medium">BARBERSHOP • LAS VEGAS</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono font-medium uppercase tracking-[0.18em]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 relative ${
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

          {/* Right Action CTAs */}
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
            <a href={`tel:${config.shop.phoneRaw}`} className="hidden sm:inline-flex btn-brass-outline px-4 py-2 text-xs font-mono">
              <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
              {config.shop.phone}
            </a>
            <a 
              href={config.shop.booksyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-brass-primary px-4 sm:px-6 py-2.5 text-[11px] sm:text-xs font-mono"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Book Chair
            </a>
            
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07090D] border-b border-white/10 px-6 py-6 space-y-4 font-mono text-sm uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 ${
                    isActive ? 'text-[#C5A059] font-bold pl-2 border-l-2 border-[#C5A059]' : 'text-gray-400 hover:text-white'
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
                className="btn-brass-primary w-full py-3 text-center text-xs"
              >
                Book Appointment Online
              </a>
              <a href={`tel:${config.shop.phoneRaw}`} className="btn-brass-outline w-full py-3 text-center text-xs">
                Call {config.shop.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

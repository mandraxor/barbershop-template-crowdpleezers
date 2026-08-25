import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import config from '@/config/shop-config.json';
import { Phone, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: `${config.shop.name} | ${config.shop.subTagline}`,
  description: config.shop.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B0D13] text-[#F5F5F0] min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-[#C5A059] selection:text-[#0B0D13]">
        <Navbar />
        <div className="flex-grow w-full max-w-full overflow-x-hidden">
          {children}
        </div>
        <Footer />

        {/* Fixed Mobile Floating Action Bar (< 768px) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07090D]/95 backdrop-blur-xl border-t border-[#C5A059]/30 px-3 py-2.5 flex items-center justify-between gap-2 max-w-full shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
          <a 
            href={`tel:${config.shop.phoneRaw}`} 
            className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-2 py-2.5 bg-[#141824] border border-white/10 hover:border-[#C5A059] text-[#F5F5F0] text-xs font-mono font-bold tracking-wider active:scale-95 transition-all"
            aria-label="Call Centennial Hills Barbershop"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>Call Shop</span>
          </a>
          <a 
            href={config.location.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-2 py-2.5 bg-[#141824] border border-white/10 hover:border-[#C5A059] text-[#F5F5F0] text-xs font-mono font-bold tracking-wider active:scale-95 transition-all"
            aria-label="Get Google Maps Directions"
          >
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            <span>Directions</span>
          </a>
          <a 
            href={config.shop.booksyUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#C5A059] text-[#0B0D13] font-mono font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
            aria-label="Book Appointment on Booksy"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </a>
        </div>
      </body>
    </html>
  );
}

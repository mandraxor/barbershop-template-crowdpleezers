import Link from 'next/link';
import { Phone, Calendar, MapPin, Clock, Star } from 'lucide-react';
import config from '@/config/shop-config.json';

export default function Footer() {
  return (
    <footer className="bg-[#07090D] border-t border-white/10 pt-16 pb-24 md:pb-12 text-[#94A3B8] text-xs font-mono w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand & Philosophy */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 border border-[#C5A059]/40 bg-[#141824] flex items-center justify-center text-[#DFBA68] font-serif font-bold text-sm">
              CP
            </div>
            <span className="font-serif font-bold text-[#F5F5F0] text-sm tracking-wider">CROWD PLEEZERS</span>
          </div>
          <p className="text-[#94A3B8] font-sans text-xs leading-relaxed font-normal">
            {config.shop.description}
          </p>
          <a href={config.shop.booksyUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[#C5A059] hover:underline font-bold">
            Book on Booksy →
          </a>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="font-serif font-bold text-[#F5F5F0] text-xs uppercase tracking-[0.22em] mb-4 border-b border-white/10 pb-2">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            <li><Link href="/" className="hover:text-[#C5A059] transition-colors">Home Page</Link></li>
            <li><Link href="/services" className="hover:text-[#C5A059] transition-colors">Services & Pricing Menu</Link></li>
            <li><Link href="/barbers" className="hover:text-[#C5A059] transition-colors">Master Barbers Roster</Link></li>
            <li><Link href="/lookbook" className="hover:text-[#C5A059] transition-colors">Visual Photo Gallery</Link></li>
            <li><Link href="/experience" className="hover:text-[#C5A059] transition-colors">The Lounge Experience</Link></li>
            <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors">Location & Hours</Link></li>
          </ul>
        </div>

        {/* Column 3: Hours & Schedule */}
        <div>
          <h4 className="font-serif font-bold text-[#F5F5F0] text-xs uppercase tracking-[0.22em] mb-4 border-b border-white/10 pb-2">
            Operating Schedule
          </h4>
          <div className="space-y-2 text-[#94A3B8]">
            {config.hours.schedule.map((item, idx) => (
              <div key={idx} className="flex justify-between py-1 border-b border-white/5">
                <span>{item.days}:</span>
                <span className={`font-bold ${item.isOpen ? 'text-[#F5F5F0]' : 'text-gray-500'}`}>{item.hours}</span>
              </div>
            ))}
            <p className="text-[11px] text-[#C5A059] mt-3">{config.hours.walkinPolicy}</p>
          </div>
        </div>

        {/* Column 4: Location & Contact */}
        <div>
          <h4 className="font-serif font-bold text-[#F5F5F0] text-xs uppercase tracking-[0.22em] mb-4 border-b border-white/10 pb-2">
            Charleston Lounge
          </h4>
          <p className="text-[#F5F5F0] font-medium">{config.location.plaza}</p>
          <p className="text-[#94A3B8]">{config.location.address}</p>
          <p className="text-[#C5A059] text-[11px] mt-1">{config.location.crossStreet}</p>
          <div className="mt-4 pt-3 border-t border-white/10">
            <a href={`tel:${config.shop.phoneRaw}`} className="btn-brass-outline w-full py-2.5 text-xs">
              <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
              Call {config.shop.phone}
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8]">
        <p>© {new Date().getFullYear()} Crowd Pleezers Barbershop. All rights reserved.</p>
        <p>{config.location.address}, {config.location.city}, {config.location.state} {config.location.zip} • {config.shop.phone}</p>
      </div>
    </footer>
  );
}

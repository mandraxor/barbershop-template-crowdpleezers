import Link from 'next/link';
import { Phone, Calendar, MapPin, Clock, Star } from 'lucide-react';
import config from '@/config/shop-config.json';

export default function Footer() {
  return (
    <footer className="bg-[#07090D] border-t border-white/10 pt-16 pb-28 md:pb-12 text-[#94A3B8] text-xs font-mono w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand & Philosophy */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border border-[#C5A059]/40 bg-[#141824] flex items-center justify-center p-1 shadow-md shrink-0">
              <img 
                src="/assets/images/ch_logo_gold.png" 
                alt="Centennial Hills Barbershop Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-serif font-bold text-[#F5F5F0] text-sm tracking-wider leading-none">CENTENNIAL HILLS</div>
              <p className="text-[9px] font-mono tracking-[0.18em] text-[#C5A059] uppercase mt-1 font-semibold">BARBERSHOP</p>
            </div>
          </div>
          <p className="text-[#94A3B8] font-sans text-xs leading-relaxed font-normal">
            {config.shop.description}
          </p>
          <a href={config.shop.booksyUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[#C5A059] hover:underline font-bold min-h-[30px]">
            Book on Booksy →
          </a>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="font-serif font-bold text-[#F5F5F0] text-xs uppercase tracking-[0.22em] mb-4 border-b border-white/10 pb-2">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            <li><Link href="/" className="hover:text-[#C5A059] transition-colors py-1 block">Home Page</Link></li>
            <li><Link href="/services" className="hover:text-[#C5A059] transition-colors py-1 block">Services & Pricing Menu</Link></li>
            <li><Link href="/barbers" className="hover:text-[#C5A059] transition-colors py-1 block">Master Barbers Roster</Link></li>
            <li><Link href="/lookbook" className="hover:text-[#C5A059] transition-colors py-1 block">Visual Photo Gallery</Link></li>
            <li><Link href="/experience" className="hover:text-[#C5A059] transition-colors py-1 block">The Lounge Experience</Link></li>
            <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors py-1 block">Location & Hours</Link></li>
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
            Centennial Lounge
          </h4>
          <a 
            href={config.location.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group hover:text-[#C5A059] transition-colors"
          >
            <p className="text-[#F5F5F0] font-medium group-hover:text-[#C5A059] transition-colors">{config.location.plaza}</p>
            <p className="text-[#94A3B8] group-hover:text-[#F5F5F0] transition-colors">{config.location.address}</p>
            <p className="text-[#C5A059] text-[11px] mt-1 flex items-center">
              <MapPin className="w-3 h-3 mr-1 inline shrink-0" />
              {config.location.crossStreet}
            </p>
          </a>
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
            <a href={`tel:${config.shop.phoneRaw}`} className="btn-brass-outline w-full py-2.5 text-xs min-h-[44px] flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
              Call {config.shop.phone}
            </a>
            <a 
              href={config.location.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-brass-outline w-full py-2.5 text-xs min-h-[44px] flex items-center justify-center"
            >
              <MapPin className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
              Get Directions
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8]">
        <p>© {new Date().getFullYear()} Centennial Hills Barbershop. All rights reserved.</p>
        <p>
          <a href={config.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
            {config.location.address}, {config.location.city}, {config.location.state} {config.location.zip}
          </a>
          {' '}•{' '}
          <a href={`tel:${config.shop.phoneRaw}`} className="hover:text-[#C5A059] transition-colors">
            {config.shop.phone}
          </a>
        </p>
      </div>
    </footer>
  );
}

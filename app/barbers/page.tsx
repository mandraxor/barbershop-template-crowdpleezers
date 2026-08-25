import { Calendar, Phone } from 'lucide-react';
import config from '@/config/shop-config.json';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: `Master Barbers Roster | ${config.shop.name}`,
  description: `Meet our team of master barbers at ${config.shop.name} in Las Vegas: Lead Barber Kash and master chair craftsmen.`,
};

export default function BarbersPage() {
  return (
    <main className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold">The Craftsmen</span>
          <h1 className="font-serif font-black text-3xl sm:text-6xl text-[#F5F5F0] uppercase tracking-tight break-words">Master Barbers Roster</h1>
          <p className="text-[#94A3B8] text-xs sm:text-sm font-sans mt-3">Experienced master craftsmen dedicated to precision skin fades, sharp straight-razor detailing, and classic gentleman grooming.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {config.barbers.map((barber, index) => (
          <div key={index} className="border border-white/10 bg-[#07090D] overflow-hidden flex flex-col sm:flex-row group hover:border-[#C5A059] transition-all">
            
            {/* Portrait Image */}
            <div className="sm:w-2/5 relative h-72 sm:h-auto min-h-[260px] bg-black overflow-hidden shrink-0">
              <img 
                src={barber.image} 
                alt={barber.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-[#C5A059] text-[#C5A059] text-[9px] font-mono uppercase tracking-wider">
                {barber.chair}
              </span>
            </div>

            {/* Details Column */}
            <div className="sm:w-3/5 p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#F5F5F0]">{barber.name}</h3>
                  <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] uppercase">
                    {barber.status}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#C5A059] mb-3">{barber.title}</p>
                
                {/* Specialty Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {barber.specialties.map((spec, tIndex) => (
                    <span key={tIndex} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9.5px] font-mono text-[#94A3B8]">
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-[#94A3B8] font-sans leading-relaxed mb-6">
                  {barber.bio}
                </p>
              </div>

              <a 
                href={barber.booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-brass-primary w-full py-3 min-h-[44px] flex items-center justify-center text-xs text-center font-mono"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Book with {barber.name}
              </a>
            </div>

          </div>
        ))}
      </div>

    </main>
  );
}

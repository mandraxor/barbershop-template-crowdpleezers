import { Calendar, Phone, Clock, Star, Scissors } from 'lucide-react';
import config from '@/config/shop-config.json';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: `Services & Pricing Menu | ${config.shop.name}`,
  description: `Full categorized grooming menu at ${config.shop.name} in Las Vegas. Haircuts from $35, beard trims from $30, kids cuts $35, hot towel shaves from $35.`,
};

export default function ServicesPage() {
  return (
    <main className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold">The Grooming Menu</span>
          <h1 className="font-serif font-black text-3xl sm:text-6xl text-[#F5F5F0] uppercase tracking-tight break-words">Services & Pricing</h1>
          <p className="text-[#94A3B8] text-xs sm:text-sm font-sans mt-3">Precision skin fades, straight-razor detailing, beard sculpting, and kids cuts.</p>
        </div>
      </FadeIn>

      {/* Categorized Menu Book */}
      <div className="space-y-16">
        {config.serviceCategories.map((cat, catIdx) => (
          <div key={catIdx} className="border-t border-white/15 pt-10">
            
            <div className="mb-8">
              <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">Category 0{catIdx + 1}</span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#F5F5F0] mt-1">{cat.category}</h2>
              <p className="text-xs text-[#94A3B8] font-sans mt-1">{cat.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
              {cat.services.map((service, sIdx) => (
                <div key={sIdx} className="space-y-2 group">
                  <div className="flex items-baseline justify-between font-bold">
                    <span className="font-serif text-lg text-[#F5F5F0] group-hover:text-[#C5A059] transition-colors">{service.name}</span>
                    <span className="editorial-leader"></span>
                    <span className="font-mono text-base text-[#C5A059] shrink-0 font-bold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-mono text-[#94A3B8]">
                    <span className="font-sans text-xs text-[#94A3B8] leading-relaxed max-w-md">{service.description}</span>
                    <span className="shrink-0 ml-4 px-2 py-0.5 border border-white/10">{service.duration}</span>
                  </div>
                  <div className="pt-2">
                    <a href={config.shop.booksyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-[10px] font-mono text-[#C5A059] hover:underline uppercase tracking-wider font-semibold">
                      Book Service →
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Persistent CTA Banner */}
      <div className="mt-20 border border-[#C5A059]/40 bg-[#07090D] p-8 sm:p-12 text-center space-y-6">
        <h3 className="font-serif text-2xl sm:text-4xl text-[#F5F5F0]">Ready For An Impeccable Cut?</h3>
        <p className="text-sm text-[#94A3B8] font-sans max-w-xl mx-auto">Walk-ins welcomed daily. Bookings recommended to secure your preferred chair.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={config.shop.booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-primary">
            Reserve on Booksy
          </a>
          <a href={`tel:${config.shop.phoneRaw}`} className="btn-brass-outline">
            Call {config.shop.phone}
          </a>
        </div>
      </div>

    </main>
  );
}

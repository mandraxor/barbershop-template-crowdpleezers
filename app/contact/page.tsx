import { MapPin, Phone, Clock, Car, ShieldCheck, Calendar } from 'lucide-react';
import config from '@/config/shop-config.json';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: `Contact, Location & Hours | ${config.shop.name}`,
  description: `Visit ${config.shop.name} at ${config.location.address} in Charleston Decatur Center, Las Vegas NV 89146. Operating hours, parking directions, and FAQ.`,
};

export default function ContactPage() {
  return (
    <main className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold">Charleston Decatur Center</span>
          <h1 className="font-serif font-black text-3xl sm:text-6xl text-[#F5F5F0] uppercase tracking-tight break-words">Location & Contact</h1>
          <p className="text-[#94A3B8] text-xs sm:text-sm font-sans mt-3">4960 W Charleston Blvd, Las Vegas, NV 89146 • Charleston & Decatur</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Contact & Hours Column */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Hours Card */}
          <div className="border border-white/10 p-8 bg-[#07090D] space-y-6">
            <h2 className="font-serif text-2xl text-[#F5F5F0]">Operating Hours</h2>
            <div className="space-y-3 font-mono text-xs">
              {config.hours.schedule.map((sched, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[#94A3B8]">{sched.days}</span>
                  <span className={`font-bold ${sched.isOpen ? 'text-[#C5A059]' : 'text-gray-500'}`}>
                    {sched.hours}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#94A3B8] font-sans">{config.hours.walkinPolicy}</p>
          </div>

          {/* Address Card */}
          <div className="border border-white/10 p-8 bg-[#07090D] space-y-6">
            <h2 className="font-serif text-2xl text-[#F5F5F0]">Lounge Address</h2>
            <div className="space-y-2 font-mono text-xs">
              <p className="text-[#F5F5F0] text-sm font-bold">{config.location.plaza}</p>
              <p className="text-[#94A3B8]">{config.location.address}</p>
              <p className="text-[#C5A059] text-[11px]">{config.location.crossStreet}</p>
            </div>
            <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
              {config.location.directions}
            </p>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a href={`tel:${config.shop.phoneRaw}`} className="btn-brass-outline w-full py-2.5 text-xs text-center font-mono">
                <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                Call {config.shop.phone}
              </a>
              <a href={config.shop.booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-primary w-full py-2.5 text-xs text-center font-mono">
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Book Online (Booksy)
              </a>
            </div>
          </div>

        </div>

        {/* Map Embed Column */}
        <div className="lg:col-span-7 border border-white/10 overflow-hidden h-[450px] lg:h-auto min-h-[400px]">
          <iframe 
            src={config.location.mapEmbedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            title="Crowd Pleezers Barbershop Map"
          />
        </div>

      </div>

      {/* FAQ Accordion Section */}
      <div className="border-t border-white/10 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">Questions & Answers</span>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#F5F5F0] mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {config.faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 pb-6">
              <h3 className="font-serif font-bold text-lg text-[#F5F5F0] mb-2">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] font-sans leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}

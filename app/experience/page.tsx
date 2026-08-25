import { Calendar, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import config from '@/config/shop-config.json';
import { FadeIn } from '@/components/MotionWrapper';

export const metadata = {
  title: `The Experience & Story | ${config.shop.name}`,
  description: `Learn about the Centennial Hills Barbershop experience in Las Vegas: our shop story, hot towel straight-razor ritual, lounge amenities, and verified reviews.`,
};

export default function ExperiencePage() {
  const rituals = [
    {
      step: "01",
      title: "Master Consultation",
      desc: "Every cut starts with a direct one-on-one consultation analyzing your hair texture, growth patterns, head contour, and style goals."
    },
    {
      step: "02",
      title: "Precision Haircut & Fade",
      desc: "Detailed clipper fading, zero-gap foil shaver transitions, and shears texturing performed by licensed veteran master craftsmen."
    },
    {
      step: "03",
      title: "Hot Towel Steam & Lather",
      desc: "Eucalyptus-steamed warm towels open pores and soften coarse facial hair before double-pass straight-razor detailing."
    },
    {
      step: "04",
      title: "Razor Detailing & Tonic",
      desc: "Japanese surgical steel razor perimeter cleanup, soothing aftershave tonic, and matte finish pomade styling."
    }
  ];

  const amenities = [
    "Plush Heavy Leather Barber Chairs",
    "Complimentary Craft Beverages & Refreshments",
    "High-Speed Wi-Fi & Comfortable Lounge",
    "Clean, Sanitized Japanese Steel Tools",
    "Lead Barber Kash & Master Barber Staff",
    "Ample Free Plaza Parking (Centennial Crossroads)"
  ];

  return (
    <main className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold">The Standard</span>
          <h1 className="font-serif font-black text-3xl sm:text-6xl text-[#F5F5F0] uppercase tracking-tight break-words">The Centennial Hills Experience</h1>
          <p className="text-[#94A3B8] text-xs sm:text-sm font-sans mt-3">Where Northwest Las Vegas tradition meets modern precision craftsmanship.</p>
        </div>
      </FadeIn>

      {/* 1. The Shop Story & Atmosphere */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 border-b border-white/10 pb-20">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">Our Story</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F5F0]">Centennial Hills Barbershop of Choice</h2>
          <p className="text-sm text-[#94A3B8] font-sans leading-relaxed">
            Located in the heart of Centennial Crossroads Plaza at 6420 Sky Pointe Dr #120, Centennial Hills Barbershop was established to bring high-standard master barber craftsmanship and genuine community hospitality to Northwest Las Vegas.
          </p>
          <p className="text-sm text-[#94A3B8] font-sans leading-relaxed">
            Led by master barber Kash, our dedicated team takes pride in every cut—from surgical skin fades and classic scissor tapers to hot lather razor shaves and patient precision kids cuts.
          </p>
        </div>
        <div className="lg:col-span-6 h-80 sm:h-96 border border-white/10 overflow-hidden bg-black">
          <img src="/assets/images/lounge-interior.jpg" alt="Centennial Hills Barbershop Lounge" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 2. The 4-Step Shaving & Grooming Ritual */}
      <div className="mb-24 border-b border-white/10 pb-20">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">The Ritual</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F5F0] mt-1">4-Step Master Grooming</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {rituals.map((r, idx) => (
            <div key={idx} className="border-l border-[#C5A059]/40 pl-6 space-y-2">
              <span className="text-xs font-mono text-[#C5A059] font-bold">{r.step}</span>
              <h3 className="font-serif font-bold text-lg text-[#F5F5F0]">{r.title}</h3>
              <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Lounge Amenities */}
      <div className="mb-24 border-b border-white/10 pb-20">
        <div className="border border-white/10 bg-[#07090D] p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">Hospitality</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F5F0] mt-1">Lounge Amenities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-mono text-xs text-[#F5F5F0]">
            {amenities.map((am, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-3 bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{am}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Client Reviews Grid */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">Community</span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F5F5F0] mt-1">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.reviews.map((rev, idx) => (
            <div key={idx} className="border border-white/10 bg-[#07090D] p-6 space-y-3">
              <div className="flex text-[#DFBA68] space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#DFBA68]" />
                ))}
              </div>
              <p className="text-xs text-[#94A3B8] font-sans leading-relaxed italic">
                "{rev.text}"
              </p>
              <div className="pt-3 border-t border-white/10 font-mono text-[11px]">
                <p className="font-bold text-[#F5F5F0]">{rev.author}</p>
                <p className="text-gray-500 text-[10px]">{rev.role} • Cut by {rev.barber}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}

import Link from 'next/link';
import { Calendar, Phone, Clock, Star, Scissors, MapPin } from 'lucide-react';
import config from '@/config/shop-config.json';
import { FadeIn } from '@/components/MotionWrapper';

export default function HomePage() {
  const topServices = config.serviceCategories[0].services.slice(0, 3);
  const featuredBarbers = config.barbers.slice(0, 4);
  const topReviews = config.reviews.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0B0D13] text-[#F5F5F0] overflow-hidden">
      
      {/* 1. CINEMATIC FULL-VIEWPORT HERO */}
      <section className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Image Layer with Zoom */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: "url('/assets/images/hero-interior.jpg')" }}
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D13] via-[#0B0D13]/70 to-[#0B0D13]/40 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center py-20">
          
          <FadeIn delay={0.1}>
            <a href="https://maps.google.com/?q=6420+Sky+Pointe+Dr+%23120,+Las+Vegas,+NV+89131" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#C5A059]/40 bg-[#0B0D13]/80 backdrop-blur-md hover:border-[#C5A059] transition-all min-h-[44px]">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono font-semibold">
                {config.location.plaza} • {config.location.address}
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-[#F5F5F0] leading-none mb-6">
              PRECISION FADES.<br />
              <span className="italic font-light text-[#C5A059]">CLASSIC GROOMING.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="max-w-2xl text-[#94A3B8] text-sm sm:text-base md:text-lg mb-10 font-sans leading-relaxed">
              Centennial Hills premier barbershop featuring Lead Barber Kash and master craftsmen. Specializing in skin fades, beard sculpting, straight-razor detailing, and classic cuts. Walk-ins welcomed daily.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={config.shop.booksyUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-brass-primary text-xs tracking-[0.2em] px-8 py-4 text-center"
              >
                Reserve Your Chair
              </a>
              <Link
                href="/services"
                className="btn-brass-outline text-xs tracking-[0.2em] px-8 py-4 text-center"
              >
                Explore Services Menu
              </Link>
            </div>
          </FadeIn>

        </div>

        {/* Bottom Hero Status Strip */}
        <div className="absolute bottom-8 left-0 right-0 z-10 border-t border-white/10 pt-4 max-w-6xl mx-auto px-6 flex justify-between items-center text-xs text-[#94A3B8] font-mono">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>M-F 8:30-5:30 | Sat 8:00-5:00</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>{config.shop.rating}★ Google ({config.shop.reviewCount} Reviews) • 5.0★ Booksy</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <a href={`tel:${config.shop.phoneRaw}`} className="hover:text-white transition-colors">{config.shop.phone}</a>
          </div>
        </div>

      </section>


      {/* 2. TRUST BADGES & STATS BAR */}
      <section className="bg-[#07090D] border-y border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#DFBA68] font-bold">196+ Reviews</p>
            <p className="text-xs text-[#94A3B8] uppercase tracking-widest mt-1">4.4★ Google Rated</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-bold">5.0 ★</p>
            <p className="text-xs text-[#94A3B8] uppercase tracking-widest mt-1">Top Rated On Booksy</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#DFBA68] font-bold">Lead: Kash</p>
            <p className="text-xs text-[#94A3B8] uppercase tracking-widest mt-1">Master Barber Staff</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-bold">Centennial</p>
            <p className="text-xs text-[#94A3B8] uppercase tracking-widest mt-1">Crossroads Plaza (89131)</p>
          </div>
        </div>
      </section>


      {/* 3. FEATURED TOP SERVICES PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">Precision Menu</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F5F0] mt-2">Signature Barber Services</h2>
          </div>
          <Link href="/services" className="btn-brass-outline mt-6 md:mt-0 text-xs font-mono">
            View All Services & Pricing →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topServices.map((service, idx) => (
            <div key={idx} className="border border-white/10 bg-[#07090D] p-8 flex flex-col justify-between group hover:border-[#C5A059] transition-all">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="font-serif font-bold text-xl text-[#F5F5F0] group-hover:text-[#C5A059] transition-colors">{service.name}</h3>
                  <span className="font-mono text-base text-[#C5A059] font-bold">{service.price}</span>
                </div>
                <p className="text-xs text-[#94A3B8] font-sans leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs font-mono text-gray-500">{service.duration}</span>
                <a href={config.shop.booksyUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#C5A059] hover:underline font-bold">
                  Book Now →
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* 4. MASTER BARBERS TEASER */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">Meet The Team</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F5F0] mt-2">Master Barbers On Staff</h2>
          </div>
          <Link href="/barbers" className="btn-brass-outline mt-6 md:mt-0 text-xs font-mono">
            View Full Team Profiles →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBarbers.map((barber, idx) => (
            <div key={idx} className="border border-white/10 bg-[#07090D] overflow-hidden group hover:border-[#C5A059] transition-all flex flex-col justify-between">
              <div className="relative h-72 overflow-hidden bg-black">
                <img src={barber.image} alt={barber.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-[#C5A059] text-[#C5A059] text-[9px] font-mono uppercase">
                  {barber.chair}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-lg text-[#F5F5F0]">{barber.name}</h3>
                <p className="text-xs font-mono text-[#C5A059] mt-0.5">{barber.title}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {barber.specialties.map((spec, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono text-gray-400">
                      {spec}
                    </span>
                  ))}
                </div>
                <a href={barber.booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-outline w-full mt-5 py-2 text-center text-xs">
                  Book with {barber.name}
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* 5. TOP VERIFIED REVIEWS */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F5F5F0] mt-2">Verified Client Reviews</h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topReviews.map((rev, idx) => (
            <div key={idx} className="border border-white/10 bg-[#07090D] p-8 space-y-4">
              <div className="flex text-[#DFBA68] space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#DFBA68]" />
                ))}
              </div>
              <p className="text-sm text-[#94A3B8] font-sans leading-relaxed italic">
                "{rev.text}"
              </p>
              <div className="pt-4 border-t border-white/10 font-mono text-xs">
                <p className="font-bold text-[#F5F5F0]">{rev.author}</p>
                <p className="text-gray-500 text-[10px]">{rev.role} • Cut by {rev.barber}</p>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* 6. GLOBAL BOOKING CTA BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="border border-[#C5A059]/40 bg-[#07090D] p-8 sm:p-14 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">Walk-ins Welcomed Daily</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F5F0]">Ready For A Precision Cut?</h2>
          <p className="text-sm text-[#94A3B8] font-sans max-w-xl mx-auto">
            Book your appointment online via Booksy 24/7 or walk right in to Centennial Crossroads Plaza in Northwest Las Vegas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href={config.shop.booksyUrl} target="_blank" rel="noreferrer" className="btn-brass-primary min-h-[44px] flex items-center justify-center px-6 py-3 text-xs font-mono">
              Book Appointment on Booksy
            </a>
            <a href={`tel:${config.shop.phoneRaw}`} className="btn-brass-outline min-h-[44px] flex items-center justify-center px-6 py-3 text-xs font-mono">
              <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
              Call {config.shop.phone}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

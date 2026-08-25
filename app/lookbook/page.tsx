'use client';

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import config from '@/config/shop-config.json';
import { FadeIn } from '@/components/MotionWrapper';

export default function LookbookPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Work' },
    { key: 'fades', label: 'Fades & Tapers' },
    { key: 'beards', label: 'Beards & Shaves' },
    { key: 'art', label: 'Hair Art' },
    { key: 'kids', label: 'Kids' },
  ];

  const filteredItems = activeCategory === 'all'
    ? config.lookbook
    : config.lookbook.filter(item => item.category === activeCategory);

  return (
    <main className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#C5A059] font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold">Photo Gallery</span>
            <h1 className="font-serif font-black text-3xl sm:text-6xl text-[#F5F5F0] uppercase tracking-tight break-words">The Lookbook</h1>
            <p className="text-[#94A3B8] text-xs sm:text-sm font-sans mt-2">Captured live from the chairs at {config.location.address} in {config.location.plaza}.</p>
          </div>
          <a href={config.shop.booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-brass-primary mt-6 md:mt-0 px-6 py-3 text-xs font-mono">
            Book Any Style
          </a>
        </div>
      </FadeIn>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 border-b border-white/10 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              activeCategory === cat.key
                ? 'bg-[#C5A059] text-[#0B0D13] font-bold shadow-md'
                : 'bg-[#07090D] border border-white/10 text-[#94A3B8] hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Photo Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="border border-white/10 overflow-hidden group cursor-pointer bg-black">
            <div className="relative h-80 sm:h-96 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D13] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider font-bold">{item.categoryLabel}</span>
                <p className="font-serif font-bold text-base text-[#F5F5F0] mt-1">{item.title}</p>
                <p className="text-[11px] font-mono text-gray-400 mt-1">Cut by {item.barber}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}


import React, { useState } from 'react';
import { BRAND_COLORS } from '../constants';

const ColorGrid: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="colors" className="py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-serif font-bold text-[#651C53] mb-4">Core Color Palette</h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Directly derived from the P&B identity, these colors balance the 'ink' of traditional bookkeeping with the 'air' of modern virtual consulting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {BRAND_COLORS.map((color) => (
            <div 
              key={color.hex}
              className="group relative bg-[#F8FAFC] rounded-2xl border border-slate-100 p-5 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <button 
                className={`w-full h-56 rounded-xl ${color.variable} mb-6 cursor-pointer flex items-end justify-end p-5 shadow-inner transition-transform`}
                onClick={() => copyToClipboard(color.hex)}
                aria-label={`Copy hex code for ${color.name}: ${color.hex}`}
              >
                <span className={`text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${color.isDark ? 'text-white' : 'text-slate-900'}`}>
                  {copied === color.hex ? 'Copied' : 'HEX'}
                </span>
              </button>
              <div className="px-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl font-bold text-[#651C53]">{color.name}</h3>
                  <code className="text-xs font-bold text-[#977993] bg-white px-2 py-1 rounded border border-slate-100">{color.hex}</code>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {color.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorGrid;

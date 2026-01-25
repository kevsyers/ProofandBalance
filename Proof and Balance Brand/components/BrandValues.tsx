
import React from 'react';
import { BRAND_VALUES } from '../constants';

const BrandValues: React.FC = () => {
  return (
    <section id="values" className="py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-5xl font-serif font-bold text-[#651C53] mb-4">Brand DNA</h2>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed font-light italic">
            At Proof & Balance, we treat bookkeeping as a high-end advisory service. These traits guide our client interactions and design decisions. This is a guide to help with the creation of promotional material and how to communicate with clients.
          </p>
        </div>

        <div className="space-y-16">
          {BRAND_VALUES.map((value, idx) => (
            <article key={value.title} className="flex flex-col md:flex-row gap-12 items-start group">
              <div className="w-full md:w-1/3">
                <span className="text-[10px] font-bold text-[#977993] uppercase tracking-[0.3em] mb-4 block" aria-hidden="true">
                  Core Pillar 0{idx + 1}
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#651C53] mb-2 tracking-tighter group-hover:text-[#D97706] transition-colors">{value.title}</h3>
                <p className="text-xs font-bold text-[#D97706] uppercase tracking-[0.2em]">{value.trait}</p>
              </div>
              <div className="w-full md:w-2/3 pt-6 md:pt-10">
                <p className="text-2xl text-slate-800 font-light leading-snug max-w-2xl border-l-2 border-[#977993]/20 pl-10">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;


import React from 'react';
import { TYPOGRAPHY } from '../constants';

const TypographySection: React.FC = () => {
  return (
    <section id="typography" className="py-32 border-b border-slate-100 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-6xl font-serif font-bold text-[#651C53] mb-8">The Stately Type</h2>
            <p className="text-lg text-slate-600 mb-12 font-light">
              Our typography reflects our dual nature: the <span className="text-[#651C53] font-bold">authority</span> of the ledger and the <span className="text-[#977993] font-bold">clarity</span> of modern tech.
            </p>
            
            <div className="space-y-24">
              {TYPOGRAPHY.map((type) => (
                <div key={type.label} className="group">
                  <div className="mb-6">
                    <h3 className="text-3xl font-serif font-bold text-[#651C53] mb-2">{type.label}</h3>
                    <span className="block text-sm font-bold uppercase tracking-[0.3em] text-[#977993]">
                      Primary Font: {type.fontFamily}
                    </span>
                  </div>
                  <p className="text-lg text-slate-600 mb-10 font-light italic">
                    {type.usage}
                  </p>
                  <p className={`text-4xl leading-tight tracking-tight ${type.label.includes('Display') ? 'font-serif font-bold italic text-[#651C53]' : 'text-slate-800'}`}>
                    {type.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-[2rem] p-10 lg:p-16 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-xs font-bold mb-10 text-slate-400 uppercase tracking-[0.2em]">Hierarchy System</h3>
            <div className="space-y-12">
              <div className="group">
                <span className="text-xs font-mono text-slate-600 mb-2 block tracking-widest uppercase font-bold">Hero / 72px</span>
                <div className="text-6xl font-serif font-bold text-[#651C53] leading-[1.1]" aria-hidden="true">Elite Records</div>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-600 mb-2 block tracking-widest uppercase font-bold">H1 / 48px</span>
                <div className="text-4xl font-serif text-slate-800 italic" aria-hidden="true">Financial Insight</div>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-600 mb-2 block tracking-widest uppercase font-bold">Body L / 20px</span>
                <p className="text-xl text-slate-600 font-light">We transform your books from a liability into a strategic asset.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-600 mb-2 block tracking-widest uppercase font-bold">Body R / 16px</span>
                <p className="text-base text-slate-700 leading-relaxed">Our firm provides the stability of a dedicated CFO with the flexibility of a virtual partner. Accuracy is just the starting point.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographySection;

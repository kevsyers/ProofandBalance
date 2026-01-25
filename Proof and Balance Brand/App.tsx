
import React from 'react';
import Navigation from './components/Navigation';
import ColorGrid from './components/ColorGrid';
import TypographySection from './components/TypographySection';
import BrandVoice from './components/BrandVoice';
import BrandValues from './components/BrandValues';
import { PHILOSOPHIES, USAGE_NOTES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#977993] selection:text-white bg-[#FDFCFD]">
      <Navigation />
      
      {/* Hero Section */}
      <header id="identity" className="relative pt-12 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#651C53 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-12 px-4">
               <img 
                 src="http://proofandbalance.com/wp-content/uploads/2026/01/logo.png" 
                 alt="Proof & Balance Official Identity" 
                 className="max-w-sm w-full h-auto drop-shadow-xl" 
               />
            </div>
            
            <div className="max-w-3xl">
              <h1 className="sr-only">Proof & Balance</h1>
              <p className="text-slate-500 text-lg mb-12 font-light max-w-2xl mx-auto">
                Tailored financial partnership for small to medium sized businesses. Whether you want to offload your books or master them alongside a pro, we bring the balance.
              </p>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center space-x-4 w-full max-w-xs">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D97706]/30 to-[#D97706]"></div>
                  <div className="w-2 h-2 rotate-45 border border-[#D97706]"></div>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D97706]/30 to-[#D97706]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#651C53]/[0.02] to-transparent border-l border-slate-50"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#977993]/[0.02] to-transparent border-r border-slate-50"></div>
      </header>

      <BrandValues />

      {/* System Components Section */}
      <section id="system" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-6xl font-serif font-bold text-[#651C53] mb-4">Design System</h2>
            <p className="text-lg text-slate-600 max-w-2xl font-light italic">Building trust and clarity for every business owner.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Button Styles */}
            <div className="space-y-12">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#977993]">Interactive Elements</h3>
              <div className="space-y-8">
                <div className="flex flex-col space-y-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Primary Action (Full Relief)</span>
                  <button className="w-fit bg-[#651C53] text-white px-10 py-4 rounded-lg font-medium shadow-lg hover:bg-[#2A1024] hover:-translate-y-0.5 transition-all duration-300">
                    Get Started Now
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Secondary (Learning Path)</span>
                  <button className="w-fit border border-[#977993] text-[#651C53] px-10 py-4 rounded-lg font-medium hover:bg-[#977993]/5 transition-all">
                    Partner With Us
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Tertiary Link</span>
                  <button className="w-fit text-[#D97706] font-serif italic text-lg hover:underline underline-offset-8 transition-all">
                    Explore our methodologies →
                  </button>
                </div>
              </div>
            </div>

            {/* Card Style */}
            <div className="space-y-12">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#977993]">Containment Strategy</h3>
              <div className="bg-[#FDFCFD] border border-slate-100 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-500 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-1 h-full bg-[#651C53] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-10 h-10 rounded-full bg-[#D97706]/10 flex items-center justify-center mb-8 text-[#D97706]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#651C53] mb-4">Educational Insight</h4>
                <p className="text-slate-600 leading-relaxed font-light mb-8">
                  We don't just deliver reports; we explain them. Our card style is designed to house complex data in a way that feels approachable to busy owners.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-bold text-[#977993] uppercase tracking-widest">
                  <span>Educational Layout</span>
                  <span className="w-8 h-[1px] bg-slate-200"></span>
                  <span>Clarity First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ColorGrid />
      <TypographySection />
      
      {/* Usage Guidelines */}
      <section className="py-32 bg-[#2A1024] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#651C53] opacity-20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-6xl font-serif font-bold text-white mb-4">Small to Medium Sized Business Guidelines</h2>
            <p className="text-slate-400 text-lg font-light italic">Maintaining a professional yet approachable presence for business owners.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {USAGE_NOTES.map((note, idx) => (
              <div key={note.title} className="space-y-6">
                <span className="text-[10px] font-bold text-[#D97706] tracking-[0.4em] uppercase block">Guideline 0{idx + 1}</span>
                <h3 className="text-xl font-serif font-bold text-white">{note.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{note.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandVoice />

      {/* Footer */}
      <footer className="py-24 bg-[#0F080E] text-white border-t border-[#D97706]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-10 md:mb-0">
              <img src="logo.png" alt="Proof and Balance" className="h-20 w-auto mb-6 brightness-0 invert opacity-90" />
              <span className="text-slate-600 text-[10px] uppercase tracking-widest mt-2 block">Professional & Personal Small to Medium Sized Business Partnership</span>
            </div>
            <nav className="grid grid-cols-2 md:grid-cols-3 gap-16" aria-label="Footer links">
               <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-6">Firm</h4>
                  <ul className="text-sm space-y-4 text-slate-400">
                    <li><a href="#" className="hover:text-[#D97706] transition-colors">Our Story</a></li>
                    <li><a href="#" className="hover:text-[#D97706] transition-colors">Small to Medium Sized Business Solutions</a></li>
                    <li><a href="#" className="hover:text-[#D97706] transition-colors">The Partnership Path</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-6">Learning</h4>
                  <ul className="text-sm space-y-4 text-slate-400">
                    <li><a href="#" className="hover:text-[#D97706] transition-colors">Knowledge Base</a></li>
                    <li><a href="#" className="hover:text-[#D97706] transition-colors">Client Workshops</a></li>
                    <li><a href="#" className="hover:text-[#D97706] transition-colors">Financial 101</a></li>
                  </ul>
               </div>
            </nav>
          </div>
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-[0.3em]">
            <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Proof & Balance Bookkeeping. All rights reserved.</div>
            <div className="flex space-x-12">
               <span className="text-slate-300">Offload</span>
               <span className="text-[#977993] font-bold">Partner</span>
               <span className="text-[#D97706]">Master</span>
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        :focus {
          outline: 2px solid #D97706;
          outline-offset: 4px;
        }
      `}</style>
    </div>
  );
};

export default App;

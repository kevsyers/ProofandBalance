
import React from 'react';

const sections = [
  { id: 'identity', label: 'Identity' },
  { id: 'values', label: 'Values' },
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Type' },
  { id: 'system', label: 'System' },
  { id: 'voice', label: 'Voice' }
];

const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100" aria-label="Main Brand Guidelines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-4">
            <img src="http://proofandbalance.com/wp-content/uploads/2026/01/PB-icon.svg" alt="Proof and Balance Logo" className="h-10 w-auto" />
            <span className="hidden sm:inline text-slate-200">|</span>
            <span className="hidden sm:inline font-bold text-slate-800 text-[9px] tracking-[0.3em] uppercase">Boutique Bookkeeping</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-[10px] font-bold tracking-[0.2em] text-slate-500 hover:text-[#651C53] focus:outline-none focus:ring-1 focus:ring-[#D97706] rounded px-2 py-1 uppercase transition-all"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

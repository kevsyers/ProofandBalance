
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const BrandVoice: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generateCopy = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a brand strategist for "Proof & Balance", a boutique virtual bookkeeping service for Small and Medium Sized Businesses (SMBs). 
        Target Audience: Small to medium sized business owners who either want to offload bookkeeping entirely OR want a partner to help them learn and master their books.
        Brand Essence: Professional Rigor meets Personal Connection.
        Tone: "The Guiding Expert"—Authoritative but deeply supportive, empathetic, and patient.
        
        Key Communication Modes:
        1. Relief-based: Focusing on peace of mind and offloading the burden.
        2. Partnership-based: Focusing on education, collaboration, and learning together.
        
        Generate professional and personal copy for the following prompt: "${input}"
        Format the output clearly for a brand style guide, perhaps offering a "Relief" version and a "Partnership" version if applicable.`,
        config: {
          temperature: 0.7,
        }
      });
      setOutput(response.text || 'No response from AI.');
    } catch (error) {
      console.error(error);
      setOutput('Failed to generate brand copy. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="voice" className="py-32 bg-[#651C53] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-serif font-bold mb-8 italic">The Voice of Partnership</h2>
            <p className="text-slate-300 text-xl mb-10 font-light">
              Our voice speaks directly to the <span className="text-white font-medium">small to medium sized business owner</span>. We offer the choice between total relief and shared learning, always delivered with professional precision and a personal touch.
            </p>
            
            <div className="space-y-6">
              <label htmlFor="voice-input" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">
                Draft a communication
              </label>
              <textarea
                id="voice-input"
                rows={4}
                placeholder="e.g., Welcoming a new bakery owner who wants to learn how to read their P&L statements..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#D97706] transition-all resize-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={generateCopy}
                disabled={loading}
                className="group relative w-full bg-[#D97706] hover:bg-[#b45309] text-white font-bold py-5 rounded-xl transition-all disabled:opacity-50 overflow-hidden"
              >
                <span className="relative z-10">{loading ? 'Synthesizing...' : 'Generate Partner-Oriented Copy'}</span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
          
          <div className="bg-[#2A1024] border border-white/5 rounded-3xl p-10 min-h-[400px] flex flex-col shadow-2xl" aria-live="polite">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse"></div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">Tone Analysis Result</h3>
            </div>
            {output ? (
              <div className="max-w-none overflow-y-auto">
                <p className="whitespace-pre-wrap text-slate-200 font-light text-lg leading-relaxed">{output}</p>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-slate-700 italic font-serif">
                Draft a message to see how we balance professional expertise with a small to medium sized business partner's needs...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVoice;

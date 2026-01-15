
import React, { useState, useEffect } from 'react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Amman', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <footer id="contact" className="relative py-40 bg-[#0c0a09]">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-20">
          <span className="text-rose-500 text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">Contact</span>
          <h2 className="font-display text-6xl md:text-8xl text-stone-100 italic mb-8">Let's Connect.</h2>
          
          <div className="flex items-center justify-center gap-3 text-stone-500 mb-12">
             <span className="text-[10px] uppercase tracking-widest font-bold">Amman, Jordan</span>
             <div className="w-1 h-1 rounded-full bg-stone-800"></div>
             <span className="text-[10px] uppercase tracking-widest font-bold">{time} AST</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => handleCopy('farahasbeh@yahoo.com')}
              className="text-2xl md:text-4xl font-display text-stone-300 hover:text-rose-400 transition-colors relative break-all px-4"
            >
              farahasbeh@yahoo.com
              {copied === 'farahasbeh@yahoo.com' && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] bg-rose-500 text-white px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">Saved to clipboard</span>
              )}
            </button>
            <div className="h-px w-24 bg-stone-800"></div>
            <a 
              href="https://linkedin.com/in/farah-abu-asbeh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500 hover:text-white transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="pt-20 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="font-display italic text-2xl text-stone-400">Farah Abu-Asbeh</div>
           <p className="text-[9px] uppercase tracking-[0.2em] text-stone-600 font-bold">&copy; {new Date().getFullYear()} All Rights Reserved</p>
           <a href="#hero" className="w-12 h-12 rounded-full border border-stone-900 flex items-center justify-center hover:bg-rose-500/10 hover:border-rose-500/30 transition-all">
              <i className="fas fa-arrow-up text-[10px] text-stone-500"></i>
           </a>
        </div>
      </div>
    </footer>
  );
};

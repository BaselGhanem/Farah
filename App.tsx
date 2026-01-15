
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-stone-950 flex flex-col items-center justify-center z-[9999]">
        <h1 className="font-display italic text-4xl text-rose-500 animate-pulse tracking-widest">Farah</h1>
        <div className="mt-4 w-32 h-[1px] bg-stone-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-rose-500 animate-[loading_1.2s_ease-in-out_infinite]"></div>
        </div>
        <style>{`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-rose-500/20 selection:text-rose-200">
      {/* Soft Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#0c0a09]">
        <div className="aura-1 absolute -top-[10%] -left-[10%] w-[60%] h-[60%] opacity-40"></div>
        <div className="aura-2 absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] opacity-30"></div>
      </div>

      <Navbar scrolled={scrollY > 50} />
      
      <main>
        <div id="hero"><Hero /></div>
        <Stats />
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
      </main>

      <div id="contact"><Footer /></div>

      {/* Elegant Scroll to Top / CV */}
      <a 
        href="https://raw.githubusercontent.com/PortfolioGate/FarahAbuAsbah/main/Farah%20Abu-Asbeh.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-10 right-10 z-50 glass-card px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-700 hover:border-rose-500/40 hover:scale-105 group ${scrollY > 500 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Resume</span>
        <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center group-hover:bg-rose-500 transition-colors">
          <i className="fas fa-arrow-down text-[10px] text-rose-200"></i>
        </div>
      </a>
    </div>
  );
};

export default App;

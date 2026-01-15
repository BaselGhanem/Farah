
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="text-center lg:text-left z-10">
            <span className="inline-block text-rose-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 animate-pulse">
              HR Strategy & Relations
            </span>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-10 text-stone-100">
              Curating <br />
              <span className="italic font-light text-rose-300">Potential.</span>
            </h1>
            
            <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
              Specializing in the intersection of organizational culture and operational excellence. 
              Bridging gaps with strategic insight and empathy.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <a 
                href="#experience" 
                className="btn-shimmer px-10 py-4 text-stone-900 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-transform hover:scale-105"
              >
                View Journey
              </a>
              <a 
                href="#contact" 
                className="group flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-stone-100"
              >
                Let's Talk 
                <div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-rose-500 transition-colors">
                   <i className="fas fa-chevron-right text-[10px]"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 p-4">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-rose-500/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/PortfolioGate/FarahAbuAsbah/refs/heads/main/Screenshot%202026-01-11%20144756.png" 
                  alt="Farah Abu-Asbeh"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                />
              </div>
              
              {/* Floating Aesthetic Element */}
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-3xl border-rose-500/20 max-w-[200px] hidden md:block animate-[bounce_4s_infinite]">
                 <p className="font-display italic text-2xl text-rose-200">Executive Experience</p>
                 <p className="text-[10px] uppercase tracking-widest text-stone-500 mt-2 font-bold">Amman, Jordan</p>
              </div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose-900/5 blur-[100px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

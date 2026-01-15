
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <span className="text-rose-500 text-[10px] font-bold uppercase tracking-[0.3em]">01. Profile</span>
            <h2 className="font-display text-5xl md:text-6xl text-stone-100 mt-4 italic">Philosophy & <br/>Approach</h2>
          </div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="aspect-square glass rounded-full flex items-center justify-center p-12 border-rose-500/10">
               <i className="fas fa-feather-pointed text-4xl text-rose-400/30"></i>
            </div>
            
            <div className="space-y-8">
              <p className="text-2xl font-display leading-relaxed text-stone-200">
                A dynamic <span className="text-rose-400 italic">HR Professional</span> dedicated to harmonizing human needs with corporate objectives. I view Human Resources as an art of <span className="underline decoration-rose-500/30 underline-offset-8">facilitation and empowerment</span>.
              </p>
              
              <p className="text-stone-400 leading-relaxed font-light">
                From meticulously managing the employee lifecycle to navigating complex Jordanian labor laws, my career has been defined by a commitment to integrity and precision. Whether it's administering payroll or mediating workplace relations, I prioritize clarity and human-centric outcomes.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {['Talent Acquisition', 'Regulatory Compliance', 'Cultural Strategy'].map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-stone-500 border border-stone-800 px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

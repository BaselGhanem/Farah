
import React from 'react';

const skillCollections = [
  {
    title: 'Operational HR',
    skills: ['Recruitment Lifecycle', 'Policy Dev', 'Relations', 'Mediation']
  },
  {
    title: 'Compliance & Legal',
    skills: ['Social Security', 'Labor Laws', 'Payroll', 'Contracts']
  },
  {
    title: 'Technical Arsenal',
    skills: ['Odoo & Kayan', 'Advanced Excel', 'Multilingual', 'Safety Mgmt']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-rose-500 text-[10px] font-bold uppercase tracking-[0.3em]">03. Competencies</span>
          <h2 className="font-display text-5xl text-stone-100 mt-4 italic">Curated Expertise</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-stone-900 border border-stone-900 rounded-[40px] overflow-hidden">
          {skillCollections.map((col, i) => (
            <div key={i} className="bg-[#0c0a09] p-12 hover:bg-stone-950 transition-colors group">
              <h3 className="font-display text-3xl mb-8 text-stone-200 group-hover:text-rose-300 transition-colors">{col.title}</h3>
              <div className="space-y-4">
                {col.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                    <span className="text-xs uppercase tracking-[0.1em] text-stone-500 font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 py-10 glass-card rounded-full border-rose-500/5 px-10">
           {['PHRi Certified', 'B.Sc. English Lit', 'Safety Supervisor L2', 'Labor Specialist'].map(item => (
             <div key={item} className="flex items-center gap-3">
               <i className="fas fa-check text-[10px] text-rose-500"></i>
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">{item}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
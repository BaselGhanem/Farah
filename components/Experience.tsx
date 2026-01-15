
import React from 'react';

const experiences = [
  {
    date: '2022 – 2025',
    role: 'HR Officer',
    company: 'Al-Lewan Constructive',
    desc: 'Led full-cycle HR operations with an emphasis on payroll accuracy, performance metrics, and social security integration. Provided strategic support for labor relations and policy enforcement.'
  },
  {
    date: '2018 – 2021',
    role: 'Assistant Officer',
    company: 'Tusker Apparel Ltd.',
    desc: 'Coordinated workforce recruitment and onboarding. Streamlined attendance systems and acted as a primary liaison for labor regulation compliance in a fast-paced environment.'
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-stone-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 flex justify-between items-end">
            <div>
              <span className="text-rose-500 text-[10px] font-bold uppercase tracking-[0.3em]">02. Career</span>
              <h2 className="font-display text-5xl text-stone-100 mt-4 italic">The Journey</h2>
            </div>
            <div className="text-stone-700 font-display italic text-2xl hidden md:block">Est. 2018</div>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div key={i} className="group grid md:grid-cols-[150px_1fr] gap-12 py-12 border-t border-stone-800 hover:bg-white/[0.01] transition-colors">
                <div className="text-stone-500 font-display italic text-xl">{exp.date}</div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-stone-100">{exp.role}</h3>
                    <div className="h-px flex-1 bg-stone-800 group-hover:bg-rose-900/30 transition-colors"></div>
                    <span className="text-xs uppercase tracking-widest text-rose-400 font-bold">{exp.company}</span>
                  </div>
                  <p className="text-stone-400 leading-relaxed font-light max-w-2xl">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

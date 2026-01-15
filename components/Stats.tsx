
import React from 'react';

const statItems = [
  { label: 'Strategic Years', value: '05', detail: 'Experience' },
  { label: 'Process Control', value: '100', detail: 'Compliance' },
  { label: 'Leadership', value: '02', detail: 'Senior Roles' },
  { label: 'Curated Skills', value: '15+', detail: 'Competencies' },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-stone-900">
          {statItems.map((stat, i) => (
            <div key={i} className={`p-10 text-center ${i !== statItems.length - 1 ? 'lg:border-r lg:border-stone-900' : ''}`}>
              <div className="font-display text-5xl mb-2 text-rose-300">{stat.value}</div>
              <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-1">{stat.label}</div>
              <div className="text-[10px] italic text-stone-600">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <a href="#hero" className="font-display italic text-3xl tracking-tight text-white hover:text-rose-400 transition-colors">
          F<span className="text-rose-500">.</span>
        </a>
        
        <div className={`hidden md:flex gap-8 items-center px-8 py-3 rounded-full transition-all duration-500 ${scrolled ? 'glass border-rose-500/10 shadow-2xl' : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] font-semibold tracking-[0.2em] uppercase text-stone-400 hover:text-rose-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
           <div className="h-8 w-px bg-stone-800 hidden sm:block"></div>
           <a 
            href="https://linkedin.com/in/farah-abu-asbeh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-rose-400 p-2"
           >
             <i className="fa-brands fa-linkedin-in text-sm"></i>
           </a>
        </div>
      </div>
    </nav>
  );
};
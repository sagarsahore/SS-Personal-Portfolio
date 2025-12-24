import React from 'react';

export const Navigation: React.FC = () => {
    
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-6 z-50 mb-12 flex justify-center">
        <div className="flex items-center gap-1 p-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg overflow-x-auto max-w-[90vw]">
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
                Home
            </button>
            <button 
                onClick={() => scrollTo('about')}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
                About
            </button>
            <button 
                onClick={() => scrollTo('projects')}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
                Work
            </button>
             <button 
                onClick={() => scrollTo('experience')}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
                Exp.
            </button>
            <button 
                onClick={() => scrollTo('education')}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
                Edu.
            </button>
            <button 
                onClick={() => scrollTo('certifications')}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
                Awards
            </button>
            <button 
                onClick={() => scrollTo('contact')}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
                Contact
            </button>
        </div>
    </nav>
  );
};
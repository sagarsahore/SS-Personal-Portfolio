import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Career' },
    { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const scrollTo = (id: string) => {
    setActiveTab(id);
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4">
        <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl rounded-full p-1.5 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 whitespace-nowrap ${
                        activeTab === item.id ? 'text-white' : 'text-white/50 hover:text-white'
                    }`}
                >
                    {activeTab === item.id && (
                        <motion.div
                            layoutId="activeNav"
                            className="absolute inset-0 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{item.label}</span>
                </button>
            ))}
        </div>
    </nav>
  );
};
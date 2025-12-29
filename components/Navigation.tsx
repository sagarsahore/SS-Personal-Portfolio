import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

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
    <nav className="fixed top-6 left-0 right-0 z-[100] px-4 md:px-8 pointer-events-none flex justify-center">
        <div className="pointer-events-auto bg-[#121212]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl rounded-full p-1.5 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
            
            {/* Integrated Logo Section - Increased size to text-lg */}
            <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center pl-5 pr-4 cursor-pointer group"
                onClick={() => scrollTo('home')}
            >
                <span className="text-white font-bold tracking-tighter text-lg flex items-center transition-all group-hover:tracking-tight">
                    <span className="text-red-600 mr-px">S.</span>Sahore
                </span>
            </motion.div>

            {/* Divider */}
            <div className="w-px h-5 bg-white/10 mx-1"></div>

            {/* Navigation Items */}
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
            
            {/* Divider */}
            <div className="w-px h-5 bg-white/10 mx-1"></div>

            {/* Resume Download Action */}
            <a 
                href="resume.pdf" 
                download
                className="flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold text-red-400 hover:text-white hover:bg-red-500/20 transition-all duration-300 group whitespace-nowrap relative"
            >
                <FileText size={14} className="group-hover:scale-110 transition-transform" />
                <span>CV</span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            </a>
        </div>
    </nav>
  );
};
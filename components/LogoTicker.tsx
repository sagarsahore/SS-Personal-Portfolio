import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Terminal, 
  Cpu, 
  Container, 
  Flame, 
  Coffee, 
  Music, 
  BrainCircuit, 
  Palette, 
  GitBranch,
  Database
} from 'lucide-react';

const stack = [
  { name: 'PyTorch', icon: <Flame size={24} />, color: 'text-orange-500' },
  { name: 'React', icon: <Atom size={24} />, color: 'text-cyan-400' },
  { name: 'Python', icon: <Terminal size={24} />, color: 'text-blue-400' },
  { name: 'H100 Cluster', icon: <Cpu size={24} />, color: 'text-emerald-400' },
  { name: 'Obsidian', icon: <BrainCircuit size={24} />, color: 'text-purple-400' },
  { name: 'Dark Roast', icon: <Coffee size={24} />, color: 'text-amber-600' },
  { name: 'Figma', icon: <Palette size={24} />, color: 'text-pink-400' },
  { name: 'Docker', icon: <Container size={24} />, color: 'text-blue-500' },
  { name: 'Lo-Fi Beats', icon: <Music size={24} />, color: 'text-green-400' },
  { name: 'Git', icon: <GitBranch size={24} />, color: 'text-red-400' },
  { name: 'Postgres', icon: <Database size={24} />, color: 'text-blue-300' },
];

export const LogoTicker: React.FC = () => {
  return (
    <section className="w-full relative py-8 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-y border-white/5 z-0"></div>
        
        {/* Label - Optional "Personality" touch */}
        <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-[#020204] px-4 py-1 rounded-full border border-white/10 z-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Daily Drivers & Essentials
            </span>
        </div>

        {/* Fade Masks for seamless loop illusion */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#020204] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#020204] to-transparent z-10 pointer-events-none" />

        <div className="flex relative z-0">
            <motion.div 
            className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24 whitespace-nowrap"
            animate={{ x: [0, -1000] }} // Adjusted for roughly the content width
            transition={{ 
                duration: 40, 
                ease: "linear", 
                repeat: Infinity,
            }}
            >
            {[...stack, ...stack, ...stack].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-default transition-all duration-300 hover:scale-105">
                    <div className={`transition-colors duration-300 text-zinc-600 group-hover:${item.color} filter drop-shadow-lg`}>
                        {item.icon}
                    </div>
                    <span className="text-lg font-medium tracking-tight text-zinc-500 group-hover:text-zinc-200 transition-colors">
                        {item.name}
                    </span>
                </div>
            ))}
            </motion.div>
        </div>
    </section>
  );
};
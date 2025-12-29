import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles } from 'lucide-react';
import { Education as EducationType } from '../types';

const educationData: EducationType[] = [
    {
        id: '1',
        degree: 'Ph.D. in Computer Science',
        institution: 'Stanford University',
        year: '2022 - Present',
        description: 'Pioneering research in Mechanistic Interpretability, focusing on reverse-engineering the internal state representations of Large Language Models. Thesis explores "Causal Abstractions in Transformer Circuits", proposing new methods for verifying safety constraints in billion-parameter models.',
        honors: ['Graduate Research Fellowship', 'Dean\'s Scholar', 'NeurIPS Oral Presentation']
    },
    {
        id: '2',
        degree: 'M.S. in Computer Science',
        institution: 'MIT',
        year: '2020 - 2022',
        description: 'Concentration in Artificial Intelligence. Conducted extensive research on adversarial robustness in computer vision systems. Developed a novel gradient-masking detection algorithm. Served as Teaching Assistant for "Intro to Deep Learning" (6.S191).',
        honors: ['GPA: 4.0/4.0', 'Best Thesis Award', 'Siebel Scholar']
    },
    {
        id: '3',
        degree: 'B.S. in Data Science',
        institution: 'UC Berkeley',
        year: '2016 - 2020',
        description: 'Double major in Statistics. Minor in Mathematics. Lead Architect for the Berkeley Data Science Society. Capstone project involved optimizing traffic flow in San Francisco using reinforcement learning agents.',
        honors: ['Summa Cum Laude', 'Phi Beta Kappa', 'Regents Scholar']
    }
];

export const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState(educationData[0].id);
  const activeEdu = educationData.find(e => e.id === activeTab) || educationData[0];

  return (
    <section className="py-24 relative">
       {/* Background Decoration */}
       <div className="absolute right-0 top-20 w-1/2 h-full bg-gradient-to-b from-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Navigation / Timeline */}
          <div className="lg:col-span-4 space-y-2">
             <h2 className="text-3xl font-medium tracking-tight text-white mb-8">Academic<br/>Timeline</h2>
             <div className="space-y-4 relative">
                {/* Vertical Line for Timeline */}
                <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10 z-0 hidden lg:block" />

                {educationData.map((item) => (
                   <button
                     key={item.id}
                     onClick={() => setActiveTab(item.id)}
                     className={`relative z-10 w-full text-left pl-12 pr-6 py-4 rounded-2xl border transition-all duration-300 group ${
                        activeTab === item.id
                        ? 'bg-white/10 border-white/20'
                        : 'bg-transparent border-transparent hover:bg-white/5'
                     }`}
                   >
                      {/* Timeline Dot */}
                      <div className={`absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 z-20 ${
                          activeTab === item.id ? 'bg-indigo-500 border-indigo-500 scale-125 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-[#050505] border-white/20 group-hover:border-white/40'
                      }`} />

                      <div className="flex flex-col">
                         <span className={`text-sm font-mono mb-1 transition-colors ${activeTab === item.id ? 'text-indigo-400' : 'text-zinc-500'}`}>
                            {item.year}
                         </span>
                         <span className={`font-medium text-lg leading-tight transition-colors ${activeTab === item.id ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                            {item.institution}
                         </span>
                      </div>

                      {activeTab === item.id && (
                        <motion.div
                            layoutId="activeGlow"
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-transparent pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                      )}
                   </button>
                ))}
             </div>
          </div>

          {/* Right Column: Active Card Display */}
          <div className="lg:col-span-8 h-full min-h-[500px]">
             <AnimatePresence mode="wait">
                <motion.div
                    key={activeEdu.id}
                    initial={{ opacity: 0, x: 20, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full"
                >
                    <GlassCard className="h-full !p-0 overflow-hidden border-indigo-500/20 shadow-[0_0_50px_rgba(79,70,229,0.1)] flex flex-col">
                        {/* Decorative Header Banner */}
                        <div className="h-32 bg-gradient-to-br from-indigo-900/40 via-[#0a0a0a] to-[#0a0a0a] relative overflow-hidden p-8 flex items-end shrink-0">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                            <div className="absolute top-0 right-0 p-32 bg-indigo-500/20 blur-[100px] rounded-full"></div>

                            {/* Large Degree Title */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-2">
                                    <GraduationCap size={14} /> Degree Certification
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight max-w-2xl">
                                    {activeEdu.degree}
                                </h3>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 md:p-10 space-y-8 flex-1">
                            
                            {/* Metadata Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 border-b border-white/5">
                                <div className="flex items-center gap-3 text-zinc-400">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/5"><Calendar size={18} /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-wider text-white/30">Tenure</span>
                                        <span className="text-sm font-medium text-zinc-200">{activeEdu.year}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-400">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/5"><MapPin size={18} /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-wider text-white/30">Campus</span>
                                        <span className="text-sm font-medium text-zinc-200">{activeEdu.institution}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description / Thesis */}
                            <div className="space-y-4">
                                <h4 className="flex items-center gap-2 text-sm font-medium text-white/80">
                                    <BookOpen size={16} className="text-indigo-400" /> Focus & Thesis
                                </h4>
                                <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                    {activeEdu.description}
                                </p>
                            </div>

                            {/* Honors Tags */}
                            {activeEdu.honors && activeEdu.honors.length > 0 && (
                                <div className="pt-4">
                                    <h4 className="flex items-center gap-2 text-sm font-medium text-white/80 mb-4">
                                        <Award size={16} className="text-amber-400" /> Distinctions
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {activeEdu.honors.map((honor, idx) => (
                                            <div 
                                                key={idx} 
                                                className="flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-amber-500/5 border border-amber-500/20 text-amber-200/90 text-sm hover:bg-amber-500/10 transition-colors cursor-default"
                                            >
                                                <Sparkles size={12} className="text-amber-400" />
                                                {honor}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Interactive Footer (Glitchy ID) */}
                        <div className="px-8 py-4 bg-[#050505] border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest shrink-0">
                            <span>ID: {Math.random().toString(36).substring(7).toUpperCase()}</span>
                            <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> Verified</span>
                        </div>
                    </GlassCard>
                </motion.div>
             </AnimatePresence>
          </div>
       </div>
    </section>
  );
};
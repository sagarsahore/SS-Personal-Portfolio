import React, { useEffect, useState } from 'react';
import { GlassCard } from './GlassCard';
import { Publication } from '../types';
import { Brain, Network, Scale, Copy, ExternalLink, Check, ArrowUpRight, Monitor, Cpu, BookOpen, Layers, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const publications: Publication[] = [
  {
    id: '1',
    title: 'Stochastic Latent Flows: Unifying Diffusion Models and GANs',
    conference: 'ICLR 2025',
    year: 2025,
    authors: ['S. Sahore', 'I. Sutskever', 'G. Hinton'],
    status: 'Under Review',
    link: '#',
    bibtex: '@inproceedings{sahore2025stochastic, ...}'
  },
  {
    id: '2',
    title: 'Causal Alignment in Large Language Models',
    conference: 'NeurIPS 2024',
    year: 2024,
    authors: ['S. Sahore', 'A. Ng'],
    status: 'Published',
    impactFactor: 'Oral Presentation',
    link: '#',
    bibtex: '@inproceedings{sahore2024causal, ...}'
  }
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-zinc-500 hover:text-white relative"
      title="Copy BibTeX"
    >
      <AnimatePresence mode='wait'>
        {copied ? (
            <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <Check size={14} className="text-emerald-400" />
            </motion.div>
        ) : (
            <motion.div
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <Copy size={14} />
            </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

// Simulated GPU Activity Bar
const GpuActivity = () => {
    const [heights, setHeights] = useState([20, 40, 60, 30, 80]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setHeights(prev => prev.map(() => Math.floor(Math.random() * 80) + 10));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-end gap-1 h-8">
            {heights.map((h, i) => (
                <motion.div 
                    key={i}
                    className="w-1.5 bg-red-500/50 rounded-t-sm"
                    animate={{ height: `${h}%`, opacity: h > 50 ? 1 : 0.5 }}
                    transition={{ duration: 0.5 }}
                />
            ))}
        </div>
    );
};

export const BentoGrid: React.FC = () => {
  return (
    <div className="space-y-16 py-10">
      
      {/* Intro Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Research Lab</h2>
        <p className="text-lg text-zinc-400 leading-relaxed">
            Investigating the fundamental nature of synthetic intelligence through rigorous experimentation and theoretical analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Large Feature Card */}
        <div className="md:col-span-8 group">
            <GlassCard className="h-full !p-8 flex flex-col justify-between bg-[#101010]/80 relative overflow-hidden">
                {/* Subtle Background Animation */}
                <motion.div 
                    className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-red-900/10 blur-[80px] rounded-full pointer-events-none"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-red-500/10 rounded-lg text-red-500 border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                            <Brain size={20} />
                         </div>
                         <span className="text-sm font-medium text-red-500 uppercase tracking-wide flex items-center gap-2">
                            Primary Focus
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                         </span>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-red-100 transition-colors">Generative Modeling</h3>
                    <p className="text-zinc-400 leading-relaxed max-w-xl text-[15px]">
                        Developing novel loss functions for diffusion processes to enhance sample fidelity while reducing inference compute by order of magnitudes. We are pushing the boundaries of what's possible with stochastic flows.
                    </p>
                </div>
                <div className="mt-8 relative z-10">
                    <button className="text-[13px] font-medium text-white flex items-center gap-1 hover:gap-2 transition-all group-hover:text-red-400">
                        Read Whitepaper <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-red-400" />
                    </button>
                </div>
            </GlassCard>
        </div>

        {/* Vertical Stack: Research Areas */}
        <div className="md:col-span-4 flex flex-col gap-5">
             <GlassCard className="!p-6 flex-1 flex flex-col justify-center group hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                     <Network size={18} className="text-zinc-300 group-hover:text-indigo-400 transition-colors" />
                     <h3 className="text-base font-semibold text-white">Neural Architectures</h3>
                </div>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    Sparse mixture-of-experts (MoE) & non-transformer backbones.
                </p>
             </GlassCard>
             
             <GlassCard className="!p-6 flex-1 flex flex-col justify-center group hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                     <Scale size={18} className="text-zinc-300 group-hover:text-emerald-400 transition-colors" />
                     <h3 className="text-base font-semibold text-white">AI Safety</h3>
                </div>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    Formal verification methods for mechanistic interpretability.
                </p>
             </GlassCard>
        </div>

        {/* The Stack */}
        <div className="md:col-span-4">
             <GlassCard className="h-full !p-6">
                 <div className="flex items-center gap-2 mb-4 text-zinc-300">
                    <Layers size={18} />
                    <h3 className="text-sm font-semibold uppercase tracking-wide">Tech Stack</h3>
                 </div>
                 <div className="space-y-1">
                    {['PyTorch Lightning', 'WandB', 'Obsidian', 'Docker'].map((item) => (
                        <motion.div 
                            key={item} 
                            whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.05)' }}
                            className="flex items-center justify-between text-sm py-2 px-2 rounded border border-transparent hover:border-white/5 cursor-default transition-colors"
                        >
                            <span className="text-zinc-400">{item}</span>
                        </motion.div>
                    ))}
                 </div>
             </GlassCard>
        </div>

        {/* Compute - With Telemetry */}
        <div className="md:col-span-4">
             <GlassCard className="h-full !p-6 relative overflow-hidden flex flex-col justify-between">
                 <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 text-zinc-300">
                        <div className="flex items-center gap-2">
                            <Cpu size={18} />
                            <h3 className="text-sm font-semibold uppercase tracking-wide">Cluster</h3>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] uppercase text-emerald-500 font-mono">Online</span>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-white mb-1">8x H100</div>
                    <div className="text-sm text-zinc-500 mb-4">NVIDIA Cluster • 640GB VRAM</div>
                    
                    {/* Telemetry Viz */}
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase">Load</span>
                        <GpuActivity />
                    </div>
                 </div>
                 {/* Decorative Background Icon */}
                 <div className="absolute -bottom-4 -right-4 text-red-900 opacity-10 rotate-12">
                     <Cpu size={120} strokeWidth={1} />
                 </div>
             </GlassCard>
        </div>

        {/* Reading List */}
        <div className="md:col-span-4">
             <GlassCard className="h-full !p-6 hover:bg-white/[0.03] transition-colors cursor-pointer group flex flex-col justify-between">
                 <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-zinc-300">
                            <BookOpen size={18} />
                            <h3 className="text-sm font-semibold uppercase tracking-wide">Reading</h3>
                        </div>
                        <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-sm text-white font-medium group-hover:underline decoration-zinc-600 underline-offset-4">The Bitter Lesson</div>
                    <div className="text-xs text-zinc-500 mt-1">Rich Sutton</div>
                 </div>
                 
                 {/* Progress Bar visual */}
                 <div className="w-full h-1 bg-zinc-800 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-zinc-500 w-[85%] rounded-full"></div>
                 </div>
             </GlassCard>
        </div>
      </div>

      {/* Publications List Table Style */}
      <div className="pt-8">
        <h3 className="text-lg font-semibold text-white mb-6 px-2">Selected Publications</h3>
        
        <div className="space-y-2">
          {publications.map((pub, idx) => (
            <motion.div 
                key={pub.id} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl hover:bg-white/[0.04] transition-colors cursor-default border border-transparent hover:border-white/[0.05]"
            >
                <div className="flex-1 pr-8">
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-[11px] font-semibold text-red-500 uppercase tracking-wide">
                            {pub.conference} {pub.year}
                        </span>
                        {pub.status === 'Under Review' && (
                             <span className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                                <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span>
                                <span className="text-[9px] text-amber-500 font-medium uppercase">In Review</span>
                             </span>
                        )}
                    </div>
                    <h4 className="text-[15px] font-medium text-zinc-200 group-hover:text-white transition-colors">
                        {pub.title}
                    </h4>
                    <p className="text-[13px] text-zinc-500 mt-1">
                        {pub.authors.join(', ')}
                    </p>
                </div>
                
                <div className="flex items-center gap-2 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    <CopyButton text={pub.bibtex} />
                    <a href={pub.link} className="p-1.5 rounded-md hover:bg-white/10 text-zinc-500 hover:text-white transition-colors">
                        <ExternalLink size={14} />
                    </a>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
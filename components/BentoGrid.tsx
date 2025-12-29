import React, { useEffect, useState, memo } from 'react';
import { GlassCard } from './GlassCard';
import { Publication } from '../types';
import { Brain, Network, Scale, Copy, ExternalLink, Check, ArrowUpRight, Cpu, BookOpen, Layers } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-500 hover:text-white relative"
      aria-label="Copy BibTeX Citation"
    >
      <AnimatePresence mode='wait'>
        {copied ? (
            <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Check size={14} className="text-emerald-400" />
            </motion.div>
        ) : (
            <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Copy size={14} />
            </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

const GpuActivity = memo(() => {
    const [heights, setHeights] = useState([20, 40, 60, 30, 80]);
    useEffect(() => {
        const interval = setInterval(() => {
            setHeights(prev => prev.map(() => Math.floor(Math.random() * 80) + 10));
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-end gap-1.5 h-10">
            {heights.map((h, i) => (
                <motion.div 
                    key={i}
                    className="w-2 bg-red-600/40 rounded-t-sm"
                    animate={{ height: `${h}%`, opacity: h > 50 ? 1 : 0.6 }}
                    transition={{ duration: 0.8 }}
                />
            ))}
        </div>
    );
});

export const BentoGrid: React.FC = () => {
  return (
    <div className="space-y-16 py-10">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Research Registry</h2>
        <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Investigating the fundamental nature of synthetic intelligence through rigorous theoretical analysis and scaled-compute experimentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8 group">
            <GlassCard className="h-full !p-10 flex flex-col justify-between bg-[#0a0a0a]/80 border-red-500/10 hover:border-red-500/30">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                         <div className="p-3 bg-red-500/10 rounded-xl text-red-500 border border-red-500/20 group-hover:scale-110 transition-transform">
                            <Brain size={24} />
                         </div>
                         <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-[0.3em] flex items-center gap-2">
                            Primary Focus
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                         </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Generative Latent Manifolds</h3>
                    <p className="text-zinc-400 leading-relaxed max-w-xl text-base font-light">
                        Developing novel loss functions for diffusion processes to enhance sample fidelity while reducing inference compute by 250% on average across H100 benchmarks.
                    </p>
                </div>
                <div className="mt-10">
                    <button className="text-[11px] font-mono font-bold text-white flex items-center gap-3 hover:gap-5 transition-all group-hover:text-red-500 uppercase tracking-[0.2em]">
                        Analyze Protocol <ArrowUpRight size={14} className="text-zinc-600" />
                    </button>
                </div>
            </GlassCard>
        </div>

        <div className="md:col-span-4 flex flex-col gap-5">
             <GlassCard className="!p-8 flex-1 flex flex-col justify-center group hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                     <Network size={20} className="text-indigo-400" />
                     <h3 className="text-lg font-bold text-white">Neural Arch</h3>
                </div>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors font-light">
                    Non-transformer backbones & Sparse MoE.
                </p>
             </GlassCard>
             <GlassCard className="!p-8 flex-1 flex flex-col justify-center group hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                     <Scale size={20} className="text-emerald-400" />
                     <h3 className="text-lg font-bold text-white">Alignment</h3>
                </div>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors font-light">
                    Formal verification for interpretability.
                </p>
             </GlassCard>
        </div>

        <div className="md:col-span-4">
             <GlassCard className="h-full !p-8">
                 <div className="flex items-center gap-2 mb-6 text-zinc-400">
                    <Layers size={20} />
                    <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest">Stack</h3>
                 </div>
                 <div className="space-y-1.5">
                    {['PyTorch JIT', 'WandB SDK', 'CUDA Core', 'JAX'].map((item) => (
                        <div key={item} className="flex items-center justify-between text-xs py-2 px-3 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/5 cursor-default transition-all text-zinc-400 hover:text-white">
                            {item}
                        </div>
                    ))}
                 </div>
             </GlassCard>
        </div>

        <div className="md:col-span-4">
             <GlassCard className="h-full !p-8 relative overflow-hidden flex flex-col justify-between">
                 <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-zinc-400">
                            <Cpu size={20} />
                            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest">H100 Node</h3>
                        </div>
                        <div className="flex items-center gap-1.5 text-emerald-500 font-mono text-[10px] uppercase">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> Online
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 tracking-tight">8x H100</div>
                    <div className="text-xs text-zinc-500 mb-6 uppercase tracking-wider">Cloud Cluster • 640GB VRAM</div>
                    <div className="flex items-center gap-4">
                        <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">Telemetry</span>
                        <GpuActivity />
                    </div>
                 </div>
             </GlassCard>
        </div>

        <div className="md:col-span-4">
             <GlassCard className="h-full !p-8 hover:bg-white/[0.03] transition-colors cursor-pointer group flex flex-col justify-between">
                 <div>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-zinc-400">
                            <BookOpen size={20} />
                            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest">Reading</h3>
                        </div>
                        <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-red-500 transition-colors" />
                    </div>
                    <div className="text-lg text-white font-bold group-hover:text-red-500 transition-colors">The Bitter Lesson</div>
                    <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Rich Sutton</div>
                 </div>
                 <div className="w-full h-1 bg-zinc-900 rounded-full mt-8 overflow-hidden">
                    <div className="h-full bg-red-600/50 w-[85%] rounded-full shadow-[0_0_10px_rgba(220,38,38,0.3)]"></div>
                 </div>
             </GlassCard>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5">
        <h3 className="text-xl font-bold text-white mb-8">Selected Academic Publications</h3>
        <div className="space-y-3">
          {publications.map((pub, idx) => (
            <motion.div 
                key={pub.id} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/5"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest">
                            {pub.conference} • {pub.year}
                        </span>
                        {pub.status === 'Under Review' && (
                             <span className="px-2 py-0.5 rounded-full bg-amber-500/5 border border-amber-500/20 text-[9px] text-amber-500 font-bold uppercase tracking-widest">
                                In Review
                             </span>
                        )}
                    </div>
                    <h4 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">
                        {pub.title}
                    </h4>
                </div>
                <div className="flex items-center gap-3 mt-4 md:mt-0 md:opacity-0 group-hover:opacity-100 transition-all">
                    <CopyButton text={pub.bibtex} />
                    <a href={pub.link} className="p-2 rounded-lg hover:bg-white/10 text-zinc-500 hover:text-white" aria-label="External Link to Paper">
                        <ExternalLink size={18} />
                    </a>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
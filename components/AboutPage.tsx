import React, { useState } from 'react';
import { BackgroundGradients } from './BackgroundGradients';
import { GlassCard } from './GlassCard';
import { 
  ArrowLeft, Users, 
  Linkedin, Twitter, Mail, 
  Sparkles, Shield, Target, Microscope, GraduationCap, 
  Binary, Layers, BrainCircuit, Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Specialized research pillars for Ph.D. profile
const researchVectors = [
    { name: 'Mechanistic Interpretability', sub: 'REF-LLM-01', icon: <BrainCircuit size={18} />, color: 'text-red-400', border: 'border-red-500/20', desc: 'Decoding transformer weights into human-readable logic.' },
    { name: 'Neuromorphic Engineering', sub: 'REF-BIO-77', icon: <Binary size={18} />, color: 'text-indigo-400', border: 'border-indigo-500/20', desc: 'Biological parallels in synthetic weight updates.' },
    { name: 'AI Alignment', sub: 'REF-SAFE-09', icon: <Shield size={18} />, color: 'text-emerald-400', border: 'border-emerald-500/20', desc: 'Formal verification for ethical output bounds.' },
    { name: 'High-Scale Perception', sub: 'REF-CV-04', icon: <Target size={18} />, color: 'text-amber-400', border: 'border-amber-500/20', desc: 'Distributed training systems for computer vision.' }
];

// Timeline milestones focusing on growth and "story"
const evolutionPath = [
    { 
        era: '2022 — PRESENT', 
        title: 'The Researcher', 
        inst: 'Stanford University • Ph.D.', 
        focus: 'Ph.D. Candidate exploring Mechanistic Interpretability. Peeling back layers to find the truth inside the weights.', 
        icon: <Microscope size={20} /> 
    },
    { 
        era: '2020 — 2022', 
        title: 'The Specialist', 
        inst: 'MIT • M.S. CS', 
        focus: 'Master of Science focusing on adversarial robustness. Learning how to build systems that cannot be broken.', 
        icon: <GraduationCap size={20} /> 
    },
    { 
        era: '2018 — 2020', 
        title: 'The Architect', 
        inst: 'Salesforce Ecosystem', 
        focus: 'Senior Engineer. Scaling enterprise CRM architectures for millions of concurrent active users.', 
        icon: <Layers size={20} /> 
    },
    { 
        era: 'ORIGIN', 
        title: 'The Voltage', 
        inst: 'Garage Electronics', 
        focus: 'Building analog synthesizers. Discovering that complex behavior emerges from simple, oscillating circuits.', 
        icon: <Sparkles size={20} /> 
    }
];

const StatBlock = ({ icon: Icon, label, value, color, description }: { icon: any, label: string, value: string, color: string, description: string }) => (
    <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
            <Icon size={40} />
        </div>
        <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400 border border-${color}-500/20 group-hover:scale-110 transition-transform`}>
                <Icon size={20} />
            </div>
            <div>
                <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{label}</div>
            </div>
        </div>
        <p className="text-[11px] text-zinc-600 leading-relaxed font-mono uppercase tracking-wider">{description}</p>
    </div>
);

export const AboutPage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } 
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-red-500/30 selection:text-white pb-20 bg-[#050505]">
      <BackgroundGradients />
      
      {/* Cinematic HUD Overlay - Constant Data Stream */}
      <div className="fixed inset-0 pointer-events-none z-50 p-6 md:p-10 border-[1px] border-white/5 opacity-40">
        <div className="absolute top-10 left-10 font-mono text-[9px] text-white/40 tracking-[0.5em] uppercase">
            Protocol: ARCHITECT_BIO<br/>
            Ref: SS-PHD-ARCHIVE-V4.2
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 flex flex-col gap-4 items-end">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
            <div className="font-mono text-[8px] text-red-500/50 [writing-mode:vertical-rl] tracking-[0.8em] uppercase">
                SIGNAL_EVOLUTION_LOG
            </div>
            <div className="w-px h-24 bg-gradient-to-t from-transparent via-red-500/50 to-transparent" />
        </div>
        <div className="absolute bottom-10 right-10 font-mono text-[9px] text-white/40 tracking-[0.5em] uppercase text-right">
            Registry: STANFORD_VERIFIED<br/>
            Coordinates: 37.4275° N, 122.1697° W
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Navigation back with magnetic feel */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="inline-flex items-center gap-3 text-white/40 hover:text-red-500 transition-all mb-16 group">
                <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-red-500/20 group-hover:border-red-500/40 transition-all shadow-xl">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                </div>
                <span className="text-xs font-mono tracking-[0.3em] uppercase">Return to Terminal</span>
            </Link>
        </motion.div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-32"
        >
            {/* --- HERO: Origin Narrative --- */}
            <motion.div variants={itemVariants} className="max-w-5xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-mono tracking-widest uppercase">
                    <Microscope size={10} /> Initializing Cognitive Dossier
                </div>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
                    The Journey from <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-800 italic">Voltage to Cognition.</span>
                </h1>
                <p className="text-xl md:text-3xl text-zinc-400 leading-relaxed font-light max-w-3xl border-l border-white/10 pl-8">
                    An exploration of biological intuition through the lens of <span className="text-white font-medium italic">synthetic reasoning</span> and <span className="text-red-500 font-medium font-mono tracking-tighter">enterprise architecture.</span>
                </p>
            </motion.div>

            {/* --- CORE CONTENT: The Profile Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <motion.div variants={itemVariants} className="lg:col-span-4">
                    <GlassCard className="!p-0 overflow-hidden relative group aspect-[3/4] shadow-2xl border-white/5 rounded-[2.5rem] bg-[#0a0a0a]">
                        <AnimatePresence>
                            {!imageLoaded && (
                                <motion.div 
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center z-20 bg-[#0a0a0a]"
                                >
                                    <div className="w-8 h-8 rounded-full border-2 border-red-500/20 border-t-red-500 animate-spin" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <motion.img 
                            src="./images/erasebg-transformed.png" 
                            alt="Portrait" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: imageLoaded ? 1 : 0 }}
                            onLoad={() => setImageLoaded(true)}
                            className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 z-10" />
                        <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                            <h2 className="text-2xl font-bold text-white mb-1 tracking-tight">Sagar Sahore</h2>
                            <p className="text-red-500 text-xs font-mono tracking-widest uppercase mb-6">Ph.D. Researcher • ID: SS-7729</p>
                            <div className="flex gap-4">
                                {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                                    <button key={idx} className="p-3 rounded-xl bg-white/5 hover:bg-red-600 transition-all border border-white/10 group/icon">
                                        <Icon size={16} className="text-white/60 group-hover/icon:text-white" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>

                <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8 flex flex-col">
                    <GlassCard className="!p-10 flex-1 border-white/5 bg-[#0a0a0a]/60 rounded-[2.5rem]">
                        <div className="prose prose-invert prose-lg text-zinc-400 font-light leading-relaxed max-w-none">
                            <p className="mb-6 first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-4 first-letter:float-left first-letter:mt-2">
                                My career is a journey from <span className="text-white font-medium">voltage to cognition</span>. It began in a garage building analog synthesizers—learning that complex, beautiful behaviors emerge from simple oscillators. This spark led me to the Ph.D. labs at Stanford.
                            </p>
                            <p className="mb-6">
                                I spend my days <span className="text-red-400 italic">decoding black boxes</span>. My research in Mechanistic Interpretability seeks to reverse-engineer transformer weights, turning opaque neural matrices into human-readable logic. I want to know not just that AI works, but <em>why</em>.
                            </p>
                            <p>
                                I believe in the <span className="text-white font-medium">symmetry of discipline</span>. Whether scaling Salesforce architectures for global enterprises or refining my tactical focus in Muay Thai, my philosophy remains the same: <span className="italic">Rigorous patterns yield predictable excellence.</span>
                            </p>
                        </div>
                    </GlassCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <StatBlock 
                            icon={Users} 
                            label="Mentorship" 
                            value="200+" 
                            color="red" 
                            description="Helping the next generation of engineers bridge the gap between code and cognition."
                         />
                         <StatBlock 
                            icon={Layers} 
                            label="Enterprise Scale" 
                            value="1M+" 
                            color="indigo" 
                            description="Proven ability to architect systems that sustain high-concurrency traffic for global CRM users."
                         />
                    </div>
                </motion.div>
            </div>

            {/* --- EVOLUTION: Growth Timeline --- */}
            <motion.div variants={itemVariants}>
                <div className="flex items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="text-red-500 text-xs font-mono tracking-widest uppercase mb-3">Academic & Engineering Chronology</div>
                        <h2 className="text-4xl font-bold text-white tracking-tight">The Evolution.</h2>
                    </div>
                    <div className="h-px flex-1 bg-white/5 mx-12 hidden md:block" />
                    <Binary className="text-red-500/20" size={40} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {evolutionPath.map((m, idx) => (
                        <GlassCard key={idx} className="!p-8 group hover:border-red-500/30 transition-all border-white/5 rounded-[2rem]">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-2xl bg-white/5 text-red-500 group-hover:scale-110 group-hover:bg-red-500/10 transition-all border border-white/10">
                                    {m.icon}
                                </div>
                                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-red-400/60 transition-colors uppercase tracking-widest">{m.era}</span>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1">{m.title}</h3>
                            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-4">{m.inst}</p>
                            <p className="text-sm text-zinc-400 font-light leading-relaxed">{m.focus}</p>
                            <div className="w-8 h-1 bg-zinc-800 mt-6 group-hover:w-full group-hover:bg-red-500/30 transition-all duration-700" />
                        </GlassCard>
                    ))}
                </div>
            </motion.div>

            {/* --- HUMAN ELEMENT: Discipline Gallery --- */}
            <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Camera size={24} className="text-red-500" />
                            <h2 className="text-4xl font-bold text-white tracking-tight">The Human Element.</h2>
                        </div>
                        <p className="text-zinc-500 text-lg font-light italic">Discipline in life translates to rigor in research.</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800', tag: 'DISCIPLINE', title: 'Muay Thai', desc: 'Tactical focus and strategic thinking under pressure.' },
                        { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800', tag: 'PERSPECTIVE', title: 'Mountain Hiking', desc: 'High stakes, high rewards, and total mental clarity.' },
                        { src: 'https://images.unsplash.com/photo-1520522184824-2f99a74c3910?q=80&w=800', tag: 'STRUCTURE', title: 'Classical Piano', desc: 'The mathematical structure of rhythm and complex melody.' }
                    ].map((img, i) => (
                        <motion.div 
                            key={i} 
                            whileHover={{ y: -10 }}
                            className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 group bg-[#0a0a0a] shadow-2xl"
                        >
                            <img 
                                src={img.src} 
                                alt={img.title} 
                                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 border border-red-600/30 text-red-500 text-[9px] font-mono tracking-widest uppercase mb-4">
                                    {img.tag}
                                </span>
                                <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-red-400 transition-colors">{img.title}</h3>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {img.desc}
                                </p>
                            </div>
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 bg-gradient-to-b from-transparent via-red-500/20 to-transparent h-1 w-full top-0 group-hover:animate-[scan_2s_linear_infinite]" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* --- CLOSING --- */}
            <motion.div variants={itemVariants} className="pt-20 text-center relative">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
                
                <div className="relative z-10">
                    <Sparkles className="text-red-600 mx-auto mb-10 animate-pulse" size={48} />
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 tracking-tighter">
                        Building the future, <br/>
                        <span className="text-zinc-700">to see how far we've come.</span>
                    </h2>
                    
                    <Link to="/">
                        <button className="relative group px-16 py-6 rounded-full bg-white text-black font-bold text-sm tracking-[0.3em] uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.1)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <span className="relative z-10 group-hover:text-white transition-colors">Return to Terminal</span>
                        </button>
                    </Link>
                </div>
            </motion.div>

        </motion.div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
      `}</style>
    </div>
  );
};
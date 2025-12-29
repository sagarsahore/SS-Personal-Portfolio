import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Database, Brain, Network, Code2, FileText, Sparkles, Binary } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';

// Normalized path for the user-provided image
const AVATAR_URL = "./images/erasebg-transformed.png"; 

const AnimatedCounter = ({ value, duration = 2, suffix = '' }: { value: number; duration?: number, suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { 
        duration, 
        ease: [0.25, 1, 0.5, 1]
      });
      return () => controls.stop();
    }
  }, [count, inView, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const FloatingCard = ({ icon, label, sub, className, delay }: { icon: any, label: string, sub: string, className?: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className={`absolute p-4 rounded-2xl bg-[#121212]/95 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-3 z-40 ${className}`}
    >
        <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
            {icon}
        </div>
        <div>
            <div className="text-sm font-semibold text-white">{label}</div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-wide">{sub}</div>
        </div>
    </motion.div>
)

const HeroTag = ({ icon: Icon, children }: { icon: any, children: React.ReactNode }) => (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg`}>
        <Icon size={12} className="text-red-500" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/80">
            {children}
        </span>
    </div>
);

export const Hero: React.FC = () => {
  const transition = { duration: 1.4, ease: [0.25, 1, 0.5, 1] as const };
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-20">
        
        {/* --- LEFT: Typography & Identity --- */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-30 order-2 lg:order-1">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
             <div className="h-px w-8 bg-red-600"></div>
             <span className="text-red-600 font-mono text-xs uppercase tracking-[0.4em] font-bold">
                Identity Profile // Registry 00.1
             </span>
          </motion.div>
          
          <div className="relative mb-10">
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
            >
              Architecting <br />
              <span 
                className="inline-block bg-gradient-to-br from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                style={{ 
                    WebkitBackgroundClip: 'text', 
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
              >
                Cognition
              </span>
            </motion.h1>
            
            <motion.div 
                className="mt-10 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.3 }}
            >
                <HeroTag icon={Sparkles}>PhD Candidate</HeroTag>
                <HeroTag icon={Binary}>AI Systems Engineer</HeroTag>
            </motion.div>

            <motion.div 
                className="mt-8 text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-xl border-l-2 border-red-600/30 pl-8"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.35 }}
            >
                Instilling biological intuition into <span className="text-white font-medium">synthetic reasoning systems.</span>
            </motion.div>
          </div>

          {/* Stats Block */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="flex gap-10 mb-12 px-8 py-5 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl w-fit shadow-2xl"
          >
             <div>
                <div className="text-3xl font-bold text-white flex items-end gap-1 tracking-tighter">
                    <AnimatedCounter value={12} /><span className="text-red-600 text-xl mb-1">+</span>
                </div>
                <div className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-[0.2em] mt-1">Research Papers</div>
             </div>
             <div className="w-px bg-white/10"></div>
             <div>
                <div className="text-3xl font-bold text-white flex items-end gap-1 tracking-tighter">
                    <AnimatedCounter value={850} /><span className="text-red-600 text-xl mb-1">+</span>
                </div>
                <div className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-[0.2em] mt-1">Global Citations</div>
             </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 items-start sm:items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.45 }}
          >
             <button 
                onClick={scrollToAbout}
                className="group relative px-12 py-5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95"
             >
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-3">
                    Explore Research <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
             </button>

             <a 
                href="resume.pdf" 
                download
                className="group px-12 py-5 rounded-full bg-[#121212]/40 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-xl flex items-center gap-3 shadow-xl active:scale-95"
             >
                <FileText size={16} className="text-red-600 group-hover:scale-110 transition-transform" />
                Download CV
             </a>
          </motion.div>
        </div>
        
        {/* --- RIGHT: Avatar Stage --- */}
        <motion.div 
          className="lg:col-span-5 relative h-[500px] md:h-[700px] w-full flex items-end justify-center order-1 lg:order-2 z-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
           {/* Glow Aura */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
           
           <div className="relative z-30 h-full w-full flex items-end justify-center">
                <AnimatePresence>
                    {!imageLoaded && (
                        <motion.div 
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="w-8 h-8 rounded-full border-2 border-red-500/20 border-t-red-500 animate-spin" />
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.img 
                    src={AVATAR_URL} 
                    alt="Sagar Sahore" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                    onLoad={() => setImageLoaded(true)}
                    className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-30"
                    style={{ 
                        display: 'block',
                        imageRendering: 'auto'
                    }}
                />
           </div>

           <div className="absolute inset-0 z-40 pointer-events-none">
                <FloatingCard 
                    delay={1.2}
                    className="top-20 -right-4 md:right-0 rotate-3"
                    icon={<Brain size={20} />}
                    label="Neural Dynamics"
                    sub="Active Research"
                />
                 <FloatingCard 
                    delay={1.4}
                    className="bottom-40 -left-4 md:left-0 -rotate-2"
                    icon={<Network size={20} />}
                    label="Transformers"
                    sub="Architecture"
                />
                 <FloatingCard 
                    delay={1.6}
                    className="top-1/2 right-10 translate-x-1/2 blur-[1px] scale-75 opacity-60"
                    icon={<Database size={20} />}
                    label="Big Data"
                    sub="Infrastructure"
                />
           </div>
           
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-3xl z-0 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};
import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Database, Brain, Network, Award, User, Code2 } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

// PLACEHOLDER: Replace this with your actual avatar image path
const AVATAR_URL = "https://img.freepik.com/premium-photo/3d-avatar-boy-character-student-young-man-with-glasses_988989-2815.jpg?w=800"; 

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
        className={`absolute p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex items-center gap-3 ${className}`}
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

export const Hero: React.FC = () => {
  const transition = { duration: 1.4, ease: [0.25, 1, 0.5, 1] as const };
  const [imgError, setImgError] = useState(false);
  
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-visible">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        
        {/* --- LEFT: Typography & Identity --- */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-20 order-2 lg:order-1">
          
          {/* Identity Tag - RESTORED */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="flex items-center gap-4 mb-6"
          >
             <div className="h-px w-8 bg-red-500"></div>
             <span className="text-red-500 font-mono text-sm uppercase tracking-widest font-semibold">
                Sagar Sahore
             </span>
          </motion.div>
          
          {/* Main Headline */}
          <div className="relative mb-8">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.05] text-white"
              initial={{ opacity: 1, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
            >
              Architecting <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                Cognition
              </span>
            </motion.h1>
            
            <motion.div 
                className="mt-6 text-xl text-zinc-400 font-normal leading-relaxed max-w-lg border-l-2 border-red-500/50 pl-6 space-y-2"
                initial={{ opacity: 1, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.3 }}
            >
                <div className="flex items-center gap-2 text-white font-medium">
                    <Code2 size={18} className="text-red-500" />
                    <span>PhD Candidate & AI Engineer</span>
                </div>
                <p>
                    Instilling biological intuition into synthetic reasoning systems.
                </p>
            </motion.div>
          </div>
          
          {/* Action Area */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-4"
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
          >
             <button 
                onClick={scrollToAbout}
                className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide overflow-hidden"
             >
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                    Explore Research <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
             </button>

             <div className="flex gap-8 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                 <div>
                    <div className="text-2xl font-bold text-white flex items-end gap-1">
                        <AnimatedCounter value={12} /><span className="text-red-500 text-lg mb-1">+</span>
                    </div>
                    <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Papers</div>
                 </div>
                 <div className="w-px bg-white/10"></div>
                 <div>
                    <div className="text-2xl font-bold text-white flex items-end gap-1">
                        <AnimatedCounter value={850} /><span className="text-red-500 text-lg mb-1"></span>
                    </div>
                    <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Citations</div>
                 </div>
             </div>
          </motion.div>
        </div>
        
        {/* --- RIGHT: 3D Avatar Stage --- */}
        <motion.div 
          className="lg:col-span-5 relative h-[500px] md:h-[700px] w-full flex items-end justify-center order-1 lg:order-2"
          initial={{ opacity: 1, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        >
           {/* Back Lighting / Aura */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-600/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
           
           {/* The Avatar */}
           <div className="relative z-10 h-full w-full flex items-end justify-center">
                {/* Image Mask Wrapper - Ensures smooth blending even if image is JPG */}
                <div className="relative h-[90%] w-auto aspect-[3/4] mask-gradient-b flex items-center justify-center">
                    {!imgError ? (
                        <img 
                            src={AVATAR_URL} 
                            alt="Sagar Sahore Avatar" 
                            onError={() => setImgError(true)}
                            className="h-full w-full object-cover object-top drop-shadow-2xl"
                            style={{ filter: "contrast(1.1) saturate(1.1)" }}
                        />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center bg-zinc-900/50 rounded-full border border-white/10">
                            <User size={120} className="text-zinc-700" />
                        </div>
                    )}
                </div>
           </div>

           {/* Floating Info Cards - Adding Depth */}
           <div className="absolute inset-0 z-20 pointer-events-none">
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
           
           {/* Floor Reflection/Shadow */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/50 blur-xl z-0"></div>

        </motion.div>
      </div>
    </section>
  );
};
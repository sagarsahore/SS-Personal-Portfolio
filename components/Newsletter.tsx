import React from 'react';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { Send, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle submission logic here
    console.log("Newsletter subscription initiated");
  };

  return (
    <section className="relative py-24">
      {/* Decorative Blur */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <GlassCard className="relative overflow-hidden !p-0 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Content Side */}
            <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono tracking-widest uppercase w-fit mb-6">
                    <Sparkles size={12} />
                    Weekly Insight
                </div>
                
                <h2 className="text-4xl font-semibold text-white mb-4 tracking-tight">
                    The Latent Space.
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                    Join <span className="text-white font-medium">5,000+ researchers</span> receiving my weekly breakdown of papers, mechanistic interpretability, and the philosophy of AI.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="researcher@lab.edu" 
                        required
                        className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                    />
                    <MagneticButton className="!px-6 !py-3 whitespace-nowrap">
                        Join Waitlist
                    </MagneticButton>
                </form>
                
                <div className="mt-6 flex items-center gap-4 text-xs text-zinc-500">
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full bg-zinc-800 border border-black ring-2 ring-[#020204]" />
                        ))}
                    </div>
                    <p>Read by folks from DeepMind, OpenAI, and Anthropic.</p>
                </div>
            </div>

            {/* Visual Side */}
            <div className="relative bg-gradient-to-br from-indigo-900/20 to-black/40 min-h-[300px] md:min-h-auto flex items-center justify-center overflow-hidden border-l border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                
                {/* Floating Elements Animation */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 max-w-[260px] shadow-2xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                            <Zap size={16} className="text-white" />
                        </div>
                        <div>
                            <div className="h-2 w-20 bg-white/20 rounded-full mb-1"></div>
                            <div className="h-2 w-12 bg-white/10 rounded-full"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                        <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-20 right-10 z-0 p-4 rounded-xl bg-zinc-900/40 backdrop-blur-md border border-white/5 w-[180px]"
                >
                    <div className="flex gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="space-y-2">
                         <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                         <div className="h-1.5 w-1/2 bg-white/10 rounded-full"></div>
                    </div>
                </motion.div>
            </div>
        </div>
      </GlassCard>
    </section>
  );
};
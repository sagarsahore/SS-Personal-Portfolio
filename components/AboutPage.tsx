import React from 'react';
import { BackgroundGradients } from './BackgroundGradients';
import { GlassCard } from './GlassCard';
import { ArrowLeft, Cpu, Dna, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      <BackgroundGradients />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wide">Return to Portfolio</span>
        </Link>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
        >
            {/* Header */}
            <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono tracking-widest uppercase">
                    The Origin Story
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    From Silicon to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-indigo-400">Sentience</span>
                </h1>
                <p className="text-xl text-white/60 leading-relaxed font-light">
                    A deep dive into the philosophy, the failures, and the relentless pursuit of machine intelligence that mirrors our own.
                </p>
            </div>

            {/* Chapter 1 */}
            <GlassCard className="!p-8 md:!p-12">
                <div className="flex items-start gap-6">
                    <div className="hidden md:flex p-4 rounded-2xl bg-white/5 border border-white/10 text-teal-300">
                        <Cpu size={32} />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-medium text-white">The Hardware Lottery</h2>
                        <p className="text-white/70 leading-relaxed">
                            My journey didn't start with code; it started with voltage. Building analog synthesizers in my garage taught me that complex behaviors often emerge from simple, oscillating components. 
                            When I wrote my first neural network in C++, I realized that <strong className="text-white font-medium">intelligence is just a very high-dimensional oscillation</strong>.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            I spent my undergraduate years frustrated by the "black box" nature of Deep Learning. Why did the loss spike? What features is the kernel actually seeing? 
                            This frustration birthed my obsession with <em>Mechanistic Interpretability</em>. I refuse to build gods we cannot understand.
                        </p>
                    </div>
                </div>
            </GlassCard>

            {/* Chapter 2 */}
            <GlassCard className="!p-8 md:!p-12" delay={0.2}>
                <div className="flex items-start gap-6">
                    <div className="hidden md:flex p-4 rounded-2xl bg-white/5 border border-white/10 text-violet-300">
                        <Dna size={32} />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-medium text-white">Biological Inspiration</h2>
                        <p className="text-white/70 leading-relaxed">
                            The human visual cortex doesn't process frames at 60fps. It processes <em>events</em>. It hallucinates stability from chaos. 
                            My research at Stanford focuses on bridging this gap—moving away from dense, frame-based processing towards sparse, event-driven architectures (Spiking Neural Networks) integrated with Transformers.
                        </p>
                        <div className="pl-4 border-l-2 border-violet-500/30 italic text-white/50">
                            "To build a bird, you don't need feathers, but you do need to understand flight."
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Chapter 3 */}
            <GlassCard className="!p-8 md:!p-12" delay={0.4}>
                <div className="flex items-start gap-6">
                    <div className="hidden md:flex p-4 rounded-2xl bg-white/5 border border-white/10 text-indigo-300">
                        <Globe size={32} />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-medium text-white">The Engineering Reality</h2>
                        <p className="text-white/70 leading-relaxed">
                            Theory is beautiful, but production is brutal. My time at Salesforce and OpenAI taught me that the best model is the one that actually runs.
                            I specialize in <strong className="text-white font-medium">Model Compression</strong> and <strong className="text-white font-medium">Inference Optimization</strong>. 
                            There is an art to taking a 175B parameter giant and distilling it into a 7B student that runs on a consumer GPU without losing its soul.
                        </p>
                    </div>
                </div>
            </GlassCard>

             <div className="text-center pt-8 pb-20">
                <p className="text-white/30 text-sm font-mono mb-8">END OF ARCHIVE</p>
                <Link to="/">
                    <button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all">
                        Return to Portfolio
                    </button>
                </Link>
             </div>
        </motion.div>
      </div>
    </div>
  );
};
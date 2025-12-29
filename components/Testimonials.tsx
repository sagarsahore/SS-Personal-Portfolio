import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Sparkles, Quote, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    org: string;
    category: 'Research' | 'Engineering' | 'Leadership';
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "Sagar's work on stochastic flows fundamentally shifted how we approach sampling efficiency. A rare combination of theoretical depth and engineering prowess. His ability to distill complex mathematical concepts into production-ready architectures is unmatched.",
        author: "Dr. Elena Vance",
        role: "Principal Scientist",
        org: "DeepMind",
        category: 'Research',
        image: "https://i.pravatar.cc/150?u=elena"
    },
    {
        id: '2',
        quote: "Few researchers can navigate the complexities of causal alignment with such clarity. His contributions to our lab's interpretability framework were instrumental in identifying critical safety failure modes that were previously invisible.",
        author: "Prof. Marcus Thorne",
        role: "Director",
        org: "Stanford AI Lab",
        category: 'Research',
        image: "https://i.pravatar.cc/150?u=marcus"
    },
    {
        id: '4',
        quote: "Implemented our vision backbone 3x faster than projected while maintaining SOTA accuracy. He builds systems that survive production scale and handles the most volatile compute environments with a calm, rigorous philosophy.",
        author: "Sarah Chen",
        role: "Lead CV Engineer",
        org: "OpenAI",
        category: 'Engineering',
        image: "https://i.pravatar.cc/150?u=sarah"
    }
];

export const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const t = testimonials[currentIndex];

    return (
        <section className="py-24 relative px-4 flex flex-col items-center">
            {/* Background Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl w-full mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-mono tracking-widest uppercase mb-6">
                    <Sparkles size={10} />
                    Literature Gallery
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Verified Perspectives.
                </h2>
            </div>

            <div className="relative w-full max-w-5xl group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <GlassCard className="!p-0 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border-white/[0.05]">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                
                                {/* Left Content: The Testimonial */}
                                <div className="p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-white/[0.01] to-transparent relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAB308]/10 border border-[#EAB308]/20 text-[#EAB308] text-[10px] font-mono tracking-widest uppercase w-fit mb-8">
                                        <ShieldCheck size={12} />
                                        Verified {t.category} Ref
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                                        {t.org}.
                                    </h3>
                                    
                                    <blockquote className="text-xl text-zinc-400 mb-10 leading-relaxed font-light italic">
                                        "{t.quote}"
                                    </blockquote>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full border-2 border-white/10 overflow-hidden grayscale opacity-70">
                                            <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold text-lg">{t.author}</div>
                                            <div className="text-xs text-zinc-500 uppercase tracking-widest">{t.role}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Visual: Identity Stage */}
                                <div className="relative min-h-[300px] md:min-h-full bg-[#0A0A0A]/50 border-l border-white/[0.03] flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay"></div>
                                    
                                    {/* Focus Ring */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full"></div>

                                    <div className="relative p-12 w-full flex flex-col items-center">
                                        <motion.div 
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-48 h-64 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center p-6 shadow-2xl"
                                        >
                                            <Quote size={40} className="text-red-600/20 mb-6" />
                                            <div className="space-y-3 w-full opacity-40">
                                                <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                                                <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                                                <div className="h-1.5 w-2/3 bg-white/10 rounded-full"></div>
                                            </div>
                                            <div className="mt-auto w-full flex justify-between items-end">
                                                <div className="w-8 h-8 rounded bg-red-600/20"></div>
                                                <div className="text-[8px] font-mono text-white/20">AUTH-REF-{t.id}</div>
                                            </div>
                                        </motion.div>
                                        
                                        {/* Floating Badge */}
                                        <motion.div 
                                            animate={{ x: [0, 10, 0], y: [0, 15, 0] }}
                                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute top-1/4 right-12 bg-white/[0.03] backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl hidden md:block"
                                        >
                                            <div className="flex gap-1 mb-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                                            </div>
                                            <div className="h-1 w-16 bg-white/10 rounded-full"></div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 -left-6 md:-left-16 -translate-y-1/2 z-20">
                    <button 
                        onClick={prev}
                        className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white hover:bg-zinc-800 transition-all active:scale-95 shadow-xl"
                    >
                        <ChevronLeft size={24} />
                    </button>
                </div>
                <div className="absolute top-1/2 -right-6 md:-right-16 -translate-y-1/2 z-20">
                    <button 
                        onClick={next}
                        className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white hover:bg-zinc-800 transition-all active:scale-95 shadow-xl"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex gap-2 mt-12">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-red-600' : 'w-2 bg-white/10'}`}
                    />
                ))}
            </div>
            
            <p className="mt-8 text-[10px] font-mono uppercase tracking-[0.3em] text-white/10">
                Official professional documentation archive • 2025
            </p>
        </section>
    );
};
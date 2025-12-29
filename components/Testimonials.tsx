import React, { useState, useRef, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { Beaker, Briefcase, Users, Star, Quote as QuoteIcon, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    org: string;
    category: 'Research' | 'Engineering' | 'Leadership';
}

const testimonials: Testimonial[] = [
    // RESEARCH (Academic & Labs)
    {
        id: '1',
        quote: "Aether's work on stochastic flows fundamentally shifted how we approach sampling efficiency. A rare combination of theoretical depth and engineering prowess.",
        author: "Dr. Elena Vance",
        role: "Principal Scientist",
        org: "DeepMind",
        category: 'Research'
    },
    {
        id: '2',
        quote: "Few researchers can navigate the complexities of causal alignment with such clarity. His contributions to our lab's interpretability framework were instrumental.",
        author: "Prof. Marcus Thorne",
        role: "Director",
        org: "Stanford AI Lab",
        category: 'Research'
    },
    {
        id: '3',
        quote: "His thesis on mechanistic interpretability provided the mathematical grounding we needed to verify our safety constraints. Exceptional academic rigor.",
        author: "Prof. Li Wei",
        role: "Department Chair",
        org: "UC Berkeley",
        category: 'Research'
    },

    // ENGINEERING (Industry & Product)
    {
        id: '4',
        quote: "Implemented our vision backbone 3x faster than projected while maintaining SOTA accuracy. He builds systems that survive production scale.",
        author: "Sarah Chen",
        role: "Lead CV Engineer",
        org: "OpenAI",
        category: 'Engineering'
    },
    {
        id: '5',
        quote: "Transformed our legacy CRM data pipelines into a real-time event architecture. The system he architected still powers our core analytics today.",
        author: "James Holloway",
        role: "VP of Engineering",
        org: "Salesforce",
        category: 'Engineering'
    },
    {
        id: '6',
        quote: "Bridged the gap between experimental ML models and scalable cloud infrastructure. A true full-stack intelligence architect.",
        author: "Dr. Richard Socher",
        role: "Chief Scientist",
        org: "CloudFirst Solutions",
        category: 'Engineering'
    },

    // LEADERSHIP (Mentorship & Soft Skills)
    {
        id: '7',
        quote: "The best mentor I've ever had. He didn't just review my code; he taught me how to think about systems and abstractions.",
        author: "Emily Zhang",
        role: "Junior ML Engineer",
        org: "Anthropic",
        category: 'Leadership'
    },
    {
        id: '8',
        quote: "Led the 'Safe AI' reading group with such charisma that attendance tripled in a month. He makes complex topics accessible and exciting.",
        author: "Dr. Aris Thorne",
        role: "Research Scientist",
        org: "Google Research",
        category: 'Leadership'
    },
    {
        id: '9',
        quote: "His ability to communicate technical risks to non-technical stakeholders saved us months of wasted development time.",
        author: "Michael Ross",
        role: "Product Director",
        org: "Meta",
        category: 'Leadership'
    }
];

type Category = 'All' | 'Research' | 'Engineering' | 'Leadership';

const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'All', label: 'View All', icon: <Star size={14} /> },
    { id: 'Research', label: 'Academic & Labs', icon: <Beaker size={14} /> },
    { id: 'Engineering', label: 'Industry Impact', icon: <Briefcase size={14} /> },
    { id: 'Leadership', label: 'Mentorship', icon: <Users size={14} /> },
];

export const Testimonials: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const filtered = activeCategory === 'All' 
        ? testimonials 
        : testimonials.filter(t => t.category === activeCategory);

    // Reset scroll when category changes
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [activeCategory]);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            
            // Find the width of the first card to determine scroll stride
            // We use querySelector to find the first snap-center element
            const cardElement = container.querySelector('[data-snap-card]');
            
            if (cardElement) {
                const cardWidth = cardElement.getBoundingClientRect().width;
                const gap = 24; // Corresponds to gap-6 (1.5rem = 24px)
                const stride = cardWidth + gap;
                
                container.scrollBy({
                    left: direction === 'left' ? -stride : stride,
                    behavior: 'smooth'
                });
            } else {
                // Fallback if DOM not ready
                container.scrollBy({
                    left: direction === 'left' ? -400 : 400,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section className="py-24 relative">
             {/* Section Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 gap-8 px-4 md:px-0">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                        Literature Gallery
                    </h2>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">
                        A compendium of perspectives on my work, spanning rigorous academic research, scalable engineering, and technical leadership.
                    </p>
                </div>

                {/* Filter Tabs - Dark Pill Design */}
                <div className="flex flex-wrap gap-1 p-1.5 bg-[#121212] rounded-3xl border border-white/10 shadow-2xl">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-medium transition-all duration-300 relative ${
                                activeCategory === cat.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                        >
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeTestimonialTab"
                                    className="absolute inset-0 bg-white/10 rounded-2xl border border-white/5"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {cat.icon} {cat.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Horizontal Scroll Layout */}
            <div className="relative w-full group">
                {/* Gradient Masks for Scroll Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none md:block hidden" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none md:block hidden" />

                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory px-4 md:px-0 no-scrollbar scroll-smooth"
                    style={{ 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none',
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((t) => (
                            <motion.div
                                key={t.id}
                                layout
                                data-snap-card
                                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                // Reduced min-width from 420px to 360px for better fit and faster scanning
                                className="min-w-[85vw] md:min-w-[360px] lg:min-w-[380px] snap-center h-full flex-shrink-0"
                            >
                                <GlassCard 
                                    className="h-full !p-8 md:!p-10 flex flex-col justify-between group transition-all duration-500 bg-[#0e0e0e] border-white/10 hover:border-indigo-500/30 hover:bg-[#151515]"
                                    hoverEffect={true}
                                >
                                    {/* Quote Icon */}
                                    <div className="mb-6">
                                        <QuoteIcon className="text-indigo-500 w-10 h-10 opacity-80" strokeWidth={1.5} />
                                    </div>

                                    {/* Quote Content */}
                                    <div className="relative z-10 flex-grow">
                                        <p className="text-lg text-white/90 leading-relaxed font-light italic mb-8">
                                            "{t.quote}"
                                        </p>
                                    </div>
                                    
                                    {/* Author Block */}
                                    <div className="relative z-10 border-t border-white/5 pt-6 mt-4 flex items-center justify-between">
                                        <div>
                                            <h4 className="text-white font-semibold text-base group-hover:text-indigo-200 transition-colors">
                                                {t.author}
                                            </h4>
                                            <div className="text-sm text-zinc-500 mt-1">
                                                {t.role}
                                            </div>
                                             <div className="text-xs text-indigo-400 mt-1 font-medium">
                                                {t.org}
                                            </div>
                                        </div>
                                        
                                        {/* Category Icon Badge */}
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 border border-white/5 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all shrink-0">
                                            {t.category === 'Research' && <Beaker size={18} />}
                                            {t.category === 'Engineering' && <Briefcase size={18} />}
                                            {t.category === 'Leadership' && <Users size={18} />}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    
                    {/* Padding at end for scroll snap */}
                    <div className="w-12 flex-shrink-0" /> 
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-4 flex justify-between items-center px-4 md:px-0">
                <p className="text-xs text-white/20 font-mono uppercase tracking-widest">
                    References available upon request
                </p>
                <div className="hidden md:flex gap-3">
                     <button 
                        onClick={() => handleScroll('left')}
                        className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all shadow-lg"
                        aria-label="Scroll left"
                     >
                        <ChevronLeft size={20} />
                     </button>
                     <button 
                        onClick={() => handleScroll('right')}
                        className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all shadow-lg"
                        aria-label="Scroll right"
                     >
                        <ChevronRight size={20} />
                     </button>
                </div>
            </div>
        </section>
    );
};
import React from 'react';
import { BackgroundGradients } from './BackgroundGradients';
import { GlassCard } from './GlassCard';
import { ArrowLeft, Cpu, Dna, Globe, Camera, Mic2, Users, Heart, Lightbulb, Music, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const interests = [
    { name: 'Mechanistic Interpretability', icon: <Cpu size={18} />, color: 'text-indigo-300' },
    { name: 'Neuromorphic Computing', icon: <Dna size={18} />, color: 'text-teal-300' },
    { name: 'AI Safety & Alignment', icon: <Globe size={18} />, color: 'text-rose-300' },
    { name: 'Human-Computer Interaction', icon: <Users size={18} />, color: 'text-amber-300' }
];

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop",
        alt: "Keynote Presentation",
        caption: "Keynote: 'The Future of Latent Space' at CVPR 2024",
        colSpan: "col-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        alt: "Yobbee Group",
        caption: "Leading the Yobbee Masters Cohort as President",
        colSpan: "col-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
        alt: "Research Symposium",
        caption: "Brainstorming sessions at the UoA Lab",
        colSpan: "col-span-1"
    }
];

export const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200 pb-20">
      <BackgroundGradients />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10 group">
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                 <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-sm font-medium tracking-wide">Return to Portfolio</span>
        </Link>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
            {/* --- HEADER SECTION --- */}
            <div className="md:col-span-12 mb-8">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono tracking-widest uppercase">
                    The Origin Story
                </div>
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    From Silicon to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-indigo-400">Sentience</span>
                </h1>
                <p className="text-xl text-white/60 leading-relaxed font-light max-w-3xl">
                    A deep dive into the philosophy, the failures, and the relentless pursuit of machine intelligence that mirrors our own.
                </p>
            </div>

            {/* --- COL 1: MAIN BIOGRAPHY (Span 8) --- */}
            <div className="md:col-span-8 flex flex-col gap-6">
                <GlassCard className="!p-8 md:!p-10 h-full">
                    <div className="prose prose-invert prose-lg text-white/70 font-light leading-relaxed">
                        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-indigo-300 first-letter:mr-3 first-letter:float-left">
                            My journey didn't start with code; it started with voltage. Building analog synthesizers in my garage taught me that complex behaviors often emerge from simple, oscillating components.
                        </p>
                        <p>
                            When I wrote my first neural network in C++, I realized that <strong className="text-white">intelligence is just a very high-dimensional oscillation</strong>. This realization fueled my academic pursuit at Stanford and my leadership roles during my Masters.
                        </p>
                        <p>
                            I refuse to build "black boxes." My work focuses on <em>Mechanistic Interpretability</em>—peeling back the layers of billion-parameter transformers to understand not just <em>what</em> they think, but <em>how</em>.
                        </p>
                    </div>
                </GlassCard>
                
                {/* --- LEADERSHIP / YOBBEE SECTION --- */}
                <GlassCard className="!p-0 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-black/60 z-10 pointer-events-none" />
                    <img 
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop" 
                        alt="Yobbee President" 
                        className="w-full h-64 object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="px-2 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase rounded">Leadership</div>
                             <span className="text-white/60 text-sm font-light">2020 - 2021</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-2">President of Yobbee Masters Cohort</h3>
                        <p className="text-white/70 text-sm max-w-xl">
                            Elected by 200+ peers to lead the postgraduate student body. Organized 15+ industry networking events, hackathons, and research symposiums, fostering a bridge between academia and Silicon Valley tech giants.
                        </p>
                    </div>
                </GlassCard>
            </div>

            {/* --- COL 2: SIDEBAR (Span 4) --- */}
            <div className="md:col-span-4 flex flex-col gap-6">
                
                {/* RESEARCH INTERESTS */}
                <GlassCard className="!p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Lightbulb size={20} className="text-white/80" />
                        <h3 className="text-lg font-medium text-white">Research Focus</h3>
                    </div>
                    <div className="space-y-3">
                        {interests.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                                <div className={`${item.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                                    {item.icon}
                                </div>
                                <span className="text-sm text-white/80 font-light">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* HOBBIES */}
                <GlassCard className="!p-6 flex-1">
                     <div className="flex items-center gap-2 mb-6">
                        <Heart size={20} className="text-rose-300/80" />
                        <h3 className="text-lg font-medium text-white">Beyond the Lab</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Analog Synths', 'Hiking', 'Chess (1800 ELO)', 'Sci-Fi Literature', 'Piano', 'Espresso Brewing'].map(hobby => (
                            <span key={hobby} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 hover:text-white hover:border-white/30 transition-all cursor-default">
                                {hobby}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8 relative rounded-xl overflow-hidden h-32 border border-white/10 group">
                        <img 
                            src="https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?q=80&w=600&auto=format&fit=crop" 
                            alt="Hiking" 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute bottom-2 left-2 text-xs font-medium text-white drop-shadow-md">
                            <Mountain size={14} className="inline mr-1" /> Weekend Trekking
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* --- ROW 3: VISUAL GALLERY (Span 12) --- */}
            <div className="md:col-span-12 mt-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-medium text-white flex items-center gap-2">
                        <Camera size={20} className="text-indigo-300" /> Memory Bank
                    </h2>
                    <div className="text-xs text-white/40 font-mono">ARCHIVE 2020-2025</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-96">
                    {galleryImages.map((img, i) => (
                        <div 
                            key={i} 
                            className={`relative rounded-3xl overflow-hidden border border-white/10 group ${img.colSpan} ${i === 2 ? 'hidden md:block' : ''}`}
                        >
                            <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <p className="text-white font-medium text-lg leading-tight mb-1">{img.caption}</p>
                                <p className="text-white/40 text-xs uppercase tracking-widest">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                    
                    {/* Presentations Stats Card */}
                    <GlassCard className="!p-6 flex flex-col justify-center items-center text-center group bg-indigo-900/20">
                         <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-4 group-hover:scale-110 transition-transform">
                            <Mic2 size={24} />
                         </div>
                         <div className="text-3xl font-semibold text-white mb-1">12+</div>
                         <div className="text-sm text-white/60">International Keynotes</div>
                         <div className="mt-4 text-xs text-white/30 border-t border-white/10 pt-4 w-full">
                            San Francisco • London • Tokyo
                         </div>
                    </GlassCard>
                </div>
            </div>
            
             <div className="md:col-span-12 text-center pt-20 pb-10">
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
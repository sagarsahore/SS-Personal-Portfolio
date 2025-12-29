import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Certifications3D } from './Certifications3D';
import { Award, BadgeCheck, BookOpen, ExternalLink, Cloud, Database, BrainCircuit, Calendar, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    category: 'Salesforce' | 'AWS' | 'AI';
    status: 'Verified' | 'Planned';
    credentialId?: string;
    description: string;
}

const certs: Certification[] = [
    // SALESFORCE (3)
    {
        id: 'sf-1',
        title: 'Salesforce Certified Technical Architect',
        issuer: 'Salesforce',
        date: 'June 2021',
        category: 'Salesforce',
        status: 'Verified',
        credentialId: 'CTA-99210',
        description: 'The pinnacle credential for designing high-performance technical solutions on the Salesforce Platform across all domains.'
    },
    {
        id: 'sf-2',
        title: 'Platform Developer II',
        issuer: 'Salesforce',
        date: 'Aug 2020',
        category: 'Salesforce',
        status: 'Verified',
        credentialId: 'PD2-8831',
        description: 'Advanced programmatic capabilities of the Lightning Platform, data modeling, and complex business logic integration.'
    },
    {
        id: 'sf-3',
        title: 'JavaScript Developer I',
        issuer: 'Salesforce',
        date: 'Feb 2020',
        category: 'Salesforce',
        status: 'Verified',
        credentialId: 'JS1-4420',
        description: 'Demonstrated proficiency in JavaScript for Lightning Web Components development and frontend architecture.'
    },

    // AWS (3)
    {
        id: 'aws-1',
        title: 'AWS Certified Machine Learning - Specialty',
        issuer: 'Amazon Web Services',
        date: 'Jan 2024',
        category: 'AWS',
        status: 'Verified',
        credentialId: 'AWS-ML-291',
        description: 'Validation of expertise in building, training, tuning, and deploying machine learning models on AWS.'
    },
    {
        id: 'aws-2',
        title: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: 'Nov 2023',
        category: 'AWS',
        status: 'Verified',
        credentialId: 'AWS-SAA-882',
        description: 'Comprehensive understanding of designing distributed systems that are scalable, reliable, and cost-efficient.'
    },
    {
        id: 'aws-3',
        title: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        date: 'Sep 2023',
        category: 'AWS',
        status: 'Verified',
        credentialId: 'AWS-DVA-110',
        description: 'Proficiency in developing, deploying, and debugging cloud-based applications using AWS services.'
    },

    // AI (Planned)
    {
        id: 'ai-1',
        title: 'TensorFlow Developer Certificate',
        issuer: 'Google',
        date: 'Est. Q3 2025',
        category: 'AI',
        status: 'Planned',
        description: 'Targeting mastery in building scalable computer vision models and natural language processing systems using TensorFlow.'
    },
    {
        id: 'ai-2',
        title: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI',
        date: 'Est. Q4 2025',
        category: 'AI',
        status: 'Planned',
        description: 'Advanced curriculum covering Convolutional Neural Networks, Sequence Models, and Hyperparameter tuning.'
    }
];

export const Certifications: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeCert = certs[activeIndex];

    // Get color based on category
    const getCategoryColor = (cat: string) => {
        switch(cat) {
            case 'Salesforce': return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
            case 'AWS': return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
            case 'AI': return 'text-violet-400 border-violet-500/30 bg-violet-500/10';
            default: return 'text-white border-white/30 bg-white/10';
        }
    };

    return (
        <section className="py-20">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-medium tracking-tight text-white mb-2">Credential Vault</h2>
                    <p className="text-white/50 max-w-xl">
                        Verified technical competencies across Enterprise Cloud, Infrastructure, and Artificial Intelligence domains.
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* LEFT: Content Panel (Span 5) */}
                <div className="lg:col-span-5 order-2 lg:order-1 h-full min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCert.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GlassCard className="!p-8 relative overflow-hidden">
                                {/* Background Glow based on category */}
                                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-20 pointer-events-none ${
                                    activeCert.category === 'Salesforce' ? 'bg-sky-500' : 
                                    activeCert.category === 'AWS' ? 'bg-orange-500' : 'bg-violet-500'
                                }`} />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest border ${getCategoryColor(activeCert.category)}`}>
                                            {activeCert.category}
                                        </div>
                                        {activeCert.status === 'Verified' ? (
                                            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium uppercase tracking-wider">
                                                <BadgeCheck size={14} /> Verified
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-medium uppercase tracking-wider animate-pulse">
                                                <div className="w-2 h-2 rounded-full bg-zinc-500" /> In Progress
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                        {activeCert.title}
                                    </h3>
                                    <div className="text-lg text-white/60 mb-6">{activeCert.issuer}</div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3 text-zinc-400 text-sm">
                                            <Calendar size={16} className="text-zinc-600" />
                                            <span>{activeCert.date}</span>
                                        </div>
                                        {activeCert.credentialId && (
                                            <div className="flex items-center gap-3 text-zinc-400 text-sm">
                                                <Hash size={16} className="text-zinc-600" />
                                                <span className="font-mono text-xs">{activeCert.credentialId}</span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-6">
                                        {activeCert.description}
                                    </p>

                                    {activeCert.status === 'Verified' && (
                                        <div className="mt-8">
                                            <button className="flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white transition-colors">
                                                Verify on Credly <ExternalLink size={12} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </GlassCard>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* RIGHT: 3D Holographic Stage (Span 7) */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                    <Certifications3D 
                        certs={certs} 
                        activeIndex={activeIndex} 
                        onSelect={setActiveIndex} 
                    />
                    
                    {/* Navigation Dots for Mobile (Optional visual cue) */}
                    <div className="flex justify-center gap-2 mt-4 lg:hidden">
                        {certs.map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-white w-4' : 'bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
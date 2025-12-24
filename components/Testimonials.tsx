import React from 'react';
import { GlassCard } from './GlassCard';
import { Quote } from 'lucide-react';

interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    org: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "Aether's work on stochastic flows fundamentally shifted how we approach sampling efficiency. A rare combination of theoretical depth and engineering prowess.",
        author: "Dr. Elena Vance",
        role: "Principal Scientist",
        org: "DeepMind"
    },
    {
        id: '2',
        quote: "Few researchers can navigate the complexities of causal alignment with such clarity. An invaluable collaborator.",
        author: "Prof. Marcus Thorne",
        role: "Director",
        org: "Stanford AI Lab"
    },
    {
        id: '3',
        quote: "Implemented our vision backbone 3x faster than projected while maintaining SOTA accuracy. Truly exceptional.",
        author: "Sarah Chen",
        role: "Lead CV Engineer",
        org: "OpenAI"
    }
];

export const Testimonials: React.FC = () => {
    return (
        <div className="space-y-12">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-8">
                Peer Review
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <GlassCard key={t.id} delay={i * 0.1} className="!p-8 flex flex-col justify-between">
                        <Quote className="text-indigo-400 mb-6 opacity-50" size={32} />
                        
                        <p className="text-white/80 leading-relaxed font-light mb-8 italic">
                            "{t.quote}"
                        </p>
                        
                        <div className="border-t border-white/5 pt-6">
                            <h4 className="text-white font-medium">{t.author}</h4>
                            <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                                {t.role} • <span className="text-indigo-300">{t.org}</span>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};
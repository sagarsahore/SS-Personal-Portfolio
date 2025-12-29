import React from 'react';
import { GlassCard } from './GlassCard.js';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
    {
        id: '1',
        degree: 'Ph.D. in Computer Science',
        institution: 'Stanford University',
        year: '2022 - Present',
        description: 'Specialization in Artificial Intelligence and Computer Vision. Thesis on "Mechanistic Interpretability of Large Scale Transformers".',
        honors: ['Graduate Research Fellowship', 'Dean\'s Scholar']
    },
    {
        id: '2',
        degree: 'M.S. in Computer Science',
        institution: 'Massachusetts Institute of Technology (MIT)',
        year: '2020 - 2022',
        description: 'Concentration in Machine Learning. Research focused on adversarial attacks on neural networks.',
        honors: ['GPA: 4.0/4.0', 'Best Thesis Award']
    },
    {
        id: '3',
        degree: 'B.S. in Data Science & Statistics',
        institution: 'University of California, Berkeley',
        year: '2016 - 2020',
        description: 'Double major in Data Science and Statistics. Minor in Mathematics.',
        honors: ['Summa Cum Laude', 'Phi Beta Kappa']
    }
];

export const Education = () => {
    return (
        <section>
            <h2 className="text-3xl font-medium tracking-tight text-white mb-8">Education</h2>
            
            <div className="grid grid-cols-1 gap-6">
                {educationData.map((edu, index) => (
                    <GlassCard key={edu.id} delay={index * 0.1} className="!p-0 overflow-hidden flex flex-col md:flex-row">
                        {/* Icon Side */}
                        <div className="bg-white/5 p-6 md:w-32 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-2">
                                <GraduationCap size={24} />
                            </div>
                            <span className="text-xs font-mono text-white/40">{edu.year}</span>
                        </div>

                        {/* Content Side */}
                        <div className="p-6 md:p-8 flex-1">
                            <h3 className="text-xl font-medium text-white mb-1">{edu.degree}</h3>
                            <h4 className="text-lg text-indigo-200/80 mb-4 font-light">{edu.institution}</h4>
                            
                            <p className="text-white/60 text-sm leading-relaxed mb-6">
                                {edu.description}
                            </p>

                            {edu.honors && (
                                <div className="flex flex-wrap gap-3">
                                    {edu.honors.map((honor, i) => (
                                        <div key={i} className="flex items-center gap-1.5 text-xs text-amber-200/80 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                                            <Award size={12} />
                                            {honor}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};
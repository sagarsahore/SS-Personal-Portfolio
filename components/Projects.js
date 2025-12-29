import React, { useState } from 'react';
import { GlassCard } from './GlassCard.js';
import { Github, ExternalLink, Code2, Database, Cloud, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    // AI Projects
    {
        id: '1',
        title: 'Sentient',
        description: 'An open-source autonomous agent framework designed for complex reasoning tasks with self-correction capabilities.',
        tags: ['Python', 'LangChain', 'OpenAI'],
        category: 'AI',
        link: '#',
        github: '#',
        featured: true,
        imageGradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20'
    },
    {
        id: '2',
        title: 'NeuraVis',
        description: 'Real-time 3D visualization tool for inspecting activations in transformer attention heads.',
        tags: ['React', 'Three.js', 'WebGL'],
        category: 'AI',
        link: '#',
        imageGradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20'
    },
    {
        id: '3',
        title: 'EchoLatent',
        description: 'Generative audio model mapping sound waves to latent space representations for semantic search.',
        tags: ['PyTorch', 'Audio', 'FastAPI'],
        category: 'AI',
        github: '#',
        imageGradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20'
    },
    {
        id: '4',
        title: 'VisionTransformer-Slim',
        description: 'A pruned version of ViT optimized for edge devices, retaining 95% accuracy with 40% less compute.',
        tags: ['Computer Vision', 'Edge AI'],
        category: 'AI',
        github: '#',
        imageGradient: 'from-blue-500/20 via-indigo-500/20 to-violet-500/20'
    },
    
    // Salesforce Projects
    {
        id: '5',
        title: 'Apex Neural Bridge',
        description: 'Enterprise connector allowing Salesforce Apex triggers to invoke custom ML endpoints asynchronously.',
        tags: ['Salesforce', 'Apex', 'Rest API'],
        category: 'Salesforce',
        link: '#',
        imageGradient: 'from-sky-500/20 via-blue-500/20 to-cyan-500/20'
    },
    {
        id: '6',
        title: 'LWC Analytics Dashboard',
        description: 'Custom Lightning Web Component suite for visualizing complex opportunity pipelines with D3.js integration.',
        tags: ['LWC', 'JavaScript', 'CRM'],
        category: 'Salesforce',
        imageGradient: 'from-blue-600/20 via-sky-600/20 to-indigo-600/20'
    },
    {
        id: '7',
        title: 'Automated Lead Scoring',
        description: 'Einstein-based predictive model implementation to score leads based on historical interaction data.',
        tags: ['Einstein AI', 'Flows'],
        category: 'Salesforce',
        imageGradient: 'from-indigo-400/20 via-purple-400/20 to-fuchsia-400/20'
    },

    // Data Projects
    {
        id: '8',
        title: 'Pipeline Orchestrator',
        description: 'Distributed ETL pipeline capable of processing 2TB of unstructured data daily for model training.',
        tags: ['Apache Airflow', 'Spark', 'AWS'],
        category: 'Data',
        github: '#',
        imageGradient: 'from-rose-500/20 via-pink-500/20 to-fuchsia-500/20'
    },
    {
        id: '9',
        title: 'Market Sentiment Graph',
        description: 'Knowledge graph construction from financial news feeds to detect market anomalies in real-time.',
        tags: ['Neo4j', 'NLP', 'Kafka'],
        category: 'Data',
        link: '#',
        imageGradient: 'from-emerald-600/20 via-green-600/20 to-teal-600/20'
    },
    {
        id: '10',
        title: 'GeoSpatial Crime Analysis',
        description: 'Statistical modeling of urban crime patterns using geospatial clustering algorithms.',
        tags: ['Pandas', 'GeoJSON', 'Scikit'],
        category: 'Data',
        imageGradient: 'from-yellow-500/20 via-orange-500/20 to-red-500/20'
    }
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeCategory);

    const categories = ['All', 'AI', 'Salesforce', 'Data'];

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h2 className="text-3xl font-medium tracking-tight text-white mb-2">Selected Projects</h2>
                    <p className="text-white/50">Bridging enterprise engineering with cutting-edge research.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                                activeCategory === cat ? 'text-white' : 'text-white/40 hover:text-white/70'
                            }`}
                        >
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </button>
                    ))}
                </div>
            </div>
            
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <GlassCard 
                            key={project.id} 
                            className="flex flex-col h-full !p-0 overflow-hidden group min-h-[300px]"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col h-full"
                            >
                                {/* Visual Header */}
                                <div className={`h-36 w-full bg-gradient-to-br ${project.imageGradient} relative overflow-hidden`}>
                                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                                     
                                     {/* Category Icon */}
                                     <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md p-2 rounded-lg border border-white/10 text-white/70">
                                        {project.category === 'AI' && <BrainCircuit size={16} />}
                                        {project.category === 'Salesforce' && <Cloud size={16} />}
                                        {project.category === 'Data' && <Database size={16} />}
                                     </div>

                                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Code2 className="text-white/20 w-12 h-12" />
                                     </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-medium text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2">
                                            {project.github && (
                                                <a href={project.github} className="text-white/40 hover:text-white transition-colors">
                                                    <Github size={18} />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} className="text-white/40 hover:text-white transition-colors">
                                                    <ExternalLink size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-white/50 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </GlassCard>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
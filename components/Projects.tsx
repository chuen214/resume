import React from 'react';
import { ArrowUpRight, Cpu, Code2, Bot, PlayCircle, ExternalLink, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { content } = useLanguage();
  const { projects, ui } = content;
    
  const getIcon = (category: string) => {
    switch (category) {
        case 'AI': return <Bot className="w-6 h-6" />;
        case 'Engineering': return <Cpu className="w-6 h-6" />;
        default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-10 h-1 bg-indigo-500 rounded-full"></span>
                    {ui.headings.projects}
                </h2>
                <p className="text-slate-400">{ui.headings.projectsSubtitle}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
                <div key={idx} className="group relative bg-slate-800 rounded-3xl p-1 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative h-full bg-slate-900 rounded-[22px] p-8 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`p-3 rounded-2xl ${
                                project.category === 'AI' ? 'bg-purple-500/10 text-purple-400' :
                                project.category === 'Engineering' ? 'bg-blue-500/10 text-blue-400' :
                                'bg-green-500/10 text-green-400'
                            }`}>
                                {getIcon(project.category)}
                            </div>
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest border border-slate-700 px-2 py-1 rounded-md">
                                {project.period}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-slate-400 font-medium mb-4">{project.role}</p>
                        
                        <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-col gap-4 mt-auto">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.link && (
                                    <a 
                                        href={project.link.startsWith('http') ? project.link : `${import.meta.env.BASE_URL}${project.link.replace(/^\//, '')}`}
                                        target={project.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl transition-colors w-fit group-hover/btn:translate-x-1"
                                    >
                                        {project.linkType === 'video' ? (
                                            <>
                                                <PlayCircle className="w-4 h-4" />
                                                Watch Video
                                            </>
                                        ) : (
                                            <>
                                                <ExternalLink className="w-4 h-4" />
                                                View Project
                                            </>
                                        )}
                                    </a>
                                )}
                                {project.certificateLink && (
                                    <a 
                                        href={`${import.meta.env.BASE_URL}${project.certificateLink.replace(/^\//, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl transition-colors w-fit group-hover/btn:translate-x-1"
                                    >
                                        <Award className="w-4 h-4" />
                                        Certificate
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Briefcase, Calendar, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { content } = useLanguage();
  const { experience, ui } = content;

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-10 h-1 bg-indigo-500 rounded-full"></span>
              {ui.headings.experience}
            </h2>
            <p className="text-slate-400">{ui.headings.experienceSubtitle}</p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-slate-900 bg-indigo-600 group-hover:scale-125 transition-transform"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                    </h3>
                    <div className="text-lg text-indigo-300 font-medium flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                    </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-wider bg-slate-900 px-3 py-1 rounded-full border border-slate-800 w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-base leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
                            {point}
                        </li>
                    ))}
                </ul>
                {exp.certificateLink && (
                    <div className="mt-4 pt-4 border-t border-slate-800">
                        <a 
                            href={`${import.meta.env.BASE_URL}${exp.certificateLink.replace(/^\//, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            View Certificate
                        </a>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

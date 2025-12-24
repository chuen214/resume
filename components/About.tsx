import React from 'react';
import { GraduationCap, Award, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { content } = useLanguage();
  const { profile, education, ui, skills } = content;
  
  // Extract languages from skills to keep logic similar or use hardcoded if preferred. 
  // But based on data structure, languages are in skills. Let's use the ones from skills with category 'Language'.
  const spokenLanguages = skills.filter(s => s.category.includes('Language') || s.category === 'Language');

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-indigo-500 rounded-full"></span>
              {ui.headings.about}
            </h2>
            <div className="text-slate-300 text-lg leading-relaxed space-y-6 text-justify">
              <p>{profile.about}</p>
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Languages className="w-5 h-5 text-indigo-400" />
                    {ui.headings.languages}
                </h3>
                <div className="flex flex-wrap gap-3">
                    {spokenLanguages.map((lang, idx) => (
                        <span key={idx} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300">
                            {lang.name}
                        </span>
                    ))}
                </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-indigo-500/10 rounded-xl">
                        <GraduationCap className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{ui.headings.education}</h3>
                    </div>
                </div>

                <div className="space-y-8">
                    {education.map((edu, idx) => (
                        <div key={idx} className="relative">
                            <h4 className="text-xl font-semibold text-white">{edu.institution}</h4>
                            <p className="text-indigo-400 font-medium">{edu.degree}</p>
                            <p className="text-sm text-slate-400 mt-1">{edu.period}</p>
                            
                            <div className="mt-4 p-4 bg-slate-800 rounded-xl border border-slate-700/50">
                                <div className="flex items-start gap-3 mb-2">
                                    <Award className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                    <p className="text-slate-300 font-medium">GPA: {edu.gpa}</p>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {edu.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

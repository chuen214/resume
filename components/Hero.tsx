import React from 'react';
import { Download, ChevronDown, MapPin, Mail, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { profile } = content;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-900/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-900 shadow-2xl bg-slate-800"
            />
          </div>

          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <span className="text-indigo-400 text-sm font-medium tracking-wide">OPEN TO WORK • GRADUATING JUNE 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
            {profile.name}
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-500" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-500" />
              <span>{profile.email}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              {profile.buttons.resume}
            </a>
            <div className="flex gap-3">
              <a href={`mailto:${profile.email}`} className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full text-slate-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href={`https://${profile.linkedin}`} className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full text-slate-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`https://${profile.github}`} className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full text-slate-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
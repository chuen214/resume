import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: SectionId.ABOUT, label: content.ui.nav.about },
    { id: SectionId.EXPERIENCE, label: content.ui.nav.experience },
    { id: SectionId.PROJECTS, label: content.ui.nav.projects },
    { id: SectionId.SKILLS, label: content.ui.nav.skills },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <div className="text-xl font-bold text-white tracking-tight cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-indigo-500">ME</span>.PORTFOLIO
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="h-6 w-px bg-slate-700"></div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? 'EN' : '中文'}</span>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-slate-300 border border-slate-700 px-2 py-1 rounded-md"
          >
            {language === 'en' ? 'EN' : '中'}
          </button>
          
          <button 
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
              {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl md:hidden">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-lg font-medium text-slate-300 py-2 border-b border-slate-800 last:border-0"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        )}
      </div>
    </header>
  );
};

export default Header;

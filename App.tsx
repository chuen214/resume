import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ChatWidget from './components/ChatWidget';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const MainContent: React.FC = () => {
  const { content } = useLanguage();
  
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      
      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {content.ui.footer.rights}</p>
        <p className="mt-2 text-xs">{content.ui.footer.powered}</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;

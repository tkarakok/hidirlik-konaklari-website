import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <button 
          onClick={scrollToAbout}
          className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
        >
          {t('hero.button')}
        </button>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 animate-bounce text-white"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
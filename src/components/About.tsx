import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="/images/hotel.jpg" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('about.title')}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-primary text-4xl font-bold mb-2">2019</h3>
                <p className="text-gray-600">{t('about.established')}</p>
              </div>
              <div className="text-center">
                <h3 className="text-primary text-4xl font-bold mb-2">19</h3>
                <p className="text-gray-600">{t('about.rooms')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
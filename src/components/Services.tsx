import React from 'react';
import { Coffee, Utensils, Wifi, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  translationKey: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image, translationKey }) => {
  const { t } = useLanguage();
  
  return (
    <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={t(`services.${translationKey}.title`)} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded-full p-2 text-white mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{t(`services.${translationKey}.title`)}</h3>
        </div>
        <p className="text-gray-600">{t(`services.${translationKey}.description`)}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      translationKey: "breakfast",
      icon: <Coffee size={20} />,
      image: "./images/service1.jpg"
    },
    {
      translationKey: "cuisine",
      icon: <Utensils size={20} />,
      image: "./images/service2.jpg"
    },
    {
      translationKey: "wifi",
      icon: <Wifi size={20} />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      translationKey: "tours",
      icon: <MapPin size={20} />,
      image: "./images/service4.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('services.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title=""
              description=""
              icon={service.icon}
              image={service.image}
              translationKey={service.translationKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
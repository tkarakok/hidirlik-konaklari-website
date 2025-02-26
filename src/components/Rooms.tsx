import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface RoomCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  translationKey: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description, features, image, translationKey }) => {
  const { t } = useLanguage();
  
  return (
    <div className="room-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={t(`rooms.${translationKey}.title`)} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-3">{t(`rooms.${translationKey}.title`)}</h3>
        <p className="text-gray-600 mb-4">{t(`rooms.${translationKey}.description`)}</p>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold text-gray-800 mb-2">{t('rooms.features')}</h4>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-600 text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Rooms: React.FC = () => {
  const { t, language } = useLanguage();
  
  const roomFeatures = {
    ottoman: {
      en: ["King Size Bed", "Private Balcony", "Hammam-style Bathroom", "Sitting Area", "Air Conditioning", "Mini Bar"],
      tr: ["Kral Boy Yatak", "Özel Balkon", "Hamam Tarzı Banyo", "Oturma Alanı", "Klima", "Mini Bar"]
    },
    heritage: {
      en: ["Queen Size Bed", "Garden View", "En-suite Bathroom", "Wooden Ceiling", "Air Conditioning", "Safe"],
      tr: ["Kraliçe Boy Yatak", "Bahçe Manzarası", "Özel Banyo", "Ahşap Tavan", "Klima", "Kasa"]
    },
    family: {
      en: ["1 Double & 2 Single Beds", "Courtyard View", "Large Bathroom", "Seating Area", "Air Conditioning", "Tea/Coffee Facilities"],
      tr: ["1 Çift & 2 Tek Kişilik Yatak", "Avlu Manzarası", "Geniş Banyo", "Oturma Alanı", "Klima", "Çay/Kahve İmkanları"]
    }
  };

  const rooms = [
    {
      translationKey: "ottoman",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: language === 'en' ? roomFeatures.ottoman.en : roomFeatures.ottoman.tr
    },
    {
      translationKey: "heritage",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      features: language === 'en' ? roomFeatures.heritage.en : roomFeatures.heritage.tr
    },
    {
      translationKey: "family",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      features: language === 'en' ? roomFeatures.family.en : roomFeatures.family.tr
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('rooms.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard 
              key={index}
              title=""
              description=""
              features={room.features}
              image={room.image}
              translationKey={room.translationKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
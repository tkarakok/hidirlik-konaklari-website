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
    standart1: {
      en: ["XL Size Bed", "Balcony", "Private Bathroom", "Sitting Area", "Cattle Set","Air Conditioning", "Mini Bar", "Safe"],
      tr: ["XL Boy Yatak", "Balkon", "Özel Banyo", "Oturma Alanı", "Klima","Ketıl Seti", "Mini Bar", "Kasa"]
    },
    standart2: {
      en: ["1 Double & 1 Single Beds", "Garden View", "Private Bathroom", "Seating Area", "Cattle Set","Air Conditioning", "Safe"],
      tr: ["1 Çift & 1 Tek Kişilik Yatak", "Bahçe Manzarası", "Özel Banyo","Oturma Alanı", "Ketıl Seti", "Klima", "Kasa"]
    },
    family: {
      en: ["1 Double & 1 Single Beds","Balcony", "Safranbolu View", "Private Bathroom", "Seating Area", "Air Conditioning", "Tea/Coffee Facilities"],
      tr: ["1 Çift & 2 Tek Kişilik Yatak", "Balkon", "Safranbolu Manzarası", "Özel Banyo", "Oturma Alanı", "Klima", "Çay/Kahve İmkanları"]
    }
  };

  const rooms = [
    {
      translationKey: "standart1",
      image: '/images/standart1.jpg',
      features: language === 'en' ? roomFeatures.standart1.en : roomFeatures.standart1.tr
    },
    {
      translationKey: "standart2",
      image: '/images/standart2.jpg',
      features: language === 'en' ? roomFeatures.standart2.en : roomFeatures.standart2.tr
    },
    {
      translationKey: "family",
      image: '/images/family.jpg',
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
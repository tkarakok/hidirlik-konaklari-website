import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../context/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery: React.FC = () => {
  const { t, language } = useLanguage();
  
  const galleryImages = {
    tr: [
      {
        url: '/images/background.jpg',
        caption: "Otel"
      },
      {
        url: '/images/oda1.jpg',
        caption: "Oda"
      },
      {
        url: '/images/oda2.jpg',
        caption: "Oda"
      },
      {
        url: '/images/oda3.jpg',
        caption: "Oda"
      },
      {
        url: '/images/banyo1.jpg',
        caption: "Banyo"
      },
      {
        url: '/images/manzara1.jpg',
        caption: "Manzara"
      },
      {
        url: '/images/oda4.jpg',
        caption: "Oda"
      },
      {
        url: '/images/restaurant.jpg',
        caption: "Kahvaltı Salonu"
      },
      {
        url: '/images/oda5.jpg',
        caption: "Oda"
      },
      {
        url: '/images/banyo2.jpg',
        caption: "Banyo"
      },
      {
        url: '/images/manzara2.jpg',
        caption: "Manzara"
      },
      {
        url: '/images/oda6.jpg',
        caption: "Oda"
      },
      {
        url: '/images/oda7.jpg',
        caption: "Oda"
      },
    ],
    en: [
      {
        url: '/images/background.jpg',
        caption: "Otel"
      },
      {
        url: '/images/oda1.jpg',
        caption: "Room"
      },
      {
        url: '/images/oda2.jpg',
        caption: "Room"
      },
      {
        url: '/images/oda3.jpg',
        caption: "Room"
      },
      {
        url: '/images/banyo1.jpg',
        caption: "Bathroom"
      },
      {
        url: '/images/manzara1.jpg',
        caption: "View"
      },
      {
        url: '/images/oda4.jpg',
        caption: "Room"
      },
      {
        url: '/images/restaurant.jpg',
        caption: "Breakfast Saloon"
      },
      {
        url: '/images/oda5.jpg',
        caption: "Room"
      },
      {
        url: '/images/banyo2.jpg',
        caption: "Bathroom"
      },
      {
        url: '/images/manzara2.jpg',
        caption: "View"
      },
      {
        url: '/images/oda6.jpg',
        caption: "Room"
      },
      {
        url: '/images/oda7.jpg',
        caption: "Room"
      },
    ]
  };

  const images = language === 'en' ? galleryImages.en : galleryImages.tr;

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('gallery.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="rounded-lg shadow-xl"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="text-lg font-medium">{image.caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
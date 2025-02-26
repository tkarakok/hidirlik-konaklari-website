import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Navbar
    'home': 'Ana Sayfa',
    'about': 'Hakkımızda',
    'services': 'Hizmetlerimiz',
    'rooms': 'Odalarımız',
    'gallery': 'Galeri',
    
    // Hero
    'hero.title': 'Otantik Osmanlı Lüksünü Yaşayın',
    'hero.subtitle': 'Safranbolu\'nun UNESCO Dünya Mirası bölgesinin kalbinde tarihi bir sığınak',
    'hero.button': 'Otelimizi Keşfedin',
    
    // About
    'about.title': 'Hikayemiz',
    'about.paragraph1': 'UNESCO Dünya Mirası olan tarihi Safranbolu kasabasında yer alan otelimiz, Türkiye\'nin zengin Osmanlı mirasının bir kanıtıdır. 18. yüzyılda bir tüccar konağı olarak inşa edilen mülkümüz, otantik mimarisini korurken modern konforlar sunmak için titizlikle restore edilmiştir.',
    'about.paragraph2': 'Otelimizin her köşesi, el oyması ahşap tavanlardan geleneksel Türk döşemelerine kadar geçmişin bir hikayesini anlatır. Sizi zamanda geriye götürmeye ve Türkiye\'nin en güzel tarihi kasabalarından birinde Osmanlı misafirperverliğinin ihtişamını yaşamaya davet ediyoruz.',
    'about.established': 'Kuruluş Yılı',
    'about.rooms': 'Benzersiz Oda',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Konaklamanızı unutulmaz kılmak için özenle hazırlanmış hizmetlerimizle en iyi Osmanlı misafirperverliğini yaşayın.',
    'services.breakfast.title': 'Geleneksel Kahvaltı',
    'services.breakfast.description': 'Gününüze Safranbolu bölgesinin yerel lezzetlerini içeren otantik bir Türk kahvaltısı ile başlayın.',
    'services.cuisine.title': 'Osmanlı Mutfağı',
    'services.cuisine.description': 'Restoranımızda geleneksel tarifler ve yerel malzemelerle hazırlanan Osmanlı mutfağının zengin lezzetlerini deneyimleyin.',
    'services.wifi.title': 'Ücretsiz Wi-Fi',
    'services.wifi.description': 'Tüm misafirlerimiz için otelin her yerinde mevcut olan ücretsiz yüksek hızlı Wi-Fi ile bağlantıda kalın.',
    'services.tours.title': 'Rehberli Turlar',
    'services.tours.description': 'Uzman yerel rehberlerimizle Safranbolu\'nun gizli mücevherlerini keşfedin, tarihi sokakları ve simgeleri gezin.',
    
    // Rooms
    'rooms.title': 'Odalarımız',
    'rooms.subtitle': 'Osmanlı zarafetini modern konforla birleştiren güzelce restore edilmiş odalarımızla tarihe adım atın.',
    'rooms.features': 'Oda Özellikleri:',
    'rooms.ottoman.title': 'Osmanlı Süiti',
    'rooms.ottoman.description': 'Otantik Osmanlı dekorasyonu ve geniş yaşam alanları sunan en lüks konaklamamız.',
    'rooms.heritage.title': 'Miras Odası',
    'rooms.heritage.description': 'Konforunuz için modern olanaklarla geleneksel Türk mimarisinin büyüsünü yaşayın.',
    'rooms.family.title': 'Aile Odası',
    'rooms.family.description': 'Ayrı uyuma alanları ve geleneksel mobilyalarla aileler için mükemmel geniş konaklama.',
    
    // Gallery
    'gallery.title': 'Galeri',
    'gallery.subtitle': 'Güzel otelimiz boyunca görsel bir yolculuğa çıkın ve Safranbolu\'nun büyüsünü yaşayın.',
    
    // Footer
    'footer.description': 'Tarihi Safranbolu\'nun kalbinde otantik Osmanlı lüksünü yaşayın.',
    'footer.contact': 'İletişim',
    'footer.address': 'Safranbolu Eski Şehir, Karabük, Türkiye',
    'footer.quickLinks': 'Hızlı Bağlantılar',
    'footer.location': 'Konum',
    'footer.locationDescription': 'Safranbolu\'nun UNESCO Dünya Mirası bölgesinde yer alan otelimiz, tarihi pazar meydanı ve diğer cazibe merkezlerine kısa bir yürüyüş mesafesindedir.',
    'footer.rights': 'Tüm hakları saklıdır.',
  },
  en: {
    // Navbar
    'home': 'Home',
    'about': 'About',
    'services': 'Services',
    'rooms': 'Rooms',
    'gallery': 'Gallery',
    
    // Hero
    'hero.title': 'Experience Authentic Ottoman Luxury',
    'hero.subtitle': 'A historic retreat in the heart of Safranbolu\'s UNESCO World Heritage site',
    'hero.button': 'Discover Our Hotel',
    
    // About
    'about.title': 'Our Story',
    'about.paragraph1': 'Nestled in the historic town of Safranbolu, a UNESCO World Heritage site, our hotel stands as a testament to the rich Ottoman heritage of Turkey. Originally built in the 18th century as a merchant\'s mansion, our property has been meticulously restored to preserve its authentic architecture while offering modern comforts.',
    'about.paragraph2': 'Each corner of our hotel tells a story of the past, from the hand-carved wooden ceilings to the traditional Turkish furnishings. We invite you to step back in time and experience the grandeur of Ottoman hospitality in one of Turkey\'s most beautiful historic towns.',
    'about.established': 'Year Established',
    'about.rooms': 'Unique Rooms',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Experience the finest Ottoman hospitality with our carefully curated services designed to make your stay memorable.',
    'services.breakfast.title': 'Traditional Breakfast',
    'services.breakfast.description': 'Start your day with an authentic Turkish breakfast featuring local specialties from Safranbolu region.',
    'services.cuisine.title': 'Ottoman Cuisine',
    'services.cuisine.description': 'Experience the rich flavors of Ottoman cuisine at our restaurant, prepared with traditional recipes and local ingredients.',
    'services.wifi.title': 'Free Wi-Fi',
    'services.wifi.description': 'Stay connected with complimentary high-speed Wi-Fi available throughout the hotel for all our guests.',
    'services.tours.title': 'Guided Tours',
    'services.tours.description': 'Discover the hidden gems of Safranbolu with our expert local guides who will take you through the historic streets and landmarks.',
    
    // Rooms
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'Step into history with our beautifully restored rooms that blend Ottoman elegance with modern comfort.',
    'rooms.features': 'Room Features:',
    'rooms.ottoman.title': 'Ottoman Suite',
    'rooms.ottoman.description': 'Our most luxurious accommodation featuring authentic Ottoman decor and spacious living areas.',
    'rooms.heritage.title': 'Heritage Room',
    'rooms.heritage.description': 'Experience the charm of traditional Turkish architecture with modern amenities for your comfort.',
    'rooms.family.title': 'Family Room',
    'rooms.family.description': 'Spacious accommodation perfect for families, with separate sleeping areas and traditional furnishings.',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Take a visual journey through our beautiful hotel and experience the charm of Safranbolu.',
    
    // Footer
    'footer.description': 'Experience authentic Ottoman luxury in the heart of historic Safranbolu.',
    'footer.contact': 'Contact',
    'footer.address': 'Safranbolu Old Town, Karabük, Turkey',
    'footer.quickLinks': 'Quick Links',
    'footer.location': 'Location',
    'footer.locationDescription': 'Located in the UNESCO World Heritage site of Safranbolu, our hotel is just a short walk from the historic market square and other attractions.',
    'footer.rights': 'All rights reserved.',
  }
  
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
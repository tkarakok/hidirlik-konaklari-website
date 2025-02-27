import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr | en';

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
    'hero.title': 'TARİHİ MİMARİ MODERN KONAKLAMA',
    'hero.subtitle': 'UNESCO Dünya Mirası Safranbolu\'nun tarihi merkezinin kalbinde geleneksel mimari modern konfor',
    'hero.button': 'Konağımızı Keşfedin',

    // About
    'about.title': 'Hikayemiz',
    'about.paragraph1': 'Hıdırlık Konakları, Safranbolu\'nun benzersiz tarihî dokusuyla modern konaklama hizmetini buluşturan özel bir mekan olarak 2019 yılında misafirlerine kapılarını açtı. Geleneksel Safranbolu mimarisinin zarif detayları ile inşa edilen konağımız, dış yapısındaki tarihi dokuyu korurken, iç mekanında sunduğu modern olanaklarla konforlu bir otel deneyimi sunmaktadır.',
    'about.paragraph2': 'Her odasında geleneksel Türk misafirperverliğini hissedebileceğiniz Hıdırlık Konakları, tarihi Safranbolu\'yu keşfederken modern dünyadan ödün vermek istemeyen misafirlerimiz için ideal bir konaklama seçeneğidir. Konaklarımızda, geçmişin zarafetini ve geleceğin konforunu bir arada bulacak, kendinizi evinizde gibi hissedeceksiniz.',
    'about.paragraph3': ' Safranbolu\'nun tarihi sokaklarında huzurlu bir gezintinin ardından, Hıdırlık Konakları’nda kendinizi dinlendirebilir, eşsiz bir konaklama deneyimiyle şehrin kültürel mirasını keşfetmeye devam edebilirsiniz.',
    'about.established': 'Kuruluş Yılı',
    'about.rooms': 'Benzersiz Oda',

    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': ' Konforlu bir konaklama deneyimi sunan modern olanaklar ve geleneksel misafirperverlik anlayışıyla, her ihtiyacınıza yönelik özel hizmetlerimizle yanınızdayız.',
    'services.breakfast.title': 'Kahvaltı',
    'services.breakfast.description': 'Hıdırlık Konakları\'nda güne, taze ürünlerle hazırlanan zengin kahvaltımızla başlayın. Geleneksel lezzetlerin modern dokunuşlarla buluştuğu kahvaltı menümüz, her damak zevkine hitap eder.',
    'services.cuisine.title': 'A la Carte Restaurant',
    'services.cuisine.description': 'Steak ustası şefimizin özenle hazırladığı mükemmel et yemekleri, şirin bahçemizde eşsiz bir yemek deneyimi sunuyor.',
    'services.wifi.title': 'Ücretsiz Wi-Fi',
    'services.wifi.description': 'Tüm misafirlerimiz için otelin her yerinde mevcut olan ücretsiz yüksek hızlı Wi-Fi ile bağlantıda kalın.',
    'services.tours.title': 'Ücretsiz Otopark',
    'services.tours.description': 'Misafirlerimize, konforlu bir konaklama deneyimi sunarken, ücretsiz otopark hizmetimizle araçlarınızı güvenle park edebilme imkanı sağlıyoruz.',

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
    'hero.title': 'HISTORIC ARCHITECTURE MODERN ACCOMMODATION',
    'hero.subtitle': 'In the heart of the historic center of UNESCO World Heritage Site Safranbolu, traditional architecture with modern comfort',
    'hero.button': 'Discover Our Mansion',

    // About
    'about.title': 'Our Story',
    'about.paragraph1': 'Hıdırlık Konakları opened its doors to guests in 2019 as a special place that combines Safranbolu\'s unique historic texture with modern accommodation services. Our mansion, built with the elegant details of traditional Safranbolu architecture, preserves its historical exterior while offering a comfortable hotel experience with modern amenities inside.',
    'about.paragraph2': 'At Hıdırlık Konakları, you will experience traditional Turkish hospitality in every room. It is the ideal accommodation option for guests who do not want to compromise modern life while exploring historic Safranbolu. You will find both the elegance of the past and the comfort of the future in our mansions, making you feel at home.',
    'about.paragraph3': 'After a peaceful stroll through the historic streets of Safranbolu, you can relax at Hıdırlık Konakları and continue exploring the cultural heritage of the city with an unforgettable accommodation experience.',
    'about.established': 'Year Established',
    'about.rooms': 'Unique Room',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We are here with special services tailored to your needs, offering a comfortable accommodation experience with modern facilities and traditional hospitality.',
    'services.breakfast.title': 'Breakfast',
    'services.breakfast.description': 'Start your day at Hıdırlık Konakları with our rich breakfast made with fresh products. Our breakfast menu, combining traditional flavors with modern touches, caters to all tastes.',
    'services.cuisine.title': 'A la Carte Restaurant',
    'services.cuisine.description': 'The perfect dishes prepared by our steak master chef offer an exceptional dining experience in our charming garden.',
    'services.wifi.title': 'Free Wi-Fi',
    'services.wifi.description': 'Stay connected with free high-speed Wi-Fi available throughout the hotel for all our guests.',
    'services.tours.title': 'Free Parking',
    'services.tours.description': 'While providing a comfortable accommodation experience, we offer free parking so you can safely park your vehicle.'


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

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

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
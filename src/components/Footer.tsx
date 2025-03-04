import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Hıdırlık Konakları</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/hidirlik_konaklari/?locale=zh-hans&hl=af" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-400">{t('footer.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <span className="text-gray-400">+90541 118 7825</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <span className="text-gray-400">info@hidirlikkonaklari.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'rooms', 'gallery'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.location')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.locationDescription')}
            </p>
          </div>
        </div>
        
        {/* Google Maps Integration */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/place/H%C4%B1d%C4%B1rl%C4%B1k+Konaklar%C4%B1/@41.2434479,32.6964783,19.25z/data=!4m9!3m8!1s0x408354dc555557b7:0x64afb6858f38d750!5m2!4m1!1i2!8m2!3d41.2436807!4d32.6960321!16s%2Fg%2F11flc5_zv4?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Safranbolu Hıdırlık Konakları Location"
            className="w-full"
          ></iframe>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hıdırlık Konakları {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
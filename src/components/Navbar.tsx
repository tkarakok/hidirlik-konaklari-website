import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = ['home', 'about', 'services', 'rooms', 'gallery', 'reservation'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/logo.png" style={{ width: `100px`, height: `100px` }} />
            <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              {/* Logo Text */}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium capitalize ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-secondary'} transition-colors`}
              >
                {t(item)}
              </button>
            ))}
            <LanguageSwitcher />
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/11234567890?text=Merhaba,%20yardımcı%20olur%20musunuz?"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white ${isScrolled ? 'hover:text-primary' : 'hover:text-secondary'} transition-colors`}
            >
              <img src="../public/images/whatsapp-icon.png" alt="WhatsApp" style={{ width: 30, height: 30 }} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={toggleMenu} className={`${isScrolled ? 'text-primary' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-2 py-4 px-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-primary font-medium capitalize text-left"
                >
                  {t(item)}
                </button>
              ))}
              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/11234567890?text=Merhaba,%20yardımcı%20olur%20musunuz?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary"
              >
                <img src="../public/images/whatsapp-icon.png" alt="WhatsApp" style={{ width: 30, height: 30 }} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

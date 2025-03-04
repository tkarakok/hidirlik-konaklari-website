import React from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import PanoramaViewer from './components/PanoramaViewer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const handleWhatsAppClick = () => {
    // Replace this with your actual WhatsApp number
    const phoneNumber = '+905411187825';
    const message = 'Merhaba, Hıdırlık Konaklarına rezervasyon yaptırmak istiyorum.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <LanguageProvider>
      <div className="font-sans">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Rooms />
        <PanoramaViewer/>
        <Gallery />
        <Reservation/>
        <Footer />

        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2 z-50"
          aria-label="WhatsApp ile İletişime Geç"
        >
          <MessageCircle size={24} />
          <span className="hidden md:inline">Rezervasyon</span>
        </button>

      </div>
    </LanguageProvider>
  );
}

export default App;
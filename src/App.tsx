import React from 'react';
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
    const phoneNumber = '905555555555';
    const message = 'Merhaba, Hıdırlık Konakları hakkında bilgi almak istiyorum.';
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

        
      </div>
    </LanguageProvider>
  );
}

export default App;
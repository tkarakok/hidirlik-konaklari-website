import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Rooms />
        <Gallery />
        <Reservation/>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
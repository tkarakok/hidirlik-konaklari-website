import React, { useEffect } from 'react';

const PanoramaViewer: React.FC = () => {
  useEffect(() => {
    const pannellum = (window as any).pannellum; // Pannellum'u window'dan alıyoruz

    if (pannellum) {
      pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: '/images/background.jpg', // Görselin yolu
        autoLoad: true,
        showControls: true,
        compass: true,
        title: 'Hıdırlık Konakları Sanal Turu',
        author: 'Hıdırlık Konakları'
      });
    } else {
      console.error('Pannellum yüklenemedi!');
    }
  }, []);

  return <div id="panorama" style={{ width: '100%', height: '100vh' }}></div>;
};

export default PanoramaViewer;

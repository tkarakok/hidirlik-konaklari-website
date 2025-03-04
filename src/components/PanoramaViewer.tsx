import React, { useEffect } from 'react';
import * as pannellum from 'https://unpkg.com/pannellum/build/pannellum.js';

const PanoramaViewer: React.FC = () => {
  useEffect(() => {
    const viewer = pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: '/images/background.jpg', // 360° görselinin yolu
      autoLoad: true,
      showControls: true,
      compass: true,
      title: 'Hıdırlık Konakları Sanal Turu',
      author: 'Hıdırlık Konakları'
    });

    return () => viewer.destroy(); // Component unmount olduğunda temizlik
  }, []);

  return <div id="panorama" style={{ width: '100%', height: '100vh' }}></div>;
};

export default PanoramaViewer;

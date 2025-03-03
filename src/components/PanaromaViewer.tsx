import React, { useEffect } from 'react';
import * as pannellum from 'https://unpkg.com/pannellum/build/pannellum.js';

const PanoramaViewer: React.FC = () => {
  useEffect(() => {
    pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: 'path/to/your/360-image.jpg',
      autoLoad: true,
      showControls: true,
      compass: true,
      title: 'Hıdırlık Konakları Sanal Turu',
      author: 'Hıdırlık Konakları'
    });
  }, []);

  return <></>;
};

export default PanoramaViewer;

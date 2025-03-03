import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createRoot } from 'react-dom/client';
import * as pannellum from 'https://unpkg.com/pannellum/build/pannellum.js';

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>360° Sanal Tur - Hıdırlık Konakları</title>
  <link rel="stylesheet" href="https://unpkg.com/pannellum/build/pannellum.css">
  <style>
    #panorama {
      width: 100%;
      height: 100vh;
    }
  </style>
</head>
<body>
  <div id="panorama"></div>

  <div id="root"></div>
  <script type="module" src="./panorama.tsx"></script>
</body>
</html>

const PanoramaViewer: React.FC = () => {
  useEffect(() => {
    pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: 'path/to/your/360-image.jpg', // Buraya 360° görselinin yolunu ekle
      autoLoad: true,
      showControls: true,
      compass: true,
      title: 'Hıdırlık Konakları Sanal Turu',
      author: 'Hıdırlık Konakları'
    });
  }, []);

  return <></>;
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<PanoramaViewer />);
}

export default PanoramaViewer;
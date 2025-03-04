import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const images = [
  '/images/rest.jpg',
  '/images/panorama2.jpg',
  '/images/panorama3.jpg',
  '/images/panorama4.jpg'
];

const PanoramaViewer: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const pannellum = (window as any).pannellum;
    if (pannellum) {
      pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: currentImage,
        autoLoad: true,
        showControls: true,
        compass: true,
        title: 'Hıdırlık Konakları Sanal Turu',
        author: 'Hıdırlık Konakları'
      });
    }
  }, [currentImage]);

  return (
    <div>
      <div className="controls">
        {images.map((image, index) => (
          <button key={index} onClick={() => setCurrentImage(image)}>
            Fotoğraf {index + 1}
          </button>
        ))}
      </div>
      <div id="panorama" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<PanoramaViewer />);
}

export default PanoramaViewer;
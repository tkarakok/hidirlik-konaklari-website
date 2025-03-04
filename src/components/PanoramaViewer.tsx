import React, { useEffect, useState } from 'react';
import { Pannellum } from 'pannellum-react';
import { createRoot } from 'react-dom/client';
import { ChevronRight, ChevronLeft, Info } from 'lucide-react';

interface TourScene {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  hotSpots?: {
    pitch: number;
    yaw: number;
    type: string;
    text: string;
    sceneId?: string;
  }[];
}
const PanoramaViewer: React.FC = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  // Sample tour scenes - replace with your actual hotel images
  const tourScenes: TourScene[] = [
    {
      id: 'lobby',
      title: 'Hotel Lobby',
      imageUrl: '/images/rest.jpg',
      description: 'Welcome to our elegant hotel lobby, where your luxury experience begins.',
      hotSpots: [
        {
          pitch: 0,
          yaw: 110,
          type: 'scene',
          text: 'Go to Restaurant',
          sceneId: 'restaurant'
        }
      ]
    },]}
export default PanoramaViewer;
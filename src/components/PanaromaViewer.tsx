import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, ChevronLeft, Info, Home } from 'lucide-react';

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

const PanaromaViewer: React.FC = () => {
    const { t, language } = useLanguage();
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [showInfo, setShowInfo] = useState(false);
    const viewerRef = useRef<HTMLDivElement>(null);
    const pannellumRef = useRef<any>(null);

    // Sample tour scenes - replace with your actual hotel images
    const tourScenes: TourScene[] = [
        {
            id: 'lobby',
            title: 'Hotel Lobby',
            imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
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
        },
        {
            id: 'restaurant',
            title: 'Hotel Restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
            description: 'Our restaurant offers a wide variety of delicious dishes in a comfortable atmosphere.',
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -110,
                    type: 'scene',
                    text: 'Back to Lobby',
                    sceneId: 'lobby'
                }
            ]
        },
        {
            id: 'suite',
            title: 'Luxury Suite',
            imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
            description: 'Experience ultimate comfort in our luxury suite with panoramic views.',
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 130,
                    type: 'info',
                    text: 'King-size bed with premium linens'
                },
                {
                    pitch: 0,
                    yaw: -110,
                    type: 'scene',
                    text: 'Go to Lobby',
                    sceneId: 'lobby'
                }
            ]
        }
    ];

    useEffect(() => {
        // Load Pannellum script dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
        script.async = true;
        document.body.appendChild(script);

        // Load Pannellum CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
        document.head.appendChild(link);

        script.onload = () => {
            initPannellum();
        };

        return () => {
            document.body.removeChild(script);
            document.head.removeChild(link);
        };
    }, []);

    useEffect(() => {
        if (window.pannellum) {
            initPannellum();
        }
    }, [currentSceneIndex]);

    const initPannellum = () => {
        if (!viewerRef.current || !window.pannellum) return;

        // Clear previous viewer if exists
        if (pannellumRef.current) {
            pannellumRef.current.destroy();
        }

        const currentScene = tourScenes[currentSceneIndex];

        // Configure hotspots
        const hotSpots = currentScene.hotSpots?.map(hotspot => {
            return {
                ...hotspot,
                clickHandlerFunc: hotspot.type === 'scene' ?
                    () => {
                        const targetIndex = tourScenes.findIndex(scene => scene.id === hotspot.sceneId);
                        if (targetIndex !== -1) {
                            setCurrentSceneIndex(targetIndex);
                        }
                    } : undefined
            };
        });

        // Initialize pannellum
        pannellumRef.current = window.pannellum.viewer(viewerRef.current, {
            type: 'equirectangular',
            panorama: currentScene.imageUrl,
            autoLoad: true,
            title: currentScene.title,
            hotSpots: hotSpots || [],
            compass: true,
            northOffset: 247.5,
            hfov: 120
        });
    };

    const navigateScene = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentSceneIndex((prev) => (prev + 1) % tourScenes.length);
        } else {
            setCurrentSceneIndex((prev) => (prev - 1 + tourScenes.length) % tourScenes.length);
        }
    };

    const currentScene = tourScenes[currentSceneIndex];

    return (

        <section id="tour" className="py-10 bg-white-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('tour.title')}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('tour.subtitle')}
                    </p>
                </div>


                <div className="relative w-full h-full">
                    {/* Pannellum Viewer */}
                    <div
                        ref={viewerRef}
                        className="w-full h-[500px] rounded-lg overflow-hidden"
                    ></div>

                    {/* Navigation Controls */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/50 rounded-full px-4 py-2 text-white">
                        <button
                            onClick={() => navigateScene('prev')}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            aria-label="Previous scene"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <span className="text-sm font-medium">
                            {currentSceneIndex + 1} / {tourScenes.length}
                        </span>

                        <button
                            onClick={() => navigateScene('next')}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            aria-label="Next scene"
                        >
                            <ChevronRight size={24} />
                        </button>

                        <button
                            onClick={() => setShowInfo(!showInfo)}
                            className={`p-2 rounded-full transition-colors ${showInfo ? 'bg-white/30' : 'hover:bg-white/20'}`}
                            aria-label="Toggle information"
                        >
                            <Info size={24} />
                        </button>
                    </div>

                    {/* Scene Information */}
                    {showInfo && (
                        <div className="absolute top-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
                            <h2 className="text-xl font-bold mb-2">{currentScene.title}</h2>
                            <p className="text-sm">{currentScene.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PanaromaViewer;

import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { MarkerItem } from '../../types';
import { X } from 'lucide-react';

// Fix for default marker icons in Leaflet if needed, though we use custom divs here.
// We strictly use custom icons so we don't need to fix the default Icon.Default.

const FlyCardModal = ({ marker, onClose }: { marker: MarkerItem; onClose: () => void }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 100, scale: 0.9, rotateX: 10 }}
                animate={{ y: 0, scale: 1, rotateX: 0 }}
                exit={{ y: 100, scale: 0.9, rotateX: 10 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-zinc-900 border border-zinc-800 p-0 rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="h-32 bg-indigo-900/20 relative">
                     <div className="absolute inset-0 flex items-center justify-center text-6xl">
                        {marker.emoji}
                     </div>
                     <button onClick={onClose} className="absolute top-2 right-2 p-2 bg-black/20 rounded-full hover:bg-black/40 text-white transition-colors">
                        <X size={16} />
                     </button>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                         <span className="px-2 py-1 rounded text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">{marker.category}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-2">{marker.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{marker.description}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Component to handle map view updates
const MapController = ({ markers }: { markers: MarkerItem[] }) => {
    const map = useMap();
    useEffect(() => {
        if (!markers.length) return;
        const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));
        map.flyToBounds(bounds, { padding: [80, 80], duration: 1.25 });
    }, [markers, map]);
    return null;
};

type Category = 'Tous' | MarkerItem['category'];

export const InteractiveMap = ({ markers, mapId }: { markers: MarkerItem[], mapId: string }) => {
    const [activeCategory, setActiveCategory] = useState<Category>('Tous');
    const [selectedMarker, setSelectedMarker] = useState<MarkerItem | null>(null);
    const mapContainerId = `leaflet-map-${mapId}`;

    // Clear Leaflet's cached id so StrictMode re-renders don't trip "already initialized"
    useEffect(() => {
        return () => {
            const container = L.DomUtil.get(mapContainerId) as (HTMLElement & { _leaflet_id?: string }) | null;
            if (container) {
                container._leaflet_id = undefined;
            }
        };
    }, [mapContainerId]);

    const filteredMarkers = useMemo(
        () => (activeCategory === 'Tous'
            ? markers
            : markers.filter(m => m.category === activeCategory)),
        [activeCategory, markers]
    );
    const initialCenter: [number, number] = filteredMarkers.length
        ? [filteredMarkers[0].lat, filteredMarkers[0].lng]
        : [36.5, 127.5];

    // Create custom icon
    const createIcon = (emoji: string) => L.divIcon({
        html: `<div class="w-10 h-10 flex items-center justify-center bg-zinc-900 border-2 border-white rounded-full shadow-lg text-xl transform hover:scale-110 transition-transform cursor-pointer select-none">${emoji}</div>`,
        className: 'bg-transparent',
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    // Categories available in the UI
    const categories: Category[] = ['Tous', 'Ville', 'Monument', 'Activité', 'Cuisine'];

    return (
        <section className="h-[80vh] relative w-full bg-zinc-900 z-0 overflow-hidden">
            {/* Controls */}
            <div className="absolute top-6 left-6 right-6 z-[400] flex flex-wrap gap-2 pointer-events-none">
                <div className="pointer-events-auto flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md transition-all whitespace-nowrap ${
                                activeCategory === cat 
                                ? 'bg-indigo-600 text-white shadow-lg' 
                                : 'bg-black/50 text-zinc-300 border border-white/10 hover:bg-black/70'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <MapContainer 
                key={mapId}
                id={mapContainerId}
                center={initialCenter} 
                zoom={11} 
                scrollWheelZoom={false} 
                className="w-full h-full z-0 outline-none"
                style={{ background: '#18181b' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <MapController markers={filteredMarkers} />
                
                {filteredMarkers.map((marker) => (
                    <Marker 
                        key={marker.id} 
                        position={[marker.lat, marker.lng]} 
                        icon={createIcon(marker.emoji)}
                        eventHandlers={{
                            click: () => setSelectedMarker(marker),
                        }}
                    />
                ))}

            </MapContainer>

            <AnimatePresence>
                {selectedMarker && (
                    <FlyCardModal marker={selectedMarker} onClose={() => setSelectedMarker(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

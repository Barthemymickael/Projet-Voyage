import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, ArrowRight } from 'lucide-react';
import { COUNTRIES } from '../../data/countries';
import { CountryData } from '../../types';

interface LandingPageProps {
  onSelectCountry: (id: string) => void;
}

const CountryBlock: React.FC<{ country: CountryData; onSelect: (id: string) => void }> = ({ country, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  const handleClick = () => {
    if (country.isLocked) return;
    
    // Simulate unlock sound and flash
    // const audio = new Audio('/unlock.mp3'); 
    // audio.play().catch(() => {}); // Commented out as we don't have the asset
    
    setIsFlashing(true);
    setTimeout(() => {
        onSelect(country.id);
    }, 800);
  };

  return (
    <div 
      className="relative flex-1 h-[33vh] lg:h-screen w-full lg:w-auto overflow-hidden group cursor-pointer border-b lg:border-b-0 lg:border-r border-zinc-900/50 last:border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
        {/* Background Video/Image */}
        <motion.div 
            className="absolute inset-0 bg-zinc-900"
            animate={{ scale: isHovered && !country.isLocked ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
        >
            <img 
                src={country.videoUrl} 
                alt={country.name} 
                className={`w-full h-full object-cover transition-all duration-700 ${country.isLocked ? 'grayscale opacity-30 blur-sm' : 'opacity-80'}`} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {country.isLocked ? (
                    <Lock className="w-8 h-8 lg:w-12 lg:h-12 text-zinc-500 mb-4" />
                ) : (
                    <Unlock className="w-8 h-8 lg:w-12 lg:h-12 text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                )}
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-2 uppercase font-serif">
                {country.name}
            </h2>
            
            <AnimatePresence>
                {country.isLocked ? (
                    isHovered && (
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="text-zinc-500 font-mono text-sm tracking-widest uppercase mt-2"
                        >
                            Région verrouillée
                        </motion.span>
                    )
                ) : (
                    <motion.div
                        className="flex items-center gap-2 text-white/90 font-mono text-xs lg:text-sm tracking-widest uppercase mt-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                        Entrer dans le journal <ArrowRight className="w-4 h-4" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Flash Effect */}
        {isFlashing && (
            <motion.div 
                className="absolute inset-0 z-50 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0, 1, 0] }}
                transition={{ duration: 0.6 }}
            />
        )}
    </div>
  );
};

export const LandingPage: React.FC<LandingPageProps> = ({ onSelectCountry }) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-black">
        {COUNTRIES.map((country) => (
            <CountryBlock key={country.id} country={country} onSelect={onSelectCountry} />
        ))}
    </div>
  );
};

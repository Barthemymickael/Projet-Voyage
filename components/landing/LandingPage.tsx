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
      className="relative flex-1 min-h-[60vh] md:min-h-[70vh] lg:h-screen w-full lg:w-auto overflow-hidden group cursor-pointer border border-zinc-900/30 rounded-3xl lg:rounded-none lg:border-b-0 lg:border-r bg-zinc-900/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Background Video/Image */}
      <motion.div
        className="absolute inset-0 bg-zinc-900"
        animate={{ scale: isHovered && !country.isLocked ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
      >
        <img
          src={country.videoUrl}
          alt={country.name}
          className={`w-full h-full object-cover transition-all duration-700 ${country.isLocked ? 'grayscale opacity-30 blur-sm' : 'opacity-80'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 sm:p-8 text-center gap-4">
        <motion.div
          animate={{ y: isHovered ? -6 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md shadow-lg shadow-black/30"
        >
          {country.isLocked ? (
            <Lock className="w-6 h-6 lg:w-8 lg:h-8 text-zinc-300" />
          ) : (
            <Unlock className="w-6 h-6 lg:w-8 lg:h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          )}
          <span className="text-xs sm:text-sm uppercase tracking-[0.16em] text-white/80 font-mono">
            {country.isLocked ? 'Région verrouillée' : 'Zone accessible'}
          </span>
        </motion.div>

        <div className="space-y-3 w-full flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 uppercase font-serif drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            {country.name}
          </h2>

          <AnimatePresence>
            {!country.isLocked && (
              <motion.div
                className="inline-flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base tracking-tight uppercase mt-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] mx-auto"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
              >
                Entrer dans le journal <ArrowRight className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
    <div className="min-h-screen w-full bg-black px-4 py-6 sm:px-6 lg:px-0 lg:py-0">
      <div className="mx-auto max-w-6xl lg:max-w-none flex flex-col lg:flex-row gap-4 lg:gap-0">
        {COUNTRIES.map((country) => (
          <CountryBlock key={country.id} country={country} onSelect={onSelectCountry} />
        ))}
      </div>
    </div>
  );
};

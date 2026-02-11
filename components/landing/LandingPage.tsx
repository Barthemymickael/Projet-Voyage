import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Check, ArrowRight } from 'lucide-react';
import { CountryData } from '../../types';

interface LandingPageProps {
  countries: CountryData[];
  onSelectCountry: (id: string) => void;
}

const CountryBlock: React.FC<{ country: CountryData; onSelect: (id: string) => void }> = ({ country, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const isJapan = country.id === 'japan';
  const hasNeutralBadge = country.isLocked || isJapan;

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
        className="relative flex flex-col flex-1 w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[78vh] xl:min-h-[86vh] overflow-hidden group cursor-pointer rounded-3xl lg:rounded-none bg-gradient-to-b from-white/5 via-white/0 to-black/60 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.35)] focus-within:ring-2 focus-within:ring-white/70 focus:outline-none transition-[transform,box-shadow] duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        tabIndex={country.isLocked ? -1 : 0}
        role="button"
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
          }
        }}
      >
        <div
          className="absolute inset-0 opacity-30 blur-3xl bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_45%)]"
          aria-hidden
        />
      {/* Background Video/Image */}
      <motion.div
        className="absolute inset-0 bg-zinc-900"
        animate={{ scale: isHovered && !country.isLocked ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
      >
        <img
          src={country.videoUrl}
          alt={country.name}
          className={`w-full h-full object-cover transition-all duration-700 ${country.isLocked ? 'grayscale opacity-25 blur-[2px]' : 'opacity-85'} group-focus-visible:scale-[1.03]`}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-black/80" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 text-center gap-5 md:gap-6">
        <motion.div
          animate={{ y: isHovered ? -6 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`flex items-center justify-center gap-3 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-lg shadow-lg ${
            hasNeutralBadge
              ? 'bg-white/8 border border-white/15 shadow-black/30'
              : 'bg-emerald-500/20 border border-emerald-300/45 shadow-emerald-500/30'
          }`}
        >
          {country.isLocked && !isJapan ? (
            <Lock className="w-6 h-6 lg:w-8 lg:h-8 text-zinc-300" />
          ) : isJapan ? (
            <Unlock className="w-6 h-6 lg:w-8 lg:h-8 text-zinc-300" />
          ) : (
            <Check className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-200 drop-shadow-[0_0_18px_rgba(16,185,129,0.8)]" />
          )}
          <span
            className={`text-xs sm:text-sm uppercase tracking-[0.16em] font-mono ${
              hasNeutralBadge ? 'text-white/80' : 'text-emerald-100 font-semibold'
            }`}
          >
            {country.isLocked && !isJapan ? 'Région verrouillée' : isJapan ? 'Région déveoruuller' : 'Mission Accomplie'}
          </span>
        </motion.div>

        <div className="space-y-4 w-full flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 uppercase font-serif drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] leading-tight text-balance max-w-[18ch]">
            {country.name}
          </h2>

          <AnimatePresence>
            {!country.isLocked && (
              <motion.div
                className="group relative inline-flex w-full max-w-[300px] sm:max-w-[320px] items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base tracking-tight uppercase mt-2 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.4)] mx-auto overflow-hidden"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.98, rotate: 0 }}
                tabIndex={0}
                role="button"
                aria-label="Entrer dans le journal"
              >
                <motion.div
                  className="absolute inset-[-20%] bg-[conic-gradient(at_top,_#a855f7,_#22d3ee,_#a855f7)] opacity-60 blur-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{ backgroundColor: ['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.18)', 'rgba(255,255,255,0.08)'] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: ['-120%', '120%'] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.6 }}
                />
                <span className="relative z-10 flex items-center gap-2 px-2 py-0.5 whitespace-nowrap">
                  Entrer dans le journal <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          {country.isLocked && (
            <div
              className="mt-2 h-[44px] sm:h-[48px] w-full max-w-[320px] rounded-full border border-transparent"
              aria-hidden
            />
          )}
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

export const LandingPage: React.FC<LandingPageProps> = ({ countries, onSelectCountry }) => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-16 flex items-stretch lg:items-center">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(244,114,182,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_85%,rgba(34,211,238,0.06),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(168,85,247,0.06),transparent_32%)]" />
      <div className="mx-auto max-w-6xl lg:max-w-[1400px] w-full space-y-6 sm:space-y-8">
        <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/0 to-white/5 opacity-60" aria-hidden />
          <div className="relative grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-0">
            {countries.map((country) => (
              <CountryBlock key={country.id} country={country} onSelect={onSelectCountry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Check, ArrowRight } from 'lucide-react';
import { CountryData } from '../../types';

interface LandingPageProps {
  countries: CountryData[];
  onSelectCountry: (id: string) => void;
}

const CountryBlock: React.FC<{ country: CountryData; onSelect: (id: string) => void }> = ({ country, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const hasNeutralBadge = country.isLocked;

  const handleClick = () => {
    if (country.isLocked) return;

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
      <div className="absolute inset-0 opacity-30 blur-3xl bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_45%)]" />

      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-zinc-900"
        animate={{ scale: isHovered && !country.isLocked ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
      >
        <img
          src={country.videoUrl}
          alt={country.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            country.isLocked ? 'grayscale opacity-25 blur-[2px]' : 'opacity-85'
          }`}
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
          {country.isLocked ? (
            <Lock className="w-6 h-6 lg:w-8 lg:h-8 text-zinc-300" />
          ) : (
            <Check className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-200 drop-shadow-[0_0_18px_rgba(16,185,129,0.8)]" />
          )}
          <span
            className={`text-xs sm:text-sm uppercase tracking-[0.16em] font-mono ${
              hasNeutralBadge ? 'text-white/80' : 'text-emerald-100 font-semibold'
            }`}
          >
            {country.isLocked ? 'Région verrouillée' : 'Mission Accomplie'}
          </span>
        </motion.div>

        <div className="space-y-4 w-full flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 uppercase font-serif drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] leading-tight max-w-[18ch]">
            {country.name}
          </h2>

          {!country.isLocked && (
            <motion.div
              className="inline-flex items-center gap-2 text-white font-semibold text-sm uppercase"
              whileHover={{ scale: 1.05 }}
            >
              Entrer dans le journal <ArrowRight className="w-4 h-4" />
            </motion.div>
          )}
        </div>
      </div>

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
  const [isTravelSummaryOpen, setIsTravelSummaryOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black px-6 py-12">

      {/* CTA */}
      <div className="max-w-5xl mx-auto mb-10">
        <button
          onClick={() => setIsTravelSummaryOpen(true)}
          className="group w-full flex items-center justify-between px-6 py-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-all"
        >
          <div className="flex flex-col text-left">
            <span className="text-xs uppercase tracking-widest text-white/40">
              Le bilan finale de ce voyage
            </span>
            <span className="text-2xl text-white font-semibold">
              Voir le bilan 
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/60 group-hover:text-white">
            <span className="hidden sm:block">Entrer</span>
            <ArrowRight />
          </div>
        </button>
      </div>

      {/* COUNTRIES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {countries.map((country) => (
          <CountryBlock key={country.id} country={country} onSelect={onSelectCountry} />
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isTravelSummaryOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setIsTravelSummaryOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl"
            >
              ×
            </button>

            <div className="max-w-3xl text-center px-6">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-semibold mb-6"
              >
                Le film du voyage
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-10"
              >
                Une immersion entre modernité et traditions, entre agitation urbaine et moments suspendus.
                Chaque étape raconte une histoire unique.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
              >
                Commencer l’exploration
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

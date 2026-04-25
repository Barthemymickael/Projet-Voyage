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

  const handleClick = () => {
    if (country.isLocked) return;

    setIsFlashing(true);
    setTimeout(() => {
      onSelect(country.id);
    }, 800);
  };

  return (
    <div
      className="relative flex flex-col flex-1 w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[78vh] xl:min-h-[86vh] overflow-hidden group cursor-pointer rounded-3xl lg:rounded-none bg-gradient-to-b from-white/5 via-white/0 to-black/60 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered && !country.isLocked ? 1.05 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={country.videoUrl}
          alt={country.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            country.isLocked ? 'grayscale opacity-25 blur-[2px]' : 'opacity-85'
          }`}
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 gap-6">
        <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/70">
          {country.isLocked ? <Lock size={18} /> : <Check size={18} />}
          {country.isLocked ? 'Verrouillé' : 'Disponible'}
        </div>

        <h2 className="text-4xl lg:text-5xl font-semibold text-white">
          {country.name}
        </h2>

        {!country.isLocked && (
          <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition">
            <span>Explorer</span>
            <ArrowRight size={18} />
          </div>
        )}
      </div>

      {/* Flash */}
      {isFlashing && (
        <motion.div
          className="absolute inset-0 bg-white z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
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

      {/* CTA SIMPLE */}
      <div className="max-w-5xl mx-auto mb-10">
        <button
          onClick={() => setIsTravelSummaryOpen(true)}
          className="group w-full flex items-center justify-between px-6 py-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-all"
        >
          <div className="flex flex-col text-left">
            <span className="text-xs uppercase tracking-widest text-white/40">
              Expérience immersive
            </span>
            <span className="text-2xl text-white font-semibold">
              Voir le film du voyage
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/60 group-hover:text-white">
            <span className="hidden sm:block">Entrer</span>
            <ArrowRight />
          </div>
        </button>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {countries.map((country) => (
          <CountryBlock key={country.id} country={country} onSelect={onSelectCountry} />
        ))}
      </div>

      {/* MODAL IMMERSIVE */}
      <AnimatePresence>
        {isTravelSummaryOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={() => setIsTravelSummaryOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl"
            >
              ×
            </button>

            {/* Content */}
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
                Chaque étape raconte une histoire unique, faite de rencontres, de lieux et d’émotions.
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

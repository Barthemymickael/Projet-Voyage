import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Check, ArrowRight, ChevronDown } from 'lucide-react';
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
  const [isTravelSummaryOpen, setIsTravelSummaryOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-16 flex items-stretch lg:items-center">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(244,114,182,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_85%,rgba(34,211,238,0.06),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(168,85,247,0.06),transparent_32%)]" />
      <div className="mx-auto max-w-6xl lg:max-w-[1400px] w-full space-y-6 sm:space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setIsTravelSummaryOpen((prev) => !prev)}
            className="group relative flex w-full items-center justify-between gap-4 rounded-2xl border border-white/15 bg-gradient-to-r from-violet-500/20 via-cyan-500/10 to-emerald-500/20 px-5 py-4 text-left transition-all duration-300 hover:border-white/35 hover:shadow-[0_10px_25px_rgba(56,189,248,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            aria-expanded={isTravelSummaryOpen}
            aria-controls="travel-summary-panel"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Nouveau</p>
              <h2 className="mt-1 text-lg sm:text-xl font-semibold text-white">Bilan de mon voyage</h2>
            </div>
            <motion.span
              animate={{ rotate: isTravelSummaryOpen ? 180 : 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/90 group-hover:bg-white/20"
            >
              <ChevronDown className="h-5 w-5" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {isTravelSummaryOpen && (
              <motion.div
                id="travel-summary-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-5 pb-4 pt-5 text-sm sm:text-base text-zinc-200/95 leading-relaxed space-y-3">
                  <p>
                    Ce carnet retrace une aventure en Asie entre traditions, modernité et découvertes humaines.
                    Chaque étape raconte un moment fort : les rues vibrantes de Séoul, les temples paisibles et les
                    rencontres qui donnent du sens au voyage.
                  </p>
                  <p>
                    Ouvre une région pour explorer les souvenirs, revivre les journées marquantes et suivre le fil
                    complet de cette expérience, du premier départ jusqu&apos;aux derniers instants.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/0 to-white/5 opacity-60" aria-hidden />
          <div className="relative grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-0">
            {countries.map((country) => (
              <CountryBlock key={country.id} country={country} onSelect={onSelectCountry} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isTravelSummaryOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsTravelSummaryOpen(false)}
              aria-label="Fermer le bilan de voyage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              id="travel-summary-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Bilan de mon voyage"
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-zinc-900/95 via-violet-950/70 to-cyan-950/80 p-6 sm:p-8 shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_25%,rgba(168,85,247,0.45),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(34,211,238,0.35),transparent_40%)]"
                animate={{ opacity: [0.45, 0.75, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Bilan immersif</p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Bilan de mon voyage</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsTravelSummaryOpen(false)}
                    className="h-10 w-10 rounded-full border border-white/20 bg-white/10 text-white text-xl leading-none hover:bg-white/20 transition-colors"
                    aria-label="Fermer la fenêtre"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4 text-zinc-100/95 leading-relaxed">
                  <p>
                    Ce voyage en Asie a été une traversée d&apos;émotions, entre énergie urbaine, héritages culturels et
                    moments de calme inattendus. Chaque lieu visité a laissé une empreinte différente, avec ses sons,
                    ses visages et ses histoires.
                  </p>
                  <p>
                    Ce journal rassemble ces instants clés : les découvertes, les surprises et les rencontres qui ont
                    façonné cette aventure. Clique sur une région pour revivre le parcours jour après jour.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

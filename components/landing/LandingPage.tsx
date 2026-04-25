import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Lock, Check, ArrowRight } from 'lucide-react';
import { CountryData } from '../../types';

interface LandingPageProps {
  countries: CountryData[];
  onSelectCountry: (id: string) => void;
}

/* =========================
   COUNTRY BLOCK (inchangé)
========================= */
const CountryBlock: React.FC<{ country: CountryData; onSelect: (id: string) => void }> = ({ country, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  const handleClick = () => {
    if (country.isLocked) return;
    setIsFlashing(true);
    setTimeout(() => onSelect(country.id), 800);
  };

  return (
    <div
      className="relative flex flex-col flex-1 w-full aspect-[3/4] lg:min-h-[78vh] overflow-hidden group cursor-pointer rounded-3xl bg-gradient-to-b from-white/5 via-white/0 to-black/60 backdrop-blur-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        className="absolute inset-0 bg-zinc-900"
        animate={{ scale: isHovered && !country.isLocked ? 1.05 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={country.videoUrl}
          alt={country.name}
          className={`w-full h-full object-cover ${country.isLocked ? 'grayscale opacity-25' : ''}`}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="flex items-center gap-2 mb-4 text-white/80">
          {country.isLocked ? <Lock /> : <Check />}
          <span className="text-xs uppercase tracking-widest">
            {country.isLocked ? 'Verrouillé' : 'Terminé'}
          </span>
        </div>

        <h2 className="text-4xl font-bold text-white">{country.name}</h2>

        {!country.isLocked && (
          <div className="mt-4 flex items-center gap-2 text-white/80 text-sm">
            Entrer <ArrowRight size={16} />
          </div>
        )}
      </div>

      {isFlashing && (
        <motion.div
          className="absolute inset-0 bg-white z-50"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6 }}
        />
      )}
    </div>
  );
};

/* =========================
   SCROLL STORY SECTION
========================= */
const StorySection = ({ title, children }: any) => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 py-32"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {children}
        </p>
      </div>
    </motion.section>
  );
};

/* =========================
   LANDING PAGE
========================= */
export const LandingPage: React.FC<LandingPageProps> = ({ countries }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* CTA */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex justify-between items-center px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 transition"
        >
          <div className="text-left">
            <p className="text-xs uppercase text-white/40">Expérience</p>
            <p className="text-2xl font-semibold">Bilan du voyage</p>
          </div>
          <ArrowRight />
        </button>
      </div>

      {/* COUNTRIES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-6">
        {countries.map((c) => (
          <CountryBlock key={c.id} country={c} onSelect={() => {}} />
        ))}
      </div>

      {/* =========================
         STORY MODAL SCROLL
      ========================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* close */}
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-6 right-6 text-white/60 text-3xl z-50"
            >
              ×
            </button>

            {/* HERO */}
            <section className="h-screen flex items-center justify-center text-center px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
              >
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                  Le voyage solo : 5 mois entre liberté et silence
                </h1>
                <p className="text-white/60 mt-6">
                  Scroll pour revivre l’expérience
                </p>
              </motion.div>
            </section>

            {/* STORY */}
            <StorySection title="Voyager seul">
              5 mois seul. Des rencontres parfois le temps d’un café, parfois plusieurs jours.
            </StorySection>

            <StorySection title="Liberté totale">
              Aucune limite. J’étais maître de mon temps, de mes journées, de mes choix.
            </StorySection>

            <StorySection title="Le silence intérieur">
              Face aux paysages, parfois aucun mot. Juste être là. Présent.
            </StorySection>

            <StorySection title="Rythme personnel">
              Faire les choses pour soi. À son propre rythme. Voilà la vraie liberté.
            </StorySection>

            <StorySection title="Connexion au présent">
              Voir. Ressentir. Accepter. Continuer.
            </StorySection>

            <StorySection title="Conclusion">
              Ce voyage n’était pas touristique. C’était une expérience intérieure.
            </StorySection>

            {/* END */}
            <section className="h-screen flex items-center justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10"
              >
                Retour
              </button>
            </section>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

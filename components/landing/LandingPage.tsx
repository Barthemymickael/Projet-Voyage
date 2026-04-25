import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Check, ArrowRight } from 'lucide-react';
import { CountryData } from '../../types';

interface LandingPageProps {
  countries: CountryData[];
  onSelectCountry: (id: string) => void;
}

/* ===================== COUNTRY CARD (VERSION 1 CONSERVÉE) ===================== */
const CountryBlock: React.FC<{ country: CountryData; onSelect: (id: string) => void }> =
({ country, onSelect }) => {
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
      className="relative flex flex-col flex-1 w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[78vh] xl:min-h-[86vh] overflow-hidden group cursor-pointer rounded-3xl lg:rounded-none bg-gradient-to-b from-white/5 via-white/0 to-black/60 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      tabIndex={country.isLocked ? -1 : 0}
    >
      <div className="absolute inset-0 opacity-30 blur-3xl bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_45%)]" />

      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-zinc-900"
        animate={{ scale: isHovered && !country.isLocked ? 1.05 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={country.videoUrl}
          className={`w-full h-full object-cover ${
            country.isLocked ? 'grayscale opacity-25 blur-[2px]' : 'opacity-85'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          animate={{ y: isHovered ? -6 : 0 }}
          className={`flex items-center gap-3 px-4 py-2 rounded-full ${
            hasNeutralBadge ? 'bg-white/10' : 'bg-emerald-500/20'
          }`}
        >
          {country.isLocked ? <Lock /> : <Check />}
          <span className="text-xs uppercase tracking-widest">
            {country.isLocked ? 'Verrouillé' : 'Mission accomplie'}
          </span>
        </motion.div>

        <h2 className="mt-6 text-4xl font-bold text-white uppercase">
          {country.name}
        </h2>

        {!country.isLocked && (
          <div className="mt-4 flex items-center gap-2 text-white">
            Entrer <ArrowRight size={18} />
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

/* ===================== STORY SECTION ===================== */
const StorySection = ({ title, children }: any) => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 py-32"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          {title}
        </h2>
        <p className="text-white/75 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {children}
        </p>
      </div>
    </motion.section>
  );
};

/* ===================== LANDING ===================== */
export const LandingPage: React.FC<LandingPageProps> = ({
  countries,
  onSelectCountry
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* CTA (VERSION 2 CONSERVÉE) */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex justify-between items-center px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 transition"
        >
          <div className="text-left">
            <p className="text-xs uppercase text-white/40">
              Le bilan finale de ce voyage
            </p>
            <p className="text-2xl font-semibold">
              Voir le bilan
            </p>
          </div>
          <ArrowRight />
        </button>
      </div>

      {/* COUNTRIES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-6">
        {countries.map((c) => (
          <CountryBlock key={c.id} country={c} onSelect={onSelectCountry} />
        ))}
      </div>

      {/* ===================== MODAL ===================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-6 right-6 text-white text-3xl z-50"
            >
              ×
            </button>

            {/* HERO */}
            <section className="h-screen flex items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl">
                Voyager seul : 5 mois entre liberté et introspection
              </h1>
            </section>

            {/* ===================== TEXTE COMPLET ===================== */}

            <StorySection title="Voyager seul">
              5 mois. 5 mois seul. Des rencontres parfois le temps d’un café, d’autres le temps de plusieurs jours.
            </StorySection>

            <StorySection title="Le quotidien du voyage">
              Faire des balades, manger au restaurant, faire des visites guidées, en prendre plein les yeux.
              Je ne vais pas mentir, ce n’est pas toujours évident, car ici le plus compliqué, c’est le rapport au temps et à la définition des limites.
            </StorySection>

            <StorySection title="La liberté totale">
              Aucune limite ne m’a été imposée ni donnée pendant 5 mois.
              Que ce soit en randonnée, en balade, au restaurant ou même dans mon lit, j’ai été maître de mon temps et de la direction de mes journées.
            </StorySection>

            <StorySection title="Les moments suspendus">
              Parfois, je me posais devant des vues incroyables après plusieurs heures de marche.
              Je regardais le paysage, contemplais les arbres, les oiseaux, les nuages.
              Mais bizarrement, dans ces moments-là, je n’avais aucun questionnement existentiel.
              J’étais juste connecté à ce que je vivais.
            </StorySection>

            <StorySection title="Le rythme personnel">
              Se dire : « ok, je reste encore 1h, je marche encore 1h, je vais rentrer, je vais aller dans cette rue, dans ce magasin ».
              Faire les choses pour soi, à son propre rythme.
            </StorySection>

            <StorySection title="Les envies simples">
              Envie d’un gâteau ? D’une boisson ? D’une balade ? D’un sport ? D’un musée ? D’un ramen ?
              Tu mets ton manteau, tes chaussures… et c’est parti.
            </StorySection>

            <StorySection title="Être soi-même">
              Ce voyage aura confirmé que je ne suis pas extraverti.
              Je me connecte aux gens naturellement, sans forcer.
            </StorySection>

            <StorySection title="Les rencontres">
              Je ne force aucune rencontre. Tout vient naturellement.
              Et si je m’y sens bien, alors ce moment devient précieux.
            </StorySection>

            <StorySection title="L’état d’esprit">
              Je suis un rêveur. Un optimiste.
              Je me suis permis de rêver à travers l’expérience elle-même.
            </StorySection>

            <StorySection title="Les journées">
              Chaque jour était une découverte.
              Parfois se mettre en danger, parfois chercher la sécurité.
            </StorySection>

            <StorySection title="La liberté vécue">
              Je n’aurai peut-être plus jamais cette liberté.
              Mais je l’ai vécue pleinement.
            </StorySection>

            <StorySection title="Comprendre le voyage">
              La clé n’est pas le tourisme mais l’expérience.
              Le voyage solo est introspection permanente.
            </StorySection>

            <StorySection title="Voir, ressentir, accepter, continuer">
              Voir. Ressentir. Accepter. Continuer.
            </StorySection>

            <StorySection title="Voir">
              Voir des paysages incroyables, des forêts, des plages, des montagnes, des couchers de soleil.
            </StorySection>

            <StorySection title="Ressentir">
              Ressentir le dépassement de soi, le silence, la peur, le froid, la liberté.
            </StorySection>

            <StorySection title="Accepter">
              Accepter que tout est éphémère.
            </StorySection>

            <StorySection title="Continuer">
              Continuer malgré tout.
            </StorySection>

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

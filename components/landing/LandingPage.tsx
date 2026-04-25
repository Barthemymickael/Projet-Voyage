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
            <span className="hidden sm:block">Lire</span>
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
                Le bilan de mon voyage solo : 5 mois entre la Corée du Sud et le Japon
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-10"
              >
                

Voyager seul

5 mois. 5 mois seul. Des rencontres parfois le temps d’un café, d’autres le temps de plusieurs jours.

Faire des balades, manger au restaurant, faire des visites guidées, en prendre plein les yeux.
Je ne vais pas mentir, ce n’est pas toujours évident, car ici le plus compliqué, c’est le rapport au temps et à la définition des limites.

Aucune limite ne m’a été imposée ni donnée pendant 5 mois.
Que ce soit en randonnée, en balade, au restaurant ou même dans mon lit, j’ai été maître de mon temps et de la direction de mes journées.

Parfois, je me posais devant des vues incroyables après plusieurs heures de marche, et rien ne me venait à l’esprit.
Je regardais le paysage, contemplais les arbres, les oiseaux, les nuages.
Mais bizarrement, dans ces moments-là, je n’avais aucun questionnement existentiel. J’étais juste connecté à ce que je vivais.

Se dire : « ok, je reste encore 1h, je marche encore 1h, je vais rentrer, je vais aller dans cette rue, dans ce magasin ».

Faire les choses pour soi, à son propre rythme. Là est la véritable réponse du voyage seul.

Envie d’un gâteau ? D’une boisson ? D’une balade ? D’aller faire du sport ? D’aller au musée ? De faire une randonnée ? Envie d’un ramen ?

Tu mets ton manteau, tes chaussures… et c’est parti.

Ce voyage aura confirmé que je ne suis pas un extraverti, et je pense ne pas l’être dans les prochaines années.
J’ai toujours su bien me connecter à un groupe, et ce, très rapidement, mais je me suis construit comme ça.

Je ne force aucune rencontre. Tout vient à moi par hasard, et c’est à moi de prendre ou non la perche.
Et c’est à ce moment-là que je me sens bien.
Car ce moment, cette rencontre, si je m’y sens bien, alors elle n’en sera que plus belle.

Je suis un rêveur. Un optimiste. Peut-être parfois un stoïcien.

Alors je me suis permis de rêver. Non pas par les pays en eux-mêmes, mais par l’acte que j’ai réalisé.

Complètement connecté au moment présent, avec l’acceptation de mes failles, de mes faiblesses, de mes goûts, de ce que je suis, tout simplement.

Alors chaque jour était l’occasion d’une nouvelle activité, l’occasion de découvrir un lieu, un artiste, un quartier, un restaurant.

Parfois se mettre en danger, tester l’inconnu.
Parfois se conforter dans ce que j’aime, dans la sécurité.

Je n’aurai peut-être plus jamais cette liberté, mais je peux me dire que je l’ai eue, fut un temps.

Cette liberté de lire, de marcher, de flâner, de n’avoir aucun impératif, de ne rendre de comptes à personne.

Je l’ai vue, ressentie et vécue.

Il m’est actuellement compliqué de raconter mon voyage.
Comme une longue liste remplie d’égoïsme, je relate ce que j’ai vu, ce que j’ai fait, ce qu’il faut voir.

Mais peut-on réellement comprendre que la véritable clé de ce voyage n’est pas le tourisme, mais l’expérience ?

Le sentiment de se retrouver seul face à un monument, une plage, une forêt, une route, une œuvre d’art.
Et ce, chaque jour.

Le voyage solo, c’est se poser des questions, remettre en question chaque petite création de l’humain et de la nature, et tenter, tant bien que mal, d’y trouver une forme de réponse.
Une réponse qui ne sera que subjective, mais profondément analysée pendant des heures.

C’est parfois essayer de trouver un sens à ce que l’on voit, ce que l’on fait, ce que l’on vit.

J’ai parfois eu du mal à mettre des mots sur ce que je vivais, et je pense que c’est ici la traduction directe de ce voyage.

Voir, ressentir, accepter, continuer.

Voir : voir les plus beaux paysages jamais vus, voir des animaux en forêt, voir des plages d’eau turquoise, voir la neige dans une vallée depuis un point de vue à 400 m de hauteur, voir le coucher de soleil un nombre incalculable de fois.

Ressentir : ressentir le dépassement de soi lors d’une randonnée, d’une longue marche de 25 km, ressentir le silence absolu au sommet d’une montagne à 800 m de haut, ressentir la peur de ne plus avoir de batterie en pleine forêt de nuit, ressentir le froid glacial de -18 degrés en regardant le feu d’artifice du Nouvel An.

Accepter : accepter que ce que j’ai vu et ressenti n’est qu’éphémère, qu’hier est déjà du passé, qu’aujourd’hui est un nouveau jour qui sera remplacé par le suivant.
Alors accepter qu’un moment n’est pas éternel.

Continuer : continuer même si le jour précédent était mémorable. Se réveiller le matin avec des souvenirs incroyables de la veille, mais continuer à partir à l’aventure.

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

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
      className="relative flex flex-col flex-1 w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[78vh] xl:min-h-[86vh] overflow-hidden group cursor-pointer rounded-3xl lg:rounded-none bg-gradient-to-b from-white/5 via-white/0 to-black/60 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered && !country.isLocked ? 1.05 : 1 }}
      >
        <img
          src={country.videoUrl}
          alt={country.name}
          className={`w-full h-full object-cover ${
            country.isLocked ? 'grayscale opacity-25 blur-[2px]' : 'opacity-85'
          }`}
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {country.name}
        </h2>

        {!country.isLocked && (
          <div className="flex items-center gap-2 text-white/80">
            Entrer <ArrowRight size={16} />
          </div>
        )}
      </div>
    </div>
  );
};

export const LandingPage: React.FC<LandingPageProps> = ({ countries, onSelectCountry }) => {
  const [isTravelSummaryOpen, setIsTravelSummaryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black px-6 py-12 text-white">

      {/* CTA */}
      <div className="max-w-5xl mx-auto mb-10">
        <button
          onClick={() => setIsTravelSummaryOpen(true)}
          className="w-full flex justify-between items-center px-6 py-5 rounded-2xl border border-white/10 hover:bg-white/5 transition"
        >
          <div>
            <p className="text-sm text-white/40 uppercase">
              Bilan final
            </p>
            <p className="text-xl font-semibold">
              Lire mon expérience
            </p>
          </div>

          <ArrowRight />
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              onClick={() => setIsTravelSummaryOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl"
            >
              ×
            </button>

            {/* CONTENT */}
            <div className="w-full max-w-3xl h-[85vh] overflow-y-auto px-6 sm:px-10 py-10">

              <motion.h2
                className="text-3xl sm:text-5xl font-bold mb-10 leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              >
                5 mois seul entre la Corée du Sud et le Japon
              </motion.h2>

              <motion.div
  className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  {/* CLOSE */}
  <button
    onClick={() => setIsTravelSummaryOpen(false)}
    className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl z-50"
  >
    ×
  </button>

  {/* CONTAINER SCROLL */}
  <div className="w-full max-w-3xl h-[85vh] overflow-y-auto px-6 sm:px-10 py-12">

    {/* TITLE */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl sm:text-5xl font-semibold mb-10 leading-tight"
    >
      Voyager seul
    </motion.h2>

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="space-y-6 text-white/70 text-base sm:text-lg leading-relaxed"
    >

      <p>5 mois. 5 mois seul. Des rencontres parfois le temps d’un café, d’autres le temps de plusieurs jours.</p>

      <p>Faire des balades, manger au restaurant, faire des visites guidées, en prendre plein les yeux.<br/>
      Je ne vais pas mentir, ce n’est pas toujours évident, car ici le plus compliqué, c’est le rapport au temps et à la définition des limites.</p>

      <p>Aucune limite ne m’a été imposée ni donnée pendant 5 mois.<br/>
      Que ce soit en randonnée, en balade, au restaurant ou même dans mon lit, j’ai été maître de mon temps et de la direction de mes journées.</p>

      <p>Parfois, je me posais devant des vues incroyables après plusieurs heures de marche, et rien ne me venait à l’esprit.<br/>
      Je regardais le paysage, contemplais les arbres, les oiseaux, les nuages.<br/>
      Mais bizarrement, dans ces moments-là, je n’avais aucun questionnement existentiel. J’étais juste connecté à ce que je vivais.</p>

      <p>Se dire : « ok, je reste encore 1h, je marche encore 1h, je vais rentrer, je vais aller dans cette rue, dans ce magasin ».</p>

      <p>Faire les choses pour soi, à son propre rythme. Là est la véritable réponse du voyage seul.</p>

      <p>Envie d’un gâteau ? D’une boisson ? D’une balade ? D’aller faire du sport ? D’aller au musée ? De faire une randonnée ? Envie d’un ramen ?</p>

      <p>Tu mets ton manteau, tes chaussures… et c’est parti.</p>

      <p>Ce voyage aura confirmé que je ne suis pas un extraverti, et je pense ne pas l’être dans les prochaines années.<br/>
      J’ai toujours su bien me connecter à un groupe, et ce, très rapidement, mais je me suis construit comme ça.</p>

      <p>Je ne force aucune rencontre. Tout vient à moi par hasard, et c’est à moi de prendre ou non la perche.<br/>
      Et c’est à ce moment-là que je me sens bien.<br/>
      Car ce moment, cette rencontre, si je m’y sens bien, alors elle n’en sera que plus belle.</p>

      <p>Je suis un rêveur. Un optimiste. Peut-être parfois un stoïcien.</p>

      <p>Alors je me suis permis de rêver. Non pas par les pays en eux-mêmes, mais par l’acte que j’ai réalisé.</p>

      <p>Complètement connecté au moment présent, avec l’acceptation de mes failles, de mes faiblesses, de mes goûts, de ce que je suis, tout simplement.</p>

      <p>Alors chaque jour était l’occasion d’une nouvelle activité, l’occasion de découvrir un lieu, un artiste, un quartier, un restaurant.</p>

      <p>Parfois se mettre en danger, tester l’inconnu.<br/>
      Parfois se conforter dans ce que j’aime, dans la sécurité.</p>

      <p>Je n’aurai peut-être plus jamais cette liberté, mais je peux me dire que je l’ai eue, fut un temps.</p>

      <p>Cette liberté de lire, de marcher, de flâner, de n’avoir aucun impératif, de ne rendre de comptes à personne.</p>

      <p>Je l’ai vue, ressentie et vécue.</p>

      <p>Il m’est actuellement compliqué de raconter mon voyage.<br/>
      Comme une longue liste remplie d’égoïsme, je relate ce que j’ai vu, ce que j’ai fait, ce qu’il faut voir.</p>

      <p>Mais peut-on réellement comprendre que la véritable clé de ce voyage n’est pas le tourisme, mais l’expérience ?</p>

      <p>Le sentiment de se retrouver seul face à un monument, une plage, une forêt, une route, une œuvre d’art.<br/>
      Et ce, chaque jour.</p>

      <p>Le voyage solo, c’est se poser des questions, remettre en question chaque petite création de l’humain et de la nature, et tenter, tant bien que mal, d’y trouver une forme de réponse.<br/>
      Une réponse qui ne sera que subjective, mais profondément analysée pendant des heures.</p>

      <p>C’est parfois essayer de trouver un sens à ce que l’on voit, ce que l’on fait, ce que l’on vit.</p>

      <p>J’ai parfois eu du mal à mettre des mots sur ce que je vivais, et je pense que c’est ici la traduction directe de ce voyage.</p>

      <p className="text-white font-medium">Voir, ressentir, accepter, continuer.</p>

      <p><strong>Voir :</strong> voir les plus beaux paysages jamais vus, voir des animaux en forêt, voir des plages d’eau turquoise, voir la neige dans une vallée depuis un point de vue à 400 m de hauteur, voir le coucher de soleil un nombre incalculable de fois.</p>

      <p><strong>Ressentir :</strong> ressentir le dépassement de soi lors d’une randonnée, d’une longue marche de 25 km, ressentir le silence absolu au sommet d’une montagne à 800 m de haut, ressentir la peur de ne plus avoir de batterie en pleine forêt de nuit, ressentir le froid glacial de -18 degrés en regardant le feu d’artifice du Nouvel An.</p>

      <p><strong>Accepter :</strong> accepter que ce que j’ai vu et ressenti n’est qu’éphémère, qu’hier est déjà du passé, qu’aujourd’hui est un nouveau jour qui sera remplacé par le suivant.<br/>
      Alors accepter qu’un moment n’est pas éternel.</p>

      <p><strong>Continuer :</strong> continuer même si le jour précédent était mémorable. Se réveiller le matin avec des souvenirs incroyables de la veille, mais continuer à partir à l’aventure.</p>

    </motion.div>

    {/* CTA */}
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-12 px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition"
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

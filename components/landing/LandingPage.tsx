import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Check, ArrowRight, X } from 'lucide-react';
import { CountryData } from '../../types';

interface LandingPageProps {
  countries: CountryData[];
  onSelectCountry: (id: string) => void;
}

/* ===================== COMPONENTS ===================== */

// Composant pour animer le texte au scroll
const FadeInText: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0,
  className = "text-white/80 text-lg md:text-xl leading-relaxed mb-8"
}) => (
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.p>
);

// Composant pour les 4 piliers finaux
const ConceptPillar: React.FC<{ title: string; children: React.ReactNode; index: number }> = ({ title, children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm text-left"
  >
    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">{title}</h3>
    <p className="text-white/70 leading-relaxed">{children}</p>
  </motion.div>
);

/* ===================== COUNTRY CARD ===================== */
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
      className="relative flex flex-col flex-1 w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[78vh] xl:min-h-[86vh] overflow-hidden group cursor-pointer rounded-3xl lg:rounded-none bg-gradient-to-b from-white/5 via-white/0 to-black/60 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      tabIndex={country.isLocked ? -1 : 0}
      role="button"
      aria-label={`Sélectionner ${country.name}`}
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
          alt={`Paysage de ${country.name}`}
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
          {country.isLocked ? <Lock size={16} /> : <Check size={16} />}
          <span className="text-xs uppercase tracking-widest font-medium">
            {country.isLocked ? 'Verrouillé' : 'Mission accomplie'}
          </span>
        </motion.div>

        <h2 className="mt-6 text-4xl font-bold text-white uppercase tracking-wide">
          {country.name}
        </h2>

        {!country.isLocked && (
          <div className="mt-4 flex items-center gap-2 text-white/90 font-medium">
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

/* ===================== LANDING ===================== */
export const LandingPage: React.FC<LandingPageProps> = ({
  countries,
  onSelectCountry
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* CTA */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex flex-col items-center justify-center text-center px-6 py-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 group"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-white/50 text-center mb-2">
              Le bilan final de ce voyage
            </p>
            <p className="text-3xl font-semibold text-center text-white/90 group-hover:text-white transition-colors">
              Voir le bilan
            </p>
          </div>
          <motion.div 
            className="mt-4 text-white/50 group-hover:text-white transition-colors"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowRight />
          </motion.div>
        </button>
      </div>

      {/* COUNTRIES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pb-24">
        {countries.map((c) => (
          <CountryBlock key={c.id} country={c} onSelect={onSelectCountry} />
        ))}
      </div>

      {/* ===================== MODAL ===================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black overflow-y-auto scroll-smooth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white z-50 transition-colors"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            {/* HERO MODAL */}
            <section className="min-h-screen flex items-center justify-center text-center px-6 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="max-w-4xl relative z-10"
              >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                  Voyager seul
                </h1>
                <p className="text-xl md:text-3xl text-white/60 font-light">
                  5 mois entre liberté et introspection
                </p>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <p className="text-sm uppercase tracking-widest mb-2">Découvrir</p>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
              </motion.div>
            </section>

            {/* STORY CONTENT */}
            <main className="max-w-3xl mx-auto px-6 py-24 space-y-12">
              
              <FadeInText className="text-2xl md:text-4xl font-medium leading-relaxed text-white/90 mb-16 text-center">
                5 mois. 5 mois seul. Des rencontres parfois le temps d’un café, d’autres le temps de plusieurs jours.
              </FadeInText>

              <div className="w-12 h-[1px] bg-white/20 mx-auto my-16" />

              <FadeInText>
                Faire des balades, manger au restaurant, faire des visites guidées, en prendre plein les yeux. Je ne vais pas mentir, ce n’est pas toujours évident, car ici le plus compliqué, c’est le rapport au temps et à la définition des limites.
              </FadeInText>

              <FadeInText>
                <span className="text-white font-medium">Aucune limite ne m’a été imposée ni donnée pendant 5 mois.</span> Que ce soit en randonnée, en balade, au restaurant ou même dans mon lit, j’ai été maître de mon temps et de la direction de mes journées.
              </FadeInText>

              <FadeInText>
                Parfois, je me posais devant des vues incroyables après plusieurs heures de marche, et rien ne me venait à l’esprit. Je regardais le paysage, contemplais les arbres, les oiseaux, les nuages. Mais bizarrement, dans ces moments-là, je n’avais aucun questionnement existentiel. J’étais juste connecté à ce que je vivais.
              </FadeInText>

              <FadeInText delay={0.2} className="text-xl md:text-2xl text-white/70 italic border-l-2 border-white/20 pl-6 my-12">
                « Se dire : ok, je reste encore 1h, je marche encore 1h, je vais rentrer, je vais aller dans cette rue, dans ce magasin. »
              </FadeInText>

              <FadeInText>
                Faire les choses pour soi, à son propre rythme. Là est la véritable réponse du voyage seul. Envie d’un gâteau ? D’une boisson ? D’une balade ? D’aller faire du sport ? D’aller au musée ? De faire une randonnée ? Envie d’un ramen ? Tu mets ton manteau, tes chaussures… et c’est parti.
              </FadeInText>

              <div className="w-12 h-[1px] bg-white/20 mx-auto my-16" />

              <FadeInText>
                Ce voyage aura confirmé que je ne suis pas un extraverti, et je pense ne pas l’être dans les prochaines années. J’ai toujours su bien me connecter à un groupe, et ce, très rapidement, mais je me suis construit comme ça.
              </FadeInText>

              <FadeInText>
                Je ne force aucune rencontre. Tout vient à moi par hasard, et c’est à moi de prendre ou non la perche. Et c’est à ce moment-là que je me sens bien. Car ce moment, cette rencontre, si je m’y sens bien, alors elle n’en sera que plus belle.
              </FadeInText>

              <FadeInText className="text-2xl text-white/90 font-medium text-center my-16">
                Je suis un rêveur. Un optimiste. Peut-être parfois un stoïcien.
              </FadeInText>

              <FadeInText>
                Alors je me suis permis de rêver. Non pas par les pays en eux-mêmes, mais par l’acte que j’ai réalisé. Complètement connecté au moment présent, avec l’acceptation de mes failles, de mes faiblesses, de mes goûts, de ce que je suis, tout simplement.
              </FadeInText>

              <FadeInText>
                Alors chaque jour était l’occasion d’une nouvelle activité, l’occasion de découvrir un lieu, un artiste, un quartier, un restaurant. Parfois se mettre en danger, tester l’inconnu. Parfois se conforter dans ce que j’aime, dans la sécurité.
              </FadeInText>

              <FadeInText>
                Je n’aurai peut-être plus jamais cette liberté, mais je peux me dire que je l’ai eue, fut un temps. Cette liberté de lire, de marcher, de flâner, de n’avoir aucun impératif, de ne rendre de comptes à personne. Je l’ai vue, ressentie et vécue.
              </FadeInText>

              <div className="w-12 h-[1px] bg-white/20 mx-auto my-16" />

              <FadeInText>
                Il m’est actuellement compliqué de raconter mon voyage. Comme une longue liste remplie d’égoïsme, je relate ce que j’ai vu, ce que j’ai fait, ce qu’il faut voir. Mais peut-on réellement comprendre que la véritable clé de ce voyage n’est pas le tourisme, mais l’expérience ?
              </FadeInText>

              <FadeInText>
                Le sentiment de se retrouver seul face à un monument, une plage, une forêt, une route, une œuvre d’art. Et ce, chaque jour. Le voyage solo, c’est se poser des questions, remettre en question chaque petite création de l’humain et de la nature, et tenter, tant bien que mal, d’y trouver une forme de réponse. Une réponse qui ne sera que subjective, mais profondément analysée pendant des heures.
              </FadeInText>

              <FadeInText>
                C’est parfois essayer de trouver un sens à ce que l’on voit, ce que l’on fait, ce que l’on vit. J’ai parfois eu du mal à mettre des mots sur ce que je vivais, et je pense que c’est ici la traduction directe de ce voyage :
              </FadeInText>

              {/* LES 4 PILIERS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-24">
                <ConceptPillar title="Voir" index={0}>
                  Voir les plus beaux paysages jamais vus, voir des animaux en forêt, voir des plages d’eau turquoise, voir la neige dans une vallée depuis un point de vue à 400 m de hauteur, voir le coucher de soleil un nombre incalculable de fois.
                </ConceptPillar>
                
                <ConceptPillar title="Ressentir" index={1}>
                  Ressentir le dépassement de soi lors d’une randonnée, d’une longue marche de 25 km, ressentir le silence absolu au sommet d’une montagne à 800 m de haut, ressentir la peur, ressentir le froid glacial de -18 degrés.
                </ConceptPillar>
                
                <ConceptPillar title="Accepter" index={2}>
                  Accepter que ce que j’ai vu et ressenti n’est qu’éphémère, qu’hier est déjà du passé, qu’aujourd’hui est un nouveau jour qui sera remplacé par le suivant. Alors accepter qu’un moment n’est pas éternel.
                </ConceptPillar>
                
                <ConceptPillar title="Continuer" index={3}>
                  Continuer même si le jour précédent était mémorable. Se réveiller le matin avec des souvenirs incroyables de la veille, mais continuer à partir à l’aventure.
                </ConceptPillar>
              </div>

            </main>

            {/* FOOTER MODAL */}
            <section className="py-24 flex items-center justify-center border-t border-white/5">
              <button
                onClick={() => setIsOpen(false)}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-3 text-white/80 hover:text-white"
              >
                Fermer le carnet de voyage <X size={18} />
              </button>
            </section>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

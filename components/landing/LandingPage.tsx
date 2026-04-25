import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
          className={`w-full h-full object-cover ${
            country.isLocked ? 'grayscale opacity-25' : ''
          }`}
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
   STORY SECTION (APPLE SCROLL)
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
      <div className="max-w-3xl text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
          {title}
        </h2>

        <p className="text-white/75 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {children}
        </p>
      </div>
    </motion.section>
  );
};

/* =========================
   LANDING PAGE
========================= */
export const LandingPage: React.FC<LandingPageProps> = ({ countries, onSelectCountry }) => {
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

      {/* =========================
         SCROLL STORY MODAL
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
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                  Voyager seul : 5 mois entre liberté et introspection
                </h1>
              </div>
            </section>

            {/* =========================
               TON TEXTE COMPLET ICI
            ========================= */}

            <StorySection title="Voyager seul">
              Voyager seul{"\n\n"}
              5 mois. 5 mois seul. Des rencontres parfois le temps d’un café, d’autres le temps de plusieurs jours.
            </StorySection>

            <StorySection title="Le quotidien du voyage">
              Faire des balades, manger au restaurant, faire des visites guidées, en prendre plein les yeux.{"\n"}
              Je ne vais pas mentir, ce n’est pas toujours évident, car ici le plus compliqué, c’est le rapport au temps et à la définition des limites.
            </StorySection>

            <StorySection title="La liberté totale">
              Aucune limite ne m’a été imposée ni donnée pendant 5 mois.{"\n"}
              Que ce soit en randonnée, en balade, au restaurant ou même dans mon lit, j’ai été maître de mon temps et de la direction de mes journées.
            </StorySection>

            <StorySection title="Les moments suspendus">
              Parfois, je me posais devant des vues incroyables après plusieurs heures de marche, et rien ne me venait à l’esprit.{"\n"}
              Je regardais le paysage, contemplais les arbres, les oiseaux, les nuages.{"\n"}
              Mais bizarrement, dans ces moments-là, je n’avais aucun questionnement existentiel. J’étais juste connecté à ce que je vivais.
            </StorySection>

            <StorySection title="Le rythme personnel">
              Se dire : « ok, je reste encore 1h, je marche encore 1h, je vais rentrer, je vais aller dans cette rue, dans ce magasin ».{"\n\n"}
              Faire les choses pour soi, à son propre rythme. Là est la véritable réponse du voyage seul.
            </StorySection>

            <StorySection title="Les envies simples">
              Envie d’un gâteau ? D’une boisson ? D’une balade ? D’aller faire du sport ? D’aller au musée ? De faire une randonnée ? Envie d’un ramen ?{"\n"}
              Tu mets ton manteau, tes chaussures… et c’est parti.
            </StorySection>

            <StorySection title="Être soi-même">
              Ce voyage aura confirmé que je ne suis pas un extraverti, et je pense ne pas l’être dans les prochaines années.{"\n"}
              J’ai toujours su bien me connecter à un groupe, et ce, très rapidement, mais je me suis construit comme ça.
            </StorySection>

            <StorySection title="Les rencontres">
              Je ne force aucune rencontre. Tout vient à moi par hasard, et c’est à moi de prendre ou non la perche.{"\n"}
              Et c’est à ce moment-là que je me sens bien.{"\n"}
              Car ce moment, cette rencontre, si je m’y sens bien, alors elle n’en sera que plus belle.
            </StorySection>

            <StorySection title="L’état d’esprit">
              Je suis un rêveur. Un optimiste. Peut-être parfois un stoïcien.{"\n\n"}
              Alors je me suis permis de rêver. Non pas par les pays en eux-mêmes, mais par l’acte que j’ai réalisé.{"\n\n"}
              Complètement connecté au moment présent, avec l’acceptation de mes failles, de mes faiblesses, de mes goûts, de ce que je suis, tout simplement.
            </StorySection>

            <StorySection title="Les journées">
              Alors chaque jour était l’occasion d’une nouvelle activité, l’occasion de découvrir un lieu, un artiste, un quartier, un restaurant.{"\n\n"}
              Parfois se mettre en danger, tester l’inconnu.{"\n"}
              Parfois se conforter dans ce que j’aime, dans la sécurité.
            </StorySection>

            <StorySection title="La liberté vécue">
              Je n’aurai peut-être plus jamais cette liberté, mais je peux me dire que je l’ai eue, fut un temps.{"\n\n"}
              Cette liberté de lire, de marcher, de flâner, de n’avoir aucun impératif, de ne rendre de comptes à personne.{"\n\n"}
              Je l’ai vue, ressentie et vécue.
            </StorySection>

            <StorySection title="Comprendre le voyage">
              Il m’est actuellement compliqué de raconter mon voyage.{"\n"}
              Comme une longue liste remplie d’égoïsme, je relate ce que j’ai vu, ce que j’ai fait, ce que l’on doit voir.{"\n\n"}
              Mais peut-on réellement comprendre que la véritable clé de ce voyage n’est pas le tourisme, mais l’expérience ?
            </StorySection>

            <StorySection title="Le voyage solo">
              Le sentiment de se retrouver seul face à un monument, une plage, une forêt, une route, une œuvre d’art.{"\n"}
              Et ce, chaque jour.{"\n\n"}
              Le voyage solo, c’est se poser des questions, remettre en question chaque petite création de l’humain et de la nature, et tenter, tant bien que mal, d’y trouver une forme de réponse.{"\n"}
              Une réponse qui ne sera que subjective, mais profondément analysée pendant des heures.
            </StorySection>

            <StorySection title="Voir, ressentir, accepter, continuer">
              C’est parfois essayer de trouver un sens à ce que l’on voit, ce que l’on fait, ce que l’on vit.{"\n\n"}
              Voir, ressentir, accepter, continuer.
            </StorySection>

            <StorySection title="Voir">
              Voir : voir les plus beaux paysages jamais vus, voir des animaux en forêt, voir des plages d’eau turquoise, voir la neige dans une vallée depuis un point de vue à 400 m de hauteur, voir le coucher de soleil un nombre incalculable de fois.
            </StorySection>

            <StorySection title="Ressentir">
              Ressentir : ressentir le dépassement de soi lors d’une randonnée, d’une longue marche de 25 km, ressentir le silence absolu au sommet d’une montagne à 800 m de haut, ressentir la peur de ne plus avoir de batterie en pleine forêt de nuit, ressentir le froid glacial de -18 degrés en regardant le feu d’artifice du Nouvel An.
            </StorySection>

            <StorySection title="Accepter">
              Accepter : accepter que ce que j’ai vu et ressenti n’est qu’éphémère, qu’hier est déjà du passé, qu’aujourd’hui est un nouveau jour qui sera remplacé par le suivant.{"\n"}
              Alors accepter qu’un moment n’est pas éternel.
            </StorySection>

            <StorySection title="Continuer">
              Continuer : continuer même si le jour précédent était mémorable. Se réveiller le matin avec des souvenirs incroyables de la veille, mais continuer à partir à l’aventure.
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

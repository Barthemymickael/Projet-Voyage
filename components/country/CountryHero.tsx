import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from '../ui/Magnetic';
import { Button } from '../ui/Button';
import { ArrowDown, Map, Sparkles } from 'lucide-react';
import { CountryData } from '../../types';

export const CountryHero = ({ data }: { data: CountryData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const projectCards = [
    {
      title: 'Convertislowed.app',
      description: 'Transformer des sons en slowed + reverb, nightcore ou speed up avec export MP3/WAV/FLAC en moins de 30 secondes.',
      date: 'Septembre 2025',
      link: 'https://convertislowed.app',
      mood: 'Musique',
      status: 'En ligne',
      category: 'Produit audio',
    },
    {
      title: 'Playlist intime & souvenirs',
      description: 'Un mini-site pour partager des morceaux et histoires personnelles, pensé comme une capsule de souvenirs en ligne.',
      date: 'Janvier 2026',
      link: '#',
      mood: 'Nostalgie',
      status: 'En conception',
      category: 'Expérience narrative',
    },
    {
      title: 'Blog voyage Asie 2025/2026',
      description: 'Une exploration interactive du voyage, avec cartes, récits et médias pour suivre l’évolution en temps réel.',
      date: 'En cours',
      link: 'https://voyage-asie-mickael.vercel.app',
      mood: 'Voyage',
      status: 'En cours',
      category: 'Journal numérique',
    },
    {
      title: 'Carnet vidéo mensuel',
      description: 'Un format vidéo mensuel pour documenter l’évolution personnelle et les découvertes locales sur 6 mois.',
      date: '2026',
      link: '#',
      mood: 'Création',
      status: 'Planifié',
      category: 'Série vidéo',
    },
  ];

  const statusStyles: Record<string, string> = {
    'En ligne': 'text-emerald-200 bg-emerald-500/10 border-emerald-500/30',
    'En cours': 'text-amber-200 bg-amber-500/10 border-amber-500/30',
    'Planifié': 'text-sky-200 bg-sky-500/10 border-sky-500/30',
    'En conception': 'text-fuchsia-200 bg-fuchsia-500/10 border-fuchsia-500/30',
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 pt-16 pb-24 sm:pb-32"
    >
        {/* Background Parallax */}
        <motion.div 
            style={{ y, scale }}
            className="absolute inset-0 z-0"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85 z-10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img 
                src={data.hero.bgImage} 
                alt="Arrière-plan" 
                className="w-full h-full object-cover"
            />
        </motion.div>

        {/* Floating Particles/Sakura (Simulated) */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-50">
             {/* In a real app, use a canvas or particle library. Here, simple CSS dots */}
             {[...Array(20)].map((_, i) => (
                 <motion.div
                    key={i}
                    className="absolute bg-pink-200/60 rounded-full w-2 h-2 blur-[1px]"
                    initial={{ y: -10, x: Math.random() * window.innerWidth }}
                    animate={{ y: window.innerHeight + 10, rotate: 360 }}
                    transition={{ 
                        duration: 5 + Math.random() * 5, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: Math.random() * 5 
                    }}
                 />
             ))}
        </div>

        {/* Content */}
        <motion.div 
            style={{ opacity }}
            className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto space-y-5 sm:space-y-6 bg-black/55 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-sm py-8 sm:py-10"
        >
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-100 font-mono tracking-[0.2em] text-xs sm:text-sm md:text-base uppercase shadow-[0_8px_30px_rgba(99,102,241,0.35)]"
            >
                {data.hero.subtitle}
            </motion.p>
            <div className="w-full flex justify-center">
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)] break-words max-w-[90vw]"
                >
                    {data.hero.title}
                </motion.h1>
            </div>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-zinc-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-3 sm:px-6 drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
            >
                {data.hero.description}
            </motion.p>

            {data.hero.note && (
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-sm text-indigo-100/80 bg-white/10 border border-white/10 rounded-xl px-4 py-2 inline-flex items-center gap-2 justify-center"
                >
                    <span className="text-lg">✏️</span>
                    <span>{data.hero.note}</span>
                </motion.p>
            )}
            
            <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4 items-stretch sm:items-center max-w-2xl mx-auto">
                <Magnetic>
                    <Button
                        size="lg"
                        className="rounded-full px-6 sm:px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-white shadow-[0_18px_45px_rgba(79,70,229,0.35)] border border-white/20 hover:shadow-[0_22px_55px_rgba(59,130,246,0.45)] w-full sm:w-auto min-h-[54px]"
                        onClick={() => scrollToSection('timeline')}
                    >
                        Commencer le voyage
                    </Button>
                </Magnetic>
                <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-6 sm:px-8 backdrop-blur-md border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 w-full sm:w-auto min-h-[54px] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                    onClick={() => scrollToSection('map')}
                >
                    <Map className="w-4 h-4 mr-2" /> Voir la carte
                </Button>
                <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full px-6 sm:px-8 bg-white/10 text-white border border-white/20 hover:bg-white/15 w-full sm:w-auto min-h-[54px] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                    onClick={() => setShowInfo(true)}
                >
                    Infos pratiques
                </Button>
                <Magnetic>
                    <Button
                        size="lg"
                        className="rounded-full px-6 sm:px-8 bg-white text-zinc-900 shadow-[0_14px_40px_rgba(0,0,0,0.35)] border border-white/20 hover:-translate-y-0.5 w-full sm:w-auto min-h-[54px]"
                        onClick={() => setShowProjects(true)}
                    >
                        <Sparkles className="w-4 h-4 mr-2" /> Mes projets
                    </Button>
                </Magnetic>
            </div>
        </motion.div>

        <AnimatePresence>
            {showProjects && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowProjects(false)}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.97, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
                        className="relative z-10 w-full max-w-5xl bg-neutral-950/95 border border-white/10 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] p-6 sm:p-8 max-h-[90vh] sm:max-h-[80vh] overflow-y-auto mt-10 sm:mt-0"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative flex items-start justify-between gap-4 mb-6">
                            <div className="space-y-2">
                                <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/50">Mes projets</p>
                                <div className="flex flex-col gap-2 text-left">
                                    <h3 className="text-3xl font-semibold text-white flex items-center gap-2">
                                        <Sparkles className="w-6 h-6 text-amber-200" />
                                        Mes 4 projets sur un objectif de 6 mois
                                    </h3>
                                    <p className="text-sm text-white/70 max-w-2xl">
                                        Une sélection sobre et hiérarchisée pour suivre rapidement les priorités, leurs statuts et leurs prochaines échéances.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3 pt-1 text-xs text-white/60">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 bg-white/5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" /> 4 projets actifs
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 bg-white/5">
                                        <span className="w-2 h-2 rounded-full bg-sky-300" /> Horizon 6 mois
                                    </span>
                                </div>
                            </div>
                            <button
                                className="text-white/70 hover:text-white bg-white/5 rounded-full p-2 border border-white/10"
                                onClick={() => setShowProjects(false)}
                                aria-label="Fermer"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {projectCards.map((card, index) => (
                                <motion.a
                                    key={card.title}
                                    href={card.link}
                                    target={card.link === '#' ? '_self' : '_blank'}
                                    rel="noreferrer"
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_16px_38px_rgba(0,0,0,0.45)] backdrop-blur-md"
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.05 * index, duration: 0.35, ease: 'easeOut' }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="relative flex flex-col gap-3 text-white">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="space-y-1">
                                                <h4 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">{card.title}</h4>
                                                <p className="text-sm text-white/60">{card.category}</p>
                                            </div>
                                            <span
                                                className={`text-[11px] uppercase tracking-[0.16em] rounded-full border px-3 py-1 font-medium ${statusStyles[card.status]}`}
                                            >
                                                {card.status}
                                            </span>
                                        </div>
                                        <p className="text-sm leading-relaxed text-white/75">
                                            {card.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-white/60 border-t border-white/5 pt-3">
                                            <span className="font-mono">{card.date}</span>
                                            <span className="inline-flex items-center gap-1 text-white/70 group-hover:text-white">
                                                Découvrir <ArrowDown className="w-3 h-3 rotate-[-90deg]" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

        <AnimatePresence>
            {showInfo && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowInfo(false)}
                >
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="relative z-10 max-w-lg w-full bg-zinc-900/95 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div>
                                <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-200/80">Infos pratiques</p>
                                <h3 className="text-2xl font-semibold text-white mt-1">Quelques petites infos</h3>
                            </div>
                            <button
                                className="text-white/70 hover:text-white bg-white/10 rounded-full p-2 border border-white/10"
                                onClick={() => setShowInfo(false)}
                                aria-label="Fermer"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="space-y-3 text-white/90">
                            <div className="flex items-start gap-3">
                                <span className="text-lg">🚇</span>
                                <div>
                                    <p className="font-semibold text-white">Ticket métro/bus</p>
                                    <p className="text-sm text-white/80">Prix moyen d'un trajet : 1750 ₩ = 1€</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-lg">💪</span>
                                <div>
                                    <p className="font-semibold text-white">Abonnement salle de sport</p>
                                    <p className="text-sm text-white/80"> 50 000₩ = 29 € pour le mois</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-lg">🍽️</span>
                                <div>
                                    <p className="font-semibold text-white">Repas du soir</p>
                                    <p className="text-sm text-white/80">En moyenne 5 € par repas </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-lg">🎬</span>
                                <div>
                                    <p className="font-semibold text-white">La série que je regarde pour ce voyage</p>
                                    <p className="text-sm text-white/80">Psych : Enquêteur malgré lui (2006-2014)</p>
                                </div>
                            </div>
                          <div className="flex items-start gap-3">
                                <span className="text-lg">📖</span>
                                <div>
                                    <p className="font-semibold text-white">Le livre que je lis pour ce voyage</p>
                                    <p className="text-sm text-white/80">L'Idiot de Dostoïevski (1874)</p>
                                </div>
                            </div>
                          <div className="flex items-start gap-3">
                                <span className="text-lg">🎵</span>
                                <div>
                                    <p className="font-semibold text-white">La musique que j'écoute en boucle</p>
                                    <p className="text-sm text-white/80">Plush - Stone Temple Pilots</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Scroll Indicator */}
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 z-20 text-white/50"
        >
            <ArrowDown className="w-6 h-6" />
        </motion.div>
    </div>
  );
};

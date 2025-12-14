import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from '../ui/Magnetic';
import { Button } from '../ui/Button';
import { ArrowDown, Map } from 'lucide-react';
import { CountryData } from '../../types';

export const CountryHero = ({ data }: { data: CountryData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showInfo, setShowInfo] = useState(false);
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
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-xl mx-auto">
                <Magnetic>
                    <Button
                        size="lg"
                        className="rounded-full px-5 sm:px-8 bg-white text-black hover:bg-zinc-200 w-full sm:w-auto min-h-[52px]"
                        onClick={() => scrollToSection('timeline')}
                    >
                        Commencer le voyage
                    </Button>
                </Magnetic>
                <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-5 sm:px-8 backdrop-blur-md border-white/20 hover:bg-white/10 w-full sm:w-auto min-h-[52px]"
                    onClick={() => scrollToSection('map')}
                >
                    <Map className="w-4 h-4 mr-2" /> Voir la carte
                </Button>
                <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full px-5 sm:px-8 bg-white/10 text-white border border-white/20 hover:bg-white/15 w-full sm:w-auto min-h-[52px]"
                    onClick={() => setShowInfo(true)}
                >
                    Infos pratiques
                </Button>
            </div>
        </motion.div>

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

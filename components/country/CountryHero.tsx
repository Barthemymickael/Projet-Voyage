import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from '../ui/Magnetic';
import { Button } from '../ui/Button';
import { ArrowDown, Map } from 'lucide-react';
import { CountryData } from '../../types';

export const CountryHero = ({ data }: { data: CountryData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-10" />
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
            className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto space-y-5 sm:space-y-6"
        >
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-indigo-400 font-mono tracking-[0.2em] text-sm md:text-base mb-4 uppercase"
            >
                {data.hero.subtitle}
            </motion.p>
            <div className="w-full flex justify-center">
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-2xl break-words max-w-[90vw]"
                >
                    {data.hero.title}
                </motion.h1>
            </div>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-1"
            >
                {data.hero.description}
            </motion.p>
            
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
            </div>
        </motion.div>

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

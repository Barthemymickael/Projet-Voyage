import React, { useEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { TimelineEvent } from '../../types';

export const Timeline = ({ events }: { events: TimelineEvent[] }) => {
  // 1. État simplifié : on ne stocke plus les coordonnées (rect), juste les données de l'image
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
    id: string;
  } | null>(null);

  // Gestion de la touche Echap pour fermer
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      // Optionnel : Bloquer le scroll du body quand la modale est ouverte
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeImage]);

  return (
    <LayoutGroup>
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-white mb-20 pl-4 border-l-4 border-indigo-500"
          >
            Chronologie
          </motion.h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />

            {events.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 mb-24 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors duration-300 group">
                    <span className="text-indigo-400 font-mono text-sm mb-2 block">{event.date}</span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{event.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                      {event.description}
                      {event.note && (
                        <>
                          <br />
                          <strong>{event.note}</strong>
                        </>
                      )}
                    </p>
                    
                    {event.bullets && event.bullets.length > 0 && (
                      <ul className="text-zinc-400 leading-relaxed mb-4 list-disc list-inside space-y-1">
                        {event.bullets.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {event.video ? (
                      <div className="relative block w-full overflow-hidden rounded-lg border border-white/5 bg-black/40">
                        <video
                          src={event.video}
                          controls
                          playsInline
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ) : (
                      event.image && (
                        <button
                          type="button"
                          onClick={() => {
                            // 2. OnClick simplifié : on passe juste les infos, pas de calculs
                            setActiveImage({
                              src: event.image!,
                              title: event.title,
                              id: event.id,
                            });
                          }}
                          className="relative block w-full h-48 overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:ring-offset-2 focus:ring-offset-zinc-900 cursor-zoom-in group"
                        >
                          <motion.img
                            // ID unique pour lier l'animation à la modale
                            layoutId={`timeline-image-${event.id}`}
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20" />
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. MODALE CORRIGÉE */}
        <AnimatePresence>
          {activeImage && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-10">
              
              {/* Backdrop (Fond sombre) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={() => setActiveImage(null)}
              />

              {/* Conteneur de l'image (Centré par Flexbox) */}
              <motion.div
                layoutId={`timeline-image-${activeImage.id}`}
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl ring-1 ring-white/10 z-[121]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Bouton Fermer */}
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-md"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Image */}
                <motion.img
                   src={activeImage.src}
                   alt={activeImage.title}
                   className="w-full h-auto max-h-[80vh] object-contain bg-zinc-950"
                />

                {/* Titre en bas */}
                <div className="p-4 md:p-6 bg-zinc-900 border-t border-white/5">
                  <h4 className="text-xl font-bold text-white text-center">{activeImage.title}</h4>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
};

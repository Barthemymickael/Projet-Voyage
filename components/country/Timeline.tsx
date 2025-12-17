import React, { useEffect, useState } from 'react';
// 1. On ajoute createPortal depuis react-dom
import { createPortal } from 'react-dom';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { TimelineEvent } from '../../types';

const getYouTubeEmbedUrl = (url: string) => {
  const shortMatch = url.match(/youtube\.com\/shorts\/([\w-]+)/i);
  const standardMatch = url.match(/(?:v=|youtu\.be\/)([\w-]+)/i);
  const videoId = shortMatch?.[1] ?? standardMatch?.[1];

  if (!videoId) return null;

  const params = new URLSearchParams({
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
    controls: '1',
    disablekb: '1',
    fs: '0',
    iv_load_policy: '3',
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};

export const Timeline = ({ events }: { events: TimelineEvent[] }) => {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
    id: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null);
    };
    if (activeImage) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
                <div className="flex-1 ml-12 md:ml-0">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl group hover:border-indigo-500/50 transition-colors">
                    {/* ... Contenu texte ... */}
                    <span className="text-indigo-400 font-mono text-sm mb-2 block">{event.date}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-4">{event.description}</p>
                    
                    {event.bullets && (
                      <ul className="text-zinc-400 leading-relaxed mb-4 list-disc list-inside">
                        {event.bullets.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    )}

                    {/* MÉDIA */}
                    {event.video && (
                      <div className="mt-4 space-y-3">
                        {event.video.includes('drive.google.com') ? (
                          <div
                            className="relative w-full overflow-hidden rounded-xl border border-indigo-500/40 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                            style={{ paddingTop: '56.25%' }}
                          >
                            <iframe
                              src={event.video.replace('/view', '/preview')}
                              className="absolute inset-0 h-full w-full"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={`${event.title} vidéo`}
                            />
                          </div>
                        ) : getYouTubeEmbedUrl(event.video) ? (
                          <div className="relative w-full md:max-w-[320px] md:mx-auto overflow-hidden rounded-xl border border-indigo-500/40 bg-gradient-to-br from-indigo-500/10 via-zinc-900 to-black shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),transparent_45%)]" />
                            <div className="relative aspect-[9/16]">
                              <iframe
                                src={getYouTubeEmbedUrl(event.video)!}
                                className="absolute inset-0 h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                                title={`${event.title} vidéo YouTube`}
                              />
                            </div>
                            <div className="flex items-center justify-between px-4 py-3 text-sm text-indigo-100/80 bg-gradient-to-r from-white/5 via-white/0 to-white/5 border-t border-indigo-500/20">
                              <span className="font-medium">Format vertical 9/16</span>
                              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs uppercase tracking-wide">YouTube</span>
                            </div>
                          </div>
                        ) : (
                          <video
                            controls
                            className="mt-2 w-full overflow-hidden rounded-lg border border-zinc-800 bg-black"
                            title={`${event.title} vidéo`}
                          >
                            <source src={event.video} />
                            Votre navigateur ne prend pas en charge la lecture vidéo.
                          </video>
                        )}
                      </div>
                    )}

                    {/* BOUTON IMAGE THUMBNAIL */}
                    {event.image && (
                      <button
                        type="button"
                        onClick={() => setActiveImage({ src: event.image!, title: event.title, id: event.id })}
                        className="relative mt-4 block h-48 w-full cursor-zoom-in overflow-hidden rounded-lg group"
                      >
                        <motion.img
                          layoutId={`timeline-image-${event.id}`}
                          src={event.image}
                          alt={event.title}
                          className="absolute inset-0 h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. LE PORTAL : On sort physiquement la modale du composant pour la mettre dans le body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeImage && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={() => setActiveImage(null)}
              />

              {/* L'image agrandie */}
              <motion.div
                layoutId={`timeline-image-${activeImage.id}`}
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute right-4 top-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  <X className="h-5 w-5" />
                </button>

                <motion.img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="w-full h-auto max-h-[85vh] object-contain bg-zinc-950"
                />
                
                <div className="p-4 bg-zinc-900 border-t border-white/10">
                  <h4 className="text-lg font-bold text-white text-center">{activeImage.title}</h4>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body // Cible du portal
      )}
    </LayoutGroup>
  );
};

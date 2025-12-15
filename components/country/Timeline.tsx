import React, { useEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { TimelineEvent } from '../../types';

export const Timeline = ({ events }: { events: TimelineEvent[] }) => {
  const [activeImage, setActiveImage] = useState<
    | {
        src: string;
        title: string;
        id: string;
        rect: { x: number; y: number; width: number; height: number };
      }
    | null
  >(null);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  useEffect(() => {
    const updateViewport = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

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
                                            onClick={(e) => {
                                              const rect = e.currentTarget.getBoundingClientRect();
                                              const scrollX = window.scrollX || window.pageXOffset;
                                              const scrollY = window.scrollY || window.pageYOffset;

                                              setActiveImage({
                                                src: event.image!,
                                                title: event.title,
                                                id: event.id,
                                                rect: {
                                                  x: rect.left + scrollX,
                                                  y: rect.top + scrollY,
                                                  width: rect.width,
                                                  height: rect.height,
                                                },
                                              });
                                            }}
                                            className="relative block w-full h-48 overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:ring-offset-2 focus:ring-offset-zinc-900 cursor-zoom-in"
                                        >
                                            <motion.img
                                                layoutId={`timeline-image-${event.id}`}
                                                src={event.image}
                                                alt={event.title}
                                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                transition={{ type: 'spring', stiffness: 240, damping: 24 }}
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

        <AnimatePresence>
          {activeImage && viewportSize.width > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-sm"
                onClick={() => setActiveImage(null)}
              />
              <motion.div
                initial={{
                  left: activeImage.rect.x - window.scrollX,
                  top: activeImage.rect.y - window.scrollY,
                  width: activeImage.rect.width,
                  height: activeImage.rect.height,
                }}
                animate={() => {
                  const currentScrollX = window.scrollX;
                  const currentScrollY = window.scrollY;
                  const targetWidth = Math.min(viewportSize.width - 32, 1100);
                  const targetHeight = Math.min(viewportSize.height - 120, Math.max(360, targetWidth * 0.6));
                  const targetLeft = Math.min(
                    Math.max(16, activeImage.rect.x - currentScrollX + activeImage.rect.width / 2 - targetWidth / 2),
                    viewportSize.width - targetWidth - 16,
                  );
                  const targetTop = Math.min(
                    Math.max(16, activeImage.rect.y - currentScrollY + activeImage.rect.height / 2 - targetHeight / 2),
                    viewportSize.height - targetHeight - 16,
                  );

                  return {
                    left: targetLeft,
                    top: targetTop,
                    width: targetWidth,
                    height: targetHeight,
                  };
                }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                className="fixed z-[121] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-zinc-950/70"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Fermer l'image"
                >
                  <X className="h-5 w-5" />
                </button>
                <motion.img
                  layoutId={`timeline-image-${activeImage.id}`}
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="h-full w-full object-contain bg-gradient-to-br from-zinc-950 to-zinc-900"
                  transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                />
                <div className="px-4 pb-4 pt-2 text-center text-sm text-zinc-200 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
                  {activeImage.title}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
};

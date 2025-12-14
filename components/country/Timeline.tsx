import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { TimelineEvent } from '../../types';

export const Timeline = ({ events }: { events: TimelineEvent[] }) => {
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

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

  return (
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
                                            onClick={() => setActiveImage({ src: event.image!, title: event.title })}
                                            className="relative block w-full h-48 overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:ring-offset-2 focus:ring-offset-zinc-900 cursor-zoom-in"
                                        >
                                            <img
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

        <AnimatePresence>
            {activeImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
                    onClick={() => setActiveImage(null)}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setActiveImage(null)}
                            className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            aria-label="Fermer l'image"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-zinc-950/60">
                            <img
                                src={activeImage.src}
                                alt={activeImage.title}
                                className="w-full h-[70vh] object-contain bg-zinc-950"
                            />
                        </div>
                        <div className="mt-4 text-center text-sm text-zinc-300">{activeImage.title}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </section>
  );
};

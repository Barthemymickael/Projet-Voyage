import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEvent } from '../../types';

export const Timeline = ({ events }: { events: TimelineEvent[] }) => {
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
                                {event.image && (
                                    <div className="overflow-hidden rounded-lg">
                                        <img 
                                            src={event.image} 
                                            alt={event.title} 
                                            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
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
    </section>
  );
};

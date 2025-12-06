import React from 'react';
import { motion } from 'framer-motion';
import { JournalEntry } from '../../types';

export const JournalSection = ({ entries }: { entries: JournalEntry[] }) => {
  return (
    <section className="py-24 bg-black px-4" id="journal">
        <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-serif text-white mb-12 text-center">Mes pensées</h2>
             <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent" />
                <div className="space-y-8">
                    {entries.map((entry, idx) => (
                        <motion.div
                            key={entry.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative pl-12"
                        >
                            <div className="absolute left-4 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
                            <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 shadow-lg">
                                <div className="text-indigo-300 font-mono text-sm mb-3">
                                    Jour {entry.day}{entry.mood ? ` • ${entry.mood}` : ''}
                                </div>
                                <p className="text-zinc-200 leading-relaxed whitespace-pre-line">
                                    {entry.excerpt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
             </div>
        </div>
    </section>
  );
};

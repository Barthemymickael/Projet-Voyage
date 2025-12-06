import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Map, Book, Image, Calendar } from 'lucide-react';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
          setIsOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const items = [
      { icon: <Calendar />, label: 'Chronologie', action: () => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' }) },
      { icon: <Map />, label: 'Carte interactive', action: () => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' }) },
      { icon: <Book />, label: 'Mes pensées', action: () => document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4"
            onClick={() => setIsOpen(false)}
        >
            <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center px-4 border-b border-zinc-800">
                    <Search className="w-5 h-5 text-zinc-500 mr-3" />
                    <input 
                        type="text" 
                        placeholder="Tapez une commande ou cherchez..." 
                        className="w-full py-4 bg-transparent text-white focus:outline-none placeholder-zinc-500"
                        autoFocus
                    />
                    <span className="text-xs text-zinc-600 border border-zinc-700 px-1.5 py-0.5 rounded">ESC</span>
                </div>
                <div className="p-2">
                    <div className="text-xs font-semibold text-zinc-500 px-2 py-2 uppercase tracking-wider">Navigation</div>
                    {items.map((item, idx) => (
                        <button 
                            key={idx}
                            onClick={() => { item.action(); setIsOpen(false); }}
                            className="w-full flex items-center gap-3 px-3 py-3 text-zinc-300 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors text-sm text-left group"
                        >
                            <span className="text-zinc-500 group-hover:text-indigo-200 transition-colors">{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

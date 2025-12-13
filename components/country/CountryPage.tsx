
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CountryData } from '../../types';
import { CountryHero } from './CountryHero';
import { Timeline } from './Timeline';
import { InteractiveMap } from './InteractiveMap';
import { JournalSection } from './Journal3D';
import { CommandPalette } from './CommandPalette';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { AdminDashboard } from './AdminDashboard';

interface CountryPageProps {
  data: CountryData;
  onBack: () => void;
  onUpdate: (data: CountryData) => void;
}

export const CountryPage: React.FC<CountryPageProps> = ({ data, onBack, onUpdate }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
        <CommandPalette />
        
        {/* Progress Bar */}
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
            style={{ scaleX }}
        />

        {/* Back Button */}
        <div className="fixed top-6 left-6 z-40">
            <Button variant="ghost" onClick={onBack} className="bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/40">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
            </Button>
        </div>

        <CountryHero data={data} />
        
        <div id="timeline">
            <Timeline events={data.timeline} />
        </div>

        <div id="map">
            <InteractiveMap markers={data.markers} mapId={data.id} />
        </div>

        <div id="journal">
            <JournalSection entries={data.journal} />
        </div>

        <AdminDashboard country={data} onUpdate={onUpdate} />

        <footer className="py-12 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-zinc-950">
            <p>Pour garder une trace de mon voyage en passant par mes réussites, mes doutes, mes pensées et, bien sûr, mes découvertes.</p>
        </footer>
    </div>
  );
};


import React, { useEffect, useMemo, useState } from 'react';
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
  const [adminRequested, setAdminRequested] = useState(false);
  const [adminAuthorized, setAdminAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const adminPassword = useMemo(() => import.meta.env.VITE_ADMIN_PASSWORD || 'voyage-secret', []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const wantsAdmin = params.get('admin') === 'true';
    setAdminRequested(wantsAdmin);

    if (wantsAdmin && sessionStorage.getItem('admin-auth') === 'true') {
      setAdminAuthorized(true);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      setAdminAuthorized(true);
      sessionStorage.setItem('admin-auth', 'true');
      setAuthError('');
      setPasswordInput('');
    } else {
      setAuthError('Mot de passe incorrect.');
    }
  };

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

        {adminRequested && !adminAuthorized && (
          <div className="fixed bottom-6 right-6 z-40 w-full max-w-sm bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-4">
            <p className="text-sm text-zinc-300 font-semibold mb-2">Accès administrateur</p>
            <p className="text-xs text-zinc-400 mb-3">Saisis le mot de passe pour ouvrir le tableau de bord privé.</p>
            <form onSubmit={handleUnlock} className="space-y-3">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white"
                placeholder="Mot de passe"
              />
              {authError && <p className="text-red-400 text-xs">{authError}</p>}
              <Button type="submit" className="w-full inline-flex justify-center gap-2 bg-indigo-600 hover:bg-indigo-500">
                Déverrouiller le tableau de bord
              </Button>
            </form>
          </div>
        )}

        {adminAuthorized && <AdminDashboard country={data} onUpdate={onUpdate} />}

        <footer className="py-12 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-zinc-950">
            <p>Pour garder une trace de mon voyage en passant par mes réussites, mes doutes, mes pensées et, bien sûr, mes découvertes.</p>
        </footer>
    </div>
  );
};

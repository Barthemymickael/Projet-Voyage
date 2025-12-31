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
  onPublish: () => Promise<void>;
  hasPendingChanges: boolean;
  isPublishing: boolean;
  publishState: 'idle' | 'success' | 'error';
}

export const CountryPage: React.FC<CountryPageProps> = ({
  data,
  onBack,
  onUpdate,
  onPublish,
  hasPendingChanges,
  isPublishing,
  publishState
}) => {
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
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0b0b0f] to-black text-white selection:bg-indigo-500/30">
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_15%_20%,rgba(79,70,229,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.05),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-40 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_45%,rgba(255,255,255,0.05)_100%)]" />
        <CommandPalette />

        {/* Progress Bar */}
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 origin-left z-50 shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
            style={{ scaleX }}
        />

        {/* Back Button */}
        <div className="fixed top-6 left-6 z-40">
            <Button variant="ghost" onClick={onBack} className="bg-black/30 backdrop-blur-xl border border-white/10 hover:bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
            </Button>
        </div>

        <div className="relative z-10 flex flex-col gap-20 lg:gap-28">
          <CountryHero data={data} />

          {/* TIMELINE SECTION */}
          <div id="timeline" className="px-4 sm:px-6 lg:px-10">
              <div className="max-w-6xl mx-auto rounded-3xl bg-white/5 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl overflow-hidden">
                  <Timeline events={data.timeline} />
                  
                  {/* --- AJOUT DE L'ANCRE POUR APP.TSX --- */}
                  <div id="timeline-last-day" className="h-px w-full opacity-0 pointer-events-none" />
              </div>
          </div>

          <div id="map" className="px-4 sm:px-6 lg:px-10">
              <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-b from-white/5 via-black/40 to-black/60 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl overflow-hidden">
                  <InteractiveMap markers={data.markers} mapId={data.id} />
              </div>
          </div>

          {/* JOURNAL SECTION */}
          <div id="journal" className="px-4 sm:px-6 lg:px-10">
              <div className="max-w-6xl mx-auto rounded-3xl bg-white/5 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl overflow-hidden">
                  <JournalSection entries={data.journal} />
                  
                  {/* --- AJOUT DE L'ANCRE POUR APP.TSX --- */}
                  <div id="journal-last-day" className="h-px w-full opacity-0 pointer-events-none" />
              </div>
          </div>
        </div>

        {adminRequested && !adminAuthorized && (
          <div className="fixed bottom-6 right-6 z-40 w-full max-w-sm bg-black/75 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-4">
            <p className="text-sm text-zinc-300 font-semibold mb-2">Accès administrateur</p>
            <p className="text-xs text-zinc-400 mb-3">Saisis le mot de passe pour ouvrir le tableau de bord privé.</p>
            <form onSubmit={handleUnlock} className="space-y-3">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                placeholder="Mot de passe"
              />
              {authError && <p className="text-red-400 text-xs">{authError}</p>}
              <Button type="submit" className="w-full inline-flex justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-500 hover:via-purple-500 hover:to-sky-400 shadow-[0_15px_40px_rgba(99,102,241,0.35)]">
                Déverrouiller le tableau de bord
              </Button>
            </form>
          </div>
        )}

        {adminAuthorized && (
          <AdminDashboard
            country={data}
            onUpdate={onUpdate}
            onPublish={onPublish}
            hasPendingChanges={hasPendingChanges}
            isPublishing={isPublishing}
            publishState={publishState}
          />
        )}

        <footer className="py-12 text-center text-zinc-500 text-sm border-t border-white/5 bg-black/60 backdrop-blur-xl">
            <p>Pour garder une trace de mon voyage en passant par mes réussites, mes doutes, mes pensées et, bien sûr, mes découvertes.</p>
        </footer>
    </div>
  );
};

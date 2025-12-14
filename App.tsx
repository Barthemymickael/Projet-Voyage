import React, { useEffect, useMemo, useState } from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { CountryPage } from './components/country/CountryPage';
import { COUNTRIES } from './data/countries';
import { CountryData } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { Dashboard } from './components/dashboard/Dashboard';
import { DataSource, loadCountries, persistCountries } from './services/dataService';

export default function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [dataSource, setDataSource] = useState<DataSource>('fallback');
  const [hasPendingChanges, setHasPendingChanges] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishState, setPublishState] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    if (params?.get('admin') === 'true') {
      setShowDashboard(true);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loadData = async () => {
      const { data, source } = await loadCountries(COUNTRIES);
      if (cancelled) return;
      setCountries(data);
      setDataSource(source);
      setHasLoaded(true);
    };
    loadData();
    return () => {
      cancelled = true;
    };
  }, []);

  const selectedCountry = useMemo(
    () => countries.find((c) => c.id === selectedCountryId) || null,
    [countries, selectedCountryId]
  );

  const handleCountryUpdate = (updated: CountryData) => {
    setCountries((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
    setHasPendingChanges(true);
  };

  const handleCountryDelete = (id: string) => {
    setCountries((prev) => prev.filter((c) => c.id !== id));
    setHasPendingChanges(true);
    if (selectedCountryId === id) {
      setSelectedCountryId(null);
    }
  };

  const handleCountryCreate = (country: CountryData) => {
    setCountries((prev) => [...prev, country]);
    setHasPendingChanges(true);
  };

  const handlePublish = async () => {
    if (isPublishing || !countries.length) return;

    setIsPublishing(true);
    setPublishState('idle');
    const ok = await persistCountries(countries);
    setPublishState(ok ? 'success' : 'error');
    setHasPendingChanges(!ok);
    setIsPublishing(false);
  };

  const handleDashboardExit = () => {
    setShowDashboard(false);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('admin');
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleDashboardAccess = () => {
    setShowDashboard(true);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('admin', 'true');
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      <a
        href="?admin=true"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-full"
        onClick={(e) => {
          e.preventDefault();
          handleDashboardAccess();
        }}
      >
        Accès administrateur
      </a>
      <div className="absolute top-4 left-4 z-20">
        <span
          className={`px-3 py-1 text-xs rounded-full border ${
            dataSource === 'api'
              ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-100'
              : 'bg-amber-500/20 border-amber-400/50 text-amber-100'
          }`}
        >
          {dataSource === 'api' ? 'Backend en ligne' : 'Données par défaut'}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20 flex gap-3 items-center">
        {selectedCountry && !showDashboard && (
          <button
            className="px-3 py-2 text-sm bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20"
            onClick={() => setSelectedCountryId(null)}
          >
            Retour à l'accueil
          </button>
        )}
      </div>
      <AnimatePresence mode="wait">
        {showDashboard ? (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 overflow-y-auto bg-gray-950"
          >
            <Dashboard
              countries={countries}
              onCreate={handleCountryCreate}
              onDelete={handleCountryDelete}
              onUpdate={handleCountryUpdate}
              onPublish={handlePublish}
              hasPendingChanges={hasPendingChanges}
              isPublishing={isPublishing}
              publishState={publishState}
              dataSource={dataSource}
              onBack={handleDashboardExit}
            />
          </motion.div>
        ) : !selectedCountry ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <LandingPage onSelectCountry={setSelectedCountryId} />
          </motion.div>
        ) : (
          <motion.div
            key="country"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <CountryPage
              data={selectedCountry}
              onUpdate={handleCountryUpdate}
              onPublish={handlePublish}
              hasPendingChanges={hasPendingChanges}
              isPublishing={isPublishing}
              publishState={publishState}
              onBack={() => setSelectedCountryId(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

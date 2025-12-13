import React, { useEffect, useMemo, useState } from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { CountryPage } from './components/country/CountryPage';
import { COUNTRIES } from './data/countries';
import { CountryData } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { Dashboard } from './components/dashboard/Dashboard';
import { loadCountries, persistCountries } from './services/dataService';

export default function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const initial = loadCountries(COUNTRIES);
    setCountries(initial);
  }, []);

  useEffect(() => {
    if (countries.length) {
      persistCountries(countries);
    }
  }, [countries]);

  const selectedCountry = useMemo(
    () => countries.find((c) => c.id === selectedCountryId) || null,
    [countries, selectedCountryId]
  );

  const handleCountryUpdate = (updated: CountryData) => {
    setCountries((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  const handleCountryDelete = (id: string) => {
    setCountries((prev) => prev.filter((c) => c.id !== id));
    if (selectedCountryId === id) {
      setSelectedCountryId(null);
    }
  };

  const handleCountryCreate = (country: CountryData) => {
    setCountries((prev) => [...prev, country]);
  };

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute top-4 right-4 z-20 flex gap-3">
        {selectedCountry && !showDashboard && (
          <button
            className="px-3 py-2 text-sm bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20"
            onClick={() => setSelectedCountryId(null)}
          >
            Retour à l'accueil
          </button>
        )}
        <button
          className="px-3 py-2 text-sm bg-white text-black rounded-full shadow hover:bg-gray-100"
          onClick={() => setShowDashboard((prev) => !prev)}
        >
          {showDashboard ? 'Voir la page' : 'Tableau de bord'}
        </button>
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
              onBack={() => setShowDashboard(false)}
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
              onBack={() => setSelectedCountryId(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

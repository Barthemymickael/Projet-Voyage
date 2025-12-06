import React, { useState } from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { CountryPage } from './components/country/CountryPage';
import { COUNTRIES } from './data/countries';
import { CountryData } from './types';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);

  const selectedCountry = COUNTRIES.find(c => c.id === selectedCountryId);

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
        <AnimatePresence mode="wait">
            {!selectedCountry ? (
                <motion.div
                    key="landing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
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
                        onBack={() => setSelectedCountryId(null)} 
                    />
                </motion.div>
            )}
        </AnimatePresence>
    </main>
  );
}
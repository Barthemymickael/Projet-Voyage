import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isAtTimelineLastDay, setIsAtTimelineLastDay] = useState(false);
  const [isAtJournalLastDay, setIsAtJournalLastDay] = useState(false);
  const [isBelowTimelineLastDay, setIsBelowTimelineLastDay] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const getElementOffsets = (element: HTMLElement) => {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top - containerRect.top + container.scrollTop;
      const elementBottom = elementTop + elementRect.height;
      return { elementTop, elementBottom };
    };

    const isAnchoredToElement = (element: HTMLElement) => {
      const { elementTop, elementBottom } = getElementOffsets(element);
      const anchor = container.scrollTop + 140;
      return elementTop <= anchor && elementBottom >= anchor;
    };

    const isBelowElement = (element: HTMLElement) => {
      const { elementBottom } = getElementOffsets(element);
      const anchor = container.scrollTop + 140;
      return elementBottom < anchor;
    };

    const handleScroll = () => {
      const timelineLastDay = document.getElementById('timeline-last-day');
      const journalLastDay = document.getElementById('journal-last-day');

      setIsAtTimelineLastDay(timelineLastDay ? isAnchoredToElement(timelineLastDay) : false);
      setIsBelowTimelineLastDay(timelineLastDay ? isBelowElement(timelineLastDay) : false);
      setIsAtJournalLastDay(journalLastDay ? isAnchoredToElement(journalLastDay) : false);
    };

    handleScroll();
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [showDashboard, selectedCountryId]);

  const handleScrollToggle = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const timelineLastDay = document.getElementById('timeline-last-day');
    const journalLastDay = document.getElementById('journal-last-day');

    if (isAtJournalLastDay) {
      if (timelineLastDay) {
        timelineLastDay.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      container.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (isAtTimelineLastDay && journalLastDay) {
      journalLastDay.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (timelineLastDay) {
      timelineLastDay.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  };

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
    <main className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_45%,rgba(255,255,255,0.04)_100%)]" />
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
      <div className="absolute inset-x-0 top-0 z-20 px-3 pt-3 sm:px-6 sm:pt-6 pointer-events-none">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex flex-col gap-2 pointer-events-auto">
            {dataSource === 'api' && (
              <span className="self-start px-3 py-1 text-xs rounded-full border bg-emerald-500/20 border-emerald-400/50 text-emerald-100 shadow-lg shadow-emerald-500/20">
                Backend en ligne
              </span>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {showDashboard ? (
        <motion.div
          key="dashboard"
          ref={scrollContainerRef}
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
            ref={scrollContainerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <LandingPage onSelectCountry={setSelectedCountryId} />
          </motion.div>
        ) : (
          <motion.div
            key="country"
            ref={scrollContainerRef}
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
      {(showDashboard || selectedCountry) && (
        <button
          type="button"
          onClick={handleScrollToggle}
          className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg shadow-black/40 backdrop-blur transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={
            isAtJournalLastDay || isBelowTimelineLastDay
              ? 'Revenir au dernier jour de la chronologie'
              : isAtTimelineLastDay
              ? 'Aller au dernier jour de mes pensées'
              : 'Aller au dernier jour de la chronologie'
          }
        >
          <span className="text-xl leading-none">{isAtJournalLastDay || isBelowTimelineLastDay ? '↑' : '↓'}</span>
        </button>
      )}
    </main>
  );
}

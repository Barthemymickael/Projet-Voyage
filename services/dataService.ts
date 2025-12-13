import { CountryData } from '../types';

const STORAGE_KEY = 'voyage-countries';

const isBrowser = typeof window !== 'undefined';

export const loadCountries = (fallback: CountryData[]): CountryData[] => {
  if (!isBrowser) return fallback;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored) as CountryData[];
    return parsed.length ? parsed : fallback;
  } catch (error) {
    console.warn('Impossible de charger les données locales, utilisation du jeu par défaut', error);
    return fallback;
  }
};

export const persistCountries = (countries: CountryData[]) => {
  if (!isBrowser) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(countries));
  } catch (error) {
    console.warn('Impossible de sauvegarder les données', error);
  }
};

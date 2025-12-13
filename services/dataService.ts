import { CountryData } from '../types';

const API_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '') || 'http://localhost:4000';
const COUNTRIES_ENDPOINT = `${API_BASE}/api/countries`;
const STORAGE_KEY = 'voyage-countries';

const isBrowser = typeof window !== 'undefined';

const loadFromLocalStorage = (fallback: CountryData[]): CountryData[] => {
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

export const loadCountries = async (fallback: CountryData[]): Promise<CountryData[]> => {
  try {
    const response = await fetch(COUNTRIES_ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length) {
        return data as CountryData[];
      }
    }
  } catch (error) {
    console.warn('Impossible de charger les données depuis l’API, utilisation du stockage local', error);
  }

  return loadFromLocalStorage(fallback);
};

export const persistCountries = async (countries: CountryData[]) => {
  if (isBrowser) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(countries));
    } catch (error) {
      console.warn('Impossible de sauvegarder les données localement', error);
    }
  }

  try {
    await fetch(COUNTRIES_ENDPOINT, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(countries)
    });
  } catch (error) {
    console.warn('Impossible de sauvegarder les données à distance', error);
  }
};

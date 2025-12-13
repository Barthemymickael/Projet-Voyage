import { CountryData } from '../types';

export type DataSource = 'api' | 'fallback';

const inferDefaultApiBase = () => {
  const envBase = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '');
  if (envBase) return envBase;

  const isLocalHost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
  const isLocalProtocol = window.location.protocol === 'http:';

  if (isLocalHost || isLocalProtocol) {
    return 'http://localhost:4000';
  }

  console.warn(
    'Aucune API distante configurée. Définissez VITE_API_BASE_URL pour activer les appels sur cet hôte.'
  );
  return null;
};

const API_BASE = inferDefaultApiBase();
const COUNTRIES_ENDPOINT = API_BASE ? `${API_BASE}/api/countries` : null;

export const loadCountries = async (
  fallback: CountryData[]
): Promise<{ data: CountryData[]; source: DataSource }> => {
  if (!COUNTRIES_ENDPOINT) {
    return { data: fallback, source: 'fallback' };
  }

  try {
    const response = await fetch(COUNTRIES_ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length) {
        return { data: data as CountryData[], source: 'api' };
      }
    }
  } catch (error) {
    console.warn("Impossible de charger les données depuis l’API, utilisation du jeu par défaut", error);
  }

  return { data: fallback, source: 'fallback' };
};

export const persistCountries = async (countries: CountryData[]): Promise<boolean> => {
  if (!COUNTRIES_ENDPOINT) {
    console.warn('Publication désactivée : VITE_API_BASE_URL n’est pas défini.');
    return false;
  }

  try {
    const response = await fetch(COUNTRIES_ENDPOINT, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(countries)
    });

    return response.ok;
  } catch (error) {
    console.warn('Impossible de sauvegarder les données à distance', error);
    return false;
  }
};

import { GitHubStatus } from '../types';
import { buildApiUrl } from './dataService';

const STATUS_ENDPOINT = buildApiUrl('/api/github/status');

export const fetchGitHubStatus = async (): Promise<GitHubStatus> => {
  if (!STATUS_ENDPOINT) {
    return { connected: false, reason: 'API non configurée : définissez VITE_API_BASE_URL.' };
  }

  try {
    const response = await fetch(STATUS_ENDPOINT);
    if (!response.ok) {
      const message = await response.text();
      return { connected: false, reason: `Statut GitHub indisponible : ${message || response.status}` };
    }

    const payload = (await response.json()) as GitHubStatus;
    return payload;
  } catch (error) {
    return { connected: false, reason: `Erreur réseau GitHub : ${String(error)}` };
  }
};

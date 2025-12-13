export interface MarkerItem {
  id: string;
  lat: number;
  lng: number;
  title: string;
  category: 'Ville' | 'Monument' | 'Activité' | 'Cuisine';
  description: string;
  emoji: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  note?: string;
  bullets?: string[];
  steps?: string;
}

export interface JournalEntry {
  id: string;
  day: number;
  title: string;
  excerpt: string;
  image: string;
  mood: string;
}

export interface CountryData {
  id: string;
  name: string;
  videoUrl: string; // Using image placeholders for this demo
  isLocked: boolean;
  themeColor: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    bgImage: string;
    note?: string;
  };
  timeline: TimelineEvent[];
  markers: MarkerItem[];
  journal: JournalEntry[];
}

export type Theme = 'light' | 'dark';

export interface GitHubCommitInfo {
  sha?: string;
  url?: string;
  message?: string;
  date?: string;
}

export interface GitHubStatus {
  connected: boolean;
  repo?: string;
  branch?: string;
  filePath?: string;
  lastCommit?: GitHubCommitInfo;
  reason?: string;
}

import React, { useMemo, useState } from 'react';
import { CountryData, JournalEntry, MarkerItem, TimelineEvent } from '../../types';
import { DataSource } from '../../services/dataService';

const createId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `id-${Math.random().toString(16).slice(2, 10)}`;

interface Props {
  countries: CountryData[];
  onUpdate: (country: CountryData) => void;
  onDelete: (id: string) => void;
  onCreate: (country: CountryData) => void;
  onPublish: () => Promise<void>;
  hasPendingChanges: boolean;
  isPublishing: boolean;
  publishState: 'idle' | 'success' | 'error';
  dataSource: DataSource;
  onBack: () => void;
}

const defaultCountry = (): CountryData => ({
  id: createId(),
  name: 'Nouveau voyage',
  videoUrl: '',
  isLocked: false,
  themeColor: 'indigo',
  hero: {
    title: 'Titre du voyage',
    subtitle: 'Sous-titre',
    description: 'Description de la destination',
    bgImage: '',
    note: ''
  },
  timeline: [],
  markers: [],
  journal: []
});

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="bg-gray-900 border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/40">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
    </div>
    {children}
  </section>
);

export const Dashboard: React.FC<Props> = ({
  countries,
  onUpdate,
  onDelete,
  onCreate,
  onPublish,
  hasPendingChanges,
  isPublishing,
  publishState,
  dataSource,
  onBack
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(countries[0]?.id ?? null);

  const selectedCountry = useMemo(
    () => countries.find((c) => c.id === selectedId) || countries[0] || null,
    [countries, selectedId]
  );

  const updateCountry = (updates: Partial<CountryData>) => {
    if (!selectedCountry) return;
    onUpdate({ ...selectedCountry, ...updates });
  };

  const handleHeroChange = (key: keyof CountryData['hero'], value: string) => {
    if (!selectedCountry) return;
    updateCountry({ hero: { ...selectedCountry.hero, [key]: value } });
  };

  const handleTimelineChange = (eventId: string, field: keyof TimelineEvent, value: string) => {
    if (!selectedCountry) return;
    const updated = selectedCountry.timeline.map((item) =>
      item.id === eventId ? { ...item, [field]: value } : item
    );
    updateCountry({ timeline: updated });
  };

  const handleMarkerChange = (markerId: string, field: keyof MarkerItem, value: string | number) => {
    if (!selectedCountry) return;
    const updated = selectedCountry.markers.map((marker) =>
      marker.id === markerId ? { ...marker, [field]: value } : marker
    );
    updateCountry({ markers: updated });
  };

  const handleJournalChange = (entryId: string, field: keyof JournalEntry, value: string | number) => {
    if (!selectedCountry) return;
    const updated = selectedCountry.journal.map((entry) =>
      entry.id === entryId ? { ...entry, [field]: value } : entry
    );
    updateCountry({ journal: updated });
  };

  const addTimeline = () => {
    if (!selectedCountry) return;
    const newItem: TimelineEvent = {
      id: createId(),
      date: 'Nouvelle date',
      title: 'Titre',
      description: 'Description',
      image: ''
    };
    updateCountry({ timeline: [...selectedCountry.timeline, newItem] });
  };

  const addMarker = () => {
    if (!selectedCountry) return;
    const newMarker: MarkerItem = {
      id: createId(),
      lat: 0,
      lng: 0,
      title: 'Lieu',
      category: 'Ville',
      description: 'Description',
      emoji: '📍'
    };
    updateCountry({ markers: [...selectedCountry.markers, newMarker] });
  };

  const addJournal = () => {
    if (!selectedCountry) return;
    const newEntry: JournalEntry = {
      id: createId(),
      day: selectedCountry.journal.length + 1,
      title: 'Titre du jour',
      excerpt: 'Résumé court',
      image: '',
      mood: 'Humeur'
    };
    updateCountry({ journal: [...selectedCountry.journal, newEntry] });
  };

  const removeTimeline = (eventId: string) => {
    if (!selectedCountry) return;
    updateCountry({ timeline: selectedCountry.timeline.filter((item) => item.id !== eventId) });
  };

  const removeMarker = (markerId: string) => {
    if (!selectedCountry) return;
    updateCountry({ markers: selectedCountry.markers.filter((marker) => marker.id !== markerId) });
  };

  const removeJournal = (entryId: string) => {
    if (!selectedCountry) return;
    updateCountry({ journal: selectedCountry.journal.filter((entry) => entry.id !== entryId) });
  };

  const handleCreateCountry = () => {
    const newCountry = defaultCountry();
    onCreate(newCountry);
    setSelectedId(newCountry.id);
  };

  const handleDeleteCountry = (id: string) => {
    onDelete(id);
    setSelectedId((prev) => (prev === id ? countries.find((c) => c.id !== id)?.id ?? null : prev));
  };

  if (!selectedCountry) {
    return (
      <div className="p-8 text-white">
        <p>Aucun pays. Ajoutez un nouveau voyage pour commencer.</p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg"
          onClick={handleCreateCountry}
        >
          Créer un voyage
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white px-6 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/60">Tableau de bord</p>
          <h1 className="text-3xl font-bold">Gestion des voyages</h1>
        </div>
        <div className="flex flex-col gap-2 items-end md:flex-row md:items-center md:gap-3">
          <span
            className={`px-3 py-1 text-xs rounded-full border ${
              dataSource === 'api'
                ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-100'
                : 'bg-amber-500/20 border-amber-400/50 text-amber-100'
            }`}
          >
            {dataSource === 'api' ? 'Backend en ligne' : 'Données par défaut'}
          </span>
          <div className="flex items-center gap-2">
            <button
              className={`px-4 py-2 rounded-lg border font-semibold ${
                hasPendingChanges
                  ? 'bg-indigo-600 border-indigo-400 hover:bg-indigo-500'
                  : 'bg-white/5 border-white/10 text-white/60 cursor-not-allowed'
              }`}
              onClick={onPublish}
              disabled={!hasPendingChanges || isPublishing}
            >
              {isPublishing ? 'Publication…' : hasPendingChanges ? 'Publier' : 'À jour'}
            </button>
            {publishState === 'success' && (
              <span className="text-xs text-emerald-300">Modifications publiées</span>
            )}
            {publishState === 'error' && (
              <span className="text-xs text-amber-300">Échec de la publication</span>
            )}
          </div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 rounded-lg bg-gray-800 border border-white/10 hover:bg-gray-700"
              onClick={onBack}
            >
              Voir la page publique
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400"
              onClick={handleCreateCountry}
            >
              Nouveau voyage
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1 space-y-3">
          {countries.map((country) => (
            <div
              key={country.id}
              className={`p-4 rounded-xl border cursor-pointer transition ${
                country.id === selectedCountry.id
                  ? 'bg-indigo-500/20 border-indigo-400/50'
                  : 'bg-gray-900 border-white/10 hover:border-white/30'
              }`}
              onClick={() => setSelectedId(country.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">{country.id}</p>
                  <h3 className="font-semibold text-lg">{country.name}</h3>
                </div>
                <button
                  className="text-xs text-red-300 hover:text-red-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteCountry(country.id);
                  }}
                >
                  Supprimer
                </button>
              </div>
              <p className="text-white/70 text-sm mt-1">{country.hero.subtitle}</p>
            </div>
          ))}
        </aside>

        <div className="lg:col-span-3 space-y-6">
          <SectionCard title="Héros & vidéo">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Nom du voyage</span>
                <input
                  value={selectedCountry.name}
                  onChange={(e) => updateCountry({ name: e.target.value })}
                  className="bg-gray-800 border border-white/10 rounded-lg px-3 py-2"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Vidéo ou image de couverture</span>
                <input
                  value={selectedCountry.videoUrl}
                  onChange={(e) => updateCountry({ videoUrl: e.target.value })}
                  className="bg-gray-800 border border-white/10 rounded-lg px-3 py-2"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Titre</span>
                <input
                  value={selectedCountry.hero.title}
                  onChange={(e) => handleHeroChange('title', e.target.value)}
                  className="bg-gray-800 border border-white/10 rounded-lg px-3 py-2"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Sous-titre</span>
                <input
                  value={selectedCountry.hero.subtitle}
                  onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                  className="bg-gray-800 border border-white/10 rounded-lg px-3 py-2"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm md:col-span-2">
                <span className="text-white/70">Description</span>
                <textarea
                  value={selectedCountry.hero.description}
                  onChange={(e) => handleHeroChange('description', e.target.value)}
                  className="bg-gray-800 border border-white/10 rounded-lg px-3 py-2 min-h-[80px]"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Image de fond</span>
                <input
                  value={selectedCountry.hero.bgImage}
                  onChange={(e) => handleHeroChange('bgImage', e.target.value)}
                  className="bg-gray-800 border border-white/10 rounded-lg px-3 py-2"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Note</span>
                <input
                  value={selectedCountry.hero.note ?? ''}
                  onChange={(e) => handleHeroChange('note', e.target.value)}
                  className="bg-gray-800 border border-white/10 rounded-lg px-3 py-2"
                />
              </label>
            </div>
          </SectionCard>

          <SectionCard title="Frise chronologique">
            <div className="space-y-4">
              {selectedCountry.timeline.map((item) => (
                <div key={item.id} className="border border-white/10 rounded-xl p-4 bg-gray-800/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-white/70 text-sm">{item.id}</p>
                    <button
                      className="text-xs text-red-300 hover:text-red-200"
                      onClick={() => removeTimeline(item.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={item.date}
                      onChange={(e) => handleTimelineChange(item.id, 'date', e.target.value)}
                    />
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={item.title}
                      onChange={(e) => handleTimelineChange(item.id, 'title', e.target.value)}
                    />
                    <textarea
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2 min-h-[70px] md:col-span-2"
                      value={item.description}
                      onChange={(e) => handleTimelineChange(item.id, 'description', e.target.value)}
                    />
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={item.image ?? ''}
                      onChange={(e) => handleTimelineChange(item.id, 'image', e.target.value)}
                      placeholder="Image"
                    />
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={item.note ?? ''}
                      onChange={(e) => handleTimelineChange(item.id, 'note', e.target.value)}
                      placeholder="Note"
                    />
                  </div>
                </div>
              ))}
              <button
                className="px-4 py-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400"
                onClick={addTimeline}
              >
                Ajouter un évènement
              </button>
            </div>
          </SectionCard>

          <SectionCard title="Carte & points d'intérêt">
            <div className="space-y-4">
              {selectedCountry.markers.map((marker) => (
                <div key={marker.id} className="border border-white/10 rounded-xl p-4 bg-gray-800/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-white/70 text-sm">{marker.id}</p>
                    <button
                      className="text-xs text-red-300 hover:text-red-200"
                      onClick={() => removeMarker(marker.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={marker.title}
                      onChange={(e) => handleMarkerChange(marker.id, 'title', e.target.value)}
                    />
                    <select
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={marker.category}
                      onChange={(e) => handleMarkerChange(marker.id, 'category', e.target.value as MarkerItem['category'])}
                    >
                      <option value="Ville">Ville</option>
                      <option value="Monument">Monument</option>
                      <option value="Activité">Activité</option>
                      <option value="Cuisine">Cuisine</option>
                    </select>
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={marker.emoji}
                      onChange={(e) => handleMarkerChange(marker.id, 'emoji', e.target.value)}
                    />
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={marker.description}
                      onChange={(e) => handleMarkerChange(marker.id, 'description', e.target.value)}
                    />
                    <input
                      type="number"
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={marker.lat}
                      onChange={(e) => handleMarkerChange(marker.id, 'lat', parseFloat(e.target.value))}
                    />
                    <input
                      type="number"
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={marker.lng}
                      onChange={(e) => handleMarkerChange(marker.id, 'lng', parseFloat(e.target.value))}
                    />
                  </div>
                </div>
              ))}
              <button
                className="px-4 py-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400"
                onClick={addMarker}
              >
                Ajouter un point
              </button>
            </div>
          </SectionCard>

          <SectionCard title="Journal">
            <div className="space-y-4">
              {selectedCountry.journal.map((entry) => (
                <div key={entry.id} className="border border-white/10 rounded-xl p-4 bg-gray-800/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-white/70 text-sm">Jour {entry.day}</p>
                    <button
                      className="text-xs text-red-300 hover:text-red-200"
                      onClick={() => removeJournal(entry.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="number"
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={entry.day}
                      onChange={(e) => handleJournalChange(entry.id, 'day', Number(e.target.value))}
                    />
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={entry.title}
                      onChange={(e) => handleJournalChange(entry.id, 'title', e.target.value)}
                    />
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={entry.mood}
                      onChange={(e) => handleJournalChange(entry.id, 'mood', e.target.value)}
                    />
                    <input
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2"
                      value={entry.image}
                      onChange={(e) => handleJournalChange(entry.id, 'image', e.target.value)}
                    />
                    <textarea
                      className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2 min-h-[70px] md:col-span-2"
                      value={entry.excerpt}
                      onChange={(e) => handleJournalChange(entry.id, 'excerpt', e.target.value)}
                    />
                  </div>
                </div>
              ))}
              <button
                className="px-4 py-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400"
                onClick={addJournal}
              >
                Ajouter une entrée
              </button>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

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

const SectionCard: React.FC<{ title: string; description?: string; children: React.ReactNode }> = ({
  title,
  description,
  children
}) => (
  <section className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl shadow-black/40 backdrop-blur-sm">
    <div className="flex items-start justify-between gap-3 mb-5">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-200/70">Section</p>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {description && <p className="text-sm text-white/60 mt-1">{description}</p>}
      </div>
      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-400/30 via-purple-400/20 to-cyan-300/20 border border-white/10" />
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
      <div className="p-10 text-white bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 min-h-screen">
        <p className="text-lg font-semibold">Aucun voyage n'est configuré.</p>
        <p className="text-white/70 mt-1">Ajoutez un nouveau voyage pour commencer.</p>
        <button
          className="mt-6 px-4 py-2.5 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-400 transition"
          onClick={handleCreateCountry}
        >
          Créer un voyage
        </button>
      </div>
    );
  }

  const fieldClass =
    'bg-slate-900/70 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition placeholder-white/40';

  return (
    <div className="min-h-screen text-white px-6 py-10 space-y-8 bg-gradient-to-br from-slate-950 via-indigo-950/60 to-slate-900">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200/70">Tableau de bord</p>
          <h1 className="text-3xl font-bold">Gestion des voyages</h1>
          <p className="text-white/70 text-sm max-w-2xl">
            Harmonisez chaque étape de vos carnets avec une interface épurée, des contrôles symétriques
            et des actions claires pour publier vos expériences.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-end md:flex-row md:items-center md:gap-3">
          <span
            className={`px-3 py-2 text-xs rounded-full border font-semibold shadow-inner ${
              dataSource === 'api'
                ? 'bg-emerald-400/10 border-emerald-300/40 text-emerald-100'
                : 'bg-amber-400/10 border-amber-300/40 text-amber-100'
            }`}
          >
            {dataSource === 'api' ? 'Backend en ligne' : 'Données par défaut'}
          </span>
          <div className="flex items-center gap-3">
            <button
              className={`px-4 py-2.5 rounded-full border font-semibold shadow-lg shadow-indigo-900/40 transition ${
                hasPendingChanges
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 border-indigo-300/60 hover:from-indigo-400 hover:to-cyan-400'
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
              className="px-4 py-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition"
              onClick={onBack}
            >
              Voir la page publique
            </button>
            <button
              className="px-4 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 border border-indigo-400/40 shadow-lg shadow-indigo-900/40"
              onClick={handleCreateCountry}
            >
              Nouveau voyage
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-sm shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-indigo-200/70">Étapes</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold">{selectedCountry.timeline.length}</span>
            <span className="text-sm text-white/60">évènements</span>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-sm shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-indigo-200/70">Points d'intérêt</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold">{selectedCountry.markers.length}</span>
            <span className="text-sm text-white/60">repères</span>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-sm shadow-lg">
          <p className="text-xs uppercase tracking-[0.25em] text-indigo-200/70">Journal</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold">{selectedCountry.journal.length}</span>
            <span className="text-sm text-white/60">entrées</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <aside className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between text-sm text-white/70 px-2">
            <span>Vos voyages</span>
            <span className="text-white/40">{countries.length} projets</span>
          </div>
          {countries.map((country) => (
            <div
              key={country.id}
              className={`p-4 rounded-2xl border cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/30 ${
                country.id === selectedCountry.id
                  ? 'bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-cyan-400/10 border-indigo-300/50'
                  : 'bg-white/5 border-white/10 hover:border-indigo-300/50'
              }`}
              onClick={() => setSelectedId(country.id)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-1">
                  <p className="text-xs text-white/50">{country.id}</p>
                  <h3 className="font-semibold text-lg leading-tight">{country.name}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{country.hero.subtitle}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="h-2 w-10 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
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
              </div>
            </div>
          ))}
        </aside>

        <div className="lg:col-span-3 space-y-8">
          <SectionCard
            title="Héros & média"
            description="Organisez le pitch visuel : titre, sous-titre, média et tonalité pour un rendu impactant."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Nom du voyage</span>
                <input
                  value={selectedCountry.name}
                  onChange={(e) => updateCountry({ name: e.target.value })}
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Vidéo ou image de couverture</span>
                <input
                  value={selectedCountry.videoUrl}
                  onChange={(e) => updateCountry({ videoUrl: e.target.value })}
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Titre</span>
                <input
                  value={selectedCountry.hero.title}
                  onChange={(e) => handleHeroChange('title', e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Sous-titre</span>
                <input
                  value={selectedCountry.hero.subtitle}
                  onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-1 text-sm md:col-span-2">
                <span className="text-white/70">Description</span>
                <textarea
                  value={selectedCountry.hero.description}
                  onChange={(e) => handleHeroChange('description', e.target.value)}
                  className={`${fieldClass} min-h-[90px]`}
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Image de fond</span>
                <input
                  value={selectedCountry.hero.bgImage}
                  onChange={(e) => handleHeroChange('bgImage', e.target.value)}
                  className={fieldClass}
                  placeholder="URL ou chemin"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Note</span>
                <input
                  value={selectedCountry.hero.note ?? ''}
                  onChange={(e) => handleHeroChange('note', e.target.value)}
                  className={fieldClass}
                  placeholder="Slogan, mood, tonalité"
                />
              </label>
            </div>
          </SectionCard>

          <SectionCard
            title="Frise chronologique"
            description="Cadrez les moments clés avec un rythme régulier et des descriptions aérées."
          >
            <div className="space-y-4">
              {selectedCountry.timeline.map((item) => (
                <div
                  key={item.id}
                  className="border border-white/10 rounded-2xl p-4 bg-white/5 space-y-3 shadow-inner shadow-black/20"
                >
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
                      className={fieldClass}
                      value={item.date}
                      onChange={(e) => handleTimelineChange(item.id, 'date', e.target.value)}
                    />
                    <input
                      className={fieldClass}
                      value={item.title}
                      onChange={(e) => handleTimelineChange(item.id, 'title', e.target.value)}
                      placeholder="Titre"
                    />
                    <textarea
                      className={`${fieldClass} min-h-[80px] md:col-span-2`}
                      value={item.description}
                      onChange={(e) => handleTimelineChange(item.id, 'description', e.target.value)}
                      placeholder="Description concise"
                    />
                    <input
                      className={fieldClass}
                      value={item.image ?? ''}
                      onChange={(e) => handleTimelineChange(item.id, 'image', e.target.value)}
                      placeholder="Image"
                    />
                    <input
                      className={fieldClass}
                      value={item.note ?? ''}
                      onChange={(e) => handleTimelineChange(item.id, 'note', e.target.value)}
                      placeholder="Note"
                    />
                  </div>
                </div>
              ))}
              <button
                className="px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-semibold hover:from-indigo-400 hover:to-cyan-400 shadow-lg shadow-indigo-900/40"
                onClick={addTimeline}
              >
                Ajouter un évènement
              </button>
            </div>
          </SectionCard>

          <SectionCard
            title="Carte & points d'intérêt"
            description="Assurez une cohérence géographique avec des points d'intérêt équilibrés."
          >
            <div className="space-y-4">
              {selectedCountry.markers.map((marker) => (
                <div
                  key={marker.id}
                  className="border border-white/10 rounded-2xl p-4 bg-white/5 space-y-3 shadow-inner shadow-black/20"
                >
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
                      className={fieldClass}
                      value={marker.title}
                      onChange={(e) => handleMarkerChange(marker.id, 'title', e.target.value)}
                    />
                    <select
                      className={fieldClass}
                      value={marker.category}
                      onChange={(e) => handleMarkerChange(marker.id, 'category', e.target.value as MarkerItem['category'])}
                    >
                      <option value="Ville">Ville</option>
                      <option value="Monument">Monument</option>
                      <option value="Activité">Activité</option>
                      <option value="Cuisine">Cuisine</option>
                    </select>
                    <input
                      className={fieldClass}
                      value={marker.emoji}
                      onChange={(e) => handleMarkerChange(marker.id, 'emoji', e.target.value)}
                      placeholder="Icône"
                    />
                    <input
                      className={fieldClass}
                      value={marker.description}
                      onChange={(e) => handleMarkerChange(marker.id, 'description', e.target.value)}
                      placeholder="Description"
                    />
                    <input
                      type="number"
                      className={fieldClass}
                      value={marker.lat}
                      onChange={(e) => handleMarkerChange(marker.id, 'lat', parseFloat(e.target.value))}
                      placeholder="Latitude"
                    />
                    <input
                      type="number"
                      className={fieldClass}
                      value={marker.lng}
                      onChange={(e) => handleMarkerChange(marker.id, 'lng', parseFloat(e.target.value))}
                      placeholder="Longitude"
                    />
                  </div>
                </div>
              ))}
              <button
                className="px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-semibold hover:from-indigo-400 hover:to-cyan-400 shadow-lg shadow-indigo-900/40"
                onClick={addMarker}
              >
                Ajouter un point
              </button>
            </div>
          </SectionCard>

          <SectionCard
            title="Journal"
            description="Rendez la lecture fluide avec des entrées équilibrées et des champs alignés."
          >
            <div className="space-y-4">
              {selectedCountry.journal.map((entry) => (
                <div
                  key={entry.id}
                  className="border border-white/10 rounded-2xl p-4 bg-white/5 space-y-3 shadow-inner shadow-black/20"
                >
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
                      className={fieldClass}
                      value={entry.day}
                      onChange={(e) => handleJournalChange(entry.id, 'day', Number(e.target.value))}
                      placeholder="Jour"
                    />
                    <input
                      className={fieldClass}
                      value={entry.title}
                      onChange={(e) => handleJournalChange(entry.id, 'title', e.target.value)}
                      placeholder="Titre"
                    />
                    <input
                      className={fieldClass}
                      value={entry.mood}
                      onChange={(e) => handleJournalChange(entry.id, 'mood', e.target.value)}
                      placeholder="Humeur"
                    />
                    <input
                      className={fieldClass}
                      value={entry.image}
                      onChange={(e) => handleJournalChange(entry.id, 'image', e.target.value)}
                      placeholder="Visuel"
                    />
                    <textarea
                      className={`${fieldClass} min-h-[80px] md:col-span-2`}
                      value={entry.excerpt}
                      onChange={(e) => handleJournalChange(entry.id, 'excerpt', e.target.value)}
                      placeholder="Résumé court"
                    />
                  </div>
                </div>
              ))}
              <button
                className="px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-semibold hover:from-indigo-400 hover:to-cyan-400 shadow-lg shadow-indigo-900/40"
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

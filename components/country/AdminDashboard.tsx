import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CountryData, MarkerItem, TimelineEvent } from '../../types';
import { Plus, X, Sparkles, MapPin, CalendarRange } from 'lucide-react';

interface AdminDashboardProps {
  country: CountryData;
  onUpdate: (data: CountryData) => void;
  onPublish: () => Promise<void>;
  hasPendingChanges: boolean;
  isPublishing: boolean;
  publishState: 'idle' | 'success' | 'error';
}

const emptyTimelineForm = {
  date: '',
  title: '',
  description: '',
  image: '',
  note: '',
  bullets: ''
};

const emptyMarkerForm = {
  title: '',
  description: '',
  category: 'Ville' as MarkerItem['category'],
  emoji: '📍',
  lat: '',
  lng: ''
};

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  country,
  onUpdate,
  onPublish,
  hasPendingChanges,
  isPublishing,
  publishState
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timelineForm, setTimelineForm] = useState(emptyTimelineForm);
  const [markerForm, setMarkerForm] = useState(emptyMarkerForm);
  const [heroForm, setHeroForm] = useState({
    title: country.hero.title,
    subtitle: country.hero.subtitle,
    description: country.hero.description,
    note: country.hero.note ?? ''
  });

  useEffect(() => {
    setHeroForm({
      title: country.hero.title,
      subtitle: country.hero.subtitle,
      description: country.hero.description,
      note: country.hero.note ?? ''
    });
    setTimelineForm(emptyTimelineForm);
    setMarkerForm(emptyMarkerForm);
  }, [country]);

  const totalBullets = useMemo(
    () => country.timeline.reduce((acc, event) => acc + (event.bullets?.length ?? 0), 0),
    [country.timeline]
  );

  const handleHeroUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({
      ...country,
      hero: {
        ...country.hero,
        ...heroForm
      }
    });
  };

  const handleAddTimeline = (e: React.FormEvent) => {
    e.preventDefault();
    if (!timelineForm.title || !timelineForm.date || !timelineForm.description) return;

    const bullets = timelineForm.bullets
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    const newEvent: TimelineEvent = {
      id: `t-${Date.now()}`,
      title: timelineForm.title,
      date: timelineForm.date,
      description: timelineForm.description,
      image: timelineForm.image || undefined,
      note: timelineForm.note || undefined,
      bullets: bullets.length ? bullets : undefined
    };

    onUpdate({
      ...country,
      timeline: [...country.timeline, newEvent]
    });

    setTimelineForm(emptyTimelineForm);
  };

  const handleAddMarker = (e: React.FormEvent) => {
    e.preventDefault();
    const lat = parseFloat(markerForm.lat);
    const lng = parseFloat(markerForm.lng);
    if (Number.isNaN(lat) || Number.isNaN(lng) || !markerForm.title || !markerForm.description) return;

    const newMarker: MarkerItem = {
      id: `m-${Date.now()}`,
      title: markerForm.title,
      description: markerForm.description,
      category: markerForm.category,
      emoji: markerForm.emoji || '📍',
      lat,
      lng
    };

    onUpdate({
      ...country,
      markers: [...country.markers, newMarker]
    });

    setMarkerForm(emptyMarkerForm);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[120] bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-500 transition-colors flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4" />
        Tableau de bord
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 160, damping: 20 }}
              className="w-full max-w-6xl bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-sm text-zinc-400">Mode édition</p>
                  <h3 className="text-xl font-semibold text-white">Tableau de bord — {country.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onPublish}
                    disabled={!hasPendingChanges || isPublishing}
                    className={`px-3 py-2 rounded-full text-sm font-semibold border transition-colors ${
                      hasPendingChanges
                        ? 'bg-indigo-600 text-white border-indigo-400 hover:bg-indigo-500'
                        : 'bg-white/5 text-white/70 border-white/10 cursor-not-allowed'
                    }`}
                  >
                    {isPublishing ? 'Publication…' : hasPendingChanges ? 'Publier' : 'À jour'}
                  </button>
                  {publishState === 'success' && (
                    <span className="text-xs text-emerald-300">En ligne</span>
                  )}
                  {publishState === 'error' && (
                    <span className="text-xs text-amber-300">Échec, vérifier l'API</span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-zinc-300"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 px-6 py-6 bg-gradient-to-b from-zinc-900/60 via-black to-black">
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                    <p className="text-sm text-zinc-400">Entrées chronologie</p>
                    <p className="text-2xl font-semibold text-white">{country.timeline.length}</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                    <p className="text-sm text-zinc-400">Points de carte</p>
                    <p className="text-2xl font-semibold text-white">{country.markers.length}</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                    <p className="text-sm text-zinc-400">Liste à puces</p>
                    <p className="text-2xl font-semibold text-white">{totalBullets}</p>
                  </div>
                </div>

                <form onSubmit={handleHeroUpdate} className="p-4 rounded-2xl border border-white/10 bg-white/5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-300" />
                    <h4 className="text-lg font-semibold text-white">En-tête du pays</h4>
                  </div>
                  <input
                    value={heroForm.title}
                    onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                    placeholder="Titre principal"
                  />
                  <input
                    value={heroForm.subtitle}
                    onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                    placeholder="Sous-titre"
                  />
                  <textarea
                    value={heroForm.description}
                    onChange={(e) => setHeroForm({ ...heroForm, description: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white min-h-[96px]"
                    placeholder="Description"
                  />
                  <textarea
                    value={heroForm.note}
                    onChange={(e) => setHeroForm({ ...heroForm, note: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white min-h-[64px]"
                    placeholder="Note personnelle (optionnel)"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
                  >
                    <Plus className="w-4 h-4" /> Mettre à jour l'en-tête
                  </button>
                </form>

                <form onSubmit={handleAddTimeline} className="p-4 rounded-2xl border border-white/10 bg-white/5 space-y-3">
                  <div className="flex items-center gap-2">
                    <CalendarRange className="w-4 h-4 text-indigo-300" />
                    <h4 className="text-lg font-semibold text-white">Nouvelle entrée chronologie</h4>
                  </div>
                  <input
                    value={timelineForm.date}
                    onChange={(e) => setTimelineForm({ ...timelineForm, date: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                    placeholder="Date (ex: Jour 9)"
                  />
                  <input
                    value={timelineForm.title}
                    onChange={(e) => setTimelineForm({ ...timelineForm, title: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                    placeholder="Titre"
                  />
                  <textarea
                    value={timelineForm.description}
                    onChange={(e) => setTimelineForm({ ...timelineForm, description: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white min-h-[80px]"
                    placeholder="Description"
                  />
                  <textarea
                    value={timelineForm.bullets}
                    onChange={(e) => setTimelineForm({ ...timelineForm, bullets: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white min-h-[60px]"
                    placeholder="Liste (1 élément par ligne)"
                  />
                  <input
                    value={timelineForm.image}
                    onChange={(e) => setTimelineForm({ ...timelineForm, image: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                    placeholder="URL image (optionnel)"
                  />
                  <input
                    value={timelineForm.note}
                    onChange={(e) => setTimelineForm({ ...timelineForm, note: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                    placeholder="Note (optionnel)"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
                  >
                    <Plus className="w-4 h-4" /> Ajouter à la chronologie
                  </button>
                </form>

                <form onSubmit={handleAddMarker} className="p-4 rounded-2xl border border-white/10 bg-white/5 space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-300" />
                    <h4 className="text-lg font-semibold text-white">Nouveau point carte</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      value={markerForm.lat}
                      onChange={(e) => setMarkerForm({ ...markerForm, lat: e.target.value })}
                      className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                      placeholder="Latitude"
                    />
                    <input
                      value={markerForm.lng}
                      onChange={(e) => setMarkerForm({ ...markerForm, lng: e.target.value })}
                      className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                      placeholder="Longitude"
                    />
                  </div>
                  <input
                    value={markerForm.title}
                    onChange={(e) => setMarkerForm({ ...markerForm, title: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                    placeholder="Titre"
                  />
                  <textarea
                    value={markerForm.description}
                    onChange={(e) => setMarkerForm({ ...markerForm, description: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white min-h-[60px]"
                    placeholder="Description"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={markerForm.category}
                      onChange={(e) => setMarkerForm({ ...markerForm, category: e.target.value as MarkerItem['category'] })}
                      className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                    >
                      <option value="Ville">Ville</option>
                      <option value="Monument">Monument</option>
                      <option value="Activité">Activité</option>
                      <option value="Cuisine">Cuisine</option>
                    </select>
                    <input
                      value={markerForm.emoji}
                      onChange={(e) => setMarkerForm({ ...markerForm, emoji: e.target.value })}
                      className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white"
                      placeholder="Emoji"
                      maxLength={4}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
                  >
                    <Plus className="w-4 h-4" /> Ajouter sur la carte
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminDashboard;

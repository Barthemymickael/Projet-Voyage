import { CountryData } from '../types';

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.replace(/^\//, '');
  return `${base}/${normalizedPath}`;
};

export const COUNTRIES: CountryData[] = [
  {
    id: 'korea',
    name: 'Corée du Sud',
    videoUrl:
      'https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1974&auto=format&fit=crop', // Seoul Night
    isLocked: false,
    themeColor: 'indigo',
    hero: {
      title: '3 mois en Corée du Sud',
      subtitle: 'Mon voyage solo',
      description: 'Voyage du 4 décembre 2025 jusqu’au 4 mars 2026',
      bgImage: withBase('seoul.jpg')
    },
    timeline: [
      {
        id: 't1',
        date: 'Jour 1 (15 468 pas)',
        title: 'Le départ',
        description:
          'Départ de Cherbourg-en-Cotentin à 5h du matin, direction Paris Saint-Lazare en train. De là, j’embarque pour mon premier vol Paris → Shanghai (12 heures). Après une escale de 2 heures à Shanghai, je prends mon second avion Shanghai → Séoul (2h10). Une fois arrivé à Incheon (ICN), je monte dans un bus pour 1h10 de trajet jusqu’à l’arrêt SNU (Seoul National University), situé juste à côté du quartier où je vais vivre durant plusieurs semaines.',
        note: 'Porte à porte global : 26h',
        image: withBase('image.jpg')
      },
      {
        id: 't2',
        date: 'Jour 2 (X pas)',
        title: 'Mon logement pour 1,5 mois',
        description:
          'Quartier Gwanak-gu, proche de l’université et à 35 minutes en métro du centre-ville. Un Seven-Eleven et une salle de sport en bas de la rue. Parfait ! Journée balade tout le début de journée (8h-15h).',
        image: withBase('image2.jpg')
      },
      {
        id: 't3',
        date: 'Jour 3 (X pas)',
        title: 'Après le repos, la découverte des alentours',
        description: 'Mise en place de tous les outils nécessaires :',
        bullets: [
          'Forfait mobile coréen pour 3 mois',
          'Abonnement à la salle de sport',
          'Achat de la carte de transport (et +) : la T-Money Card',
          'Courses pour la semaine'
        ],
        image: 'https://picsum.photos/id/1039/400/300'
      }
    ],
    markers: [
      {
        id: 'm1',
        lat: 37.4602,
        lng: 126.4407,
        title: 'Aéroport international d’Incheon (ICN)',
        category: 'Ville',
        description: 'Point d’entrée principal de mon voyage en Corée.',
        emoji: '🛬'
      },
      {
        id: 'm2',
        lat: 37.4784,
        lng: 126.9516,
        title: 'Gwanak-gu',
        category: 'Ville',
        description:
          'Mon quartier de vie : proche de SNU, calme, avec salle de sport et convenience stores.',
        emoji: '🏡'
      },
      {
        id: 'm3',
        lat: 37.5665,
        lng: 126.978,
        title: 'Centre-ville de Séoul',
        category: 'Ville',
        description:
          'Le cœur de Séoul, entre gratte-ciels, palais et rues animées.',
        emoji: '🏙️'
      }
    ],

    journal: [
      {
        id: 'j1',
        day: 1,
        title: 'Réflexions',
        excerpt: `26h de déplacement, ça reste bien relou. Mais la finalité est incroyable.
Le plus embêtant, c’est que l’enregistrement du vol ne pouvait pas se faire en ligne, donc obligé de le faire directement à l’aéroport, donc perte de temps sachant que je n’ai que 2h.

Puis je devais enregistrer mon bagage en soute. Puis passer l’embarquement. Adepte des vols loupés car toujours en retard (une première fois pour aller à Milan en novembre 2024, puis une deuxième fois pour aller à Vigo en Espagne).
D’habitude je me dis que 45 minutes c’est good ; là je me dis que 2h ce n’est pas assez.

Et évidemment, la question de mon bagage en soute revenait souvent : escale oblige, je croisais les doigts pour bien retrouver mon sac à Séoul.`,
        image:
          'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=1931&auto=format&fit=crop',
        mood: 'Le trajet'
      },
      {
        id: 'j2',
        day: 2,
        title: 'Le goût du kimchi',
        excerpt:
          'Avec le décalage horaire je me réveille assez tôt. 6h20. Je pars donc à la découverte des petites rues et ruelles du quartier. Je me perds, je fais demi-tour, etc. Ici il y a des épiceries et laveries automatiques tous les 300 m : 7-Eleven, GS25 ou CU. Les rues sont très colorées, les devantures également.',
        image:
          'https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=2070&auto=format&fit=crop',
        mood: 'La découverte'
      },
      {
        id: 'j3',
        day: 3,
        title: 'Dimanche randonnée',
        excerpt:
          'Premier vrai dimanche sur place. Après avoir réglé les aspects pratiques les jours précédents, je pars en randonnée dans les collines autour de Gwanak-gu. Les sentiers grimpent vite, mais la vue sur Séoul en vaut largement l’effort. Entre les temples cachés dans la forêt et le silence au milieu des pins, je sens enfin que je souffle après le voyage. Un mélange de fatigue dans les jambes et de calme total dans la tête.',
        image:
          'https://images.unsplash.com/photo-1517821099601-1a962ff56ae5?q=80&w=2070&auto=format&fit=crop',
        mood: 'Dimanche randonnée'
      }
    ]
  },
  {
    id: 'japan',
    name: 'Japon',
    videoUrl: 'https://picsum.photos/id/1015/600/1000',
    isLocked: true,
    themeColor: 'rose',
    hero: { title: '', subtitle: '', description: '', bgImage: '' },
    timeline: [],
    markers: [],
    journal: []
  }
];

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
          'Départ de Cherbourg-en-Cotentin à 5 h du matin, direction Paris Saint-Lazare en train. De là, j’embarque pour mon premier vol Paris → Shanghai (12 heures). Après une escale de 2 heures à Shanghai, je prends mon second avion Shanghai → Séoul (2 h 10). Une fois arrivé à Incheon (ICN), je monte dans un bus pour 1 h 10 de trajet jusqu’à l’arrêt SNU (Seoul National University), situé juste à côté du quartier où je vais vivre durant plusieurs semaines.',
        note: 'Porte-à-porte global : 26 h',
        image: withBase('image.jpg')
      },
      {
        id: 't2',
        date: 'Jour 2 (5 189 pas)',
        title: 'Mon logement pour 1,5 mois',
        description:
          'Quartier Gwanak-gu, proche de l’université et à 35 minutes en métro du centre-ville. Un 7-Eleven et une salle de sport en bas de la rue. Parfait ! Journée de balade en début de journée (8 h - 15 h).',
        image: withBase('image2.jpg')
      },
      {
        id: 't3',
        date: 'Jour 3 (28 733 pas)',
        title: 'Après le repos, la découverte du centre de Séoul',
        description: 'Mise en place de tous les outils nécessaires :',
        bullets: [
          'Forfait mobile coréen pour 3 mois',
          'Abonnement à la salle de sport',
          'Achat de la carte de transport (et plus) : la T-Money Card',
          'Courses pour la semaine'
        ],
        image: 'https://picsum.photos/id/1039/400/300'
      },
      {
        id: 't4',
        date: 'Jour 4 (15 818 pas)',
        title: 'Découverte de la ville de Gangnam',
        description:
          'Départ à 9 h et arrivée à 10 h à Gangnam. Au programme : découverte du COEX, un mall immense. Repas dans une food zone, pause café chez Starbucks, puis balade pour finir l’après-midi. Avant de prendre le bus retour, je marche le long des buildings et trouve un café assez luxueux, tout en marbre, avec une belle lumière et un écran énorme diffusant une vidéo d’une cheminée style Noël. Je rentre, je commande un cake cacao et je me pose ici pendant 1 h, du jazz en fond et un calme fou.',
        image: withBase('j4.jpg')
      },
      {
        id: 't5',
        date: 'Jour 5 (21 192 pas)',
        title: 'Excursion à Suwon',
        description:
          'Départ en matinée pour rejoindre Suwon en bus. Découverte de la forteresse Hwaseong, balade sur les remparts avec vue sur la ville, puis exploration des petites rues autour du marché traditionnel.',
        image: withBase('j5.jpg')
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
      },
      {
        id: 'm4',
        lat: 37.5087,
        lng: 127.063,
        title: 'Gangnam (COEX Mall)',
        category: 'Ville',
        description:
          'Centre commercial emblématique de Séoul : librairie Starfield, aquarium, restaurants.',
        emoji: '🛍️'
      },
      {
        id: 'm5',
        lat: 37.2636,
        lng: 127.0286,
        title: 'Suwon',
        category: 'Ville',
        description:
          'Grande ville au sud de Séoul, connue pour sa forteresse et son ambiance plus locale.',
        emoji: '🌆'
      },
      {
        id: 'm6',
        lat: 37.285,
        lng: 127.0139,
        title: 'Forteresse Hwaseong',
        category: 'Monument',
        description:
          'Forteresse classée au patrimoine mondial de l’UNESCO, idéale pour marcher sur les remparts et admirer Suwon.',
        emoji: '🏰'
      },
      {
        id: 'm8',
        lat: 37.5796,
        lng: 126.977,
        title: 'Palais Gyeongbokgung',
        category: 'Monument',
        description:
          'Le plus grand palais de Séoul, incontournable lors d’une première visite.',
        emoji: '🏯'
      }
    ],

    journal: [
      {
        id: 'j1',
        day: 1,
        title: 'Réflexions',
        excerpt: `26 h de déplacement, ça reste bien relou. Mais la finalité est incroyable.
Le plus embêtant, c’est que l’enregistrement du vol ne pouvait pas se faire en ligne, donc j’ai été obligé de le faire directement à l’aéroport, ce qui m’a fait perdre du temps sachant que je n’avais que 2 h.

Ensuite, je devais enregistrer mon bagage en soute, puis passer l’embarquement. Adepte des vols loupés car toujours en retard (une première fois pour aller à Milan en novembre 2024, puis une deuxième fois pour aller à Vigo en Espagne).
D’habitude je me dis que 45 minutes c’est good ; là, je me dis que 2 h ce n’est pas assez.

Et évidemment, la question de mon bagage en soute revenait souvent : escale oblige, je croisais les doigts pour le retrouver à Séoul.`,
        image:
          'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=1931&auto=format&fit=crop',
        mood: 'Le trajet'
      },
      {
        id: 'j2',
        day: 2,
        title: 'La découverte de mon quartier',
        excerpt:
          'Avec le décalage horaire je me réveille assez tôt. 6 h 20. Je pars donc à la découverte des petites rues et ruelles du quartier. Je me perds, je fais demi-tour, etc. Ici, il y a des épiceries et laveries automatiques tous les 300 m : 7-Eleven, GS25 ou CU. Les rues sont très colorées, les devantures également.',
        image:
          'https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=2070&auto=format&fit=crop',
        mood: 'La découverte de mon quartier'
      },
      {
        id: 'j3',
        day: 3,
        title: 'La découverte de Séoul centre',
        excerpt:
          'Premier dimanche sur place. Je pars pour la première fois à la découverte du centre de Séoul. Et aujourd’hui, j’ai fait une bonne partie du trajet à pied. Je me balade, je prends des cafés à emporter. Je visite plusieurs temples et un musée.',
        image:
          'https://images.unsplash.com/photo-1517821099601-1a962ff56ae5?q=80&w=2070&auto=format&fit=crop',
        mood: 'La découverte de Séoul centre'
      },
      {
        id: 'j4',
        day: 4,
        title: 'Découverte de Gangnam',
        excerpt:
          'Découverte de Gangnam aujourd’hui : j’ai pris le bus puis le métro pour y aller. Le quartier est rempli de gratte-ciel et d’entreprises, et ressemble beaucoup à La Défense, à Paris. Les incontournables du coin : la statue Gangnam Style et les temples entre les buildings.',
        image:
          'https://images.unsplash.com/photo-1517821099601-1a962ff56ae5?q=80&w=2070&auto=format&fit=crop',
        mood: 'Découverte de Gangnam'
      },
      {
        id: 'j5',
        day: 5,
        title: 'Suwon',
        excerpt:
          'Aujourd’hui, je pars découvrir Suwon. Le trajet en bus depuis mon quartier est assez rapide (1 h). Je commence par le Starfield de Suwon avec sa grande bibliothèque, je me pose 1 h 30 puis je mange sur place. Enfin, je pars voir la forteresse Hwaseong : je marche sur les remparts, je m’arrête à plusieurs points de vue, et je regarde la ville. Ambiance plus calme qu’à Séoul.',
        image:
          'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
        mood: 'Excursion à Suwon'
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

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
          'Quartier Gwanak-gu, proche de l’université et à 35 minutes en métro du centre-ville. Un 7-Eleven et une salle de sport en bas de la rue. Parfait ! Balade en matinée (8 h - 15 h).',
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
        image: withBase('temple.jpg')
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
        image: withBase('suwon.jpg')
      },
      {
        id: 't6',
        date: 'Jour 6 (8 817 pas)',
        title: 'Retour à Gangnam',
        description:
          'Retour à Gangnam. Visite de l’aquarium « Sea Life » + Entraînement des bras à la salle vers 19 h.',
        image: withBase('aqura.jpg')
      },
      {
        id: 't7',
        date: 'Jour 7 (9 008 pas)',
        title: 'Bukchon Hanok Village & cafés',
        description:
          'Journée tranquille : visite de Bukchon Hanok Village, pause thé dans un café-galerie, parenthèse chez Onion Coffee où je commence L’Idiot, puis séance en salle à 20 h.',
        image: withBase('bukchon.jpg')
      },

      // ✅ AJOUT JOUR 8
      {
        id: 't8',
        date: 'Jour 8 (12 609 pas)',
        title: 'War Memorial of Korea & illuminations de Noël',
        description:
          'Visite du War Memorial of Korea et illuminations de Noël',
        image: withBase('war-museum.jpg')
      },

      // ✅ AJOUT JOUR 9
      {
        id: 't9',
        date: 'Jour 9 (3 557 pas)',
        title: 'Neige, café et ramen',
        description:
          'Neige mêlée de pluie',
        bullets: [
          'Café dans mon quartier',
          'Séance pec à la salle vers 20 h',
          'Envie de ressortir : ramen et gimbap au thon dans un resto à 4 minutes de chez moi'
        ],
        image: withBase('IMG_9238.jpg')
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
        lat: 37.467397,
        lng: 126.93898,
        title: 'Gwanak-gu',
        category: 'Ville',
        description:
          'Mon quartier de vie : proche de SNU, calme, avec salle de sport et convenience stores.',
        emoji: '🏡'
      },
      {
        id: 'm3',
        lat: 37.5663,
        lng: 126.9779,
        title: 'Centre-ville de Séoul',
        category: 'Ville',
        description:
          'Le cœur de Séoul, entre gratte-ciels, palais et rues animées.',
        emoji: '🏙️'
      },
      {
        id: 'm4',
        lat: 37.5111,
        lng: 127.0592,
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
        lat: 37.2851,
        lng: 127.0117,
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
      },
      {
        id: 'm9',
        lat: 37.470934, // approximation du quartier Hoam-ro / Sillim
        lng: 126.934557, // approximation
        title: 'EDIYA Coffee (이디야커피 신림대학동점)',
        category: 'Cuisine',
        description:
          'Café de quartier à Gwanak-gu, parfait pour bosser au calme ou faire une pause proche de chez moi (17 Hoam-ro 26-gil, Gwanak-gu, Seoul).',
        emoji: '☕'
      },
      {
        id: 'm10',
        lat: 37.468611, // approximation proche de Hoam-ro 22-gil
        lng: 126.93615, // approximation
        title: 'Gomjim',
        category: 'Activité',
        description:
          'Salle de sport indépendante où je suis inscrit pour 30 jours (60 Hoam-ro 22-gil, Sillim-dong, Gwanak-gu, Seoul).',
        emoji: '🏋️‍♂️'
      },
      {
        id: 'm11',
        lat: 37.470934, // approximation du quartier Hoam-ro / Sillim
        lng: 126.934557, // approximation
        title: 'EDIYA',
        category: 'Cuisine',
        description:
          'Café de quartier à Gwanak-gu, parfait pour bosser au calme ou faire une pause proche de chez moi (17 Hoam-ro 26-gil, Gwanak-gu, Seoul).',
        emoji: '☕'
      },
      {
        id: 'm12',
        lat: 37.57776,
        lng: 126.986535,
        title: 'Café Onion (Bukchon)',
        category: 'Cuisine',
        description:
          'Café Onion près de Bukchon Hanok Village : croissant, cake à la fraise et ambiance chill où je commence L’Idiot de Dostoïevski.',
        emoji: '🥐'
      },

      // ✅ AJOUTS JOUR 8 (MAP)
      {
        id: 'm13',
        lat: 37.5365,
        lng: 126.977,
        title: 'War Memorial of Korea (전쟁기념관)',
        category: 'Activité',
        description:
          'Un des musées majeurs d’Asie : guerres de l’histoire coréenne, guerre de Corée (1950-1953) et focus sur d’autres engagements militaires.',
        emoji: '🏛️'
      },
      {
        id: 'm14',
        lat: 37.5665,
        lng: 126.978, // Seoul Plaza / City Hall (approx)
        title: 'Illuminations de Noël (Seoul Plaza)',
        category: 'Activité',
        description:
          'Show de Noël en ville (annoncé à 19 h sur le flyer, démarrage un peu avant).',
        emoji: '🎄'
      },
            {
        id: 'm15',
        lat: 37.514912,
        lng: 127.057355,
        title: 'Bongeunsa',
        category: 'Monument',
        description:
          'Temple bouddhiste coréen traditionnel avec une statue de 23 mètres du Bouddha Maitreya.',
        emoji: '🛕'
      },

            {
        id: 'm16',
        lat: 37.470381,
        lng: 126.940359,
        title: '바로김밥',
        category: 'Cusine',
        description:
          'Restaurant de Gimbap et ramen à 4 minutes de chez moi',
        emoji: '🍜'
      },

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
          'Avec le décalage horaire, je me réveille assez tôt. 6 h 20. Je pars donc à la découverte des petites rues et ruelles du quartier. Je me perds, je fais demi-tour, etc. Ici, il y a des épiceries et laveries automatiques tous les 300 m : 7-Eleven, GS25 ou CU. Les rues sont très colorées, les devantures également.',
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
          'Aujourd’hui, je pars découvrir Suwon. Le trajet en bus depuis mon quartier est assez rapide (1 h). Je commence par le Starfield de Suwon avec sa grande bibliothèque, je me pose 1 h 30 puis je mange sur place. Enfin, je pars voir la forteresse Hwaseong : je marche sur les remparts, je m’arrête à plusieurs points de vue et je regarde la ville. Ambiance plus calme qu’à Séoul.',
        image:
          'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
        mood: 'Excursion à Suwon'
      },
      {
        id: 'j6',
        day: 6,
        title: 'Gangnam',
        excerpt:
          'Un peu fatigué de la randonnée d’hier à Suwon, je pars tranquillement en début d’après-midi pour Gangnam. Je retourne au mall COEX pour, cette fois-ci, visiter l’aquarium « Sea Life ». Comme je suis parti en début d’après-midi, j’en profite pour me balader en soirée dans les rues animées de Gangnam. Sur le trajet retour, je me motive pour aller à la salle, séance bras. Complètement cuit en rentrant, je m’endors très rapidement.',
        image:
          'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
        mood: 'Retour à Gangnam'
      },
      {
        id: 'j7',
        day: 7,
        title: 'Bukchon Hanok Village',
        excerpt: `Réveil vers 7 h, petit déjeuner devant une petite vidéo YouTube.
En début d’après-midi, je pars découvrir Bukchon Hanok Village. Pas énormément de pas aujourd’hui : le bus, juste en bas de chez moi, m’a déposé directement au pied du village.

Je me balade tranquillement dans les ruelles, puis je m’installe dans un café-galerie pour savourer un thé vert, ambiance zen.

Ensuite, je passe par Onion Coffee : croissant, cake à la fraise… endroit hyper chill où j’ai commencé L’Idiot de Dostoïevski.

Salle vers 20 h.`,
        image:
          'https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=2070&auto=format&fit=crop',
        mood: 'Bukchon Hanok Village'
      },
      {
        id: 'j8',
        day: 8,
        title: 'Le poids de l’Histoire',
        excerpt: `Aujourd’hui, je vais voir l’un des musées les plus importants d’Asie : le War Memorial of Korea.

La guerre de Corée (1950-1953) est, pour moi, une guerre dont je n’ai entendu parler que dans les films. J’ai en tête plusieurs scènes où les personnages parlent de cette guerre, connue pour être la « guerre oubliée ».

C’est en grande partie pour cela que je fais ce voyage : découvrir l’histoire profonde qui a construit la puissance de ce pays.

Moi qui pensais que le musée ne parlait que de la guerre de Corée, j’ai découvert qu’il évoque à la fois les guerres qui se sont déroulées tout au long de l’histoire du pays, la guerre de Corée de 1950, ainsi que l’aide apportée par la Corée du Sud pendant la guerre du Vietnam.

Moi qui pensais faire une visite de 3 à 4 heures, j’ai finalement passé 6 h 30 dans le musée. J’ai littéralement fait toutes les activités, cliqué sur tous les boutons et regardé presque toutes les vidéos.

Avant de terminer cette journée, je me suis rendu aux illuminations de Noël de la ville : sur le flyer, il était marqué 19 heures. Le show a commencé un peu avant.

Séance épaule à 22h.`,
        image: withBase('noel-seoul.jpg'),
        mood: 'Histoire et mémoire'
      },
      {
        id: 'j9',
        day: 9,
        title: 'Neige, café et ramen du soir',
        excerpt: `Mélange de neige et de pluie : l’événement K-pop du soir est déplacé dans un grand hall de magasin, ambiance qui ne me tente pas.
Je préfère un café tout près pour bouquiner, cookie et caramel latte à la main.
Retour à la maison vers 18 h 30, je note mes idées pour améliorer cette page web.
Salle à 20 h pour une séance pec.
Plus tard, l’envie de ressortir : un petit resto de ramen avec gimbap au thon à quatre minutes de chez moi, c’était super bon.`,
        image:
          'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8bb0?auto=format&fit=crop&w=2070&q=80',
        mood: 'Neige et ramen'
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

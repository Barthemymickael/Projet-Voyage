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
        date: 'Jour 1 (17 092 pas)',
        title: 'Le départ',
        description:
          'Départ de Cherbourg-en-Cotentin à 5 h du matin, direction Paris Saint-Lazare en train. De là, j’embarque pour mon premier vol Paris → Shanghai (12 heures). Après une escale de 2 heures à Shanghai, je prends mon second avion Shanghai → Séoul (2 h 10). Une fois arrivé à Incheon (ICN), je monte dans un bus pour 1 h 10 de trajet jusqu’à l’arrêt SNU (Seoul National University), situé juste à côté du quartier où je vais vivre durant plusieurs semaines.',
        note: 'Porte-à-porte global : 26 h',
        image: withBase('image.jpg')
      },
      {
        id: 't2',
        date: 'Jour 2 (4 203 pas)',
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
      },

      // ✅ AJOUT JOUR 10
      {
        id: 't10',
        date: 'Jour 10 (~6 h de marche et 20 226 pas)',
        title: 'Randonnée enneigée jusqu’au Samseongsan',
        description:
          'Journée de randonnée sous la neige avec trois sommets enchaînés et un point culminant à 480,9 m.',
        bullets: [
          'Dolsan Mountain (239 m)',
          'Hoamsan Mountain (393 m)',
          'Samseongsan Mountain (480,9 m)'
        ],
        video: 'https://youtube.com/shorts/omArH5D08Qc?si=lPuN-VIVf2EMEFxz'
      },

      // ✅ AJOUT JOUR 11
      {
        id: 't11',
        date: 'Jour 11 (7 416 pas)',
        title: 'SONGEUN Art and Cultural Foundation & Samsung',
        description:
          'Visite du musée SONGEUN Art and Cultural Foundation puis découverte d’un magasin Samsung sur quatre étages (smartphones, téléviseurs 8K, électroménagers connectés).',
        bullets: ['Visite du musée SONGEUN', 'Visite d’un magasin Samsung sur 4 étages'],
        image: withBase('jour11.jpg')
      },

      // ✅ AJOUT JOUR 12
      {
        id: 't12',
        date: 'Jour 12 (10 435 pas)',
        title: 'National Museum of Modern and Contemporary Art, Seoul',
        description:
          'Découverte de la deuxième branche du MMCA à Séoul : expositions plus percutantes que la veille, notamment celle de Kim Tschang-Yeul et ses gouttes d’eau hyperréalistes. Fin de journée à Gyeongbokgung pour les illuminations, puis promenade le long de la rivière Cheonggyecheon pour admirer près d’un kilomètre de lanternes.',
        video: 'https://youtube.com/shorts/ugXsLSn4tss?si=IrlWjPQqo9OuARW5'
      },

      // ✅ AJOUT JOUR 13
      {
        id: 't13',
        date: 'Jour 13 (5 281 pas)',
        title: 'Lessive/lecture et projet',
        bullets: [
          'Lavomatique et lecture',
          'Ménage et ravitaillement (produits du quotidien, repas)',
          'Travail sur le plan de communication au Paik’s Coffee suite à une notif de projet',
          'Balade autour de Sillim Station (6 °C)',
          'Salle vers 20 h 30'
        ],
        image: withBase('jour13.jpg')
      },

      // ✅ AJOUT JOUR 14
      {
        id: 't14',
        date: 'Jour 14 (14 755 pas)',
        title: 'Barber, expo et skyline',
        description:
          'Programme en bref : barber, expo Basquiat et skyline à la N Seoul Tower.',
        bullets: [
          'Barber à 10 h à Hongdae (5/5 – 780 avis)',
          'Dongdaemun Design Plaza (DDP)',
          'Musée éphémère Jean-Michel Basquiat (ticket 17 €)',
          'Fin de journée à la N Seoul Tower'
        ],
        video: 'https://youtube.com/shorts/eL1oSBb7YrI?si=3_Q_QpSSCKTh5WET'
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
        id: 'm31',
        lat: 37.572631,
        lng: 126.976683,
        title: 'Marché de Noël du Gwanghwamun Square',
        category: 'Activité',
        description: 'Marché de Noël installé sur Gwanghwamun Square.',
        emoji: '🎁'
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

      {
        id: 'm22',
        lat: 37.467777,
        lng: 126.936181,
        title: 'My friend Gimbab (내친구김밥)',
        category: 'Cuisine',
        description: 'Restaurant de gimbap dans mon quartier, parfait pour une pause rapide.',
        emoji: '🍙'
      },

      // ✅ AJOUT JOUR 14 (MAP)
      {
        id: 'm23',
        lat: 37.5569,
        lng: 126.9237,
        title: 'LEKKER Barbershop (Hongdae)',
        category: 'Activité',
        description: 'Barbershop noté 5/5 (780 avis) à Hongdae, coiffeur invité depuis Amsterdam.',
        emoji: '💈'
      },
      {
        id: 'm24',
        lat: 37.566,
        lng: 127.0095,
        title: 'Dongdaemun Design Plaza (DDP)',
        category: 'Activité',
        description: 'Complexe futuriste où je visite une expo gratuite et l’exposition éphémère consacrée à Jean-Michel Basquiat.',
        emoji: '🏛️'
      },
      {
        id: 'm25',
        lat: 37.5512,
        lng: 126.9882,
        title: 'N Seoul Tower',
        category: 'Activité',
        description: 'Tour emblématique de Séoul perchée sur Namsan, destination finale de la journée.',
        emoji: '🗼'
      },

      // ✅ AJOUT JOUR 10 (RANDONNÉE)
      {
        id: 'm17',
        lat: 37.4485,
        lng: 126.9408,
        title: 'Dolsan Mountain',
        category: 'Activité',
        description: 'Premier sommet de la rando enneigée, environ 239 m.',
        emoji: '🥾'
      },
      {
        id: 'm18',
        lat: 37.452,
        lng: 126.946,
        title: 'Hoamsan Mountain',
        category: 'Activité',
        description: 'Deuxième étape à 393 m, toujours sous la neige.',
        emoji: '🥾'
      },
      {
        id: 'm19',
        lat: 37.455,
        lng: 126.951,
        title: 'Samsungsan Mountain',
        category: 'Activité',
        description: 'Sommet final à 480,9 m avec vue dégagée entre deux passages nuageux.',
        emoji: '🏔️'
      },

      // ✅ AJOUT JOUR 11 (MAP)
      {
        id: 'm20',
        lat: 37.5256,
        lng: 127.0402,
        title: 'SONGEUN Art and Cultural Foundation',
        category: 'Activité',
        description: '441 Dosan-daero, Gangnam District, Seoul.',
        emoji: '🖼️'
      },

      // ✅ AJOUT JOUR 12 (MAP)
      {
        id: 'm21',
        lat: 37.579617,
        lng: 126.980389,
        title: 'National Museum of Modern and Contemporary Art (Seoul)',
        category: 'Activité',
        description:
          'Deuxième branche visitée du MMCA : expositions contemporaines et rétrospective de Kim Tschang-Yeul.',
        emoji: '🖼️'
      },
      {
        id: 'm26',
        lat: 37.565768,
        lng: 126.974913,
        title: 'Deoksugung Palace',
        category: 'Monument',
        description: 'Palais royal au cœur de Séoul, connu pour son architecture et ses jardins.',
        emoji: '🏯'
      },
      {
        id: 'm27',
        lat: 37.565964,
        lng: 126.973706,
        title: 'National Museum of Modern and Contemporary Art, Deoksugung',
        category: 'Activité',
        description: 'Branche Deoksugung du MMCA, juste à côté du palais.',
        emoji: '🖼️'
      },

      // ✅ AJOUT JOUR 13 (MAP)
      {
        id: 'm23',
        lat: 37.470042,
        lng: 126.934945,
        title: "Paik's Coffee",
        category: 'Cuisine',
        description:
          "Café de quartier pour bosser sur mon plan de communication, avec smoothie banane Oreo et cookie.",
        emoji: '🍪'
      },
      {
        id: 'm28',
        lat: 37.470559,
        lng: 126.934508,
        title: 'Franck Burger',
        category: 'Cuisine',
        description: 'Burger spot tout près du quartier, pratique pour un repas rapide.',
        emoji: '🍔'
      },
      {
        id: 'm29',
        lat: 37.571527,
        lng: 126.976088,
        title: "Mom's Touch",
        category: 'Cuisine',
        description: 'Adresse de poulet frit coréen au centre de Séoul.',
        emoji: '🍗'
      },
      {
        id: 'm30',
        lat: 37.571639,
        lng: 126.975629,
        title: 'Ediya Coffee',
        category: 'Cuisine',
        description: 'Café Ediya Coffee dans le centre de Séoul.',
        emoji: '☕'
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
      },
      {
        id: 'j10',
        day: 10,
        title: 'Randonnée enneigée',
        excerpt: `Aujourd’hui, je pense avoir vécu la plus belle randonnée qu’il m’ait été donné de faire.

Tout commence la veille au soir : la neige tombe bien en montagne.
Alors c’est décidé, dimanche sera une journée rando.

Résultat : 6 heures de marche jusqu’au sommet de la montagne la plus proche :
Samseongsan Mountain (480 m).

Au départ, tout est simple : chemins propres, ponts bien construits.
Puis, petit à petit, plus rien… que de la neige et des cailloux.

J’atteins une première montagne : Dolsan Mountain (239m).
Fier d’y être… jusqu’au moment où je lève la tête et que je vois deux autres monts, bien plus hauts.

Il est 13 h.
J’ai le temps.

Je continue et j’atteins la suivante : Hoamsan Mountain (393 m).

Mais évidemment, toujours en quête de mieux, j’aperçois au loin la Samseongsan Mountain (480,9 m).
Et là, changement d’ambiance.

Une randonnée normalement simple, mais avec la neige… un poil dangereux
Je croise quelques personnes qui s’arrêtent pour mettre des chaînes sous leurs chaussures de rando.
Et moi, comme un con, j’ai mes Puma classiques de tous les jours et mon cuir en guise de manteau.

Résultat : trois belles glissades, heureusement bien amorties par le sac.

J’atteins enfin le sommet.
Je m’y pose pendant 45 minutes. Absolument personne autour de moi.
Zen. Tranquille. De la musique, seul au sommet.
Par moments, le ciel se dégage, le soleil apparaît. Hyper agréable.

J’aurais voulu rester bien plus longtemps, mais le soleil se couchait deux heures plus tard.

Et HEUREUSEMENT que je me suis écouté.

Le retour a été un véritable bordel.
La map me fait passer par un autre chemin, plus court… mais évidemment beaucoup plus dangereux.
La preuve : une seule trace de chaussure à suivre.

Je passe donc plus d’une heure à suivre les grosses traces de bottes de cette personne inconnue.
24 % de batterie.
Un GPS qui déconne et me téléporte sur la map, impossible à suivre correctement.

Solo, je joue un peu avec les limites.
Je rigole, je me dis :
« Mais en fait… je ne vais jamais rentrer. »

Les mains complètement arrachées par le froid et les glissades.
De la neige jusqu’aux mollets.
Et les cailloux bah hyper glissant 
Et je le rappelle : tenue classique de ville.

Mais j’étais hyper content de ce que je venais de vivre.
Je parlais tout seul, je m’arrêtais et je me disais :
« Mais pourquoi j’ai pris ce putain de chemin de con… »

Même si j’étais dans un bon mood, certaines pentes étaient vraiment hard à prendre sans bonnes chaussures et sans gants pour s’agripper.
J’ai littéralement croisé zéro personne habillée comme moi.

Au fond, j’ai juste répondu à ce que je voulais :
Une montagne, de la neige — ok, j’y vais.

Et c’est là que le voyage solo prend tout son sens… ou son non-sens.
Personne pour me dire :
« Ouais non, je le sens pas »
« Non, on ne va pas faire ça sans bonnes chaussures»
« C’est bon, on a fait deux montagnes, on peut rentrer »

Ce sont exactement les pensées que j’ai eues.
Mais absorbé par l’envie d’aller plus loin, j’ai continué.

18 h, je suis bien rentré.
J’ai vu des rivières, des oiseaux, la neige, des points de vue incroyables, des bancs 10/10
Un silence fou.
Je me suis mis en difficulté, volontairement.

Une belle randonnée, par la nature sous la neige,
mais surtout par ce que j’ai vécu…
et pensé.

Ps : Quand je regarde les vidéos tiktoks et insta des 3 montagnes, on voit que les gens font la randonnée sans neige, par temps sec. Ça doit vraiment etre tellement plus simple et moins dangereux par la même occasion. Mais évidemment par la même expérience`,
        image:
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2070&auto=format&fit=crop',
        mood: 'Randonnée enneigée'
      },
      {
        id: 'j11',
        day: 11,
        title: 'Musée SONGEUN et magasin Samsung',
        excerpt: `Aujourd’hui, je suis allé visiter le musée SONGEUN Art and Cultural Foundation, un musée d’art contemporain.
Je suis assez mitigé sur cette visite, même avec les explications audio et les textes. J’ai eu du mal à trouver du sens à certaines œuvres.

Je suis ensuite allé visiter l’un des plus grands magasins Samsung de Corée. J’ai pu tester les téléphones, les tablettes, les ordinateurs, les énormes télévisions 8K QLED, mais aussi les frigos et les machines à laver dotés d’intelligence artificielle carrément.

J’ai marché le long des buildings de Gangnam. Je ne suis pas un grand fan des magasins de luxe, alors j’ai simplement regardé les devantures en passant devant Rolls-Royce, Bentley, Dior, Burberry.

Lecture dans le bus, puis salle à 20h : séance épaules`,
        image:
          'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=2070&q=80',
        mood: 'Art contemporain et tech'
      },
      {
        id: 'j12',
        day: 12,
        title: 'MMCA Séoul et lanternes sur Cheonggyecheon',
        excerpt: `Aujourd’hui, je pars à la découverte de la deuxième branche du MMCA (National Museum of Modern and Contemporary Art).
Si j’ai bien compris, il y a quatre branches au total dans tout le pays, et j’en ai déjà visité deux (Deoksugung et Séoul).

Cette fois-ci, les œuvres ont un sens beaucoup plus fort, en tout cas moins perchées que celles d’hier.

Par exemple, j’ai terminé la visite par une exposition que j’ai adorée : celle de Kim Tschang-Yeul.
Voici la description :

Il a consacré la majeure partie de sa carrière à peindre des gouttes d’eau hyperréalistes, un motif qui symbolisait pour lui la pureté et la guérison de traumatismes liés à la guerre de Corée.

On apprend dans cette exposition qu’il est même parti vivre en France, dans la ville de Draguignan, et qu’il parle très, très bien français. Il est aussi Chevalier de l’Ordre des Arts et des Lettres.

Enfin, je termine cette journée en faisant la fermeture du musée. En sortant, je me retrouve sur la place de Gyeongbokgung pour assister à un spectacle d’illuminations.

Mon objectif pour cette fin de journée était ensuite d’aller observer les lanternes illuminées le long de la rivière Cheonggyecheon.
Le spectacle s’étend sur presque 1 km, avec des lanternes représentant des scènes importantes de l’histoire de la Corée du Sud et du monde.

Lecture dans le bus retour, salle à 21h30 : séance dos
Puis j'ai commandé à emporter 2 gimbab (1 thon et 1 fromage)`,
        image:
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2070&auto=format&fit=crop',
        mood: 'Art moderne et lanternes'
      },
      {
        id: 'j13',
        day: 13,
        title: 'Lessive + café/lecture',
        excerpt: `Aujourd’hui, j’arrive à court de vêtements propres, alors je pars tranquillement au lavomatique, juste à côté de chez moi. Je m’y pose et je continue ma lecture.
Nettoyage de l’appart et ravitaillement en dentifrice, savon et repas.

En milieu d’après-midi, je reçois une notification concernant mon nouveau projet. Il pourrait être en ligne plus rapidement que prévu.
Je décide donc de me poser dans un café proche de chez moi et de bosser sur le plan de com que je vais appliquer pendant au minimum 3 mois : le Paik’s Coffee.

Aujourd’hui, il fait plutôt bon (6 degrés), je me balade autour de la Sillim Station et je pars à la salle vers 20 h 30.

Demain, grosse journée`,
        image:
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
        mood: 'Lessive et plan de com'
      },
      {
        id: 'j14',
        day: 14,
        title: 'Barber, DDP et N Seoul Tower',
        excerpt: `Rendez-vous chez le barber à 10 h à Hongdae (5/5 sur 780 avis). Le mec était hyper sympa, il venait d’Amsterdam et bossait dans cette enseigne pour quelques jours. On a parlé rap US/UK vs FR (que j’ai défendu corps et âme).
Bon, il m’a parlé d’Ascendant Vierge niveau musique française, je ne connaissais pas du tout.

Ensuite, j’ai pris le métro pour aller à la N Seoul Tower, mais j’ai loupé l’arrêt et je me suis retrouvé à la Dongdaemun Design Plaza (DDP). Parfait, je voulais justement visiter le lieu. Je prends donc un ticket à 17 euros. Au début, je fais l’exposition gratuite en pensant que c’était la payante, et je me dis : 17 € pour ça, c’est un peu la douille.
Mais en fait, je finis par entrer dans le musée éphémère sur Jean-Michel Basquiat. Et là, hyper, hyper intéressant : les 17 euros sont clairement rentabilisés. Moi qui adore les années 80, je découvre les œuvres de cet artiste ayant vécu à cette période, surtout dans le Manhattan et le Brooklyn crasseux de l’époque. Il devient connu et fait la connaissance d’Andy Warhol, qui deviendra l’un de ses très bons amis.
À travers ses œuvres, il exprime la réalité d’être afro-américain à cette période. Son style lui vient en partie de son plus jeune âge, notamment après avoir été victime d’un accident de voiture. Et comme beaucoup d’artistes de cette époque, il consomme de la drogue, très ancrée dans le milieu artistique new-yorkais des années 70-80. Il meurt à l’âge de 27 ans et rejoint donc le club des 27.
Petite info : il a été en relation avec Madonna. Bref, je suis presque sûr d’avoir déjà vu certaines de ses œuvres de loin, ou au moins entendu son nom. Une très, très belle découverte, qui m’a donné envie d’en apprendre davantage sur lui (vidéos YouTube à regarder plus tard).

Je quitte la Dongdaemun Design Plaza (DDP) pour rejoindre à pied la N Seoul Tower : 1h30 de marche. Il y a un bus et un téléphérique, mais il fait beau alors j’y vais à pied.
Sur le chemin, je dépose un colis au hwajangsil, je regarde des gens faire du tir à l’arc et je me balade dans le parc sous la tower.

Je passe un peu plus de 2 h dans cette tour. J’ai finalement pu voir le coucher de soleil depuis cet endroit, donc finalement j’ai bien fait d’oublier un arrêt ce matin : cela m’a permis de voir le coucher de soleil depuis la N Seoul Tower.
Ambiance chill, zen : je contemple la ville avec un jus d’orange maison. Et puis vers 17 h, plus beaucoup de gens, donc c’était vraiment très calme.
C’est un gros 10/10, l’expérience est top. Il y a plusieurs sas avant d’accéder à l’ascenseur, avec des écrans aux quatre coins des pièces, etc.
Petite info : l’ascenseur monte à une vitesse de 40 mètres par seconde, avec une animation visuelle à l’intérieur.

Salle à 19h30 : séance bras`,
        image:
          'https://images.unsplash.com/photo-1465750088002-2cbb1e74c0d2?q=80&w=2070&auto=format&fit=crop',
        mood: 'Expo imprévue et skyline'
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

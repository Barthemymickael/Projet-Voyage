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
        video: 'https://youtube.com/shorts/abn5ahWFwhM?si=2Ofs71e30Hrc4qAp'
      },
      {
        id: 't6',
        date: 'Jour 6 (8 817 pas)',
        title: 'Retour à Gangnam',
        description:
          'Retour à Gangnam. Visite de l’aquarium « Sea Life » + Entraînement des bras à la salle vers 19 h.',
        video: 'https://youtube.com/shorts/LG78mcFsP-4?si=dgN5QXv20fBav8z-'

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
      },
      // ✅ AJOUT JOUR 15
      {
        id: 't15',
        date: 'Jour 15 (3 390 pas)',
        title: 'Projet et vidéos Basquiat',
        description:
          'Je regarde plusieurs vidéos sur Jean-Michel Basquiat, puis j’améliore la page et j’avance sur mon projet. Balade dans le quartier et découverte d’un café en libre service avec fauteuils et musique de Noël.',
        bullets: ['Salle à 21 h : séance épaules']
      },
      {
        id: 't16',
        date: 'Jour 16 (14 609 pas)',
        title: 'Musée national de Corée & Gwangjang Market',
        description:
          'Visite du Musée national de Corée puis découverte du Gwangjang Market.',
        bullets: [
          'Musée national de Corée (11 h – 16 h) : parcours historique et artistique (coup de cœur pour le bouddhisme et les figures du bodhisattva).',
          'Gwangjang Market : street food, stands partagés, ambiance vivante.',
          'Salle à 20 h : séance dos.'
        ],
        video: 'https://youtube.com/shorts/kR1Yf3BmEus?si=xtgy5QXJUe51eyZQ'
      },
      {
        id: 't17',
        date: 'Jour 17 (467 pas)',
        title: 'Repos et programme de la semaine',
        description:
          'Déplacement au CU pour manger le soir et élaboration rapide du programme de cette semaine.'
      },
      {
        id: 't18',
        date: 'Jour 18 (12 525 pas)',
        title: 'Jogyesa Temple, Myeongdong et friperie',
        bullets: [
          'Balade dans l’hyper-centre',
          'Visite du temple Jogyesa',
          'Passage par le LOL Park',
          'Découverte de Myeongdong de nuit',
          'Achat d’une veste vintage en friperie'
        ],
        video: 'https://youtube.com/shorts/rrPFU8UfjbY?si=3othWAKZQBylhRLR'
      },
      {
        id: 't19',
        date: 'Jour 19 (2 624 pas)',
        title: 'Froid, refuge dans un café, ambiance studieuse',
        image: withBase('jour19.jpg')
      },
      {
        id: 't20',
        date: 'Jour 20 (8 549 pas)',
        title: 'Village traditionnel, art et soirée simple',
        description:
          'Visite d’un village traditionnel entouré de montagnes. Une après-midi tranquille entre balade, art et café avec vue, suivie d’une soirée simple entre sport, jeux vidéo et restaurant.',
        bullets: [
          'Village traditionnel',
          'Hanoks modernisés, galeries d’art et cafés',
          'Pause au rooftop avec café et vue sur la montagne',
          'Courte balade de nuit',
          'Séance bras à la salle',
          'Salon de jeux vidéo (PS5, FC26)',
          'Fin de soirée bière et pizza'
        ],
        video: 'https://youtube.com/shorts/7KE3vzUBlHQ?si=OxzWg9KSSyYuDBVT'
      },
      {
        id: 't21',
        date: 'Jour 21 (1 144 pas)',
        title: '–11 degrés et café'
      },
      {
        id: 't22',
        date: 'Jour 22 (1 251 pas)',
        title: 'Journée repos',
        description:
          'Pas de grosse activité aujourd’hui. Salle à 19 h.'
      },
      {
        id: 't23',
        date: 'Jour 23 (1 830 pas)',
        title: 'Gros froid et manque de motivation',
        description:
          'Encore du gros froid aujourd’hui, pas de motivation, salle à 21 h.'
      },
      {
        id: 't24',
        date: 'Jour 24 (13 744 pas)',
        title: 'Passerelle, Seoul Station et magasins',
        bullets: ['Seoullo 7017', 'Seoul Station', 'LOTTE Department Store'],
        video: 'https://youtube.com/shorts/hNNZO3RsZEk?si=mazakP7OOg17iige'
      },
      {
        id: 't25',
        date: 'Jour 25 (11 755 pas)',
        title: 'Naksan Park & quartier universitaire',
        bullets: [
          'Balade à Naksan Park au coucher du soleil (visibilité réduite par la pollution, mais promenade agréable).',
          'Pause au Alppucca Café',
          'Salle à 20h45'
        ],
        video: 'https://youtube.com/shorts/Rj7aZLlSFO8?si=io_crn3DJkLSPrVz'
      },
      {
        id: 't26',
        date: 'Jour 26 (15 358 pas)',
        title: 'DMZ (Zone Démilitarisée)',
        description: 'Une des activités les plus intéressantes et importantes',
        bullets: [
          'Visite de la DMZ : Découverte de cette zone unique au monde, située entre la Corée du Sud et la Corée du Nord, symbole d’un conflit toujours non résolu et d’un équilibre fragile.',
          'Visite du Tunnel 3 : Exploration du troisième tunnel creusé par la Corée du Nord, utilisé à des fins militaires.',
          'Balade au Gamaksan Suspension Bridge',
          'Café et balade',
          'Salle à 20h'
        ],
        video: 'https://youtube.com/shorts/sEJH1SIAbmk?si=iYp7e7z6F5aCTQf9'
      },
      {
        id: 't27',
        date: 'Jour 27 (10 813 pas)',
        title: 'Nouvel An à la Lotte Tower Avec Batu',
        bullets: [
          'Feu d’artifice de la Lotte Tower',
          'Pizzeria, discussions et pinte',
          'Retour à 06h00',
          'Grand froid cette nuit : –12 °C / –18 ressentis'
        ],
        video: 'https://youtube.com/shorts/ipLajW1DfOo?si=zowDNUZZiR1ybR90'
      },
      {
        id: 't28',
        date: 'Jour 28 (1 934 pas)',
        title: 'Écriture et objectifs 2026',
        description:
          'Après-midi écriture et tri de photos, avec un focus sur les objectifs 2026 (projets, livres à lire, films à voir). Toujours –10 °C dehors.',
        bullets: ['Salle à 22h30 : séance dos']
      },
      {
        id: 't29',
        date: 'Jour 29 (3 851 pas)',
        title: 'Café studieux',
        description:
          'Après-midi studieuse dans un Ediya Café repéré dès le premier jour, juste en face de l’université. Ice tea et cookie pour accompagner le travail.',
        bullets: ['Salle à 22 h : séance épaules']
      },
            {
        id: 't30',
        date: 'Jour 30 (11 903 pas)',
        title: 'Balade quartier Sillim Station et Gwanak-gu',
        description:
                    'Balade et recherche d’une nouvelle chaine de café.',
        bullets: ['Achat Olive Young  : Body Wash'],
                      video: 'https://youtube.com/shorts/_XpTho9A8wo?si=TjLK5qs_61rzK2Z2'
      },
                  {
        id: 't31',
        date: 'Jour 31 (4 862 pas)',
        title: 'Prison de seodaemun et Yeongcheon Traditional Market',
        description:
                    'Visite de la prison de Seodaemun, qui a servi à commettre des atrocités et des crimes de guerre sous l’occupation japonaise entre 1908 et 1945, puis balade au Yeongcheon Traditional Market.',
                      video: 'https://youtube.com/shorts/eGfF78uoc-E?si=4tN6KiYR_O0Lp6pw'
      },
      {
        id: 't32',
        date: 'Jour 32 (2 135 pas)',
        title: 'Insmonie, documentaire et lecture',
        description:
          'Insmonie cette nuit, je me reveille assez tard, je regarde un Documentaire sur maduro puis je pars lire au café Llbon',
        bullets: ['Salle à 20 h : séance pecs']
      },
      {
        id: 't33',
        date: 'Jour 33 (27 589 pas)',
        title: 'Longue balade le long de la Han River',
        description:
          'Longue balade le long de la rivière Han, 16,6 km à pied entre jour et nuit, jusqu’aux limites sud-est de Séoul.',
        bullets: [
          'Départ : Banpo Hangang Park (Banpo Bridge)',
          '16,6 km parcourus le long de la rive',
          'Fin de la balade à Cheonhodae Bridge',
          'Découverte de la ligne 8',
          'Salle à 21h'
        ],
        video: 'https://www.youtube.com/watch?v=rZe7VnzSLcA'

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
        id: 'm64',
        lat: 37.48388,
        lng: 126.929446,
        title: 'The Venti Coffee',
        category: 'Cuisine',
        description:
          'Café sur trois étages à l’angle d’un carrefour près de Sillim Station.',
        emoji: '☕'
      },
      {
        id: 'm63',
        lat: 37.468210,
        lng: 126.945615,
        title: 'EDIYA Coffee Univ',
        category: 'Cuisine',
        description:
          'EDIYA Coffee près de l’université, idéal pour une pause café dans le quartier.',
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
        lat: 37.575651,
        lng: 126.976795, // Seoul Plaza / City Hall (approx)
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
        lat: 37.458433,
        lng: 126.937340,
        title: 'Dolsan Mountain',
        category: 'Activité',
        description: 'Premier sommet de la rando enneigée, environ 239 m.',
        emoji: '🏔️'
      },
      {
        id: 'm18',
        lat: 37.451041,
        lng: 126.928249,
        title: 'Hoamsan Mountain',
        category: 'Activité',
        description: 'Deuxième étape à 393 m, toujours sous la neige.',
        emoji: '🏔️'
      },
      {
        id: 'm19',
        lat: 37.435957,
        lng: 126.939948,
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
      {
        id: 'm44',
        lat: 37.570428,
        lng: 126.980621,
        title: "Jimmy John's",
        category: 'Cuisine',
        description: 'Spot à sandwiches au centre de Séoul.',
        emoji: '🥪'
      },
      {
        id: 'm62',
        lat: 37.569476,
        lng: 126.984543,
        title: 'Pizza BROS',
        category: 'Cuisine',
        description: 'Pizza avec Batu.',
        emoji: '🍕'
      },
      {
        id: 'm32',
        lat: 37.468349,
        lng: 126.938626,
        title: 'CU (Convenience store)',
        category: 'Cuisine',
        description: 'Supérette CU ouverte pour les courses du quotidien.',
        emoji: '🛒'
      },
      {
        id: 'm33',
        lat: 37.468018,
        lng: 126.938711,
        title: 'Lavomatique 24/24',
        category: 'Activité',
        description: 'Laverie automatique ouverte 24/24.',
        emoji: '🧺'
      },
      {
        id: 'm34',
        lat: 37.499317,
        lng: 127.026516,
        title: 'Samsung Gangnam',
        category: 'Activité',
        description: 'Boutique Samsung à Gangnam pour découvrir les produits et nouveautés.',
        emoji: '📱'
      },
      {
        id: 'm35',
        lat: 37.502248,
        lng: 127.040426,
        title: 'Bar221',
        category: 'Cuisine',
        description: 'Bar à Gangnam pour une pause en soirée.',
        emoji: '🍸'
      },
      {
        id: 'm36',
        lat: 37.28739,
        lng: 126.991191,
        title: 'Starfield Library Suwon',
        category: 'Activité',
        description: 'La librairie iconique de Starfield Suwon, parfaite pour flâner.',
        emoji: '📚'
      },
      {
        id: 'm37',
        lat: 37.468963,
        lng: 126.942185,
        title: 'Café Lboon',
        category: 'Cuisine',
        description:
          'Café en libre service découvert lors d’une balade de quartier, avec fauteuils et musique de Noël.',
        emoji: '☕'
      },
      {
        id: 'm38',
        lat: 37.523961,
        lng: 126.980438,
        title: 'Musée national de Corée',
        category: 'Activité',
        description:
          'Grand musée national avec collections historiques et artistiques, trois étages de visite.',
        emoji: '🏛️'
      },
      {
        id: 'm39',
        lat: 37.570048,
        lng: 126.9996,
        title: 'Gwangjang Market',
        category: 'Cuisine',
        description:
          'Marché couvert emblématique pour la street food et les stands partagés.',
        emoji: '🥢'
      },
      {
        id: 'm40',
        lat: 37.573842,
        lng: 126.982201,
        title: 'Jogyesa Temple',
        category: 'Activité',
        description: 'Temple bouddhiste en plein cœur de Séoul.',
        emoji: '🛕'
      },
      {
        id: 'm41',
        lat: 37.571234,
        lng: 126.981516,
        title: 'LOL Park',
        category: 'Activité',
        description:
          'Espace dédié à l’e-sport et à League of Legends, avec trophées et figurines.',
        emoji: '🎮'
      },
      {
        id: 'm42',
        lat: 37.561675,
        lng: 126.985843,
        title: 'Myeongdong Night Market',
        category: 'Cuisine',
        description:
          'Marché nocturne animé pour la street food et les stands en plein air.',
        emoji: '🍡'
      },
      {
        id: 'm43',
        lat: 37.563775,
        lng: 126.984473,
        title: 'Myeongdong Shopping Street',
        category: 'Shopping',
        description:
          'Grande artère commerçante de Myeongdong, pleine de boutiques et d’enseignes.',
        emoji: '🛍️'
      },
      {
        id: 'm45',
        lat: 37.470351,
        lng: 126.939915,
        title: 'Compose Coffee',
        category: 'Cuisine',
        description: 'Café Compose Coffee près de Sillim Station.',
        emoji: '☕'
      },
      {
        id: 'm46',
        lat: 37.641328,
        lng: 126.939203,
        title: 'Eunpyeong Hanok Village',
        category: 'Activité',
        description: 'Village hanok traditionnel entouré de montagnes.',
        emoji: '🏘️'
      },
      {
        id: 'm47',
        lat: 37.639925,
        lng: 126.93681,
        title: 'Novelty Rooftop',
        category: 'Cuisine',
        description: 'Rooftop café avec vue sur la montagne.',
        emoji: '☕'
      },
      {
        id: 'm48',
        lat: 37.469333,
        lng: 126.939018,
        title: 'Record Pizza',
        category: 'Cuisine',
        description: 'Adresse pour pizza et bière en soirée.',
        emoji: '🍕'
      },
      {
        id: 'm49',
        lat: 37.556723,
        lng: 126.969577,
        title: 'Seoullo 7017',
        category: 'Activité',
        description: 'Skygarden piétonnier offrant une promenade urbaine et des vues sur Séoul.',
        emoji: '🌉'
      },
      {
        id: 'm50',
        lat: 37.554528,
        lng: 126.970698,
        title: 'Seoul Station',
        category: 'Ville',
        description: 'Gare centrale de Séoul, point de passage majeur du réseau ferroviaire.',
        emoji: '🚉'
      },
      {
        id: 'm51',
        lat: 37.559289,
        lng: 126.977698,
        title: 'Namdaemun Market',
        category: 'Cuisine',
        description: 'Marché emblématique pour la street food, les stands et les bonnes affaires.',
        emoji: '🧺'
      },
      {
        id: 'm52',
        lat: 37.564755,
        lng: 126.981707,
        title: 'LOTTE Department Store',
        category: 'Shopping',
        description: 'Grand magasin emblématique pour le shopping au centre de Séoul.',
        emoji: '🛍️'
      },
      {
        id: 'm53',
        lat: 37.468555,
        lng: 126.937142,
        title: 'HoJeu We Beef Noodles',
        category: 'Cuisine',
        description: 'Adresse pour un bol de noodles au bœuf dans le quartier.',
        emoji: '🍜'
      },
      {
        id: 'm54',
        lat: 37.58043,
        lng: 127.007851,
        title: 'Naksan Park',
        category: 'Activité',
        description: 'Parc perché sur les hauteurs, idéal pour une balade au coucher du soleil.',
        emoji: '🌳'
      },
      {
        id: 'm55',
        lat: 37.583216,
        lng: 126.999738,
        title: 'Alppucca Café',
        category: 'Cuisine',
        description: 'Café du quartier universitaire, parfait pour une pause goûter.',
        emoji: '☕'
      },
      {
        id: 'm56',
        lat: 37.916484,
        lng: 126.698154,
        title: 'DMZ (Tunnel 3 et Dora Observatory)',
        category: 'Activité',
        description: 'Zone démilitarisée et sites emblématiques de la frontière.',
        emoji: '🪖'
      },
      {
        id: 'm57',
        lat: 37.909909,
        lng: 126.734228,
        title: 'Unification Village',
        category: 'Activité',
        description: 'Village proche de la frontière, symbole de la réunification.',
        emoji: '🏘️'
      },
      {
        id: 'm58',
        lat: 37.937797,
        lng: 126.947079,
        title: 'Gamaksan Suspension Bridge',
        category: 'Activité',
        description: 'Pont suspendu avec panorama sur la vallée de Gamaksan.',
        emoji: '🌉'
      },
      {
        id: 'm59',
        lat: 37.560644,
        lng: 126.985971,
        title: 'Cafe The North Face',
        category: 'Cuisine',
        description: 'Café pour une pause chaude et une balade autour.',
        emoji: '☕'
      },
      {
        id: 'm60',
        lat: 37.560761,
        lng: 126.98668,
        title: 'Daïso',
        category: 'Shopping',
        description: 'Magasin pratique pour les petites courses du quotidien.',
        emoji: '🛍️'
      },
      {
        id: 'm61',
        lat: 37.512469,
        lng: 127.102543,
        title: 'Lotte Tower',
        category: 'Monument',
        description: 'Feux d’artifice vu du sol le 1er janvier / Visite du sommet + Cocktail au 123 Lounge le 8 janvier',
        emoji: '🎆'
      },
      {
        id: 'm62',
        lat: 37.570664,
        lng: 126.961207,
        title: 'Yeongcheon Traditional Market',
        category: 'Cuisine',
        description: 'Marché de quartier moins touristique',
        emoji: '🥢'
      },
      {
        id: 'm63',
        lat: 37.574279,
        lng: 126.956073,
        title: 'Prison de Seodaemun',
        category: 'Activité',
        description: 'Prison de Seodaemun : entre atrocités et crimes de guerre',
        emoji: '⛓️'
      },
      {
  id: 'm64',
  lat: 37.510632,
  lng: 126.995963,
  title: 'Banpo Hangang Park',
  category: 'Balade',
  description:
    'Parc emblématique le long du fleuve Han, point de départ de la balade du 6 janvier 2026.',
  emoji: '🌳'
},
{
  id: 'm65',
  lat: 37.512515,
  lng: 126.997487,
  title: 'Banpo Bridge',
  category: 'Balade',
  description:
    'Pont célèbre reliant les rives du Han.',
  emoji: '🌉'
},
{
  id: 'm66',
  lat: 37.541968,
  lng: 127.115364,
  title: 'Cheonho Bridge',
  category: 'Balade',
  description:
    'Grand pont marquant la fin de la balade du 6 janvier 2026 le long du fleuve Han.',
  emoji: '🌉'
},
{
  id: 'm67',
  lat: 37.431044,
  lng: 127.019960,
  title: 'National Museum of Modern and Contemporary Art',
  category: 'Activité',
  description:
    'Visite pour le dernier jour à Séoul de la 3ème branche sur 4 du National Museum of Modern and Contemporary Art',
  emoji: '🏛️'
    },
  {
  id: 'm68',
  lat: 35.183995,
  lng: 129.200907,
  title: 'Mon logement à Haeundae',
  category: 'Logement',
  description: 'Logement à Haeundae pour un séjour d’une semaine.',
  emoji: '🏠'
},
{
  id: 'm69',
  lat: 35.180347,
  lng: 129.203398,
  title: 'Plage de Songjeong',
  category: 'Activité',
  description: 'Plage de Songjeong, village surf.',
  emoji: '🏖️'
},
{
  id: 'm70',
  lat: 35.194848,
  lng: 129.224398,
  title: 'Godshott',
  category: 'Cuisine',
  description: 'Café luxueux avec vue sur la mer, réparti sur trois étages avec un rooftop.',
  emoji: '☕'
},
{
  id: 'm71',
  lat: 35.188545,
  lng: 129.223016,
  title: 'Haedong Yonggungsa Temple',
  category: 'Monument',
  description: 'Temple bouddhiste au bord de l’eau, niché dans les falaises face à la mer.',
  emoji: '⛩️'
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
      },
      {
        id: 'j15',
        day: 15,
        title: 'Basquiat, projet et café de quartier',
        excerpt: `Je voulais en savoir plus sur Jean-Michel Basquiat, donc j’ai regardé pas mal de vidéos sur sa vie.
Amélioration de la page et avancement de mon projet.

J’ai regardé 4 vidéos sur Jean-Michel Basquiat :
https://www.youtube.com/watch?v=TVX8z5b7jHQ
https://www.youtube.com/watch?v=ISeQl7CQw54
https://www.youtube.com/watch?v=vX_4bBTBctc
https://www.youtube.com/watch?v=lHePKNTRmdI&pp=ugUEEgJlbg%3D%3D

J’améliore cette page, je valide et je retravaille les tests de mon projet.
Le temps passe à une vitesse folle quand j’ai le pif dans le projet c’est fou

En cette fin de journée, je vois à peu près ce que je vais pouvoir faire samedi et dimanche.

Balade dans le quartier et découverte d’un café en libre service avec fauteuil et musique de Noël.

Salle à 22 h : séance épaules`,
        image:
          'https://images.unsplash.com/photo-1454903010535-9f2b6f2da2a0?q=80&w=2070&auto=format&fit=crop',
        mood: 'Projet et inspirations'
      },
      {
        id: 'j16',
        day: 16,
        title: 'Musée national de Corée et Gwangjang Market',
        excerpt: `Aujourd’hui, réveil à 9 h pour arriver presque à l’ouverture du Musée national de Corée.
Le temps est gris et pluvieux, donc ça s’annonce parfait pour une journée musée.

Le musée est immense et se divise en trois étages :
• le 1er est consacré à la préhistoire ainsi qu’à l’histoire ancienne et médiévale de la Corée
• le 2eme met en avant la calligraphie, la peinture et les œuvres offertes
• le 3eme est dédié aux arts du monde (Chine / Japon / Islam / Grèce et Rome) ainsi qu’aux sculptures et aux objets d’artisanat.

Je reste au musée de 11 h à 16 h. Il me parle moins que celui de la guerre, mais reste tout de même intéressant.
Beaucoup d’objets du quotidien : poteries, vases, ustensiles etc.

Petit coup de cœur pour la partie sur le bouddhisme, qui est pour moi quelque chose d’assez abstrait mais qui me parle beaucoup. Notamment le bodhisattva, très proche, dans l’idée, de la philosophie de Nietzsche dans Ainsi parlait Zarathoustra que j’ai lu en 2023, et aussi de mon film préféré : Point Break.

Pour faire simple : un sage qui a atteint un état d’éveil pourrait accéder au nirvana, mais choisit de rester sur Terre pour aider les siens.

Une fois le musée terminé, je me dirige vers le plus grand marché ouvert de Séoul, ouvert 7j/7 : le Gwangjang Market.

Il y a énormément de choix, et on peut manger à emporter ou directement sur place, assis devant les étals, face aux vendeurs, à une table partagée avec des inconnus.

C’est ici qu’on trouve notamment le poulpe tué vivant, qui bouge encore dans l’assiette. Je me suis installé à deux stands différents, très rapidement mais l’ambiance était super cool.

Salle à 20 h : séance dos.`,
        image:
          'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=2070&auto=format&fit=crop',
        mood: 'Musée et marché'
      },
      {
        id: 'j17',
        day: 17,
        title: 'Dimanche repos',
        excerpt: `Dimanche repos, j’ai écouté quelques podcasts en bossant sur le projet.
Mini déplacement au CU pour manger le soir et élaboration rapide du programme de cette semaine.`,
        mood: 'Repos et organisation'
      },
      {
        id: 'j18',
        day: 18,
        title: 'Jogyesa et Myeongdong de nuit',
        excerpt: `Balade dans l’hyper-centre, visite du temple Jogyesa, puis passage par le LOL Park. Bon, j’avoue que je n’y connais pas grand-chose, mais c’était amusant de se retrouver entouré des personnages du jeu et de voir les trophées des champions.

Découverte ensuite du deuxième grand marché de la ville : le Myeongdong Night Market, et Myeongdong Shopping Street. Une fois la nuit tombée, l’ambiance, le mood, changent radicalement et je préfère ainsi.

J’ai essayé de parcourir toutes les allées du marché, de faire quelques boutiques… et j’en ai profité pour acheter une veste vintage dans une friperie.`,
        mood: 'Myeongdong by night'
      },
      {
        id: 'j19',
        day: 19,
        title: 'Froid, refuge dans un café',
        excerpt: `Aujourd’hui, -6 degrés annoncés, avec de la neige mêlée à de la pluie dès le début d’après-midi.
Difficile de me motiver. Alors je me pose de 15h à 19h dans un café, entouré d’étudiants sur leurs PC, je fais de même.
Je prends un tiramisu cake et un café mocha, le tout pour l’équivalent de 4€.
En fond, des musiques de Noël. Devant moi, la grande route de Sillim Station : la neige tombe, touche le sol… et disparaît.

Salle à 21h : Séance pec`,
        mood: 'Froid et café studieux'
      },
      {
        id: 'j20',
        day: 20,
        title: 'Eunpyeong Hanok Village',
        excerpt: `Je pars en début d’après-midi pour aller voir ce petit village traditionnel.

Un village qui donne vraiment l’impression d’être perdu au milieu de nulle part. Il est pourtant accessible en bus. À seulement 1 km, il y a énormément de grands immeubles d’habitation, avec des numéros comme « 1401 », « 1402 », des tours de 40 à 50 étages. Et puis, une fois arrivé ici, plus rien. Juste le village et les montagnes autour, notamment la Bukhasan mountain.

Le lieu est un mélange d’habitations traditionnelles et de galeries d’art, avec quelques cafés un peu partout.
Même si le terme « modernité et tradition » est assez mal vu ces temps-ci, le musée du village explique qu’il y avait un vrai besoin de modernisation.

En 2005, le village n’était pas entretenu. Les hanoks, les habitations traditionnelles, étaient en mauvais état et peu valorisées. Une reconstruction partielle des jardins et des allées a donc été faite, pour apporter un peu de nouveauté, attirer des visiteurs, mais surtout redonner vie au village.

C’est comme ça que sont apparus les hanoks de « dernière génération » : une architecture traditionnelle, mais avec des vitres modernes et des systèmes de chauffage plus efficaces.

De mon côté, je me suis baladé le long des allées ce mercredi 24. J’ai croisé à peine une trentaine de personnes. C’était extrêmement calme. J’entendais seulement mes pas et ma respiration.

Je suis entré dans une galerie d’art avec une vingtaine de tableaux, installée dans un hanok de nouvelle génération.

Ensuite, je me suis posé au Novelty rooftop. J’ai pris un brownie avec un café, avec une vue sur la montagne éclairée par la lumière du coucher de soleil. Jazz en fond, et lecture d’articles que j’avais enregistrés sur Substack. Moment très agréable.

J’écris ce texte depuis ce café. Il me reste environ 1h40 pour rentrer à l’appartement, donc je ne suis pas pressé. J’y reste encore une heure, puis je fais une courte balade de nuit. Je m’attendais à ce que tout le village soit éclairé, mais seuls quelques hanoks l’étaient. Très beau aussi, différemment.

Salle à 20h : séance bras

En sortant, je décide d’entrer dans un bar qui me rendait perplexe depuis quelques jours. Sur la devanture : des logos PlayStation, Xbox et Nintendo. À l’intérieur, c’est un salon de jeux vidéo, avec une dizaine de canapés et de très grands écrans.

Je demande FC26 et je joue pendant une heure sur PS5. Environ 2,50 €.
Par contre, je ne sais pas pourquoi, mais les canapés étaient extrêmement proches des télévisions, genre à 1m50.

Ensuite, je sors. Je voulais manger des sushis dans un restaurant, mais il était fermé. Je décide alors de prendre une bière avec des parts de pizza dans un restaurant que je voulais tester depuis deux semaines.

Bonne ambiance. Je discute un peu avec le serveur.`,
        mood: 'Eunpyeong Hanok Village'
      },
      {
        id: 'j21',
        day: 21,
        title: '–11 degrés et café',
        excerpt: `25 décembre, –11 degrés au thermomètre. Pas de grosse activité aujourd’hui, si ce n’est une pause café et lecture au Compose Coffee.
Après-midi graphismes, tranquille. Le froid tabasse les oreilles et les yeux, et en plus il y a du vent.
Sur la route du retour, j’ai aidé une vendeuse d’une supérette à ramasser les produits qui s’étaient envolés dans toute la rue. Elle m’a beaucoup remercié.`,
        mood: 'Froid et pause café'
      },
      {
        id: 'j22',
        day: 22,
        title: 'Insomnie et travail tardif',
        excerpt: `Petite insomnie jusqu’à 3 h du matin. Je me lève assez tard, sans grosse motivation.
Je commence à bosser vers 15 h : partie multilingue et corrections de détail sur le projet.

Salle à 19 h : séance dos.`,
        mood: 'Fatigue et avancée du projet'
      },
      {
        id: 'j23',
        day: 23,
        title: 'Froid et sommeil léger',
        excerpt: `Toujours du mal à m’endormir, j’alterne entre scroll et lecture (mauvais cocktail).

Salle à 21 h : séance épaules.`,
        mood: 'Fatigue et froid'
      },
      {
        id: 'j24',
        day: 24,
        title: 'Seoullo 7017 et flânerie',
        excerpt: `Ce matin, je me réveille et je fais une recherche Google pour trouver un endroit à visiter.

Je tombe sur le Seoullo 7017, une ancienne route suspendue qui traverse le centre de Séoul. Un kilomètre de long, aménagé avec des bancs et des plantes, des arbres.

Je décide donc de partir à la découverte de ce lieu. Ce n’est pas non plus incroyable, mais ça m’a permis de découvrir la plus grande gare de Corée : Seoul Station.

En fait, la “route” est directement connectée au toit de la gare. Je me balade donc sur ce toit aménagé, avec des dizaines de bancs et d’espaces verts. Vides à cette période de l’année, mais qui doivent sûrement être remplis de monde en été.

Je prends les escalators et me retrouve à l’intérieur de la gare. Je me balade, un peu perdu, entre les gens qui font leurs courses au Lotte Mart de Seoul Station et ceux qui sont pressés, traînant leurs valises pour sortir de la gare ou attraper leur train.

Moi, les mains dans les poches. Juste à flâner. Sans vraiment savoir où aller.

Je quitte ce quartier et je me retrouve au marché de Namdaemun. Moins bien que les deux autres marchés que j’ai déjà faits ces derniers jours.

Je marche. Je décide d’aller à gauche, puis à droite, etc…
Et finalement, je me retrouve au marché de Myeongdong, que j’ai déjà visité il y a quelques jours (là où j’ai acheté la veste).

Je suis à la fois content et un peu dubitatif. L’endroit est cool, mais bon… j’y suis déjà allé récemment, et en ce dimanche il y a énormément de monde.

Je continue à me balader, et un magasin me laisse perplexe : le LOTTE Department Store. Avec, en devanture, d’immenses décors de Noël. Je décide d’entrer.

Un immense centre commercial, style Galeries Lafayette, mais avec 14 étages.
Je pense y être resté une bonne heure. J’ai juste marché et regardé les vêtements. Je m’attendais à trouver un rooftop avec un restaurant ou un café avec vue, mais malheureusement il n’y avait qu’un café “classique”.

Je sors, prends mon bus, me balade dans mon quartier… et je tombe sur un petit restaurant vide, avec des places assises juste devant les fourneaux.

J’entre. Le chef me prépare des nouilles au bœuf.
J’ai vu toute la préparation en direct. C’était simple, sympa, et très bon.
Prix : 5,50 €.`,
        mood: 'Balade et marchés'
      },
      {
        id: 'j25',
        day: 25,
        title: 'Naksan Park et quartier universitaire',
        excerpt: `J’ai souvent vu Naksan Park en recommandation, alors aujourd’hui je décide d’aller tester ce parc.

J’arrive au départ de la forteresse pile pour le coucher du soleil.
Malheureusement, la pollution est au rendez-vous, donc la visibilité n’est pas incroyable.
Cela dit, la balade reste agréable. On peut vraiment voir le contraste entre les deux côtés de la forteresse : d’un côté, un centre-ville actif, de l’autre, des immeubles à perte de vue — dont une bonne dizaine en construction, tous numérotés « 107 », « 108 », « 109 ».

Je me perds un peu dans le parc.
Je dépose un colis au hwajangsil,
toujours hyper propre, bien éclairé, même dans ce genre de parc.

J’arrive ensuite vers l’université catholique de Corée.
Et là, on sent direct que c’est un quartier jeune, qui bouge : des bars concept, beaucoup d’animation, et surtout énormément d’étudiants.

Je repère un café assez sympa, le Alppucca café.
Tu prends ton plateau, puis avec des pinces tu choisis ce que tu veux. Je prends un croissant, le dépose sur le plateau… le croissant rebondit et tombe par terre.
La honte. Moi qui voulais une ambiance aesthetique et posée, me voilà comme le singe du village.

Bon, ceci dit, ça dure 20 secondes.
Je monte ensuite au premier étage, je m’installe et lis quelques articles en dégustant mon goûter. Je reste là une trentaine de minutes, puis je repars.

Le retour est assez long. Dans le métro, une annonce du conducteur retentit. Je ne comprends rien. Les gens commencent à se lever. Je lance le traducteur vocal…
Il me traduit : « La coupe est bien en Asie ».
Bon. Ok. Super. Ça ne m’aide pas du tout.

Finalement, le métro ne desservait pas mon arrêt. Je dois revenir en arrière, puis je me rends compte que je ne peux carrément pas reprendre cette ligne : la station est bloquée.
Résultat, je prends une autre ligne.
+20 minutes.

Salle à 20h45 : Séance pec`,
        mood: 'Naksan Park'
      },
      {
        id: 'j26',
        day: 26,
        title: 'Visite de la DMZ North',
        excerpt: `Aujourd’hui est un grand jour car c’est sûrement l’événement, l’activité qui m’intrigue le plus dans ce voyage en Corée du Sud.

La visite guidée de la DMZ North :

Une zone démilitarisée créée en 1953, à la fin de la guerre de Corée. Elle marque la frontière entre la Corée du Sud et la Corée du Nord (longue de plus de 250 km et large de 4 km).
C’est l’une des frontières les plus surveillées au monde.

Un bus est prévu par l’organisation qui gère le tour à 7h30 dans le centre de Séoul.

On commence d’abord par la place du train, Ce train est là pour une raison précise.
Pendant la guerre, il transportait du matériel militaire vers Pyongyang. Sur la route, l’intervention des forces chinoises oblige le convoi à faire demi-tour. Le train est alors bombardé, mitraillé, et finit par dérailler près de la gare de Jangdan.
Il restera bloqué là, en pleine DMZ

Ensuite, nous avons fait le tunnel 3, hyper intéressant mais aucune photo possible.
Il s’agit de l’un des tunnels d’infiltration découverts dans les années 1970. Il a été creusé par la Corée du Nord dans le but de permettre le passage rapide de soldats vers le Sud.
Le tunnel est profond, humide, et descend jusqu’à 73 m de profondeur. Tout en bas, une hauteur de 1m60, donc il faut se courber sur plus de 300 m.
On nous explique qu’il aurait pu permettre à des dizaines de milliers de soldats de passer par heure.

Ensuite, on passe à la partie la plus intéressante, l’observatoire de la DMZ, encore ici aucune photo possible.
Depuis l’observatoire, on peut voir le territoire nord-coréen à l’aide de jumelles : des villages, des champs, des drapeaux, parfois même des bâtiments présentés comme factices. Tout semble figé, silencieux.
J’ai pu observer des camions et des fermiers. C’était assez bizarre, comme si on observait des extraterrestres, en utilisant des « ils », « ils font ça », « il y a ce genre de chose là-bas ».
Dans l’observatoire, Il y a même un grand amphithéâtre avec des énormes baies vitrées où tu peux t’asseoir et observer, « contempler », la Corée du Nord.
Et même si les villages présentés devant nous sont peut-être factices, c’est quand même ultra bizarre de scruter des humains.
Et cette question me revenait souvent : tant de forêts, de plages, de lacs et de rivières inaccessibles pour le monde.
Depuis 80 ans, la Corée du Nord ne cesse de faire des tentatives : drones, tunnels, attaques cyber, tests de missiles balistiques, armement de plus en plus accru du pays. Mais aussi lancement de satellites dans l’espace.
Ce n’est pas pour rien que chaque homme Sud-Coréen a pour obligation de faire un service militaire de 18 mois.
Ce qui me choque, c’est qu’il n’y a pas de traité de paix entre les deux, mais une armistice depuis 80 ans.

Après ça, on s’arrête à l’Unification Village, qui selon moi est un arrêt purement commercial, histoire de faire acheter et consommer nourriture et souvenirs.
L’arrêt dure 30 minutes, je me pose sur un banc au soleil.

On finit ce tour par une balade au Gamaksan Suspension Bridge. J’ai discuté pendant toute cette balade avec un Allemand que j’ai rencontré dans le bus.

Une fois revenu à Séoul, on continue à discuter ensemble, et on passe par le marché de Myeongdong, il me conseille des brochettes de poulet.

Ensuite, nous avons fait ensemble un magasin Olive Young puis un pop-up store The North Face avec café au 3ᵉ étage.
On se pose au café, on discute, et je me rends compte qu’on n’a pas la même vision des voyages.
Lui enchaîne les villes (8 jours à Séoul, 2 jours à Busan, 9 jours à Shanghai) pendant que moi je suis plus dans une optique de bien m’imprégner d’une ville, d’y vivre pendant quelque temps et puis, à un moment donné, partir.
Évidemment, nous n’avons pas le même contexte de vie. Lui profite de ses vacances avant de reprendre le travail, il est limité par le temps et ça, je le comprends totalement, mais malheureusement, ça se voit.

Moi qui n’apprécie pas forcément les hyperactifs en général, là je tombe sur l’archétype de l’hyperactif.
En une journée, il a pris 6 boissons différentes, laissant 1/4 à chaque fois pour en consommer une autre, et ce même au café.
Après ce café, nous sommes partis dans un magasin sur 11 étages, Daiso (comme Action). J’en ai profité pour acheter des écouteurs (2 €).
Cependant, grâce à son énergie débordante, nous passions presque moins de 3 minutes dans chaque étage.

À la différence de d’habitude, je n’avais pas le temps de me balader, mains dans les poches, et de me perdre dans les rayons.
Puis, en sortant de Daiso, j’étais complètement rincé, mais je voyais qu’il souhaitait qu’on mange ensemble.
Nous avons passé 3h ensemble et nos discussions étaient cool, et j’ai apprécié connaître sa vie, mais il était temps pour moi de rentrer, préférant garder ce moment en souvenir plutôt que de me forcer à passer quelques heures de plus et paraître moins agréable ou moins souriant en cette fin de journée.

Salle à 20h : séance bras.`,
        mood: 'DMZ North'
      },
      {
        id: 'j27',
        day: 27,
        title: 'Feu d’artifice à la Lotte Tower',
        excerpt: `Vers 16h, j’envoie un message à Batu, l’Allemand que j’ai rencontré hier.
On avait parlé la veille de ce qu’on avait prévu pour le Nouvel An et on ne savait pas vraiment quoi choisir comme lieu.
Je lui propose d’aller voir le feu d’artifice de la Lotte Tower.
Mais on hésite entre la Lotte Tower, qui aura un gros feu d’artifice, et la Dongdaemun Design Plaza (DDP), qui aura une ambiance plus festive avec des animations projetées et des artistes qui chantent.

On part sur le feu d’artifice de la Lotte Tower et, à l’heure où j’écris cette ligne, je suis en direction du bus en espérant avoir fait le bon choix d’endroit.

Maintenant, je peux écrire à tête reposée : le feu d’artifice de la Lotte Tower n’était pas incroyable, mais sympa !
Quel plaisir d’être dans un autre pays, d’entendre le décompte dans une langue étrangère !

Ensuite, j’ai proposé à Batu d’aller boire. J’avais oublié qu’il ne buvait pas d’alcool, étant musulman. Nous sommes partis dans une pizzeria et nous avons discuté de nos vies et des voyages que nous préparions pour le futur. Je me suis pris une pinte, histoire de fêter le coup.

Contrairement à hier, il était plus posé et moins hyperactif, ce qui a laissé place à de la bonne humeur et à beaucoup de blagues.

Ensuite, nous nous sommes dit au revoir vers 5 h du matin. Il a son avion à midi et moi je repars tranquillement, les mains dans les poches à cause du grand froid de cette nuit (-12 degrés et -18 ressentis)

PS : la ville a laissé 1/4 des transports actifs cette nuit, mais chaque métro et chaque bus étaient incroyablement bondés. Pour sortir de la place Lotte Tower vers le métro, c’était assez compliqué, ce qui nous a pris 2h pour aller de la place à La Pizzeria dans le centre.`,
        mood: 'Nouvel an à Séoul'
      },
      {
        id: 'j28',
        day: 28,
        title: 'Écriture et objectifs 2026',
        excerpt: `Réveil à 13h en détente, aujourd’hui c’était après-midi écriture, tri de photos et objectif sur l’année 2026.
Projets, livre à lire, film à voir.
Toujours -10 dehors.

Salle à 22h30 : Séance Dos`,
        mood: 'Organisation et écriture'
      },
      {
        id: 'j29',
        day: 29,
        title: 'Café studieux',
        excerpt: `Aujourd’hui, je décide de m’installer dans un café pour avancer sur mon projet.
Ce café, je l’avais repéré dès le premier jour de mon arrivée : j’avais mes deux gros sacs sur le dos, 25 heures de transport dans les jambes, et je m’étais dit : ce café a l’air sympa. Juste en face de l’université.

C’est un Ediya Café, et l’ambiance y est studieuse. J’y reste donc une bonne partie de l’après-midi, accompagné d’un ice tea et d’un cookie.

Salle à 22 h : séance épaules`,
        mood: 'Café et productivité'
      },
      {
        id: 'j30',
        day: 30,
        title: 'Sillim Station et Venti Coffee',
        excerpt: `Balade le long du quartier de Sillim Station : j’essaie de trouver une chaîne de café que je n’ai pas encore testée.
Je tombe sur un café à l’angle d’un carrefour, réparti sur trois étages : le Venti Coffee.
J’y reste toute la fin d’après-midi, puis je décide de faire le tour de la boucle de Gwanak-gu, histoire de visualiser entièrement à quoi ressemble exactement l’endroit où je vis depuis un mois.
Moins froid aujourd’hui : -1 °C.`,
        mood: 'Balade et café'
      },
      {
        id: 'j31',
        day: 31,
        title: 'Prison de seodaemun et Yeongcheon Traditional Market',
        excerpt: `Un mois pile que je suis à Séoul ! Le temps est passé à une vitesse folle ! 
Finalement, je commence à avoir fait pas mal d’activités importantes. Aujourd’hui, je pars visiter la prison de Seodaemun.

Il fait 3 degrés, c’est quand même bien plus agréable de se balader sous le soleil avec une température positive.

Cette prison n’est pas forcément mise en avant sur les différents sites de tourisme et guides touristiques, mais ça reste une visite importante pour comprendre l’histoire du pays, et c’est un très bon complément à la visite du musée de la guerre.

La prison a été ouverte sous la période coloniale japonaise, de 1908 à 1945, puis récupérée par les forces nord-coréennes durant la guerre de Corée (1950-1953), et enfin utilisée comme prison « classique » jusqu’en 1987.

La visite se divise en 6 bâtiments à visiter. On parcourt des couloirs, des cellules avec des reconstitutions via des mannequins, et des cellules partagées où l’on peut voir ce que les personnes qui y étaient incarcérées sont devenues.

On découvre des techniques de torture, des crimes de guerre, et même, en dernier, une salle avec des bancs pour regarder les prisonniers être pendus.

Assez glauque, même si je n’arrêtais pas de comparer avec les atrocités nazies. Étant Européen, je suis plus marqué par celles-ci que par les atrocités japonaises, même si la preuve est là : elles ont bien existé.

En ce dimanche, je m’attendais à plus de monde, mais c’était parfait, ce qui m’a permis de rester plus longtemps dans les lieux et de pouvoir lire correctement les affiches.

Une fois sorti du musée, je me suis baladé autour et je suis rentré dans le Yeongcheon Traditional Market. Ici, on voit bien que c’est un marché de quartier, moins touristique.`,
        mood: 'Prison et marché'
      },
      {
        id: 'j32',
        day: 32,
        title: 'Insomnie, documentaire et café',
        excerpt: `Petite insomnie cette nuit, réveil assez tard.
Je regarde un documentaire d’Arte sur Maduro :
https://www.arte.tv/fr/videos/114209-000-A/maduro-du-socialisme-a-la-dictature/?utm_source=ios&utm_medium=share&utm_campaign=114209-000-A

Puis lecture au café Llbon, avec du jazz en fond, et salle à 20 h : séance pecs.`,
        mood: 'Insomnie et café'
      },
      {
        id: 'j33',
        day: 33,
        title: 'Longue balade le long de la Han River',
        excerpt: `Aujourd’hui, grosse balade le long de la rivière Han (Han River). 

Comme beaucoup de villes, Séoul est coupée en deux : rive nord, rive sud.
La rivière traverse la ville d’est en ouest.
D’un côté, les quartiers chargés d’histoire (au nord) ; de l’autre, une ville plus récente (au sud).

Je suis parti en début d’après-midi jusqu’au soir !
16,6 km parcourus : j’ai commencé au Banpo Hangang Park, avec le fameux Banpo Bridge, qui crache ses jets d’eau colorés hors période hivernale.
J’ai terminé cette balade au Cheonhodae Bridge, 16 km plus loin.

Avec mes écouteurs, c’était extrêmement agréable. 2 degrés toute l’aprem, puis 0 degré en soirée.

Ce qui est cool sur cette rive, c’est qu’il y a énormément de berges aménagées, avec des restaurants, des bars et des convenience stores.
J’ai été tenté plusieurs fois de m’arrêter, mais je ne voulais pas me poser : j’avais vraiment envie de découvrir toute la rive.

J’ai suivi pendant toute la balade une piste piétonne, accompagnée d’une piste cyclable. Tous les kilomètres, ou presque : des toilettes publiques, des machines de musculation en extérieur, des parcs pour enfants, des bancs… et évidemment des vues qui changent au fil des kilomètres.

Une fois arrivé du côté de Gangnam, la rive était en construction et la nuit était tombée. À ce moment-là, un son dans mes écouteurs m’a littéralement téléporté dans une ambiance folle.

Puis j’aperçois la Lotte Tower. Je me pose la question :
« Est-ce que je m’arrête là ? Est-ce que je prends le métro direction chez moi ? »
Finalement, j’ai continué encore 4 km.

J’ai fini par prendre une ligne qui m’était encore inconnue : la ligne 8. Je n’avais jamais été aussi loin au sud-est, alors c’était une belle découverte.

1h22 de transport pour rentrer dans mon quartier.

Salle à 21h : séance bras
`,
        mood: 'Balade Han River'
      },
      {
        id: 'j34',
        day: 34,
        title: 'Grosse lesive et projet',
        excerpt: `Aujourd’hui, le gros froid est revenu, avec pas mal de vent.
Je bosse sur mon projet jusqu’en fin d’après-midi, puis lessive et lecture au lavomatique, et enfin salle à 21 h : séance épaules`,
        mood: 'Grosse lesive et projet'
      },
      {
  id: 'j35',
  day: 35,
  title: 'Séoul Sky Lotte Tower + Cocktail à 500 m de hauteur :)',
  excerpt: `Je regarde la météo depuis plusieurs semaines, notamment pour trouver le jour avec la meilleure visibilité afin de pouvoir faire cette activité.

Aujourd’hui, la vue est dégagée sur plus de 30 km, avec peu de pollution : des conditions parfaites pour monter au sommet de la Lotte Tower, cette immense tour où j’ai vu les feux d’artifice du Nouvel An, et qui était déjà un repère lors de ma balade du 6 janvier le long de la rive.

La Lotte Tower, à Séoul, est le plus haut gratte-ciel de Corée du Sud (555 m).
C’est le 6ᵉ gratte-ciel le plus haut du monde !

C’est la dernière grosse activité que je fais à Séoul, sous un grand ciel bleu.

J’y reste de 16 h à 20 h 15.  
On arrive au 117ᵉ étage, puis il y a encore cinq étages à monter en escalator. Je me balade, je flâne entre les niveaux, je prends des photos et je demande aux gens de m’en prendre aussi, évidemment.

Je contemple mon dernier coucher de soleil à Séoul, écouteurs dans les oreilles. Pendant une heure, ma playlist tourne en aléatoire, puis pendant deux heures, c’est ma playlist 2025 qui prend le relais.  
Quel plaisir de réécouter des musiques que j’écoutais à Rouen, posé sur mon canapé… sauf que là, je suis à 500 m de hauteur, en train de contempler Séoul.

À un moment, je vois qu’un restaurant se trouve au 123ᵉ étage. Je prends l’ascenseur, fais un pas sur la moquette bleu nuit, et là je découvre un lounge magnifique, avec une lumière tamisée et une immense baie vitrée donnant sur tout Séoul.  
Mais je fais un pas en arrière en me disant : « Je suis tout seul, je ne vais peut-être pas m’installer là… autant prendre un Coca au 121ᵉ étage. »

Je redescends, refais le parcours en me posant sur les petits sièges pour contempler la vue. Et puis je repense à ce lounge et je me dis : « Merde, il y a un endroit incroyablement beau et chill, et je ne vais pas y aller juste parce que je suis seul ? »

Au bout de 30 minutes, je décide d’y retourner et d’y prendre un cocktail. Je choisis un Mai Tai. Le prix est carrément raisonnable : pour donner un ordre d’idée, ce cocktail est à 12,50 € à Rouen et 19 € place du Trocadéro à Paris.  
Ici, je le paie 11 €, avec probablement la vue la plus incroyable qu’un restaurant puisse offrir en Corée.

J’y reste une bonne demi-heure, je lis quelques articles sur Substack, puis je redescends au 120ᵉ étage.  
Là, je mets certaines musiques en boucle. Je reste droit, immobile, face à certaines vues, et je repense au mois passé dans cette ville.

Je regarde la Namsan Tower, la montagne que j’ai escaladée lors de ma randonnée, les gratte-ciel de Gangnam, et surtout je refais mentalement le parcours de ma balade du 6 janvier.  
D’ici, je vois exactement d’où je suis parti et où je suis arrivé. Je distingue clairement le Banpo Bridge, ainsi que le pont avec la petite cascade éclairée de néons verts.

Je repense à cette balade pendant plusieurs minutes, extrêmement reconnaissant envers moi-même de l’avoir faite.

Il est 20 h. Ça fait déjà 4 heures que je suis ici, et à chaque fois que je me dis « Bon allez, je pars, je prends l’ascenseur », je reste encore cinq minutes de plus.  
Impossible de lâcher cette vue : la nuit, les lumières de la ville, les phares des voitures sur les grandes avenues, les appartements allumés… tant de vies différentes.

Enfin bref, qui dit partir de cette tour dit aussi dire au revoir à cette ville.  
Demain, pour mon dernier jour, je serai un peu excentré du centre-ville.

Salle à 22 h : séance bras.`,
  mood: 'Séoul Sky Lotte Tower + Cocktail à 500 m de hauteur :)'
}
,
      {
  id: 'j36',
  day: 36,
  title: 'Dernier jour à Séoul : 3ᵉ branche du National Museum of Modern and Contemporary Art',
  excerpt: `Dernier jour à Séoul ! Hyper content de mon activité d’hier à la Lotte Tower, je pars aujourd’hui découvrir la 3ᵉ branche du National Museum of Modern and Contemporary Art.

Ce musée est vraiment excentré du centre de Séoul. Pour y aller, il faut compter environ 30 minutes de métro, puis 30 minutes à pied. Il est perdu entre les montagnes de Gwanaksan, dans le parc Seoul Land. Avant d’arriver devant le bâtiment, on passe par l’entrée du parc Seoul Land, puis par un pont qui surplombe un grand lac (gelé aujourd’hui), et enfin devant un zoo.

L’histoire de la journée commence dans le métro. Nous sommes une dizaine à descendre à l’arrêt Seoul Land, puis chacun part de son côté. Je me dirige vers la sortie 2 et là, je tombe sur une immense allée vide, avec les montagnes en toile de fond et, tout au bout, l’entrée du parc.

Pendant ces 30 minutes de marche, je n’ai fait qu’imaginer le nombre de personnes qu’il doit y avoir ici l’été. Les parkings sont immenses, il y a plein de petits camions fermés — glaces, poulet, etc. — mais tout est à l’arrêt.

Je passe ensuite sur le pont au-dessus du lac gelé. Là encore, on dirait que le temps s’est figé. Les funiculaires fonctionnent, mais il n’y a absolument personne sur les sièges.

J’ai presque l’impression de visiter un parc abandonné, alors qu’en réalité il fait simplement 0 degré et que ce n’est clairement pas la bonne saison pour venir ici.

Enfin bref, je fais la visite et je dois dire que c’est de loin ma branche préférée du National Museum of Modern and Contemporary Art de Séoul.

Trois étages, six expositions différentes. J’y reste deux heures. On suit tout au long du parcours la transformation de l’art coréen en fonction des époques, des tendances et de l’évolution du monde.

Ça commence au XIXᵉ siècle, puis au XXᵉ, pour ensuite avancer vers les contextes historiques et la place des femmes dans l’art dans la seconde moitié du XXᵉ siècle, après la guerre.

Ce que je retiens surtout de ce musée, c’est l’odeur très singulière du lieu. Au deuxième étage, il y avait un parfum très fruité, presque envoûtant. Sûrement diffusé artificiellement, mais ça m’a complètement plongé dans les toiles.

Salle à 21h : Séance Pecs
Je réalise cette dernière séance à Séoul avec beaucoup d’émotion. Je vais voir le coach (également dirigeant de cette petite salle) pour lui annoncer que c’était mon dernier jour ici. Via le traducteur sur téléphone, je le remercie pour ses conseils et pour sa salle de sport.
Nous prenons une photo ensemble et nous nous souhaitons mutuellement une belle réussite pour la suite.`,
  mood: 'Dernier jour à Séoul : 3ᵉ branche du National Museum of Modern and Contemporary Art'
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

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
      title: '2 mois en Corée du Sud',
      subtitle: 'Mon voyage solo',
      description: 'Voyage du 4 décembre 2025 jusqu’au 10 février 2026',
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

      },
    {
  id: 't34',
  date: 'Jour 34 (1 683 pas)',
  title: 'Grosse lessive et travail sur les projets',
  description:
    'Retour du grand froid et journée très calme, consacrée au travail sur mes projets personnels.',
  bullets: [
    'Travail sur le projet jusqu’en fin d’après-midi',
    'Lessive et lecture au lavomatique',
    'Salle à 21h : séance épaules'
  ]
},
{
  id: 't35',
  date: 'Jour 35 (6 337 pas)',
  title: 'Séoul Sky – Lotte Tower et cocktail à 500 m',
  description:
    'Dernière grande activité à Séoul, sous un ciel parfaitement dégagé : montée au sommet de la Lotte Tower et long moment de contemplation.',
  bullets: [
    'Montée à la Lotte Tower (555 m)',
    'Coucher de soleil et vue à plus de 30 km',
    'Cocktail Mai Tai au lounge du 123e étage',
    'Derniers regards sur Séoul et la Han River',
    'Salle à 22h : séance bras'
  ],
  video: 'https://youtube.com/shorts/cO5EPU2NjFg?si=f5HjDbRIBQtcI1Vi'

},
{
  id: 't36',
  date: 'Jour 36 (13 050 pas)',
  title: 'Dernier jour à Séoul – MMCA Seoul Land',
  description:
    'Dernier jour à Séoul avec la visite de la 3e branche du National Museum of Modern and Contemporary Art, perdue entre montagnes et parc.',
  bullets: [
    'Trajet excentré vers Seoul Land',
    'Visite du MMCA (3 étages, 6 expositions)',
    'Découverte de l’évolution de l’art coréen',
    'Dernière séance à Séoul',
    'Salle à 21h : séance pecs'
  ],
  video: 'https://youtube.com/shorts/vcnY6vyRoBo?si=YglxH1-9ozCPGuMp'

},
{
  id: 't37',
  date: 'Jour 37 (10 440 pas)',
  title: 'Trajet Séoul → Busan et arrivée à Songjeong',
  description:
    'Journée de transport pour traverser le pays et rejoindre Busan.',
  bullets: [
    'Bus Séoul → Busan (4h de trajet)',
    'Petit stress à la station de bus',
    'Arrivée à Songjeong en soirée',
    'Installation et repos'
  ],
  video: 'https://youtube.com/shorts/elU_e4oLowA?si=PeZoQ_RIqs3drAIR'

},
{
  id: 't38',
  date: 'Jour 38 (16 140 pas)',
  title: 'Première journée à Busan',
  description:
    'Découverte de Busan et de son ambiance balnéaire, entre plage, temples et cafés.',
  bullets: [
    'Découverte du logement à Songjeong',
    'Balade le long de la plage',
    'Visite du temple Haedong Yonggung',
    'Coucher de soleil face à l’océan',
    'Pizza et bière en bord de mer'
  ],
  video: 'https://youtube.com/shorts/4z8-WLVtj80?si=C2ELbAvgQTtT3U3l'

},
{
  id: 't39',
  date: 'Jour 39 (22 789 pas)',
  title: 'Côte est de Busan et contrastes',
  description:
    'Longue balade le long de la côte est, entre ports traditionnels et complexes ultra luxueux.',
  bullets: [
    'Balade après Lotte Premium Outlet',
    'Découverte de la côte est de Busan',
    'Contrastes forts entre nature et urbanisme',
    'Pause café au God Shot',
    'Burger le soir'
  ],
  video: 'https://youtube.com/shorts/NhEkId9wI1o?si=a1DUSbXHuZxeRPoG'

},
{
  id: 't40',
  date: 'Jour 40 (30 507 pas)',
  title: 'Randonnée côtière Songjeong → Haeundae',
  description:
    'Grosse journée de marche le long de la côte, entre villages, plages et couchers de soleil.',
  bullets: [
    'Randonnée Songjeong – Haeundae (18 km A/R)',
    'Chemin en bois le long de la mer',
    'Coucher de soleil à Haeundae Beach',
    'Retour de nuit en musique',
    'Ramen et café pour terminer'
  ],
  video: 'https://youtube.com/shorts/U75ylRyVubE?si=6Oamfc92q-1vEaKh'

},
{
  id: 't41',
  date: 'Jour 41 (14 973 pas)',
  title: 'Journée chill et musée de la pêche',
  description:
    'Journée plus calme, entre musée et moments de détente face à l’océan.',
  bullets: [
    'Visite du National Fisheries Science Museum',
    'Balade et pauses face à la mer',
    'Coucher de soleil',
    'Chocolat chaud au Coralani'
  ],
  video: 'https://youtube.com/shorts/OKjukI64YZc?si=R999604XXKVBruDa'

},
{
  id: 't42',
  date: 'Jour 42 (18 939 pas)',
  title: 'Village de pêche de Daebyeon',
  description:
    'Découverte d’un village entièrement tourné vers la pêche, puis visite d’un musée scientifique.',
  bullets: [
    'Balade dans le port de Daebyeon',
    'Observation des pêcheurs et étals',
    'Vue sur le phare Coupe du monde 2002',
    'Visite du National Science Museum of Busan',
    'Dernier coucher de soleil à Songjeong'
  ],
  video: 'https://youtube.com/shorts/RVKOzcf2sks?si=YNyJETm_XCgq_JMd'

},
{
  id: 't43',
  date: 'Jour 43 (25 176 pas)',
  title: 'Dernière journée à Songjeong',
  description:
    'Derniers pas dans le quartier balnéaire, entre longues marches, plages et ambiance nocturne.',
  bullets: [
    'Marche jusqu’à Gwangalli Beach',
    'Visite de Marine City',
    'Coucher de soleil et feux d’artifice',
    'Street food coréenne sur la plage',
    'Balade nocturne'
  ],
  video: 'https://youtube.com/shorts/Dp2PG2kyOfI?si=9ndffaL-Jfz3qSkY'

},
{
  id: 't44',
  date: 'Jour 44 (8 773 pas)',
  title: 'Transition et bilan à Songjeong',
  description:
    'Changement de logement et bilan de la semaine passée près de l’océan.',
  bullets: [
    'Départ de Songjeong',
    'Installation dans un quartier étudiant',
    'Bilan de la semaine balnéaire',
    'Derniers regards sur l’océan'
  ]
},
{
  id: 't45',
  date: 'Jour 45 (13 684 pas)',
  title: 'Nouveau logement et mémoire de la guerre',
  description:
    'Logement à Busan proche université et découverte musée + cimetière.',
  bullets: [
    'Installation dans le nouveau logement',
    'Visite du Busan Museum',
    'Visite du UN Memorial Cemetery Korea',
    'Moment de recueillement',
    'Coucher de soleil à Gwangalli Beach'
  ],
  video: 'https://m.youtube.com/shorts/r2sjJt7WvXk'

},
{
  id: 't46',
  date: 'Jour 46 (11 363 pas)',
  title: 'Seokbulso Temple et café',
  description:
    'Randonnée en montagne pour voir le Seokbulso Temple',
  bullets: [
    'Le temple est à une altitude de 700m',
    'Smoothie en bas de la montagne'
  ],
  video: 'https://youtube.com/shorts/bhYQ6OkCRCs?si=f7oSzypbjPq9SqiA'

},
{
  id: 't47',
  date: 'Jour 47 (17 918 pas)',
  title: 'Marchés de Busan et Gamcheon Culture Village',
  description:
    'Exploration des marchés populaires de Busan avant une montée improvisée vers Gamcheon Culture Village',
  bullets: [
    'BIFF Square : shopping à bas prix + chaussure à 7€60',
    'écouverte de Gukje Market',
    'Découverte de Jagalchi Market, immense marché aux poissons',
    'Montée à pied jusqu’à Gamcheon Culture Village',
    'Café Coffee IT avec vue panoramique sur le village + coucher de soleil',
    'Photo avec la statuette du Petit Prince'
  ],
    video: 'https://youtube.com/shorts/otIbCOPT8-M?si=w6r9wxgJMhkaT44-'
},
{
  id: 't48',
  date: 'Jour 48 (10 606 pas)',
  title: 'Musée fermé, cinéma et parenthèse culturelle',
  description:
    'Journée improvisée autour de l’art, de l’architecture et du cinéma.',
  bullets: [
    'Busan Museum of Art fermé pour travaux',
    'Exploration du BEXCO, immense mais entièrement vide',
    'Shinsegae Department Store et Centum City',
    'Découverte du Busan Cinema Center',
    'Écoute de vinyles (Bodyguard – Alan Silvestri)',
    'Lecture autour du film Oppenheimer',
    'Burger chez Shake Shack pour conclure la journée'
  ],
      video: 'https://youtube.com/shorts/8wLFeGIYUnU?si=umATVCd5DUU4AL9Z'

},
{
  id: 't49',
  date: 'Jour 49 (5 973 pas)',
  title: 'Busan Modern History Museum et parc',
  description:
    'Une journée entre musée et balade',
  bullets: [
    'Visite du Busan Modern History Museum, installé dans une ancienne banque',
    'Exposition contemporaine et exposition permanente sur l’histoire de Busan',
    'Balade au Yongdusan Park avec vue sur les quartiers alentours',
    'Lessives et lecture pour finir la journée'
  ],
  video: 'https://youtube.com/shorts/LSUbpTvtZp4?si=RopLp8o6Jxgty0Ey'

},
{
  id: 't50',
  date: 'Jour 50 (22 827 pas)',
  title: 'Museum of Contemporary Art de l’île d’Eulsukdo et balade complète de l’île',
  description:
    'Découverte du MoCA (Museum of Contemporary Art) de Busan sur l’île d’Eulsukdo, entre exposition dédiée à Jean-Luc Godard et immersion totale dans un sanctuaire naturel, notamment au moment du coucher de soleil.',
  bullets: [
    'Exposition cinéma au MoCA autour de Jean-Luc Godard',
    'Randonnée complète sur l’île d’Eulsukdo',
    'Parc au nord et sanctuaire naturel protégé au sud',
    'Marche au crépuscule, au milieu des oiseaux : MAGNIFIQUE'
  ],
  video: 'https://youtube.com/shorts/r476rf0yYdo?si=sEkRNz94ai2AzgP2'

},
{
  id: 't51',
  date: 'Jour 51 (5 881 pas)',
  title: 'Seomyeon, centres commerciaux et salles d’arcade',
  description:
    'Journée tranquille entre entretien de l’appartement et découverte du quartier animé de Seomyeon, connu pour son immense centre commercial souterrain, ses néons et ses nombreuses salles d’arcade.',
  bullets: [
    'Lessive et ménage à l’appartement',
    'Balade dans le quartier animé de Seomyeon',
    'Exploration de l’Underground Mall',
    'Centre commercial de 16 étages avec cinéma, parc à thème et e-sport',
    'Jeux dans une salle d’arcade'
  ]
},
{
  id: 't52',
  date: 'Jour 52 (19 909 pas)',
  title: 'Beomeosa Temple, ascension du Geumjeongsan et coucher de soleil au sommet',
  description:
    'Découverte du temple bouddhiste de Beomeosa, suivie d’une randonnée jusqu’au sommet du Geumjeongsan. Une longue attente dans le froid récompensée par un coucher de soleil spectaculaire à 360 degrés.',
  bullets: [
    'Visite du temple de Beomeosa',
    'Randonnée jusqu’au sommet du Geumjeongsan (801,5 m)',
    'Attente du coucher de soleil dans le froid',
    'Descente nocturne en forêt à la lampe torche'
  ],
  video: 'https://youtube.com/shorts/uXau_l6Z-8w?si=4oMiTZyrt-rdDL3T'

},
{
  id: 't53',
  date: 'Jour 53 (999 pas)',
  title: 'Journée de repos sous la grisaille',
  description:
    'Journée calme et reposante, un temps gris et quelques heures passées à regarder des documentaires et des vidéos Youtube',
},
{
  id: 't54',
  date: 'Jour 54 (16 338 pas)',
  title: 'Samgwangsa, book-street, chinatown et librairie dans le Democracy Park',
  description:
    'Visite du temple Samgwangsa, exploration de Bosu-dong Book Street, visite de chinatown et pose lecture dans une librairie',
  bullets: [
    'Visite du temple Samgwangsa',
    'Descente à pied vers le Chinatown de Busan',
    'Découverte de Bosu-dong Book Street et de ses librairies indépendantes',
    'Pause lecture à la Busan Public Central Library',
    'Balade nocturne dans Chinatown éclairée par les lanternes'
  ],
  video: 'https://youtube.com/shorts/DK_S7HmQhhw?si=bJpcaQCHQ4ENdKyQ'

},
{
  id: 't55',
  date: 'Jour 55 (15 853 pas)',
  title: 'Igidae Coastal Walk et Oryukdo Skywalk',
  description:
    'Grande randonnée côtière entre falaises, escaliers et chemins étroits le long d’Igidae Coastal Walk, conclue par la découverte de l’Oryukdo Skywalk et un moment calme au bord de l’eau face au coucher de soleil.',
  bullets: [
    'Randonnée de 2h30 sur l’Igidae Coastal Walk',
    'Falaises, escaliers et points de vue sur la mer',
    'Découverte de l’Oryukdo Skywalk et des îlots Oryukdo',
    'Pause au bord de l’eau avec un ice tea au coucher du soleil'
  ],
  video: 'https://youtube.com/shorts/p88krFAKmnM?si=xf2PxLk7EZcWnLLG'
},
{
  id: 't56',
  date: 'Jour 56 (11 037 pas)',
  title: 'Wangnyeong Mountain Observatory au coucher du soleil',
  description:
    'Montée facile jusqu’au Wangnyeong Mountain Observatory pour observer le coucher de soleil et les lumières de Busan s’allumer progressivement, malgré un froid marqué et une vue moins impressionnante que celle du Geumjeongsan.',
  bullets: [
    'Trajet en bus puis 30 minutes de marche jusqu’au sommet',
    'Point de vue populaire sur les réseaux sociaux',
    'Coucher de soleil depuis les bancs-balançoires',
    'Vue nocturne sur la ville et les gratte-ciel côté est',
  ],
  video: 'https://youtube.com/shorts/g4oEs3XvZBw?si=qNfM8m0zm-Zcj6jc'

},
{
  id: 't57',
  date: 'Jour 57 (737 pas)',
  title: 'Lecture, documentaire et repos',
  description:
    'Pas grand chose ce jour, je mélange lecture et visonnage de documentaire',
},
{
  id: 't58',
  date: 'Jour 58 (6 863 pas)',
  title: 'Musée maritime national de Corée et librairie maritime',
  description:
    'Découverte du Korea National Maritime Museum sur l’île de Yeongdo, expositions sur l’histoire maritime, la pêche et la navigation, et longue pause lecture dans la librairie du musée face au port.',
  bullets: [
    'Visite du Korea National Maritime Museum sur l’île de Yeongdo',
    'Expositions sur les coquillages, la pêche et l’exploration maritime',
    'Histoire de la navigation, des cartes et des grandes routes commerciales',
    'Lecture dans la librairie maritime du musée pendant 2h',
  ],
    video: 'https://youtube.com/shorts/LIXc781mRcY?si=wHPPVAL8G7OWHXv5'

},
{
  id: 't59',
  date: 'Jour 59 (11 861 pas)',
  title: 'Dadaepo Beach',
  description:
    'Découverte de Dadaepo Beach, l’une des plages les plus réputées de Busan pour le coucher de soleil, avec une longue balade entre parc, observatoire et marche au bord de l’eau face à un panorama totalement dégagé.',
  bullets: [
    'Balade dans Dadaepo Park',
    'Plage orientée plein ouest, idéale pour le coucher de soleil',
    'Petite crique au bord de l’eau',
    'Marche le long de la plage directement au bord de l’eau',
  ],
  video: 'https://youtube.com/shorts/aRpM_LdoPAo?si=LzhrnZ4zwDIwb3Gs'

},
{
  id: 't60',
  date: 'Jour 60 (10 113 pas)',
  title: "Promenade le long d’une rivière",
  description:
    'Journée calme lecture,écriture et une longue balade de 2 heures le long d’une rivière, sur une promenade parfaitement aménagée qui suit le tracé de la ligne 1 du métro.',
  video: 'https://youtube.com/shorts/_LReNiZIsUc?si=Opx957e-UboFKJSU'
},
{
  id: 't61',
  date: 'Jour 61 (13 888 pas)',
  title: 'Falaises de Taejongdae et rencontres',
  description:
    'Randonnée côtière sur l’île de Yeongdo, au cœur du parc naturel de Taejongdae, entre forêt, falaises, phare et rencontres.',
  bullets: [
    'Exploration du parc naturel de Taejongdae sur Yeongdo Island',
    'Boucle de randonnée entre forêt et falaises',
    'Moment avec Katsu près du phare',
    'Ascension du phare de Taejongdae',
    'Taejongdae Observation Deck',
    'Coucher de soleil depuis les rochers'
  ],
  video: 'https://youtube.com/shorts/7Qo3slN4FQQ?si=sJ9Y9YXE59eVOiwB'

},
{
  id: 't62',
  date: 'Jour 62 (14 230 pas)',
  title: 'Songdo Beach, Amnam Park et la beauté de l’imprévu',
  description:
    'Découverte de Songdo Beach et de la Songdo Cloud Walk, avant un changement de plan total : une randonnée improvisée dans Amnam Park. Une marche de 2h30 le long des falaises, entre passages raides, cordes de sécurité (peu confiante) et surtout un banc avec un point de vue magnifique.',
  bullets: [
    'Songdo Beach et Cloud Walk',
    'Randonnée côtière improvisée à Amnam Park',
    'Un banc avec une vue incroyable'
  ],
  video: 'https://youtube.com/shorts/4VSWVpREsgQ?si=iud7zkMXKAKoNO3G'

},
{
  id: 't63',
  date: 'Jour 63 (1 179 pas)',
  title: 'Journée calme et préparation du départ',
  description:
    'Aujourd’hui lessive et préparation de mon sac pour mon départ d’ici quelques jours.Chill toute la journée pas grand chose aujourd’hui ',
},
{
  id: 't64',
  date: 'Jour 64 (12 327 pas)',
  title: 'Busan Citizens Park et Huinnyeoul Culture Village',
  description:
    'Découverte de Busan Citizens Park, ancien site militaire reconverti en parc urbain central, avec visite de son musée retraçant l’histoire du lieu. L’après-midi se poursuit sur l’île de Yeongdo, au Huinnyeoul Culture Village : un village côtier coloré, ponctué de cafés, offrant une vue imprenable sur la mer. Lecture, chocolat chaud et coucher de soleil pour conclure la journée.',
  bullets: [
    'Busan Citizens Park et son musée',
    'Huinnyeoul Culture Village sur l’île de Yeongdo'
  ],
  video: 'https://youtube.com/shorts/Byqbjw26Krg?si=Rj1Id8yBYO4ghpy7'

},
{
  id: 't65',
  date: 'Jour 65 (12 940 pas)',
  title: 'Retour à Eulsukdo Island et bar vintage en soirée',
  description:
    'Retour à Eulsukdo Island, le sanctuaire des oiseaux. Une visite plus lente et plus posée que la précédente, consacrée entièrement au sanctuaire : observatoires, musée, longues minutes passées à observer les oiseaux et à contempler l’un des plus beaux couchers de soleil du séjour. En fin de journée, arrêt dans un bar vintage du quartier, rempli de vinyles et de musiques des années 70 à 2000. Discussion avec le patron autour du cinéma, des bandes originales et de la culture française.',
  bullets: [
    'Eulsukdo Island et ses observatoires',
    'Bar vintage et discussion'
  ],
  video: 'https://youtu.be/u3fJNzdbtyo?si=SDhaSshKtwDzykCU'

},
{
  id: 't66',
  date: 'Jour 66 (35 898 pas)',
  title: 'Record de pas et très grande balade allant de mon logement à Gwangalli Beach',
  description:
    'Avant-dernier jour à Busan et record absolu de marche pour le voyage : 35 898 pas, soit plus de 22 km à pied. Parti sans réel objectif, simplement avec l’envie de marcher sur la promenade, la balade se transforme peu à peu en une longue traversée de la ville. Après plusieurs kilomètres le long de la rivière, j’arrive finalement aux abords de Gwangalli Beach à la tombée du jour. Juste avant la plage, je découvre un night market installé dans un grand food hall face à la mer. Je m’y arrête près de trois quarts d’heure, le temps de manger quelques slices de pizza.. Le retour se fait ensuite entièrement à pied, au milieu des néons, des restaurants et de la vie nocturne.',
  bullets: [
    'Promenades et traversée de la ville',
    'Food hall Market Night : Millac the market',
    'Gwangalli Beach de nuit'
  ],
  video: 'https://youtube.com/shorts/_HqgM17-nFI?si=KjHDtAnG6ObcK4zK'
},
{
  id: 't67',
  date: 'Jour 67 (11 833 pas)',
  title: 'Busan X The Sky et dernier regard sur la ville',
  description:
    'Dernier jour à Busan. Pour clôturer ce voyage en Corée du Sud, je prends de la hauteur à Haeundae Beach, au sommet du plus grand gratte-ciel de la ville. Plus de trois heures passées à observer la ville, le coucher de soleil et à retracer mentalement toutes mes randonnées, mes balades et mes souvenirs. Une vue pour mesurer à quel point j’ai bien profité de Busan.',
  bullets: [
    'Haeundae Beach et promenade finale',
    'Busan X The Sky et coucher de soleil'
  ],
  video: 'https://youtube.com/shorts/YI-U97NOXI4?si=SNUZ9p2EslJn2p7s'

},
{
  id: 't68',
  date: 'Jour 68 (8 554 pas)',
  title: 'De Busan à Osaka, journée de transition',
  description:
    'Dernier jour en Corée du Sud et transition vers le Japon. Une journée étrange, presque irréelle, où tout s’enchaîne très vite : rendre l’appartement à Busan, rejoindre l’aéroport de Gimhae, prendre l’avion, puis le train jusqu’à Osaka. En quelques heures, changement de pays, de culture et de repères. Le matin encore à Busan, le soir dans un ramen japonais. Une sensation de flottement, mais aussi un vrai plaisir de vivre ce genre de bascule.',
  bullets: [
    'Busan → Osaka',
    'Arrivée et installation dans le nouvel appartement',
    'Premier repas japonais : ramens traditionnels'
  ],
  video: 'https://youtube.com/shorts/AlIztWES-Uo?si=HIshMP4yheghdwsu'

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
},
{
  id: 'm72',
  lat: 35.184329,
  lng: 129.219151,
  title: 'Point de vue Osiria',
  category: 'Activité',
  description: 'Point de vue accessible via une randonnée dans les dunes et les falaises, premier coucher de soleil de la première journée.',
  emoji: '🌅'
},
{
  id: 'm73',
  lat: 35.206060,
  lng: 129.229049,
  title: 'Temple bouddhiste Orangdae',
  category: 'Monument',
  description: 'Temple bouddhiste perché sur un rocher, accessible en marchant sur les rochers au plus près de l’eau. Charme dénaturé par des hotels ULTRA luxueux, avec piscine à debordmement et lounge absurde',
  emoji: '⛩️'
},
{
  id: 'm74',
  lat: 35.185343,
  lng: 129.222684,
  title: 'Colis urgent',
  category: 'Anecdote',
  description: 'À quelques pas du temple, je fais demi-tour,, recherche d’un coin discret hors du chemin tracé et dépôt du colis.',
  emoji: '💩'
},
{
  id: 'm75',
  lat: 35.189164,
  lng: 129.206643,
  title: 'Double Up Burger',
  category: 'Cuisine',
  description: 'Repas du lundi 12 janvier au soir. Plus de batterie, seul au 2ᵉ étage, ambiance musique californienne.',
  emoji: '🍔'
},
{
  id: 'm76',
  lat: 35.192130,
  lng: 129.212911,
  title: 'Lotte Premium Outlets – DongBusan',
  category: 'Shopping',
  description: 'Balade dans ce vaste centre commercial premium regroupant de nombreuses marques de luxe.',
  emoji: '🛍️'
},
{
  id: 'm77',
  lat: 35.184310,
  lng: 129.211815,
  title: 'Village de pêcheur',
  category: 'Balade',
  description: 'Village de pêcheur au charme authentique,entouré de cafés concepts et d’hôtels bobo.',
  emoji: '🎣'
},
{
  id: 'm78',
  lat: 35.180842,
  lng: 129.202906,
  title: 'Cafe Lip',
  category: 'Cuisine',
  description: 'Bière et pizza avec une vue incroyable sur la plage, canapés confortables et décoration en marbre.',
  emoji: '🍕'
},
{
  id: 'm79',
  lat: 35.179126,
  lng: 129.198230,
  title: 'Café Boss & Snack',
  category: 'Cuisine',
  description: 'Repas du mardi 13 janvier : des ramens, simple et réconfortant.',
  emoji: '🍜'
},
{
  id: 'm80',
  lat: 35.164042,
  lng: 129.196717,
  title: 'Cheongsapo Daritdol Skywalk',
  category: 'Activité',
  description: 'Premier pont en arc de cercle avec sol en verre. Visite de jour et de nuit, aller-retour dans la journée du mardi 13 janvier.',
  emoji: '🌉'
},
{
  id: 'm81',
  lat: 35.155817,
  lng: 129.182684,
  title: 'Haewol Observatory',
  category: 'Activité',
  description: 'Deuxième pont en arc de cercle avec sol en verre. Visite de jour et de nuit, aller-retour le mardi 13 janvier.',
  emoji: '🌉'
},
{
  id: 'm82',
  lat: 35.158767,
  lng: 129.192034,
  title: 'Cheongsapo Twins Lighthouse',
  category: 'Activité',
  description: 'Balade sur la digue du phare blanc avec vue dégagée sur le phare jumeau rouge.',
  emoji: '🗼'
},
{
  id: 'm83',
  lat: 35.158514,
  lng: 129.160516,
  title: 'Haeundae Beach',
  category: 'Balade',
  description: 'Plage emblématique et la plus connue de Corée. Encore plus belle au coucher de soleil, lorsque les teintes bleues, violettes et même roses se reflètent sur les buildings.',
  emoji: '🏖️'
},
{
  id: 'm84',
  lat: 35.153805,
  lng: 129.152198,
  title: 'Dongbaek Park',
  category: 'Balade',
  description: 'Parc côtier avec un chemin en bois longeant la côte, ponctué de points de vue et de monuments.',
  emoji: '🌲'
},
{
  id: 'm85',
  lat: 35.154508,
  lng: 129.150993,
  title: 'Point de vue du coucher de soleil – Dongbaek Park',
  category: 'Balade',
  description: 'Magnifique point de vue spécialement aménagé pour contempler le coucher de soleil sur la mer et la skyline.',
  emoji: '🌅'
},
{
  id: 'm86',
  lat: 35.180984,
  lng: 129.204757,
  title: 'EDIYA Coffee Songjeong',
  category: 'Cuisine',
  description: 'Pause café avec un cookie et un lait à la fraise.',
  emoji: '🍪'
},
{
  id: 'm87',
  lat: 35.183426,
  lng: 129.205073,
  title: 'CU (Convenience store)',
  category: 'Cuisine',
  description: 'Petit déjeuner chaque matin de la semaine du Lundi 11 au Vendredi 16 Janvier,posé devant la fenêtre avant de partir en balade pour la journée.',
  emoji: '🛒'
},
{
  id: 'm88',
  lat: 35.193434,
  lng: 129.224313,
  title: 'National Fisheries Science Museum',
  category: 'Activité',
  description: 'Visite de ce musée consacré aux techniques de la pêche et au monde marin des côtes coréennes.',
  emoji: '🐟'
},
{
  id: 'm89',
  lat: 35.185656,
  lng: 129.213507,
  title: 'Crique de pêche calme',
  category: 'Activité',
  description: 'Endroit calme avec quelques chaises en osier. Calme avec le bruit du ressac.',
  emoji: '🪑'
},
{
  id: 'm90',
  lat: 35.182415,
  lng: 129.208878,
  title: 'Coralani café',
  category: 'Cuisine',
  description: 'Café rooftop 4 étages vue sur mer',
  emoji: '☕'
},
{
  id: 'm91',
  lat: 35.215503,
  lng: 129.233434,
  title: 'World Cup Lighthouse',
  category: 'Balade',
  description: 'Balade sur la digue animée par de nombreux pêcheurs, avec une vue impressionnante sur le phare depuis le bas.',
  emoji: '🗼'
},
{
  id: 'm92',
  lat: 35.224612,
  lng: 129.228643,
  title: 'Daebyeon',
  category: 'Balade',
  description: 'Véritable village de pêcheurs avec bateaux, étals de poissons et odeurs marines omniprésentes.',
  emoji: '🎣'
},
{
  id: 'm93',
  lat: 35.204695,
  lng: 129.212687,
  title: 'Busan National Science Museum',
  category: 'Activité',
  description: 'Musée national des sciences, plutôt orienté pour les enfants mais agréable et intéressant à visiter.',
  emoji: '🧪'
},
{
  id: 'm94',
  lat: 35.180919,
  lng: 129.204384,
  title: 'Cafe Moon Toast',
  category: 'Cuisine',
  description: 'Toast coréen à emporter, dégusté sur la plage pour la dernière soirée à Busan.',
  emoji: '🥪'
},
{
  id: 'm95',
  lat: 35.168486,
  lng: 129.159081,
  title: 'Haeunjeongsa',
  category: 'Balade',
  description: 'Temple paisible niché au milieu des buildings, offrant un contraste saisissant avec l’agitation urbaine.',
  emoji: '⛩️'
},
{
  id: 'm96',
  lat: 35.153180,
  lng: 129.118663,
  title: 'Gwangalli Beach',
  category: 'Balade',
  description: 'Deuxième plage la plus connue de Corée du Sud, à l’ambiance différente de Haeundae, avec une vue iconique sur le pont Gwangan.',
  emoji: '🏖️'
},
{
  id: 'm97',
  lat: 35.156683,
  lng: 129.145100,
  title: 'Marine City',
  category: 'Balade',
  description: 'Ville construite sur l’eau, dominée par trois impressionnants buildings de verre aux lignes futuristes.',
  emoji: '🏙️'
},
{
  id: 'm98',
  lat: 35.229073,
  lng: 129.087212,
  title: 'Deuxième logement à Busan',
  category: 'Logement',
  description: 'Deuxième logement à Busan pour trois semaines, situé dans un quartier étudiant à deux pas du métro, entouré de très nombreux cafés et restaurants.',
  emoji: '🏠'
},
{
  id: 'm99',
  lat: 35.129526,
  lng: 129.094149,
  title: 'Busan Museum',
  category: 'Activité',
  description: 'Musée retraçant l’évolution de la ville de Busan à travers les siècles.',
  emoji: '🏛️'
},
{
  id: 'm100',
  lat: 35.127853,
  lng: 129.097414,
  title: 'UN Memorial Cemetery in Korea',
  category: 'Balade',
  description: 'Cimetière rassemblant les troupes militaires mortes au combat lors de la guerre de Corée (1950–1953).',
  emoji: '🕊️'
},
{
  id: 'm101',
  lat: 35.126350,
  lng: 129.100290,
  title: 'Peace Park',
  category: 'Balade',
  description: 'Parc agréable parcouru de petits ruisseaux qui accompagnent la promenade tout au long du chemin.',
  emoji: '🌿'
},
{
  id: 'm102',
  lat: 35.221516,
  lng: 129.048847,
  title: 'Seokbulsa Temple',
  category: 'Balade',
  description: 'Temple isolé en pleine montagne, perché à environ 700 mètres d’altitude, offrant une atmosphère hors du temps.',
  emoji: '⛩️'
},
{
  id: 'm103',
  lat: 35.215352,
  lng: 129.049967,
  title: 'Café Smut',
  category: 'Cuisine',
  description: 'Café avec vue sur le bas de la montagne, décoration avec des appareils photo argentiques.',
  emoji: '☕'
},
{
  id: 'm104',
  lat: 35.098251,
  lng: 129.029207,
  title: 'BIFF Square',
  category: 'Balade',
  description: 'Quartier animé mêlant boutiques et marché, là où j’ai acheté mes chaussures.',
  emoji: '🛍️'
},
{
  id: 'm105',
  lat: 35.101364,
  lng: 129.028198,
  title: 'Gukje Market',
  category: 'Balade',
  description: 'Grand marché populaire où tout est bon marché et où l’on trouve absolument de tout.',
  emoji: '🏪'
},
{
  id: 'm106',
  lat: 35.096640,
  lng: 129.030795,
  title: 'Jagalchi Market',
  category: 'Balade',
  description: 'Plus grand marché aux poissons de Corée du Sud, emblématique de la ville de Busan.',
  emoji: '🐠'
},
{
  id: 'm107',
  lat: 35.097396,
  lng: 129.010594,
  title: 'Gamcheon Culture Village',
  category: 'Balade',
  description: 'Village artistique inspiré du Petit Prince, avec dessins, fresques et citations colorées sur les murs.',
  emoji: '🎨'
},
{
  id: 'm108',
  lat: 35.097752,
  lng: 129.008539,
  title: 'Little Prince and Desert Fox Statue',
  category: 'Balade',
  description: 'Statue iconique de Busan représentant le Petit Prince et le renard, symbole du Gamcheon Culture Village.',
  emoji: '🦊'
},
{
  id: 'm109',
  lat: 35.096324,
  lng: 129.010014,
  title: '커피잇집 (IT Cafe)',
  category: 'Cuisine',
  description: 'Café offrant un panorama magnifique sur le Gamcheon Culture Village.',
  emoji: '☕'
},
{
  id: 'm110',
  lat: 35.166744,
  lng: 129.137073,
  title: 'Busan Museum of Art',
  category: 'Activité',
  description: 'Musée d’art de Busan, malheureusement fermé pendant la période de mon voyage.',
  emoji: '🖼️'
},
{
  id: 'm111',
  lat: 35.168985,
  lng: 129.136038,
  title: 'BEXCO Exhibition Center 1',
  category: 'Balade',
  description: 'Parc des expositions, vide lors de ma visite, aucune exposition prévue durant le mois de janvier.',
  emoji: '🏢'
},
{
  id: 'm112',
  lat: 35.165816,
  lng: 129.135060,
  title: 'BEXCO Exhibition Center 2',
  category: 'Balade',
  description: 'Deuxième parc des expositions BEXCO, également vide pendant ma visite, sans événement programmé en janvier.',
  emoji: '🏢'
},
{
  id: 'm113',
  lat: 35.168926,
  lng: 129.129633,
  title: 'Shinsegae Department Store',
  category: 'Shopping',
  description: 'Grand centre commercial sur plusieurs étages',
  emoji: '🛍️'
},
{
  id: 'm114',
  lat: 35.169908,
  lng: 129.128349,
  title: 'Shinsegae Centum City',
  category: 'Shopping',
  description: 'Immense centre commercial réparti sur plusieurs étages',
  emoji: '🛍️'
},
{
  id: 'm115',
  lat: 35.171187,
  lng: 129.127193,
  title: 'Busan Cinema Center',
  category: 'Activité',
  description: 'Lieu incontournable du cinéma coréen, comprenant un cinéma en plein air, une librairie et plusieurs salles de projection.',
  emoji: '🎬'
},
{
  id: 'm116',
  lat: 35.169818,
  lng: 129.128723,
  title: 'Shake Shack Centum',
  category: 'Cuisine',
  description: 'Chaîne de burgers coréenne au quartier Centum.',
  emoji: '🍔'
},
{
  id: 'm117',
  lat: 35.102681,
  lng: 129.031232,
  title: 'Busan Modern and Contemporary History Museum Annex',
  category: 'Activité',
  description: 'Annexe du musée qui s’avère être principalement une bibliothèque et un centre d’archives littéraires.',
  emoji: '📚'
},
{
  id: 'm118',
  lat: 35.102632,
  lng: 129.032168,
  title: 'Busan Modern and Contemporary History Museum',
  category: 'Activité',
  description: 'Musée moderne et historique consacré à l’évolution de la ville, avec une exposition dédiée au port de Yeongdo.',
  emoji: '🏛️'
},
{
  id: 'm119',
  lat: 35.100655,
  lng: 129.032622,
  title: 'Yongdusan Park',
  category: 'Balade',
  description: 'Petit parc agréable et calme, idéal pour une pause au cœur de la ville.',
  emoji: '🌳'
},
{
  id: 'm120',
  lat: 35.227796,
  lng: 129.087477,
  title: 'CU (Convenience Store)',
  category: 'Cuisine',
  description: 'Convenience store situé à environ trois minutes de chez moi.',
  emoji: '🛒'
},
{
  id: 'm121',
  lat: 35.231199,
  lng: 129.086229,
  title: 'CU (Convenience Store)',
  category: 'Cuisine',
  description: 'Convenience store situé à environ cinq minutes de chez moi.',
  emoji: '🛒'
},
{
  id: 'm122',
  lat: 35.229774,
  lng: 129.089356,
  title: "Station de métro – Pusan Nat'l Univ. Stn.",
  category: 'Transport',
  description: 'Station de métro empruntée quotidiennement pour rejoindre le centre-ville, à environ cinq minutes à pied.',
  emoji: '🚇'
},
{
  id: 'm123',
  lat: 35.109286,
  lng: 128.942752,
  title: 'Museum of Contemporary Art',
  category: 'Activité',
  description: 'Musée d’art contemporain situé sur l’île d’Eulsukdo.',
  emoji: '🖼️'
},
{
  id: 'm124',
  lat: 35.119902,
  lng: 128.951560,
  title: "Place au nord de l’île d’Eulsukdo",
  category: 'Balade',
  description: 'Petite place située à l’extrême nord de l’île, équipée de quelques bancs et tables de pique-nique.',
  emoji: '🪑'
},
{
  id: 'm125',
  lat: 35.088264,
  lng: 128.941299,
  title: 'Observatoire d’oiseaux migrateurs',
  category: 'Activité',
  description: 'Observatoire situé à l’extrême sud de l’île, offrant une vue magnifique au coucher du soleil.',
  emoji: '🦅'
},
{
  id: 'm126',
  lat: 35.230692,
  lng: 129.086637,
  title: 'Ssada Gimbap',
  category: 'Cuisine',
  description: 'Restaurant de gimbap ouvert 24h/24, idéal pour manger à toute heure.',
  emoji: '🍙'
},
{
  id: 'm127',
  lat: 35.156306,
  lng: 129.059158,
  title: 'Seomyeon Mall Underground',
  category: 'Shopping',
  description: 'Centre commercial souterrain situé au cœur du quartier animé de Seomyeon.',
  emoji: '🛍️'
},
{
  id: 'm128',
  lat: 35.153016,
  lng: 129.059653,
  title: 'Samjung Tower',
  category: 'Shopping',
  description: 'Énorme centre commercial de seize étages regroupant boutiques, parc de loisirs, restaurants et cinéma.',
  emoji: '🛍️'
},
{
  id: 'm129',
  lat: 35.155161,
  lng: 129.060374,
  title: 'Sambo Game Land',
  category: 'Activité',
  description: 'Salle d’arcade du quartier Seomyeon',
  emoji: '🕹️'
},
{
  id: 'm130',
  lat: 35.283997,
  lng: 129.068764,
  title: 'Beomeosa Temple',
  category: 'Activité',
  description: 'Temple bouddhiste niché au cœur de la montagne Geumjeongsan.',
  emoji: '⛩️'
},
{
  id: 'm131',
  lat: 35.283055,
  lng: 129.055475,
  title: 'Geumjeongsan',
  category: 'Activité',
  description: 'Plus grande montagne de Busan culminant à 801,5 mètres, offrant un point de vue absolument incroyable.',
  emoji: '⛰️'
},
{
  id: 'm132',
  lat: 35.228715,
  lng: 129.087722,
  title: 'Soso Sarada',
  category: 'Cuisine',
  description: 'K-Salad Bread : sandwichs coréens',
  emoji: '🥪'
},
{
  id: 'm133',
  lat: 35.114025,
  lng: 129.037474,
  title: 'Busan Chinatown',
  category: 'Activité',
  description: 'Quartier Chinatown de Busan, modeste en taille, concentré sur seulement quelques rues.',
  emoji: '🏮'
},
{
  id: 'm134',
  lat: 35.175299,
  lng: 129.043617,
  title: 'Samgwangsa Temple',
  category: 'Activité',
  description: 'Temple très calme situé au pied de la montagne Baegyangsan, propice à la méditation.',
  emoji: '⛩️'
},
{
  id: 'm135',
  lat: 35.103217,
  lng: 129.027371,
  title: 'Bosu Book Street',
  category: 'Activité',
  description: 'Rue dédiée aux librairies indépendantes, où les livres sont empilés les uns sur les autres à l’intérieur des boutiques.',
  emoji: '📚'
},
{
  id: 'm136',
  lat: 35.110138,
  lng: 129.028067,
  title: 'Democracy Park',
  category: 'Activité',
  description: 'Parc situé dans les hauteurs, offrant une belle vue sur le port de Busan.',
  emoji: '🌳'
},
{
  id: 'm137',
  lat: 35.110194,
  lng: 129.027276,
  title: 'Busan Public Central Library',
  category: 'Activité',
  description: 'Bibliothèque publique ouverte à tous, proposant uniquement des livres en coréen, mais agréable pour lire ou travailler au calme.',
  emoji: '📖'
},
{
  id: 'm138',
  lat: 35.132279,
  lng: 129.120601,
  title: 'Début de la randonnée Igidae Coastal Walk',
  category: 'Balade',
  description: 'Point de départ de la randonnée Igidae Coastal Walk, commencée dans ce sens.',
  emoji: '🥾'
},
{
  id: 'm139',
  lat: 35.102567,
  lng: 129.123018,
  title: 'Fin de la randonnée Igidae Coastal Walk',
  category: 'Balade',
  description: 'Point d’arrivée de la randonnée Igidae Coastal Walk, terminée dans ce sens.',
  emoji: '🥾'
},
{
  id: 'm140',
  lat: 35.100685,
  lng: 129.124398,
  title: 'Oryukdo Skywalk',
  category: 'Activité',
  description: 'Passerelle au sol en verre offrant une vue impressionnante sur la mer et l’île d’Oryukdo.',
  emoji: '🌉'
},
{
  id: 'm141',
  lat: 35.099314,
  lng: 129.122915,
  title: 'Point de vue près de l’Oryukdo Skywalk',
  category: 'Balade',
  description: 'Point de vue au plus près de l’eau, parfait pour attendre le coucher du soleil.',
  emoji: '🌅'
},
{
  id: 'm142',
  lat: 35.101458,
  lng: 129.123226,
  title: 'Café Haeparang',
  category: 'Cuisine',
  description: 'Café très agréable avec une belle vue.',
  emoji: '☕'
},
{
  id: 'm143',
  lat: 35.126233,
  lng: 129.114972,
  title: 'Nambu Environmental Park',
  category: 'Balade',
  description: 'Parc de quartier situé juste au pied des immeubles.',
  emoji: '🌳'
},
{
  id: 'm144',
  lat: 35.157252,
  lng: 129.081681,
  title: 'Hwangnyeongsan Observatory (vue sur l’ouest)',
  category: 'Balade',
  description: 'Point de vue orienté vers l’ouest, offrant un superbe coucher de soleil derrière les montagnes.',
  emoji: '🌄'
},
{
  id: 'm145',
  lat: 35.157889,
  lng: 129.082774,
  title: 'Hwangnyeong Observatory (vue sur l’est)',
  category: 'Balade',
  description: 'Point de vue orienté vers l’est, avec les gratte-ciel de Busan et la mer en arrière-plan.',
  emoji: '🌆'
},
{
  id: 'm146',
  lat: 35.078544,
  lng: 129.080299,
  title: 'Korea National Maritime Museum',
  category: 'Activité',
  description: 'Musée consacré au monde maritime coréen, avec une librairie spécialisée et des expositions sur les coquillages, la pêche et l’exploration maritime.',
  emoji: '⚓'
},
{
  id: 'm147',
  lat: 35.046659,
  lng: 128.966931,
  title: 'Dadaepo Park',
  category: 'Activité',
  description: 'Parc situé juste avant l’accès à la plage de Dadaepo.',
  emoji: '🌳'
},
{
  id: 'm148',
  lat: 35.046366,
  lng: 128.963375,
  title: 'Dadaepo Beach',
  category: 'Activité',
  description: 'Plage orientée plein ouest, magnifique coucher de soleil.',
  emoji: '🌅'
},
{
  id: 'm149',
  lat: 35.041359,
  lng: 128.966594,
  title: 'Morundae Nakjo Observatory',
  category: 'Activité',
  description: 'Petite crique au plus près de l’eau.',
  emoji: '🌊'
},
{
  id: 'm150',
  lat: 35.052076,
  lng: 129.092083,
  title: 'Yeongdo Lighthouse',
  category: 'Activité',
  description: 'Phare de Yeongdo haut de 35 mètres, accessible jusqu’au sommet (rencontre aux abords de Katsu).',
  emoji: '🗼'
},
{
  id: 'm151',
  lat: 35.050442,
  lng: 129.088397,
  title: 'Taejongdae Observation Deck',
  category: 'Activité',
  description: 'Observatoire offrant une belle vue sur la mer, etages avec restaurants et bars.',
  emoji: '🌊'
},
{
  id: 'm152',
  lat: 35.053057,
  lng: 129.082476,
  title: 'Banc face à la mer',
  category: 'Activité',
  description: 'Banc exposé plein soleil, face à la mer.',
  emoji: '🪑'
},
{
  id: 'm153',
  lat: 35.056133,
  lng: 129.080143,
  title: 'Point de vue sur les falaises',
  category: 'Activité',
  description: 'Point de vue depuis les falaises pour le coucher du soleil.',
  emoji: '🌅'
},
{
  id: 'm154',
  lat: 35.055387,
  lng: 129.084810,
  title: 'Gumyeongsa Temple',
  category: 'Activité',
  description: 'Tout petit temple qui ne paie pas de mine',
  emoji: '⛩️'
},
{
  id: 'm155',
  lat: 35.059785,
  lng: 129.080545,
  title: 'Entrée du parc de Taejongdae',
  category: 'Activité',
  description: 'Entrée principale du parc de Taejongdae avec deux choix possibles : départ par la forêt ou par les falaises.',
  emoji: '🌲'
},
{
  id: 'm156',
  lat: 35.076160,
  lng: 129.017599,
  title: 'Songdo Beach',
  category: 'Activité',
  description: 'Première plage touristique de l’histoire de la Corée du Sud. Pas exceptionnelle, mais agréable, mais avec de nombreux bateaux de pêche en arrière-plan.',
  emoji: '🏖️'
},
{
  id: 'm157',
  lat: 35.075364,
  lng: 129.022312,
  title: 'Songdo Cloud Walk & Turtle Island',
  category: 'Activité',
  description: 'Passerelle suspendue au-dessus de l’eau, en forme de serpent.',
  emoji: '🌉'
},
{
  id: 'm158',
  lat: 35.061628,
  lng: 129.021614,
  title: 'Début de la randonnée d’Amnam Park',
  category: 'Activité',
  description: 'Point de départ d’une randonnée improvisée dans Amnam Park, juste à côté du Songdo Yonggung Suspension Bridge.',
  emoji: '🥾'
},
{
  id: 'm159',
  lat: 35.053456,
  lng: 129.014490,
  title: 'Fin de la randonnée d’Amnam Park',
  category: 'Activité',
  description: 'Fin de la randonnée dans Amnam Park, avec un point de vue sur le coucher de soleil.',
  emoji: '🌅'
},
{
  id: 'm160',
  lat: 35.057803,
  lng: 129.017605,
  title: 'Banc avec vue incroyable',
  category: 'Activité',
  description: 'Banc isolé hors du sentier principal. Le calme et la vue sont absolument incroyables, une véritable claque.',
  emoji: '🪑'
},
{
  id: 'm161',
  lat: 35.168168,
  lng: 129.057386,
  title: 'Busan Citizens Park',
  category: 'Activité',
  description: 'Ancien camp militaire américain reconverti en vaste parc familial, très agréable pour se promener.',
  emoji: '🌳'
},
{
  id: 'm162',
  lat: 35.167161,
  lng: 129.054357,
  title: 'Citizens Park History Museum',
  category: 'Activité',
  description: 'Musée du parc retraçant 100 ans d’histoire du lieu : d’un simple champ à un hippodrome, puis un camp militaire, avant de devenir un parc public.',
  emoji: '🏛️'
},
{
  id: 'm163',
  lat: 35.078285,
  lng: 129.045321,
  title: 'Huinnyeoul Culture Village',
  category: 'Activité',
  description: 'Village coloré tout en longueur, bordé de nombreux coffee shops faisant face à la mer.',
  emoji: '🎨'
},
{
  id: 'm164',
  lat: 35.079468,
  lng: 129.044378,
  title: 'Café B.elle',
  category: 'Cuisine',
  description: 'Café sur 2 étages avec un rooftop, le tout avec une belle vue sur la mer.',
  emoji: '☕'
},
{
  id: 'm165',
  lat: 35.104502,
  lng: 128.945992,
  title: 'Nakdong River Estuary Eco Center',
  category: 'Activité',
  description: 'Centre écologique avec observatoire intérieur ouvert au public, comprenant un petit musée, des salles pédagogiques et un large panorama sur le lac.',
  emoji: '🦆'
},
{
  id: 'm166',
  lat: 35.088464,
  lng: 128.943696,
  title: 'Nakdong Estuary Exploratory Experience Center',
  category: 'Activité',
  description: 'Observatoire situé au sud de l’île, avec bibliothèque, salles pédagogiques et rooftop malheureusement fermé.',
  emoji: '🏞️'
},
{
  id: 'm167',
  lat: 35.228107,
  lng: 129.086710,
  title: '25 Salon',
  category: 'Cuisine',
  description: 'Bar vintage à l’ambiance rétro (vinyles, cassettes et CD), diffusant uniquement des musiques des années 70 à 2000. Patron très cool, discussion super cool, pinte à 4 €. Les clients peuvent suggérer des morceaux via de petites notes papier.',
  emoji: '🍺'
},
{
  id: 'm168',
  lat: 35.154202,
  lng: 129.127036,
  title: 'Millac The Market',
  category: 'Cuisine',
  description: 'Grand food hall installé dans un ancien entrepôt, où j’ai mangé des parts de pizza chez D1DP.',
  emoji: '🍕'
},
{
  id: 'm169',
  lat: 35.188719,
  lng: 129.114254,
  title: 'Fin de la promenade sud – Jour 66',
  category: 'Balade',
  description: 'Fin de la promenade vers le sud du jour 66, là où la petite rivière se jette dans la Suyeonggang River.',
  emoji: '🚶‍♂️'
},
{
  id: 'm170',
  lat: 35.258046,
  lng: 129.091889,
  title: 'Fin de la promenade nord – Jour 60',
  category: 'Balade',
  description: 'Fin de la promenade vers le nord du jour 60, après environ 1h de marche depuis le point de départ.',
  emoji: '🚶‍♂️'
},
{
  id: 'm171',
  lat: 35.231131,
  lng: 129.089170,
  title: 'Départ de la promenade depuis mon quartier',
  category: 'Balade',
  description: 'Point de départ des promenades du jour 60 (vers le nord) et du jour 66 (vers le sud), depuis mon quartier.',
  emoji: '🚶‍♂️'
},
{
  id: 'm172',
  lat: 35.159494,
  lng: 129.170072,
  title: 'Busan X The Sky',
  category: 'Panorama',
  description: 'Observatoire situé à 410 mètres de hauteur. J’y ai passé 3h30 à contempler Busan une dernière fois, suspendu au-dessus de la ville.',
  emoji: '🌆'
},
{
  id: 'm173',
  lat: 35.172876,
  lng: 128.947178,
  title: 'Aéroport international de Gimhae (PUS)',
  category: 'Transport',
  description: 'Aéroport international situé à environ 1h10 de mon logement. Départ vers Osaka, au Japon.',
  emoji: '✈️'
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
},
{
  id: 'j37',
  day: 37,
  title: 'Trajet Séoul → Busan et arrivée à Haeundae',
  excerpt: `Départ du logement à 11 h, avec un bus prévu à 13 h 20 direction Busan.

Quatre heures de trajet dans un bus confortable, et seulement 24 € pour traverser tout le pays.

Je m’installe et patiente dans le hall de la Seoul Express Bus Station.
C’est d’ici que part une grande majorité des bus vers toutes les régions de Corée.
Une dizaine de portes d’embarquement, des écrans géants avec des dizaines de villes affichées. Ici, que des bus.

Mais impossible de trouver le mien sur les écrans.
Sur mon billet, c’est bien indiqué porte 1 ou porte 2, mais une fois devant… rien.

J’étais en avance, donc je me pose et j’attends un éventuel changement d’affichage.
Une heure passe. Toujours rien.
Je décide alors d’aller au guichet, d’essayer de me faire comprendre en anglais, et là on m’explique qu’il existe en fait une annexe à la station, avec d’autres départs.

Bref, je marche trois minutes et j’arrive dans cette autre gare.
Plus petite, plus calme… et cette fois-ci, ma porte d’embarquement est bien là, avec le numéro de mon bus affiché.
Soulagement 😰

Une fois installé, pas de stress : les quatre heures de trajet passent finalement assez vite.

J’arrive ensuite à la Busan Express Bus Station, puis encore 1 h 40 de transport avant d’atteindre mon logement.
Me voilà enfin à Haeundae, près de Busan, pour une semaine.

Fatigué par cette longue journée de transport, je m’écroule directement dans le lit.`,
  mood: 'Trajet Séoul → Busan et arrivée à Haeundae'
},
{
  id: 'j38',
  day: 38,
  title: 'Première journée à Busan',
  excerpt: `1ère journée à Busan, grasse matinée dans un lit qui possède une couverture chauffante.

Comme je suis arrivée hier de nuit, je n’ai pas pu voir à quoi ressemblait exactement l’auberge. Comme nous sommes à 500 m de la plage, l’auberge est finalement un établissement pensé pour les vacanciers et le surf. Les hôtes vivent au rez-de-chaussée et, à l’étage, il y a 8 chambres, avec toilettes et salle de bain sur le palier. Et au 3ème un roof top avec chaise et transat. 

Dans un contexte de vacances et d’été, ça doit être l’idéal. Ici, la température en juillet/août monte à 30 degrés.

Cependant, nous sommes en janvier : nous sommes 3 et pas de surf à cette période, malgré un grand soleil et une météo qui prévoit 15 degrés jeudi, une température moyenne de 7 degrés sur la semaine.

Seul truc chiant : la douche. Ça fait très douche de plage, avec un sol gelé. Cependant, les serviettes sont fournies et il y a plein de shampoings et gels douche à disposition. Pas de lavabo donc lavage de dent en même temps que la douche et pas de rasage pendant quelques jours.

Road trip oblige, ça ne me dérange pas du tout de loger dans un établissement comme celui-ci, surtout pour une semaine. Mon autre logement, qui sera dans le centre-ville, ressemblera davantage à celui de Séoul et l’ambiance y sera plus studieuse.

Ainsi, je vais rester ici une semaine, ce qui va me permettre d’être proche de l’océan et de me balader sur la plage le soir.

À l’heure du midi, je pars en vadrouille vers la plage. Je prends un petit déjeuner dans un GS25, puis je me balade le long de la plage entre falaises et dunes.

Vue magnifique et grand soleil !
Comme l’impression d’être en vacances, il ne manque plus que la serviette, le short et les claquettes.

Je dépose un colis en mode van life entre deux arbres, puis, 20 minutes après, je rentre dans le temple Haedong Yonggung, qui possède des toilettes… ahah.

Le temple est magnifique. Je prends un jus d’orange et je contemple la vue, avec le bruit du ressac, tout en écrivant ce texte.

Pour terminer la journée je pars sur la plage proche de mon logement et je regarde la coucher du soleil depuis le café Lip ou je prend une bière et une pizza`,
  mood: 'Première journée à Busan'
},
{
  id: 'j39',
  day: 39,
  title: 'Côte est de Busan et sentiments contrastés',
  excerpt: `Départ en fin de matinée, je prends mon petit-déjeuner dans un CU, histoire de faire le plein d’énergie pour cette journée de découverte de l’est de Busan, et plus précisément de sa partie excentrée.
Direction le gros centre commercial Lotte Premium Outlet.

Pas très fan de l’endroit : c’est grand, trop grand. Heureusement, on est lundi, donc c’est presque vide.
Je fais ma petite balade pendant 1h30 et décide ensuite de partir à la découverte de ce qu’il y a après le temple que j’ai visité hier.

Je marche 45 minutes le long de la grande avenue, puis je bifurque dans une petite rue et me voilà face à la mer. J’atterris juste après le temple d’hier.

Et pendant presque deux heures, j’ai eu un sentiment étrange vis-à-vis de cette côte.
En effet, c’est à ce moment-là que je me suis rendu compte que Busan était en réalité la Côte d’Azur coréenne.

Des dizaines et des dizaines de voitures sportives, des bars concept, des hôtels et des lounges de partout.
On marche cinq minutes, on est dans un vieux port avec son charme et son odeur, puis cinq minutes après, nous voilà sur un port aménagé avec restaurants et cafés hyper luxueux : grandes baies vitrées, rooftops avec transats et poufs.

Je passe devant tous ces établissements et j’ai le FOMO (Fear of Missing Out), l’impression de tout louper.

L’impression est plus que réelle : je vois tous ces gens posés devant leurs cafés à travers les vitres. Je regarde les noms, les cartes, les décos intérieures, puis je passe au suivant.

Tout a l’air bien, mais j’ai l’impression que je vais me tromper en choisissant un établissement plutôt qu’un autre. Et puis, très honnêtement, je ne vais pas m’amuser à payer 3 ou 4 cafés dans l’après-midi juste pour tester différents concepts.
Les prix sont clairement plus chers qu’ailleurs.

Enfin bref, je continue ma balade sans avoir choisi d’arrêt café et là, j’arrive devant l’un des hôtels les plus grands que j’aie jamais vus de ma vie.
Des centaines de balcons, des piscines à débordement et, au loin, un tout petit temple perché sur des rochers.

Le contraste est hyper frappant.
Assez pathétique même : impossible de bien contempler la vue et le temple en sachant que derrière moi il y a cet énorme hôtel.
Sur 180 degrés, la vue est magnifique, puis on se retourne et là… un immense bloc symétrique et imposant.

J’avais ce sentiment de pouvoir respirer à pleins poumons l’air frais de l’océan, puis, 100 mètres plus loin, d’être complètement bridé par cette architecture massive, et ce sur une bonne partie du chemin de balade le long de la côte.
C’était assez intéressant la façon dont j’ai vécu cette balade.

Je regarde la map : j’arrive au bout du chemin et, si je continue, je me dirige soit vers le terrain de golf de l’hôtel, soit vers un chemin qui mène à un autre port entouré d’hôtels.

Je décide de contourner l’hôtel immense par le côté route pour ensuite retomber sur l’océan (histoire de faire une boucle et de voir ce qu’il y a derrière l’hôtel).

Eh bien, j’aurais dû juste faire demi-tour et continuer près de l’eau.
S’en sont suivies 35 minutes de marche le long d’une énorme route, avec plein de bâtiments en construction et des terrains vagues remplis d’engins de chantier.
Bref, on comprend bien que les hôtels n’ont pas fini de pousser.

Je retombe enfin sur la mer et décide d’entrer dans l’un des cafés qui me laissaient perplexe quelques heures plus tôt. Cette fois-ci, j’en ai choisi un : le God Shot. Trois étages, un rooftop, etc.
Je prends un chocolat chaud et j’y reste 45 minutes. L’ambiance est très guindée, mais la vue est superbe.

Une fois sorti, j’emprunte le chemin dans les dunes et les falaises, toujours mieux de rentrer par ici que par la route.

J’arrive au point de vue d’hier, je m’y repose et contemple le coucher de soleil.
Je pense avoir trouvé mon endroit coup de cœur.

Je me balade un peu vers la partie ouest de ma plage, fais demi-tour en me disant que je réserve ça pour demain, ce sera mieux avec la lumière du jour.

Ce soir, ce sera burger. Je suis passé devant l’enseigne ce matin, je vois à peu près où elle se situe. Sur le chemin, mon téléphone s’éteint, plus de batterie, mais je suis dans mon quartier, donc aucun problème de localisation.
Très bon burger et ambiance chill, avec musique californienne.`,
  mood: 'Balade côtière et contrastes'
},
{
  id: 'j40',
  day: 40,
  title: 'Randonnée côtière de Songjeong à Haeundae',
  excerpt: `Départ vers l’heure de midi. Petit-déj au CU : Monster, cookie, barre protéinée… et c’est parti pour une énorme randonnée.

Départ de Songjeong Beach jusqu’à Haeundae Beach (18 km aller-retour).

Ce chemin le long de la côte est juste parfait. Une allée en bois a été construite sur presque 9 km, avec une ligne de chemin de fer qui accompagne tout le parcours.

C’est un petit train assez ancien, qui roule à environ 20 km/h et traverse trois petites villes côtières entre mon point de départ et mon arrivée (Songjeong – Cheongsapo – Mipo).

En gros, c’est un train qui permet aux habitants de la ville et des gratte-ciel d’aller très facilement dans des villages côtiers et vacanciers comme celui où je me trouve. Et inversement.

Bref, après environ 2 heures de marche, avec quelques petites pauses sur des ponts en arc de cercle vitrés, j’arrive enfin à Haeundae Beach. La plage est belle, il fait beau. Première fois que je vois des gratte-ciel juste en face d’une plage, c’est assez impressionnant.

Je regarde autour de moi : la plage est vivante, l’ambiance est cool, le soleil commence à se coucher. J’ai envie de trouver un bon spot pour en profiter. Je vois qu’au bout de la plage, côté ouest, il y a un parc qui pourrait offrir un point de vue imprenable sur le coucher de soleil.

Environ 20 à 25 minutes pour faire le tour du parc, avec des escaliers qui longent la côte. Je finis par me poser devant une vue aménagée spécialement pour le coucher du soleil. C’était vraiment joli : le soleil disparaît derrière un pont et quelques buildings.

Aux dernières lueurs, je fais le chemin inverse et je redécouvre la plage de Haeundae, baignée de magnifiques couleurs, avec les lumières des immeubles qui commencent à s’allumer.

Balade de 30 minutes au bord de l’eau, la nuit tombe petit à petit. Il est temps de rentrer, en sachant qu’il me reste encore toute la route du retour.

Mais finalement, ce n’était pas si compliqué. Musique dans les oreilles, presque seul au monde pendant tout le trajet. J’ai adoré cette ambiance nocturne, marcher pendant 2 heures dans le calme.

J’arrive enfin près de mon quartier. Direction un ramen, puis un café pour boire un lait à la fraise accompagné d’un cookie.

Plus de jambes.
30 500 pas aujourd’hui, 18 km de marche.
Sacrée journée. J’en ai pris plein la vue.`,
  mood: 'Randonnée et coucher de soleil'
},
{
  id: 'j41',
  day: 41,
  title: 'Journée chill et musée de la pêche',
  excerpt: `Aujourd’hui, journée plus chill. Visite du National Fisheries Science Museum, un musée sur les techniques de pêche à travers les siècles, avec pas mal d’infos sur les types de poissons et d’animaux, les courants marins et les températures de l’océan, notamment en Corée du Sud et dans l’océan Pacifique.

Le musée est pensé en grande partie pour les enfants, donc j’avais un peu peur que ce soit trop enfantin. Environ la moitié du musée est traduite en anglais, le reste pas du tout : obligé de sortir le téléphone pour traduire, mais franchement, ça ne gêne pas tant que ça.

Environ 1 h de visite.

Ensuite, je vais me poser à mon endroit préféré. Je découvre un chemin qui monte encore plus haut et je m’y pose une vingtaine de minutes.

Puis je redescends me poser face à l’océan, sur une chaise en osier, avec le coucher de soleil.

Chocolat chaud au Coralani : sympa, mais pas de vue directe sur le coucher de soleil.`,
  mood: 'Musée et détente'
},
{
  id: 'j42',
  day: 42,
  title: 'Daebyeon, pêche et dernier coucher de soleil',
  excerpt: `Départ en début d’après-midi direction Daebyeon, un village strictement tourné autour de la pêche ! 

Le bus me dépose juste à l’entrée du port. Je marche tranquillement entre les personnes qui pêchent et les étals juste derrière les pêcheurs : de vieilles dames qui lavent et dépensent les poissons et autres prises.

Je me dirige vers le phare iconique de la ville, à l’effigie de la Coupe du monde de foot de 2002 (qui fut organisée en Corée du Sud et au Japon).

Malheureusement, la digue haute était fermée, peut-être à cause du vent, alors je me suis contenté de la digue basse, là où une trentaine de pêcheurs attendaient patiemment leurs prises.
Énormément de vent à cet endroit, mais c’était très sympa de me balader ici avec un grand soleil et une température agréable : 16 degrés ! J’ai quand même pu voir le phare, même si je n’étais pas pile en face.

Je reviens à l’entrée du port, reprends un bus direction le Musée national de la science de Busan.
Encore une fois, il est annoncé qu’il est tourné pour les enfants, avec cependant quelques espaces intéressants pour les adultes.

Bon, le musée était vraiment axé sur l’apprentissage des enfants à la science de base (poussée d’Archimède, force cinétique, etc.), mais une partie plus intéressante se trouvait dans la dernière exposition : les équipements volants et l’espace. Il y avait des simulateurs de pilotage de drones, d’avions, ainsi que des maquettes de l’ISS et de quelques fusées.

Activité sympathique, mais sans plus.

Je pars ensuite me poser sur ma chaise en osier à côté de mon endroit préféré.
Dernier coucher de soleil ici, j’y reste une bonne demi-heure et je pars manger.`,
  mood: 'Village de pêche et coucher de soleil'
},
{
  id: 'j43',
  day: 43,
  title: 'Dernière journée à Songjeong',
  excerpt: `Dernière journée à Songjeong, je sais déjà où je vais manger ce soir car, en début de semaine, quand j’ai voulu aller dans ce street food, il ne prenait que du cash.
Je me suis promis d’y retourner pour pouvoir manger ces mini-sandwichs coréens sur la plage.

Le petit déjeuner s’est fait rapidement au CU et me voilà parti pour 4h de marche entre mon Airbnb et la plage de Gwangalli Beach. Comme c’est ma dernière journée ici, j’en ai profité pour refaire le chemin en bois plutôt que de prendre les petits trains et capsules que je testerai plus tard.

Je vois sur la map un petit temple un peu isolé des grands bâtiments de Haeundae Beach, le Haeunjeonsa Temple, extrêmement calme et, comme toujours, un beau paradoxe entre modernité et tradition ici.

Je pars ensuite visiter Marine City, une ville construite sur la mer, qui est l’un des quartiers les plus chics et luxueux de Busan : 3 énormes buildings et un parc à leurs pieds. 
Assez agréable et dérangeant d’être entouré d’autant de bâtiments.

Je pars ensuite à la plage de Gwangalli Beach, c’est la deuxième plage la plus connue après Haeundae Beach. Le décor est un poil différent, moins de grands buildings en fond mais pas mal de bâtiments type restaurants et autres commerces. 
Je reste 1h ici entre tranquillité sur un banc et balade au bord de l’eau. À 18h, le Busan Gwangandaegyo Bridge s’est illuminé et des petits feux d’artifice étaient tirés par des bateaux en dessous du pont.

Ambiance très cool, énormément de jeunes se posent avec des trépieds tout le long de la plage pour y faire des photos ou des chorégraphies TikTok.

Je prends mon bus pour 1h de trajet pour ensuite manger ce fameux sandwich coréen devant la plage tout en écoutant un jeune artiste chanter sur la plage.

Je pars ensuite me poser au 3e étage du café Lip avec une bière comme au premier jour.
La boucle est bouclée : épanadiplose.

Pour finir, balade de nuit sur la plage éclairée, mains dans les poches, écouteurs aux oreilles !

Très content d’avoir pu séjourner ici une semaine. Je ferai mon bilan demain`,
  mood: 'Dernière journée et boucle bouclée'
},
{
  id: 'j44',
  day: 44,
  title: 'Jour de transition et bilan à Songjeong',
  excerpt: `Aujourd’hui est un jour de transition : je change d’Airbnb. Je troque l’ambiance balnéaire et plage contre un Airbnb situé dans les hauteurs de Busan, plus proche du centre. Mais je ne quitte pas vraiment la plage : elle restera accessible en 45 minutes de métro.

Je quitte le logement à 11h avec mes deux sacs à dos, prends le métro, me pose dans un café et attends tranquillement l’heure d’entrée dans le nouveau logement, à 15h.

Je vais rester dans ce logement pendant 3 semaines, et cela signera la fin de mon aventure en Corée du Sud.

Trois semaines dans un quartier étudiant, tout près du métro et des bus, ce qui me permettra de partir plus facilement à la découverte des marchés, musées et autres lieux touristiques.

Bilan après 1 semaine à Songjeong :

Ici, l’ambiance vacances est au rendez-vous chaque jour.
J’ai vu la plage et les couchers de soleil tous les jours de la semaine.
Dans les dunes, sur une chaise au bord de l’eau, dans un café… et bien sûr lors de mes escapades à Haeundae et Gwangalli.

Cependant, tout est plus cher ici.
Ville touristique oblige, la ville devient plus calme à 20h. Beaucoup d’établissements ferment ou ne proposent plus de plats en cuisine à cette heure-ci (hiver + pleine semaine).
Le week-end, la ville devient une attraction hyper touristique et ultra vivante.

De plus, impossible de manger dans mon auberge : il n’y a ni espace avec des tables, ni bureau dans la chambre pour manger tranquillement, et pas assez de place pour faire quelques exercices.
Dans les cafés, les gens sont davantage là pour discuter que pour travailler sur leur PC.

Et en plus, je suis tombé sur LA bonne semaine pour être près de la plage : dans trois jours, les températures vont chuter jusqu’à -7°C la nuit et 2°C en journée.

Pour conclure, hyper content d’avoir eu cette parenthèse balnéaire. 
L’océan fait un bien fou, que ce soit à Cherbourg, à Biarritz, en Espagne ou ici. Être proche de l’eau, des plages, des ports est vraiment hyper ressourçant !`,
  mood: 'Transition et bilan'
},
{
  id: 'j45',
  day: 45,
  title: 'Nouveau logement et mémoire de la guerre',
  excerpt: `Premier réveil dans ce nouveau logement, et il ressemble énormément à celui que j’avais à Séoul, mais cette fois-ci avec une exposition plein sud. En plus, plein d’objets sont déjà disponibles dans l’appartement : serviettes, papier toilette, télé, gel douche et shampoing, quelques câbles, une trousse de premiers secours, des assiettes, des couverts et même du matériel de cuisine… Bref, une vraie location Airbnb.
Réveil très chill. 

Je peux reprendre tranquillement mon petit rituel : petit-déjeuner sur le bureau devant une vidéo YouTube, puis me poser devant une série le soir avant de me coucher.

 Petit bonus non négligeable : une petite lumière au-dessus du lit, parfaite pour lire le soir.

Enfin bref, je suis bien installé. Il fait bon dans l’appart, et j’ai déjà ma liste de choses à faire et à voir pour les 3 prochaines semaines :) Je me garde volontairement quelques activités pour la dernière semaine, comme j’avais pu le faire à Séoul.

Aujourd’hui, découverte du Busan Museum ainsi que du UN Memorial Cemetery Korea.

Je commence par le Busan Museum. Le musée se consacre à l’histoire de la ville et explique comment Busan a évolué au fil des siècles. Les quatre dernières expositions portent sur l’occupation japonaise au début du XXᵉ siècle, sur le rôle stratégique de Busan pour les Japonais, puis sur la guerre de Corée (1950-1953).

Musée très sympathique, qui se termine par une conclusion explicative menant naturellement au cimetière : le UN Memorial Cemetery Korea, que je pars visiter juste après, à seulement 400 mètres du musée.

Je fais le tour du cimetière pendant environ 45 minutes. On y observe les tombes des soldats et du personnel médical venus apporter leur aide durant la guerre de Corée, sous l’égide des Nations Unies. Il y a également le Wall of Remembrance, qui recense toutes les personnes envoyées par les Nations Unies, classées par pays et par ordre alphabétique. Je me suis laissé emporter par l’émotion et j’ai pris quelques minutes pour lire les noms et prénoms des soldats français morts au combat en Corée. (Prénoms les plus présents : Jean, Thierry, Georges, Alain, Pierre-Marie, Bernard)

Puis balade dans Peace Park, très calme, avec un petit ruisseau qui serpente tout le long.

Je termine cette journée en regardant le coucher de soleil à Gwangalli Beach`,
  mood: 'Installation, musée et cimetière'
},
{
  id: 'j46',
  day: 46,
  title: 'Temple de montagne et jazz au crépuscule',
  excerpt: `Aujourd’hui, je pars découvrir le temple de Seokbulsa (Seokbulso Temple), un temple un peu perdu au cœur des montagnes. Le bus me dépose en plein milieu de la montagne, et il me reste encore 1h de marche pour atteindre le temple.

Au départ, la randonnée se fait sur des chemins assez abîmés, bordés de champs de culture privés, avec pas mal de déchets éparpillés au sol du coté des champs. Puis le chemin rejoint une route à peine praticable pour les voitures, à cause de pentes dépassant parfois les 35 degrés.

J’arrive enfin au temple. Nous sommes 4 au début, puis petit à petit, je me retrouve seul. Seul dans ce temple, à plus de 700 mètres d’altitude.

Je prends le temps de respirer à pleins poumons et je ferme les yeux 2 minutes pour vraiment ressentir l’atmosphère du lieu et les bruits alentour : un vent léger, le froissement des feuilles mortes qui glissent sur le sol, et les corbeaux, nombreux, qui volent, se bagarrent… L’un d’eux semble même un peu malade et pousse des cris étranges.

Autour de moi, de grandes statuettes taillées directement dans la pierre, et des statues nichées au fond de cavités où les gens viennent prier.
Je reste dans ce lieu hors du temps pendant 30 à 45 minutes, puis je redescends tranquillement par la route.

Sur la descente, j’aperçois un café : Le smut. À l’intérieur, la décoration est composée de dizaines et de dizaines d’appareils photo argentiques exposés entre les tables. Impossible de résister.

Je décide d’entrer et de commander un smoothie mangue / fraise / yaourt. Ambiance jazz très cool, avec une vue en hauteur sur le bas de la montagne et les immeubles en contrebas.

La nuit tombe doucement. Le son du jazz devient légèrement plus présent, et je contemple l’arrivée de la nuit, sans pour autant voir le coucher de soleil à cause de la météo. Puis le serveur arrive et me tend son téléphone avec le traducteur, affichant en anglais : « Notre shop ferme à 18h00, merci à vous. »
Je pars donc précipitamment.

S’ensuivent 30 minutes de marche avant de prendre le bus, qui me dépose dans mon quartier.`,
  mood: 'Seokbulso Temple et café'
},
{
  id: 'j47',
  day: 47,
  title: 'BIFF Square, Marchés locaux et Gamcheon Village',
  excerpt: `Aujourd’hui, départ pour BIFF Square, un marché à ciel ouvert avec énormément de boutiques à bas prix. J’ai d’ailleurs acheté une paire de baskets à 7,60 € pour remplacer les miennes, qui commençaient à être bien abîmées.

Ensuite, je me balade dans Gukje Market. Je me perds un peu, je bifurque d’une allée à une autre. Les prix sont extrêmement bas, et certaines personnes qui tiennent les stands semblent parfois étonnées de voir des gens entrer… ou peut-être simplement surprises de voir un étranger, je ne sais pas.

Je pars à la recherche de chaussettes blanches, mais à chaque fois on me demande de payer en cash. Flemme d’aller jusqu’à un distributeur.

Au fil de ma balade, je tombe sur Jagalchi Market, un immense marché aux poissons, très local. Aucun touriste, uniquement des habitants venus acheter leur poisson. Les étals sont gigantesques : des centaines et des centaines de poissons, et juste derrière, des tables et des chaises sous des tonnelles pour manger directement ce que proposent les marchés.

À la base, je devais aller me poser à Songdo Beach, mais en sortant de Jagalchi Market, j’aperçois un village dans les hauteurs. Je regarde la carte et me rends compte que je suis juste en bas de Gamcheon Village. Il est sur ma liste, je suis à côté… alors changement de plan. Et c’est parti pour 50 minutes de marche jusqu’à la statuette iconique du Petit Prince.

Je monte à pied par des mini-ruelles, des escaliers très étroits et bien pentus, et me voilà arrivé dans ce village extrêmement mignon. Tout tourne autour du Petit Prince de Saint-Exupéry : des chats dessinés un peu partout sur les murs, des étoiles, et des phrases du livre inscrites à de nombreux endroits.

Impossible de prendre une photo à côté de la statuette en milieu d’après-midi : trop de monde. Il y a même une file d’attente avec un agent qui régule l’accès pour les photos.

Après ça, je décide d’aller prendre un goûter au café Coffee IT. Je m’y pose, j’écris ce texte et j’attends patiemment le coucher de soleil depuis cet endroit, qui offre un très beau point de vue sur le village.

Comme hier, le café ferme assez tôt (18h), ce qui me laisse le temps de me balader dans le village sous les dernières lueurs du jour. J’en profite pour retourner du côté de la statuette, et là, enfin, j’ai pu prendre ma petite photo :)`,
  mood: 'BIFF Square, Marchés locaux et Gamcheon Village'
},
{
  id: 'j48',
  day: 48,
  title: 'Musée fermé, art et cinéma',
  excerpt: `Aujourd’hui, j’avais organisé ma journée autour de la visite du Busan Museum of Art.

Problème : en arrivant devant, je découvre que le bâtiment entier est en travaux. Chaque étage du musée est vide, en pleine reconstruction. J’ai même pu voir les lettres du nom du musée sur la façade, en train d’être retirées.
Effectivement, en vérifiant sur Google, le musée est bien indiqué comme temporairement fermé.

Bon, ce n’est pas grave. Je me replie sur une autre activité.

Juste à côté se trouve le BEXCO, qui ressemble à un mélange entre un Zénith et un parc des expositions. Étonnamment, le lieu est ouvert, mais toutes les galeries, les passages et les passerelles sont complètement vides.
Il y a pourtant deux énormes bâtiments, et je me dis qu’il doit bien y avoir une exposition ou un événement en ce mois de janvier.

Après une trentaine de minutes à parcourir le lieu, à aller au bout de chaque bâtiment, et après une petite recherche sur ChatGPT, je me rends compte qu’aucun événement n’a lieu aujourd’hui, ni dans les prochains jours, ni même dans les prochaines semaines.
Bon, ce n’est pas grave non plus. Au moins, je peux dire que j’ai visité l’endroit.

Je regarde ensuite ma liste de choses à faire et remarque que je suis juste à côté de deux grands centres commerciaux :
Shinsegae Department Store et Shinsegae Centum City.

Je commence par explorer le Shinsegae Department Store. Je fais le tour, je parcours les étages, puis je décide d’aller voir l’autre grand complexe, Shinsegae Centum City, qui est globalement dans le même esprit.

Juste à côté se trouve le Busan Cinema Center. Cette place est en réalité le lieu d’accueil du Busan International Film Festival, un peu l’équivalent coréen du Festival de Cannes.
Le site est immense et son architecture est vraiment impressionnante. D’un côté, il y a un cinéma en plein air complètement vide, de l’autre une librairie et un cinéma.

Je prends l’ascenseur direction la librairie, et me retrouve au milieu des livres et d’étudiants qui travaillent tranquillement sur de grands bureaux.
Je m’installe ensuite dans le coin médiathèque : six tourne-disques sont à disposition, avec des chaises et des casques.

Je m’assieds à l’un d’eux et écoute l’album déjà posé sur la platine :
la bande originale du film Bodyguard, composée par Alan Silvestri.

J’écoute toute la face A du vinyle, puis je vais m’installer dans un fauteuil où je lis, pendant une vingtaine de minutes, un livre consacré au film Oppenheimer de Christopher Nolan.

Enfin, le soleil commence à se coucher. En passant devant la chaîne de burgers Shake Shack, je me rends compte que ça fait presque un mois que je n’ai pas mangé de burger.
Cette enseigne me faisait envie depuis un moment, alors je prends un menu et me pose à l’intérieur, accompagné d’une vidéo YouTube.`,
  mood: 'Musée fermé, art et cinéma'
},
{
  id: 'j49',
  day: 49,
  title: 'Busan Modern and Contemporary History Museum et parc en hauteur',
  excerpt: `Découverte aujourd’hui du Busan Modern and Contemporary History Museum, un musée installé dans une ancienne banque. Il s’étend sur trois étages : l’un est consacré à une exposition contemporaine, et les deux autres à une exposition permanente sur l’histoire de Busan, et plus particulièrement du port de Yeongdo.

On y apprend à quel point le port a été un lieu central pour l’import-export. L’exposition retrace la transformation de la ville au fil du XXᵉ siècle, à travers des témoignages de personnes ayant vu Busan se métamorphoser au fil des décennies.

Il y a beaucoup d’animations et de panneaux interactifs, ce qui rend la découverte des événements marquants de la ville assez immersive.

Je pars ensuite dans l’annexe du musée, située dans la rue d’à côté. Il s’agit finalement d’une petite bibliothèque très design. Malheureusement, tous les livres sont en coréen, donc impossible de m’y poser pour lire un peu.

Je continue ensuite par une balade dans le Yongdusan Park, situé à quelques minutes du musée. Le parc n’est pas très grand, mais reste agréable. En hauteur, il offre un joli point de vue sur les quartiers alentours.

Je me balade tranquillement, mais le froid commence à bien tomber. Je rentre doucement à l’appartement et en profite pour lancer quelques lessives.

Lecture en attendant la fin de la machine.`,
  mood: 'Musée d’histoire et balade tranquille'
},
{
  id: 'j50',
  day: 50,
  title: 'MoCA, île d’Eulsukdo et claque au crépuscule',
  excerpt: `Aujourd’hui, découverte du MoCA (Museum of Contemporary Art Busan), installé sur l’île d’Eulsukdo, connue pour sa richesse naturelle et ses oiseaux migrateurs.

Pour m’y rendre, il m’a fallu environ 1h10 de métro.

Je commence par l’exposition située au niveau -1, entièrement dédiée au cinéma de Jean-Luc Godard. Je retiens surtout cette phrase :

« En 1960, un nombre incalculable de films sont sortis.
Ainsi, si un jeune de 20-25 ans voulait combler son retard,
il devrait passer 10 à 15 ans dans les cinémathèques. »

Le deuxième thème abordait le paradoxe entre la Seconde Guerre mondiale et le cinéma. Godard disait :

« Ils ont voulu des larmes pendant 50 ans dans des salles obscures,
leur monde leur en offrira en dehors. »

Après la visite des étages supérieurs, je pars en randonnée sur toute l’île d’Eulsukdo.

L’île est divisée en deux parties :
au nord, un vaste parc où l’on peut se promener à pied ou à vélo, et pique-niquer sur les nombreuses tables installées.
au sud, un sanctuaire dédié à la faune et à la flore.

En arrivant au bout de la partie nord, je regarde la carte… et l’envie me prend de faire le tour complet de l’île pour aller voir ce qui se cache au sud.

1h30 de marche plus tard, j’atteins l’extrémité sud d’Eulsukdo, et je suis tellement content d’avoir suivi cette impulsion.

Le sud est un véritable sanctuaire naturel, notamment pour les oiseaux migrateurs. Des observatoires sont disséminés un peu partout : certains accessibles au public, d’autres réservés à la recherche ou strictement protégés.

Mais le soleil commence à se coucher alors que je ne suis qu’aux trois quarts du chemin. J’analyse la situation :
aucun lampadaire, aucune lumière au sol.
Dans le sanctuaire, aucune lumière artificielle n’est autorisée pour ne pas perturber les oiseaux.

Le soleil descend, ma batterie est à 30 %, mais j’ai une envie folle d’aller jusqu’au bout de cette partie sud de l’île.

Je regarde la carte, commence à prendre le chemin du retour… puis je m’arrête en plein milieu du sentier. Et je me dis :
« Il y a moyen que je ne revienne jamais ici.
Même s’il fait noir, on s’en fout.
Il faut que j’aille voir ce qu’il y a là-bas.
Voir le paysage. Le panorama.
Et pouvoir dire que j’ai fait le tour complet de l’île. »

Après une minute de réflexion, je fais demi-tour.
Et c’est reparti vers l’inconnu.

Je marche assez vite pour profiter des dernières lueurs du coucher de soleil sur le sanctuaire, juste avant la nuit totale.
Et là… pendant presque 30 minutes, je prends une énorme claque.
Les couleurs du ciel sont tout simplement incroyables.
Je marche encore et encore, en me répétant :
« Putain, c’est incroyable. »

Je suis entouré du chant des oiseaux, du bruit de l’eau, et parfois j’aperçois des animaux (peut-être des lévriers) surgir et disparaître à toute vitesse dans les fougères.

J’arrive enfin à l’observatoire sud.
Entièrement en bois, avec un petit escalier, un étage et des jumelles.

Finalement, ce n’était pas l’observatoire qui était incroyable, mais tout le chemin parcouru pendant cette demi-heure.
Plus j’avançais, plus les couleurs du ciel devenaient irréelles.

Écouteurs dans les oreilles, sûrement seul dans tout le sanctuaire à cette heure-ci car je n’ai croisé personne.
L’ambiance était folle.

Il m’a ensuite fallu presque une heure de marche le long de l’eau pour sortir du sanctuaire et retrouver une route avec de la circulation.
Une heure dans l’obscurité, avec pour seule lumière les lumières de la ville de l’autre côté de la rive.
À réfléchir. À digérer ce que je venais de vivre.
À mesurer la chance que j’avais d’être là.

Ce fut une très belle journée.
Je suis actuellement dans mon lit et j’ai du mal à retranscrire exactement les émotions et les sensations ressenties.

Mais une chose est sûre :
j’en ai pris plein les yeux,
et c’était sûrement l’une des plus belles journées de ce voyage.`,
  mood: 'Art contemporain, nature et moment suspendu'
},
{
  id: 'j51',
  day: 51,
  title: 'Seomyeon et salles d’arcade',
  excerpt: `Aujourd’hui, journée plus calme.

Lessive de linge noir et nettoyage complet de l’appartement pour commencer la journée.

En début d’après-midi, je pars à la découverte du quartier de Seomyeon, l’un des plus animés de Busan, notamment connu pour son immense Underground Mall.

Je poursuis ensuite vers un centre commercial de 16 étages.
Aux 15e et 16e étages, on trouve un cinéma, un parc à thème et même une arène dédiée à l’e-sport.

Je continue ensuite à marcher dans le quartier.
Néons, musique, jeunes partout, et surtout énormément de salles d’arcade.
Je m’arrête dans l’une d’elles et joue quelques minutes à des jeux de basket 🏀.

Tout le quartier me fait énormément penser à Myeongdong à Séoul.`,
  mood: 'Seomyeon et salles d’arcade'
},
{
  id: 'j52',
  day: 52,
  title: 'Beomeosa, Geumjeongsan et coucher de soleil au sommet',
  excerpt: `Je commence la journée en me dirigeant vers le métro.
15 minutes de métro, 4 arrêts, et je descends à la station Beomeosa, située tout en bas de la montagne, tout en bas du temple.

Il me faut ensuite environ 45 minutes de marche pour atteindre le temple de Beomeosa.

Le site est assez petit mais paisible.

Beomeosa signifie « le temple du poisson du Nirvana ».
J’y croise un moine bouddhiste (le temple accueille d’ailleurs de nombreux moines ainsi que des programmes de templestay tout autour).

La visite est plutôt rapide : en une vingtaine de minutes, j’ai fait le tour.
Mais redescendre après si peu de temps n’a pas de sens.
Je regarde la carte et décide de poursuivre en randonnée jusqu’au sommet du Geumjeongsan.

Il me faudra environ une heure de marche pour atteindre le sommet.
Le temple est situé à 323 mètres d’altitude, il me reste donc un peu plus de la moitié à gravir.

J’arrive au sommet à 15h15.
Altitude : 801,5 mètres.
La vue est incroyable, à 360 degrés.

D’ici, je peux situer précisément plusieurs endroits :
Songjeong, derrière les montagnes à l’est, où j’étais deux semaines plus tôt.
Puis Haeundae, Marina City, Gwangalli Beach et le pont Gwangan.
J’aperçois même l’île d’Eulsukdo — le sanctuaire d’oiseaux visité deux jours auparavant, qui paraît minuscule vue d’ici.

Il est environ 15h30.
Je veux absolument voir le coucher de soleil depuis ce point de vue.

Problème :
le soleil se couche dans deux heures.
Il fait froid.
Je n’ai ni eau, ni nourriture.
(Un inconnu me donnera plus tard une barre de chocolat, je ne sais pas pourquoi mais merci à lui pour ce plein d’énergie et de glycogène.)
Seulement une batterie externe.
Et la descente traverse la forêt, sans aucune lumière.
Voir le coucher de soleil signifie redescendre une heure dans le noir.

Je me dis que je ne suis pas monté ici pour rien.
Le jeu en vaut la chandelle.
Alors j’attends.

Je me protège du vent entre les rochers, écoute de la musique, patiente.
À 17h, la température chute.
Je tremble beaucoup.
0 degré, -2 avec le vent.
Plus que 44 minutes avant le coucher du soleil.

À 17h30, je me lève.
Le spectacle commence.
Pendant une demi-heure, j’en prends plein les yeux.

Un coucher de soleil incroyable à 360 degrés.
D’ici, on voit le soleil disparaître derrière les petites montagnes à l’ouest.
Je reste immobile cinq minutes, à observer lentement le soleil descendre.

Seul depuis plus d’une heure.
Plus aucun randonneur.
Aucun bruit.

Juste moi, la montagne et le soleil,
perché à 801,5 mètres d’altitude.

Lorsque le soleil disparaît, je reste encore dix minutes.
Je prends quelques photos, puis je repars.

S’ensuivent 45 minutes de descente, entre les dernières lueurs du jour et le noir complet pendant une vingtaine de minutes.
Lampe torche du téléphone allumée.
Musique en haut-parleur dans la forêt sombre.

Ce fut une très belle expérience.
Dans le calme.
Dans le silence.
Sans grand questionnement.
Juste la beauté de la nature,
à travers mes yeux.`,
  mood: 'Beomeosa, Geumjeongsan et coucher de soleil au sommet'
},
{
  id: 'j53',
  day: 53,
  title: 'Jour de repos sous la grisaille',
  excerpt: `Jour de repos aujourd’hui.
Réveil assez tardif, ciel gris toute la journée.

Je passe une bonne partie de la journée à regarder quelques documentaires et vidéos youtube`,
  mood: 'Jour de repos sous la grisaille'
},
{
  id: 'j54',
  day: 54,
  title: 'Temples, livres, librairie et parc',
  excerpt: `Je pars à la découverte du temple Samgwangsa.
L’endroit est très calme, bercé par des sons de prières diffusés dans les haut-parleurs.
Il est possible d’entrer dans certains templestay et de marcher le long de grands balcons qui surplombent le site.

Une fois la visite terminée, je descends à pied vers le quartier Chinatown de Busan.
Le quartier est assez petit, et vers 15h, peu de boutiques sont ouvertes.

Je poursuis ensuite ma balade dans un quartier assez méconnu : Bosu-dong Book Street.
Une rue entière remplie de petites librairies indépendantes, avec des piles et des piles de livres et de mangas.
C’est un peu comme un marché, mais uniquement dédié aux livres.
La rue étant assez courte, on en fait cependant vite le tour.

Je décide ensuite de monter vers Democracy Park.
À l’entrée, je tombe sur la Busan Public Central Library.
Je traîne dans les couloirs, explore les étages, puis me pose une vingtaine de minutes sur un siège pour lire le magazine The Economist (numéro de la semaine précédente), consacré notamment aux tensions avec les États-Unis et à l’horreur de la situation actuelle en Iran.

Je pars enfin me balader dans Democracy Park, mais le lieu ne me marque pas particulièrement.
Je prends donc le chemin du retour et retombe, un peu par hasard, sur le quartier chinois — cette fois-ci illuminé par les lanternes rouges du soir.`,
  mood: 'Temples, livres, librairie et parc'
},
{
  id: 'j55',
  day: 55,
  title: 'Igidae Coastal Walk et Oryukdo Skywalk',
  excerpt: `Je pars en fin de matinée direction Igidae Coastal Walk, situé entre Haeundae Beach et Yeongdo Island.
Connue pour ses falaises et sa randonnée côtière.

J’ai carrément envie de faire cette côte en arrivant à Igidae Entrance, puis de finir la randonnée par Oryukdo Skywalk, pile pour le coucher de soleil.

L’arrêt de bus juste à côté de chez moi me dépose directement à l’entrée d’Igidae, mais il m’aura fallu 1h20 de trajet en bus (un peu long).

Je descends du bus et traverse le parc Busan Environmental Corporation Nambu Environmental Park, qui est en réalité un parc pour les habitants d’ici, pile en dessous des immeubles.

Enfin bref, j’arrive à l’entrée de la Igidae Coastal Walk, et c’est parti pour 2h30 de rando.

Et ce fut vraiment super, magnifique, à faire et à voir.

Il y a pas mal de dénivelé, puis énormément d’escaliers, puis énormément de chemins assez étroits.

Je me pose de temps en temps sur les points de vue pour observer la mer, puis 5 minutes après je reprends le tracé.

Je finis cette rando vers 16h15, puis je me dirige vers le pont suspendu avec un sol en verre, le Oryukdo Skywalk.
D’ici, on peut observer les petites îles Oryukdo : de face, on dirait qu’il n’y a qu’une seule île, mais quand on se déplace un peu, on peut voir qu’il y a bien cinq petites îles les unes à côté des autres.

Pour finir la journée, il y avait un petit café juste à côté du pont suspendu.
Je décide de prendre un ice tea à emporter, de me poser près de l’eau, juste en bas, à côté de quelques pêcheurs, et je reste ici tranquillement jusqu’au coucher du soleil.`,
  mood: 'Igidae Coastal Walk et Oryukdo Skywalk'
},
{
  id: 'j56',
  day: 56,
  title: 'Wangnyeong Mountain Observatory',
  excerpt: `Aujourd’hui, je vais voir un endroit qu’on voit partout sur les réseaux sociaux concernant Busan :

Le Wangnyeong Mountain Observatory.

Un observatoire situé en haut d’une montagne, qui surplombe la ville.

Accessible très facilement en bus, puis 30 minutes à pied pour arriver au point de vue (beaucoup prennent des Uber ou des taxis pour arriver jusqu’en haut).

Je descends donc à l’arrêt de bus le plus proche, et c’est parti pour 30 minutes à pied.

Une fois arrivé en haut, il y a des bancs-balançoires.
Je me pose sur celui qui est pile au milieu de la place et je contemple le coucher de soleil, ainsi que les lumières de la ville qui s’allument petit à petit, jusqu’à ce que la nuit complète tombe.
(Le froid tombe beaucoup également, jusqu’à -2 ressenti, avec pas mal de vent.)

Je ne suis cependant pas forcément ébloui par la vue, étant donné ma randonnée d’il y a quatre jours au Geumjeongsan.
La vue ici est certes jolie, mais pas aussi incroyable qu’à 800 mètres d’altitude.

Je pars de cet endroit, puis je reste encore quelques instants sur l’autre place, à quelques dizaines de mètres, pour voir l’autre côté, avec une vue sur l’est, les gratte-ciel et la mer en fond.`,
  mood: 'Wangnyeong Mountain Observatory'
},
{
  id: 'j57',
  day: 57,
  title: 'Lecture, documentaire et repos',
  excerpt: `Jour de repos aujourd’hui.
Je mélange lecture et visionnage de quelques documentaires.`,
  mood: 'Lecture, documentaire et repos'
},
{
  id: 'j58',
  day: 58,
  title: 'Musée maritime et librairie maritime',
  excerpt: `Visite du Korea National Maritime Museum (Musée Maritime National de Corée), situé sur l’île de Yeongdo.

L’île est accessible en bus, mais elle est assez vaste, il faudra que j’y retourne pour explorer les parties nord et est.

Le bus me dépose pile devant le musée, situé à l’ouest de l’île.

Le musée se compose d’un rez-de-chaussée et de 3 étages.
Le rez-de-chaussée est entièrement dédié à une librairie spécialisée dans le monde marin et maritime.
Le 1er étage propose une exposition sur les coquillages et leur utilisation au cours de l’histoire coréenne et japonaise.
Le 2ème étage est consacré aux outils liés à la pêche et à l’exploitation des ressources marines.
Enfin, le 3ème et dernier étage traite de la manière dont l’homme a dompté les océans au fil du temps : navigation en haute mer, traçage des cartes, exploration… Tout ce qui a permis aux explorateurs du monde entier de découvrir les ressources de la planète, notamment à travers la route de la soie et la route des épices.

Je prends vraiment mon temps dans chaque exposition pour bien comprendre.
Ma visite aura duré une bonne heure et demie.

Ensuite, je décide de me poser dans la librairie, avec une jolie vue sur le port et les îles d’Oryukdo au loin.
Je suis resté là presque 2h à lire.

J’ai commencé par le magazine Naval History, où je me suis plongé dans l’histoire des soldats américains — les Marines — de 1750 à nos jours (The Rise of America’s “Soldiers from the Sea”).

Et puis j’ai carrément accroché au livre de Mark Adams : Meet Me in Atlantis.
J’en ai lu une trentaine de pages.
Dès le départ, le narrateur débat de l’existence de la fameuse Atlantide, notamment en remettant en question les dires de Platon (d’ailleurs, en anglais, c’est Plato).

Bref, c’était agréable, cool, hyper silencieux… et le fauteuil dans lequel j’étais installé était carrément confortable.`,
  mood: 'Musée maritime et librairie maritime'
},
{
  id: 'j59',
  day: 59,
  title: 'Dadaepo Beach',
  excerpt: `Troisième plage la plus connue de Busan, Dadaepo Beach offre apparemment le plus beau coucher de soleil de la région.

En effet, la plage est orientée plein ouest, ce qui permet d’observer le soleil disparaître progressivement derrière les petites îles au large.

Je commence par me balader dans le parc situé à l’entrée de la plage, le Dadaepo Park. Une musique légère est diffusée dans les haut-parleurs, ce qui rend l’ambiance particulièrement agréable.

À l’entrée de la plage, on trouve des hamacs, des bancs, des bancs-balançoires ainsi qu’une longue allée en bois pour se promener tranquillement.

Je me dirige d’abord du côté du Morundae Nakjo Observatory (sur la gauche), une petite crique située à l’extrémité de la plage, tout près de l’eau.

Je longe ensuite toute la plage côté parc, avant de marcher directement au bord de l’eau tout au long du coucher de soleil.

Ici, pas de pont ni d’obstacle pour gêner la vue : le panorama est totalement dégagé.

Ce fut un très beau dimanche après-midi, marqué par un magnifique coucher de soleil.

Pour une fois, il s’agit d’une plage en longueur, au sable fin, sans boutiques juste à côté. En revanche, de grands immeubles bordent le parc, ce qui rend l’ensemble un peu moins immersif.`,
  mood: 'Dadaepo Beach'
},
{
  id: 'j60',
  day: 60,
  title: "Promenade le long d’une rivière",
  excerpt: `Aujourd’hui, grasse matinée, lecture, écriture, puis une longue balade de 2h sur une promenade aménagée qui longe tout le circuit du métro de la ligne 1, juste à côté d’une rivière.

Je décide d’explorer la partie nord et de voir jusqu’où cette promenade s’étend. Il me faut environ 1h pour atteindre le bout, puis 1h supplémentaire pour revenir.

En chemin, j’aperçois quelques loutres et prends le temps d’observer l’aménagement du parcours. Tous les 400 mètres environ, on trouve des machines de sport en libre accès, ainsi que des terrains de basket et de badminton.

En fin de journée, la promenade se remplit peu à peu, beaucoup de personnes viennent marcher, faire leurs pas quotidiens ou simplement profiter de la petite balade du soir. Tout est bien éclairé, bien aménagé, avec même une piste cyclable.`,
  mood: "Promenade le long d’une rivière"
},
{
  id: 'j61',
  day: 61,
  title: "Falaises de Taejongdae et rencontres",
  excerpt: `Départ en fin de matinée direction Yeongdo Island pour explorer les falaises de Taejongdae Cliff. Taejongdae est un parc naturel côtier situé à l’extrémité de l’île de Yeongdo, réputé pour ses falaises et ses points de vue sur la mer.

Je commence par prendre un petit déjeuner au CU juste à l’entrée du parc afin de faire le plein d’énergie avant la randonnée.

Le parcours est une boucle, avec la possibilité de commencer soit par la forêt, soit par les falaises. Je choisis de partir sur la gauche, par la forêt.

Après une dizaine de minutes de marche, je croise une dame qui me dit bonjour et me propose de m’asseoir à côté d’elle. Je m’assois, nous échangeons quelques rires. Elle m’explique qu’elle revient tout juste du temple situé à proximité, où elle est allée prier. Malheureusement, elle ne parle pas anglais, la discussion est donc limitée mais reste très agréable. Après quelques échanges, je lui souhaite une bonne journée et poursuis ma randonnée.

Arrivé près du phare, au bout du parc, une autre dame m’aborde en anglais en me disant qu’elle ne sait pas par où passer pour accéder au chemin menant juste à côté du phare. Nous cherchons ensemble et trouvons finalement l’entrée permettant de descendre.

Nous passons ensuite une trentaine de minutes ensemble à discuter, prendre des photos et parler de nos vies. Elle s’appelle Katsu, elle a à peu près l’âge de ma mère et me parle d’Osaka, au Japon. Je lui explique que je m’y rendrai dans deux mois, et selon elle, je vais beaucoup apprécier la ville.

Nous remontons ensuite par les chemins au-dessus du phare, où elle me présente son mari, qui n’a pas pu descendre, probablement à cause de ses genoux. Le mari est plutôt froid et ne parle pas anglais, contrairement à elle. Je décide alors de les laisser et de redescendre vers le phare pour prendre des photos et vidéos, et passer un peu plus de temps sur place. C’était une rencontre vraiment très cool.

En redescendant près du phare, je me rends compte qu’il est finalement possible de monter à l’intérieur, contrairement à ce que Katsu m’avait dit. Je grimpe les 35 mètres du phare et profite de la vue depuis ce point culminant.

Je me dirige ensuite vers le Taejongdae Observation Deck, situé à environ 200 mètres. Je m’y pose près de 45 minutes sur un banc, pile en face du soleil, avec une température agréable et sans vent.

À l’approche du coucher du soleil, je me rends vers un dernier point de vue. Je grimpe quelques rochers et reste immobile face à la mer agitée, observant le soleil disparaître derrière des nuages.

Ce fut une très belle randonnée, facile et accessible à tous. Content d’avoir fait ce parc, d’avoir rencontré ces personnes, et surtout Katsu.`,
  mood: 'Falaises de Taejongdae et rencontres'
},
{
  id: 'j62',
  day: 62,
  title: 'Songdo Beach, Amnam Park et la beauté de l’imprévu',
  excerpt: `Découverte de Songdo Beach et d’Amnam Park aujourd’hui.

J’arrive d’abord en bus à Songdo Beach et me dirige vers la Songdo Cloud Walk, un petit pont en forme de serpent qui surplombe l’eau. Au loin, j’aperçois les cabines du téléphérique se diriger vers le Songdo Sky Park, un parc suspendu au-dessus de la mer, proche des falaises.

Je préfère marcher plutôt que prendre les cabines, d’autant plus qu’elles sont payantes. En une trentaine de minutes, j’arrive à l’entrée du Songdo Sky Park. L’entrée est payante (pas très chère), mais je n’ai pas de liquide sur moi et ils ne prennent pas Apple Pay. En regardant la carte, je réalise que je suis juste à côté d’Amnam Park, un parc de randonnée.

Je décide alors de me lancer, un peu à l’improviste, dans cette randonnée côtière qui longe les falaises. Elle durera environ 2h30.

Et ce fut un vrai plaisir, une claque.

Certains passages sont assez raides, parfois sécurisés par une simple corde sur le côté pour pouvoir avancer. Mais ce que j’ai le plus adoré, c’est un endroit totalement isolé, perdu au milieu du parc : un simple banc face à une vue absolument superbe.

Je reste là une bonne demi-heure à contempler le paysage, les bateaux de pêche au loin et surtout le calme absolu. C’est presque magique tant l’endroit est paisible, reposant et spectaculaire.

Je reprends ensuite le chemin et, à un moment, je remarque qu’il est possible de descendre encore plus près des falaises. Le passage est périlleux, assez dangereux, avec une corde qui n’inspire pas vraiment confiance. J’hésite, réfléchis, teste la corde, puis décide de descendre. J’arrive encore plus près de l’eau, mais il serait possible d’aller encore plus bas. Je choisis finalement de remonter, estimant que cela ne m’apporterait pas grand-chose de plus et qu’il me reste encore du chemin à parcourir.

Une vingtaine de minutes plus tard, j’arrive à l’extrémité du parc, presque pile pour le coucher de soleil. Je m’assois sur les marches en bois et observe tranquillement les dernières lueurs disparaître.

Une fois le soleil couché, je me retrouve dans une zone industrielle. Quelques travailleurs sortent de l’usine et prennent le même bus que moi.

Conclusion : c’est clairement dans l’imprévu que je m’éclate le plus et que je découvre les endroits les plus marquants. Cette randonnée restera comme l’une des plus mémorables de Busan.

(À voir en vidéo dans le jour 62)`,
  mood: 'Songdo Beach, Amnam Park et la beauté de l’imprévu'
},
{
  id: 'j63',
  day: 63,
  title: 'Journée calme et préparation du départ',
  excerpt: `Aujourd’hui, journée très tranquille.

Je m’occupe principalement de la lessive et de la préparation de mon sac en vue de mon départ d’ici quelques jours.

Chill toute la journée pas grand chose aujourd’hui .`,
  mood: 'Journée calme et préparation du départ'
},
{
  id: 'j64',
  day: 64,
  title: 'Busan Citizens Park, musée et Huinnyeoul Culture Village',
  excerpt: `Départ avec mon livre sous le bras, direction Busan Citizens Park. À l’origine, ce lieu n’est pas un parc classique : il s’agissait d’un ancien hippodrome durant l’occupation japonaise (1910–1945), puis d’un camp militaire américain pendant près de 70 ans, avant d’être restitué à la ville au début des années 2010.

Je commence par explorer le parc afin d’en faire le tour. Il est situé en plein centre-ville, encerclé d’immeubles. Toute l’organisation du parc reprend l’ancienne structure militaire : disposition très symétrique, découpée en petits “quartiers”, chacun avec son propre jardin et ses infrastructures.

En me rapprochant du centre, j’entre dans le musée du parc. J’y reste une bonne trentaine de minutes. L’exposition est passionnante et apporte beaucoup de contexte historique sur l’évolution du lieu. J’ai vraiment adoré.

Je m’installe ensuite à une table de pique-nique, cookie à la main. J’hésite à lire, puis je décide finalement de cocher l’une des dernières grandes activités de ma liste : le Huinnyeoul Culture Village.

Après environ une heure de bus, j’arrive dans ce petit village situé sur l’île de Yeongdo,la dernière exploration sur cette île. La vue est superbe : Songdo Beach est visible, ainsi que l’extrémité de l’île où j’ai fait ma randonnée quelques jours plus tôt.

Le Huinnyeoul Culture Village est un village tout en longueur, sur 300 à 400 mètres, perché le long de la côte. Très coloré et rempli de coffee shops et de cafés concept, tous misant sur le même atout : une vue imprenable sur la mer.

Je m’installe au B.Elle Coffee, commande un chocolat chaud et reprends ma lecture. Coucher de soleil, ciel légèrement nuageux, musique douce, soleil frappant la vitre. Très cool.`,
  mood: 'Busan Citizens Park, musée et Huinnyeoul Culture Village'
},
{
  id: 'j65',
  day: 65,
  title: 'Retour à Eulsukdo Island sanctuary et Bar Vintage',
  excerpt: `Retour à Eulsukdo Island, le sanctuaire des oiseaux. Le froid est de retour aujourd’hui, avec –7°C ressentis. Pourtant, je me sens presque obligé de revenir ici (sans aucun doute mon lieu préféré) avant de quitter Busan.

Ironiquement, le site est peu connu et mal référencé sur Google ou Naver Maps. On ne trouve que quelques articles parlant des oiseaux migrateurs en hiver. Et pourtant, c’est ici que je ressens le plus de choses : le calme, le silence, la grandeur du lieu. Les oiseaux qui survolent ou frôlent les lacs, et surtout l’un des plus beaux spots de coucher de soleil que j’aie vus depuis plus de deux mois.

Contrairement à ma dernière visite, où je m’étais pressé pour ne pas me retrouver dans la nuit noire, j’arrive aujourd’hui en début d’après-midi. Je me concentre uniquement sur la partie sanctuaire des oiseaux, ce qui me permet de vraiment découvrir le lieu.

À mon arrivée, je me rends à l’observatoire principal. À l’intérieur, un petit musée et un panorama exceptionnel sur le premier lac, peuplé d’un nombre impressionnant d’oiseaux que l’on peut observer tranquillement, assis. Je fais le tour du musée et en apprends davantage sur la construction du site et la volonté de la ville de Busan de le protéger.

Je reste ensuite longuement assis à observer. Le temps ralentit. Une heure passe.

Je décide alors de rejoindre l’observatoire sud. Le rooftop est malheureusement fermé, je m’installe donc à l’observatoire extérieur juste à côté. J’y reste presque une heure, mains dans les poches, à regarder les oiseaux avec en toile de fond le coucher de soleil et les collines. Encore une fois, j’en prends plein la vue. Je me surprends à observer, sans aucune notion du temps.

J’attends la toute dernière lueur du soleil avant de quitter l’île. Deux kilomètres de marche plus tard, je prends le bus pour rentrer dans mon quartier.

Une fois arrivé, je m’arrête dans un bar que je voulais tester depuis longtemps. Un bar vintage, rempli de vinyles, CD et cassettes. Ici, seules des musiques des années 70, 80, 90 et 2000 sont diffusées. Les clients peuvent écrire un artiste et un titre sur une petite fiche pour que le patron le passe.

Je discute longuement avec lui. Nous partageons une passion pour le cinéma et les bandes originales. Il me demande d’où me vient toute cette culture. Je lui réponds que c’est grâce à mon père. Il sourit et me dit : « C’est un bon père. »

Le lieu me correspond totalement. Que des musiques que j’adore. Comme je suis français, il passe Desireless, Joe Dassin, France Gall. La pinte n’est vraiment pas chère (4 €), l’ambiance est top. Je lui apprends quelques mots de français, et nous nous quittons avec une franche poignée de main, en disant tous les deux : « Salut. » Parce qu’il n’arrivait pas à dire « au revoir ».`,
  mood: 'Retour à Eulsukdo Island sanctuary et Bar Vintage'
},
{
  id: 'j66',
  day: 66,
  title: 'Record de pas et grande balade dans la ville',
  excerpt: `Record de pas et de distance aujourd’hui pour ce voyage : 35 898 pas, soit 22,5 km parcourus à pied.

Avant-dernier jour à Busan. Avec l’envie de revivre ce que j’avais fait à Séoul le long de la Han River (Jour 33), je décide de m’offrir une très grande balade. Je pars de chez moi en milieu d’après-midi pour rejoindre Gwangalli Beach, en empruntant la longue promenade proche de mon logement.

Une semaine plus tôt, j’avais exploré la partie nord de cette promenade. Aujourd’hui, je choisis la direction sud, simplement pour voir jusqu’où elle mène. Après 7 km et environ 1h30 de marche, j’arrive au bout. La petite rivière longeant la promenade se jette ici dans la Suyeonggang River, elle aussi bordée d’une immense promenade.

Deux options s’offrent alors à moi : faire demi-tour tranquillement et rentrer assez tôt, ou continuer en direction de Gwangalli Beach sans vraiment savoir combien de temps cela prendra. Je choisis la deuxième option. Parce que... pourquoi pas ?

Un peu plus loin, je m’arrête devant un panneau indiquant ma position. Un Coréen très sympa s’approche et me demande si j’ai besoin d’aide. Je lui demande combien de temps il me reste pour rejoindre la plage. Réponse : encore 40 minutes.

J’arrive finalement près de Gwangalli Beach. J’aperçois un night market installé dans un grand entrepôt, rempli de restaurants, avec un large escalier intérieur permettant de s’asseoir face à la mer et au port. Après un moment d’hésitation, je me laisse tenter par quelques slices de pizza et je reste environ 45 minutes sur place.

Je ne traine pas trop : je suis parti sans carte de transport ni liquide. Autrement dit, impossible de rentrer autrement qu’à pied. Je passe tout de même par la plage, marche une dernière fois sur le sable de Gwangalli Beach, puis je prends le chemin du retour.

Je traverse la ville sur une grande partie du trajet, avant de rejoindre la promenade pour le dernier tiers. Un vrai petit défi personnel, relevé. Record de pas battu. Heureux d’avoir emprunté ces promenades que tant de résidents parcourent au quotidien.

Et surtout, cette sensation incroyable de marcher dans des rues baignées de néons, de lumières et de restaurants sur la route du retour. Les yeux et l’esprit émerveillés, je repense brièvement à ces deux mois passés dans le pays, et à ce mois à Busan. Mais je m’empêche volontairement de faire un vrai bilan. Pas encore.

Je vis le moment à fond. La rétrospective, je me la garde pour demain soir, pour ma dernière activité. Une activité en écho à mes derniers jours à Séoul, histoire de boucler la boucle.`,
  mood: 'Record de pas et grande balade dans la ville'
},
{
        id: 'j67',
        day: 67,
        title: 'Busan X The Sky à Haeundae Beach',
        excerpt: `Dernier jour à Busan. Et pour clôturer ce voyage en Corée du Sud, rien de mieux que de prendre un peu de hauteur.

Je me dirige donc vers Haeundae Beach, là où se trouve le plus grand gratte-ciel de la ville, culminant à 410 mètres.

Pour commencer, je prends un cookie au CU situé juste en bas de la tour. Une façon de boucler la boucle avec ce que j’avais fait il y a trois semaines.
Ce jour-là (Jour 40), je m’étais déjà arrêté dans ce même CU pour prendre un cookie avant de marcher sur la plage.
Aujourd’hui, je refais exactement la même chose.

Puis, aller-retour tranquille sur la plage, longue d’un kilomètre.
Ensuite, je me rends dans la tour, plus précisément aux étages de Busan x The Sky.
J’y passerai finalement plus de 3h30, le temps de profiter pleinement du lieu, avec en prime un petit peach iced tea.

D’ici, je peux voir Songjeong. Au loin, j’aperçois l’endroit, dans les dunes et les falaises, où je m’étais posé il y a un peu plus d’un mois (Jour 38, par exemple).

Et je me dis que j’ai sacrément bien profité de cette ville.
Je n’ai pas arrêté de bouger.
J’ai fait tout ce qu’il y avait à faire.
Et je suis extrêmement heureux d’avoir vécu tout ça.

Busan offre un large panel de possibilités, à la fois côté mer et côté montagnes :
des musées, des randonnées, des quartiers ultra animés.
Un véritable terrain de jeu où l’on ne peut pas s’ennuyer.

C’est aussi l’une des villes les mieux structurées en termes de transports : métro, bus… absolument tout est accessible, même quand cela semble un peu loin.

Pour conclure la journée, je reste dans ce lieu jusqu’à quelques minutes de la fermeture, puis je regagne tranquillement mon quartier.
J’y prends des gimbaps (mon plat préféré de Corée) à emporter, que je déguste paisiblement dans mon logement, devant ma série Psych.`,
        mood: 'Busan X The Sky à Haeundae Beach'
      },
      {
        id: 'j68',
        day: 68,
        title: 'Busan (Corée du Sud) → Osaka (Japon)',
        excerpt: `Journée de transition : Busan (Corée du Sud) → Osaka (Japon).

C’est avec émotion que je rends l’appartement, avant de me diriger vers l’aéroport de Busan, l’aéroport international de Gimhae.

Au programme : 1 h de bus, 1 h 05 d’avion, puis encore 1 h de train avant d’arriver dans mon futur logement à Osaka.

Départ de Busan à 10 h.
Arrivée dans l’appartement à Osaka à 17 h 30.

Moi qui dormais encore paisiblement ce matin à Busan, me voilà à écrire ces mots, allongé dans mon lit à Osaka.

Quel globe-trotter.
Et surtout, quel plaisir de vivre ce genre de sensation.

Une fois sur place, je prends rapidement mes marques.
J’éparpille mes affaires, puis je m’installe tranquillement sur mon PC pour écrire sur les deux derniers jours passés à Busan.

En début de soirée, je pars vagabonder dans les rues de mon nouveau quartier, en quête d’un repas simple, consistant et surtout réconfortant.

Rien de mieux alors que des ramens traditionnels.
Je trouve un tout petit restaurant, pas loin de mon logement.
Je m’installe à l’intérieur, juste devant la cuisine, où je regarde le chef préparer les ramens sous mes yeux.

4,90 €.
Hyper rentable.
Et surtout, rien de mieux que ce lieu pour commencer mon voyage japonais.

Voilà ce qui fut mon dernier vrai jour à Busan, et plus largement en Corée du Sud.
Une journée qui ressemble finalement davantage à une transition vers une nouvelle partie du voyage.`,
        mood: 'Busan → Osaka'
      }
    ] // Ferme le tableau timeline (ou journal) de la Corée
  }, // Ferme l'objet Corée
  {
    id: 'japan',
    name: 'Japon',
    videoUrl: 'https://photos.smugmug.com/Osaka/Osaka-Categories/i-J9MFjBv/0/L/Osaka_Districts-L.jpg',
    isLocked: true,
    themeColor: 'rose',
    hero: { title: '2,5 mois au Japon', subtitle: 'Mon voyage solo', description: 'Voyage du 10 février 2026 jusqu’au 21 avril 2026', bgImage: withBase('osaka.png') },
    timeline: [
      {
  id: 't1',
  date: 'Jour 1 (8 554 pas)',
  title: 'De Busan à Osaka, journée de transition',
  description:
    'Dernier jour en Corée du Sud et transition vers le Japon. Une journée étrange, presque irréelle, où tout s’enchaîne très vite : rendre l’appartement à Busan, rejoindre l’aéroport de Gimhae, prendre l’avion, puis le train jusqu’à Osaka. En quelques heures, changement de pays et de culture. Le matin encore à Busan, le soir dans un ramen japonais. Quel plaisir de vivre cette sensation',
  bullets: [
    'Busan → Osaka',
    'Arrivée et installation dans le nouvel appartement',
    'Premier repas japonais : ramens traditionnels'
  ],
  video: 'https://youtube.com/shorts/AlIztWES-Uo?si=HIshMP4yheghdwsu'
},
  {
  id: 't2',
  date: 'Jour 2 (16 500 pas)',
  title: 'Premiers pas à Osaka : immersion dans Namba',
  description:
    'Premier jour complet à Osaka et première immersion dans l’un de ses quartiers les plus emblématiques : Namba. Entre galeries commerçantes, centres commerciaux géants, salles d’arcade, lieux plus atypiques comme les immeubles de slots.',
  bullets: [
    'Galeries marchandes et centres commerciaux de Namba',
    'Arcades, slots et contrastes urbains',
    'Dōtonbori dt temples cachés'
  ],
  video: 'https://youtube.com/shorts/9krI0T_d4fs?si=scW0ftXiM7T3cE20'
},
{
  id: 't3',
  date: 'Jour 3 (14 039 pas)',
  title: 'Sanctuaire Sumiyoshi Taisha',
  description:
    'Découverte du sanctuaire shinto Sumiyoshi Taisha, l’un des plus anciens du Japon. Loin de l’agitation touristique, célèbre pour son pont arqué Taikobashi, d’un orange vif (vermillon). La visite se prolonge dans le parc voisin, entre lac, oiseaux et promeneurs du quartier, avant un long retour à pied à travers des rues résidentielles typiquement japonaises.',
  bullets: [
    'Sanctuaire shinto Sumiyoshi Taisha et pont Taikobashi',
    'Sumiyoshi Park, lac et vie locale',
    'Balade à pied dans un Osaka résidentiel'
  ],
  video: 'https://youtube.com/shorts/t8ivuxVBro4?si=FU1VJUmuB7nKe5lX'
},
{
  id: 't4',
  date: 'Jour 4 (22 868 pas)',
  title: 'Le Château d’Osaka sous le soleil',
  description:
    'Découverte de l’un des sites les plus emblématiques de la ville avec la visite du Château d’Osaka.La visite retrace son histoire mouvementée depuis sa construction en 1583 par Toyotomi Hideyoshi jusqu’à sa restauration moderne. Fresques de batailles, armures de samouraïs et panorama depuis l’observatoire. La journée se termine par l’immense magasin Don quijote à dotonbori, une vraie caverne d’Ali Baba remplie de souvenirs, snacks et curiosités typiquement japonaises.',
  bullets: [
    'Parc et musée du Château d’Osaka',
    'Observatoire et vue sur l’ensemble du site',
    'Dōtonbori et exploration du Don Quijote'
  ],
  video: 'https://youtube.com/shorts/zvmPOjZGbnw?si=XJvkGqjRDSz4X_uO'
},
{
  id: 't5',
  date: 'Jour 5 (10 713 pas)',
  title: 'Musée des beaux-arts d’Osaka et jardin zen Keitakuen Garden',
  description:
    'Journée calme avec la visite du Musée municipal des beaux-arts d’Osaka. Sur le trajet, passage par le quartier de Shinsekai, connu pour son ambiance populaire et la tour Tsutenkaku. Le musée se visite tranquillement, avec une collection d’art asiatique classique, peu fréquentée. L’entrée inclut l’accès au jardin zen Keitakuen Garden. La journée se termine par une balade dans le parc Tenshiba.',
  bullets: [
    'Balade dans le quartier Shinsekai',
    'Musée des beaux-arts d’Osaka',
    'Jardin zen Keitakuen Garden',
    'Balade au parc Tenshiba'
  ],
  video: 'https://youtube.com/shorts/Otqjk2AGPP0?si=7D75hOMw6L5Hcvfd'
},
{
  id: 't6',
  date: 'Jour 6 (20 172 pas)',
  title: 'Osaka Museum of Natural History et Nagai Botanical Garden',
  description:
    'En s’éloignant du centre, le décor change totalement : petites maisons, silence, odeurs de cuisine et scènes du quotidien. Arrivée ensuite dans l’immense Nagai Park, le musée d’histoire naturelle se visite rapidement, intéressant sans être marquant, mais la vraie surprise vient du Nagai Botanical Garden, vaste et apaisant, parfait pour se perdre entre jardins japonais, chinois et floraux.',
  bullets: [
    'Marche dans les zones résidentielles et pavillonaire',
    'Nagai Park',
    'Osaka Museum of Natural History',
    'Nagai Botanical Garden'
  ],
  video: 'https://youtube.com/shorts/nybnoW8Zx78?si=Emrv7WldQRi3VHdW'
},
{
  id: 't7',
  date: 'Jour 7 (20 936 pas)',
  title: 'Den Den Town, nostalgie et culture pop japonaise',
  description:
    'Journée plongée dans la culture pop japonaise à Den Den Town, véritable paradis pour les amateurs de figurines, mangas et jeux vidéo. Entre les étages infinis de Mandarake et de Joshin Kids Land, je passe des heures à observer figurines cultes, licences mythiques et surtout des milliers de voitures miniatures qui réveillent une forte nostalgie d’enfance. L’après-midi se poursuit par le marché de Kuromon et friperies vintage à Amerikamura.',
  bullets: [
    'Den Den Town : magasins de figurines, miniatures et jeux vidéos',
    'Balade dans Kuromon Market',
    'Amerikamura : Quartier de la mode et des friperies',
    'Salle de Flippers rétro et Pokémon Center'
  ],
  video: 'https://youtube.com/shorts/rELE3M3nVf4?si=HnSLoUXPlTu7ZT4F'
},
{
  id: 't8',
  date: 'Jour 8 (27 718 pas)',
  title: "Quartier Umeda : Le quartier d'affaire et des buildings ",
  description:
    'Balade sous un grand soleil dans le quartier d’Umeda, centre d’Osaka où se concentrent la gare principale, les sièges d’entreprises et les grands hôtels. L’ambiance rappelle des quartiers comme La Défense ou Gangnam : buildings, costumes, rythme rapide. Je passe une bonne partie de la journée à déambuler entre centres commerciaux immenses, notamment Grand Front Osaka et surtout Yodobashi Camera, le lieu de la technologie où absolument tout semble disponible immédiatement. Un terrain de jeu pour les amateurs de tech.',
  bullets: [
    'Umeda le quartier d’affaires',
    'Centre commercial : Grand Front Osaka',
    'Centre commercial : Yodobashi Camera, temple de la technologie',
    'Umeda Sky Building et café au Ume Kita Park'
  ],
  video: 'https://youtube.com/shorts/Rcvu_3YkVh4?si=TEjv6zuNZwuiktfl'

},
{
  id: 't9',
  date: 'Jour 9 (17 781 pas)',
  title: 'Orange Street Osaka et lecture à la Osaka Municipal Central Library',
  description:
    'Découverte d’Orange Street, une rue dédiée à la mode indépendante et aux designers locaux. En chemin vers Utsubo Park, arrêt spontané à la Osaka Municipal Central Library. Je m’y installe longuement pour lire une autobiographie de Michael J. Fox.La journée se termine doucement dans Utsubo Park, à regarder le soleil disparaître derrière les immeubles, avant une balade nocturne du côté du quartier Dotonbori.',
  bullets: [
    'Orange Street et designers indépendants',
    'Lecture à la bibliothèque centrale d’Osaka',
    'Balade à Utsubo Park',
    'Balade nocturne à Dōtonbori'
  ],
  video: 'https://youtube.com/shorts/8YIxduPNgYo?si=lXWEv7TqlIgy7ypt'
},
{
  id: 't10',
  date: 'Jour 10 (18 059 pas)',
  title: 'Temple Shitennō-ji et retour au quartier Den Den Town',
  description:
    'Découverte du temple bouddhiste Shitennō-ji, l’un des plus anciens du Japon, fondé en 593. La visite se poursuit ensuite à Den Den Town avec plusieurs boutiques spécialisées (figurines, mangas et rétro gaming).',
  bullets: [
    'Temple Shitennō-ji (fondé en 593)',
    'Montée sans chaussure dans le pavillon principal',
    'Boutiques otaku à Den Den Town',
    'Fin de journée à Namba Parks'
  ],
  video: 'https://youtube.com/shorts/DCo_lgoFV-U?si=MQgJdXPCNNIFzX_W'

},
{
  id: 't11',
  date: 'Jour 11 (22 832 pas)',
  title: "Musée de l’histoire d’Osaka et balade autour du château",
  description:
    "Le musée retrace plus de 1 400 ans d’histoire de la ville, depuis l’époque où Osaka s’appelait Naniwa jusqu’à l’ère moderne. Maquettes, reconstitutions et reproductions de rues anciennes, avec en bonus une belle vue en hauteur sur le château d'Osaka. Je passe ensuite par une petite exposition consacrée à la série *The Ghost Writer Wife*, avant de terminer par une balade autour du château.",
  bullets: [
    "Osaka Museum of History",
    "Exposition The Ghost Writer Wife",
    "Balade autour du château",
  ],
  video: 'https://youtube.com/shorts/CRu8tvhRcgs?si=1prRlcA2jcdXLqmf'
},
{
  id: 't12',
  date: 'Jour 12 (19 531 pas)',
  title: "Parc Expo ’70 Commemorative Park et Tower of the Sun",
  description:
    "Direction Expo ’70 Commemorative Park’, un immense parc situé au nord d’Osaka, vestige de l’exposition universelle de 1970 avec le monument du parc la Tour du Soleil. Je tombe sur un match amateur de baseball à l’ambiance très familiale.Le reste du parc, très orienté famille, alterne jardins et espaces pour enfants.",
  bullets: [
    "Match amateur de baseball",
    "Parc Expo ’70 Commemorative Park",
    "Monument Tower of the Sun (1970)"
  ],
  video: 'https://youtube.com/shorts/LwFVOzSFcC4?si=7opRiO_0LLcEfrM1'
},
{
  id: 't13',
  date: 'Jour 13 (16 127 pas)',
  title: 'Match du Cerezo Osaka au Yodoko Sakura Stadium',
  description:
    'Une semaine après être passé devant le stade par hasard, me voilà au Yodoko Sakura Stadium pour assister à mon premier match de football japonais. Le Cerezo Osaka affronte le Sanfrecce Hiroshima pour la troisième journée de la J1 League. Le match se conclut sur un scénario complètement fou : égalisation d’Osaka sur un retourné acrobatique après la 95e minute, puis but décisif d’Hiroshima à la 97e. Défaite 2-1, mais une fin de match mémorable et une superbe ambiance.',
  bullets: [
    'Cerezo Osaka vs Sanfrecce Hiroshima',
    "Égalisation magnifique d'Osaka à la 95e (1-1)",
    'But décisif à la 97e minute pour Hiroshima (2-1)'
  ],
  video: 'https://youtube.com/shorts/q82oqKM_rm8?si=lPr7uFBgAvdjs4E8'
},
{
  id: 't14',
  date: 'Jour 14 (19 354 pas)',
  title: 'Nara Park, temples et daims en liberté',
  description:
    'Sous un grand ciel bleu, direction la ville de Nara, célèbre pour son immense parc rempli de daims en liberté : Nara Park. Des milliers de daims se promènent librement et sont habitués aux visiteurs, ils inclinent la tête en guise de révérence pour obtenir un biscuit, trés mignon. Je termine la journée en goûtant un mochi fraîchement préparé chez Nakatanidou, célèbre pour sa préparation spectaculaire au pilon.',
  bullets: [
    'Nara Park et ses daims en liberté',
    'Kōfuku-ji, Tōdai-ji et Kasuga-taisha',
    'Mochi artisanal chez Nakatanidou'
  ],
  video: 'https://youtube.com/shorts/4PPdTYU-J-k?si=R_fpYUXunbAuw_dd'
},
{
  id: 't15',
  date: 'Jour 15 (11 031 pas)',
  title: 'Découverte de la ville de Sakai et ses kofun impériaux',
  description:
    'Direction Sakai, au sud d’Osaka, connue pour abriter d’immenses tumulus funéraires appelés kofun. Datant du IIIe au VIe siècle, ces tombeaux sont en forme de trou de serrure et sont attribués à d’anciens empereurs japonais et sont inscrits au patrimoine mondial de l’UNESCO.',
  bullets: [
    'Kofun classés UNESCO',
    'Daisen-ryō Kofun (empereur Nintoku)',
    'Hōchigai Shrine',
    'Pause détente au Daisen Park'
  ],
  video: 'https://youtube.com/shorts/H8_Q9B3IUhk?si=4tQJftu7a0fA4mzl'
},
{
  id: 't16',
  date: 'Jour 16 (1 802 pas)',
  title: 'Grosse journée du pluie',
  description:
    "Grosse journée du pluie. J'en profite donc pour faire quelques courses, lancer une grosse lessive. Le reste de la journée : lecture, vidéos YouTube et préparation de l’activité prévue pour le lendemain.",
},
{
  id: 't17',
  date: 'Jour 17 (29 957 pas)',
  title: 'Découverte de la ville de Kobe',
  description:
    'Journée complète à Kobe, célèbre pour son bœuf réputé dans le monde entier. Après un passage au Ikuta Shrine puis dans le Chinatown de Nankinmachi, je goûte enfin au fameux bœuf de Kobe chez Kobe Beef Daichi : une viande hyper fondante. L’après-midi, je pars en randonnée vers le Nunobiki Herb Garden, dans les hauteurs de la ville. Entre cascades, sentiers calmes et hamacs avec vue panoramique, l’endroit est paisible et poétique. Je termine la journée au Meriken Park face à la Kobe Port Tower, sous les dernières lumières du soir.',
  bullets: [
    'Bœuf de Kobe',
    'Randonnée vers Nunobiki Herb Garden',
    'Repos dans un hamac',
    'Les dernières lueurs au port'
  ],
  video: 'https://youtu.be/PZtcrqCfLb0?feature=shared'
},
{
  id: 't18',
  date: 'Jour 18 (21 183 pas)',
  title: 'Quartier Nakazakicho et balade au Yodogawa Park',
  description:
    'Je découvre d’abord Nakazakicho, quartier calme aux ruelles étroites, maisons anciennes et petites boutiques indépendantes. Coffee shops, friperies et objets faits main. Je poursuis ensuite vers le Yodogawa Park, au nord de la ville. L’ambiance y est plus brute que prévue : ponts ferroviaires, avions réguliers et décor presque industriel. Quelques couples pique-niquent malgré tout, et je reste un moment à écouter les oiseaux entre deux passages de train. Je rentre finalement à pied sous une fine pluie, histoire de me perdre dans les rues d’Osaka.',
  bullets: [
    'Quartier Nakazakichō',
    'Yodogawa Park',
    'Retour à pied sous la pluie'
  ],
  video: 'https://youtube.com/shorts/7IiyJyYYVH8?si=wdLXefBCtSYC7wL4'
},
{
  id: 't19',
  date: 'Jour 19 (18 252 pas)',
  title: 'Ikuno Korea Town',
  description:
    'Direction l’est d’Osaka, et plus précisément Ikuno. Ici, pas de grand monument ni d’attraction majeure, mais des quartiers résidentiels et une ambiance plus quotidienne. Je découvre le Ikuno Korea Town, petit marché coréen animé qui me rappelle mon voyage en Corée du Sud.',
  bullets: [
    'Balade dans Ikuno-ku',
    'Osaka Ikuno Korea Town'
  ],
  video: 'https://youtube.com/shorts/JJYcCeqcLZM?si=hUtPimvd4LY2c742'
},
{
  id: 't20',
  date: 'Jour 20 (26 160 pas)',
  title: 'Randonnée à Minoo et temple des Daruma',
  description:
    'Dimanche randonnée à Minoo, au nord d’Osaka. Après une marche facile à travers la forêt, j’arrive à la célèbre cascade de Minoo (33 mètres de haut), où un arc-en-ciel se forme au pied de l’eau. Je poursuis ensuite jusqu’au temple Katsuo-ji, surnommé le temple de la victoire, connu pour ses milliers de Daruma dispersés dans les jardins et sur les marches. Perché dans la montagne, l’endroit est magnifique. Rencontre surprise en marchant : une famille de singes sur le chemin.',
  bullets: [
    'Cascade de Minoo',
    'Temple Katsuo-ji et ses milliers de Daruma',
    'Randonnée en forêt',
    'Retour sous les dernières lueurs du jour entre lanternes et singes'
  ],
  video: 'https://youtu.be/SW4cmA29Q_Y?si=OOQvrd5jkd3w5Ls5'
},
{
  id: 't21',
  date: 'Jour 21 (14 555 pas)',
  title: 'Dernière balade à Dōtonbori',
  description:
    'Dernière vraie balade à Dōtonbori avant mon départ d’Osaka dans quelques jours. Cette fois, je prends simplement le temps d’observer et de m’imprégner une dernière fois de ce quartier iconique.',
    video: 'https://youtube.com/shorts/dkOmhTOh3kA?si=GenAmT6uR6e8Kinz'
},
{
  id: 't22',
  date: 'Jour 22 (1 749 pas)',
  title: 'Pluie, tri et nouveau projet',
  description:
    'Après-midi pluvieuse et changement de programme : le musée prévu est fermé le mardi, je reporte donc la visite au lendemain. J’en profite pour avancer sur la conception visuelle de mon nouveau projet, qui devrait voir le jour dans quelques mois.',
},
{
  id: 't23',
  date: 'Jour 23 (22 752 pas)',
  title: 'Osaka Municipal Housing Museum et Nakanoshima Museum of Art (NAKKA)',
  description:
    'Je commence par le Osaka Municipal Housing Museum, qui reconstitue un village japonais de l’époque Edo en taille réelle. On se balade dans les ruelles, on entre dans les maisons, avec même une simulation du passage du jour à la nuit. La seconde partie présente des maquettes montrant l’évolution d’Osaka entre 1920 et 1960. L’après-midi, direction le Nakanoshima Museum of Art pour une exposition consacrée à Sarah Morris, entre toiles graphiques et films urbains. Je termine par une balade au Nakanoshima Rose Garden.',
  bullets: [
    'Village Edo reconstitué au Osaka Municipal Housing Museum',
    'Exposition Sarah Morris au Nakanoshima Museum of Art (NAKKA)',
    'Balade au Nakanoshima Rose Garden'
  ],
  video: 'https://youtube.com/shorts/H4LBBMd3-BY?si=duc83sEbTFjqft8g'
},
{
  id: 't24',
  date: 'Jour 24 (13 915 pas)',
  title: 'Le château du héron blanc à Himeji',
  description:
    'Excursion à Himeji pour découvrir le célèbre château du Héron Blanc, considéré comme le plus beau château du Japon. Classé à l’UNESCO. On peut monter à l’intérieur étage par étage, sans chaussures, pour découvrir la structure du bâtiment et ses systèmes de défense. Après la visite, je découvre le Koko-en Garden, un ensemble de jardins japonais paisibles situés juste à côté du château.',
  bullets: [
    'Le Château de Himeji, classé UNESCO, surnommé le “château du héron blanc"',
    'Balade au Koko-en Garden'
  ],
  video: 'https://youtube.com/shorts/TjXdLInvPIw?si=Llo2s3FidUaS_72P'
},
{
  id: 't25',
  date: 'Jour 25 (14 783 pas)',
  title: "L'Aquarium Kaiyukan",
  description:
    'Dernière activité à Osaka : la visite de Kaiyukan, l’un des plus grands aquariums du monde. Le bassin principal, représentant l’océan Pacifique, permet d’observer sur plusieurs étages des requins-baleines, des raies manta et de nombreux poissons. Après ce moment complètement zen, je termine la journée par la visite d’un garage de voitures japonaises mythiques.',
  bullets: [
    'Aquarium Kaiyukan (Bassin géant avec requins-baleines et raies manta)',
    'Visite du garage Mr. Hiro Car Studio',
  ],
  video: 'https://youtube.com/shorts/_GhDe4TO59c?si=AVM5ou9P58sldt0I'
},
{
  id: 't26',
  date: 'Jour 26 (8 484 pas)',
  title: 'Journée de transition : Osaka → Kyoto',
  description:
    'Départ d’Osaka en fin de matinée pour rejoindre Kyoto. Après un trajet tranquille en train local, j’arrive près de mon auberge située en plein centre-ville. Un peu d’appréhension au départ : c’est ma première expérience en auberge de jeunesse et en dortoir partagé. Finalement, la soirée commence très bien avec plusieurs rencontres à l’auberge.',
  bullets: [
    'Trajet Osaka → Kyoto',
    'Première expérience en auberge de jeunesse',
    'Dortoir partagé pour 14 jours',
    'Premières rencontres à l’auberge'
  ]
},
{
  id: 't27',
  date: 'Jour 27 (26 311 pas)',
  title: 'Premier réveil à l’auberge, premier jour entier à Kyoto',
  description:
    'Premier vrai jour à Kyoto. Je pars marcher sans objectif précis et découvre plusieurs petits sanctuaires et temples de quartier, avant de traverser la forêt sacrée Tadasu no Mori jusqu’au célèbre Shimogamo-jinja. Sur le chemin, j’aperçois aussi quelques cerisiers en fleurs et je fais une pause au Funaokayama Park pour profiter d’une vue sur la ville. La journée se termine dans les Kyoto Gyoen National Garden puis par un passage au Nishiki Market et dans la rue commerçante Teramachi.',
  bullets: [
    'Balade entre sanctuaires et temples de quartier',
    'Pause au Funaokayama Park',
    'Forêt sacrée Tadasu no Mori',
    'Fin de journée au Nishiki Market et Teramachi Market'
  ],
  video: 'https://youtube.com/shorts/5xCjiUUkQpI?si=Y3X7Zfu6p7AT6ffq'
},
{
  id: 't28',
  date: 'Jour 28 (19 235 pas)',
  title: 'Quartier Gion, geishas tour et balade dans le Kyoto historique',
  description:
    'Matinée guidée dans le quartier de Gion pour découvrir l’univers des geishas. Après la visite, je retrouve Alice pour un déjeuner improvisé et un café dans un petit établissement tenu par un propriétaire de 86 ans. L’après-midi se poursuit entre le temple Ryosoku-in, les ruelles historiques de Ninenzaka et le célèbre temple Kiyomizu-dera, avant de goûter mon premier matcha et de rentrer de nuit à travers les rues illuminées de lanternes.',
  bullets: [
    'Guide tour sur les geishas dans le quartier Gion',
    'Déjeuner et café avec Alice',
    'Balade dans Ninenzaka',
    'Visite du Kiyomizu-dera et premier matcha'
  ],
  video: 'https://youtube.com/shorts/F-OUMUUOZes?si=FYiaonhX1JhPBeI1'
},
{
  id: 't29',
  date: 'Jour 29 (24 142 pas)',
  title: 'Temples, musées, matcha et Ichiran Ramen',
  description:
    'Je commence par le temple Tō-ji et sa célèbre pagode en bois à cinq niveaux, la plus haute du Japon. Après une balade dans l’enceinte du temple et son petit musée, je me rends à Umekoji Park et au jardin japonais Suzaku Garden. Ensuite visite du Kyoto Railway Museum, un immense musée retraçant l’histoire du train au Japon avec locomotives à vapeur, anciens Shinkansen et wagons visitables. En fin de journée, je m’arrête pour un excellent matcha latte chez Matcha Sparkle Kyoto, passe par le Pokémon Center Kyoto, puis termine la soirée avec un ramen chez Ichiran Ramen.',
  bullets: [
    'Temple Tō-ji et sa pagode à cinq niveaux',
    'Umekoji Park et Suzaku Garden',
    'Kyoto Railway Museum',
    'Matcha latte chez Matcha Sparkle Kyoto',
    'Ramen chez Ichiran Ramen'
  ],
  video: 'https://youtube.com/shorts/neuzLI0HHY0?si=9fFSbIxNiCCHVVoo'
},
{
  id: 't30',
  date: 'Jour 30 (20 527 pas)',
  title: 'Château de Nijō et art moderne à Kyoto',
  description:
    'Départ en fin de matinée pour visiter le château de Nijō, ancienne résidence du shogun Tokugawa à Kyoto. Puis balade dans les jardins du domaine (Honmaru Garden, Seiryu-en et Ninomaru Garden) je poursuis la journée au Kyoto Museum pour découvrir l’histoire de la ville et sa culture. Je termine ensuite par une exposition d’avant-garde japonaise (1948–1970) au Kyoto City KYOCERA Museum of Art, consacrée à des artistes ayant cherché à casser les codes de l’art traditionnel après-guerre. La journée se conclut par une promenade le long de la rivière Kamo-gawa avant de rentrer à l’auberge.',
  bullets: [
    'Visite du château de Nijō',
    'Kyoto Museum',
    'Exposition d’avant-garde au Kyoto City KYOCERA Museum of Art'
  ],
  video: 'https://youtube.com/shorts/Sq9eCEYUl8I?si=Fxrow4H5wCa-tl5N'
},
{
  id: 't31',
  date: 'Jour 31 (28 327 pas)',
  title: 'Temples, chemin de la philosophie et rencontres',
  description:
    'Je commence la journée au Nanzen-ji, un grand temple entouré de nature, connu pour son  aqueduc en pierre et le canal de Biwa qui passe par la. Je découvre par hasard le temple Eikan-do Zenrin-ji. Je poursuis ensuite vers le petit sanctuaire Otoyo Shrine, niché au pied de la forêt. À partir de là, j’emprunte le célèbre Philosopher’s Path, jusqu’au Ginkaku-ji, le Silver Pavilion. La journée se termine par un burger chez Daruma Burger, où je fais la rencontre de Lian, un Canadien d’origine chinoise, avec qui je discute longuement avant qu’il ne parte prendre son train pour Osaka.',
  bullets: [
    'Temple Nanzen-ji et son aqueduc',
    'Eikan-do Zenrin-ji et jardin japonais',
    'Philosopher’s Path jusqu’au Ginkaku-ji',
    'Rencontre avec Lian au Daruma Burger'
  ],
  video: 'https://youtu.be/cKvZzLOoJWo'
},
{
  id: 't32',
  date: 'Jour 32 (19 206 pas)',
  title: 'Plusieurs temples et Kyoto National Museum',
  description:
    'Journée nuageuse passée entre temples, musée et balade dans l’est de Kyoto. Après la visite de Sanjūsangen-dō, je me réfugie au Kyoto National Museum avant de continuer la journée en explorant plusieurs temples et parcs autour de Higashiyama.',
  bullets: [
    'Sanjūsangen-dō et ses 1001 statues de Kannon',
    'Kyoto National Museum',
    'Monument Mimizuka et Rokuharamitsu-ji',
    'Temple Rokuharamitsu-ji',
    'Maruyama Park et Yasaka Shrine',
    'Temple Chōraku-ji et Ōtani Sobyo',
    'Temple Kōdai-ji et sa petite forêt de bambous'
  ],
  video: 'https://youtube.com/shorts/dP75Rs5VNjQ?si=0evCo5r620rg0BG2'
},
{
  id: 't33',
  date: 'Jour 33 (12 657 pas)',
  title: 'Excursion au Miho Museum',
  description:
    'Visite du Miho Museum, un musée spectaculaire perdu en pleine nature. Entre architecture impressionnante, collections antiques et vue sur les montagnes.',
  bullets: [
    'Visite du musée de Miho',
    'Matcha latte au Pine View Tea Room'
  ],
  video: 'https://youtube.com/shorts/bKKU6ZTtAU8?si=owNOkg6xqLLwRLVN'
},
{
  id: 't34',
  date: 'Jour 34 (19 878 pas)',
  title: 'Manga Museum et soirée improvisée',
  description:
    'Journée tranquille au Kyoto International Manga Museum avant une longue balade dans les jardins impériaux de Kyoto. La soirée prend finalement une tournure inattendue après une rencontre à l’auberge qui se transforme en nuit de discussions, de jeux et de bières dans la ville.',
  bullets: [
    'Visite du Kyoto International Manga Museum',
    'Lecture du premier tome de Naruto',
    'Balade dans les Kyoto Imperial Palace Gardens',
    'Rencontre et soirée avec Liron et Itay ',
  ],
  video: 'https://youtube.com/shorts/FxB653FmsPo?si=WUQBsHhBTaqaOICY'
},
{
  id: 't35',
  date: 'Jour 35 (20 565 pas)',
  title: 'Fushimi Inari et jardins du sanctuaire Heian',
  description:
    "Après la soirée d'hier soir, je pars découvrir le célèbre sanctuaire Fushimi Inari et ses milliers de torii rouges. En m’éloignant de la foule, la balade devient beaucoup plus calme. La journée se termine paisiblement dans les magnifiques jardins du sanctuaire Heian.",
  bullets: [
    'Sanctuaire Fushimi Inari Taisha et ses torii rouges',
    'Visite du temple Tōfuku-ji',
    'Visite du sanctuaire Heian Shrine et ses jardins japonais',
  ],
  video: 'https://youtube.com/shorts/0OZwe8xaroA?si=N1TE2InEFmnFIDIN'
},
{
  id: 't36',
  date: 'Jour 36 (31 537 pas)',
  title: 'Rencontres et discussions à Kyoto',
  description:
    'Je passe la journée avec Itay, rencontré quelques jours plus tôt, entre visites, repas et longues discussions. Entre rires, échanges sur le voyage et sujets plus profonds, la journée se prolonge le soir avec de nouvelles rencontres et une balade nocturne dans Kyoto.',
  bullets: [
    'Visite du Kinkaku-ji (Pavillon d’Or)',
    'Déjeuner dans un restaurant d’udon',
    'Balade dans les Kyoto Imperial Palace Gardens',
    'Café chez Drip & Drop Coffee Supply',
    'Dîner (omurice)',
    'Rencontre avec Mihail et soirée dans Kyoto'
  ],
  video: 'https://youtube.com/shorts/KhH-9DSZmO8?si=PJO93w7zgK_g-PC7'
},
{
  id: 't37',
  date: 'Jour 37 (13 238 pas)',
  title: 'Arashiyama, forêt de bambous et Monkey Park',
  description:
    'Direction le quartier d’Arashiyama pour une journée entre nature et balade. Si la célèbre forêt de bambous est un peu décevante, l’ambiance générale du quartier, entre rivière, montagnes et temples, rend la visite très agréable. La journée se termine tranquillement sous la pluie.',
  bullets: [
    'Discussion matinale avec une prof chinoise à l’auberge',
    'Arashiyama forêt de bambous',
    'Balade dans le quartier Arashiyama le long de la rivière',
    'Traversée du Togetsukyo Bridge',
    'Iwatayama Monkey Park et vue sur Kyoto'
  ],
  video: 'https://youtube.com/shorts/PgKwRfVvMIY?si=4hvUIAjODYP7pVPh'
},
{
  id: 't38',
  date: 'Jour 38 (21 034 pas)',
  title: 'Lessive, longue balade le long de la Kamo River et lecture',
  description:
    'Lessive, préparation du départ et longue balade le long de la Kamo River.',
  bullets: [
    'Lessive et préparation du sac',
    'Longue balade le long de la Kamo River',
    'Lecture à l’auberge en fin de journée'
  ],
  video: 'https://youtube.com/shorts/CruLWmpWx0A?si=fbMBgM4VNaoVtwAG'
},
{
  id: 't39',
  date: 'Jour 39 (22 263 pas)',
  title: 'Dernière journée à Kyoto',
  description:
    'Dernier jour à Kyoto entre architecture, jardins et balade le long de la Kamo River. La journée se termine par une dernière exploration nocturne des quartiers iconiques de la ville histoire de finir en beauté',
  bullets: [
    'Garden of Fine Arts Kyoto',
    'Kyoto Botanical Garden et serre tropicale',
    'Balade le long de la Kamo River',
    'Pontocho Alley de nuit',
    'Quartier de Gion de nuit : Magnifique'
  ],
  video: 'https://youtu.be/jxiSNjjZ-F4'
},
{
  id: 't40',
  date: 'Jour 40 (10 681 pas)',
  title: 'Journée de transition Kyoto → Hiroshima',
  description:
    'Long trajet en bus entre Kyoto et Hiroshima, rythmé par lecture, repos et paysages de campagne. Arrivée en fin de journée et première découverte d’une nouvelle auberge avant une soirée calme.',
  bullets: [
    'Trajet en bus Kyoto → Hiroshima (7h)',
    'Installation dans une nouvelle auberge',
    'Balade nocturne à Hiroshima'
  ],
  video: 'https://youtube.com/shorts/RnQf5JA7SB8?si=f1l703zQudid6gqZ'
}, 
{
  id: 't41',
  date: 'Jour 41 (13 547 pas)',
  title: "Musées d'art et jardin Shukkeien",
  description:
    "Première journée à Hiroshima entre musées et jardin japonais.",
  bullets: [
    'Hiroshima Prefectural Art Museum',
    'Shukkeien Garden et cerisiers en fleurs',
    'Hiroshima Museum of Art'
  ],
  video: 'https://youtube.com/shorts/8Mv2aYQfJR0?si=wXtSNYrz6hC9aPmU'
},
{
  id: 't42',
  date: 'Jour 42 (21 699 pas)',
  title: 'Miyajima et ascension du mont Misen',
  description:
    "Journée exceptionnelle sur l’île de Miyajima entre sanctuaire, randonnée et moments suspendus. L’ascension du mont Misen offre des panoramas incroyables, jusqu’à un coucher de soleil vécu seul, dans un silence presque irréel.",
  bullets: [
    'Île de Miyajima et ferry',
    'Sanctuaire Itsukushima-jinja',
    'Daims en liberté',
    'Randonnée jusqu’au mont Misen',
    'Observatoires et vue panoramique',
    'Moment seul au sommet',
    'Coucher de soleil en montagne',
    'Descente de nuit en forêt',
    'Retour au sanctuaire à marée basse'
  ],
  video: 'https://youtu.be/iPlqOAfwD3g'
},
{
  id: 't43',
  date: 'Jour 43 (24 206 pas)',
  title: 'Mitaki-dera et randonnée improvisée',
  description:
    "Journée qui se transforme en belle surprise avec une randonnée improvisée dans les montagnes d’Hiroshima. Entre temple, forêt de bambous sauvage et panoramas sur la ville, une nouvelle exploration inattendue.",
  bullets: [
    'Dôme de Genbaku (Hiroshima Peace Memorial)',
    'Temple Mitaki-dera en pleine nature',
    'Forêt de bambous sauvage',
    'Randonnée improvisée en montagne',
    'Sommet du mont Sōkasan (356m)',
    'Vue panoramique sur Hiroshima et Miyajima',
    'Deuxième sommet : mont Takatoge (237,4m)',
    'Retour au calme dans les quartiers locaux'
  ],
  video: 'https://youtube.com/shorts/iGwJJDRNqcY?si=_ixnw9jAYL-pr7uT'
},
{
  id: 't44',
  date: 'Jour 44 (11 138 pas)',
  title: 'Journée pluvieuse, art contemporain et manga à Hiroshima',
  description:
    "Journée calme sous la pluie entre art contemporain et manga.",
  bullets: [
    'Hiroshima City Museum of Contemporary Art',
    'Expositions : destruction, perception et mémoire',
    'Hiroshima City Manga Library',
    'Lecture du tome 1 de One Piece',
    'Centre commercial EDION (high-tech et jeux vidéo)'
  ],
  video: 'https://youtube.com/shorts/uFIvw9lqBbk?si=btP57q17fP5Dn1e9'
},
{
  id: 't45',
  date: 'Jour 45 (15 001 pas)',
  title: 'Hiroshima Peace Memorial Museum et friperie',
  description:
    "Découverte du musée le plus important de la ville, balade dans le parc et découverte de plusieurs friperies",
  bullets: [
    'Hiroshima Gate Park (petit-déjeuner)',
    'Hiroshima Castle (extérieur)',
    'Hiroshima Peace Memorial Museum',
    'Hiroshima Peace Memorial Park',
    'Friperies et boutiques de seconde main',
    'Magasin de vinyles'
  ],
  video: 'https://youtube.com/shorts/p9EhbgEydhI?si=K8ts4M6eA8UmUh13'
},
{
  id: 't46',
  date: 'Jour 46 (22 252 pas)',
  title: 'Dernier jour à Hiroshima',
  description:
    "Dernière journée tranquille à Hiroshima entre balades, sieste sous les cerisiers en fleurs.",
  bullets: [
    'Balade le long de la Kyobashi River',
    'Hiroshima Peace Pagoda',
    'Hiroshima Toshogu Shrine',
    'Hijiyama Park et sieste sous les cerisiers',
    'Repas ramen tonkotsu chez Gaba Kamiyacho',
    'Balade nocturne et salles d’arcade'
  ],
  video: 'https://youtube.com/shorts/HzUAm7_VCus?si=LL0vpuYy0djcSgbG'
},
{
  id: 't47',
  date: 'Jour 47 (18 827 pas)',
  title: 'Journée de transition Hiroshima → Fukuoka',
  description:
    'Journée de transition entre Hiroshima et Fukuoka avec un petit défi matinal réussi. Première immersion dans la ville entre festival des sakura, ambiance street food et découverte du quartier animé de Tenjin.',
  bullets: [
    'Trajet en bus Hiroshima → Fukuoka (4h30)',
    'Installation à l’auberge et première balade',
    'Festival des sakura à Maizuru Park',
    'Expérience dans un yatai (ramen + bière)',
    'Découverte du quartier de Tenjin',
  ],
  video: 'https://youtube.com/shorts/yryA5aNH5W4?si=SNvoSOnePaUl8yWO'
},
{
  id: 't48',
  date: 'Jour 48 (25 029 pas)',
  title: 'Première journée à Fukuoka',
  description:
    "Première journée complète à Fukuoka entre art contemporain, balade autour du lac Ohori et découverte des temples de la ville. La journée se termine dans l'ambiance animée de Canal City.",
  bullets: [
    'Fukuoka Art Museum',
    'Pause au Café AQUAM face au lac',
    'Ohori Park et Japanese Garden',
    'Temples de Gion : Tocho-ji, Shofuku-ji',
    'Sanctuaire Kushida-jinja',
    'Canal City Hakata',
    'Starbucks et burger chez Masajiro Burger'
  ],
  video: 'https://youtube.com/shorts/1IvmU0Jyq0g?si=tuoeEuDZ__SgqdEN'
},
{
  id: 't49',
  date: 'Jour 49 (22 595 pas)',
  title: 'Balade entre plage et quartiers locaux',
  description:
    'Journée entre parcs, plages et quartiers locaux à Fukuoka. Météo changeante et pauses café.',
  bullets: [
    'Nishi Park et sanctuaire Terumo-jinja',
    'Fukuhama Beach et Seaside Momochi',
    'Pause face à la mer (Momochi Seaside Park)',
    'Fukuoka Tower et Momochihama Beach',
    'Atago Beach Park',
    'Sanctuaire Washio Atago (vue sur la ville)',
    'Hakata Machiya Folk Museum',
    'Pause au Fuk Coffee',
    'Bar modern jazz : Jab pour finir la journée'
  ],
  video: 'https://youtube.com/shorts/t6klgDrV3Qs?si=HtP-ZvVo1y_Fano6'
},
{
  id: 't50',
  date: 'Jour 50 (16 913 pas)',
  title: 'Escapade à Palm Beach Itoshima',
  description:
    'Excursion à Itoshima entre météo capricieuse, ambiance surf et réflexions personnelles. Malgré la pluie, une journée marquée par des paysages marins, des pauses chill et une belle leçon : profiter et dire “pourquoi pas”.',
  bullets: [
    'Palm Beach Itoshima (ambiance surf sous la pluie)',
    'Honu Cafe Itoshima (fluffy pancakes)',
    'Sakurai Futamigaura Meoto Iwa (torii face à la mer)',
    'Spot du Heart Tree et vue sur la baie',
    'Surfers Market Itoshima (shopping)',
    'Spot “hawaïen” (hamacs, balançoires)',
    'Pause au Surf Side Cafe Itoshima',
  ],
  video: 'https://youtube.com/shorts/xwFvmcnvG-Y?si=eqG6V7xY0M401FKM'
},
{
  id: 't51',
  date: 'Jour 51 (12 962 pas)',
  title: 'Ville de Dazaifu, musée et lecture',
  description:
    'Journée entre sanctuaire, musée et lecture.',
  bullets: [
    'Dazaifu Tenman-gū (sanctuaire dédié à Tenjin)',
    'Dazaifu Tenmangu Museum',
    'Kyushu National Museum (échanges Japon-Asie)',
    'Pause au café du musée',
    'Lamplight Books Cafe Fukuoka',
  ],
  video: 'https://youtube.com/shorts/DZW1ePEF1P8?si=Rt100--aAkUbxao0'
},
{
  id: 't52',
  date: 'Jour 52 (27 024 pas)',
  title: 'L’île de Nokono et Fukuoka Tower',
  description:
    'Journée entre nature et panorama : exploration libre de l’île de Nokono, puis soirée en hauteur avec vue sur Fukuoka.',
  bullets: [
    'Accès à l’île de Nokono (marche, bus, ferry)',
    'Exploration à pied hors des sentiers touristiques',
    'Plage isolée et pause face à la mer',
    'Marche instinctive à travers champs et villages',
    'Nokonoshima Island Park (fleurs et panorama)',
    'Pause bière avec vue sur la mer',
    'Artisanat local et stands dans le parc',
    'Fukuoka Tower au coucher de nuit',
    'Dîner chez Sushiro (premiers sushis du voyage)',
  ],
  video: 'https://youtu.be/LGYfH3zGLgk'
},
{
  id: 't53',
  date: 'Jour 53 (21 940 pas)',
  title: 'Dernière journée à Fukuoka',
  description:
    'Une dernière journée guidée par l’instinct entre temple, nature et rencontres. Entre exploration improvisée dans la campagne et soirée mémorable, tout s’enchaîne naturellement pour conclure ce séjour à Fukuoka.',
  bullets: [
    'Excursion au temple Nanzo-in (bouddha allongé)',
    'Découverte du barrage de Narufuchi',
    'Dîner chez Shin Shin (ramen)',
    'Bar reggae intimiste et rencontre avec Chris et Violet',
    'Découverte du saké et highball',
    'Soirée jusqu’à 2h et souvenir Polaroid'
  ],
  video: 'https://youtu.be/b36BLc9SqyE'
},
{
  id: 't54',
  date: 'Jour 54 (20 471 pas)',
  title: 'Journée de transition Fukuoka --> Nagasaki',
  description:
    'Une journée de transition entre Fukuoka et Nagasaki.',
  bullets: [
    'Trajet en bus de Fukuoka à Nagasaki (2h50)',
    'Installation à l’auberge Casa Blanca',
    'Découverte du parc Tateyama et ses lanternes rouges',
    'Dîner chez CoCo Burgers & Sports Bar',
    'Balade nocturne vers Nagasaki Seaside Park'
  ],
  video: 'https://youtube.com/shorts/m9F28aobB8w?si=t9C31OPe4ze2Pb4t'
},
{
  id: 't55',
  date: 'Jour 55 (24 721 pas)',
  title: 'Une journée irréelle sur la côte ouest de Nagasaki',
  description:
    'Exploration sauvage de la côte nord-ouest de Nagasaki entre marche, tunnels, villages isolés et plages. Sensation de liberté totale et un coucher de soleil mémorable.',
  bullets: [
    'Exploration de la côte nord-ouest de Nagasaki',
    'Marche entre tunnels et routes isolées',
    'Cap Fukuda et Nagasaki Sunset Marina',
    'Rencontre improbable avec un aigle',
    'Plage de Kakidomari et baignade improvisée',
    'Coucher de soleil face à la mer',
    'Balade de 18 km en totale liberté'
  ],
  video: 'https://youtu.be/G4QU8jXA2A4'
},
{
  id: 't56',
  date: 'Jour 56 (15 277 pas)',
  title: 'Culture et mémoire à Nagasaki',
  description:
    'Une journée autour de l’histoire à Nagasaki. Entre musées, lieux de mémoire et découvertes culturelles, la visite prend une dimension forte, ponctuée par une rencontre et des moments plus calmes tournés vers l’art et la lecture.',
  bullets: [
    'Musée de la bombe atomique de Nagasaki',
    'Atomic Bomb Hypocenter Monument',
    'Rencontre avec un Japonais d’Isahaya',
    'Parc de la Paix',
    'Cathédrale d’Urakami',
    'Musée des 26 Martyrs du Japon',
    'Musée préfectoral d’art de Nagasaki'
  ],
  video: 'https://youtube.com/shorts/9y5nwsOJ9xQ?si=c0suEzf78zq35CdN'
},
{
  id: 't57',
  date: 'Jour 57 (25 498 pas)',
  title: 'Glover Garden, discussion avec un artiste peintre et coucher de soleil',
  description:
    'Journée lumineuse entre balade au Glover Garden, rencontre avec l’artiste Kiyoto Ueda et ascension du mont Inasa pour un coucher de soleil spectaculaire sur la ville.',
  bullets: [
    'Petit-déjeuner au Seaside Park',
    'Visite du Glover Garden et vue sur le port',
    'Rencontre et échanges avec l’artiste Kiyoto Ueda',
    'Mont Inasa : panorama 360° et coucher de soleil',
    'Observation nocturne de la ville illuminée'
  ],
  video: 'https://youtu.be/xoCj5_CexbM'
},
{
  id: 't58',
  date: 'Jour 58 (30 170 pas)',
  title: 'Dernière aventure sauvage à Nagasaki',
  description:
    'Une dernière journée marquée par l’imprévu et la liberté. Entre errance le long de la côte, exploration de villages reculés et coucher de soleil en solitaire sur une plage déserte, cette journée symbolise parfaitement la fin d’une partie du voyage guidé par l’instinct.',
  bullets: [
    'Trajet en bus perturbé et arrivée improvisée en pleine campagne',
    'Marche le long de la côte entre villages et criques',
    'Visite rapide du musée de Gunkanjima et du musée des dinosaures',
    'Ascension jusqu’au mont Gongen et vue panoramique',
    'Coucher de soleil seul sur la plage de Wakimisaki Beach'
  ],
  video: 'https://youtu.be/mWgoYqBEGg0'
},
{
  id: 't59',
  date: 'Jour 59 (18 020 pas)',
  title: 'Arrivée à Tokyo et premières lumières d’Akihabara',
  description:
    'Une journée de transition marquée par un long trajet vers Tokyo et une arrivée presque cinématographique face au Mont Fuji. Entre premières impressions de la capitale et immersion dans les néons d’Akihabara, cette journée lance la dernière étape du voyage.',
  bullets: [
    'Trajet en shinkansen de Nagasaki à Tokyo',
    'Aperçu du Mont Fuji depuis le train',
    'Installation à l’auberge dans le quartier d’Ueno',
    'Balade dans le quartier d’Akihabara',
    'Sessions de jeux dans les salles d’arcade',
    'Dîner dans un restaurant de ramen'
  ],
  video: 'https://youtube.com/shorts/BWpKcArQ0jI?si=K6-992Kxs6vMxWLo'
},
{
  id: 't60',
  date: 'Jour 60 (17 687 pas)',
  title: 'Journée culturelle et pluvieuse à Tokyo',
  description:
    'Une journée culturelle au cœur de Tokyo, rythmée par les musées, les expositions et les cafés. Entre découvertes artistiques et ambiance pluvieuse dans le parc d’Ueno.',
  bullets: [
    'Visite du Musée national de Tokyo',
    'Brunch chez Kayaba Coffee',
    'Balade dans le parc d’Ueno',
    'Visite du Tokyo Metropolitan Art Museum',
    'Exposition sur la peinture suédoise',
    'Pause café chez St.Marc café',
    'Dîner ramen au canard chez Ramen Kamo to Negi Ueno Okachimachi Main Store'
  ],
  video: 'https://youtube.com/shorts/xO2tBOn6IWE?si=pR7-wsj9h7vqc4QD'
},
{
  id: 't61',
  date: 'Jour 61 (23 761 pas)',
  title: 'Le Mont Fuji',
  description:
    'Une journée attendue depuis des mois, découverte du Mont Fuji dans des conditions parfaites. Entre trajet, imprévus et contemplation face au lac Kawaguchiko.',
  bullets: [
    'Trajet en bus vers Fujikawaguchiko',
    'Premiers regards sur le Mont Fuji',
    'Passage au spot du Lawson',
    'Balade autour du lac Kawaguchiko',
    'Découverte du parc Oishi',
    'Contemplation du Mont Fuji face au lac',
    'Dîner burger wagyu',
    'Balade nocturne à Asakusa et Sumida Park'
  ],
  video: 'https://youtube.com/shorts/I80FfEBUfPU?si=GiIAhGGpkqQgCQGo'
},
{
  id: 't62',
  date: 'Jour 62 (19 097 pas)',
  title: 'Quartier Asakusa et Sumida',
  description:
    'Une journée paisible à Tokyo entre gourmandise, culture et balades urbaines.',
  bullets: [
    'Petit-déjeuner chez Age.3',
    'Sumida Park',
    'Balade autour de la Tokyo Skytree',
    'Visite du Tobacco & Salt Museum',
    'Découverte du Oyokogawa Water Park',
    'Pause au Kinshi Park',
    'Passage par le Senso-ji et Asakusa Shrine',
    'Dîner dans un restaurant de ramen'
  ],
  video: 'https://youtube.com/shorts/szYjc1xGfrc?si=j01gOe8NrPyytgBY'
}


    ],
    markers: [
      {
  id: 'm174',
  lat: 34.6455017379965,
  lng: 135.49769067327392,
  title: 'Mon logement à Osaka',
  category: 'Logement',
  description: 'Logement pour trois semaines à Osaka, proche du centre-ville avec une station de métro accessible en 4 minutes à pied.',
  emoji: '🏠'
},
{
  id: 'm175',
  lat: 34.64223589639225,
  lng: 135.49627937268025,
  title: 'Manpumen Ramen',
  category: 'Restaurant',
  description: 'Premier repas japonais et premier repas à Osaka, quelques heures après l’atterrissage. Cuisine traditionnelle et ramen excellents.',
  emoji: '🍜'
},
{
  id: 'm176',
  lat: 34.66849765768809,
  lng: 135.50169713797519,
  title: 'GIGO Osaka Dotonbori Main',
  category: 'Divertissement',
  description: 'Grande salle d’arcade emblématique sur plusieurs étages, située en plein cœur de Dōtonbori.',
  emoji: '🕹️'
},
{
  id: 'm177',
  lat: 34.66873039050631,
  lng: 135.50129782409002,
  title: 'Dōtonbori',
  category: 'Quartier',
  description: 'Quartier ultra animé et lieu iconique d’Osaka, connu pour ses néons, ses restaurants et son ambiance nocturne.',
  emoji: '🌃'
},
{
  id: 'm178',
  lat: 34.66161489148762,
  lng: 135.50193489660612,
  title: 'Namba Parks',
  category: 'Shopping',
  description: 'Grand centre commercial mêlant boutiques et restaurants, avec un immense jardin en rooftop au cœur de la ville.',
  emoji: '🛍️'
},
{
  id: 'm179',
  lat: 34.66764740753815,
  lng: 135.50073758242496,
  title: 'Namba HIPS',
  category: 'Divertissement',
  description: 'Immeuble dédié aux jeux et loisirs, connu notamment pour ses étages de machines à sous et d’arcade.',
  emoji: '🎰'
},
{
  id: 'm180',
  lat: 34.661562482212624,
  lng: 135.49670657881524,
  title: 'Namba Yasaka Jinja',
  category: 'Temple',
  description: 'Sanctuaire shinto emblématique, célèbre pour son immense tête de lion sculptée, symbole de protection et de chance.',
  emoji: '🦁'
},
{
  id: 'm181',
  lat: 34.667943633459586,
  lng: 135.50246826715875,
  title: 'Hōzen-ji Temple',
  category: 'Temple',
  description: 'Petit temple bouddhiste caché dans une ruelle de Namba, connu pour sa statue recouverte de mousse et son atmosphère paisible.',
  emoji: '🧘'
},
{
  id: 'm182',
  lat: 34.61239773384149,
  lng: 135.49376004839405,
  title: 'Sanctuaire Sumiyoshi-taisha',
  category: 'Temple',
  description: 'Grand sanctuaire shinto ancien et très calme, à l’écart des zones touristiques.',
  emoji: '⛩️'
},
{
  id: 'm183',
  lat: 34.612547436215294,
  lng: 135.4881620707508,
  title: 'Sumiyoshi Park',
  category: 'Parc',
  description: 'Parc agréable situé juste à côté du sanctuaire Sumiyoshi-taisha.',
  emoji: '🌳'
},
{
  id: 'm184',
  lat: 34.687262586678415,
  lng: 135.52585191439823,
  title: 'Château d’Osaka',
  category: 'Monument',
  description: 'Magnifique château emblématique d’Osaka, abritant un musée à l’intérieur et offrant une vue panoramique à 360 degrés depuis son sommet.',
  emoji: '🏯'
},
{
  id: 'm185',
  lat: 34.669306323390366,
  lng: 135.50264491288976,
  title: 'Don Quijote Dotonbori',
  category: 'Shopping',
  description: 'Épicerie géante et magasin incontournable de Dōtonbori, rempli de snacks, boissons, souvenirs et goodies en tout genre.',
  emoji: '🛍️'
},
{
  id: 'm186',
  lat: 34.650094817471505,
  lng: 135.51035168337629,
  title: 'Musée municipal des beaux-arts d’Osaka',
  category: 'Musée',
  description: 'Musée d’art proposant des expositions permanentes et temporaires, situé à proximité du parc Tennōji.',
  emoji: '🖼️'
},
{
  id: 'm187',
  lat: 34.64965930259528,
  lng: 135.51158489859688,
  title: 'Keitakuen Garden',
  category: 'Jardin',
  description: 'Jardin japonais paisible de style zen, accessible pour quelques yens, idéal pour une pause calme en ville.',
  emoji: '🌿'
},
{
  id: 'm188',
  lat: 34.64854611443675,
  lng: 135.51104644513444,
  title: 'Parc Tenshiba',
  category: 'Parc',
  description: 'Parc public moderne avec un grand espace vert ouvert, parfait pour se détendre ou pique-niquer.',
  emoji: '🌳'
},
{
  id: 'm189',
  lat: 34.652502332748185,
  lng: 135.50630765233424,
  title: 'Quartier Shinsekai',
  category: 'Quartier',
  description: 'Quartier populaire et animé d’Osaka, connu pour ses restaurants typiques autour de la tour Tsūtenkaku.',
  emoji: '🍢'
},
{
  id: 'm190',
  lat: 34.610417704100264,
  lng: 135.5226630228092,
  title: 'Osaka Museum of Natural History',
  category: 'Musée',
  description: 'Musée d’histoire naturelle d’Osaka, visite d’environ 45 minutes, axée sur les espèces qui cohabitent avec l’être humain.',
  emoji: '🦕'
},
{
  id: 'm191',
  lat: 34.6123227951416,
  lng: 135.52436756663778,
  title: 'Nagai Botanical Garden',
  category: 'Jardin',
  description: 'Jardin botanique vaste et soigné, proposant plusieurs types de jardins et ambiances végétales.',
  emoji: '🌺'
},
{
  id: 'm192',
  lat: 34.61258162366585,
  lng: 135.51999154259488,
  title: 'Parc Nagai',
  category: 'Parc',
  description: 'Grand parc multifonction avec stades d’athlétisme et de baseball, jardin botanique, musée, cafés et espaces pour enfants.',
  emoji: '🌳'
},
{
  id: 'm193',
  lat: 34.630740997466894,
  lng: 135.52143487329147,
  title: 'Momogaike Park',
  category: 'Parc',
  description: 'Petit parc de quartier agréable, idéal pour une courte pause au calme dans un environnement résidentiel.',
  emoji: '🌳'
},
  {
    id: 'm194',
    lat: 34.67318290231305,
    lng: 135.50075382605448,
    title: 'Pokémon Center Osaka DX',
    category: 'Shopping',
    description: 'Boutique Pokémon officielle avec peluches, figurines et de nombreux goodies Pokémon.',
    emoji: '🎮'
  },
  {
    id: 'm195',
    lat: 34.67222107252314,
    lng: 135.49788867563228,
    title: 'American Village',
    category: 'Quartier',
    description: 'Quartier fashion et alternatif, rempli de boutiques vintage, de friperies et de cafés.',
    emoji: '🧢'
  },
  {
    id: 'm196',
    lat: 34.65914202924077,
    lng: 135.50568558278147,
    title: 'Mandarake Grand Chaos',
    category: 'Shopping',
    description: 'Magasin culte sur 7 étages dédié aux figurines, mangas, DVD, CD et magazines.',
    emoji: '📚'
  },
  {
    id: 'm197',
    lat: 34.65930906413586,
    lng: 135.50550804834398,
    title: 'Joshin Super Kids Land Main Store',
    category: 'Shopping',
    description: 'Magasin de jouets spécialisé dans les figurines et surtout les miniatures de voitures, avions, hélicoptères et trains.',
    emoji: '🚗'
  },
  {
  id: 'm198',
  lat: 34.672501484719106,
  lng: 135.4986531555021,
  title: 'The Silver Ball Planet',
  category: 'Divertissement',
  description: 'Salle d’arcade entièrement dédiée aux flippers, avec des licences cultes de films et séries comme Pirates des Caraïbes, Avatar, James Bond, Star Wars, Le Parrain, Ghostbusters, Les Dents de la mer ou Terminator.',
  emoji: '🕹️'
},
  {
    id: 'm199',
    lat: 34.7025559359571,
    lng: 135.49595059660788,
    title: 'Quartier Umeda',
    category: 'Quartier',
    description: 'Quartier des affaires avec de nombreux gratte-ciel, centres commerciaux et hôtels.',
    emoji: '🏙️'
  },
  {
    id: 'm200',
    lat: 34.70387286588051,
    lng: 135.49491909725558,
    title: 'Grand Front Osaka',
    category: 'Shopping',
    description: 'Centre commercial divisé en plusieurs bâtiments : immense et impressionnant.',
    emoji: '🛍️'
  },
  {
    id: 'm201',
    lat: 34.70410419565637,
    lng: 135.4962686671602,
    title: 'Yodobashi Camera Umeda',
    category: 'Shopping',
    description: 'Centre commercial de 12 étages dédié à la tech, à l’électronique et au divertissement : absolument tout s’y trouve.',
    emoji: '📱'
  },
  {
    id: 'm202',
    lat: 34.70529599300235,
    lng: 135.4896526966079,
    title: 'Umeda Sky Building',
    category: 'Point de vue',
    description: 'Gratte-ciel emblématique avec observatoire. Je n’ai visité que le sous-sol et le rez-de-chaussée, qui abritent une rue souterraine de restaurants.',
    emoji: '🌆'
  },
  {
    id: 'm203',
    lat: 34.703665156338865,
    lng: 135.49255080521488,
    title: 'Ume Kita Park',
    category: 'Parc',
    description: 'Parc récent situé à la sortie des grands centres commerciaux du quartier Umeda.',
    emoji: '🌳'
  },
  {
    id: 'm204',
    lat: 34.67098670913208,
    lng: 135.49627704291913,
    title: 'Orange Street Osaka',
    category: 'Quartier',
    description: 'Petite rue regroupant des marques indépendantes, des designers et des pop-up stores.',
    emoji: '🧡'
  },
  {
    id: 'm205',
    lat: 34.67383137239933,
    lng: 135.4863376230307,
    title: 'Osaka Municipal Central Library',
    category: 'Bibliothèque',
    description: 'Grande bibliothèque municipale où j’ai lu une autobiographie de Michael J. Fox.',
    emoji: '📖'
  },
  {
    id: 'm206',
    lat: 34.68498528126861,
    lng: 135.49350495550266,
    title: 'Utsubo Park',
    category: 'Parc',
    description: 'Parc en longueur avec terrains de tennis et une zone paisible dotée de jets d’eau et de bancs.',
    emoji: '🌳'
  },
  {
    id: 'm207',
    lat: 34.6544650092532,
    lng: 135.51652447553948,
    title: 'Shitennō-ji',
    category: 'Temple',
    description: 'Temple bouddhiste calme avec un pavillon central très joli.',
    emoji: '⛩️'
  },
  {
    id: 'm208',
    lat: 34.66088909464782,
    lng: 135.50608777879737,
    title: 'Hero Gangu',
    category: 'Shopping',
    description: 'Boutique spécialisée dans les jouets et figurines, située dans le quartier Nipponbashi.',
    emoji: '🧸'
  },
  {
    id: 'm209',
    lat: 34.66069380982319,
    lng: 135.5060814683666,
    title: 'Volks Osaka Showroom',
    category: 'Shopping',
    description: 'Magasin réputé pour ses figurines, maquettes et produits de collection pour passionnés.',
    emoji: '🧩'
  },
  {
    id: 'm210',
    lat: 34.66196237910889,
    lng: 135.505056926054,
    title: 'Super Potato Osaka',
    category: 'Shopping',
    description: 'Magasin culte de jeux vidéo rétro avec consoles, cartouches et merchandising vintage.',
    emoji: '🎮'
  },
  {
    id: 'm211',
    lat: 34.660403694687666,
    lng: 135.50605604808706,
    title: 'Game Taito Station (Osaka Nipponbashi)',
    category: 'Activité',
    description: 'Grande salle d’arcade Taito Station avec de nombreuses bornes de jeux.',
    emoji: '🕹️'
  },
  {
    id: 'm212',
    lat: 34.660482861019084,
    lng: 135.5047422293262,
    title: 'Animate Osaka Nipponbashi',
    category: 'Shopping',
    description: 'Boutique spécialisée en anime, manga et produits dérivés dans le quartier otaku.',
    emoji: '📚'
  },
  {
    id: 'm213',
    lat: 34.682630615114746,
    lng: 135.52079079109458,
    title: 'Osaka Museum of History',
    category: 'Musée',
    description: 'Musée retraçant 1 400 ans d’histoire de la ville avec maquettes et reconstitutions de rues.',
    emoji: '🏛️'
  },
  {
    id: 'm214',
    lat: 34.682707260548014,
    lng: 135.52006123024077,
    title: 'NHK Osaka Hall',
    category: 'Activité',
    description: 'Exposition temporaire sur la série "The Ghost Writer Wife" avec décors ayant servi au tournage.',
    emoji: '🏛️'
  },
  {
    id: 'm215',
    lat: 34.64533218948459,
    lng: 135.5116829966054,
    title: "Abeno Q's Mall",
    category: 'Shopping',
    description: 'Centre commercial dans lequel je me suis perdu en essayant de rentrer à mon logement.',
    emoji: '🛍️'
  },
  {
  id: 'm216',
  lat: 34.68275901229638,
  lng: 135.532093266174,
  title: 'Osaka Castle Park Fountain',
  category: 'Balade',
  description: 'Fontaine située dans le parc entourant le château d’Osaka.',
  emoji: '⛲'
},
  {
    id: 'm217',
    lat: 34.805417444080994,
    lng: 135.54023174996988,
    title: "Expo '70 Commemorative Park Baseball Stadium",
    category: 'Sport',
    description: 'Stade de baseball situé dans le parc de l’Expo ’70, où j’ai assisté à un match amateur avec une ambiance très familiale.',
    emoji: '⚾'
  },
  {
    id: 'm218',
    lat: 34.809520379815865,
    lng: 135.53240841679084,
    title: 'Tour du Soleil',
    category: 'Monument',
    description: 'Grande sculpture emblématique construite pour l’Exposition universelle de 1970.',
    emoji: '🌞'
  },
  {
    id: 'm219',
    lat: 34.806434434107615,
    lng: 135.5288585131239,
    title: "Expo '70 Commemorative Park",
    category: 'Parc',
    description: 'Grand parc aménagé sur le site de l’Exposition universelle de 1970, très familial et agréable pour se promener.',
    emoji: '🌳'
  },
  {
  id: 'm220',
  lat: 34.61534632161243,
  lng: 135.5164620280286,
  title: 'Stade Yodoko Sakura',
  category: 'Sport',
  description: 'Stade où j’ai assisté, le 22 février, à un match de la J1 League : Cerezo Osaka vs Sanfrecce Hiroshima.',
  emoji: '⚽'
},
  {
    id: 'm221',
    lat: 34.68504983785237,
    lng: 135.8430122584435,
    title: 'Nara Park',
    category: 'Parc',
    description: "Célèbre parc abritant des milliers de daims en liberté, avec à l'intérieur, des temples, sanctuaires et lanternes traditionnelles.",
    emoji: '🦌'
  },
  {
    id: 'm222',
    lat: 34.68323493274157,
    lng: 135.83115688495047,
    title: 'Kōfuku-ji',
    category: 'Temple',
    description: 'Temple bouddhiste historique. Lors de ma visite, le bâtiment principal était en travaux et recouvert d’une bâche.',
    emoji: '⛩️'
  },
  {
    id: 'm223',
    lat: 34.688992792018176,
    lng: 135.83981579660718,
    title: 'Tōdai-ji',
    category: 'Temple',
    description: 'Temple bouddhiste fondé au VIIIe siècle, abritant l’une des plus grandes statues en bronze de Bouddha du Japon.',
    emoji: '⛩️'
  },
  {
    id: 'm224',
    lat: 34.6815492328206,
    lng: 135.84847055550247,
    title: 'Kasuga-taisha',
    category: 'Sanctuaire',
    description: 'Sanctuaire shinto fondé en 768, célèbre pour ses nombreuses lanternes en pierre et en bronze.',
    emoji: '⛩️'
  },
  {
    id: 'm225',
    lat: 34.67879079583667,
    lng: 135.85022100826373,
    title: 'Kobotaishi Gomadan',
    category: 'Temple',
    description: 'Endroit calme situé un peu après Kasuga-taisha, offrant une atmosphère paisible à l’écart de la foule.',
    emoji: '🌿'
  },
  {
    id: 'm226',
    lat: 34.680123044188115,
    lng: 135.83864258254428,
    title: 'Ukimido',
    category: 'Balade',
    description: 'Pavillon sur l’eau situé dans le parc. Lors de ma visite fin février, le bassin était à sec.',
    emoji: '🏞️'
  },
  {
    id: 'm227',
    lat: 34.68193778712299,
    lng: 135.82889910199916,
    title: 'Nakatanidou',
    category: 'Food',
    description: 'Boutique célèbre pour ses mochis japonais (gâteaux à base de riz) avec démonstrations de fabrication visibles derrière une vitre.',
    emoji: '🍡'
  },
  {
    id: 'm228',
    lat: 34.57683638562304,
    lng: 135.48940025549808,
    title: 'Hochigai Shrine',
    category: 'Sanctuaire',
    description: 'Petit sanctuaire local, très rapide à visiter.',
    emoji: '⛩️'
  },
  {
    id: 'm229',
    lat: 34.57577135892372,
    lng: 135.48842191975572,
    title: 'Mausoleum of Emperor Hanzei',
    category: 'Kofun',
    description: 'Petit kofun attribué à l’empereur Hanzei. Visible uniquement depuis l’extérieur, site fermé au public.',
    emoji: '🏺'
  },
  {
    id: 'm230',
    lat: 34.5639496953732,
    lng: 135.48747241776186,
    title: 'Daisen-ryo Kofun',
    category: 'Kofun',
    description: 'Grand kofun emblématique de la ville. Visible uniquement depuis l’extérieur ou en montgolfière depuis Daisen Park.',
    emoji: '🏺'
  },
  {
    id: 'm231',
    lat: 34.55850155696606,
    lng: 135.48275105933718,
    title: 'Daisen Park',
    category: 'Parc',
    description: 'Grand parc avec lac, café et possibilité de survol en montgolfière pour observer les kofun depuis le ciel.',
    emoji: '🌳'
  },
  {
    id: 'm232',
    lat: 34.694726348110045,
    lng: 135.19072228495074,
    title: 'Ikuta Shrine',
    category: 'Sanctuaire',
    description: 'Sanctuaire shinto situé en plein centre de Kobe.',
    emoji: '⛩️'
  },
  {
    id: 'm233',
    lat: 34.688221270908194,
    lng: 135.1881103769608,
    title: 'Kobe Chinatown (Nankinmachi)',
    category: 'Quartier',
    description: 'Quartier chinois animé de Kobe, idéal pour découvrir la street food et l’ambiance colorée.',
    emoji: '🥟'
  },
  {
    id: 'm234',
    lat: 34.68837157089489,
    lng: 135.18925427697405,
    title: 'Kobe Beef Daichi',
    category: 'Food',
    description: 'Restaurant où j’ai mangé du véritable bœuf de Kobe à Kobe',
    emoji: '🥩'
  },
  {
    id: 'm235',
    lat: 34.708923,
    lng: 135.195511,
    title: 'Nunobiki Waterfall Hike',
    category: 'Randonnée',
    description: 'Randonnée vers les cascades de Nunobiki avec passage par le réservoir, belle vue nature proche de la ville.',
    emoji: '🥾'
  },
  {
    id: 'm236',
    lat: 34.71700803236871,
    lng: 135.19118820130018,
    title: 'Nunobiki Herb Garden',
    category: 'Jardin',
    description: 'Jardin botanique accessible en téléphérique ou à pied, avec vue panoramique sur Kobe.',
    emoji: '🌿'
  },
  {
    id: 'm237',
    lat: 34.68229918701068,
    lng: 135.18864613771152,
    title: 'Meriken Park',
    category: 'Parc',
    description: 'Parc en bord de mer avec monuments modernes et vue sur le port de Kobe.',
    emoji: '🌊'
  },
  {
    id: 'm238',
    lat: 34.68263879542543,
    lng: 135.18672497759275,
    title: 'Kobe Port Tower',
    category: 'Monument',
    description: 'Tour emblématique rouge de Kobe de 108m.',
    emoji: '🗼'
  },
  {
    id: 'm239',
    lat: 34.70816132613689,
    lng: 135.50451195018505,
    title: 'Quartier Nakazakicho',
    category: 'Quartier',
    description: 'Petit quartier mignon rempli de coffee shops, boutiques de produit artisanaux et friperies vintage. Ambiance calme et créative.',
    emoji: '☕'
  },
  {
    id: 'm240',
    lat: 34.71984874406864,
    lng: 135.51298044202264,
    title: 'Yodogawa Park',
    category: 'Parc',
    description: 'Parc situé le long de la rivière au nord de la ville. Pas ouf ni pas très joli.',
    emoji: '🌳'
  },
  {
  id: 'm241',
  lat: 34.66062159467301,
  lng: 135.53788111439715,
  title: 'Osaka Ikuno Korea Town',
  category: 'Quartier',
  description: 'Quartier coréen d’Osaka avec boutiques, street food, cafés et restaurants coréens.',
  emoji: '🇰🇷'
},
  {
    id: 'm242',
    lat: 34.83516404692176,
    lng: 135.46845807169439,
    title: 'Station de métro de Mino-o',
    category: 'Transport',
    description: 'Terminus de la ligne au pied de la montagne. Petite ville mignonne servant de point de départ pour les randonnées.',
    emoji: '🚉'
  },
  {
    id: 'm243',
    lat: 34.85383330829652,
    lng: 135.47198987041835,
    title: 'Cascade de Minoo',
    category: 'Nature',
    description: 'Cascade de 33 mètres accessible par un sentier de randonnée facile, adapté à tous les niveaux.',
    emoji: '💧'
  },
  {
    id: 'm244',
    lat: 34.86577976500515,
    lng: 135.49108719858864,
    title: 'Temple Katsuo-ji',
    category: 'Temple',
    description: 'Magnifique temple perché dans les montagnes avec jardins soignés, lac rempli de carpes koi et des milliers de daruma disséminés dans le parc.',
    emoji: '⛩️'
  },
  {
    id: 'm245',
    lat: 34.71035081137345,
    lng: 135.51132684307998,
    title: 'Osaka Municipal Housing Museum',
    category: 'Musée',
    description: 'Musée sur 3 étages avec reconstitutions grandeur nature d’un ancien village traditionnel et maquettes représentant l’évolution d’un quartier entre les années 1920 et 1960.',
    emoji: '🖼️'
  },
  {
    id: 'm246',
    lat: 34.692453791694064,
    lng: 135.49139105550296,
    title: 'Nakanoshima Museum of Art (NAKKA)',
    category: 'Musée',
    description: 'Musée d’art contemporain proposant uniquement des expositions temporaires. Lors de ma visite, il y avait une exposition sur Sarah Morris.',
    emoji: '🖼️'
  },
  {
    id: 'm247',
    lat: 34.69239314418113,
    lng: 135.50788643620106,
    title: 'Nakanoshima Rose Garden',
    category: 'Parc',
    description: 'Parc situé sur l’île de Nakanoshima, avec espaces verts, roseraie, bars et musées à proximité, entouré de nombreux buildings.',
    emoji: '🌳'
  },
  {
    id: 'm248',
    lat: 34.83945337574922,
    lng: 134.69390402606132,
    title: 'Château de Himeji',
    category: 'Monument',
    description: "Magnifique château féodal japonais surnommé le 'Château du Héron Blanc', classé au patrimoine mondial de l’UNESCO. L’un des châteaux les mieux conservés du Japon. Visite des étages du chateau sans chaussures",
    emoji: '🏯'
  },
  {
    id: 'm249',
    lat: 34.837058473305405,
    lng: 134.69038553862217,
    title: 'Koko-en Garden',
    category: 'Jardin',
    description: "Ensemble de jardins japonais traditionnels situé juste à côté du château de Himeji, composé de plusieurs jardins thématiques avec étangs, ponts et carpes Koi.",
    emoji: '🌿'
  },
  {
  id: 'm250',
  lat: 34.643184069991264,
  lng: 135.4968368986724,
  title: 'Izumiya Hanazono',
  category: 'Supermarché',
  description: "Supermarché japonais avec un étage food market proposant de très bonnes réductions sur les plats préparés en fin de journée. Ressemble beaucoup à un Intermarché avec une grande variété de produits.",
  emoji: '🛒'
},
{
  id: 'm251',
  lat: 34.654522034089744,
  lng: 135.428964496606,
  title: 'Aquarium Kaiyukan',
  category: 'Aquarium',
  description: "L’un des plus grands aquariums du monde avec un immense bassin central représentant l’océan Pacifique et de nombreuses espèces marines dont le célèbre requin-baleine, requin-marteau, des raies manta ect.",
  emoji: '🐠'
},
{
  id: 'm252',
  lat: 34.6566659216361,
  lng: 135.47185491608354,
  title: 'Mr. Hiro Car Studio',
  category: 'Boutique',
  description: "Petite boutique spécialisée dans les voitures collectors japonaise, Nissan Skyliyne R-34 et R-35 et la fameuse Mazda RX-7 de Fast And Furious.",
  emoji: '🚗'
},
  {
    id: 'm253',
    lat: 35.00220108329648,
    lng: 135.76665529224448,
    title: 'Guesthouse Sign',
    category: 'Logement',
    description: "Mon auberge de jeunesse à Kyoto, située en plein centre-ville. Dortoir de 6 personnes avec lits superposés.",
    emoji: '🛏️'
  },
  {
    id: 'm254',
    lat: 35.000603681645444,
    lng: 135.76679073047288,
    title: 'Fresco',
    category: 'Supermarché',
    description: "Supermarché situé à seulement 2 minutes à pied de l’auberge.",
    emoji: '🛒'
  },
  {
    id: 'm255',
    lat: 35.00227451858582,
    lng: 135.76674934476756,
    title: 'The City Bakery Kyoto Shijo Teramachi',
    category: 'Café',
    description: "Petit café sympa où je discute avec Alice seulement quelques heures après notre rencontre.",
    emoji: '☕'
  },
  {
    id: 'm256',
    lat: 35.024894,
    lng: 135.759172,
    title: "Go'o Shrine",
    category: 'Sanctuaire',
    description: "Petit sanctuaire shinto connu pour ses statues de sangliers. Situé près du Palais impérial de Kyoto et associé à la protection des jambes et de la mobilité.",
    emoji: '⛩️'
  },
  {
    id: 'm257',
    lat: 35.023333,
    lng: 135.750664,
    title: 'Seimei-jinja',
    category: 'Sanctuaire',
    description: "Sanctuaire dédié au célèbre onmyōji Abe no Seimei. Connu pour ses symboles en forme d’étoile à cinq branches.",
    emoji: '⛩️'
  },
  {
    id: 'm258',
    lat: 35.025183,
    lng: 135.754692,
    title: 'Shiramine-jingu',
    category: 'Sanctuaire',
    description: "Sanctuaire shinto réputé pour être le protecteur des sports et des athlètes.",
    emoji: '⛩️'
  },
  {
    id: 'm259',
    lat: 35.022879,
    lng: 135.757509,
    title: 'Honpo-ji Temple',
    category: 'Temple',
    description: "Temple bouddhiste appartenant à l’école Nichiren, situé dans le quartier historique de Kamigyo.",
    emoji: '🛕'
  },
  {
    id: 'm260',
    lat: 35.043255,
    lng: 135.739618,
    title: 'Kenkun Shrine',
    category: 'Sanctuaire',
    description: "Sanctuaire situé sur les hauteurs, dédié au célèbre seigneur de guerre Oda Nobunaga.",
    emoji: '⛩️'
  },
  {
    id: 'm261',
    lat: 35.032255,
    lng: 135.758923,
    title: 'Kamigoryo Shrine',
    category: 'Sanctuaire',
    description: "Sanctuaire ancien entouré d’arbres, connu pour son festival Goryo Matsuri.",
    emoji: '⛩️'
  },
  {
    id: 'm262',
    lat: 35.039489,
    lng: 135.772655,
    title: 'Tadasu no Mori',
    category: 'Nature',
    description: "Forêt sacrée ancienne entourant le sanctuaire Shimogamo-jinja, connue pour son atmosphère paisible.",
    emoji: '🌳'
  },
  {
    id: 'm263',
    lat: 35.039657,
    lng: 135.772451,
    title: 'Shimogamo-jinja',
    category: 'Sanctuaire',
    description: "Sanctuaire shinto classé au patrimoine mondial de l’UNESCO, l’un des plus anciens de Kyoto.",
    emoji: '⛩️'
  },
  {
    id: 'm264',
    lat: 35.040708,
    lng: 135.740573,
    title: 'Funaokayama Park',
    category: 'Parc',
    description: "Petit parc sur une colline offrant une vue intéressante sur Kyoto.",
    emoji: '🌳'
  },
  {
    id: 'm265',
    lat: 35.025431,
    lng: 135.762132,
    title: 'Kyoto Gyoen National Garden',
    category: 'Parc',
    description: "Grand parc public entourant le Palais impérial de Kyoto, très apprécié pour les promenades.",
    emoji: '🌳'
  },
  {
    id: 'm266',
    lat: 35.005018,
    lng: 135.764386,
    title: 'Nishiki Market',
    category: 'Food',
    description: "Marché couvert très populaire surnommé 'la cuisine de Kyoto', rempli de spécialités locales et street food.",
    emoji: '🛍️'
  },
  {
    id: 'm267',
    lat: 35.005835,
    lng: 135.765783,
    title: 'Teramachi Street',
    category: 'Shopping',
    description: "Rue commerçante couverte avec boutiques, cafés et magasins traditionnels.",
    emoji: '🛍️'
  },
  {
  id: 'm268',
  lat: 35.003713,
  lng: 135.778781,
  title: 'Yasaka Shrine',
  category: 'Sanctuaire',
  description: "Grand sanctuaire shinto situé à l’entrée du quartier de Gion. Célèbre pour ses lanternes illuminées le soir et pour accueillir le célèbre festival Gion Matsuri.",
  emoji: '⛩️'
},
{
  id: 'm269',
  lat: 35.000996,
  lng: 135.778530,
  title: 'Ryosoku-in',
  category: 'Temple',
  description: "Sous-temple zen du complexe Kennin-ji, connu pour ses jardins paisibles et ses ouvertures saisonnières au public.",
  emoji: '⛩️'
},
{
  id: 'm270',
  lat: 34.998608,
  lng: 135.780814,
  title: 'Ninenzaka',
  category: 'Quartier historique',
  description: "Rue pavée traditionnelle bordée de maisons anciennes, boutiques et salons de thé. L’un des endroits les plus photogéniques de Kyoto.",
  emoji: '🏮'
},
{
  id: 'm271',
  lat: 34.994856,
  lng: 135.784923,
  title: 'Kiyomizu-dera',
  category: 'Temple',
  description: "Temple bouddhiste emblématique classé au patrimoine mondial de l’UNESCO, célèbre pour sa grande terrasse en bois offrant une vue spectaculaire sur Kyoto.",
  emoji: '⛩️'
},
{
  id: 'm272',
  lat: 34.995807,
  lng: 135.783397,
  title: 'Cafe & Giftshop TEN',
  category: 'Café',
  description: "Petit café et boutique de souvenirs près de Kiyomizu-dera, j'ai gouté ici mon premier matcha",
  emoji: '☕'
},
{
  id: 'm273',
  lat: 34.980579,
  lng: 135.747792,
  title: 'Tō-ji',
  category: 'Temple',
  description: "Temple bouddhiste célèbre pour sa pagode en bois à cinq étages, la plus haute du Japon. Fondé au VIIIe siècle, il est classé au patrimoine mondial de l’UNESCO.",
  emoji: '🏯'
},
{
  id: 'm274',
  lat: 34.987473,
  lng: 135.742476,
  title: 'Umekoji Park',
  category: 'Parc',
  description: "Grand parc urbain situé près de la gare de Kyoto avec espaces verts, musée ferroviaire et jardins.",
  emoji: '🌳'
},
{
  id: 'm275',
  lat: 34.985688,
  lng: 135.743740,
  title: 'Suzaku Garden',
  category: 'Jardin',
  description: "Jardin japonais paysager situé dans Umekoji Park, avec étangs, passerelles et zones de détente.",
  emoji: '🌿'
},
{
  id: 'm276',
  lat: 34.987958,
  lng: 135.742153,
  title: 'Kyoto Railway Museum',
  category: 'Musée',
  description: "Musée ferroviaire impressionnant retraçant l’histoire des trains japonais avec locomotives historiques et simulateurs.",
  emoji: '🚆'
},
{
  id: 'm277',
  lat: 34.991654,
  lng: 135.751185,
  title: 'Nishi Hongan-ji',
  category: 'Temple',
  description: "Grand temple bouddhiste de l’école Jōdo Shinshū, classé au patrimoine mondial de l’UNESCO et célèbre pour ses immenses pavillons en bois.",
  emoji: '🛕'
},
{
  id: 'm278',
  lat: 35.005292,
  lng: 135.762014,
  title: 'Matcha Sparkle Kyoto',
  category: 'Café',
  description: "Petit café spécialisé dans les desserts et boissons au matcha avec une présentation moderne.",
  emoji: '🍵'
},
{
  id: 'm279',
  lat: 35.003463,
  lng: 135.768084,
  title: 'Pokémon Center Kyoto',
  category: 'Boutique',
  description: "Boutique officielle Pokémon avec peluches, cartes et produits exclusifs inspirés de Kyoto.",
  emoji: '⚡'
},
{
  id: 'm280',
  lat: 35.004653,
  lng: 135.763302,
  title: 'Ichiran Ramen Kyoto',
  category: 'Restaurant',
  description: "Chaîne célèbre pour son ramen tonkotsu avec cabines individuelles permettant de manger seul.",
  emoji: '🍜'
},
{
  id: 'm281',
  lat: 35.014239,
  lng: 135.748134,
  title: 'Château de Nijō',
  category: 'Château',
  description: "Château construit en 1603 pour le shogun Tokugawa Ieyasu. Classé au patrimoine mondial de l’UNESCO, il est célèbre pour ses planchers 'rossignols' qui grincent pour détecter les intrus.",
  emoji: '🏯'
},
{
  id: 'm282',
  lat: 35.018875,
  lng: 135.768074,
  title: 'Kyoto Museum',
  category: 'Musée',
  description: "Musée retraçant l’histoire et la culture de Kyoto avec des expositions permanentes et temporaires.",
  emoji: '🏛️'
},
{
  id: 'm283',
  lat: 35.015999,
  lng: 135.782097,
  title: 'Kyoto City KYOCERA Museum of Art',
  category: 'Musée',
  description: "Grand musée d’art moderne et contemporain de Kyoto avec expositions internationales et architecture rénovée spectaculaire.",
  emoji: '🖼️'
},
{
  id: 'm284',
  lat: 35.014644,
  lng: 135.748686,
  title: 'Honmaru Garden',
  category: 'Jardin',
  description: "Jardin traditionnel situé dans l’enceinte du château de Nijō, offrant un cadre paisible avec étang et végétation soignée.",
  emoji: '🌿'
},
{
  id: 'm285',
  lat: 35.014311,
  lng: 135.748042,
  title: 'Seiryu-en',
  category: 'Jardin',
  description: "Jardin japonais du château de Nijō mélangeant styles traditionnels et modernes avec espaces ouverts et bassins.",
  emoji: '🌿'
},
{
  id: 'm286',
  lat: 35.014942,
  lng: 135.747862,
  title: 'Ninomaru Garden',
  category: 'Jardin',
  description: "Jardin paysager historique du château de Nijō conçu au XVIIe siècle, célèbre pour ses rochers décoratifs et son étang central.",
  emoji: '🌿'
},
{
  id: 'm287',
  lat: 35.011573,
  lng: 135.794559,
  title: 'Nanzen-ji',
  category: 'Temple',
  description: "Grand temple zen entouré de nature avec un célèbre aqueduc en briques traversant le complexe. L’un des temples les plus importants de Kyoto.",
  emoji: '🛕'
},
{
  id: 'm288',
  lat: 35.008806,
  lng: 135.792430,
  title: 'Eikan-dō Zenrin-ji',
  category: 'Temple',
  description: "Temple bouddhiste célèbre pour ses magnifiques jardins et son étang. Particulièrement réputé à l’automne pour ses érables rouges.",
  emoji: '🛕'
},
{
  id: 'm289',
  lat: 35.012896,
  lng: 135.800641,
  title: 'Otoyo Shrine',
  category: 'Sanctuaire',
  description: "Petit sanctuaire discret situé au pied des collines de l’est de Kyoto, connu pour ses statues de souris gardiennes.",
  emoji: '⛩️'
},
{
  id: 'm290',
  lat: 35.019054,
  lng: 135.795347,
  title: "Philosopher's Path",
  category: 'Nature',
  description: "Chemin piétonnier longeant un canal bordé de cerisiers. Très agréable pour se promener entre temples et quartiers résidentiels.",
  emoji: '🌸'
},
{
  id: 'm291',
  lat: 35.027189,
  lng: 135.798204,
  title: 'Ginkaku-ji',
  category: 'Temple',
  description: "Temple du Pavillon d’Argent entouré de magnifiques jardins de sable et de mousse. L’un des sites historiques majeurs de Kyoto.",
  emoji: '🏯'
},
{
  id: 'm292',
  lat: 35.025584,
  lng: 135.797963,
  title: 'Daruma Burger',
  category: 'Restaurant',
  description: "Petit restaurant de burgers artisanaux près du Ginkaku-ji, connu pour ses burgers généreux et son ambiance décontractée.",
  emoji: '🍔'
},
{
  id: 'm293',
  lat: 34.987270,
  lng: 135.772669,
  title: 'Sanjūsangen-dō',
  category: 'Temple',
  description: "Temple bouddhiste célèbre pour sa longue salle principale abritant 1001 statues de Kannon, déesse de la compassion.",
  emoji: '🛕'
},
{
  id: 'm294',
  lat: 34.989588,
  lng: 135.773438,
  title: 'Kyoto National Museum',
  category: 'Musée',
  description: "Grand musée consacré à l’art et à l’histoire du Japon avec de nombreuses pièces historiques et expositions temporaires.",
  emoji: '🏛️'
},
{
  id: 'm295',
  lat: 34.996965,
  lng: 135.778599,
  title: 'Mimizuka',
  category: 'Monument',
  description: "Monument historique datant de l’époque de Toyotomi Hideyoshi, contenant des vestiges rapportés des invasions de la Corée au XVIe siècle.",
  emoji: '🪦'
},
{
  id: 'm296',
  lat: 34.998799,
  lng: 135.779218,
  title: 'Rokuharamitsu-ji',
  category: 'Temple',
  description: "Temple bouddhiste fondé au Xe siècle, connu pour ses statues importantes du bouddhisme japonais.",
  emoji: '🛕'
},
{
  id: 'm297',
  lat: 35.003663,
  lng: 135.780282,
  title: 'Maruyama Park',
  category: 'Parc',
  description: "Parc populaire situé à côté du sanctuaire Yasaka, célèbre pour ses cerisiers et son ambiance animée au printemps.",
  emoji: '🌸'
},
{
  id: 'm298',
  lat: 35.003713,
  lng: 135.778781,
  title: 'Yasaka Shrine',
  category: 'Sanctuaire',
  description: "Grand sanctuaire shinto situé à l’entrée du quartier de Gion, célèbre pour ses lanternes et le festival Gion Matsuri.",
  emoji: '⛩️'
},
{
  id: 'm299',
  lat: 35.001888,
  lng: 135.782304,
  title: 'Chōraku-ji',
  category: 'Temple',
  description: "Temple paisible situé sur les hauteurs de Maruyama Park, entouré d’arbres et offrant une atmosphère calme.",
  emoji: '🛕'
},
{
  id: 'm300',
  lat: 34.999976,
  lng: 135.783918,
  title: 'Ōtani Sōbyō',
  category: 'Temple',
  description: "Mausolée impressionnant appartenant à l’école bouddhiste Jōdo Shinshū avec un grand escalier monumental.",
  emoji: '🛕'
},
{
  id: 'm301',
  lat: 35.000529,
  lng: 135.781105,
  title: 'Kōdai-ji',
  category: 'Temple',
  description: "Temple zen fondé au XVIIe siècle par la veuve de Toyotomi Hideyoshi, célèbre pour ses jardins et ses érables.",
  emoji: '🌿'
},
{
  id: 'm302',
  lat: 35.002126,
  lng: 135.781221,
  title: 'Higashiyama',
  category: 'Quartier historique',
  description: "Quartier traditionnel de Kyoto avec ruelles pavées, maisons anciennes, temples et nombreuses boutiques artisanales.",
  emoji: '🏮'
},
{
  id: 'm303',
  lat: 34.91489477865035,
  lng: 136.01621194385535,
  title: 'Musée Miho',
  category: 'Musée',
  description: "Musée perdu dans les montagnes conçu par l’architecte I.M. Pei. Il présente des expositions temporaires consacrées à des objets d’art anciens et des antiquités provenant de différentes civilisations.",
  emoji: '🏛️'
},
{
  id: 'm304',
  lat: 35.01186441031329,
  lng: 135.75941820645087,
  title: 'Kyoto International Manga Museum',
  category: 'Musée',
  description: "Musée hyper intéressant consacré à la culture du manga avec plus de 300 000 objets liés au manga. Installé dans une ancienne école, chaque salle et couloir est rempli d’étagères de mangas à lire librement.",
  emoji: '🏛️'
},
{
  id: 'm305',
  lat: 35.006957328149745,
  lng: 135.76858966839598,
  title: 'Round1',
  category: 'Arcade',
  description: "Grande salle d’arcade japonaise où je passe la soirée avec Liron et Itay, avec jeux d’arcade, fléchettes et autres attractions.",
  emoji: '🎮'
},
{
  id: 'm306',
  lat: 34.967700517336944,
  lng: 135.77918826717118,
  title: 'Sanctuaire Fushimi Inari Taisha',
  category: 'Sanctuaire',
  description: "Longue balade à travers les célèbres torii rouges du sanctuaire, avec une ambiance ultra japonaise très Miyazaki.",
  emoji: '⛩️'
},
{
  id: 'm307',
  lat: 34.97602936838391,
  lng: 135.7737613555147,
  title: 'Temple Tōfuku-ji',
  category: 'Temple',
  description: "Grand temple bouddhiste fondé en 1236, célèbre pour ses jardins zen et ses magnifiques couleurs en automne.",
  emoji: '🏯'
},
{
  id: 'm308',
  lat: 35.015988313755386,
  lng: 135.7824289788298,
  title: 'Sanctuaire Heian-jingū',
  category: 'Sanctuaire',
  description: "Sanctuaire shinto entouré d’un immense jardin japonais. L’un des plus beaux jardins que j’ai pu visiter, avec étangs, ponts et quelques sakura.",
  emoji: '🌿'
},
{
  id: 'm309',
  lat: 35.01682581203592,
  lng: 135.6712999555165,
  title: 'Arashiyama Bamboo Grove',
  category: 'Nature',
  description: "Forêt de bambous très connue. Un peu surcotée et moins impressionnante que prévu, mais le quartier d’Arashiyama vaut clairement le détour.",
  emoji: '🎋'
},
{
  id: 'm310',
  lat: 35.012880167997054,
  lng: 135.67777345551633,
  title: 'Togetsukyo Bridge',
  category: 'Monument',
  description: "Pont de 155 mètres traversant la rivière Katsura, souvent utilisé dans le cinéma japonais. Très beau avec les montagnes en arrière-plan.",
  emoji: '🌉'
},
{
  id: 'm311',
  lat: 35.011398747160605,
  lng: 135.67662337369805,
  title: 'Iwatayama Monkey Park',
  category: 'Activité',
  description: "Parc situé sur les hauteurs d’Arashiyama avec de nombreux singes en liberté que l’on peut observer et nourrir.",
  emoji: '🐒'
},
{
  id: 'm312',
  lat: 35.00346821125751,
  lng: 135.76973547102475,
  title: 'Hokkyokusei Shijo Kawaramachi',
  category: 'Restaurant',
  description: "Restaurant spécialisé dans les omelettes japonaises (omurice) où je mange avec Itay.",
  emoji: '🍳'
},
{
  id: 'm313',
  lat: 35.03937985515751,
  lng: 135.72924711993542,
  title: 'Kinkaku-ji',
  category: 'Temple',
  description: "Temple emblématique de Kyoto connu pour son Pavillon d’Or recouvert de feuilles d’or, reflété dans un étang.",
  emoji: '🏯'
},
{
  id: 'm314',
  lat: 35.01266218326611,
  lng: 135.76731830843372,
  title: 'Drip & Drop Coffee Supply',
  category: 'Café',
  description: "Adresse proposant café de spécialité et bières artisanales. J’y ai pris un matcha latte avec Itay.",
  emoji: '☕'
},
{
  id: 'm315',
  lat: 35.05066370695681,
  lng: 135.7654434671746,
  title: 'Garden of Fine Arts Kyoto',
  category: 'Musée',
  description: "Musée en plein air avec reproductions d’œuvres célèbres intégrées dans une architecture moderne en béton, eau et verre.",
  emoji: '🖼️'
},
{
  id: 'm316',
  lat: 35.0486276485022,
  lng: 135.76303685512724,
  title: 'Kyoto Botanical Garden',
  category: 'Parc',
  description: "Grand jardin botanique avec serres, fleurs saisonnières et vastes espaces verts pour se promener. Cerisiers en fleurs lors de ma viiste : Magnifique",
  emoji: '🌿'
},
{
  id: 'm317',
  lat: 35.00394046390717,
  lng: 135.77102981502296,
  title: 'Pontochō Alley',
  category: 'Quartier historique',
  description: "Ruelle étroite et animée, remplie de restaurants et bars traditionnels avec une ambiance typiquement japonaise.",
  emoji: '🏮'
},
{
  id: 'm318',
  lat: 34.99697503044749,
  lng: 135.78097497636665,
  title: 'Higashiyama',
  category: 'Quartier historique',
  description: "Quartier traditionnel de Kyoto avec ruelles pavées, temples, boutiques artisanales et atmosphère ancienne.",
  emoji: '🏮'
},
{
  id: 'm319',
  lat: 34.3902199,
  lng: 132.4612422,
  title: 'Mon auberge de jeunesse à Hiroshima',
  category: 'Logement',
  description: "Auberge de jeunesse située en plein centre-ville d’Hiroshima, idéale pour se balader facilement et accéder rapidement aux principaux points d’intérêt.",
  emoji: '🛏️'
},
{
  id: 'm320',
  lat: 34.3998728,
  lng: 132.4660997,
  title: 'Hiroshima Prefectural Art Museum',
  category: 'Musée',
  description: "Musée d’art présentant des œuvres japonaises et occidentales, situé à proximité du jardin Shukkeien.",
  emoji: '🖼️'
},
{
  id: 'm321',
  lat: 34.4004913,
  lng: 132.4677174,
  title: 'Shukkeien Garden',
  category: 'Jardin',
  description: "Magnifique jardin japonais traditionnel avec étang, ponts et paysages miniatures, parfait pour une promenade paisible.",
  emoji: '🌿'
},
{
  id: 'm322',
  lat: 34.3987017,
  lng: 132.4581148,
  title: 'Hiroshima Museum of Art',
  category: 'Musée',
  description: "Musée d’art exposant des œuvres européennes et japonaises, notamment des peintures impressionnistes.",
  emoji: '🖼️'
},
{
  id: 'm323',
  lat: 34.2795144,
  lng: 132.3198083,
  title: 'Mont Misen',
  category: 'Nature',
  description: "Montagne culminant à 535 mètres sur l’île de Miyajima, accessible en téléphérique ou via plusieurs sentiers de randonnée avec des points de vue incroyables.",
  emoji: '⛰️'
},
{
  id: 'm324',
  lat: 34.2959982,
  lng: 132.3198268,
  title: 'Sanctuaire Itsukushima-jinja',
  category: 'Sanctuaire',
  description: "Sanctuaire shinto iconique construit sur l’eau sur l’île de Miyajima, célèbre pour son grand torii flottant.",
  emoji: '⛩️'
},
{
  id: 'm325',
  lat: 34.3112581,
  lng: 132.3048758,
  title: 'Terminal Ferry Hiroshima',
  category: 'Transport',
  description: "Terminal depuis lequel je prends le ferry pour rejoindre l’île de Miyajima.",
  emoji: '⛴️'
},
{
  id: 'm326',
  lat: 34.3946145,
  lng: 132.4589064,
  title: 'Lawson',
  category: 'Convenience store',
  description: "Konbini où je mange le soir pendant mon séjour à Hiroshima.",
  emoji: '🛒'
},
{
  id: 'm327',
  lat: 34.3902318,
  lng: 132.4621787,
  title: 'Family Mart',
  category: 'Convenience store',
  description: "Konbini où je prends mon petit déjeuner chaque matin.",
  emoji: '🛒'
},
{
  id: 'm328',
  lat: 34.4201307,
  lng: 132.4384066,
  title: 'Temple Mitaki-dera',
  category: 'Temple',
  description: "Temple niché dans la montagne, point de départ d’un chemin de randonnée entouré d’une dense forêt de bambous et d’une nature apaisante.",
  emoji: '🛕'
},
{
  id: 'm329',
  lat: 34.3954400,
  lng: 132.4535953,
  title: 'Dôme de Genbaku',
  category: 'Monument',
  description: "Vestige emblématique de l’explosion atomique de 1945, conservé en l’état comme symbole de paix et mémoire historique.",
  emoji: '🏛️'
},
{
  id: 'm330',
  lat: 34.4256800,
  lng: 132.4345496,
  title: 'Mont Sōkasan',
  category: 'Nature',
  description: "Montagne de 356 mètres offrant une belle randonnée et des points de vue sur Hiroshima et ses environs.",
  emoji: '⛰️'
},
{
  id: 'm331',
  lat: 34.4155383,
  lng: 132.4329697,
  title: 'Mont Takatoge',
  category: 'Nature',
  description: "Mont de 237,4 mètres accessible en randonnée, avec un environnement calme et boisé.",
  emoji: '🌄'
},
{
  id: 'm332',
  lat: 34.3861162,
  lng: 132.4732015,
  title: 'Hiroshima City Museum of Contemporary Art',
  category: 'Musée',
  description: "Musée d’art contemporain situé sur une colline.",
  emoji: '🖼️'
},
{
  id: 'm333',
  lat: 34.3876595,
  lng: 132.4744407,
  title: 'Hiroshima City Manga Library',
  category: 'Bibliothèque',
  description: "Bibliothèque spécialisée dans le manga avec une petite selection traudite en angalis également.",
  emoji: '📚'
},
{
  id: 'm334',
  lat: 34.3951982,
  lng: 132.4565893,
  title: 'EDION Hiroshima Main Store',
  category: 'Shopping',
  description: "Grand magasin d’électronique sur plusieurs étages avec un large choix de produits high-tech.",
  emoji: '📱'
},
{
  id: 'm335',
  lat: 34.3925716,
  lng: 132.4521365,
  title: 'Parc du Mémorial de la Paix d’Hiroshima',
  category: 'Parc',
  description: "Grand parc situé en face du musée où je me pose près d’une heure sous les cerisiers. Rencontre avec des Allemandes et un groupe de grand-mères qui chantent, moment très marquant.",
  emoji: '🌸'
},
{
  id: 'm336',
  lat: 34.3915183,
  lng: 132.4532382,
  title: 'Musée du Mémorial de la Paix d’Hiroshima',
  category: 'Musée',
  description: "Musée retraçant les événements du bombardement atomique de 1945 avec témoignages, objets et expositions marquantes.",
  emoji: '🏛️'
},
{
  id: 'm337',
  lat: 34.4027204,
  lng: 132.4590670,
  title: 'Château de Hiroshima',
  category: 'Château',
  description: "Château reconstruit après la Seconde Guerre mondiale. Définitivement fermé lors de ma visite mais reste agréable à observer de l’extérieur.",
  emoji: '🏯'
},
{
  id: 'm338',
  lat: 34.4059061,
  lng: 132.4779410,
  title: 'Hiroshima Peace Pagoda',
  category: 'Monument',
  description: "Pagode située sur les hauteurs où je m’allonge sur un banc bleu pendant 45 minutes en plein soleil, moment calme avec une belle vue.",
  emoji: '🛕'
},
{
  id: 'm339',
  lat: 34.4035434,
  lng: 132.4756591,
  title: 'Hiroshima Toshogu Shrine',
  category: 'Sanctuaire',
  description: "Sanctuaire shinto avec un magnifique cerisier blanc à l’intérieur, apportant une atmosphère très paisible.",
  emoji: '⛩️'
},
{
  id: 'm340',
  lat: 34.3819331,
  lng: 132.4735811,
  title: 'Hijiyama Park',
  category: 'Parc',
  description: "Grand parc urbain avec de nombreux cerisiers. J’y fais une sieste sous l’un d’eux, moment très calme et agréable.",
  emoji: '🌸'
},
{
  id: 'm341',
  lat: 34.3935670,
  lng: 132.4600963,
  title: 'Round1 Hiroshima',
  category: 'Arcade',
  description: "Grande salle d’arcade japonaise avec jeux, bowling et autres activités.",
  emoji: '🎮'
},
{
  id: 'm342',
  lat: 34.3938406,
  lng: 132.4590063,
  title: 'Gaba Kamiyacho',
  category: 'Restaurant',
  description: "Restaurant de ramen plutôt bon, une adresse simple et efficace pour manger à Hiroshima.",
  emoji: '🍜'
},
{
  id: 'm343',
  lat: 33.58606601801819,
  lng: 130.38316359103996,
  title: 'Festival des sakura (Maizuru Park)',
  category: 'Événement',
  description: "Grand parc accueillant le festival des sakura pendant une dizaine de jours, avec de nombreux stands, lanternes et une ambiance très animée.",
  emoji: '🌸'
},
{
  id: 'm344',
  lat: 33.591381344042595,
  lng: 130.3988679960118,
  title: 'Tenjin',
  category: 'Quartier',
  description: "Quartier central de Fukuoka avec boutiques, grands magasins, restaurants, bars et vie nocturne animée.",
  emoji: '🏙️'
},
{
  id: 'm345',
  lat: 33.5854370833163,
  lng: 130.4032637981472,
  title: 'Yatai Okamoto',
  category: 'Street Food',
  description: "Premier yatai de ma vie, ambiance animée avec stands de street food typiques de Fukuoka.",
  emoji: '🍜'
},
{
  id: 'm346',
  lat: 33.59035345441182,
  lng: 130.3799583671149,
  title: 'Mon auberge à Fukuoka',
  category: 'Logement',
  description: "Auberge de jeunesse où je séjourne pendant une semaine à Fukuoka.",
  emoji: '🛏️'
},
{
  id: 'm347',
  lat: 33.58415958333216,
  lng: 130.37955942643677,
  title: 'Musée d’art de Fukuoka',
  category: 'Musée',
  description: "Musée d’art proposant une exposition contemporaine surprenante et très intéressante, pour seulement 1 euro.",
  emoji: '🖼️'
},
{
  id: 'm348',
  lat: 33.58611026153298,
  lng: 130.376465498323,
  title: 'Parc Ohori',
  category: 'Parc',
  description: "Magnifique parc avec un immense lac central, idéal pour se balader et profiter d’un moment calme.",
  emoji: '🌿'
},
{
  id: 'm349',
  lat: 33.58382273495102,
  lng: 130.37912088526073,
  title: 'Cafe AQUAM',
  category: 'Café',
  description: "Pause jus d’orange,plein soleil face au lac du parc Ohori, cadre magnifique.",
  emoji: '🍊'
},
{
  id: 'm350',
  lat: 33.58257567004843,
  lng: 130.3787790321443,
  title: 'Ohori Park Japanese Garden',
  category: 'Jardin',
  description: "Très beau jardin japonais avec carpes koi et un étang particulièrement agréable.",
  emoji: '🌸'
},
{
  id: 'm351',
  lat: 33.594960385780354,
  lng: 130.41437763827915,
  title: 'Temple Tochoji',
  category: 'Temple',
  description: "Temple bouddhiste connu pour abriter une grande statue de Bouddha en bois.",
  emoji: '🛕'
},
{
  id: 'm352',
  lat: 33.59723352683013,
  lng: 130.41444221239465,
  title: 'Temple Shofukuji',
  category: 'Temple',
  description: "Premier temple zen du Japon, fondé au XIIe siècle, avec une atmosphère très paisible.",
  emoji: '🛕'
},
{
  id: 'm353',
  lat: 33.59296071752421,
  lng: 130.41046090821956,
  title: 'Sanctuaire Kushida-jinja',
  category: 'Sanctuaire',
  description: "Sanctuaire shinto emblématique de Fukuoka, connu pour le festival Hakata Gion Yamakasa.",
  emoji: '⛩️'
},
{
  id: 'm354',
  lat: 33.58930742660524,
  lng: 130.41101441020317,
  title: 'Canal City Hakata',
  category: 'Shopping',
  description: "Grand centre commercial avec architecture moderne, boutiques, restaurants et spectacles autour du canal central.",
  emoji: '🛍️'
},
{
  id: 'm355',
  lat: 33.58928113866124,
  lng: 130.4108336441416,
  title: 'Masajiro Burger',
  category: 'Restaurant',
  description: "Très bon burger dégusté après une longue balade dans le centre commercial.",
  emoji: '🍔'
},
{
  id: 'm356',
  lat: 33.59808690245357,
  lng: 130.37530888490616,
  title: 'Nishi Park',
  category: 'Parc',
  description: "Parc situé sur les hauteurs avec de beaux points de vue sur la ville et la mer, très agréable pendant la saison des cerisiers.",
  emoji: '🌸'
},
{
  id: 'm357',
  lat: 33.597143709370634,
  lng: 130.37638887037758,
  title: 'Terumo Shrine',
  category: 'Sanctuaire',
  description: "Sanctuaire calme situé à proximité de Nishi Park, offrant une ambiance paisible au milieu de la nature.",
  emoji: '⛩️'
},
{
  id: 'm358',
  lat: 33.60076169250248,
  lng: 130.36694396159265,
  title: 'Fukuhama Beach',
  category: 'Plage',
  description: "Plage tranquille au nord de Fukuoka, idéale pour une balade au bord de l’eau.",
  emoji: '🏖️'
},
{
  id: 'm359',
  lat: 33.59677305268412,
  lng: 130.3594366816409,
  title: 'Seaside Momochi Jigyohama',
  category: 'Plage',
  description: "Grande plage urbaine avec vue sur les buildings modernes de Fukuoka.",
  emoji: '🌊'
},
{
  id: 'm360',
  lat: 33.594734788847084,
  lng: 130.35122588827969,
  title: 'Momochi Seaside Park',
  category: 'Parc',
  description: "Parc en bord de mer avec espaces de détente, parfait pour profiter du coucher de soleil.",
  emoji: '🌅'
},
{
  id: 'm361',
  lat: 33.59506295868034,
  lng: 130.35313915923695,
  title: 'Momochihama Beach',
  category: 'Plage',
  description: "Plage populaire de Fukuoka avec ambiance détendue et vue sur la skyline.",
  emoji: '🏖️'
},
{
  id: 'm362',
  lat: 33.59621788083566,
  lng: 130.33953775545857,
  title: 'Atago Beach Park',
  category: 'Parc',
  description: "Parc côtier calme avec vue dégagée sur la mer et les environs.",
  emoji: '🌿'
},
{
  id: 'm363',
  lat: 33.585626949167136,
  lng: 130.33485027324897,
  title: 'Washio Atago Shrine',
  category: 'Sanctuaire',
  description: "Sanctuaire situé sur les hauteurs offrant un panorama impressionnant sur Fukuoka.",
  emoji: '⛩️'
},
{
  id: 'm364',
  lat: 33.593717460733814,
  lng: 130.41145991496538,
  title: 'Hakata Machiya Hometown Museum',
  category: 'Musée',
  description: "Musée retraçant la vie traditionnelle de Hakata avec maisons reconstituées et objets du quotidien.",
  emoji: '🏛️'
},
{
  id: 'm365',
  lat: 33.5908725203497,
  lng: 130.41271254175982,
  title: 'Fuk Café',
  category: 'Café',
  description: "Petit café sympa dans le quartier de Hakata, parfait pour une pause.",
  emoji: '☕'
},
{
  id: 'm366',
  lat: 33.588228254573266,
  lng: 130.40331708354273,
  title: 'Jazz Bar Jab',
  category: 'Bar',
  description: "Bar à l’ambiance jazz avec musique live et atmosphère intimiste.",
  emoji: '🎷'
},
{
  id: 'm367',
  lat: 33.64306108629892,
  lng: 130.20137197668518,
  title: 'Palm Beach Itoshima',
  category: 'Plage',
  description: "Plage d’Itoshima avec ambiance chill, cafés et spot parfait pour profiter de l’océan.",
  emoji: '🏖️'
},
{
  id: 'm368',
  lat: 33.640218044706785,
  lng: 130.20002335919054,
  title: 'Honua Cafe Itoshima Futamigaura',
  category: 'Café',
  description: "Café en bord de mer avec vue sur l’océan, très populaire pour ses spots photo.",
  emoji: '☕'
},
{
  id: 'm369',
  lat: 33.640502788881754,
  lng: 130.1964795260126,
  title: "Sakurai Futamigaura's Couple Stones",
  category: 'Monument',
  description: "Rochers sacrés reliés par une corde shimenawa dans la mer, symbole iconique d’Itoshima.",
  emoji: '🌊'
},
{
  id: 'm370',
  lat: 33.636184140562726,
  lng: 130.19545079079322,
  title: 'Heart Tree',
  category: 'Nature',
  description: "Arbre en forme de cœur situé dans le Futamigaura Park, spot photo connu pour les couples.",
  emoji: '🌳'
},
{
  id: 'm371',
  lat: 33.643417138302574,
  lng: 130.20181184947288,
  title: 'Surfers Market Itoshima',
  category: 'Shopping',
  description: "Boutique lifestyle avec ambiance surf, vêtements et accessoires.",
  emoji: '🏄'
},
{
  id: 'm372',
  lat: 33.64368301978264,
  lng: 130.20157921778213,
  title: 'Surf Side Cafe Itoshima',
  category: 'Café',
  description: "Café en bord de mer avec ambiance surf et vue sur l’océan.",
  emoji: '🌊'
},
{
  id: 'm374',
  lat: 33.52137582264644,
  lng: 130.53482054379873,
  title: 'Dazaifu Tenman-gū',
  category: 'Sanctuaire',
  description: "Sanctuaire célèbre dédié à Tenjin, dieu des études, très populaire auprès des étudiants.",
  emoji: '⛩️'
},
{
  id: 'm375',
  lat: 33.52076717514448,
  lng: 130.53538254115222,
  title: 'Dazaifu Tenmangu Museum',
  category: 'Musée',
  description: "Musée situé dans l’enceinte du sanctuaire, présentant l’histoire et les objets liés à Tenman-gū.",
  emoji: '🏛️'
},
{
  id: 'm376',
  lat: 33.51826392286904,
  lng: 130.53812105545535,
  title: 'Kyushu National Museum',
  category: 'Musée',
  description: "Grand musée national moderne présentant l’histoire et les échanges culturels du Japon avec l’Asie.",
  emoji: '🖼️'
},
{
  id: 'm377',
  lat: 33.58694562117658,
  lng: 130.39533228798186,
  title: 'Lamplight Books Cafe Fukuoka',
  category: 'Café',
  description: "Café-librairie cosy parfait pour lire et se poser autour d’un café.",
  emoji: '📚'
},
{
  id: 'm378',
  lat: 33.6291658359029,
  lng: 130.22697544726486,
  title: 'Palm Tree Swing',
  category: 'Nature',
  description: "Spot à voir à Itoshima (Fais à pied entre Palm Beach et celui-ci)",
  emoji: '🌳'
},
{
  id: 'm379',
  lat: 33.5932405,
  lng: 130.3515135,
  title: 'Fukuoka Tower',
  category: 'Monument',
  description: "Tour emblématique de Fukuoka offrant une vue panoramique sur la ville et la mer.",
  emoji: '🗼'
},
{
  id: 'm380',
  lat: 33.6356930,
  lng: 130.3030061,
  title: 'Nokonoshima Island Park',
  category: 'Parc',
  description: "Parc fleuri situé sur l’île de Nokonoshima, célèbre pour ses paysages saisonniers et ses vues sur la baie.",
  emoji: '🌸'
},
{
  id: 'm381',
  lat: 33.5974978,
  lng: 130.3270303,
  title: 'Terminal du ferry pour l’île de Nokono',
  category: 'Transport',
  description: "Terminal permettant de rejoindre l’île de Nokonoshima en ferry depuis Fukuoka.",
  emoji: '⛴️'
},
{
  id: 'm382',
  lat: 33.6222068,
  lng: 130.3062365,
  title: 'Île de Nokonoshima',
  category: 'Nature',
  description: "Petite île magnifiqueau large de Fukuoka offrant nature, fleurs et vues magnifiques sur la mer.",
  emoji: '🏝️'
},
{
  id: 'm383',
  lat: 33.6198697,
  lng: 130.5730415,
  title: 'Temple Nanzoïn',
  category: 'Temple',
  description: "Temple célèbre pour son immense statue de Bouddha couché, l’une des plus grandes au monde.",
  emoji: '🛕'
},
{
  id: 'm384',
  lat: 33.6260681,
  lng: 130.5535640,
  title: 'Barrage de Narufuchi',
  category: 'Nature',
  description: "Barrage entouré de montagnes offrant un cadre naturel très paisible.",
  emoji: '🌄'
},
{
  id: 'm385',
  lat: 33.6260207,
  lng: 130.5562267,
  title: 'Parc en hauteur (Narufuchi)',
  category: 'Point de vue',
  description: "Petit parc mignon avec un chalet en bois et une vue panoramique sur le barrage et les montagnes.",
  emoji: '🌅'
},
{
  id: 'm386',
  lat: 33.5926733,
  lng: 130.3968509,
  title: 'Shin Shin',
  category: 'Restaurant',
  description: "Restaurant de nouilles très populaire à Fukuoka, avec souvent une longue attente. Bon mais légèrement surcoté.",
  emoji: '🍜'
},
{
  id: 'm387',
  lat: 33.5923275,
  lng: 130.4058574,
  title: 'BOMES INDEE',
  category: 'Bar',
  description: "Bar reggae ultra cool où je rencontre Chris et Violet. Soirée incroyable de 21h à 2h du matin.",
  emoji: '🍹'
},
{
  id: 'm388',
  lat: 32.7421829,
  lng: 129.8766901,
  title: 'Casq Blanca',
  category: 'Logement',
  description: "Mon auberge à Fukuoka (séjour à Nagasaki), bien située et pratique pour explorer la ville.",
  emoji: '🛏️'
},
{
  id: 'm389',
  lat: 32.7464924,
  lng: 129.8807660,
  title: 'CoCo Burgers & Sports Bar',
  category: 'Restaurant',
  description: "Très bon burger avec frites offertes en échange d’un avis Google. Ambiance détendue.",
  emoji: '🍔'
},
{
  id: 'm390',
  lat: 32.7596559,
  lng: 129.8800402,
  title: 'Parc Tateyama',
  category: 'Parc',
  description: "Parc magnifique de nuit avec lanternes rouges, ambiance romantique avec couples et familles en pique-nique.",
  emoji: '🏮'
},
{
  id: 'm391',
  lat: 32.7412097,
  lng: 129.8690820,
  title: 'Nagasaki Seaside Park',
  category: 'Parc',
  description: "Parc en bord de mer agréable pour se balader et profiter de la vue sur le port de Nagasaki.",
  emoji: '🌊'
},
{
  id: 'm392',
  lat: 32.7180707,
  lng: 129.8272617,
  title: 'Kaminoshima Park',
  category: 'Parc',
  description: "Spot où je descends du bus pour prendre mon petit déjeuner sur la digue, proche de la statue de la Vierge Marie. Moment calme face à la mer.",
  emoji: '🌅'
},
{
  id: 'm393',
  lat: 32.7231289,
  lng: 129.8195134,
  title: 'Kaminoshima Breakwater',
  category: 'Point de vue',
  description: "Très longue route sur la digue, ambiance ultra cinématographique au cœur d’une zone industrielle.",
  emoji: '🎬'
},
{
  id: 'm394',
  lat: 32.7397077,
  lng: 129.8146888,
  title: 'Nagasaki Sunset Marina',
  category: 'Parc',
  description: "Magnifique marina avec vue sur la mer, endroit où un aigle m’a volé mon donut… moment inattendu.",
  emoji: '🦅'
},
{
  id: 'm395',
  lat: 32.7684503,
  lng: 129.8003856,
  title: 'Kakidomari Beach',
  category: 'Plage',
  description: "Superbe plage avec formations rocheuses originales. C’est ici que je me suis baigné pour la première fois en 2026.",
  emoji: '🏖️'
},
{
  id: 'm396',
  lat: 32.7712272,
  lng: 129.8011930,
  title: 'Umbrella Rock (Apple Rock)',
  category: 'Nature',
  description: "Rocher emblématique en forme de pomme/ombrelle situé près de la plage de Kakidomari.",
  emoji: '🪨'
},
{
  id: 'm397',
  lat: 32.7727462,
  lng: 129.8645052,
  title: 'Musée de la Bombe Atomique de Nagasaki',
  category: 'Musée',
  description: "Musée retraçant l’histoire du bombardement atomique de Nagasaki avec témoignages et objets marquants.",
  emoji: '🏛️'
},
{
  id: 'm398',
  lat: 32.7737108,
  lng: 129.8632589,
  title: 'Atomic Bomb Hypocenter Monument',
  category: 'Monument',
  description: "Point exact de l’explosion atomique, lieu chargé d’histoire et de mémoire.",
  emoji: '🕊️'
},
{
  id: 'm399',
  lat: 32.7765203,
  lng: 129.8637327,
  title: 'Parc de la Paix de Nagasaki',
  category: 'Parc',
  description: "Parc commémoratif dédié à la paix avec statues et mémoriaux.",
  emoji: '🌿'
},
{
  id: 'm400',
  lat: 32.7761310,
  lng: 129.8684423,
  title: 'Cathédrale d’Urakami',
  category: 'Monument',
  description: "Cathédrale reconstruite après la Seconde Guerre mondiale, symbole de résilience.",
  emoji: '⛪'
},
{
  id: 'm401',
  lat: 32.7547296,
  lng: 129.8717481,
  title: 'Musée des 26 Martyrs du Japon',
  category: 'Musée',
  description: "Musée dédié aux martyrs chrétiens du Japon et à l’histoire du christianisme dans le pays.",
  emoji: '🏛️'
},
{
  id: 'm402',
  lat: 32.7416798,
  lng: 129.8705063,
  title: 'Musée préfectoral d’art de Nagasaki',
  category: 'Musée',
  description: "Musée d’art moderne avec expositions variées et architecture contemporaine.",
  emoji: '🖼️'
},
{
  id: 'm403',
  lat: 32.7343067,
  lng: 129.8691507,
  title: 'Glover Garden',
  category: 'Parc',
  description: "Jardin historique avec anciennes résidences occidentales et vue sur le port.",
  emoji: '🌺'
},
{
  id: 'm404',
  lat: 32.7461267,
  lng: 129.8860715,
  title: 'Kazagashira Park',
  category: 'Parc',
  description: "Parc situé sur les hauteurs offrant une vue panoramique sur Nagasaki.",
  emoji: '🌳'
},
{
  id: 'm405',
  lat: 32.7463929,
  lng: 129.8867571,
  title: 'Kaze No Daichi Museum',
  category: 'Musée',
  description: "Petit musée d’art où je discute et prends un thé avec l’artiste du lieu, expérience très humaine.",
  emoji: '🎨'
},
{
  id: 'm406',
  lat: 32.7526058,
  lng: 129.8494499,
  title: 'Plateforme d’observation du mont Inasa',
  category: 'Point de vue',
  description: "Point de vue spectaculaire sur Nagasaki, réputé pour ses couchers de soleil et sa vue nocturne.",
  emoji: '🌃'
},
{
  id: 'm407',
  lat: 32.5931825,
  lng: 129.7619891,
  title: 'Musée Gunkanjima',
  category: 'Musée',
  description: "Musée dédié à l’île abandonnée de Hashima (Gunkanjima) et à son histoire industrielle.",
  emoji: '🏚️'
},
{
  id: 'm408',
  lat: 32.5939946,
  lng: 129.7618158,
  title: 'Nagasaki City Dinosaur Museum',
  category: 'Musée',
  description: "Musée sur les dinosaures et la préhistoire, situé en bord de mer.",
  emoji: '🦖'
},
{
  id: 'm409',
  lat: 32.5799309,
  lng: 129.7404936,
  title: 'Mont Gongen',
  category: 'Nature',
  description: "Montagne offrant une immersion nature avec vue sur la côte sauvage de Nagasaki.",
  emoji: '⛰️'
},
{
  id: 'm410',
  lat: 32.5812299,
  lng: 129.7733835,
  title: 'Plage de Wakimisaki Beach',
  category: 'Plage',
  description: "Plage isolée et sauvage avec une eau claire et peu de touristes.",
  emoji: '🏖️'
},
{
  id: 'm411',
  lat: 35.7144310,
  lng: 139.7808780,
  title: 'Auberge Tomariya Ueno',
  category: 'Logement',
  description: "Auberge de jeunesse à Tokyo où je séjourne pendant 12 nuits, située dans le quartier d’Ueno.",
  emoji: '🛏️'
},
{
  id: 'm412',
  lat: 35.6996449,
  lng: 139.7713065,
  title: 'Akihabara Electric Town',
  category: 'Quartier',
  description: "Quartier emblématique de la culture otaku avec magasins d’électronique, manga, figurines et salles d’arcade.",
  emoji: '🎮'
},
{
  id: 'm413',
  lat: 35.7187788,
  lng: 139.7763467,
  title: 'Musée national de Tokyo',
  category: 'Musée',
  description: "Le plus grand musée du Japon, présentant des collections d’art et d’artefacts historiques japonais et asiatiques.",
  emoji: '🏛️'
},
{
  id: 'm414',
  lat: 35.7199588,
  lng: 139.7756289,
  title: 'National Institutes for Cultural Heritage',
  category: 'Musée',
  description: "Institut dédié à la préservation et à la recherche sur le patrimoine culturel japonais.",
  emoji: '🏛️'
},
{
  id: 'm415',
  lat: 35.7127587,
  lng: 139.7747931,
  title: 'The Ueno Royal Museum',
  category: 'Musée',
  description: "Musée accueillant principalement des expositions temporaires d’art moderne et contemporain.",
  emoji: '🖼️'
},
{
  id: 'm416',
  lat: 35.7172294,
  lng: 139.7728042,
  title: 'Tokyo Metropolitan Art Museum',
  category: 'Musée',
  description: "Grand musée d’art proposant des expositions variées dans un cadre moderne au cœur du parc d’Ueno.",
  emoji: '🖼️'
},
{
  id: 'm417',
  lat: 35.7148091,
  lng: 139.7734312,
  title: 'Parc d’Ueno',
  category: 'Parc',
  description: "Grand parc public très animé avec musées, étangs et cerisiers, parfait pour se balader.",
  emoji: '🌸'
},
{
  id: 'm418',
  lat: 35.7018587,
  lng: 139.7713783,
  title: 'Hakata Furyu Akihabara flagship shop',
  category: 'Restaurant',
  description: "Restaurant de ramen testé au hasard, pas incroyable mais fait le travail.",
  emoji: '🍜'
},
{
  id: 'm419',
  lat: 35.7211418,
  lng: 139.7707459,
  title: 'Kayaba Coffee',
  category: 'Café',
  description: "Excellent café/brunch avec des sandwichs vraiment très bons dans un cadre traditionnel très joli.",
  emoji: '☕'
},
{
  id: 'm420',
  lat: 35.7070409,
  lng: 139.7740524,
  title: 'St. Marc Cafe',
  category: 'Café',
  description: "Café où je prends un parfait banane tiramisu chocolat.",
  emoji: '🍰'
},
{
  id: 'm421',
  lat: 35.7083809,
  lng: 139.7753057,
  title: 'Ramen Kamo to Negi Ueno Okachimachi Main Store',
  category: 'Restaurant',
  description: "Ramen spécialisé au canard, bon mais sans plus.",
  emoji: '🍜'
}











    ],
    journal: [
      {
        id: 'j1',
        day: 1,
        title: 'Busan (Corée du Sud) → Osaka (Japon)',
        excerpt: `Journée de transition : Busan (Corée du Sud) → Osaka (Japon).

C’est avec émotion que je rends l’appartement, avant de me diriger vers l’aéroport de Busan, l’aéroport international de Gimhae.

Au programme : 1h de bus, 1h05 d’avion, puis encore 1h de train avant d’arriver dans mon futur logement à Osaka.

Départ de Busan à 10h.
Arrivée dans l’appartement à Osaka à 17h30.

Et j’ai l’impression de ne pas vraiment comprendre ce qu’il se passe.
En une heure, j’ai changé de pays, changé de culture et changé d’appartement.

Le sentiment est étrange, presque irréel, comme si cette journée n’avait pas vraiment de sens.

Moi qui dormais encore paisiblement ce matin à Busan, me voilà à écrire ces mots, allongé dans mon lit à Osaka.

Quel globe-trotter.
Et surtout, quel plaisir de vivre ce genre de sensation.

Une fois sur place, je prends rapidement mes marques.
J’éparpille mes affaires, puis je m’installe tranquillement sur mon PC pour écrire sur les deux derniers jours passés à Busan.

En début de soirée, je pars vagabonder dans les rues de mon nouveau quartier, en quête d’un repas simple, consistant et surtout réconfortant.

Rien de mieux alors que des ramens traditionnels.
Je trouve un tout petit restaurant, pas loin de mon logement.
Je m’installe à l’intérieur, juste devant la cuisine, où je regarde le chef préparer les ramens sous mes yeux.

4,90 €.
Hyper rentable.
Et surtout, rien de mieux que ce lieu pour commencer mon voyage japonais.

Voilà ce qui fut mon dernier vrai jour à Busan, et plus largement en Corée du Sud.
Une journée qui ressemble finalement davantage à une transition vers une nouvelle partie du voyage : Le Japon`,
        mood: 'Busan (Corée du Sud) → Osaka (Japon)'
      },
      {
  id: 'j2',
  day: 2,
  title: 'Premiers pas à Osaka : Namba',
  excerpt: `Premier jour complet à Osaka, et je me dirige vers le quartier le plus iconique de la ville : Namba.

Namba est un lieu hyper touristique, avec une multitude de boutiques diverses et variées.

Avant d’attaquer la visite, je m’arrête dans un FamilyMart (convenience store). Je prends un jus d’orange et un pancake fourré à la crème pâtissière et aux pépites de chocolat. Un régal.

Dans ce quartier, on trouve de tout : des boutiques de couteaux de cuisine, de katanas, de décorations japonaises, etc.
Le tout est organisé dans de grandes galeries marchandes ouvertes sur la ville, de longues allées dans lesquelles on peut facilement se perdre en bifurquant ici et là.

Et évidemment, une multitude de petits restaurants et de cafés intimistes, souvent avec une dizaine de places maximum chacun.
Je me balade tranquillement et entre dans plusieurs grands centres commerciaux.

Notamment Namba Parks, réparti sur huit étages, avec un jardin en guise de rooftop.

Mais aussi un immense immeuble de salles d’arcade GiGO, rempli de machines en tout genre : jeux de voiture, de tir, de danse ou encore d’agilité.

Je passe ensuite par Namba Hips, un espace dédié aux slots (une sorte de casino, ou plutôt un immeuble entier rempli de machines à sous)
C’est extrêmement étrange de voir, à 14 h, tous ces gens fixer les écrans et jouer de manière presque robotique.
L’ambiance est assez angoissante, surtout que ce n’est pas quelque chose qui m’attire.
Mais ça fait partie de la culture japonaise, alors je prends le temps de me balader entre les étages pour mieux comprendre le lieu.

Je me dirige ensuite vers un tout petit temple caché dans une ruelle : Hōzen-ji.

Puis je pars vers l’endroit le plus emblématique du quartier et de la ville : Dōtonbori : le quartier de la street food.
Un canal traverse le quartier, bordé de grands immeubles couverts de néons, de panneaux publicitaires et d’enseignes lumineuses.
Je longe le canal, observant tout autour de moi ce lieu culte d’Osaka.

Je termine la journée par la visite du sanctuaire atypique de Namba Yasaka Jinja, avec son immense statue de tête de lion de 12 mètres.
D’après ce que j’ai pu voir, si le lion a la gueule grande ouverte, c’est pour dévorer les mauvais esprits.

Une fois la visite terminée, je rentre tranquillement chez moi, en passant par un supermarché pour faire quelques courses pour la semaine.`,
  mood: 'Premiers pas à Osaka : Namba'
},
{
  id: 'j3',
  day: 3,
  title: 'Sanctuaire Sumiyoshi Taisha',
  excerpt: `Visite aujourd’hui d’un sanctuaire shinto : Sumiyoshi Taisha.
Peu de touristes, et surtout hyper calme.

C’est l’un des plus anciens sanctuaires du Japon, fondé au IIIe siècle, bien avant l’influence de l’architecture bouddhiste.

Le sanctuaire est connu pour son pont arqué emblématique : le Taikobashi, d’un orange vif typiquement japonais.

Dans la tradition shinto, le vermillon (la couleur orange) est censé repousser les mauvais esprits et symbolise la protection.

Je pars ensuite me balader dans le parc juste à côté : Sumiyoshi Park.
Beaucoup de résidents viennent ici promener leur chien (notamment pas mal de Shiba Inu).

Je m’assois sur un banc pendant une trentaine de minutes, face à un petit lac.
Quelques oiseaux se déplacent tranquillement sur l’eau.
Rien de spectaculaire, mais tout est apaisant.

Je décide ensuite de rentrer à pied.
Je marche dans de petites rues calmes et typiquement japonaises : maisons basses, vélos stationnés de partout, fils électriques au-dessus de ma tête, silence presque total.

Une journée plus calme qu’hier, dans un Osaka beaucoup plus résidentiel.`,
  mood: 'Sanctuaire Sumiyoshi Taisha'
},
{
  id: 'j4',
  day: 4,
  title: 'Le Château d’Osaka',
  excerpt: `Découverte aujourd’hui de l’un des lieux les plus emblématiques de la ville : le Château d’Osaka, entouré de larges douves et d’un immense parc.

Grand soleil aujourd’hui, et ça fait vraiment plaisir. Après deux jours bien nuageux, je découvre enfin Osaka sous une belle lumière.

Le parc est entièrement gratuit, et la visite du château (qui abrite aujourd’hui un musée ainsi qu’un observatoire à 360 degrés) coûte 6,50 €.
Parfait pour moi qui voulais visiter un musée ici : voilà le premier au Japon.

Sur 6 étages, on découvre toute l’histoire du château. Il a été construit à partir de 1583 par le célèbre seigneur de guerre Toyotomi Hideyoshi.

Le château a connu de nombreuses destructions et reconstructions au fil des siècles :
une première destruction majeure en 1615 lors du siège d’Osaka,
plusieurs incendies,
une reconstruction moderne en béton en 1931,
puis des dégâts importants lors des bombardements de la Seconde Guerre mondiale en 1945.

La version actuelle, restaurée et transformée en musée, date de 1997.

La visite est vraiment intéressante, notamment grâce aux grandes fresques représentant les batailles autour du château, ainsi qu’aux armures complètes de samouraïs exposées.

Je termine par l’observatoire, tout en haut. La vue n’est pas spectaculaire, mais c’est agréable de voir l’ensemble du parc et de prendre conscience de l’ampleur du site.

Pour finir la journée, je me dirige vers le quartier de Dōtonbori pour faire un tour dans l’immense magasin Don Quijote.

7 étages remplis de goodies en tout genre, et surtout une quantité impressionnante de gâteaux et de boissons totalement farfelues qu’on ne trouve qu’au Japon.
Des KitKat à la fraise, au matcha, et même des versions ultra spécifiques qu’on ne voit nulle part ailleurs.`,
  mood: 'Le Château d’Osaka'
},
{
  id: 'j5',
  day: 5,
  title: 'Musée municipal des beaux-arts d’Osaka jardin zen Keitakuen Garden',
  excerpt: `Aujourd’hui, je regarde la carte pour voir ce que je peux faire, et je remarque que je ne suis pas loin d’un parc avec le Musée municipal des beaux-arts d’Osaka.

Je me prépare et je sors en direction du musée. En marchant, je me rends compte que je suis proche du quartier de Shinsekai, très connu pour la tour Tsutenkaku et pour ses nombreux restaurants tout autour.

Je décide donc de me balader un peu dans ce quartier, histoire de voir l’ambiance et les différentes activités possibles.

Une fois le tour terminé, je me dirige vers le musée. L’entrée me coûte 2,75 €, avec un accès inclus au jardin zen Keitakuen Garden.

Le musée se visite assez rapidement. On y trouve principalement des œuvres d’art asiatique classique : calligraphies, peintures et sculptures. C’est calme et peu fréquenté.

Je me retrouve ensuite dans le jardin. Là, je prends vraiment le temps.
Je m’assois, je réfléchis, je contemple le petit étang. Je lis un chapitre de mon livre, installé sur un banc face au soleil.

Très agréable.

Puis je me dirige vers le parc public juste à côté : Tenshiba.

Ambiance très “couple” aujourd’hui. Nous sommes le 14 février, et beaucoup sont assis sur l’herbe à partager des snacks, discuter, profiter du moment.

Je reste une trentaine de minutes à me balader entre les petites boutiques présentes sur place, puis je regagne tranquillement mon quartier en fin de journée.`,
  mood: 'Musée municipal des beaux-arts d’Osaka jardin zen Keitakuen Garden'
},
{
  id: 'j6',
  day: 6,
  title: 'Osaka Museum of Natural History et Nagai Botanical Garden',
  excerpt: `Je sors de mon quartier et passe par le petit Momogaike Park. Juste à côté, j’aperçois un stade municipal de baseball.

Les sensations sont exactement les mêmes que lorsqu’on tombe, un dimanche, sur un match de football dans une commune en France.
Sauf qu’ici, c’est du baseball : les cris des entraîneurs, les discussions entre joueurs, le bruit de la balle contre la batte.

Pendant quelques minutes, j’ai vraiment l’impression d’être un résident moi aussi, de regarder brièvement le match de l’équipe de mon quartier.

Plus je marche, plus je m’enfonce dans des quartiers extrêmement calmes. Les gens se promènent tranquillement. Je vois même une dame faire du jardinage devant chez elle.
À seulement une heure à pied du centre-ville d’Osaka, plus de foule, plus de grands immeubles.
Uniquement des petites maisons résidentielles.
Je sens même l’odeur de la cuisine s’échapper de certaines habitations.

J’arrive ensuite dans l’immense Nagai Park.
On y trouve des jardins, un grand stade d’athlétisme, un stade de baseball et un de football. Plusieurs clubs de jeunes sportifs sont en train de s’échauffer à l’extérieur.

Je continue ma balade en direction du musée.
Pour 1,50 €, la visite est agréable sans être exceptionnelle. En 45 minutes, elle est bouclée.
On y découvre des expositions sur les origines de la vie, les espèces qui cohabitent avec nous, ainsi qu’une partie intéressante consacrée aux dinosaures et aux animaux du Mésozoïque.

Mais le vrai plaisir est à l’extérieur.

Le Nagai Botanical Garden est divisé en plusieurs espaces : jardins chinois, japonais, jardins floraux…
Idéal pour se balader, se perdre et marcher au hasard dans les allées.

Je fais ensuite le chemin du retour, toujours à pied. Cette fois, je traverse des quartiers plus huppés, toujours aussi calmes.
Chaque maison possède une ou deux voitures, un petit jardin, quelques vélos devant l’entrée. De véritables petites villas.

Aucun restaurant.
Aucun convenience store.
Juste des habitations… et le silence.`,
  mood: 'Osaka Museum of Natural History et Nagai Botanical Garden'
},
{
  id: 'j7',
  day: 7,
  title: 'Den Den Town, nostalgie et culture pop japonaise',
  excerpt: `Aujourd’hui, découverte du royaume des figurines et des jouets made in Japan !

Je me dirige vers Den Den Town, une rue entière de magasins pour les fans de figurines, d’animés/mangas et de jeux vidéo.

Je commence par entrer dans le magasin Mandarake, qui possède plus de 7 étages.  
À l’intérieur : des figurines collector, Goldorack, Transformers, Godzilla et autres figurines et petits robots.

Dans les étages supérieurs, on retrouve beaucoup de mangas, parfois connus, parfois moins connus, des affiches, des pins, des cartes, des CD, des DVD et des magazines anciens.

Je rentre ensuite dans le second magasin, Joshin Kids Land, et là, j’ai vraiment passé presque 1 heure entre les étages.

Ici, on retrouve des figurines plutôt modernes concernant Naruto, Dragon Ball Z, One Piece, Jujutsu Kaisen, Attaque des Titans, ainsi que Power Rangers, Marvel et DC Comics et d’autres licences que je ne connais pas.

Mais c’est dans les étages du dessus que je me suis perdu.

Des milliers de voitures miniatures, ainsi que des avions, bateaux, hélicoptères et trains.

J’ai vraiment eu un petit coup de nostalgie, car j’avais moi-même des miniatures comme jouets quand j’étais petit.  
Sûrement grâce à mon père qui en avait ou m’achetait celles-ci.

Ici, on retrouve parfois des miniatures pour quelques dizaines d’euros, puis d’autres beaucoup plus collectors qui peuvent monter jusqu’à 500 euros.

Parfois de la taille d’un doigt, d’autres de la taille d’une main, voire un peu plus grandes.

Je regardais attentivement les différents modèles de voitures : les Nissan Skyline, les Ferrari, Subaru, Mitsubishi, et même parfois des miniatures de voitures de films (Fast And Furious, James Bond, Ghostbusters, Batman, K 2000).

C’était vraiment cool, comme si j’étais dans une bulle à me rappeler quand j’étais petit et que je jouais aux voitures.

Il y avait même un étage pour les voitures télécommandées, ici collector, mais très nostalgique pour moi également.

Puis je suis rentré dans un magasin de jeux vidéo avec des jeux rétro (PS1, PS2, PS3, Nintendo 64, SEGA, NES, DS, etc.).  
Malheureusement, les licences sont en japonais, donc pas facile de lire les jaquettes.

Après avoir passé plusieurs heures dans ce quartier, je me suis baladé dans le marché iconique Kuromon Market, où il y a beaucoup de cuisine venant de la mer.

Je finis l’après-midi par un quartier vraiment sympa, celui des friperies, de la mode vintage et de la street culture : Amerikamura.  
On sent direct le style du quartier : les gens ont tous un style différent, très fashion.

Ici, des boutiques indépendantes et des boutiques vintage de seconde main.

On y retrouve de tout : des blousons en cuir, des chemises à carreaux, des vestes, des pulls, des lunettes, des casquettes, etc.

Malheureusement, moi qui adore les boutiques vintage, je suis en road trip avec deux sacs à dos bien chargés, donc je ne peux malheureusement plus rien prendre.  
Je ferai quelques achats à Tokyo avant mon retour en France, histoire de ramener quelques souvenirs.

Puis je rentre dans un centre commercial ouvert sur l’extérieur, où j’entre dans une boutique de vinyles et surtout dans un magasin avec uniquement des flippers avec des licences de films et séries (Pirates des Caraïbes, Avatar, James Bond, Star Wars, Le Parrain, Ghostbusters, Les Dents de la mer, Terminator et j’en passe).

Je joue au flipper du Parrain sans grand succès, mais le plaisir était là : être dans l’ambiance, entendre toutes les machines et les bruits des coups sur les boutons des flippers… sensation d’être dans les années 80–90.

Je finis la journée en rentrant dans une boutique Pokémon Center, avec plein de peluches et autres goodies.`,
  mood: 'Den Den Town, nostalgie et culture pop japonaise'
},
{
  id: 'j8',
  day: 8,
  title: 'Quartier Umeda',
  excerpt: `Balade sous un grand soleil dans le quartier central d’Osaka : Umeda.

C’est dans ce quartier que se trouve la gare centrale, Osaka Station, les grosses entreprises et les hôtels de luxe. Globalement, c’est ici que les touristes séjournent quelques jours.

Je suis donc entouré de buildings, de coffee shops et de restaurants bien notés, ainsi que d’énormes centres commerciaux.

Beaucoup de Japonais, sacoche de PC à la main, sortent ou rentrent dans les locaux. Beaucoup sont en costume.
Un peu comme à La Défense à Paris, ou encore à Gangnam en Corée du Sud : ici, tout va vite, tout est grand.

Je me balade dans un premier temps dans l’immense centre commercial Grand Front Osaka, où l’on retrouve des marques de luxe et de nombreux restaurants, puis je continue dans un deuxième mastodonte : Yodobashi Camera.
Et là, je n’ai réellement jamais vu un centre commercial aussi gigantesque en termes d’objets disponibles à l’achat.

Ici, il y a vraiment tout.
N’importe quelle petite pièce de n’importe quel objet semble disponible.

On passe de la pêche à la chasse, aux produits numériques, appareils photo, téléphones, ordinateurs…
Le moindre petit câble, la moindre pièce informatique est disponible à l’achat.

Des télévisions, des machines à laver, des jouets pour enfants, des miniatures, des figurines, des jeux vidéo.
Des centaines de claviers, des centaines de souris, des centaines de chaises gaming, et une quantité impressionnante d’écrans.

Enfin bref, il y a vraiment de quoi passer toute une après-midi à déambuler entre les étages, à tester les produits, à comparer.

C’est bien la première fois que je suis autant choqué par la taille d’un magasin et par la disponibilité immédiate des objets.

Moi qui adore la technologie, là, j’étais vraiment servi.

Je me dirige ensuite vers la Umeda Sky Building pour explorer quelques étages, puis je sors direction le parc Ume Kita Park où je me pose dans un café en fin de journée, j’y reste une bonne heure.`,
  mood: 'Quartier Umeda'
},
{
  id: 'j9',
  day: 9,
  title: 'Orange Street Osaka et lecture à la Osaka Municipal Central Library',
  excerpt: `Balade dans le quartier Orange Street Osaka et lecture à la Osaka Municipal Central Library.

Orange Street est une rue dédiée à la mode, aux pop-up stores et aux designers indépendants.
Elle n’est pas très grande, mais les boutiques sont vraiment cool.
Les designers viennent parfois vous parler pour donner plus de détails sur leurs pièces, expliquer leur travail, leur univers.
C’était sympa, plus humain que dans les grandes enseignes.

Sur la route pour aller vers le parc Utsubo, je tombe sur la bibliothèque centrale municipale d’Osaka.
Je décide d’y entrer.

Je me rends dans la section cinéma et je trouve un livre sur Michael J. Fox.

Je me pose et je lis pendant quasiment 2 heures.
À cette heure-ci, il n’y a que des personnes âgées et quelques étudiants.

Hyper intéressant de lire cette autobiographie.
L’acteur y retrace certains moments forts de sa vie, notamment la naissance de ses enfants, et comment toute sa famille et lui-même ont fait face à la maladie.
Il explique aussi comment il a réinventé son métier d’acteur tout en vivant avec la maladie de Parkinson.

Quelques passages sont très émouvants, notamment celui sur un chien qu’il a rencontré en Thaïlande.
Plus tard, il apprendra que le nouveau nom de ce chien est devenu Michael J. Fox.

En fin de journée, je me balade dans le Utsubo Park, entre les buildings.
Je le pensais un peu plus grand, mais ce n’est pas grave.
Il contient plusieurs terrains de tennis, un parc central avec un ruisseau et des jets d’eau.
C’est ici que je regarde le soleil disparaître derrière les immeubles.

Puis je reprends la route, direction Dotonbori de nuit, où je me balade tranquillement dans le quartier.`,
  mood: 'Orange Street Osaka et lecture à la Osaka Municipal Central Library'
},
{
  id: 'j10',
  day: 10,
  title: 'Temple Shi Tennō-ji et retour à Den Den Town',
  excerpt: `Découverte du temple bouddhiste Shi Tennō-ji, l’un des plus anciens temples du Japon (fondé en 593).

J’entre dans le temple : nous sommes une dizaine, aucun bruit, forte odeur d’encens et calme absolu.
L’ambiance est vraiment apaisante.

Pour monter à l’intérieur du pavillon Tenno-ji, il faut enlever ses chaussures (une tradition classique dans les temples japonais pour respecter la pureté du lieu) puis prendre les escaliers sur 4 étages.
Tout en haut, de petites fenêtres laissent passer la lumière, avec une jolie sculpture au milieu.

La visite était sympa et calme, j’ai pu faire de belles photos.

Je suis parti ensuite dans le quartier Den Den Town pour faire quelques boutiques que je n’avais pas faites la dernière fois (Hero Gangu, Volks Osaka Showroom, Super Potato Osaka, Taito Station et Animate Osaka Nipponbashi).

Globalement, c’est toujours la même chose : des figurines, des cartes collector, beaucoup de mangas ainsi que des jeux et consoles rétro.

Fin de journée dans le centre commercial Namba Parks, où je me balade entre les différentes enseignes.`,
  mood: 'Temple Shi Tennō-ji et retour à Den Den Town'
},
{
  id: 'j11',
  day: 11,
  title: "Musée de l’histoire d’Osaka et balade dans le parc du château d’Osaka",
  excerpt: `Journée sous la grisaille, donc je pars faire le musée de l’histoire d’Osaka (Osaka Museum of History).

Le musée retrace 1400 ans d’histoire de la ville, depuis l’époque où Osaka s’appelait Naniwa et était la capitale du Japon, jusqu’à l’ère moderne et la grande époque du Japon au XXe siècle.
On y trouve des reconstitutions, des maquettes et même des reproductions de rues anciennes.
Le musée offre également une belle vue en hauteur sur le château d’Osaka.

Dans le bâtiment voisin se trouve une petite exposition sur des éléments de décor de la série The Ghost Writer Wife (que je ne connais pas).

J’entre dans cette exposition et c’est en fait un décor de la série qui ressemble trait pour trait aux anciennes maisons japonaises.

Je finis par une balade autour du château d’Osaka, où je me pose devant une fontaine avant de rentrer à pied jusqu’à mon logement.

Google Maps me fait passer par le centre commercial Abeno Q’s Mall, et je reste perdu pendant 5 à 10 minutes à vouloir trouver la bonne sortie.

Puis sur le chemin, je vois un couple qui se mettent sur la pointe des pieds pour regarder par-dessus un mur. Ils observent une longue allée.

Des escaliers sont présents des deux côtés du mur, donc je décide d’y passer pour voir ce qu’il y a derrière, car de ce que je peux apercevoir, le quartier a l’air mignon.

J’aperçois alors cette longue allée avec des lanternes et des lumières roses qui sortent d’une trentaine de maisons.

Et j’ai très vite compris où j’avais mis les pieds : c’était le quartier rouge d’Osaka, Tobita Shinchi.

Il est 19 h, et il y a plusieurs jeunes hommes dans les rues. Et pendant tout le long des allées, les hommes se font accoster par les mères maquerelles.

Pour expliquer et bien visualiser la scène : dans chaque petite maison à l’entrée ouverte, il y a une mère maquerelle assise sur une chaise à l’intérieur. Elle appelle le client, et au milieu, sur un tatami avec coussins et produits de beauté, se trouve la prostituée.

Et étonnamment, le lieu est surveillé par la police : à chaque entrée du quartier, un policier est posté.

En effet, après quelques recherches, la technique est légale au Japon, car il est officiellement question de « rencontre fortuite » plutôt que de relation tarifée.

Je vois même un jeune homme, sac à dos sur les épaules, entrer dans l’une de ces maisons closes.

Et pendant les 20 minutes du trajet pour rentrer à l’appart, j’ai eu un sentiment bizarre. C’est quand même fou de voir autant de jeunes filles (maximum 25 ans), presque nues, exercer la prostitution de manière aussi ouverte.

Très loin de l’image que j’avais en tête, celle de la prostituée d’une quarantaine d’années faisant le tapin au coin d’une rue en France.

Ici, tout est mis en scène, presque comme dans un supermarché où le client fait son choix.`,
  mood: 'Musée de l’histoire d’Osaka et balade dans le parc du château d’Osaka'
},
{
  id: 'j12',
  day: 12,
  title: "Balade dans le parc Expo ’70 Commemorative Park",
  excerpt: `Aujourd’hui, direction le parc « Expo ’70 Commemorative Park », sûrement le parc le plus connu et le plus grand d’Osaka !

Il est situé à l’extrême nord de la ville, dans une zone plutôt industrielle.

Le parc est assez bizarre dans sa construction : une autoroute le sépare en deux.
D’un côté, un espace avec plusieurs stades, dont 2 de baseball.
De l’autre, un immense parc familial avec la célèbre Tour du Soleil (Tower of the Sun).

Je commence la journée en prenant le mauvais métro…
Résultat : 45 minutes de plus à pied pour rejoindre le parc.

Mais au final, cette erreur me fait entrer par la première partie du parc, celle avec les stades.

Et je me retrouve à regarder un match amateur de baseball dans l’un des stades !

L’ambiance est familiale : certaines familles ont amené glacière, parasol et même cafetière.
Je me pose et regarde ce match qui n’a pas l’air d’être un grand match, mais qui apporte quand même son ambiance japonaise.
Je reste une bonne demi-heure avant de partir explorer le grand parc derrière l’autoroute.

L’entrée coûte 1,50 €.

À l’entrée du parc se trouve la Tower of the Sun, immense sculpture créée pour l’exposition universelle de 1970 conçue par l’artiste japonais Taro Okamoto.

Elle mesure environ 70 mètres de haut.

La tour représente le passé, le présent et le futur :
- Le Masque d’or tout en haut, qui représente le futur.
- Le Visage du Soleil sur la face avant, qui symbolise le présent.
- Le Soleil noir à l’arrière, qui représente le passé.

Enfin le parc est assez grand mais on voit tout de suite que c’est un parc familial, beaucoup d’attractions et d’espaces pour enfants avec cependant de jolis jardins et notamment des cerisiers.`,
  mood: 'Balade dans le parc Expo ’70 Commemorative Park'
},
{
  id: 'j13',
  day: 13,
  title: 'Match du Cerezo Osaka au Yodoko Sakura Stadium',
  excerpt: `Il y a une semaine (Jour 6), je me baladais dans le parc Nagai pour aller voir le musée d’histoire naturelle ainsi que le jardin botanique du parc.

À l’entrée du parc, j’étais passé devant un grand stadium : le Yodoko Sakura Stadium, avec des affiches annonçant les différents matchs de foot qui allaient se disputer ici durant les prochains mois.

J’y ai vu la date du dimanche 22 février, et je me suis dit :
« Franchement, ça peut être très cool de voir un match de foot japonais. »

Et c’est ainsi que je me retrouve aujourd’hui, le dimanche 22 février, à aller voir mon premier match de foot japonais !

Il oppose le club d’Osaka, le Cerezo Osaka, contre Hiroshima, le Sanfrecce Hiroshima.

C’est un match de la ligue professionnelle : la J1 League.

Ce n’est que le début de la saison, et c’est la troisième journée du championnat.

Osaka a gagné son premier match et perdu le deuxième, tandis que Hiroshima a gagné les deux premiers et se trouve actuellement premier du classement.

Mais avant ça, je marche dans les rues des beaux quartiers pavillonnaires sous un grand soleil et 20 degrés. Comme si c’était l’été.
Je marche librement dans les rues calmes en direction du stade.
Musique dans les oreilles (🎵 With Every Heartbeat - Robyn), pas trop forte pour entendre les différents bruits de la vie des quartiers.

À quelques pas du stade, je commence à voir des supporters avec le fameux maillot rose.
Tout est super bien organisé.
Je commence par me prendre une bière à la buvette avant de rentrer dans ma tribune.
Je me suis posé à une buvette à la mi-temps mais pas de rencontre inopinée.

Enfin bref, résultat : 2-1 pour Hiroshima.

Deux buts après la 90ème minute.

Égalisation sur un retourné acrobatique d’un joueur d’Osaka à la 95ème minutes (1-1).

Mais deux minutes après, à la 97ème, but pour Hiroshima (2-1).

Une fin de match incroyable.
L’ambiance était super.`,
  mood: 'Match du Cerezo Osaka au Yodoko Sakura Stadium'
},
{
  id: 'j14',
  day: 14,
  title: 'Nara Park et ses daims en liberté',
  excerpt: `Je commence la semaine en partant à la découverte, sous un grand ciel bleu, de la ville de Nara, la ville des daims.

En effet, cette ville est connue dans le monde entier pour son parc : le Nara Park.

On y trouve des milliers de daims en liberté que l’on peut nourrir avec des biscuits spéciaux vendus sur place (1 € les 10 biscuits).

J’ai fait le tour de la partie ouverte du parc (une zone était fermée et n’ouvre qu’à partir du mois de mars), en passant par différents sanctuaires et temples qui font partie du site :
* le Kofuku-ji ainsi que son musée (malheureusement, le Kofuku-ji était en travaux et couverte d’une bâche),
* le Todai-ji,
* le Kasuga-taisha,
* le pavillon Ukimido qui, de base, est entouré d’eau mais là, le lac était vide.

Tout le long de ma balade, j’ai nourri des daims avec ces fameux biscuits.

Ici, les daims ont appris à faire une sorte de révérence : ils inclinent la tête pour qu’en retour on fasse la même chose et qu’on leur donne un biscuit.

C’était une balade agréable et super mignonne.

J’ai fini la journée en goûtant un mochi fait main chez Nakatanidou (très connu sur les réseaux sociaux).

Un mochi, c’est une pâtisserie japonaise à base de riz gluant pilé qui devient une pâte très lisse et élastique, avec à l’intérieur une pâte sucrée de haricot rouge.

C’était bon mais sans plus.`,
  mood: 'Nara Park et ses daims en liberté'
},
{
  id: 'j15',
  day: 15,
  title: 'Découverte de la ville de Sakai et ses kofun',
  excerpt: `Direction la ville de Sakai, au sud d’Osaka, connue pour ses tombeaux d’anciens empereurs japonais.

Ce matin, en traînant sur Instagram, je suis tombé sur le réel d’un influenceur vivant au Japon qui conseillait de visiter cette petite ville.
Je décide d’y aller pour la demi-journée.

Sakai n’est pas une ville incroyable en soi, mais elle est surtout connue pour ses kofun : d’immenses tumulus funéraires datant du IIIe au VIe siècle.
Ces tombeaux ont une forme en trou de serrure.
Ils sont attribués à d’anciens empereurs japonais et font partie du patrimoine mondial de l’UNESCO.

Moi qui pensais pouvoir m’approcher au plus près des tombeaux, j’ai vite compris que ce ne serait pas possible.
Ils sont protégés, fermés au public, et on ne peut les observer que depuis l’extérieur (ou du ciel via une montgolfière).

Je commence par entrer dans le petit sanctuaire Hochigai Shrine, puis je fais le tour d’un premier tumulus : le Mausoleum of Emperor Hanzei.

Ensuite, je me dirige vers le plus impressionnant de la ville : le Daisen-ryo Kofun, le tombeau de l’empereur Nintoku.
C’est l’un des plus grands tombeaux du monde.

Je me pose ensuite pendant près d’1h15 dans le parc juste à côté, le Daisen Park.
Je contemple le lac avec de la musique dans les oreilles, puis je lis un chapitre de mon livre.

Ambiance relaxante.
La ville est douce et tranquille.`,
  mood: 'Découverte de la ville de Sakai et ses kofun'
},
{
  id: '16',
  day: 16,
  title: 'Grosse journée de pluie',
  excerpt: `Grosse journée de pluie du matin au soir.

Pas de grosse motivation pour sortir, alors j’en profite pour faire quelques courses et lancer une grosse lessive.
D’ailleurs, j’ai un peu galéré à faire sécher les vêtements dans la chambre, faute de place.

Le reste de la journée : lecture, vidéos YouTube et préparation de mon activité de demain.`,
  mood: 'Grosse journée de pluie'
},
{
  id: 'j17',
  day: 17,
  title: 'Découverte de la ville de Kobe',
  excerpt: `Découverte de la ville de Kobe, connue pour son bœuf de Kobe, considéré comme l’une des viandes les plus exquises au monde.

Je décide d’y passer toute la journée afin de profiter au maximum de la ville.

Après 1h de train, j’arrive à Kobe et je commence par visiter le Ikuta Shrine, un sanctuaire en plein milieu des buildings.
J’en fais rapidement le tour.

Puis je me dirige vers le quartier emblématique de la ville : Nankinmachi, le Chinatown de Kobe.
Beaucoup de street food chinoise, des stands partout, mais rien ne m’attire particulièrement.

Quelques rues plus loin, je tombe sur le restaurant Kobe Beef Daichi qui propose de la viande de Kobe à manger à l’extérieur.

Pas envie de dépenser 70 € pour un repas complet, je me laisse tenter par deux petites brochettes de bœuf de Kobe avec un bol de riz.

Et bien c’était très très bon.
La viande fond littéralement en bouche.

Mais je ne dirais pas personnellement que c’est la meilleure viande que j’ai pu goûter.

L’expérience est faite : manger du bœuf de Kobe à Kobe. Parfait !

Une fois ce petit repas fini et le plein d’énergie fait, je me dirige vers une randonnée improvisée vers le Nunobiki Herb Garden.

Ce jardin est situé dans les montagnes au-dessus de la ville, accessible en téléphérique ou via une randonnée d’environ 1h.

Je n’ai pas réfléchi longtemps : je voulais partir à l’aventure dans la montagne, voir les cascades et le réservoir de Nunobiki.

La randonnée est assez simple mais agréable.
Quasiment personne sur les chemins : un vrai bonheur.

Une fois arrivé au jardin, je ne m’attendais pas à un complexe aussi beau.

Plusieurs jardins répartis sur les collines, des hamacs posés un peu partout avec vue sur la ville, et tout en haut une grande serre avec café ainsi qu’une maison de parfum, le tout avec de la musique symphonique diffusée dans les haut-parleurs.

L’endroit est extrêmement reposant.

Je reste une bonne demi-heure allongé dans un hamac à écouter de la musique jusqu’à la fermeture du parc à 17h10.

Je finis la journée avec les dernières lueurs du jour au Meriken Park, au bord du port de Kobe, avec la magnifique Kobe Port Tower.

L’esplanade est assez grande, avec vue sur le port, un grand hôtel et évidemment la tour de Kobe.

Ce fut une très agréable journée.

Le jardin Nunobiki Herb Garden a clairement été mon coup de cœur du jour.
Très poétique, lent et surtout très beau.`,
  mood: 'Découverte de la ville de Kobe'
},
{
  id: 'j18',
  day: 18,
  title: 'Quartier Nakazakicho et balade au Yodogawa Park',
  excerpt: `Aujourd’hui, je me rends dans l’un des derniers quartiers importants que je n’avais pas encore vu : Nakazakichō.

Quartier calme, maisons anciennes, petites ruelles, rempli de coffee shops, de boutiques d’objets faits main et de friperies vintage.

Après m’être baladé entre les boutiques, je pars en direction du parc Yodogawa.

Moi qui pensais tomber sur un parc aménagé au bord de la rivière…
Je me retrouve finalement dans une sorte de zone industrielle, avec les trains qui passent sur les ponts au-dessus de l’eau et les avions qui survolent ma tête toutes les dix minutes.

Le parc se situe au nord d’Osaka et marque un peu la fin de la ville.

Certes, il y a une piste cyclable, quelques bancs et quelques couples qui pique-niquent sous les arbres.
Mais l’endroit n’est pas spécialement beau, alors qu’il pourrait être super bien aménagé et chaleureux.

Je reste quand même une vingtaine de minutes, à écouter les oiseaux quand les autres bruits se taisent.

Puis je décide de rentrer à pied, pour me perdre dans les rues d'Osaka.
Pluie fine sur presque un tiers de ma marche.`,
  mood: 'Quartier Nakazakicho et balade au Yodogawa Park'
},
{
  id: 'j19',
  day: 19,
  title: 'Ikuno Korea Town',
  excerpt: `Aujourd’hui, direction l’est de la ville.
Aucun grand monument par ici, pas d’attraction touristique majeure, juste des quartiers normaux.

Je me balade dans le quartier d’Ikuno-ku, où je découvre le Osaka Ikuno Korea Town.
Un petit marché coréen qui me rappelle quelques souvenirs de mon voyage en Corée du Sud.

En me promenant dans les rues, on sent que c’est ici la réalité de la vie japonaise.

Juste la vie normale :
un marché de quartier, quelques petits parcs, des gens qui se promènent, qui font leurs courses, qui discutent.
Loin de la pression du travail et des hautes tours des quartiers d’affaires.`,
  mood: 'Ikuno Korea Town'
},
{
  id: 'j20',
  day: 20,
  title: 'Randonnée à Minoo et temple des Daruma',
  excerpt: `Dimanche randonnée à Minoo, au nord d’Osaka.

Le coin est connu pour la grande cascade de Minoo, haute d’environ 33 mètres.
Environ 45 minutes de marche depuis le dernier arrêt de train, qui s’arrête juste au pied des montagnes, pour rejoindre la cascade.

Au départ, il y a des petits cafés et des boutiques, puis on s’enfonce petit à petit dans la montagne, dans la forêt, jusqu’à arriver face à la belle cascade.
Randonnée hyper simple et accessible à tous.

Je fais quelques photos, je m’assois sur un banc et je contemple l’arc-en-ciel qui s’est formé en bas de la cascade : très joli.

Ensuite, 50 minutes de marche le long de la route en direction du temple Katsuo-ji.

Le temple Katsuo-ji, qu’on appelle le « temple de la victoire », est rempli de petits Daruma posés un peu partout : sur les marches, dans les jardins, au bord des chemins…

Un Daruma, c’est une figurine japonaise, une petite poupée ronde, souvent rouge, qui symbolise la persévérance.
Elle est vendue sans yeux : quand tu te fixes un objectif, tu dessines un premier œil. Et quand tu l’atteins, tu dessines le deuxième.
Sa forme est faite exprès : même si elle tombe, elle se redresse toujours.

Coup de cœur pour ce temple. Il y a vraiment des milliers et des milliers de Daruma partout.

Il y a des jets d’eau, un petit lac avec des carpes koi, et un parcours à suivre pour se balader dans un sens bien précis à travers le temple.

C’était super agréable, magnifique, perché dans les hauteurs des montagnes.

J’ai pu faire de magnifiques photos et vidéos.

J’ai fini la journée en refaisant le chemin inverse à pied jusqu’à la station.
Il y avait la possibilité de prendre un bus, mais je voulais terminer la journée tranquillement et voir la forêt ainsi que les chemins de la cascade de nuit.

Sensation superbe, agréable, presque magique de voir les lanternes et les maisons traditionnelles éclairées.

J’ai même croisé une famille de singes sur le chemin, c’était assez marrant.

Magnifique journée, superbe randonnée.`,
  mood: 'Randonnée à Minoo et temple des Daruma'
},
{
  id: 'j21',
  day: 21,
  title: 'Dernière balade à Dōtonbori',
  excerpt: `Balade à Dōtonbori.

Je ne pense pas revenir ici avant mon départ d’Osaka, alors j’en profite pour vraiment me balader dans le quartier, découvrir les petites comme les grosses boutiques cultes.

C’est un peu la place iconique de la ville, avec ses néons, ses écrans géants ect.

Autant y passer du temps une dernière fois, prendre le temps de regarder, d’observer, et de m’imprégner une dernière fois de cette ambiance.`,
  mood: 'Dernière balade à Dōtonbori'
},
{
  id: 'j22',
  day: 22,
  title: 'Pluie, organisation et projet',
  excerpt: `Pas grand-chose aujourd’hui, de la pluie toute l’après-midi.

Le musée que je voulais faire est fermé le mardi, donc je reporte ça à demain.
Je ferai demain un combo : musée classique + un musée d’art moderne.

Gros tri de photos et de vidéos.
Je commence à être limité niveau stockage, une journée, c’est quasiment 1 Go de contenu entre photos et vidéos.

J’en ai aussi profité pour avancer sur l’élaboration et la conception visuelle de mon nouveau projet, qui verra le jour d’ici quelques mois.`,
  mood: 'Pluie, organisation et projet'
},
{
  id: 'j23',
  day: 23,
  title: 'Osaka Municipal Housing Museum et Nakanoshima Museum of Art (NAKKA)',
  excerpt: `Aujourd’hui, le Osaka Municipal Housing Museum est bien ouvert.

Je pars donc le visiter pour 3,25 €.
Le musée a reproduit en taille réelle, à l’intérieur d’un grand bâtiment, un village japonais de l’époque Edo (1603 – 1868).

On peut se balader dans les ruelles, entrer dans certaines maisons, et vraiment avoir l’impression de revenir plusieurs siècles en arrière.
C’est carrément immersif, avec en plus une simulation du passage du jour à la nuit.

La deuxième partie du musée est consacrée à des maquettes à l’échelle 1/50 qui reconstituent certains lieux d’une ville japonaise entre les années 1920 et 1960.
On voit la ville se métamorphoser au fil des décennies, entre modernisation, arrivée des tramways, évolution des bâtiments… c’est hyper intéressant.

Ensuite, je me rends au Nakanoshima Museum of Art (NAKKA), où je découvre une exposition temporaire sur Sarah Morris.

J’ai bien aimé l’exposition.
En plus de ses toiles très graphiques, l’artiste a réalisé plusieurs mini-documentaires sur des villes comme New York, Rio ou Paris.

J’ai pu en apprendre davantage sur son travail, notamment sur sa collaboration avec l’architecte Frank Gehry, à l’origine de l’architecture de la Fondation Louis Vuitton à Paris.

Je finis la journée par une balade au Nakanoshima Rose Garden, un parc posé au milieu des buildings sur l’île de Nakanoshima, entourée par la rivière Tosabori.
Un peu comme l’île de la Cité à Paris.`,
  mood: 'Osaka Municipal Housing Museum et Nakanoshima Museum of Art (NAKKA)'
},
{
  id: 'j24',
  day: 24,
  title: 'Le château du héron blanc à Himeji',
  excerpt: `Direction la ville de Himeji pour voir le plus beau château du Japon : le Château de Himeji.

Situé dans la ville d’Himeji, il est accessible en environ 2h de train depuis Osaka, finalement pas très loin de Kobe.

Une fois arrivé à la gare d’Himeji, il reste environ 15 minutes à pied sur une longue ligne droite.
Et au loin, on voit déjà le château qui domine la ville.

Le château d’Himeji est considéré comme le plus beau et le mieux conservé du Japon.
Construit au XIVᵉ siècle, il est classé au patrimoine mondial de l’UNESCO.
Il est surnommé le “château du héron blanc”, car ses murs blancs et ses toits courbés donnent l’impression d’un oiseau prêt à s’envoler.

La visite du château est vraiment cool.
On peut entrer à l’intérieur (il faut enlever ses chaussures et les porter dans un petit sac) et monter étage par étage pour découvrir comment le bâtiment était organisé et à quoi servaient les différentes pièces.

On traverse aussi plusieurs portes, couloirs et chemins défensifs qui étaient pensés pour ralentir les ennemis en cas d’attaque.

Le comble, c’est que le château possède presque tous les systèmes de défense possibles (meurtrières pour les archers, ouvertures pour jeter des pierres, labyrinthes de portes et de passages), mais il n’a en réalité jamais été attaqué pendant plus de 400 ans d’existence.

Malheureusement, l’intérieur est complètement vide, ce qui rend parfois difficile d’imaginer comment le château devait être aménagé et occupé à l’époque.

Je me suis alors imaginé, comme je le fais souvent dans les châteaux (français ou même espagnols), être un seigneur marchant seul dans les couloirs, en regardant par les fenêtres la beauté des extérieurs.

Après la visite, je me suis dirigé vers le Koko-en Garden, un jardin japonais situé à 5 minutes du château.

Ce jardin est composé de 9 jardins différents, chacun avec son propre style : jardin de seigneur féodal, jardin de thé, étangs avec carpes koï, petits ruisseaux, une petite forêt de bambous, etc.

Belle découverte aujourd’hui, même si la ville d’Himeji ne possède finalement que ces deux grandes choses à faire.

Je me suis baladé dans les quartiers mais la ville semble assez calme, presque un peu morte et pas très intéressante.

Les autres activités de la ville, comme les parcs près de l’eau ou certains points de vue dans les montagnes, sont accessibles avec environ 1 heure de transport supplémentaire, ce qui commence à faire beaucoup quand on vient d’Osaka.`,
  mood: 'Le château du héron blanc à Himeji'
},
{
  id: 'j25',
  day: 25,
  title: 'Aquarium kaiyukan',
  excerpt: `Dernière activité à Osaka : l’aquarium Kaiyukan, l’un des aquariums les plus grands et impressionnants du monde.

C’était officiellement la dernière activité à Osaka, et j’ai passé toute l’après-midi là-bas.

Au départ, on traverse plusieurs zones avec différents animaux : des canards, des loutres, des phoques, des manchots, ainsi que plusieurs petits aquariums remplis de poissons tropicaux.

Puis j’arrive au niveau de l’aquarium principal, celui qui représente l’océan Pacifique.

Et c’est là que la magie opère.
Un immense bassin sur plusieurs étages. L’un des plus grand aquarium du monde est sous mes yeux, et je peux voir passer lentement des requins-baleines, des raies manta, des requins, des bancs de poissons et plein d’autres créatures marines.

Je m’assois sur un petit fauteuil et je contemple, avec une musique symphonique diffusée dans les haut-parleurs, ces merveilleuses créatures.

Je me lève ensuite pour continuer la visite, mais je vois que c’est bientôt la fin du parcours.
Il reste environ 20 minutes.

Alors je décide de remonter un peu et de revenir à mon fauteuil.

Je ne sais pas trop pourquoi, mais je me sentais bien ici.

Paisible, relax.
À observer les mouvements lents des animaux, les poissons tourner doucement dans l’eau, accompagné de cette musique presque envoûtante, ambiance aquatique.

Après ça, je finis la journée par la visite d’un garage de voitures sportives assez connu à Osaka : Mr. Hiro Car Studio.

À l’intérieur, il y a plusieurs voitures japonaises mythiques, toutes collectors.
On peut notamment voir des Nissan Skyline GT-R R34 et R35, une Subaru, et la fameuse Mazda RX-7 de l’univers du film Fast & Furious : Tokyo Drift.

La soirée se termine sous la pluie.
Je prépare mes deux sacs à dos, j’achète un plat préparé au supermarché et je me pose tranquillement devant un épisode de ma série (Psych : Enquêteur malgré lui).

Demain matin, départ à 10h pour Kyoto.

Étape numéro 2 de mon voyage au Japon.`,
  mood: "L'Aquarium kaiyukan"
},
{
  id: 'j26',
  day: 26,
  title: 'Journée de transition : Osaka → Kyoto',
  excerpt: `Départ à 10h de mon logement à Osaka, arrivée près de mon auberge à Kyoto vers 11h45.
J’ai pris un métro assez lent au lieu du train, pour seulement 3,50 € pour environ 50 km, ça valait largement le coup.

En quittant mon logement, je croise des dizaines de personnes comme moi : sacs à dos/valises un peu partout.
C’est l’heure classique des check-out dans les hôtels et les Airbnb.

L’enregistrement de mon auberge de jeunesse est prévu à 16h, alors je patiente dans un Burger King puis dans un Starbucks proche de l’auberge, avec mes deux sacs à dos.

J’attends tranquillement, mais avec quand même un peu de stress.
C’est la première fois que je vais séjourner dans une auberge de jeunesse, et plus précisément dans un dortoir mixte de 6 personnes avec lits superposés.

Je vais y rester 14 jours, donc j’espère que tout va bien se passer : réussir à prendre mes marques, dormir sans trop de ronflements des autres et surtout me sentir à l’aise.
Et qui sait… faire quelques rencontres.

Je troque les appartements et chambres individuelles dans lesquels je séjourne depuis 3 mois pour les auberges de jeunesse, à partir d’aujourd’hui et jusqu’à la fin de mon voyage.

Ce qui est incroyable, c’est que là je suis en plein hypercentre de Kyoto.
Parfait pour visiter la ville sans m’infliger de longs trajets chaque jour.
Ça va être super de pouvoir partir le matin et revenir le soir sans devoir reprendre les transports.

Puis, en fin d’après-midi, je fais la rencontre d’Alice, 62 ans, qui voyage seule depuis des années.
On part prendre un café ensemble et on discute de nos vies respectives.
Elle a été guide touristique une grande partie de sa vie en Europe et voyage maintenant tranquillement seule en Asie.

Plus tard, dans la salle à manger de l’auberge, je rencontre un couple de Français d’environ 30 ans.
On discute toute la soirée : d’abord en anglais avec un Canadien, puis entre nous en français un peu plus tard.

Une rencontre très agréable qui rend l’expérience de l’auberge tout de suite beaucoup plus cool.`,
  mood: 'Journée de transition : Osaka → Kyoto'
},
{
  id: 'j27',
  day: 27,
  title: 'Premier réveil à l’auberge, premier jour entier à Kyoto',
  excerpt: `Je commence la journée par un petit déjeuner rapide, puis je pars me perdre dans les rues toute la journée.

Je me dirige un peu au hasard et tombe sur plein de petits sanctuaires de quartier : le Go'o Shrine, le Seimei-jinja, le Shiramine-jingu, le Honpo-ji Temple, le Kenkun Shrine, le Kamigoryo Shrine, puis la forêt sacrée Tadasu no Mori et enfin le célèbre Shimogamo-jinja.

Sur le chemin, j’aperçois plusieurs cerisiers en fleurs.

Je fais aussi une pause dans le Funaokayama Park, un petit parc perché sur une colline avec quelques points de vue sur la ville.

Je termine ensuite la journée par une balade dans les Kyoto Gyoen National Garden, les grands jardins impériaux situés au cœur de la ville, autour du palais impérial.
L’endroit est immense et très paisible.

Juste avant de rentrer à l’auberge, je passe par le Nishiki Market et la rue commerçante Teramachi Street.

Et de ce que j’ai pu voir et ressentir aujourd’hui, Kyoto est vraiment la ville du silence et du calme, très loin des écrans géants et des néons d’Osaka.

Les rues sont petites, étroites, souvent longues et très tranquilles.
J’adore déjà l’atmosphère.

J’ai hâte de découvrir les endroits les plus iconiques et importants de la ville dans les prochains jours.`,
  mood: 'Premier réveil à l’auberge, premier jour entier à Kyoto'
},
{
  id: 'j28',
  day: 28,
  title: 'Guide tour sur les geishas et aprés-midi avec Alice',
  excerpt: `Avec Alice, nous avions réservé un guide tour pour ce début de semaine.
Mais nous nous sommes rendu compte qu’elle avait déjà fait exactement le même tour la veille, alors j’y suis allé seul.

De 10h à 12h, j’ai visité le quartier de Gion avec un guide en anglais.
Nous avons eu beaucoup d’explications sur le monde des geishas, une tradition très importante de Kyoto.

Le guide nous a expliqué comment une femme devient geisha.
Tout commence très jeune : les apprenties, appelées maiko, commencent leur formation à l’adolescence.
Elles quittent souvent leur famille pour vivre dans une maison spécialisée appelée okiya, où elles apprennent pendant plusieurs années les arts traditionnels japonais : danse, musique, chant, cérémonie du thé et art de la conversation.

Une vie entièrement dédiée à cet art.

Après plusieurs années, la maiko peut devenir une geisha à part entière, appelée geiko à Kyoto.

Pendant la visite, nous avons aussi découvert plusieurs lieux religieux et leurs pratiques bouddhistes et shintoïstes, notamment le Yasaka Shrine, très important dans ce quartier.

En rentrant à l’auberge vers midi, Alice m’a carrément acheté un déjeuner à partager ensemble : une brioche, une baguette fourrée au bacon et même un camembert.
Et pour finir, un pain au chocolat, le tout acheté dans une bonne boulangerie.
(On avait parlé plusieurs fois de notre passion commune pour le brie ces derniers jours.)

Nous sommes ensuite allés dans un petit café tenu par un homme de 86 ans.
À l’intérieur, on peut même fumer et le propriétaire prépare les cafés à l’ancienne, très lentement.

Puis nous sommes partis visiter le Ryosoku-in avant de terminer dans le quartier historique de Ninenzaka.

Alice a dû rentrer à l’auberge à cause d’un problème avec sa banque, alors j’ai continué la visite seul jusqu’au célèbre Kiyomizu-dera.
Ce temple est construit sur une grande terrasse en bois, avec une magnifique vue sur Kyoto.

Je termine la visite en goûtant un matcha chez Cafe & Giftshop TEN.
C’était la première fois que j’en buvais, et je dois dire que c’est une boisson plutôt bonne.

Je suis ensuite rentré de nuit en traversant les rues du quartier, illuminées par les lanternes.
C’était vraiment magnifique.

Nous avons dîné et discuté ensemble dans la salle commune de l’auberge.

J’écris ces quelques lignes ici.
L’ambiance est calme et studieuse : certaines personnes lisent, d’autres écoutent de la musique, certains travaillent sur leur ordinateur ou leur téléphone, et d’autres sont en train de cuisiner.`,
  mood: 'Guide tour sur les geishas et aprés-midi avec Alice'
},
{
  id: 'j29',
  day: 29,
  title: 'Temples, musées, matcha et Ichiran Ramen',
  excerpt: `Journée un peu plus organisée aujourd’hui.
Hier soir, j’ai analysé les activités que je pouvais faire dans une même zone.

Je commence donc la journée par visiter le temple bouddhiste Tō-ji, connu pour sa grande pagode en bois à cinq niveaux, construite à l’origine au VIIIᵉ siècle.
C’est d’ailleurs la pagode en bois la plus haute du Japon.

Je me balade dans l’enceinte du temple et visite aussi un petit musée.

Je me dirige ensuite vers Umekoji Park.
Le parc en lui-même n’est pas incroyable, mais il donne accès au Suzaku Garden, un joli jardin japonais accessible pour 200 yens (environ 1 €).

À seulement 5 minutes de là se trouve la deuxième grosse activité de ma journée : le Kyoto Railway Museum.

Le musée est immense et retrace toute l’histoire du train au Japon.
On peut voir d’anciennes locomotives à vapeur, des trains historiques et même certains anciens Shinkansen.
Il y a aussi des simulateurs et plusieurs wagons dans lesquels on peut monter.

En sortant du musée, je passe devant le temple Nishi Hongan-ji.

Je m’arrête ensuite dans un café spécialisé dans le matcha : Matcha Sparkle Kyoto.
C’était cette fois-ci un Matcha Latte, et il était vraiment très très bon.

Je termine la journée par un passage au Pokémon Center Kyoto.

Et pour finir la journée comme il se doit, je vais manger un ramen dans la célèbre enseigne Ichiran Ramen.`,
  mood: 'Temples, musées, matcha et Ichiran Ramen'
},
{
  id: 'j30',
  day: 30,
  title: 'Château de Nijō et art moderne à Kyoto',
  excerpt: `Départ en fin de matinée pour aller visiter le Nijō Castle.

Ce château, construit au début du XVIIᵉ siècle, était la résidence officielle du shogun Tokugawa lorsqu’il séjournait à Kyoto.
La visite est vraiment intéressante, notamment à l’intérieur du palais Ninomaru, où l’on peut voir les grandes salles décorées de peintures traditionnelles représentant des tigres et des pins.

Un détail assez cool du château : les fameux “planchers rossignols”, des planchers en bois qui grincent volontairement quand on marche dessus.
Ils servaient aussi de système pour détecter les intrus ou les assassins qui auraient essayé de s’infiltrer dans le palais, même si ce n’était pas leur fonction première à l’origine.

Je me balade ensuite dans les jardins situés à l’intérieur du château, notamment le Honmaru Garden, le Seiryu-en Garden ainsi que le Ninomaru Garden.

Après cette visite, je continue tranquillement la journée avec le Kyoto Museum.
Le musée retrace une partie de l’histoire de la ville, avec des expositions sur la culture locale, l’évolution de Kyoto et la vie quotidienne à différentes époques.

Je termine ensuite la journée par une exposition consacrée à l’avant-garde japonaise (1948–1970) au Kyoto City KYOCERA Museum of Art.
L’exposition présentait un groupe d’artistes japonais qui ont cherché à casser les codes de l’art traditionnel après-guerre, avec des œuvres beaucoup plus expérimentales mêlant peinture, performances et créations intégrant des objets du quotidien.

Balade avant de rentrer à l’auberge le long de la promenade de la rivière Kamo-Gawa.`,
  mood: 'Château de Nijō et art moderne à Kyoto'
},
{
  id: 'j30',
  day: 31,
  title: 'Temples, chemin de la philosophie et rencontres',
  excerpt: `Je commence la journée en me rendant au Nanzen-ji, un temple historique situé au milieu de la nature. L’endroit est paisible : beaucoup de verdure, un canal qui traverse le site et un grand aqueduc en pierre.

En continuant de marcher, je tombe un peu par hasard sur un autre temple : Eikan-do Zenrin-ji. Ce temple possède un très beau jardin japonais avec un étang.

Je me dirige ensuite vers un petit sanctuaire caché au pied de la forêt qui borde Kyoto : Otoyo Shrine.

À partir de là, j’arrive naturellement sur le célèbre Philosopher's Path (le chemin de la philosophie). C’est un long chemin qui suit un petit canal bordé d’arbres et de temples.

Après avoir atteint la fin du chemin, j’arrive juste à côté du Ginkaku-ji (Silver Pavilion).

C’est un temple assez célèbre à Kyoto et beaucoup de voyageurs viennent le voir. Personnellement, je ne l’ai pas trouvé incroyable. Le jardin reste très beau, surtout avec la mousse verte présente un peu partout qui donne beaucoup de charme à l’endroit.

Sur le chemin du retour, je reprends à nouveau le Philosopher's Path. À un moment, je croise une dame qui, sans que je comprenne vraiment pourquoi, me fait une sorte de bénédiction. Ça a duré peut-être deux minutes. L’interaction était un peu étrange… mais en même temps très zen.

En fin de journée, Alice devait manger avec moi, mais elle ne se sentait pas très bien. Je me dirige alors vers un restaurant de gyozas, mais il y avait au moins une heure d’attente, donc je change de plan et je vais manger chez Daruma Burger.

C’est là que je rencontre Lian, un Canadien d’origine chinoise. Il commence la discussion et petit à petit on se met à parler de plein de choses. On s’entend bien.

Je pensais continuer la soirée avec lui à discuter encore un peu, mais il devait prendre un train pour Osaka.

Je termine donc tranquillement mon burger et ma bière. Et juste avant de partir, un autre homme me donne la sienne parce qu’il devait s’en aller.

Je me suis donc retrouvé seul avec deux bières, mais c’était quand même un très bon moment.`,
  mood: 'Temples, jardins, chemin de la philosophie et rencontres'
},
{
  id: 'j32',
  day: 32,
  title: 'Plusieurs temples et Kyoto National Museum',
  excerpt: `Départ en début d’après-midi en direction du temple Sanjūsangen-dō : le temple aux 1001 statues de Kannon, la déesse bouddhiste de la compassion. Le lieu servait aussi autrefois de site de compétition de tir à l’arc, avec une épreuve appelée Tōshiya, où les archers tentaient de tirer le plus de flèches possible sur toute la longueur du bâtiment, soit environ 120 mètres.

La journée étant nuageuse, avec quelques petites gouttes de pluie, je décide finalement de me diriger vers le Kyoto National Museum, situé à seulement deux minutes du temple.

Le musée est vraiment hyper intéressant. On passe de la céramique traditionnelle à l’art du katana, puis à des statues de Bouddha. L’architecture du lieu est aussi très réussie : lumière tamisée, grandes salles, et des explications claires en anglais (le musée est l’un des quatre grands musées nationaux du Japon et conserve beaucoup d’objets liés à l’histoire culturelle et religieuse de Kyoto).

En continuant ma marche, je passe rapidement devant le monument peu connu Mimizuka puis par le temple Rokuharamitsu-ji.

En regardant bien la carte, je me dis que ce serait sympa d’aller me balader dans Maruyama Park, juste à côté du Yasaka Shrine.

Je découvre le parc tranquillement, puis en marchant vers une partie plus reculée je tombe sur le temple Chōraku-ji.

Il n’y a pas de guichet pour entrer, seulement une petite boîte de confiance où les visiteurs sont censés laisser une contribution.

L’endroit est très calme. Je suis seul, avec le silence autour de moi. Il y a une petite forêt de bambous et un cimetière. Je m’en rends vraiment compte en montant les marches un peu plus loin… du coup je fais demi-tour pour revenir vers le parc.

Et par total hasard, en sortant d’un petit temple, Ōtani Sobyo, je me retrouve juste devant l’entrée du Kōdai-ji.

Le temple Kōdai-ji est sympa à visiter en fin de journée. Le parcours est agréable, les jardins sont jolis sans être incroyables, mais la visite se termine par une petite forêt de bambous.

Je rentre ensuite tranquillement à l’auberge en traversant les ruelles du quartier iconique de Higashiyama.`,
  mood: 'Plusieurs temples et Kyoto National Museum'
},
{
  id: 'j33',
  day: 33,
  title: 'Excursion au Miho Museum',
  excerpt: `Il y a quelques semaines, je m’étais amusé à utiliser Google Maps pour zoomer sur quelques activités intéressantes à faire dans le Kansai (la région où se trouvent Kyoto, Osaka et Nara).

Et je suis tombé sur la fiche du Miho Museum, qui était marqué comme « fermé temporairement ». En effet, sa période d’ouverture oscille généralement entre mars et juin, puis de mi-juillet à mi-août, et enfin entre novembre et décembre selon les années.

Nous sommes le 14 mars, premier jour d’ouverture du musée depuis la fermeture de décembre 2025.
J’ai donc mis mon réveil assez tôt, pris le métro, puis un train, puis un long bus et me voici au Miho Museum après environ 2 heures de transport.

C’est un musée complètement, mais vraiment complètement perdu dans les montagnes. Sur le site officiel, on peut lire qu’il est « niché au cœur de la beauté naturelle et abondante des montagnes de Shigaraki », et je crois bien que c’est la première fois que je vois un musée aussi éloigné de tout.

Avant de rentrer dans le musée, on passe par un long tunnel aménagé, éclairé tout du long, avec seulement une petite voiture de golf qui fait quelques allers-retours pour venir chercher les visiteurs.

Arrivé devant le bâtiment, on voit vraiment que l’architecture du lieu est impressionnante. C’est ni plus ni moins que l’architecte de la pyramide du Louvre à Paris, I. M. Pei, qui l’a conçu. (Oui, j’ai été assez surpris au début, puis finalement pas tant que ça : en y réfléchissant, on retrouve clairement les formes géométriques et triangulaires caractéristiques de son style, avec beaucoup de verre.)

Le musée a ouvert en 1997 et une grande partie de la structure est construite directement dans la montagne, ce qui permet de préserver le paysage naturel autour selon les mots de l’architecte.

Le musée est divisé en trois sections : l’aile nord, l’aile sud et un niveau souterrain, avec des expositions consacrées à des objets de collection venant d’Asie de l’Ouest, d’Égypte, de Chine ainsi que de la Grèce et de la Rome antique.

J’ai particulièrement aimé l’exposition temporaire de l’aile nord : Tales of Ancient Gold.

Assez impressionnant de voir comment l’or était trouvé puis utilisé pour fabriquer des objets. Impressionnant aussi de voir la précision au millimètre près de certains bijoux datant des premiers siècles après J.-C., avec des techniques de travail du métal déjà extrêmement avancées.

Pour clôturer la journée, j’ai pris un matcha latte dans le salon de thé à l’intérieur du musée : Pine View Tea Room.
L’endroit était assez chic, avec une belle vue sur les montagnes, mais surtout avec la lumière du soleil qui venait directement taper sur les grandes vitres du bâtiment.

J’ai ensuite pris quelques photos et vidéos du lieu. J’ai aussi demandé à quelques personnes de me prendre en photo, puis attendu une bonne demi-heure pour le bus du retour (il y a environ un bus par heure, généralement entre 9h et 16h, donc il ne faut vraiment pas le rater).

Superbe journée, magnifique découverte. C’est dans ce genre de moment que j’apprécie pleinement mon voyage : 4 heures de transport certes, mais une découverte unique, loin des lieux ultra touristiques et surtout perdu en pleine nature comme ça. J’adore.`,
  mood: 'Excursion au Miho Museum'
},
{
  id: 'j34',
  day: 34,
  title: 'Kyoto International Manga Museum et soirée improvisée',
  excerpt: `Journée plus chill aujourd’hui : visite du Kyoto International Manga Museum, qui possède pas moins de 300 000 objets liés à la culture du manga.

Exposition hyper intéressante sur les débuts du manga : qu’est-ce qu’un manga, comment ce format s’est développé au Japon puis comment il s’est exporté dans le monde. Différence shōnen / shōjo, etc.

Le lieu est en lui-même assez original : c’est une ancienne école primaire reconvertie en musée. Chaque couloir et chaque ancienne salle de classe ont été transformés en espaces de lecture. Les murs sont recouverts de longues étagères remplies de mangas.

Il y a même une terrasse et un jardin en herbe synthétique où l’on peut se poser au soleil pour lire toute la journée.

Certaines sections proposent aussi une sélection de mangas dans plusieurs langues étrangères pour les visiteurs.

Je me suis donc posé pendant presque une heure à lire et finir le premier tome de Naruto, découvert il y a quelques années en animé avec la série Naruto. Aujourd’hui, j’ai découvert son manga et redécouvert l’histoire principale.

Même si j’ai pris l’un des mangas les plus connus au monde, j’ai quand même aimé parcourir les rayons et lire les quatrièmes de couverture ou observer les dessins de mangas comme Nana, Berserk, Cobra, Thermae Romae ou encore One-Punch Man, ainsi que plein d’autres références dont je ne connaissais même pas la traduction française.

Je finis l’après-midi par une longue balade dans les Kyoto Imperial Palace Gardens, entre les cerisiers blancs et roses déjà en floraison. Le pic du sakura est prévu dans une quinzaine de jours, mais les couleurs sont déjà très belles et les arbres commencent à être bien fleuris.

Lecture en début de soirée dans la salle commune de l’auberge.

Puis, en allant me coucher (et en passant par la case pipi), je croise Liron qui me demande si je connais un bar sympa ici à Kyoto. Je lui réponds en anglais :
« Non, tu sais ça fait quelques jours que je suis ici et je n’ai pas eu l’occasion de tester les bars, désolé. »

Je ferme la porte des toilettes et je me dis :
« Mais merde… je ne suis même pas foutu de continuer la discussion. Je stoppe net avec un “désolé”. Quel con. »

Alors je prends une décision ultra rapide : tenter de la rattraper pour lui proposer de l’accompagner trouver un bar.

Je descends au rez-de-chaussée et, par chance, elle était assise sur les fauteuils de l’entrée.

C’est comme ça que je me suis présenté, puis que j’ai fait la connaissance de son ami Itay.

Nous avons passé la soirée tous les trois et une bonne partie de la nuit à boire quelques bières japonaises dans la rue. Puis nous avons fait un arrêt pendant une heure dans un Round1, une grande salle d’arcade avec plein de jeux différents. Nous avons joué aux fléchettes et à d’autres petits jeux.

Nous avons ensuite rencontré des Espagnols de Barcelone, ce qui m’a permis de reparler en espagnol (qui est toujours aussi bon, je dois dire).

Vers 2 h du matin, nous avons discuté longuement dans un McDonald's avant de nous séparer.

Itay est parti dans une autre auberge, et Liron et moi sommes retournés dans la nôtre. Je l’ai remerciée pour cette soirée et lui ai dit de venir visiter Paris un jour.

Bref, c’était ma première vraie soirée festive au Japon, et même ma première soirée tout court depuis plus de quatre mois de voyage.

Comme si on se connaissait depuis longtemps, on n’a pas arrêté de rire, de blaguer et de boire ensemble.

Pour conclure, si je n’avais pas eu l’audace de sortir de ma zone de confort, je me serais certainement couché à 21 h et j’aurais sûrement passé quelques heures sur les réseaux sociaux avant de trouver le sommeil.

Merveilleuse rencontre, merveilleuse soirée.

Mode Yes Life un peu.`,
  mood: 'Kyoto International Manga Museum et soirée improvisée'
},
{
  id: 'j35',
  day: 35,
  title: 'Fushimi Inari Taisha et jardins du sanctuaire Heian',
  excerpt: `Après la soirée de cette nuit, je voulais me lever assez tôt, mais j’ai préféré rester un peu au lit pour récupérer et être bien réveillé pour la journée.

Je pars donc en fin de matinée en direction du Fushimi Inari Taisha, le célèbre sanctuaire aux milliers de torii rouges.

L’endroit est assez impressionnant. Au départ, c’est noir de monde : on avance en file indienne, très lentement. Mais au bout d’environ un quart du parcours (soit à peu près 15 minutes sur l’heure de marche jusqu’au sommet), la plupart des visiteurs font demi-tour au niveau de la boucle.

Résultat : le chemin devient soudain beaucoup plus calme.

Même en début d’après-midi, on peut alors marcher tranquillement sans personne devant ou derrière soi.

C’était parfait. Je ne voulais pas que l’endroit soit bondé de touristes, et j’ai pu me balader tranquillement, complètement envoûté par le lieu. L’ambiance est très japonaise, presque comme dans un décor de film de Hayao Miyazaki.

Pour le retour, j’ai choisi un petit sentier secondaire plutôt que de reprendre le chemin principal. Pendant presque 30 minutes, j’étais totalement seul : moi, la forêt, et quelques torii apparaissant de temps en temps entre les arbres.

Je passe ensuite par le temple Tōfuku-ji.

Et je termine la journée par la visite du Heian Shrine, où je me pose longuement dans son grand jardin japonais.

C’est probablement l’un des plus beaux jardins que j’ai visités pendant mon voyage au Japon.

La vue sur l’étang est magnifique : le reflet du sanctuaire dans l’eau, quelques sakura déjà légèrement fleuris, le bruit des oiseaux, et les petites ondulations à la surface de l’eau provoquées par le vent.

Je me sentais bien, calme, relax… et je repensais doucement à la soirée d’hier, et à quel point j’avais passé un bon moment.`,
  mood: 'Fushimi Inari Taisha et jardins du sanctuaire Heian'
},
{
  id: 'j36',
  day: 36,
  title: 'Rencontres et discussions profondes',
  excerpt: `Itay m’envoie un message ce matin pour savoir comment je vais. Je change mes plans pour la journée et lui propose de m’accompagner visiter le Kinkaku-ji, le célèbre Pavillon d’Or.

On se rejoint vers 11h45 et on passe toute la journée ensemble.

On commence par la visite du temple, que l’on survole assez rapidement car on discute beaucoup.

Ensuite, on part manger dans un petit restaurant d’udon, puis on se balade dans les Kyoto Imperial Palace Gardens, avant de s’arrêter prendre un café chez Drip & Drop Coffee Supply.

On termine la journée dans un restaurant d’omelette japonaise (omurice), qui était d’ailleurs vraiment très bonne.

Durant la journée, j’apprends aussi à mieux connaître Itay. Il voyage lui aussi en solo depuis plusieurs mois et s’est fait pas mal d’amis en passant par le Laos, le Vietnam, la Thaïlande, la Corée du Sud et maintenant le Japon.

Il ne reste jamais très longtemps dans les villes, généralement 3 à 4 jours. Il est resté 4 jours à Kyoto et prévoit de passer 3 jours à Osaka avant de repartir à Tokyo avant son retour en Israël.

On a aussi beaucoup parlé de la situation dans son pays. Il m’a montré les notifications qu’il reçoit sur son téléphone, notamment des alertes liées à des bombardements venant d’Iran.

Même s’il arrive parfois à tourner ça en dérision, j’ai bien senti que la situation restait préoccupante.

La journée était vraiment cool. On a beaucoup ri, beaucoup discuté et appris l’un de l’autre.

Le soir, on retrouve un de ses amis, Mihail, et on passe la soirée à boire des bières et à marcher dans la ville.

Je discute longuement avec Mihail de sa passion pour la photographie : les différents appareils, les objectifs, les styles… c’était vraiment intéressant d’avoir son point de vue et de rentrer un peu dans ce monde-là.

On a marché longtemps, en se perdant un peu dans la ville, puis on s’est séparés vers 1h du matin.

J’ai alors mis mes écouteurs et profité des rues éclairées de Kyoto avant de rentrer dormir.

(Content de mon niveau d’anglais)`,
  mood: 'Rencontres et discussions profondes'
},
{
  id: 'j37',
  day: 37,
  title: 'Quartier Arashiyama',
  excerpt: `Avant de partir découvrir le quartier d’Arashiyama, j’ai discuté longuement avec une dame qui dort dans mon dortoir, une prof chinoise. Elle m’a posé pas mal de questions sur mon voyage, c’était cool.

(Ce qui est drôle, c’est que ce matin, en me réveillant, je me suis dit : « mais bordel, qui fait du bruit comme ça ? » et en fait c’était elle… en train de mettre de la musique symphonique pendant 10–15 minutes. Bon, c’était agréable, ça m’a presque donné envie de me rendormir.)

Je pars ensuite découvrir Arashiyama, connu notamment pour sa célèbre forêt de bambous, la Arashiyama Bamboo Grove.

La forêt en elle-même est un peu surcotée (environ 500 mètres de chemin tout droit, beaucoup de monde, et finalement pas aussi impressionnante que ce à quoi je m’attendais, surtout après avoir déjà vu plusieurs petites forêts de bambous ces dernières semaines).

Mais ce n’est clairement pas le plus intéressant du coin.

C’est surtout le quartier dans son ensemble qui vaut le détour : une longue rivière, des maisons traditionnelles, et plein de petites boutiques, cafés et restaurants qui donnent une vraie ambiance paisible.

Je traverse le Togetsukyo Bridge, avec une belle vue sur les montagnes autour, puis je monte vers le Iwatayama Monkey Park, situé sur les hauteurs.

La pluie commence à tomber doucement, mais j’ai quand même le temps de profiter du parc pendant un bon moment. Les singes (des macaques japonais) se baladent librement autour des visiteurs, avec en plus une belle vue sur toute la ville de Kyoto depuis le sommet.

Après environ 45 minutes dans ce parc, je prends le chemin du retour.

L’après-midi se passe sous la pluie à Kyoto, donc j’en profite pour me reposer, regarder quelques vidéos et lire tranquillement dans la salle commune.

Le soir, j’envoie un message à Itay. On a tous les deux la flemme de ressortir sous la pluie, alors je lui souhaite une bonne continuation pour la suite de son voyage et le remercie pour ces quelques jours passés ensemble.`,
  mood: 'Arashiyama, forêt de bambous et Monkey Park'
},
{
  id: 'j38',
  day: 38,
  title: 'Lessive, longue balade le long de la Kamo River et lecture',
  excerpt: `Grasse matinée ce matin. Je profite de cet avant-dernier jour à Kyoto pour faire une lessive, préparer mon sac pour mon départ samedi matin, puis je pars faire une longue balade le long de la promenade de la rivière Kamo River, vers le sud de la ville à partir du milieu de l’après-midi.

Sans but précis, juste marcher, découvrir la promenade et me remémorer ces deux semaines ici : les rencontres et toutes les activités que j’ai pu faire.

De ce côté-ci, la promenade n’est pas hyper aménagée : un long chemin parfois en pierre, parfois en herbe, très axé vélo.

Plus je m’éloigne, moins il y a de piétons, et plus je croise principalement des cyclistes, sûrement des gens qui rentrent du travail à cette heure-ci.

Je termine la journée par lire dans la salle commune avant d’aller me coucher.`,
  mood: 'Lessive, longue balade le long de la Kamo River et lecture'
},
{
  id: 'j39',
  day: 39,
  title: 'Dernière journée à Kyoto',
  excerpt: `Dernier jour à Kyoto.

Je commence ma journée par prendre le bus pour me rendre au Garden of Fine Arts Kyoto, un endroit assez spécial avec une architecture très brute en béton. Le lieu a été conçu par l’architecte japonais Tadao Ando.

Huit chefs-d’œuvre y sont reproduits sur de grands panneaux en porcelaine.

Pendant les 15–20 minutes de visite, c’est sympa de se balader entre les cascades artificielles et les œuvres.

Je me dirige ensuite vers le Kyoto Botanical Garden, situé juste à côté, où je passe une bonne partie de l’après-midi. Beaucoup de cerisiers en fleurs, plusieurs jardins à thème, et surtout une grande serre avec différentes ambiances : tropicale, cactus, etc.

Je me pose ensuite devant une fontaine, où je profite du soleil et du bruit de l’eau pendant une bonne demi-heure.

À 17h, heure de fermeture du parc, je prends le chemin du retour. Je décide de rentrer à pied en longeant la promenade de la rivière Kamo River, cette fois-ci du nord vers le sud.

Et clairement, cette partie est bien plus aménagée que celle d’hier : beaucoup de bancs en bois, des espaces pour se poser, et jour férié oblige, il y a pas mal de monde.

Beaucoup de jeunes sont installés près de la rivière, un peu comme les quais de Seine à Paris. Des couples qui pique-niquent, des groupes qui jouent au frisbee ou au foot, certains qui posent leur trépied pour faire des TikTok… ambiance vivante.

Une fois arrivé près de l’auberge, toujours le long de la rivière, je me dis que ce serait une bonne idée d’aller me balader de nuit dans les quartiers iconiques de la ville : Pontocho Alley et évidemment Gion.

Et j’ai bien fait.

Pontochō est vraiment bondée, mais les lumières sont super belles. À cette heure-ci, beaucoup de familles et de touristes font la queue devant les restaurants.

Ambiance totalement différente du côté de Gion : de nuit, l’atmosphère n’a rien à voir. Moins de monde, beaucoup plus calme, presque silencieux, sans le bruit constant des touristes de la journée.

Je me balade pendant presque une heure, sans écouteurs, juste à profiter de l’ambiance et de ma dernière soirée ici à Kyoto.

Heureux d’avoir fait ce petit tour de nuit, prêt maintenant à passer à l’étape suivante de mon voyage : Hiroshima.`,
  mood: 'Dernière journée à Kyoto'
},
{
  id: 'j40',
  day: 40,
  title: 'Journée de transition Kyoto → Hiroshima',
  excerpt: `Départ de l’auberge à 9h20. Toutes mes affaires étaient déjà prêtes, plus qu’à prendre une douche, m’habiller et partir pour rejoindre la gare de Kyoto. Sans stress.

Départ à 10h50, arrivée à 18h00 à Hiroshima.

Effectivement, 7 heures de bus… assez long, mais étonnamment confortable : prise USB, siège rétractable, rideaux (même pour la tête), séparation avec la personne à côté, et quatre pauses de 15 minutes sur des aires d’autoroute, dont une à Osaka.

Pour 28 € et presque 375 km, je ne dis pas non.

J’alterne entre lecture, écriture, sieste et contemplation du paysage : plein de villages perdus au milieu de nulle part, et beaucoup de petites montagnes.

Arrivée à Hiroshima en fin d’après-midi, je découvre l’auberge de jeunesse où je vais dormir pendant une semaine.

Dans l’ensemble, elle est sympa, mais un peu petite : un seul étage, pour environ 24 personnes maximum. Différente de celle de Kyoto, mais ça reste cool.

Après cette longue journée, je mange rapidement, puis je me balade dans la rue principale, bien animée vers 20h.

Je rentre ensuite me poser tranquillement dans la pièce commune pour écrire ces quelques mots, avant d’aller dormir vers 22h.`,
  mood: 'Journée de transition Kyoto → Hiroshima'
},

{
  id: 'j41',
  day: 41,
  title: "Musées d'art et jardin Shukkeien Garden",
  excerpt: `Première journée complète à Hiroshima.

Je commence la journée en marchant tranquillement dans les rues du centre-ville, avant de me rendre au Hiroshima Prefectural Art Museum.

C’est un petit musée que je visite en environ 45 minutes, avec des collections autour d’artistes de la préfecture d’Hiroshima, une section dédiée à Salvador Dalí et Max Ernst, ainsi qu’une partie consacrée au textile indien, le chintz.

Au 3ᵉ étage, il y a une belle vue sur le jardin juste à côté. Je m’y pose quelques minutes avant d’aller m’y balader.

Grâce au billet du musée, on peut accéder au Shukkeien Garden.

Le jardin est vraiment très joli. Il date de 1620, mais il a été presque entièrement détruit par la bombe atomique. Un seul arbre a survécu, et il est encore là aujourd’hui, légèrement penché.

Avec les cerisiers en fleurs, l’étang, les petits ponts et les espaces pour s’asseoir, l’endroit est parfait pour se poser, observer et réfléchir.

Quand on sait ce que la ville a traversé, le fait que ce jardin soit revenu à la vie rend l’expérience encore plus forte.

On apprend aussi que certaines personnes sont venues s’y réfugier juste après le bombardement, mais n’ont malheureusement pas survécu aux effets de la bombe.

Je continue ensuite mon après-midi sans trop me presser, en me dirigeant vers le Hiroshima Museum of Art.

À la base, je comptais y aller plus tard dans la semaine, mais il ferme pour la semaine, donc c’était aujourd’hui ou jamais.

En chemin, je passe devant des courts de tennis où un petit tournoi est en cours. Les joueurs ont des dossards accrochés dans le dos, les gradins sont presque vides, mais quelques familles et amis sont là. Je reste une dizaine de minutes avant de repartir.

Puis j’arrive au musée d’art, qui est impressionnant, presque trop rempli. Il y a énormément d’œuvres, au point de ne plus savoir où donner de la tête.

La collection est assez incroyable : on y retrouve des artistes comme Claude Monet, Édouard Manet, Edgar Degas, Pierre-Auguste Renoir, Eugène Delacroix, Henri de Toulouse-Lautrec, Camille Pissarro, Berthe Morisot, Paul Cézanne, Vincent van Gogh ou encore Pablo Picasso.

Franchement, je ne m’attendais pas à voir une telle collection ici.

Je retiens aussi la découverte de l’artiste japonais Aihara Kyūichirō, ainsi qu’une exposition autour de la couleur blanche en peinture : comment elle est utilisée pour représenter la neige, les nuages ou la lumière, notamment dans des paysages à la manière de Monet.

Je passe finalement environ 2h30 dans le musée, à lire les pancartes des œuvres, observer et me perdre dans les différentes salles. C’était passionnant.`,
  mood: "Musées d'art et jardin Shukkeien Garden"
},
{
  "id": "j42",
  "day": 42,
  "title": "Miyajima et ascension du mont Misen",
  "excerpt": `Journée complète à Miyajima, une île proche de Hiroshima

Je vais écrire ce texte au présent pour bien comprendre le déroulé de ma journée et à quel point j’ai vécu l’une de mes plus belles journées.

Je commence ma journée par prendre un petit déjeuner dans un konbini : cookies, pain brioché fourré à la crème et jus d’orange (mon petit déjeuner classique ici).

Je prends ensuite le tramway pendant 1h05, puis j’arrive devant le terminal de ferry de Miyajima. Je prends mon ticket (aller-retour 2,50€), monte à bord du ferry et passe 10 minutes sur l’eau avant d’arriver sur l’île.

Après mes premiers pas, je prends une bouteille d’eau d’un litre et un gâteau, histoire de me donner quelques forces.

Je suis venu principalement sur cette île pour voir le fameux sanctuaire Itsukushima-jinja sur l’eau !

En marchant, je me rends compte que des daims sont en liberté sur l’île, ce qui rajoute encore plus de charme.

J’arrive devant le sanctuaire, demande à quelques personnes de me prendre en photo avec mon appareil photo jetable, et je regarde la carte de l’île que j’ai prise en arrivant au terminal.

Et là, je vois inscrit : Mont Misen.
Une montagne au milieu de l’île, haute de 535 mètres.

Et évidemment, comme à mon habitude, il y a un téléphérique ou la possibilité d’un chemin de randonnée avec une estimation de 1h30.

Et c’est ainsi que je commence la randonnée. Moi qui pensais que le chemin allait être plutôt vallonné, je me rends compte que finalement, ce ne sont quasiment que des marches en pierre, parfois grandes jusqu’au niveau du genou.

Mais ce n’est pas grave, je prends mon temps, je fais quelques pauses de temps en temps car effectivement, la rando n’est pas si facile que ça. Mais j’arrive au sommet après 1h20 et quelques pauses.

Une fois au sommet, il y a deux possibilités : soit aller vers l’observatoire A, soit vers l’observatoire B.

L’observatoire A est à côté du téléphérique, l’observatoire B est un peu plus haut et représente le pic, le sommet de la montagne.

Je décide donc de commencer par l’observatoire B.

J’arrive donc au sommet, il est 14h. Il y a quand même beaucoup de touristes. En effet, avec le téléphérique, la montée est beaucoup plus accessible pour tout le monde.

Là où je suis, il y a une construction avec un étage protégé et un toit avec une vue à 360 degrés.

Je marche tranquillement sur le toit, me pose un peu à l’étage protégé et commence à me prendre en photo en posant le téléphone sur mon sac.

Et puis, d’un coup, une fille arrive, toute souriante, toute heureuse, en me disant en anglais :
« J’ai vu que tu galérais, je vais t’aider. »

Elle prend de merveilleuses photos de moi devant le panorama, en me disant :
« Allez, sois cool, détendu, fashion ahah »

Et c’est comme ça que je me retrouve avec d’excellentes photos face à ce paysage.

Après cette interaction, je me pose derrière quelques rochers pour observer la vue. Je me retrouve devant un arbre à la forme un peu spéciale que je contemple pendant plusieurs dizaines de minutes.

L’endroit est tellement incroyable, tellement beau, tellement ressourçant que je prends mon carnet et commence à écrire.

J’écris ce que je ressens sur le moment. Je fais un petit croquis rapide de l’arbre que je vois en face de moi. Je respire à plein poumons. Entre chaque paragraphe, je lève la tête, j’observe, je ressens et je continue à écrire.

Je reste quasiment une heure à cet endroit. Je ne sais pas pourquoi, je suis envoûté par cet arbre, par la vue, avec la mer et les montagnes derrière.

Je sais que je vis quelque chose de fort, mais j’ai du mal à poser des mots dessus.

Je regarde ma montre : il est 16h. Et comme à mon habitude, je ne peux pas résister à cette pensée :
« Le coucher de soleil ici doit être incroyable. Il faut que je reste. Oui, je suis en t-shirt. Oui, le soleil se couche dans 2h30. Mais je dois rester. Je dois voir ça de mes propres yeux. Et je pense que je serai seul à ce moment-là. »

Seulement voilà, je suis posé à un endroit vraiment parfait. Je n’ai pas envie qu’on me le prenne. Mais je veux quand même voir l’observatoire A.

Je me dis donc : OK, je vais à l’observatoire A, j’y reste une heure, puis je remonte.

Je descends, prends 30 minutes pour arriver à l’autre observatoire A et là, c’est la claque de la journée.

Il est 16h30, et c’est l’heure du dernier téléphérique qui redescend.

Je vois une énorme queue. Je dépasse tout le monde pour aller à l’observatoire… et là, je me retrouve seul. Seul au monde face à une vue que je ne peux même pas expliquer.

Aucun bruit. Vraiment aucun bruit. Le calme absolu. Juste les oiseaux.

Je fais quelques photos et vidéos, et les mots qui sortent de ma bouche sont :
« Putain… »
« Non c’est pas possible… »
« Ohlalalala… »
« Incroyable… »
« J’y crois pas… »

Trop de beauté. Trop d’immensité. Je ne sais même plus quoi dire. Je me dis que c’est trop pour moi.

À 17h pile, une musique japonaise résonne dans les haut-parleurs pendant une minute. Style animé.

Frissons immédiats.

Je pose mes mains sur la barrière, regarde le paysage.
Comme dans un film. Comme si j’étais le personnage principal.

Mon souffle devient court, comme une énorme inspiration d’un coup.

Moment irréel.

Je regarde ma montre : il est 17h. J’ai une demi-heure pour remonter et une heure à attendre le coucher de soleil.

Je remonte. Cette fois, personne sur le chemin.

J’arrive au sommet. Plus personne. Silence total.

Je retourne à mon spot. Toujours libre.

Je m’assois en tailleur pendant presque une heure.

Je ressors mon carnet et j’écris encore quelques mots, quelques lignes.

J’écris sur ce que j’ai ressenti, il y a 30 minutes, une heure. J’essaie de poser des mots sur ce que j’ai vu, ressenti.

Voici les mots que j’ai écrits :

« Je me suis retrouvé seul au deuxième observatoire et c’était juste exceptionnel.

Je ne sais pas si je suis objectif en disant cela, mais c’était sans doute l’une des plus belles vues que je n’ai jamais vues.

Une sensation étrange, comme si c’était trop… trop beau, trop merveilleux. Un rêve, une illusion.

Des petits îlots, des criques avec des plages de sable, le bruit des oiseaux, de la nature.

Une sensation d’être minuscule.

La sensation que je ne peux pas ingurgiter autant de beauté et d’immensité.

En 30 minutes, je suis revenu à l’observatoire du mont Misen pour contempler le coucher de soleil, comme à mon habitude depuis la Corée.

Et c’est comme ça, assis en tailleur, au-dessus des rochers, que je regarde le soleil descendre lentement.

Il disparaît dans 10 minutes derrière les montagnes.

J’ai les yeux éblouis, alors mon écriture n’est pas fameuse.

Moment zen, hors du temps. »

Pendant que j’écris, une bande d’Anglais s’installe à quelques dizaines de mètres. Ils parlent un peu fort, mais ce n’est pas grave. Je suis dans ma bulle.

Le soleil se couche, disparaît derrière les montagnes. Je me lève, remonte sur le toit, fais un petit tour, prends quelques vidéos.

Je suis seul.

Et là je me dis :
« Je suis sur une île, au sommet d’une montagne, seul. Les derniers ferries partent bientôt. »

Je respire profondément. Le ciel devient rose, orangé.

Puis je prends le chemin du retour.

La nuit tombe. J’allume mon flash. Je ne vois pas à plus de 5 mètres.

Je descends pendant 35 minutes.
Le bruit des cascades que je ne vois pas.
Des animaux qui fuient.
Le silence total de la forêt.

Température parfaite. Être en t-shirt pour la descente est hyper agréable.

J’arrive en ville. Les lumières des maisons japonaises éclairent les ruelles.

Je me sens dans un anime.

Plus j’avance, plus je me rends compte que je suis seul.
Et là, je vois des daims marcher dans les rues.
J’entends leurs sabots sur les pavés.

Je marche avec eux.

Comme si ce n’était pas déjà assez irréel.

J’arrive au sanctuaire du début. Marée basse.
Je marche sur le sable, passe en dessous.

Mon ferry est à 20h. J’ai le temps.

J’observe la vie locale. Les vélos. Les couples. Les gens.

Des jeunes sortent d’un konbini avec de l’alcool. Une soirée sûrement.

Et moi, toujours en t-shirt, j’attends mon ferry.

Je suis vide.
Je ne pense plus.
Je suis juste émerveillé.

Les 10 minutes de ferry, puis 1h05 de tram passent extrêmement vite.

Voilà.
C’était peut-être la plus belle journée de mon voyage.

J’ai pris le temps d’écrire le plus possible sur ce que j’ai ressenti, sur ce que j’ai vu, vécu.

Peut-être que c’était la dernière fois que je vivais un moment pareil lors de ce voyage. Peut-être oui, peut-être non.

Ce que je sais, c’est que ça va être compliqué de surpasser tout ça.

Le texte est long, peut-être répétitif…
mais c’était la réalité de ce lundi 23 mars 2026, sur l’île de Miyajima, lors de ma randonnée au mont Misen.`,
  "mood": "Miyajima et ascension du mont Misen"
},
{
  "id": "j43",
  "day": 43,
  "title": "Mitaki-dera et randonnée improvisée dans les montagnes d’Hiroshima",
  "excerpt": `Voici ce que je pensais ce matin dans mon lit, j’ai écrit ces premières notes :

« Journée plus calme. Je me demande comment je vais faire pour retrouver les sensations que j’ai vécues hier. Le pic d’adrénaline était au plus haut.
Difficile de faire mieux, de ressentir les mêmes sensations, comme si j’étais en manque de drogue, en manque d’adrénaline.

Assez difficile de passer d’une journée juste mémorable et magnifique à une journée plus calme.

Mais ce sont les aléas et la réalité du voyage. L’extraordinaire ne peut être qu’occasionnel, sinon il deviendrait ordinaire. »

C’est avec cet état d’esprit qu’aujourd’hui j’ai démarré la journée.

En ouvrant Google Maps ce matin, j’ai vu qu’un temple dans la forêt se situait au nord-ouest de la ville : le temple Mitaki-dera.

C’est ainsi que j’ai démarré ma journée en marchant jusqu’à celui-ci. Sur la route, une distribution gratuite de Monster, j’ai donc pu tester gratuitement la Monster Ultra Vice Guava.

Sur le passage, je suis arrivé devant le Dôme de Genbaku, lieu rempli d’histoire…

Ce bâtiment est l’un des seuls à être resté debout après l’explosion de la bombe atomique le 6 août 1945 à 08h15.
À l’origine, c’était un palais d’exposition industrielle, mais il se trouvait presque juste sous le point d’impact de la bombe.

L’explosion a tout détruit autour sur plusieurs kilomètres, mais sa structure a résisté, en partie, à cause de l’onde de choc venue du dessus.

Aujourd’hui, il a été conservé tel quel, en ruine, comme un symbole de mémoire, de paix et pour rappeler ce qu’il s’est passé ici.

Je me suis arrêté ensuite face à la rivière pour me poser rapidement, finir la Monster avant de reprendre mon chemin vers le temple.

En arrivant au temple, je me retrouve seul. Les environs sont très verts, une forêt calme.

Je prends quelques photos et vidéos et décide de monter un peu au hasard vers un chemin de randonnée dans la forêt.

Et très honnêtement, je pensais que c’était juste une petite forêt au-dessus du temple… mais que nini.

Car effectivement, j’ai bien fait de prendre ce chemin, direction la forêt, car je me suis retrouvé dans une forêt de bambous, et celle-là est impressionnante, vraiment naturelle, rien à voir avec celle de Kyoto.

Aucun touriste. Juste le calme, le vent dans les feuilles et des bambous de partout.

Parfois certains sont couchés, d’autres très grands, d’autres complètement cassés, mais ça fait toute la beauté de la forêt, au naturel.

Pendant ce chemin, je n’ai trouvé aucun panneau avec des indications de distance, donc je ne savais vraiment pas où aller ni même le nom des monts.

J’ai juste marché, grimpé, suivi quelques panneaux un peu au hasard.

À un moment donné, je me suis retrouvé à une sorte de carrefour avec plusieurs chemins. J’ai donc pris celui de droite.

Et au bout d’une demi-heure depuis le temple, j’arrive au sommet : le mont Sōkasan (Mount Sokayama / mont Mitaki), 356 m.

Comme je ne savais pas où j’allais, je me disais parfois :
« Mais où est-ce que je vais ? »

Mais au final, j’arrive bien au sommet et me voilà devant un panorama sur toute la ville d’Hiroshima.

Le temps est un mélange de soleil et de grand ciel bleu, avec un peu de brume/pollution, je ne sais pas, mais on distingue bien la ville, les rivières, les ports et évidemment les îles aux alentours.

Et d’ici, je peux même voir l’île de Miyajima où j’étais hier, ainsi que le mont Misen.

Puis, sur le chemin du retour, je me retrouve de nouveau au carrefour. J’ai deux choix : soit redescendre vers la ville, soit découvrir un deuxième sommet.

Je choisis la deuxième option.

En une quinzaine de minutes, j’arrive au mont Takatoge (237,4 m).

La vue n’est pas si différente du premier point, c’est juste l’autre côté de la crête, mais ça reste quand même super cool. J’y reste une heure avant de redescendre en ville, juste avant la tombée de la nuit.

Enfin voilà… moi qui doutais ce matin du déroulé de ma journée, moi qui pensais qu’elle allait être plus calme et monotone, je profite encore d’un panorama.

Moins impressionnant qu’hier, évidemment, rien à voir en termes de beauté et d’adrénaline… mais ça reste incroyable d’avoir une vue sur toute la ville d’Hiroshima.

Retour à pied dans des petits patelins bien tranquilles avant de rejoindre le centre-ville.`,
  "mood": "Temple Mitaki-dera et randonnée improvisée dans les montagnes d’Hiroshima"
},
{
  "id": "j44",
  "day": 44,
  "title": "Journée pluvieuse et art contemporain à Hiroshima",
  "excerpt": `Journée entièrement pluvieuse à Hiroshima.

J’en profite pour rester un peu à l’auberge le matin et chiller tranquillement. Puis en début d’après-midi, je pars visiter le Hiroshima City Museum of Contemporary Art.

L’exposition que je découvre se découpe en trois phases :

Destruction of Art : l’idée que la création commence par détruire les valeurs établies. On y retrouve les “ready-made” de Marcel Duchamp, qui ont complètement renversé la définition de l’art, ainsi que des artistes japonais comme Tetsumi Kudo, avec des œuvres assez absurdes pour casser les codes.

Plasticity of Art : une réflexion sur la manière dont une œuvre change selon son environnement et selon celui qui la regarde. Rien n’est figé, tout dépend du regard.

Being and Memory : une partie plus sombre, autour de la mort, de la mémoire, de la violence et de la fragilité de l’identité.

C’était intéressant, mais très conceptuel, presque trop abstrait pour moi.
Un mélange de “j’aime bien” et de “pas ouf”.

Je fais le tour en environ une heure.

Ensuite, je me dirige vers la Hiroshima City Manga Library, juste à côté.
Une bibliothèque spécialisée dans le manga.

Je vais dans la section des traductions étrangères et je prends le premier tome de One Piece.

Franchement, j’ai plutôt bien aimé. Les personnages sont cool et l’histoire donne envie de continuer.

Je pars ensuite me balader sous la pluie, parapluie à la main, dans un grand centre commercial orienté high-tech et jeux vidéo : EDION Hiroshima Main Store.

Je rentre à l’auberge en début de soirée, après cette journée calme, rythmée par la pluie.`,
  "mood": "Journée pluvieuse, art contemporain et manga à Hiroshima"
},
{
  "id": "j45",
  "day": 45,
  "title": "Hiroshima entre histoire et mémoire",
  "excerpt": `Journée sous le soleil à Hiroshima, 21 degrés, je passe la journée en t-shirt.

Je commence tranquillement avec mon petit-déjeuner habituel (Cookie Cream, Chocolate flavor et jus d’orange), assis dans le Hiroshima Gate Park.

Je me dirige ensuite vers le Hiroshima Castle.

Et là, surprise : le château a fermé définitivement ses portes le 22 mars 2026, à cause de son vieillissement. J’ai loupé ça d’une semaine, mais ce n’est pas grave.

Un peu frustrant sur le moment, mais je suis quand même content d’être devant.
Reconstruit après la bombe atomique, il reste impressionnant, surtout avec ce grand ciel bleu derrière. Pas de visite, mais l’essentiel était de le voir.

Je me dirige ensuite vers l’activité la plus importante de la ville : le Hiroshima Peace Memorial Museum.

Énormément de monde à l’intérieur. Le musée est construit comme un parcours en plusieurs étapes.

On entre directement dans le cœur du sujet avec le 6 août 1945 à 8h15 : une maquette montre la ville avant et après l’explosion, avec une visualisation très marquante de l’impact.

Puis vient la partie la plus dure : des objets récupérés après la bombe (vêtements brûlés, objets du quotidien), accompagnés de dizaines et de dizaines de témoignages de victimes.

C’était clairement la partie la plus dure et la plus émotionnelle.

Des enfants méconnaissables en retrouvant leurs parents, d’autres revenus sains et saufs mais qui meurent quelques jours plus tard à cause des radiations…
Une histoire m’a marqué : une petite fille dit à son grand frère « tu as eu de la chance, toi », juste avant de mourir des effets de la bombe.

Enfin, le musée ouvre sur une réflexion plus large autour de la paix et de l’abolition des armes nucléaires.

Je termine ensuite l’après-midi dans le Hiroshima Peace Memorial Park.

Je me pose presque une heure sur un banc, entouré de cerisiers en fleurs, avec des grands-mères qui chantent en groupe, et le soleil qui tape doucement sur la peau… au point de prendre un petit coup de soleil sur les bras.

Je finis la journée en me baladant dans quelques friperies et boutiques de vêtements de seconde main, avant de passer une bonne demi-heure dans un magasin de vinyles juste en face de mon auberge.`,
  "mood": "Hiroshima Peace Memorial Museum et friperie"
},
{
  "id": "j46",
  "day": 46,
  "title": "Derniers instants à Hiroshima",
  "excerpt": `Dernière journée à Hiroshima

Une semaine, ça passe vite mais j’ai eu le temps de faire toutes les activités que je voulais.
Je repense encore à ma journée à Miyajima, quel classique !

Pour ce dernier jour, je prends le temps de simplement me balader dans les quartiers de la ville.

Je passe d’abord le long du canal de la Kyobashi River, du côté du quartier de Nagarekawa.
Autour de moi, plein de travailleurs sont en pause déjeuner : certains mangent leur bento sur les bancs, d’autres discutent, d’autres encore marchent en groupe pour aller trouver un restaurant vers Hiroshima Station.

Moi, je me pose 15 minutes sur un banc. Je vois les locaux qui s’installent près des cerisiers en fleurs et prennent des photos

Le premier jour, en arrivant en bus, j’avais aperçu une sorte de pagode en métal dans les hauteurs de la ville.
Je ne savais pas ce que c’était, mais je l’avais noté.

Aujourd’hui, je découvre la Hiroshima Peace Pagoda.
Je m’allonge sur un banc de couleur bleu, allongé au soleil juste à côté de la pagode pendant 45 minutes.

Je continue ensuite vers le Hiroshima Toshogu Shrine, avec un magnifique cerisier blanc dans le sanctuaire.
Magnifique.

Puis direction le Hijiyama Park, où je fais une petite sieste sous les cerisiers.
Derrière moi, un groupe (amis, famille, collègues, impossible de savoir) fait un barbecue : chaises pliantes, nourriture, rires

Enfin, pour clôturer mon séjour à Hiroshima, je pars manger au Gaba Kamiyacho en fin de soirée après ma lessive.
Je prends un ramen tonkotsu avec une bière.

Je termine par une petite balade digestive dans la ville, éclairée par les devantures et les néons du soir.

Je rentre dans quelques salles d’arcade, sans vraiment trouver mon bonheur.`,
  "mood": "Dernier jour à Hiroshima"
},
{
  "id": "j47",
  "day": 47,
  "title": "Arrivée à Fukuoka",
  "excerpt": `Journée de transition Hiroshima → Fukuoka

Ce matin je me lance un petit défi : bus à 11h05, et j’attends l’ouverture de deux magasins (10h puis 10h30) pour acheter une casquette vintage et un disque dur SSD externe pour mon PC.

Mission accomplie. J’arrive pile poil avant le départ avec mes achats. Me voilà l’heureux détenteur d’une belle casquette et d’un disque dur externe pour pouvoir travailler tranquillement.

Bref, aujourd’hui : 4h30 de bus.
Départ d’Hiroshima à 11h05
Arrivée à Fukuoka à 15h30
Arrivée à l’auberge à 15h45

Je dépose mes affaires, je les éparpille un peu dans mon petit espace et je pars me balader dans la ville.

Première surprise : à 5 minutes à pied de l’auberge, il y a un festival dans le Maizuru Park : le festival des sakura (du 25 mars au 5 avril).

Ambiance super cool : attractions, stands de street food, musique, plein de monde.
Les gens mangent et boivent soit sur des tables, soit directement au sol sur des bâches.
Je me dis direct que je vais revenir le soir pour voir les illuminations.

En attendant, je marche, je me balade, je découvre.
L’ambiance est vraiment stylée, très fashion, beaucoup de monde dans les rues.

Vers 18h45, je fais la queue devant un yatai.

Un yatai, c’est un petit stand de street food typique de Fukuoka : quelques places assises, souvent une dizaine, collé aux autres clients, ambiance conviviale.
On mange, on discute, puis on laisse sa place.

J’attends environ 30 minutes car c’est blindé.

Une fois assis, je me retrouve avec 9 autres personnes, toutes japonaises.
L’ambiance est super. Je prends un ramen avec une bière.

On ne reste pas longtemps ici : on mange, on discute vite fait, et on part.
Et derrière moi, la queue n’arrête pas de s’allonger.

Après ça, je déambule dans les rues, écouteurs dans les oreilles, mains dans les poches.

Je passe par le quartier de Tenjin : grands magasins, boutiques de mode, restos…
Il fait nuit mais tout est ultra lumineux : écrans géants, musiques, odeurs des boutiques… la vibe est géniale.

Je rentre dans quelques magasins comme H&M ou Supreme ect.

Puis sur le chemin du retour, comme prévu, je retourne au Maizuru Park.
Et là… des milliers de personnes.
Les sakura illuminés, les lumières partout… ambiance incroyable.

Je marche, je profite, mais forcément… je me dis que ça serait encore mieux avec une bande de potes.
Voir tous ces groupes boire, manger, rigoler, les couples se balader sous les cerisiers… ça donne envie.

Puis à force de marcher, la fatigue me rattrape : mal aux jambes, tête pleine, ventre plein.

Je prends la direction de l’auberge, et je m’effondre littéralement dans mon lit.
(Confortable, je dois dire)`,
  "mood": "Journée de transition Hiroshima → Fukuoka"
},
{
  "id": "j48",
  "day": 48,
  "title": "Première journée à Fukuoka",
  "excerpt": `C’est parti pour ma première journée complète à Fukuoka !

Je commence par me rendre au Musée d’art de Fukuoka, à 15 minutes à pied de l’auberge, dans le parc Ohori. La visite coûte 200 yens (environ 1€), et pour le prix, je suis carrément surpris.
Il y a une exposition permanente qui n’est pas incroyable, mais surtout une superbe exposition d’art contemporain, avec des tableaux de Marc Chagall, Jean-Michel Basquiat, et des thèmes/projets artistiques vraiment bien pensés, qui ont du sens (en tout cas qui me parlent vraiment).

Notamment deux projets que j’ai adorés, dont une représentation par Yinka Shonibare d’une femme avec un fusil qui tire des cerisiers : un contraste entre la violence du monde et le pouvoir que peuvent avoir certaines personnes, notamment les femmes, pour apporter de la paix.

Ensuite, en descendant les marches du musée pour accéder au parc, je prends un jus d’orange au Café AQUAM du musée. Je me pose sur la terrasse face au lac du parc Ohori (il n’y a pas mieux pour prendre un petit-déj, surtout en plein soleil).

À deux pas se trouve le jardin Ohori Park Japanese Garden. Comme d’habitude : calme, reposant, et j’ai particulièrement apprécié la beauté de l’étang.

Longue balade tout autour du lac. Les familles sont présentes en masse, on sent que c’est dimanche et que le festival y est pour quelque chose.
Du coup : plein de poussettes, des enfants qui courent, des couples sur les bancs près du lac… Franchement, l’ambiance est super détente.

Après avoir fait le tour (au sens propre comme figuré), je décide de prendre le métro pour me diriger vers le quartier de Gion, pour découvrir 2 temples et 1 sanctuaire :
* Tochoji Temple
* Shofukuji Temple
* Kushida-jinja

J’ai vite fait le tour, rien à voir avec ceux que j’ai pu faire jusqu’ici, mais bon, c’est toujours intéressant de voir les temples de la ville (surtout que ceux-ci sont en plein milieu des buildings).

Puis, à 5 minutes à pied, je pars me perdre dans le GIGANTESQUE centre commercial : Canal City Hakata.

Longue balade entre les étages, je repère des boutiques vintage, des magasins de jeux vidéo, de figurines, etc. Puis vers 17h30, je me pose dans un Starbucks du centre commercial pour bosser un peu, avant d’aller manger dans un restaurant de burgers : Masajiro Burger (je suis passé devant tout à l’heure, et puis ça change des ramen et du riz).

Je rentre encore à pied ce soir, écouteurs dans les oreilles, musique et ambiance de la nuit tout du long. Je m’arrête en chemin pour manger 2 cookies, puis je rentre à l’auberge me poser dans la salle commune.`,
  "mood": "Première journée complète à Fukuoka"
},
{
  "id": "j49",
  "day": 49,
  "title": "Balade entre plage et quartiers locaux",
  "excerpt": `Ce matin, je commence par prendre mon petit-déjeuner inclus avec l’auberge : pain au chocolat, œuf dur.

Balade matinale dans le Nishi Park, à 20 minutes de l’auberge. Malheureusement, beaucoup d’endroits sont en travaux, notamment les points de vue avec panorama (je vois qu’ils installent des passerelles et des bancs pour aménager tout ça parfaitement).
Je passe par le sanctuaire Terumo Shrine, à l’intérieur du parc.

Passage par Fukuhama Beach, elle aussi en travaux ahah… mais ça n’a pas l’air d’être la plage la plus jolie.

Pause du midi, posé sur la digue de Seaside Momochi Jigyohama. Complètement solo : un caramel latte, un cookie et deux autres pâtisseries, au calme, avec le clapotis de l’eau.

Balade dans le parc Momochi Seaside Park, juste devant la tour de Fukuoka, et Momochihama Beach, avec plusieurs bars et snacks de plage.
Sur mon chemin, je tombe sur un saxophoniste en train de s’entraîner, posé à côté d’une promenade. Musique en fond sur sa chaîne hi-fi, il essaie de se placer correctement en fonction du son.
Sympathique.

Passage par Atago Beach Park : quelques méduses mortes sur le sable, peu de monde, quelques marcheurs et pêcheurs.

Bus direction le sanctuaire Washio Atago. Il est niché au sommet d’une petite montagne entre les habitations. Une fois en haut, une belle vue sur la ville, malgré un temps gris.

Puis métro direction le musée Hakata Machiya Hometown Fukuoka.
30 minutes de visite (1 €), qui retracent la célèbre fête annuelle de la ville : le Hakata Gion Yamakasa. C’est un festival traditionnel qui a lieu chaque été, où des équipes d’habitants portent d’immenses chars décorés à travers la ville en courant.

Et c’est vers 16h qu’il s’est mis fortement à pleuvoir, je regarde mon téléphone, je me demande ce que je peux faire.

Je décide donc de prendre une pause au Fuk Café, où je prends un matcha latte.
Je pensais pouvoir me poser sur mon PC, mais impossible : c’est un coffee shop tendance avec des mini tables pour boire rapidement, toujours une queue à l’entrée. Du coup, je bois tranquillement puis je repars en quête d’un autre endroit.

C’est environ 20 minutes plus tard, une fois sorti du Fuk Café, que je termine ma journée en prenant un café au lait dans un bar de modern jazz : Jab.

Ce bar, c’est Antoine (un pote de mon groupe) qui me l’a conseillé, et c’était une expérience vraiment sympathique.
Ici, que du cash, alors je m’absente 5 minutes pour aller retirer de l’argent avant de revenir déguster mon café au lait.
Beaucoup d’habitués passent, prennent un café bien brûlant, discutent avec le gérant, puis repartent.`,
  "mood": "Journée calme entre mer, pluie et quartiers locaux"
},
{
  "id": "j50",
  "day": 50,
  "title": "Escapade à Palm Beach dans la préfecture d'Itoshima",
  "excerpt": `Départ vers 9h30 en direction de l’ouest de la préfecture de Fukuoka, pile au nord de la zone d’Itoshima. Environ 1h30 de trajet pour changer complètement d’ambiance.

J’arrive sur la plage, un endroit appelé Palm Beach Itoshima.

Et là… grosse déception niveau météo.
Pluie fine, ciel gris, vent. Impossible de voir le plein potentiel du lieu, qui a pourtant l’air complètement paradisiaque : palmiers, sable clair, petites cabanes de surfeurs, cafés posés face à la mer… un petit air d’Okinawa, clairement.

Mais aujourd’hui, pour moi, c’est ambiance pluie + ciel dégueulasse.

Je trouve quand même un super café : Honu Cafe Itoshima Futamigaura.
Je me prends des fluffy pancakes banane-chocolat avec un jus d’orange, tout fait maison.

Franchement, masterclass.

Je me pose tranquille, je lis mon livre, face à la mer.
Un petit chat se balade dans le café, ambiance hyper chill, presque hors du temps.

On sent que l’été ici doit être incroyable, blindé de monde, avec une vraie vibe surf / vacances.

La pluie finit par s’arrêter, mais le ciel reste bien chargé.

Je pars ensuite voir les célèbres Sakurai Futamigaura Meoto Iwa.
Deux rochers reliés par une corde sacrée, avec un torii blanc face à la mer.
Même avec ce temps, ça reste un spot assez puissant.

Je continue ensuite dans les hauteurs juste en face de la plage.
Je tombe sur un cimetière, puis sur un petit spot connu : le “Heart Tree”.

Et surtout, un endroit complètement inattendu : ambiance presque hawaïenne.
Des palmiers, une herbe bien verte, des bancs en marbre noir, et une vue ouverte sur toute la baie.

Je reste là quelques minutes, accoudé à une barrière, à regarder les vagues, le vent, les surfeurs… et ce torii au loin.

Puis je redescends, je longe la plage, j’observe les cafés, les gens, l’ambiance.

Je passe dans la boutique Surfers Market Itoshima.
Beaucoup d’objets autour du surf, de la van life, des vêtements cool… mais je ne trouve pas LE truc.

Et surtout, je me dis : “j’ai pas de place”.

Je sors.
Je marche.

Et là, petit combat intérieur.

Je vois un spot à 1h de marche sur Google Maps.
Mais en même temps, j’ai envie d’acheter un souvenir ici.

Et pendant une bonne partie de la marche, je suis pas satisfait.
Je veux deux choses en même temps.

Et je me répète :
“Est-ce que cette journée est vraiment mémorable ?”
“Est-ce que je vais m’en souvenir ?”
“Est-ce que ça vaut le coup ?”

Puis déclic :

“Mais qui m’interdit de faire les deux ?”

Et là, tout devient simple.

Je continue jusqu’au spot (pas incroyable honnêtement : déco un peu fake hawaïenne, balançoires, hamacs… sympa sans plus).

Puis je prends un bus.
Retour direct à la boutique.

Et là… meilleure décision de la journée.

J’achète un t-shirt et un autocollant, tout deux avec des designs du lieu “Itoshima”.

Puis pour finir parfaitement la journée, je me pose pendant 2 heures au Surf Side Cafe Itoshima.

Face à la plage, les surfeurs, les collines, le torii au loin.
Musique chill.
Un coca, des frites.

Et surtout… un moment.

Je sors mon carnet, et j’écris :

« J’écris ces quelques lignes au Surf Side Café devant la plage, les surfeurs, les collines, le torii blanc sur la gauche, la musique chill du café et mon plateau de frites et coca que j’ai terminé.

Je ne sais pas si c’est la journée en elle-même qui est mémorable ou si j’ai fait en sorte qu’elle le soit.

Le mot d’ordre du jour : “Et pourquoi pas ?”

La pluie et le mauvais temps n’annonçaient rien de bon et pourtant, c’était une belle journée ! »`,
  "mood": "Escapade à Palm Beach dans la préfecture d'Itoshima"
},
{
  "id": "j51",
  "day": 51,
  "title": "Dazaifu",
  "excerpt": `Réveil à 9h30, mais pas trop motivé à me lever direct. Je reste un peu au lit, sans prendre le petit-déjeuner de l’auberge. De toute façon, la météo est encore capricieuse aujourd’hui… donc je change mes plans.

Direction la petite ville de Dazaifu, connue pour son sanctuaire et surtout pour son musée.

Je commence par le célèbre Dazaifu Tenman-gū. Un sanctuaire dédié à Tenjin, le dieu des études et du savoir.

L’ambiance est vraiment cool : allée principale animée, petits stands.

Je passe ensuite par le Dazaifu Tenmangu Museum, rapide mais intéressant pour comprendre un peu mieux l’histoire du lieu.

Puis je me dirige vers le gros morceau de la journée : le Kyushu National Museum.
J’y reste presque 2 heures.

Le musée retrace les échanges entre le Japon et le reste de l’Asie à travers les siècles : Chine, Corée, routes commerciales, influences culturelles…

Après ça, petite pause au café du musée. Un jus d’orange, tranquille, histoire de souffler un peu.

Vers 16h, je reprends le chemin du retour pour Fukuoka.

Cette fois-ci, j’ai un objectif simple : trouver un café pour me poser et lire.

Je tombe sur Lamplight Books Cafe Fukuoka.

Parfait.

Je prends un croissant, un matcha latte, je m’installe… et je lis.
Deux chapitres.

Et par pur hasard, je tombe sur un passage où le personnage principal se balade dans les rues de Saint-Pétersbourg, complètement dans ses pensées. Il change d’avis en permanence, revient sur ses pas, hésite, devient anxieux puis euphorique selon ce qui lui passe par la tête.
Et là, ça me rappelle exactement ma journée d’hier à Itoshima. Ce moment où j’étais incapable de choisir, où j’étais un peu perdu dans mes propres pensées… avant de juste me dire : “Et pourquoi pas ?”`,
  "mood": "Découverte de la ville de Dazaifu et ses musées"
},
{
  "id": "j52",
  "day": 52,
  "title": "L’île de Nokono et vue sur Fukuoka",
  "excerpt": `Journée complète sur l’île de Nokono 

Petit déjeuner à l’auberge puis je me refais un tout petit déjeuner en passant par Family Mart 

20 minutes à pied puis 15 minutes de bus puis 10 minutes de ferry et me voilà arrivé sur l’île de Nokono 

L’île est connue pour son parc à l’extrémité nord, le ferry nous dépose et un bus est disponible pour nous y emmener ainsi que des vélos en libre-service 

Mais comme à mon habitude, mes jambes sont en pleine forme alors j’en profite pour partir explorer l’ouest de l’île à pied.

Je passe donc devant le bus où tous les touristes montent et me voilà sur mon propre chemin à explorer à mon rythme l’île.

Je commence ma marche en me trouvant dans des quartiers calmes, quasiment déserts, avec parfois des maisons neuves et parfois des champs mal entretenus, à l’abandon 

Je trouve ensuite une superbe plage, je me pose, m’assois, fais quelques photos et vidéos et reste là à regarder le paysage, c’est une toute petite plage, mais elle fait l’affaire, j’ai les montagnes en face de moi et la mer

Puis je me lance le défi de rejoindre à pied l’autre extrémité de l’île là où il y a le parc, l’activité importante de l’île 

Mais avant d’y accéder, je me suis fié quasiment uniquement à mon instinct, parfois en prenant à droite, parfois en prenant à gauche, en descendant, en montant, parfois certains sentiers ne menaient à rien alors je faisais machine arrière, parfois je rentrais chez les gens, alors je faisais très rapidement demi-tour

Je passe par des champs, des champs de mandarines, des cultures

Je me perds, je marche sans réel objectif précis, si ce n’est atteindre le parc

Libre comme l’air, je vais où je veux

Et au bout d’une heure et demie de marche, j’arrive enfin au fameux parc de Nokono 

L’entrée est payante, huit euros
Mais le prix en vaut la peine, car le parc est extrêmement bien entretenu

Des arbres et arbustes taillés à la perfection, des champs de coquelicots jaunes, verts, violets, de partout, un petit parcours de golf est aussi présent

Enfin bref, on marche, on se balade, des grands-mères préparent à la chaîne des frites, tempura et du poulet grillé
Il y a même un mini bar de bière à disposition

Je prends donc une bière en canette et me pose devant une magnifique vue, qui donne sur la mer 

Je continue ensuite le parcours, on traverse à un moment donné quelques étals d’artisans indépendants qui vendent leurs œuvres : de la céramique, des peintures, de la poterie

Puis après ça, on arrive au point final du parc, une grande étendue avec des coquelicots jaunes, quelques mobile homes éparpillés ici et là, un restaurant-café et plein de tables de pique-nique pour pouvoir se poser, observer le champ de coquelicots ainsi que la vue en pente sur le paysage, sur la mer

Il est 16 heures, le dernier ferry est dans une heure alors je ne tarde pas, je prends le bus retour, le ferry retour

Et décide de passer le début de soirée à la tour, Fukuoka Tower, comme Séoul, comme Busan, c’est une très grande tour, la troisième plus haute tour du Japon et la plus haute tour du Japon donnant sur la mer 

C’était magique, parfait, j’ai retrouvé quasiment les mêmes sensations que j’avais lorsque j’ai visité les tours à Séoul et Busan

Posé contre la rambarde à 230 m de haut, je me refais le parcours de ma semaine, en tout cas ce que je peux voir d’ici

Ma longue balade, le musée et le Ohori, etc. 

Je m’installe ensuite au café de cette tour, je prends un café, écris quelques lignes dans mon bloc-notes, je réfléchis, je suis pensif, contemple la ville éclairée de nuit

Puis vers 20 heures, je prends l’ascenseur, quitte la tour, retourne dans le centre-ville et je pars manger mes premiers sushis de mon voyage dans la célèbre enseigne Sushiro 

C’était parfait, j’ai mangé plus d’une vingtaine de pièces, très bonne enseigne, je suis très content de l’avoir testée depuis le temps

Enfin, pour clôturer la journée, je pars faire une lessive dans un lavomatique car effectivement demain c’est mon dernier jour complet à Fukuoka, alors je prépare déjà les affaires, ma valise et je suis prêt à profiter de la dernière journée`,
  "mood": "L’île de Nokono et Fukuoka Tower"
},
{
  "id": "j53",
  "day": 53,
  "title": "Dernière journée à Fukuoka",
  "excerpt": `Dernière journée à Fukuoka

Et c’est une journée qui s’organise sur le fil. Je me réveille, j’ai une idée de ce que je vais faire, je change d’avis… et je m’y tiens.

Je prends donc un train JR pour me rendre à Nanzoïn.

30 minutes plus tard, j’arrive dans cette petite ville de Sasaguri pour découvrir le temple Nanzoïn, connu pour son immense statue de bouddha allongé.

Le temple se situe dans la montagne. Il n’y a pas grand-chose à faire, si ce n’est prendre une glace et contempler la statue (ce que je fais pendant une vingtaine de minutes).

Puis j’ai plusieurs idées en tête, plusieurs choses à faire pour le reste de l’après-midi, et donc pour mes derniers moments à Fukuoka.

Mais mon esprit s’en mêle. J’ai envie de faire ça, ça ou ça… mais il faut bien choisir.

En me baladant dans les sentiers du temple, je découvre quelques petites cascades, des statuettes, puis un sentier dans une forêt de bambous.

Je pénètre donc dans ce sentier rempli de bambous, atteins le sommet en une dizaine de minutes, et me voilà face à un carrefour à trois chemins différents.

Le premier : retourner au temple (pas besoin).
Le deuxième : retourner à la gare et reprendre le train en direction de Fukuoka.
Le troisième : une petite route de campagne.

Je regarde sur Google Maps : si je continue pendant une heure à pied, je tomberai sur un barrage au style un peu particulier.

À ce moment-là, tout se mélange. Pas envie de marcher pour rien, d’aller vers un endroit pas forcément incroyable… mais en même temps, comme à mon habitude, je suis curieux. Impossible de ne pas me dire « pourquoi pas » et partir vers l’inconnu.

J’ai donc pris ce chemin. Marché pendant une heure.

Sur la route, pas grand-chose. Le calme absolu. Parfois des petites maisons un peu délabrées, mais habitées. Parfois des cabanes avec des oranges achetables pour 100 yens. Évidemment, quelques cerisiers en fleurs, et quelques personnes âgées marchant, comme moi (peut-être des habitants d’ici, je ne sais pas).

J’arrive ensuite sur un chemin de campagne, avec des maisons typiques. Des habitants font sécher leur linge. Je dis bonjour et profite d’une jolie vue sur les montagnes.

Après une heure de marche, j’arrive enfin au barrage de Narufuchi.

Au pied du barrage : un endroit calme, de la verdure, de l’herbe fraîchement tondue.

Un petit camping privé où je vois quelques personnes qui ont planté des tentes, ainsi que quelques mobile homes design, éparpillés ici et là.

Et en face de moi, cet énorme barrage au style particulier. Je ne trouve pas immédiatement les escaliers (en réalité, il n’y en a pas : il faut passer par la route).

Au bout de 20 minutes, je marche tranquillement sur le barrage, profitant d’une jolie vue. Mais je remarque qu’il y a encore plus haut, dans les hauteurs, un petit chalet avec sûrement une vue imprenable.

25 minutes plus tard, je m’y retrouve.

Un tout petit parc, mignon, avec des tables et un chalet en bois.

L’endroit est très sympa, très paisible, et surtout doté d’une vue magnifique sur le barrage, le lac et les montagnes tout autour.

Un endroit parfait pour se poser, se détendre, réfléchir. Je suis entouré par les oiseaux, et seulement trois personnes passent en l’espace de 2h30 (sans rester longtemps comme moi).

J’appelle ma mère pendant plus d’une heure, tout en contemplant ce paysage.

Je reste encore 30 minutes à observer autour de moi, écouter le chant des oiseaux, profiter de la tranquillité du lieu, de chaque angle que la montagne m’offre.

Une magnifique façon de clôturer cette journée, ainsi que ma semaine à Fukuoka : chill, paisible, entre les montagnes.

Sans aucun bruit, si ce n’est celui de la nature.

Pour rentrer dans le centre-ville, il me faut 35 minutes de marche pour rejoindre la gare locale la plus proche, puis 40 minutes de train.

Avant de rentrer à l’auberge pour ma dernière nuit, je m’installe dans un restaurant que j’avais sauvegardé quelques jours plus tôt : Shin Shin (restaurant de nouilles japonaises ultra connu en ville).
1 heure d’attente. C’était bon… mais pas incroyable pour une heure.

En sortant, je me balade sur les quais en direction d’un bar reggae (conseillé par mon pote Antoine, qui y était allé un an auparavant).

Le bar est au premier étage d’un immeuble. Je rentre : l’ambiance est géniale. Intimiste. 7-8 places au bar, des vinyles partout, des affiches, magazines, objets des années 80-90… j’adore.

Le tout dans une déco entièrement en bois, tenue par le même homme depuis 32 ans.

Au départ, deux Japonais d’une quarantaine d’années discutent avec le patron du bar.

Puis un Australien s’assoit à côté de moi, puis quelques minutes plus tard, une Hongkongaise également.

Chris (30 ans) et Violet (26 ans).

Et finalement, on aura passé toute la soirée ensemble, de 21h à 2h du matin.

Je n’ai pas vu le temps passer. Les discussions étaient géniales, beaucoup de rires, de partage. Découverte de plusieurs alcools japonais : highball et évidemment du saké.

Je suis vraiment très content de les avoir rencontrés. Toujours des perspectives et des chemins de vie différents, découvrir leur vie, leur façon de penser, et évidemment l’effet désinhibant de l’alcool qui nous permet de lâcher prise, de rire de tout et de se confier, etc.

L’ambiance fut géniale. Discussion avec le patron du bar via Google Traduction : il nous faisait tester quelques alcools et prenait part à nos discussions.

Puis, vers la fin, avant de partir, Violet sort un Polaroid et prend plein de photos de nous avec le patron du bar.

Ainsi, je repars de Fukuoka avec un beau souvenir : à la fois ce moment de partage toute la nuit, mais également une photo Polaroid du moment !

Tout simplement magique !

Et c’est comme ça que s’est terminée cette journée, dernière journée à Fukuoka.
Serrage de main avec Chris, accolades avec Violet, et nous nous invitons mutuellement à venir dans nos pays respectifs un jour.

Au final, je voulais trouver une façon simple et mémorable de passer cette journée. Comme dit au début, j’étais un peu sceptique sur son organisation, mais j’ai réussi à construire de A à Z une journée parfaite en suivant mon instinct.

Magnifique journée qui restera mémorable.`,
  "mood": "Instinct, liberté et rencontres"
},
{
  "id": "j54",
  "day": 54,
  "title": "Arrivée à Nagasaki",
  "excerpt": `Réveil difficile ce matin : tête dans le cul, mal au bide, mais content de la soirée d’hier et de ces deux rencontres avec Chris et Violet.

Mais pas le temps de rester au lit, mon bus pour Nagasaki est à 11h46. Alors je me lève relativement tôt et je me prépare.

Départ de Fukuoka à 11h46  
Arrivée à Nagasaki à 14h35  
Arrivée à l’auberge à 15h00  

Découverte de l’auberge « Casa Blanca » : sympathique, tout est blanc et le dortoir a l’air bien agencé.

Bref, je déballe mon sac, j’éparpille mes affaires, puis je me pose tranquillement dans mon lit pour mettre à jour ce site sur les derniers jours. Ensuite, je pars flâner dans les rues de la ville jusqu’au soir.

La ville est petite, calme, tranquille.

Puis je monte dans les hauteurs de la ville pour aller au parc Tateyama, car depuis que la nuit est tombée, je vois des lanternes rouges, ce qui m’intrigue.

En arrivant, je découvre que ce sont en fait des installations de lanternes rouges dans tout le parc. Il y a notamment quelques petits stands de street food.

Mais bon, tout le monde est accompagné ou en couple, posé en mode pique-nique… alors je ne reste pas trop longtemps et je pars marcher vers le centre-ville pour manger un burger chez CoCo Burgers & Sports Bar.

Le restaurant était très bon, et le serveur propose des frites gratuites en échange d’un avis Google, donc j’ai eu mes frites gratuites : parfait.

Puis petite balade digestive dans la ville de nuit, en passant par le centre-ville et Nagasaki Seaside Park.

La ville en elle-même est assez petite, mais la préfecture de Nagasaki est immense.

Du coup, près du port, on voit plein de maisons dans les hauteurs, de l’autre côté de la mer.

Après cette balade nocturne, je rejoins l’auberge pour m’endormir tranquillement, en ayant hâte de ma journée de demain.`,
  "mood": "Journée de transition Fukuoka --> Nagasaki"
},
{
  "id": "j55",
  "day": 55,
  "title": "Une journée irréelle sur la côte de Nagasaki",
  "excerpt": `Et hop, une de mes journées préférées de mon voyage ! Aujourd’hui, le dimanche 5 avril 2026.

Un peu de patience… je m’explique :

Tout content de me réveiller pour passer ma première journée complète à Nagasaki, et je pars déjà me perdre dans les contrées sauvages de la préfecture !

Au programme : direction la côte nord-ouest au-dessus de Nagasaki, sur la côte ouest du mont Inasa.

Pour y aller, 40 minutes de bus.

Je trouve même assez impressionnant que le réseau de bus ici, dans la préfecture de Nagasaki, soit aussi étendu.
Pas besoin de prendre un train local, le réseau de bus est bien présent.

Ainsi, après 40 minutes de bus, j’arrive devant ce parc. Et comme j’ai bien organisé la chose, j’ai déjà mon petit déjeuner dans mon sac, acheté juste avant de monter dans le bus !

Du coup, je me pose sur une petite digue devant l’eau turquoise. Quelques pêcheurs sont un peu plus loin, sur une autre digue, et je déguste tranquillement ce petit déjeuner pendant une vingtaine de minutes.

Le bus m’a déposé ici, mais évidemment je ne vais pas me contenter de cet endroit. Alors, à 11h40, je démarre officiellement en longeant tranquillement la côte.

En marchant, je m’aperçois petit à petit que la vue au loin n’est plus la même : des grues, des gros ports avec des conteneurs, etc.

Ça me donne envie de longer encore plus la côte pour voir ce qui se cache derrière les montagnes.

Je commence à voir un parc avec un terrain de baseball. Je regarde autour de moi et je m’aperçois que je suis en réalité vers le bout de cet endroit, dans une petite zone industrielle. C’est ainsi que je me retrouve à marcher sur une longue, longue route déserte, en plein soleil.

L’ambiance est assez spéciale. J’y prends goût, je marche au milieu de la route et je rejoue d’ailleurs la même musique en boucle pour apprécier encore plus le mood.

Après ça, pour longer la côte, je dois passer par un tunnel long de 526 m (je me rappelle du panneau ahah).

Toujours avec la même musique, je marche dans ce tunnel où les voitures roulent assez vite, mais fort heureusement il y a une barrière piétonne.

Puis à la fin de ce tunnel, je tourne à gauche et je dois reprendre un autre tunnel (700 m celui-ci).

Enfin bref, comme j’ai pris plusieurs tunnels qui traversent littéralement la montagne, je me retrouve sur une autre côte.

Son nom : le cap Fukuda.

J’arrive dans cette zone un peu irréelle : palmiers, soleil, montagne en fond.

J’en profite pour m’acheter quelques viennoiseries, une Monster et un donut (très important pour la suite de l’histoire).

Je traverse un charmant petit village, puis j’arrive dans le parc du Nagasaki Sunset Marina.

Vraiment très beau, avec pas mal de bancs face à la mer.

Je m’assois, j’ouvre ma canette de Monster, puis le sachet de mon donut. Je fais un croc et… POUFFF.

En une fraction de seconde, un aigle m’a littéralement chipé mon donut, avec une précision incroyable, sans même me toucher ni toucher mes doigts ou ma main. L’aigle a réussi à choper le donut…

Et je dis à haute voix : « Putain mon donut ».

Bon, heureusement j’avais d’autres viennoiseries donc de ce côté ça va, mais je suis resté un peu bête pendant 2-3 minutes.

Obligé de me planquer derrière un mur et un préau pour manger le reste de ce que j’avais acheté ahah.

Après ça, je m’assois sur un autre banc, je contemple la vue, je profite du grand soleil tranquillement en respirant à plein poumons.

(Je zieutais de temps en temps les aigles pour pas qu’ils chopent mon téléphone au cas où.)

J’ouvre Google Maps et je clique sur la plage de Kakidomari Beach, très bien notée (4,4/5 avec 80 avis).

Google me propose 3h30 à pied. C’est non.

En fait, il contournait carrément une route nationale pour me faire passer par des chemins plus tranquilles.

J’ai donc pris la direction de la route nationale, en marchant le plus possible près du bord. Et parfois, quand il y avait des trottoirs, ils étaient impraticables, avec de l’herbe, de la brousse ou des trous, etc.

Après 15 minutes de marche et à l’intersection d’un cimetière, je peux enfin me placer sur un trottoir relativement praticable.

J’arrive, en prenant des petits chemins, à tomber sur un autre petit village complètement charmant : Koemachi.

Un parc avec de l’herbe fraîchement tondue, des cerisiers, et une vue sympathique sur la mer et un port.

Je marche encore puis je tombe sur un autre tunnel. Mais cette fois-ci, je le sais, je le sens : quand je vais arriver au bout, il va y avoir une belle vue.

Je vois la fin du tunnel, la lumière est de plus en plus forte. Je sors, je prends la première petite route qui descend… et je vois la plage.

Mais avant, je tombe sur une piste de course de voitures télécommandées.

6 personnes sont là à discuter et, évidemment, à télécommander leurs petites voitures. Sûrement des amateurs, car ils étaient tous vraiment doués.

Bref, je regarde ça pendant 5 minutes, puis je descends pendant 2 minutes et je me retrouve enfin sur la plage de Kakidomari Beach.

Très peu de personnes, une belle formation rocheuse sur ma gauche, une belle crique avec des escaliers pour s’asseoir et regarder la mer.

Je me pose, puis je pars me balader dans les rochers.

Je vois deux jeunes se baigner, puis l’idée me vient à l’esprit…

Il fait beau, il fait bon, peu de personnes sur la plage, la mer est calme… alors c’est décidé : je vais me baigner. Première baignade de l’année 2026 !

Je pose mon sac, me déshabille et pars me baigner en caleçon (pas besoin de serviette, avec le soleil je sécherai rapidement).

Et c’est comme ça que j’ai passé 5-10 minutes dans l’eau, seul, à contempler la vue, la plage et à nager sous l’eau.

Complètement libre, complètement heureux !

Puis retour sur la terre ferme, séchage, habillage… et je reste là pendant 3 heures.

Le temps est passé à une vitesse folle !

Orientée plein ouest, je savais que le coucher de soleil allait être magnifique !

La plage était presque vide, calme.

J’en ai profité pour faire quelques photos et vidéos, et j’ai juste contemplé, assis sur les marches de la crique, le soleil descendre et disparaître.

Je suis ensuite allé voir le rocher en forme de pomme, puis je me suis tranquillement rapproché de l’arrêt de bus le plus proche.

30 minutes à attendre dans le noir complet, proche d’une route.

Quelques bruits d’animaux, un silence fou, et la présence d’une cinquantaine d’étoiles bien visibles dans le ciel !

Magnifique journée ! Belle balade, belle découverte, beaucoup de réflexion et, évidemment, une balade de 18 km que je ne pourrai pas oublier !`,
  "mood": "Journée irréelle et liberté totale"
},
{
  "id": "j56",
  "day": 56,
  "title": "Culture et mémoire à Nagasaki",
  "excerpt": `Journée nuageuse mais il fait 21 degrés.

J’en profite pour aller voir le Musée de la Bombe Atomique. Toujours aussi émotif... Je pensais que ce serait une sorte d’annexe à celui d'Hiroshima, mais pas du tout, il a sa propre identité.

Je me pose ensuite au Atomic Bomb Hypocenter Monument, dans le parc de l'hypocentre. J'y rencontre un Japonais originaire d'Isahaya. Il souhaite améliorer son anglais, alors il est venu m'aborder. J'ai pu lui poser pas mal de questions et lui en a fait de même sur la culture française. Un bel échange.

Direction ensuite le Parc de la Paix où je me pose quelques instants, avant de partir voir la Cathédrale d'Urakami. C'est assez bizarre de pénétrer dans un lieu chrétien après 5 mois passés entre les temples bouddhistes et les sanctuaires shintoïstes.

J'enchaîne avec le Musée des 26 Martyrs du Japon. Hyper intéressant ! Je ne connaissais absolument pas cette histoire, notamment la persécution des chrétiens à cette période. Il y a d'ailleurs un film de Scorsese à ce sujet (Silence), ce qui rendait la visite d'autant plus importante pour moi.

Je finis l'après-midi au Musée préfectoral d'art de Nagasaki avec une exposition sur Kikuhata Mokuma. Je m'installe ensuite dans le coin librairie où je feuillette trois livres : un sur Pixar, un sur les objets des années 50-60, et un sur les impressionnistes.

J'ai dû y rester une bonne demi-heure. J'avais l'impression d'être un étudiant à la Sorbonne ou un étudiant en lettres qui se pose en bibliothèque pour se documenter. J'étais assis, entouré de bouquins, avec des iPad pour lesrecherches. Le mood était vraiment sympa.

Je termine la journée dans un restaurant de ramen choisi au hasard. Ambiance sympathique : je suis posé devant les cuisines et je regarde une vidéo YouTube sur mon téléphone.

Une journée peut-être moins spectaculaire mais remplie de culture et d'apprentissages sur la ville, l'histoire et l'art. 

J'adore`,
  "mood": "Culture et histoire de Nagasaki"
},
{
  "id": "j57",
  "day": 57,
  "title": "Entre rencontres et coucher de soleil sur Nagasaki",
  "excerpt": `Petit-déjeuner au Seaside Park de Nagasaki sous un grand soleil, le mood est trop cool. Des aigles rôdent autour du parc, alors maintenant je fais gaffe.

Puis, visite du jardin iconique de la ville, le Glover Garden, pendant 2h. C'est un véritable musée à ciel ouvert qui regroupe d'anciennes demeures coloniales occidentales, offrant une vue imprenable sur le port de Nagasaki.

Une fois la visite finie, j’ai eu plusieurs pensées, plusieurs idées de choses à faire. 

Est-ce que je pars encore en vadrouille proche de la côte ? Mais si je fais ça, je ne pourrai pas voir le mont Inasa... Vais-je faire ma lessive en attendant 16h pour y aller ? 

Finalement, comme il fait beau et chaud avec un grand soleil, je prends la décision de prendre de la hauteur et de me promener dans un parc au hasard : le Kazagashira Park.

Une canette de Coca prise au distributeur, puis j'admire la vue pendant 45 minutes. 

Avant de partir pour la montagne en face, je rentre dans un petit musée d’un artiste indépendant : Kiyoto Ueda.

Le local est niché dans un coin reculé du parc. 

Évidemment, je suis seul dans ce petit musée et nous discutons tous les deux. Son anglais est un peu limité, mais on arrive à se comprendre.

S’ensuit une vingtaine de minutes de discussion sur sa vie, ses peintures et ses inspirations. Il m’a même offert un thé et une pancarte avec l'un de ses dessins. Une rencontre et une discussion vraiment agréables. 

C'est assez fou de se dire que cet homme a été artiste toute sa vie ; il est maintenant professeur de dessin pour des collégiens. Né sur une petite île, il a étudié à l’université à Tokyo, puis est parti vivre tout en bas du Japon, à Nagasaki, où il possède sa maison et ce local depuis des dizaines d’années.

Il m’a l’air d’être un homme seul, ce qui lui permet, avec ce musée, de rencontrer à la fois des locaux et des étrangers. J’ai d’ailleurs noté mon nom sur un calepin : on y voit pas mal de locaux et, sur la semaine, un seul autre étranger venant d’Angleterre. Je suis le deuxième et j'ai pu noter mon pays : la France.

À 16 heures, j’ai fini mon thé et notre discussion s’éteint petit à petit. Je lui achète un souvenir, puis je prends la direction de la sortie. Je le remercie pour son cadeau et pour le thé, et c’est ici que nos chemins se séparent. 

Je reprends ma route direction le mont Inasa.

Pour y aller depuis le parc où je suis : 15 minutes à pied jusqu’au centre-ville, puis 15 minutes de bus et 1h à pied. 

Une ligne de bus ainsi qu’un téléphérique sont disponibles pour monter. 

Mais j’ai préféré y aller à pied vu que j’ai le temps et l’énergie.

À 17h30, je suis bien arrivé au sommet, à 333 m d'altitude. D’abord un parc sympathique avec une première vue, puis 20 minutes plus tard, direction la plateforme d’observation. C'est totalement gratuit avec une vue à 360 degrés.

J’arrive à 18h04 au sommet de la plateforme, je m'installe face à l’ouest et j’attends patiemment le coucher de soleil. 

D'ici, je peux retracer quelques moments de mon séjour : notamment la longue allée où j’ai écouté de la musique en boucle, la marina de Nagasaki et, évidemment, je me dis que derrière la petite montagne en face de moi se cache la plage où je me suis baigné deux jours auparavant !

Magnifique coucher de soleil depuis cet endroit ; à plus de 333 m, la vue est franchement incroyable. L’endroit est très connu alors il y a plein de monde, mais ça reste magique. Le soleil se couche puis laisse place à la nuit ; la ville est magnifique éclairée. Un peu comme Busan, avec les lumières des rues, du port et de la rivière.

Je serai finalement resté dans l’observatoire de 18h à 21h. Après le coucher du soleil, le vent et le froid étaient trop forts sur le toit, alors je me suis posé à l’intérieur de 19h45 à 21h pour contempler la ville. La musique d'Enya qui passait créait une atmosphère paisible et planante.

Encore une merveilleuse journée qui s’achève et qui laisse place à ma dernière journée à Nagasaki.`,
  "mood": "Glover Garden, discussion avec un artiste et coucher de soleil au mont Inasa"
},
{
  "id": "j58",
  "day": 58,
  "title": "Dernière aventure sauvage à Nagasaki",
  "excerpt": `Dernière journée à Nagasaki, et ça fait déjà quelques jours que je sais exactement ce que je vais faire pour cette dernière journée.

Direction le musée Nagasaki City Dinosaur Museum, situé à 23 km du centre-ville.

Ce n’est clairement pas l’activité principale de la préfecture, mais je pense bien aimer, et surtout, la localisation du lieu est son vrai point fort.

Pour y aller, je dois prendre deux bus de 30 minutes chacun.

Mais gros rebondissement : le premier bus bifurque au milieu du trajet. Je regarde à droite, à gauche… je ne sais pas du tout où je suis, donc je descends.

Et me voilà complètement perdu au milieu de la campagne japonaise, à côté d’un petit port de pêcheurs.

À ce moment-là, j’ai le choix : soit je prends deux autres bus pour aller au musée, soit…

faire un quart du trajet à pied, en longeant la côte.

Évidemment, j’ai longé la côte. Et pendant une heure, j’ai eu une vue incroyable sur la mer, deux petites plages comme des criques, des villages de pêcheurs, et de longues routes super agréables.

Je suis aussi passé par des petits villages, tout mignons et surtout très calmes.

De belles maisons, style maisons de vacances, des jardins extrêmement bien entretenus, avec pas mal de bonsaïs et autres décorations.

Bref, il est 12h45 et me voilà devant le musée, comme si je venais de vivre une journée à part entière dans la journée elle-même, totalement imprévue.

Pourquoi je voulais voir ce musée ?

Je ne dirais pas que c’est le musée en lui-même qui m’a attiré, mais plutôt sa localisation.

Je me suis dit que ça pouvait être intéressant de faire une visite instructive et pédagogique sur les dinosaures, puis de partir à l’aventure dans les falaises et les sentiers de la presqu’île.

Bref, j’arrive à 12h45 devant le musée. Je dois faire attention, car le dernier bus retour est à 20h51, ce qui me laisse toute l’après-midi et le début de soirée pour vagabonder et me perdre une dernière fois dans les montagnes, les sentiers et les plages pendant ce voyage.

En effet, je pars demain pour Tokyo… et ça m’étonnerait que je retrouve des paysages et des panoramas similaires dans la capitale.

C’est assez émouvant, parce que c’est peut-être la dernière fois que je vais pouvoir faire ça : partir me perdre comme ça, au hasard, dans des chemins de campagne, dans les falaises, sur des routes sinueuses et peu entretenues… pousser à fond ce sentiment de liberté, de libre arbitre et d’adrénaline.

Ce que j’ai encore vécu ce matin : être totalement libre, juste flâner et découvrir des paysages incroyables.

Pour parler des musées, le premier, sur l’ancienne île de charbon Gunkanjima, puis le musée des dinosaures.

J’ai passé 20 minutes dans le premier et 45 minutes dans le musée dino.

Je me dirige ensuite vers le petit restaurant à côté du musée, qui propose des « sandwiches dinosaures »… qui sont en réalité des kebabs.

Je prends un kebab avec une bière, je marche une minute, et je me pose face à la mer, seul, tranquille, à déguster ça vers 14h30.

Une fois le ventre bien rempli, vers 14h40, je commence mon escapade dans les alentours.

15h54 : arrivée à l’observation deck du mont Gongen.

Magnifique panorama. J’achète une canette de Monster au distributeur pas loin, je me pose et je contemple pendant une bonne heure cet endroit avec une vue incroyable.

Je me pose alors une question : est-ce que je regarde le coucher de soleil ici, ou est-ce que je vais à la plage Wakimisaki Beach pour le voir ?

Finalement, je fais quasiment 50 minutes à pied, presque que de la descente, pour rejoindre la plage Wakimisaki.

Sur Google, les photos avaient l’air beaucoup plus impressionnantes.

En arrivant, je découvre une longue plage… avec seulement 3 ou 4 personnes qui promènent leurs chiens.

Très vite, je me retrouve complètement seul sur cette grande étendue jusqu’aux dernières lueurs du jour.

Je profite à fond du moment. Je mets les musiques que j’aime, je cours un peu… j’ai vraiment l’impression d’être dans un rêve éveillé, en me disant que c’est peut-être la dernière fois que je vis ça pendant ce voyage.

Je reste là, immobile face à la mer, avec les couleurs magnifiques du coucher de soleil.

Petit à petit, la plage s’assombrit… la nuit prend le relais.

Je prends ensuite le chemin du retour, direction l’arrêt de bus le plus proche.

Je pars d’abord à droite (mauvais choix), puis je cours un peu vers la gauche pour ne pas rater l’avant-dernier bus.

Après une heure de transport, j’arrive dans le centre-ville, où je trouve un restaurant chinois qui propose des ramens : pas incroyables, mais ça fait le taf.

Vers 22h, je fais une lessive, je plie mon linge dans mon sac, puis je retourne à l’auberge.

Voilà, c’était mon dernier jour à Nagasaki.

Et j’étais vraiment connecté au moment présent, en sachant très bien que je disais au revoir à une partie du voyage… à un mode de vie chill, calme, reposant, entre mer, plage et montagne.

Demain, direction la capitale : Tokyo.`,
  "mood": "Dernière aventure à Nagasaki et liberté"
},
{
  "id": "j59",
  "day": 59,
  "title": "Arrivée à Tokyo et premières lumières d’Akihabara",
  "excerpt": `Départ de l’auberge à Nagasaki – 08h00
Arrivée à Tokyo – 16h15
Arrivée à l’auberge (quartier Ueno) – 16h50
(Distance : 950km)

Honnêtement, je n’ai pas vu le temps passer pendant le trajet. J’étais très pensif, parfois le regard perdu sur le paysage… Quelques petites siestes, la lecture d’un chapitre de mon livre, et un peu de musique.

J’ai eu la chance d’apercevoir pendant 2 minutes le sommet du Mont Fuji depuis le train shinkansen. Moment un peu spécial : frissons… et dans mes oreilles, la musique d’introduction du film Cocktail (1988), Wild Again de Starship, exactement à ce moment-là.

Dans le film, Tom Cruise, alias Bryan Flanagan, prend un bus direction New York. Il regarde par la fenêtre et observe les deux tours jumelles, scène accompagnée par cette musique.

Et moi, au même moment, j’ai cette musique dans les oreilles… et je regarde, presque poétiquement, le Mont Fuji. Prêt à vivre les dernières semaines de mon voyage.

Bref, après ce moment un peu cinématographique, j’arrive à la gare de Tokyo, puis à l’auberge.

Une fois sur place, je dépose mes affaires, je prends une douche, puis je me dirige vers le quartier d’Akihabara.

Ça y est… j’y suis. La capitale du Japon.

J’arrive à Akihabara vers 18h00.

Et là, je découvre un quartier rempli de néons, d’écrans géants, de lumières et de couleurs éclatantes, à la nuit tombée.

Je me balade tranquillement. Je rentre dans quelques boutiques, j’achète quelques souvenirs.

Je passe notamment dans des salles d’arcade, style Taito ou GiGO.

Je joue à pas mal de jeux de conduite, de tir, mais aussi aux machines à grappin… où, clairement, la chance n’était pas avec moi.

Plus tard, je trouve un restaurant de ramen : Hakata Furyu (Akihabara flagship shop).

Puis, pendant ma balade digestive, je me rends compte que j’ai déjà fait le tour du quartier. Akihabara n’est pas très grand, mais j’ai pu faire toutes les boutiques que je voulais… et évidemment me perdre dans les magasins de figurines, d’animé et de jeux vidéo.

J’ai quand même ressenti que la folie de la découverte n’était pas totalement là. En réalité, la plupart des grandes enseignes, je les avais déjà vues pendant mon séjour de trois semaines à Osaka.

Mais ça reste un vrai plaisir de se balader dans ce quartier culte de la pop culture.`,
  "mood": "Arrivée à Tokyo et premières lumières d’Akihabara"
},
{
  "id": "j60",
  "day": 60,
  "title": "Journée culturelle et pluvieuse à Tokyo",
  "excerpt": `Journée nuageuse et pluvieuse

Comme je suis dans le quartier d’Ueno, j’en profite pour commencer la journée avec le Musée national de Tokyo, ainsi que son annexe : le National Institutes for Cultural Heritage.

Je reste 2h30 à découvrir des artefacts de différentes époques japonaises et chinoises, avec aussi quelques sections sur l’Égypte et l’Asie du Sud-Est.

Ça fait officiellement 2 mois jour pour jour que je suis au Japon, et je commence vraiment à connaître (ou en tout cas à reconnaître) les différentes époques, à faire des liens entre les changements dans l’histoire du pays. C’est carrément satisfaisant.

Vers 14h, je pars manger et découvrir un très beau restaurant : Kayaba Coffee.

Un brunch / coffee à la carte, dans un lieu vieux de plus de 100 ans.

Je prends un sandwich au corned beef, avec un matcha latte en boisson/dessert.

Très bon. L’ambiance est géniale : assis par terre sur une petite table, musique jazz en fond, portes coulissantes typiques du Japon en shoji.

Après ça, je pars me balader dans le parc d’Ueno, connu pour être le bol d’air frais de la capitale (un peu comme le Jardin du Luxembourg à Paris).

Parfait pour les balades après le travail ou le week-end.

Dans le parc, il y a notamment le The Ueno Royal Museum et le Tokyo Metropolitan Art Museum.

Le premier musée expose des œuvres de jeunes artistes japonais pour leur donner un peu de visibilité.

Le second, beaucoup plus connu au Japon, propose une exposition permanente divisée en quatre parties, ainsi qu’une exposition éphémère qui change chaque trimestre.

Je tombe donc sur l’exposition Masters of Swedish Painting, qui m’a permis de découvrir l’art suédois, et notamment comment il s’est métamorphosé après que plusieurs artistes soient venus en France pour se former auprès des grands noms de l’impressionnisme.

J’ai donc découvert les artistes suivants :
	•	Marcus Larson (Gale on the Bohuslän Coast)
	•	Edvard Bergh
	•	Ernst Josephson

Enfin voilà, loin des montagnes et des plages, j’ai essayé de me construire une journée comme je les aime :

Musée + brunch + jazz + galerie d’art + balade tranquille.

C’est ça, pour moi, l’essence et le mood des grandes capitales comme Tokyo.

Un peu dans le style de New York :
prendre des cafés, se balader, voir des expositions et des galeries d’art, puis finir par dîner dans un restaurant le soir.

Je finis la journée avec une glace banane tiramisu au St. Marc Cafe, puis je me dirige, à deux pas de là, pour manger un ramen un peu spécial : un ramen avec de la viande de canard chez Ramen Kamo to Negi Ueno Okachimachi Main Store.`,
  "mood": "Journée culturelle et pluvieuse à Tokyo"
},
{
  "id": "j61",
  "day": 61,
  "title": "Face au Mont Fuji, enfin",
  "excerpt": `C’est avec beaucoup de plaisir et avec impatience que je pars aujourd’hui admirer le mont Fuji.

Pour le contexte, le mont Fuji n’est pleinement visible qu’environ 80 jours par an. La plupart du temps, son sommet est dissimulé par les nuages, la brume ou les variations météorologiques, en raison de son altitude (3 776 mètres) et de son climat très instable.

Ainsi, il y a quelques jours, j’ai commencé à analyser la météo. J’ai comparé les prévisions sur les dix jours à venir, croisé plusieurs sources, et je suis même allé jusqu’à consulter l’IA pour déterminer avec précision quel serait LE jour idéal pour l’observer dans les meilleures conditions.

Réponse finale, après quelques recherches :

Aujourd’hui, samedi 11 avril 2026.
(Grand soleil toute la journée, ciel bleu, pas un nuage et en prime une température de 23 degrés)

J’écris donc ces quelques mots dans le bus (3h50 de trajet avec bouchons), direction Fujikawaguchiko, la ville parfaite pour observer le mont avec quelques spots iconiques dans les environs. 

Ce jour, j’y pense depuis très longtemps. En effet, même quand j’étais à Séoul en Corée du Sud, j’y pensais. Je me disais en décembre : 

« Et dire que je vais voir le mont Fuji, ça va être fou, je vais le voir de mes propres yeux, wow »

Ainsi, je mets le réveil à 6h30, prends le métro puis rejoins le bus que j’ai réservé à 8h50.

Arrivée à Fujikawaguchiko à 12h40.

Premier pas : il fait chaud, il fait beau et je prends mon propre chemin direction le spot du Lawson Fujikawaguchiko, ultra connu. J’ai donc pris un truc à manger et en même temps fait quelques photos.

Sur la route, je me sens bien, grand sourire, et je n’arrête pas d’avoir la tête tournée pour regarder le mont Fuji.

J’arrive au spot, génial mais avec pas mal de monde.

Je décide ensuite de prendre un bus direction le Oishi Park pour tester le café Oishi Park Café avec une vue sur la montagne.

Je prends le bus, puis je ne comprends pas pourquoi il va plus loin que prévu : il ne prend pas la route que j’ai sur Google Maps. Alors je descends à un arrêt et c’est parti pour 1h de balade à pied autour du lac Kawaguchiko.

Cette balade était imprévue mais elle fut géniale. La vue avec le lac qui brille au soleil et le mont Fuji en fond… franchement c’était super beau !

Arrivée au parc Oishi, plus de monde que prévu. Je ne m’attendais pas à voir autant de monde.

Tellement de monde qu’il y a même une longue file d’attente pour s’installer au café. Je n’ai donc pas pu tester les pancakes du café mais j’ai quand même pris une spécialité du stand à côté : un jus de pêche à emporter.

Posé sur un banc, je contemple tranquillement le mont Fuji.

J’essaie tant bien que mal de prendre un taxi via Uber pour aller sur un spot dans les hauteurs, bien connu, mais impossible : ma course est refusée à chaque fois, faute de chauffeurs disponibles au vu du monde présent dans la ville.

Tant pis, je reste un peu plus longtemps dans le parc Oishi. Je fais quelques photos, je demande à des gens de me prendre en photo et je me rapproche de l’eau du lac pour observer le paysage.

16h30, il est déjà temps de prendre le chemin du retour. Le bus est bondé, avec plein de bouchons partout dans la ville.

Une fois arrivé à la station, je monte directement dans le bus retour direction Tokyo.

Enfin bref, il fallait s’y attendre : entre la pluie d’hier et la météo annoncée pour la semaine suivante, c’était LE jour parfait pour voir le mont Fuji !

J’écris ces derniers mots dans le bus. La journée fut intense et rapide. Évidemment, au vu de mon voyage, j’en veux toujours plus. Je ne suis pas rassasié, je n’ai pas l’habitude d’avoir une deadline de retour… mais je peux quand même être content et heureux de l’avoir vu de mes propres yeux.

J’ai pu marcher tranquillement dans ma bulle pendant 1h, quelques musiques dans mes écouteurs accompagnées du mont Fuji :

C’était parfait.

Je finis la journée par manger dans un restaurant de burgers : le Japanese Food Wagyu Restaurant (très très bon burger et très bonne viande, un peu cher ceci dit).

Puis balade digestive vers le quartier d’Asakusa où je me pose au Sumida Park, devant la Tokyo Skytree, avec mes écouteurs.`,
  "mood": "Le Mont Fuji"
},
{
  "id": "j62",
  "day": 62,
  "title": "Asakusa, Sumida et plaisirs simples",
  "excerpt": `Quartiers d’Asakusa et de Sumida

Ce matin, réveil tranquille, puis sortie de l’auberge vers 10h30.

Prêt à profiter pleinement des quartiers d’Asakusa et de Sumida pour toute la journée !

Je commence par m’offrir un petit-déjeuner plutôt sympa chez Age.3. Une heure d’attente, mais ça en valait largement la peine : chaque bouchée était un vrai plaisir.
J’ai pris trois pains frits croustillants (banane chocolat, whipped cream et crème brûlée) accompagnés d’un matcha latte.
Un vrai régal. Ça faisait longtemps que je n’avais pas été autant surpris par le goût d’une pâtisserie.

Je me suis ensuite posé au Sumida Park, le long de la rivière (le même que celui d’hier soir), avec une vue directe sur la Tokyo Skytree.
Un moment calme et paisible pour profiter pleinement de ce petit-déjeuner.

J’ai ensuite marché un peu au hasard dans le quartier de Sumida, en passant juste en dessous de la Tokyo Skytree, avant de me diriger vers le Tobacco & Salt Museum.

Musée extrêmement intéressant. J’y ai découvert une exposition sur le sel et son importance pour les animaux, les humains et la société en général : procédés chimiques, savoir-faire humains, rôle essentiel pour le corps, etc.

Puis vient la partie principale : le tabac.

« Avant le XVe siècle et l’arrivée des Européens, les Amérindiens pensaient que fumer le tabac jouait un rôle important dans le lien entre les humains et les dieux. »

J’y ai passé presque 2 heures et j’ai vraiment adoré. Beaucoup d’informations, d’objets, des pipes, des narguilés, des paquets de cigarettes… mais aussi tout ce qui concerne la fabrication du tabac, sa mondialisation et le marketing autour. Passionnant.

J’enchaîne avec une balade rapide dans le Oyokogawa Water Park, un parc tout en longueur avec un parcours en zigzag, entrecoupé de petits ruisseaux.

Je fais ensuite une pause goûter au Kinshi Park. Ambiance très détendue, presque comme un dimanche : beaucoup de familles et de groupes d’amis en pique-nique. Une atmosphère vraiment chaleureuse.

Je passe ensuite rapidement par le sanctuaire Asakusa et le Senso-ji, toujours aussi impressionnants.

Je termine la journée avec un ramen chez Janbara Ramen, une petite adresse encore peu touristique.`,
  "mood": "Quartier Asakusa et Sumida"
}





    ]
  }
];

{/* ===================== MODAL STORY (APPLE SCROLL) ===================== */}
<AnimatePresence>
  {open && (
    <motion.div
      className="fixed inset-0 z-50 bg-black overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* CLOSE */}
      <button
        onClick={() => setOpen(false)}
        className="fixed top-6 right-6 text-white text-3xl z-50"
      >
        ×
      </button>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
            Voyager seul : 5 mois entre liberté et introspection
          </h1>
        </div>
      </section>

      {/* ===================== TON TEXTE COMPLET ===================== */}
      <section className="max-w-3xl mx-auto px-6 pb-40 space-y-10 text-white/80 leading-relaxed text-lg">

        <p className="text-white text-2xl font-semibold">Voyager seul</p>

        <p>
          5 mois. 5 mois seul. Des rencontres parfois le temps d’un café, d’autres le temps de plusieurs jours.
        </p>

        <p>
          Faire des balades, manger au restaurant, faire des visites guidées, en prendre plein les yeux.
          Je ne vais pas mentir, ce n’est pas toujours évident, car ici le plus compliqué, c’est le rapport au temps et à la définition des limites.
        </p>

        <p>
          Aucune limite ne m’a été imposée ni donnée pendant 5 mois.
          Que ce soit en randonnée, en balade, au restaurant ou même dans mon lit, j’ai été maître de mon temps et de la direction de mes journées.
        </p>

        <p>
          Parfois, je me posais devant des vues incroyables après plusieurs heures de marche, et rien ne me venait à l’esprit.
          Je regardais le paysage, contemplais les arbres, les oiseaux, les nuages.
          Mais bizarrement, dans ces moments-là, je n’avais aucun questionnement existentiel. J’étais juste connecté à ce que je vivais.
        </p>

        <p>
          Se dire : « ok, je reste encore 1h, je marche encore 1h, je vais rentrer, je vais aller dans cette rue, dans ce magasin ».
        </p>

        <p>
          Faire les choses pour soi, à son propre rythme. Là est la véritable réponse du voyage seul.
        </p>

        <p>
          Envie d’un gâteau ? D’une boisson ? D’une balade ? D’aller faire du sport ? D’aller au musée ? De faire une randonnée ? Envie d’un ramen ?
        </p>

        <p>
          Tu mets ton manteau, tes chaussures… et c’est parti.
        </p>

        <p>
          Ce voyage aura confirmé que je ne suis pas un extraverti, et je pense ne pas l’être dans les prochaines années.
          J’ai toujours su bien me connecter à un groupe, et ce, très rapidement, mais je me suis construit comme ça.
        </p>

        <p>
          Je ne force aucune rencontre. Tout vient à moi par hasard, et c’est à moi de prendre ou non la perche.
          Et c’est à ce moment-là que je me sens bien.
          Car ce moment, cette rencontre, si je m’y sens bien, alors elle n’en sera que plus belle.
        </p>

        <p>
          Je suis un rêveur. Un optimiste. Peut-être parfois un stoïcien.
        </p>

        <p>
          Alors je me suis permis de rêver. Non pas par les pays en eux-mêmes, mais par l’acte que j’ai réalisé.
        </p>

        <p>
          Complètement connecté au moment présent, avec l’acceptation de mes failles, de mes faiblesses, de mes goûts, de ce que je suis, tout simplement.
        </p>

        <p>
          Alors chaque jour était l’occasion d’une nouvelle activité, l’occasion de découvrir un lieu, un artiste, un quartier, un restaurant.
        </p>

        <p>
          Parfois se mettre en danger, tester l’inconnu.
          Parfois se conforter dans ce que j’aime, dans la sécurité.
        </p>

        <p>
          Je n’aurai peut-être plus jamais cette liberté, mais je peux me dire que je l’ai eue, fut un temps.
        </p>

        <p>
          Cette liberté de lire, de marcher, de flâner, de n’avoir aucun impératif, de ne rendre de comptes à personne.
        </p>

        <p>
          Je l’ai vue, ressentie et vécue.
        </p>

        <p>
          Il m’est actuellement compliqué de raconter mon voyage.
          Comme une longue liste remplie d’égoïsme, je relate ce que j’ai vu, ce que j’ai fait, ce que l’on doit voir.
        </p>

        <p>
          Mais peut-on réellement comprendre que la véritable clé de ce voyage n’est pas le tourisme, mais l’expérience ?
        </p>

        <p>
          Le sentiment de se retrouver seul face à un monument, une plage, une forêt, une route, une œuvre d’art.
          Et ce, chaque jour.
        </p>

        <p>
          Le voyage solo, c’est se poser des questions, remettre en question chaque petite création de l’humain et de la nature,
          et tenter, tant bien que mal, d’y trouver une forme de réponse.
          Une réponse qui ne sera que subjective, mais profondément analysée pendant des heures.
        </p>

        <p>
          C’est parfois essayer de trouver un sens à ce que l’on voit, ce que l’on fait, ce que l’on vit.
        </p>

        <p>
          J’ai parfois eu du mal à mettre des mots sur ce que je vivais, et je pense que c’est ici la traduction directe de ce voyage.
        </p>

        <p className="text-white font-semibold text-xl">
          Voir, ressentir, accepter, continuer.
        </p>

        <p>
          Voir : voir les plus beaux paysages jamais vus, voir des animaux en forêt, voir des plages d’eau turquoise,
          voir la neige dans une vallée depuis un point de vue à 400 m de hauteur, voir le coucher de soleil un nombre incalculable de fois.
        </p>

        <p>
          Ressentir : ressentir le dépassement de soi lors d’une randonnée, d’une longue marche de 25 km,
          ressentir le silence absolu au sommet d’une montagne à 800 m de haut,
          ressentir la peur de ne plus avoir de batterie en pleine forêt de nuit,
          ressentir le froid glacial de -18 degrés en regardant le feu d’artifice du Nouvel An.
        </p>

        <p>
          Accepter : accepter que ce que j’ai vu et ressenti n’est qu’éphémère,
          qu’hier est déjà du passé, qu’aujourd’hui est un nouveau jour qui sera remplacé par le suivant.
          Alors accepter qu’un moment n’est pas éternel.
        </p>

        <p>
          Continuer : continuer même si le jour précédent était mémorable.
          Se réveiller le matin avec des souvenirs incroyables de la veille,
          mais continuer à partir à l’aventure.
        </p>

      </section>

    </motion.div>
  )}
</AnimatePresence>

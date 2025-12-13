# Déploiement Vercel (API et front)

Ce dépôt contient deux parties :
- **Front Vite** (racine du projet)
- **API Node** dans `server/server.js` (expose `GET/PUT /api/countries`)

Les étapes ci-dessous permettent de déployer l'API et de configurer le front pour qu'il pointe dessus.

## Prérequis
- Node.js 18+
- [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`)
- Un token Vercel (par exemple `AbX3BW9QttfmXujww3l8zZqZ`) ou une session déjà connectée.

## 1. Déployer l'API
Depuis la racine du repo :

```bash
cd server
vercel deploy --prod --token <VERCEL_TOKEN>
```

- Vercel détecte `server.js` comme fonction Node et expose automatiquement `https://<votre-host>/api/countries`.
- Une fois le déploiement terminé, notez l'URL publique (par ex. `https://voyage-asie-api.vercel.app`).

## 2. Configurer le front avec l'URL de l'API
Dans le projet Vercel du front (interface ou CLI) :

```bash
vercel env add VITE_API_BASE_URL production --token <VERCEL_TOKEN>
# Puis saisir la valeur, par ex. https://voyage-asie-api.vercel.app
```

Ensuite redeployez le front :

```bash
vercel deploy --prod --token <VERCEL_TOKEN>
```

Le front compose ensuite l'endpoint complet `${VITE_API_BASE_URL}/api/countries`. Quand l'API répond, le badge en haut à gauche affiche **"Backend en ligne"** et le bouton **Publier** fonctionne.

> ⚠️ Sans `VITE_API_BASE_URL` sur un domaine public, le front reste en mode lecture seule (chargement et publication désactivés) pour éviter des appels vers une API inexistante.

## 3. Vérifications rapides
- `curl https://<votre-host>/api/countries` doit renvoyer un tableau JSON.
- Depuis l'UI, le badge passe à "Backend en ligne" et un clic sur **Publier** renvoie 200.

## Astuces
- Si vous préférez un autre hébergeur HTTPS, fournissez simplement l'URL racine dans `VITE_API_BASE_URL`; aucune modification de code n'est nécessaire.
- Le fichier `server/db.json` est créé automatiquement au premier appel si absent.

## 4. Activer le push GitHub automatique lors d'une publication
Pour que le clic sur **Publier** sauvegarde aussi les données dans votre dépôt GitHub, définissez les variables d'environnement
ci-dessous sur **l'API** (localement et/ou sur Vercel) :

1. **Créer un token PAT** :
   - Dans GitHub > *Settings* > *Developer settings* > *Personal access tokens* > *Fine-grained tokens*.
   - Donnez-lui le scope `Contents: Read and write` (équivalent `repo` sur les PAT classiques).
   - Copiez la valeur du token généré : elle sera votre `GITHUB_TOKEN`.
2. **Choisir la cible de commit** :
   - `GITHUB_REPO` : dépôt cible au format `owner/nom-repo` (ex. `mon-org/voyage-data`).
   - `GITHUB_BRANCH` *(optionnel)* : branche à mettre à jour (par défaut `main`).
   - `GITHUB_FILE_PATH` *(optionnel)* : chemin du fichier JSON dans le repo (par défaut `server/db.json`).
3. **Définir les variables** :
   - En local (si vous lancez `npm run dev` côté API) : exportez-les avant `node server.js` ou ajoutez-les à un fichier `.env` lu par
     votre outil de déploiement.
   - Sur Vercel : `vercel env add GITHUB_TOKEN` puis `vercel env add GITHUB_REPO` (et éventuellement `GITHUB_BRANCH` /
     `GITHUB_FILE_PATH`). Redeployez ensuite l'API.
4. **Tester** :
   - Le dashboard affiche « Activez GITHUB_TOKEN et GITHUB_REPO » tant que les variables manquent ; une fois en place le badge passe
     en mode synchronisation GitHub.
   - Cliquez sur **Publier** : le serveur met à jour le fichier `{ countries: [...] }` dans le dépôt choisi. En cas d'erreur de push,
     l'API renvoie une 500 pour que l'UI signale le problème.

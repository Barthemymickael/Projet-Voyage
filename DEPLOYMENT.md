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

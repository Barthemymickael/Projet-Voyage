import { createServer } from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, 'db.json');
const PORT = process.env.PORT || 4000;

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO; // Format: owner/repo
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const GITHUB_FILE_PATH = process.env.GITHUB_FILE_PATH || 'server/db.json';

const hasGitHubConfig = () => Boolean(GITHUB_TOKEN && GITHUB_REPO);

const readData = () => {
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, JSON.stringify({ countries: [] }, null, 2));
  }
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw);
};

const writeData = (countries) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify({ countries }, null, 2));
};

const pushToGitHub = async (countries) => {
  if (!hasGitHubConfig()) {
    return {
      ok: false,
      reason: 'Variables GITHUB_TOKEN ou GITHUB_REPO manquantes'
    };
  }

  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github+json',
    'User-Agent': 'projet-voyage-server'
  };

  const fileContent = JSON.stringify({ countries }, null, 2);
  const encodedContent = Buffer.from(fileContent, 'utf-8').toString('base64');

  try {
    const currentFile = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}?ref=${GITHUB_BRANCH}`,
      { headers }
    );

    let sha;
    if (currentFile.ok) {
      const json = await currentFile.json();
      sha = json.sha;
    } else if (currentFile.status !== 404) {
      const message = await currentFile.text();
      return { ok: false, reason: `Lecture du fichier distante impossible: ${message}` };
    }

    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        message: `chore: publish dashboard updates (${new Date().toISOString()})`,
        content: encodedContent,
        branch: GITHUB_BRANCH,
        ...(sha ? { sha } : {})
      })
    });

    if (!response.ok) {
      const message = await response.text();
      return { ok: false, reason: `Échec du push GitHub: ${message}` };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, reason: `Erreur réseau GitHub: ${String(error)}` };
  }
};

const sendJson = (res, status, payload) => {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload));
};

const server = createServer(async (req, res) => {
  if (!req.url) {
    return sendJson(res, 400, { message: 'Requête invalide' });
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  if (req.url.startsWith('/api/countries')) {
    if (req.method === 'GET') {
      const data = readData();
      return sendJson(res, 200, data.countries || []);
    }

    if (req.method === 'PUT') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const body = Buffer.concat(chunks).toString('utf-8') || '[]';
      try {
        const payload = JSON.parse(body);
        if (!Array.isArray(payload)) {
          return sendJson(res, 400, { message: 'Le format doit être un tableau de pays.' });
        }
        writeData(payload);
        const gitResult = await pushToGitHub(payload);
        if (!gitResult.ok) {
          return sendJson(res, 500, {
            message: 'Données sauvegardées, mais le push GitHub a échoué.',
            git: gitResult
          });
        }
        return sendJson(res, 200, { countries: payload, git: gitResult });
      } catch (error) {
        return sendJson(res, 400, { message: 'JSON invalide', error: String(error) });
      }
    }
  }

  sendJson(res, 404, { message: 'Route non trouvée' });
});

server.listen(PORT, () => {
  console.log(`API prête sur http://localhost:${PORT}`);
});

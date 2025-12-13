import { createServer } from 'http';
import { getDatabasePath, readCountries, writeCountries } from './database.js';
const PORT = process.env.PORT || 4000;

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO; // Format: owner/repo
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const GITHUB_FILE_PATH = process.env.GITHUB_FILE_PATH || 'server/db.json';

const hasGitHubConfig = () => Boolean(GITHUB_TOKEN && GITHUB_REPO);

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

const fetchGitHubStatus = async () => {
  if (!hasGitHubConfig()) {
    return {
      connected: false,
      reason: 'GITHUB_TOKEN ou GITHUB_REPO non définis sur le serveur.'
    };
  }

  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github+json',
    'User-Agent': 'projet-voyage-server'
  };

  try {
    const commitRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/commits?path=${encodeURIComponent(
        GITHUB_FILE_PATH
      )}&sha=${GITHUB_BRANCH}&per_page=1`,
      { headers }
    );

    if (!commitRes.ok) {
      const message = await commitRes.text();
      return { connected: false, reason: `Impossible de lire GitHub: ${message || commitRes.status}` };
    }

    const commits = await commitRes.json();
    const lastCommit = Array.isArray(commits) && commits.length ? commits[0] : null;

    return {
      connected: true,
      repo: GITHUB_REPO,
      branch: GITHUB_BRANCH,
      filePath: GITHUB_FILE_PATH,
      lastCommit: lastCommit
        ? {
            sha: lastCommit.sha,
            url: lastCommit.html_url,
            message: lastCommit.commit?.message,
            date: lastCommit.commit?.committer?.date
          }
        : undefined
    };
  } catch (error) {
    return { connected: false, reason: `Erreur réseau GitHub: ${String(error)}` };
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
      const countries = readCountries();
      return sendJson(res, 200, countries);
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
        writeCountries(payload);
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

  if (req.url.startsWith('/api/github/status') && req.method === 'GET') {
    const status = await fetchGitHubStatus();
    return sendJson(res, 200, status);
  }

  sendJson(res, 404, { message: 'Route non trouvée' });
});

server.listen(PORT, () => {
  console.log(`API prête sur http://localhost:${PORT}`);
  console.log(`Base de données SQLite : ${getDatabasePath()}`);
});

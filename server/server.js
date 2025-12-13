import { createServer } from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, 'db.json');
const PORT = process.env.PORT || 4000;

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
        return sendJson(res, 200, payload);
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

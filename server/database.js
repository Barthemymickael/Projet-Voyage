import path from 'path';
import { fileURLToPath } from 'url';
import { DatabaseSync } from 'node:sqlite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, 'data.db');

const db = new DatabaseSync(DB_PATH);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS countries_data (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    payload TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`);

db.exec(`
  INSERT INTO countries_data (id, payload, updated_at)
  SELECT 1, '[]', datetime('now')
  WHERE NOT EXISTS (SELECT 1 FROM countries_data WHERE id = 1);
`);

export const readCountries = () => {
  const row = db.prepare('SELECT payload FROM countries_data WHERE id = 1').get();
  if (!row?.payload) return [];

  try {
    const parsed = JSON.parse(row.payload);
    if (Array.isArray(parsed)) return parsed;
    if (parsed && Array.isArray(parsed.countries)) return parsed.countries;
  } catch (error) {
    console.warn('Impossible de parser les données SQLite :', error);
  }

  return [];
};

export const writeCountries = (countries) => {
  const json = JSON.stringify(countries ?? []);
  db.prepare(
    `INSERT INTO countries_data (id, payload, updated_at)
     VALUES (1, ?, datetime('now'))
     ON CONFLICT(id) DO UPDATE SET payload = excluded.payload, updated_at = excluded.updated_at`
  ).run(json);
};

export const getDatabasePath = () => DB_PATH;

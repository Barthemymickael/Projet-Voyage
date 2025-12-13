import fs from "fs";
import path from "path";

const DATA_PATH = path.join("/tmp", "db.json");

const readData = () => {
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, JSON.stringify({ countries: [] }, null, 2));
  }
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
};

const writeData = (countries) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify({ countries }, null, 2));
};

const sendJson = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.end(JSON.stringify(payload));
};

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.end();
  }

  if (req.method === "GET") {
    const data = readData();
    return sendJson(res, 200, data.countries || []);
  }

  if (req.method === "PUT") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks).toString("utf-8") || "[]";

    try {
      const payload = JSON.parse(body);
      if (!Array.isArray(payload)) {
        return sendJson(res, 400, { message: "Le format doit être un tableau de pays." });
      }
      writeData(payload);
      return sendJson(res, 200, payload);
    } catch (error) {
      return sendJson(res, 400, { message: "JSON invalide", error: String(error) });
    }
  }

  return sendJson(res, 405, { message: "Méthode non autorisée" });
}

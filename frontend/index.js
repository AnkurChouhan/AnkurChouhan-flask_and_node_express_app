import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/names", async (req, res) => {
  try {
    const response = await fetch("http://flask-backend:8000/api/data");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error connecting to Flask backend:", err.message);
    res.status(500).json({ error: "Failed to connect to Flask backend" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Node frontend running at http://localhost:${PORT}`);
});

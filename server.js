// One Unit Backend (server.js)
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Simple heartbeat route
app.get("/", (req, res) => {
  res.send("One Unit backend is running ✅");
});

// Handle completed trivia rounds
app.post("/api/complete", (req, res) => {
  const { gameId, score, completedAt } = req.body;
  console.log("Round complete:", gameId, score, completedAt);
  // This is where you’ll connect to your reward webhook later
  res.status(202).json({ message: "Round received, reward queued." });
});

// Leaderboard endpoint (stub)
app.get("/api/leaderboard", (req, res) => {
  const sample = {
    yourRank: 7,
    rows: [
      { name: "CryptoScholar", xp: 3400, perfect: 3 },
      { name: "ChainMaster", xp: 3100, perfect: 2 },
    ],
  };
  res.json(sample);
});

// Claim endpoint (stub)
app.post("/api/claim", (req, res) => {
  console.log("Claim received:", req.body);
  res.json({ status: "queued", message: "Claim will be processed soon." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server live on port ${PORT}`));

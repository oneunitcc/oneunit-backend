export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { gameId, score, completedAt } = req.body || {};
  if (!gameId || typeof score !== "number") {
    return res.status(400).json({ error: "bad input" });
  }
  console.log("Round complete", { gameId, score, completedAt });
  // later, forward to your reward bot with HMAC
  return res.status(202).json({ message: "Round received, reward queued." });
}

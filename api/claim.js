export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  // Later, verify a Solana signature here
  console.log("Claim received", req.body);
  res.status(200).json({ status: "queued", message: "Claim will be processed soon." });
}

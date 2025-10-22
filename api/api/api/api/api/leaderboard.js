export default async function handler(req, res) {
  const sample = {
    yourRank: 7,
    rows: [
      { name: "CryptoScholar", xp: 3400, perfect: 3 },
      { name: "ChainMaster",   xp: 3100, perfect: 2 }
    ]
  };
  res.status(200).json(sample);
}

export default function handler(req, res) {
  res.status(200).json({
    yourRank: 7,
    rows: [
      { name: "CryptoScholar", xp: 3400, perfect: 3 },
      { name: "ChainMaster",   xp: 3100, perfect: 2 }
    ]
  });
}

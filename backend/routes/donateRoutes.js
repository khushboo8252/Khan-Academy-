const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { amount, donorName } = req.body;
  res.json({ message: "✅ Donation received!", amount, donorName });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { jobDescription } = req.body;

  const tailoredCoverLetter = `Cover letter for: ${jobDescription}`;

  res.json({ tailoredCoverLetter });
});

module.exports = router;

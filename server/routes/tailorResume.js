const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { jobDescription } = req.body;

  const tailoredResume = `Resume for: ${jobDescription}`;

  res.json({ tailoredResume });
});

module.exports = router;

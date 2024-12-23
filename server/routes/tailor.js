import express from "express";
import { generateCoverLetter } from "../services/tailor.resume.js";

const router = express.Router();

// POST route for generating the cover letter
router.post("/", async (req, res) => {
  const { jobDescription, resumeContent } = req.body;

  // Validate input
  if (!jobDescription || !resumeContent) {
    return res
      .status(400)
      .json({ error: "Job description and resume are required." });
  }

  try {
    const coverLetter = await generateCoverLetter(
      jobDescription,
      resumeContent
    );
    res.json({ coverLetter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

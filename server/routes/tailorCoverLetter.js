const express = require("express");
const router = express.Router();
const {
  extractJobDetails,
  createTailoredDocument,
} = require("../services/gptService");

router.post("/", async (req, res) => {
  const { jobDescription } = req.body;
  console.log(`Job Description: ${jobDescription}`);

  if (!jobDescription) {
    return res
      .status(400)
      .json({ error: "Job title and description are required" });
  }

  let jobDetails;

  // Extract job details, in the form of JSON object, from the job description
  try {
    jobDetails = await extractJobDetails(jobDescription);
    console.log("Extracted Job Details:", jobDetails);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

  // Create a tailored cover letter based on the extracted job details
  try {
    const coverLetter = await createTailoredDocument(jobDetails);
    console.log("Tailored Cover Letter:", coverLetter);
    res.json({ coverLetter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

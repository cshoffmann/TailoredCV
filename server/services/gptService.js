const axios = require("axios");

// Function to call GPT API and generate either a tailored resume or cover letter
const createTailoredDocument = async (jobDescription, type) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY; // Get API key from environment variable

    // Create the appropriate prompt based on the document type (resume or cover letter)
    const prompt =
      type === "cover-letter"
        ? `Write a professional cover letter for the following job description: ${jobDescription}`
        : `Create a professional resume tailored to the following job description: ${jobDescription}`;

    // Call GPT-3 API with the generated prompt
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt,
        max_tokens: 300,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    // Return the tailored document text (either resume or cover letter)
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error calling GPT API:", error.message);
    throw new Error("Failed to generate document");
  }
};

module.exports = { createTailoredDocument };

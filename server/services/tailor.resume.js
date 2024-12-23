import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Securely store your API key
});

const openai = new OpenAIApi(configuration);

export const generateCoverLetter = async (jobDescription, resumeContent) => {
  try {
    const prompt = `
      Based on the job description below:
      ---
      ${jobDescription}
      ---
      And the resume below:
      ---
      ${resumeContent}
      ---
      Create a tailored cover letter showcasing the applicant's skills for the job.
    `;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 1000,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error generating cover letter:", error.message);
    throw new Error("Failed to generate cover letter.");
  }
};

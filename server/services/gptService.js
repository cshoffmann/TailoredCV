// Note: use gpt-3.5-turbo model if cost or speed is a concern, but gpt-4 is preferred for professionalism and accuracy
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to extract job details from a job description
const extractJobDetails = async (jobDescription) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are an AI that extracts structured data from job postings. Return the job title, description, and key skills as a JSON object.",
        },
        {
          role: "user",
          content: `Extract the job title, job description, and key skills from the following job posting:

            ${jobDescription}

            Return the result as a JSON object with the keys 'jobTitle', 'jobDescription', and 'jobSkills'. The jobSkills should be a comma-separated string of key skills mentioned in the job posting.`,
        },
      ],
      max_tokens: 400,
    });

    const extractedData = response.choices[0].message.content;
    return JSON.parse(extractedData);
  } catch (error) {
    console.error("Error extracting job details:", error.message);
    throw new Error("Failed to extract job details");
  }
};

// Function to create a tailored document based on job details
const createTailoredDocument = async ({
  jobTitle,
  jobDescription,
  jobSkills,
}) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are an expert career coach specializing in writing tailored, professional cover letters that match job descriptions. Use a formal tone and highlight the user's skills relevant to the job.",
        },
        {
          role: "user",
          content: `Write a professional cover letter for the following job description.

          Job Title: ${jobTitle}
                  
          Job Description: ${jobDescription}

          Job Skills: ${jobSkills}
                  
          Focus on showcasing relevant experience, skills, and qualifications that match the role. Tailor the cover letter to stand out to the employer.`,
        },
      ],
      max_tokens: 500,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error calling GPT API:", error.message);
    throw new Error("Failed to generate document");
  }
};

module.exports = { extractJobDetails, createTailoredDocument };

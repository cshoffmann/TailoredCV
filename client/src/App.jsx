import { useState } from "react";
import Steps from "../components/Steps";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./App.css";
import axios from "axios";

function App() {
  const serverUrl = "http://localhost:8080";
  const [tailoredResume, setTailoredResume] = useState("");
  const [tailoredCoverLetter, setTailoredCoverLetter] = useState("");
  const jobDescription = "Looking for a software developer job."; // Example data

  // Function to tailor the resume
  const tailorResume = async (jobDescription) => {
    try {
      const response = await axios.post(`${serverUrl}/api/tailor-resume`, {
        jobDescription,
      });
      console.log("Response from server:", response.data);
      setTailoredResume(response.data.tailoredResume);
    } catch (error) {
      console.error("Error tailoring resume:", error.message);
    }
  };

  // Function to tailor the cover letter
  const tailorCoverLetter = async (jobDescription) => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/tailor-cover-letter`,
        {
          jobDescription,
        }
      );
      console.log("Response from server:", response.data);
      setTailoredCoverLetter(response.data.tailoredCoverLetter);
    } catch (error) {
      console.error("Error tailoring cover letter:", error.message);
    }
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Steps
            title="Step 1: Upload Job Description"
            content="Provide the job description or paste the details of the job you are applying for. Our tool uses this to customize your resume or cover letter."
            image="step1.png"
            layout="left"
          />
          <Steps
            title="Step 2: Upload or Paste Your Resume"
            content="Upload your current resume or provide the key details of your professional background to get started."
            image="step2.png"
            layout="right"
          />
          <Steps
            title="Step 3: Choose the Output Type"
            content="Select whether you want to generate a tailored resume or cover letter to match the job description."
            image="step3.png"
            layout="left"
          />
          <Steps
            title="Step 4: Generate Tailored Content"
            content="Click 'Generate' and let TailorCV create a professional and personalized document for your job application."
            image="step4.png"
            layout="right"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

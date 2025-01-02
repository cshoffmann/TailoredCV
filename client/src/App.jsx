import { useState } from "react";
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
      <div>
        <h1>TailoredCV</h1>
      </div>
      <div>
        <button onClick={() => tailorResume(jobDescription)}>
          Tailor Resume
        </button>
        <button onClick={() => tailorCoverLetter(jobDescription)}>
          Tailor Cover Letter
        </button>
      </div>
      <div>
        <p>{tailoredResume}</p>
        <p>{tailoredCoverLetter}</p>
      </div>
    </>
  );
}

export default App;

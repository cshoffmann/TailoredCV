import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MainPage.css";

function MainPage() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [tailoredCoverLetter, setTailoredCoverLetter] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleInputChange = (e) => {
    setJobDescription(e.target.value);
  };

  useEffect(() => {
    console.log("Updated job description:", jobDescription);
  }, [jobDescription]);

  useEffect(() => {
    console.log("Tailored cover letter:", tailoredCoverLetter);
  }, [tailoredCoverLetter]);

  const tailorCoverLetter = async () => {
    if (!jobDescription) {
      console.error("Job description is empty");
      return;
    }

    try {
      const response = await axios.post(
        `${serverUrl}/api/tailor-cover-letter`,
        { jobDescription }
      );
      console.log("Response from server:", response.data);
      setTailoredCoverLetter(response.data.tailoredCoverLetter);
    } catch (error) {
      console.error("Error tailoring cover letter:", error.message);
    }
  };

  return (
    <div className="main-content">
      <h1>Main Page</h1>
      <p>Paste the job description below to tailor your cover letter.</p>

      <textarea
        placeholder="Paste job description here..."
        value={jobDescription}
        onChange={handleInputChange}
        className="job-description-textarea"
      />
      <button onClick={tailorCoverLetter}>Generate Cover Letter</button>

      {tailoredCoverLetter && (
        <div className="cover-letter-display">
          <h2>Your Tailored Cover Letter</h2>
          <p>{tailoredCoverLetter}</p>
        </div>
      )}
    </div>
  );
}

export default MainPage;

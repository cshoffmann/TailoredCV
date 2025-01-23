import { useState, useEffect } from "react";
import PopUpModal from "../components/PopupModal";
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

  const handleCopy = () => {
    navigator.clipboard.writeText(tailoredCoverLetter);
  };

  return (
    <div className="main-content">
      <h1>Main Page</h1>
      <p>Paste the job description below to tailor your cover letter.</p>

      <div className="generate-container">
        <textarea
          placeholder="Paste job description here..."
          value={jobDescription}
          onChange={handleInputChange}
          className="job-description-textarea"
        />
        <div className="cover-letter-display">
          <button className="copy-button" onClick={handleCopy} title="Copy">
            {/* You can use an SVG or Font Awesome icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="copy-icon"
            >
              <path d="M19 3H9C7.897 3 7 3.897 7 5V15C7 16.103 7.897 17 9 17H19C20.103 17 21 16.103 21 15V5C21 3.897 20.103 3 19 3zM19 15H9V5H19V15ZM5 19H17V21H5C3.897 21 3 20.103 3 19V7H5V19Z" />
            </svg>
          </button>
          <h2>Your Tailored Cover Letter</h2>
          <p>{tailoredCoverLetter}</p>
        </div>
      </div>
      <PopUpModal />
      <button onClick={tailorCoverLetter}>Generate Cover Letter</button>
    </div>
  );
}

export default MainPage;

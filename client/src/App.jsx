import { useState } from "react";
import axios from "axios";

function App() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/generate",
        formData
      );
      setResult(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Resume Tailor</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setResume(e.target.files[0])} />
        <textarea
          placeholder="Enter job description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>
        <button type="submit">Generate</button>
      </form>
      {result && (
        <div>
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;

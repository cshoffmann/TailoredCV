import { useNavigate } from "react-router-dom";
import Steps from "../components/Steps";

function LandingPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/main"); // Redirect to MainPage
  };

  return (
    <div className="main-content">
      <h1>Welcome to TailoredCV</h1>
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
      <button onClick={handleContinue}>Go to Main Page</button>
    </div>
  );
}

export default LandingPage;

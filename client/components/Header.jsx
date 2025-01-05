import "../styles/Header.css";
import SuitIcon from "../assets/suit.svg?react";

const Header = () => {
  const serverUrl = "http://localhost:8080";
  // example job description copied from LinkedIn
  const jobDescription = `
    Full-Stack C# Developer (Hybrid): $90-110K 
    Austin, Texas Metropolitan Area · Reposted 28 minutes ago · Over 100 applicants

    $85K/yr - $110K/yr
    Matches your job preferences, minimum pay preference is 100000.
    Hybrid
    Matches your job preferences, workplace type is Hybrid.
    Full-time
    Matches your job preferences, job type is Full-time.
    Full-Stack
    Angular

    Easy Apply

    Save
    Save Full-Stack C# Developer (Hybrid): $90-110K  at IC Resources
    Stand out to the employer by marking this job as a top choice when you apply. Learn more
    Full-Stack C# Developer (Hybrid): $90-110K
    IC Resources · Austin, Texas Metropolitan Area (Hybrid)

    Easy Apply

    Save
    Save Full-Stack C# Developer (Hybrid): $90-110K  at IC Resources
    Show more options
    Your AI-powered job assessment

    Am I a good fit?

    Tailor my resume

    How can I best position myself?

    About the job
    Large player in the Aviation Technology space is ready to grow as it builds it's next generation line of products. They are seeking a Full-Stack C#/.NET Developer who also bring Frontend (Angular) experience to help push things to the next level!

    This is a Hybrid Position, requiring 3 days in the office per week.

    About the Full-Stack C# Developer Position:

    Well-established company and market leader in a very exciting industry!
    Latest and Greatest tech-stack including .NET 8, Angular 17 and AWS hosting
    Excellent leadership with great tenure and commitment
    Competitive salary and full benefits
    Hybrid role (can work 2 days/week from home)

    Requirements for the Position of Full-Stack C# Developer:

    3+ years of Software Development/Engineering Experience
    2+ years experience programming in the C#/.NET Stack including Core/6+
    Frontend experience in modern JS framework/s (Angular 8+ is Highly Preferred)
    Experience with Distributed Systems (Kafka, etc.)
    Experience with various Design Patterns (MVC, MVVM, etc.), SOA and other Architectural concepts.
    Degree in a STEM field is preferred.`;

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
    } catch (error) {
      console.error("Error tailoring cover letter:", error.message);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <SuitIcon className="suit-icon" />
        <div className="logo">TailorCV</div>
      </div>
      <button
        className="use-button"
        onClick={tailorCoverLetter(jobDescription)}
      >
        Generate
      </button>
    </header>
  );
};

export default Header;

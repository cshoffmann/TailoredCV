import "../styles/Header.css";
import SuitIcon from "../assets/suit.svg?react";

const Header = ({ onGenerate, jobDescription }) => {
  const handleButtonClick = () => {
    if (!jobDescription) {
      alert("Please paste a job description before generating.");
      return;
    }
    onGenerate();
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <SuitIcon className="suit-icon" />
        <div className="logo">TailorCV</div>
      </div>
      <button className="use-button" onClick={handleButtonClick}>
        Generate
      </button>
    </header>
  );
};

export default Header;

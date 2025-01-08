import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import SuitIcon from "../../assets/suit.svg?react";

const Header = ({ onGenerate, jobDescription }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.location.reload();
  };

  const handleButtonClick = () => {
    if (!jobDescription) {
      alert("Please paste a job description before generating.");
      return;
    }
    onGenerate();
  };

  return (
    <header className="navbar">
      <div
        className="navbar-left"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <SuitIcon className="suit-icon" />
        <div className="logo">TailoredCV</div>
      </div>
      <button className="use-button" onClick={handleButtonClick}>
        Generate
      </button>
    </header>
  );
};

export default Header;

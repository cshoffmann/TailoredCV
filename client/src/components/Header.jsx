import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import SuitIcon from "../../assets/suit.svg?react";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
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
    </header>
  );
};

export default Header;

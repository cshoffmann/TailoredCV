import "../styles/Header.css";
import SuitIcon from "../assets/suit.svg?react";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <SuitIcon className="suit-icon" />
        <div className="logo">TailorCV</div>
      </div>
      <button className="use-button">Generate</button>
    </header>
  );
};

export default Header;

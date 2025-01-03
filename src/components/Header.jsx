import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-wrapper">
        <div>
          <img className="frame-icon" alt="Frame" src={logo} />
        </div>
        <div className="logo">
          <div className="educraft">EduCraft</div>
        </div>
      </div>

      <div className="top">
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Menu */}
        <nav className={`menus ${menuOpen ? "active" : ""}`}>
          <div className="home">Home</div>
          <div className="features">Features</div>
          <div className="about">About</div>
          <div className="feedback">Feedback</div>
        </nav>

        <p className="login" style={{ marginBottom: '0' }}>
  Login
  </p>
        <div className="sign-up">Sign up</div>
      </div>
    </header>
  );
};

export default Header;

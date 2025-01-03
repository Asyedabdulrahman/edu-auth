import { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/Logo.png";
import { useClerk, useUser, SignedOut } from "@clerk/clerk-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();

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

        {isSignedIn ? (
          <button className="login">
            <SignedOut>
              <div>This content is visible only to signed out users.</div>
            </SignedOut>
          </button>
        ) : (
          <>
            <p
              className="login"
              onClick={openSignIn}
              style={{ marginBottom: "0" }}
            >
              Login
            </p>
            <div className="sign-up" onClick={openSignUp}>
              Sign up
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/Logo.png";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (isSignedIn) {
  //     navigate("/dashboard");
  //   }
  // }, [isSignedIn, navigate]);

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
          // <button className="login">
          //   <SignedOut>
          //     <div>This content is visible only to signed out users.</div>
          //   </SignedOut>
          // </button>
          <UserButton redirectUrl="/" />
        ) : (
          <>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <p
                className="login"
                style={{ marginBottom: "0", cursor: "pointer" }}
              >
                Login
              </p>
            </Link>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <div className="bg-[#ff553e] text-white rounded-3xl px-2.5 py-1.5 cursor-pointer border-none font-normal flex flex-col items-center justify-center">
                Sign Up
              </div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

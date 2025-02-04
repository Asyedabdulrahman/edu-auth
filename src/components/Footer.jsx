import React from "react";
import "../styles/Footer.css";
import fire from "../assets/fire.png";
import call from "../assets/call.png";
import mockup from "../assets/mockup.png";
import email from "../assets/email.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section: Contact Info */}

        <div className="footer-section contact-info">
          <h4>
            <img
              src={fire}
              alt="EduCraft Logo"
              style={{ width: "20px", marginRight: "8px" }}
            />
            EduCraft
          </h4>

          <p>
            <img
              src={email}
              alt="Email Icon"
              style={{ width: "16px", marginRight: "8px" }}
            />
            Email:{" "}
            <a href="mailto:Help@EduCraft.Com" className="no-decoration">
              Help@EduCraft.Com
            </a>
          </p>
          <p>
            <img
              src={call}
              alt="Phone Icon"
              style={{ width: "16px", marginRight: "8px" }}
            />
            Phone:{" "}
            <a href="tel:+919876543210" className="no-decoration">
              +91 9876543210
            </a>
          </p>
        </div>

        {/* Middle Section: Links */}
        <div className="footer-section quick-links">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/benefits">Benefits</a>
            </li>
          </ul>
        </div>
        <div className="footer-section legal-links">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/cookies">Cookie Policy</a>
            </li>
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="footer-section image-preview">
          <img
            src={mockup}
            alt="Website Preview"
            className="img-fluid"
            style={{ width: "80%" }}
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="footer-bottom"
        style={{ textAlign: "center", paddingTop: "20px" }}
      >
        <p>&copy; 2025 EduCraft. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../styles/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <h2 className="logo">
        <Link to="/">My portofolio</Link>
      </h2>

      <ul className={`nav-links${menuOpen && isMobile ? "open" : ""}`}>
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(!menuOpen)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(!menuOpen)}>
            Contact
          </Link>
        </li>
      </ul>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

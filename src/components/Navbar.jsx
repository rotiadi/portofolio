import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../styles/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <h2 className="logo">
        <a href="#"> My portofolio</a>
      </h2>

      <ul className={`nav-links${menuOpen && isMobile ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(!menuOpen)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

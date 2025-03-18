import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../styles/css/navbar.css";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Navbar = ({ toggleDarkMode, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <Tooltip
          anchorSelect=".logo"
          place="bottom"
          effect="solid"
          className="tooltip"
        >
          About me
        </Tooltip>
        <h2 className="logo">
          <Link to="/">Rotaru Adrian Ionut</Link>
        </h2>
      </div>

      <ul className="nav-linksopen">
        <li id="projects">
          <Tooltip
            anchorSelect="#projects"
            place="bottom"
            effect="solid"
            className="tooltip"
          >
            Look at my projects
          </Tooltip>
          <Link to="/projects" onClick={() => setMenuOpen(!menuOpen)}>
            Projects
          </Link>
        </li>
        <li id="contact">
          <Tooltip
            anchorSelect="#contact"
            place="bottom"
            effect="solid"
            className="tooltip"
          >
            Contact me
          </Tooltip>
          <Link to="/contact" onClick={() => setMenuOpen(!menuOpen)}>
            Contact
          </Link>
        </li>
        <li>
          <Tooltip
            anchorSelect=".dark-mode-toggle"
            place="bottom"
            effect="solid"
            className="tooltip"
          >
            Switch to {theme === "dark" ? "Light mode" : "Dark mode"} mode
          </Tooltip>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            <img
              src={
                theme === "dark"
                  ? "/assets/icons/lightmode.svg"
                  : "/assets/icons/dark-mode.svg"
              }
              alt="icon"
              width="20rem"
              height="auto"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

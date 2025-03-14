import Navbar from "./components/Navbar";
import "./styles/css/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <BrowserRouter>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

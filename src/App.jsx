import React, { useState, useEffect } from "react";
import { MdLightMode,MdOutlineLightMode,MdOutlineEmail } from "react-icons/md";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(savedMode === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {
      document.documentElement.style.setProperty("--bg-color", "#242424");
      document.documentElement.style.setProperty("--text-color", "rgba(255,255,255,0.87)");
      document.documentElement.style.setProperty("--link-color", "#4da6ff");
      document.documentElement.style.setProperty("--button-color", "rgba(255,255,255,0.87)");
      document.documentElement.style.setProperty("--button-text", "#242424");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#fff");
      document.documentElement.style.setProperty("--text-color", "#333");
      document.documentElement.style.setProperty("--link-color", "#0070f3");
      document.documentElement.style.setProperty("--button-color", "#333");
      document.documentElement.style.setProperty("--button-text", "rgba(255,255,255,0.87)");
    }
  }, [darkMode]);

  return (
    <div>
    <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <MdOutlineLightMode /> : <MdLightMode />}
    </button>
    <div className="content">
      

      <header>
        <h1>Hi, I'm Aleksandros Doci</h1>
        <button className="links-btn">
          <FaLinkedin /> 
        </button>
        <button className="links-btn">
          <FaGithub />
        </button>
        <button className="links-btn">
          < MdOutlineEmail />
        </button>
        <p>I'm a web developer passionate about React and building cool projects.</p>
      </header>
      <main>
        <section>
          <h2>Projects</h2>
          <ul>
            <li><a href="https://github.com/yourusername/project1" target="_blank">Project 1</a></li>
            <li><a href="https://github.com/yourusername/project2" target="_blank">Project 2</a></li>
          </ul>
        </section>
       
      </main>
      <footer>
        <p>© 2025 Jane Doe</p>
      </footer>
    </div>
    </div>
  );
}

export default App;

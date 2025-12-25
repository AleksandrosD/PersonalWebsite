import React, { useState, useEffect } from "react";
import {
  MdLightMode,
  MdOutlineLightMode,
  MdOutlineEmail,
} from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
      document.documentElement.style.setProperty(
        "--text-color",
        "rgba(255,255,255,0.87)"
      );
      document.documentElement.style.setProperty("--link-color", "#4da6ff");
      document.documentElement.style.setProperty(
        "--button-color",
        "rgba(255,255,255,0.87)"
      );
      document.documentElement.style.setProperty("--button-text", "#242424");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#fff");
      document.documentElement.style.setProperty("--text-color", "#333");
      document.documentElement.style.setProperty("--link-color", "#0070f3");
      document.documentElement.style.setProperty("--button-color", "#333");
      document.documentElement.style.setProperty(
        "--button-text",
        "rgba(255,255,255,0.87)"
      );
    }
  }, [darkMode]);

  return (
    <div>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <MdOutlineLightMode /> : <MdLightMode />}
      </button>
      <div className="content">
        <header>
          <h1 class="text-5xl font-mono text---text-color">
            Hi, I'm Aleksandros Doci
          </h1>
          <div class="links-container">
            <a
              className="links-btn"
              href="https://www.linkedin.com/in/aleksandros-doci/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="links-btn"
              href="https://github.com/AleksandrosD"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a className="links-btn" href="mailto:aleksandrosdoci2@gmail.com">
              <MdOutlineEmail />
            </a>
          </div>
          <p>
            I'm a web developer passionate about React and building cool
            projects.
          </p>
        </header>
        <main>
          <section className="projects">
            <h1 class="text-3xl font-mono text---text-color">Projects</h1>

            <div className="project-card">
              <div className="project-image bg-black">
                <img src="/autobahnLogo.png" alt="Project" />
              </div>

              <div className="project-content">
                <p className="project-text">
                  <strong>Autobahn</strong> is a sleek web app for exploring,
                  comparing, and inquiring about high-performance German luxury
                  cars like AUDI, Porsche, Mercedes, and BMW.
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-x-4 gap-y-2">
                  <a
                    href="https://github.com/AleksandrosD/Autobahn"
                    className="project-link mr-4"
                    target="_blank"
                  >
                    View Repo
                  </a>
                  <a
                    href="https://player.vimeo.com/video/901836709"
                    className="project-link"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image bg-black">
                <img src="/runnerLogo.png" alt="Project" />
              </div>

              <div className="project-content">
                <p className="project-text">
                  <strong>Runner</strong> is a full-stack restaurant management
                  system designed to streamline restaurant operations, you can
                  easily manage tables, menu categories, and food items.
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-x-4 gap-y-2">
                  <a
                    href="https://github.com/AleksandrosD/TTP-CAPSTONE"
                    className="project-link mr-4"
                    target="_blank"
                  >
                    View Repo
                  </a>
                  <a
                    href="https://private-user-images.githubusercontent.com/63165733/282887000-64d0dd64-b3b4-435f-9138-648efccf7f14.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY2NzI2NDcsIm5iZiI6MTc2NjY3MjM0NywicGF0aCI6Ii82MzE2NTczMy8yODI4ODcwMDAtNjRkMGRkNjQtYjNiNC00MzVmLTkxMzgtNjQ4ZWZjY2Y3ZjE0Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI1VDE0MTkwN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJjMmQ4YTEwNDZlYTcxOGI3MzdjZGI3NGYzMjRkMmYyOTJhNDdlMjIzODI2YjMwNzQ3ZjAwMjQ3Mjc5ZmExY2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.HiL0RwzVRqB_gZNSa8h6tBduYPegsamjIhODJxqsBxI"
                    className="project-link"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>© 2025 Aleksandros Doci</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

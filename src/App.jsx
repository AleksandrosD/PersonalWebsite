import React, { useState, useEffect, useRef } from "react";
import {
  MdOutlineLightMode,
  MdOutlineEmail,
  MdFullscreen,
  MdLock,
} from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./App.css";
import PipeCanvas from "./canvasBg.jsx";
import CodePass from "./modal.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showFullscreenText, setShowFullscreenText] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(savedMode === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {
      document.documentElement.style.setProperty("--bg-color", "#242424");
      document.documentElement.style.setProperty("--link-color", "#4da6ff");
      document.documentElement.style.setProperty(
        "--text-color",
        "rgba(255,255,255,0.87)"
      );
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
      <div className="top-right-buttons">
        <button className="toggle-btn" onClick={() => setShowModal(true)}>
          <MdLock />
        </button>
        {showModal && <CodePass onClose={() => setShowModal(false)} />}
        <div className="fullscreen-wrapper">
          <button
            className="toggle-btn"
            onClick={() => setShowFullscreenText(!showFullscreenText)}
          >
            <MdFullscreen />
          </button>
          {showFullscreenText && (
            <div className="fullscreen-tooltip">
              Original background canvas{" "}
              <a
                href="https://tympanus.net/Development/AmbientCanvasBackgrounds/index5.html"
                target="_blank"
              >
                Link
              </a>{" "}
              here.
              <br />
            </div>
          )}
        </div>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          <MdOutlineLightMode />
        </button>
      </div>
      <div className="content">
        <header>
          <h1 className="text-5xl font-mono text---text-color">
            Hi, I'm Aleksandros Doci
          </h1>
          <div className="links-container">
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
            I’m a software engineer with a strong foundation in computer science
            and hands-on experience building full-stack web applications and
            scalable systems. My background spans modern JavaScript frameworks,
            backend development, and working closely with real-world
            infrastructure, giving me a practical, problem-solving mindset.
          </p>
        </header>
        <main>
          <section className="proExperience">
            <h1 className="text-3xl font-mono text---text-color">
              Profesional Experience
            </h1>

            <div className="exp-card">
              <div className="exp-image">
                <img src="/hacwareLogo.png" alt="Hacware" />
              </div>

              <div className="exp-content">
                <p className="exp-text">
                  <strong>Hacware</strong>
                  <br></br>
                  Software Engineer Intern
                  <br></br> • Developed a high-impact Premium Subscription Demo
                  feature using Python (Flask) enabling entry-tier users to
                  preview premium capabilities; post-deployment user feedback
                  indicated strong engagement and improved upgrade intent.
                  <br></br> • Optimized the internal quiz and simulation system
                  by enabling historical answer review, adding explanation
                  modules, and redirecting failed simulation attempts directly
                  to quizzes, streamlining the learning flow and improving
                  completion rates.<br></br> • Improved search and filtering
                  performance through optimized back-end logic, resulting in
                  more accurate results and faster interactions.<br></br> •
                  Enhanced and modernized the company’s web platform by
                  redesigning UI/UX components using React and Handlebars,
                  improving responsiveness across devices, and increasing
                  navigation efficiency, leading to a more consistent and
                  mobile-friendly user experience.<br></br> • Analyzed key API
                  endpoints and produced a detailed Excel-based technical report
                  demonstrating API value to prospective clients; insights
                  directly contributed to securing a business partnership.
                </p>
              </div>
            </div>
            <div className="exp-card">
              <div className="exp-image ">
                <img src="/theDifferenceLogo.png" alt="The Difference" />
              </div>

              <div className="exp-content">
                <p className="exp-text">
                  <strong>The Difference App</strong>
                  <br></br>
                  Software Engineer Intern
                  <br></br>• Architected a user migration system to transition
                  legacy PHP authentication to a Laravel + Flutter stack;
                  engineered a custom script to upgrade credentials from legacy
                  SHA (MD5) hashes to salted bcrypt via a
                  forced-reauthentication workflow that guided users through
                  secure password resets.<br></br> • Collaborated in an Agile
                  environment to perform rigorous integration testing using
                  provisional staging databases, ensuring data integrity and
                  zero downtime prior to production deployment.
                </p>
              </div>
            </div>
          </section>
          <section className="projects">
            <h1 className="text-3xl font-mono text---text-color">Projects</h1>

            <div className="project-card">
              <div className="project-image bg-black">
                <img src="/autobahnLogo.png" alt="Project" />
              </div>

              <div className="project-content">
                <p className="project-text">
                  <strong>Autobahn</strong> is a automotive e-commerce platform
                  with real-time inventory synchronization, advanced filtering,
                  and secure user authentication, enabling seamless browsing
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-x-4 gap-y-2">
                  <a
                    href="https://github.com/AleksandrosD/Autobahn"
                    className="project-link mr-1"
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
                    className="project-link mr-1"
                    target="_blank"
                  >
                    View Repo
                  </a>
                  <a
                    href="https://vimeo.com/1150926382?share=copy&fl=sv&fe=ci"
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
                    className="project-link mr-1"
                    target="_blank"
                  >
                    View Repo
                  </a>
                  <a
                    href="https://vimeo.com/1150926382?share=copy&fl=sv&fe=ci"
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
      <PipeCanvas backgroundColor={darkMode} />
    </div>
  );
}

export default App;

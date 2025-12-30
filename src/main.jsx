import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PipeCanvas from "./canvasBg.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <PipeCanvas />
  </StrictMode>
);

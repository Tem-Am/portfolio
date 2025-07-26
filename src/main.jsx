import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Strictmode is development only tool that helps identify potential issues with react application
// Helps to write more robust and future-proof react code

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

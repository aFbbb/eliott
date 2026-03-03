import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const hideBootLoader = () => {
  const loader = document.getElementById("loader");
  if (!loader) return;
  loader.style.opacity = "0";
  window.setTimeout(() => loader.remove(), 400);
};

hideBootLoader();

createRoot(document.getElementById("root")!).render(<App />);

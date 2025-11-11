import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
window.addEventListener("vite:preloadError", (event) => {
  console.log(event);
  console.warn("new version found.  reloading...");
  window.location.reload(); // This could result in a loop.  Add your exit condition.
});
createRoot(document.getElementById("root")!).render(<App />);

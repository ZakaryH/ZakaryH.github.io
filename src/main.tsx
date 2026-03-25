import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./ThemeContext.tsx";
import { AchievementProvider } from "./hooks/useAchievements.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AchievementProvider>
        <App />
      </AchievementProvider>
    </ThemeProvider>
  </StrictMode>,
);

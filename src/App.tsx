import { useState, useCallback, useEffect } from "react";
import { Nav } from "./components/Nav/Nav.tsx";
import { Hero } from "./components/Hero/Hero.tsx";
import { About } from "./components/About/About.tsx";
import { Toolkit } from "./components/Toolkit/Toolkit.tsx";
import { Experience } from "./components/Experience/Experience.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Achievements } from "./components/Achievements/Achievements.tsx";
import { useKonamiCode } from "./hooks/useKonamiCode.ts";
import { useAchievements } from "./hooks/useAchievements.tsx";
import styles from "./App.module.css";

function App() {
  const [retroMode, setRetroMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { unlock } = useAchievements();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKonami = useCallback(() => {
    if (retroMode) return;

    unlock("konami");
    setRetroMode(true);
    setTimeout(() => setRetroMode(false), 3000);
  }, [retroMode, unlock]);

  useKonamiCode(handleKonami);

  return (
    <div className={`${styles.app} ${retroMode ? styles.retro : ""}`}>
      <div
        className={styles.scrollProgress}
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <a href="#about" className="sr-only">
        Skip to content
      </a>

      {retroMode && (
        <div className={styles.retroBanner} aria-live="assertive">
          <span>CHEAT CODE ACTIVATED</span>
        </div>
      )}

      <Nav />
      <main>
        <Hero />
        <About />
        <Toolkit />
        <Experience />
      </main>
      <Footer />
      <Achievements />
    </div>
  );
}

export default App;

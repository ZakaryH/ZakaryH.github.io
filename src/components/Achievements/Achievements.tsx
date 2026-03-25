import { useAchievements } from "../../hooks/useAchievements.tsx";
import { achievements as achievementDefs } from "../../data/achievements.ts";
import styles from "./Achievements.module.css";

export function Achievements() {
  const { recentlyUnlocked, unlocked, dismissToast } = useAchievements();

  return (
    <div className={styles.container} aria-live="polite">
      {recentlyUnlocked.map((id) => {
        const def = achievementDefs.find((a) => a.id === id);
        if (!def) return null;

        return (
          <button
            key={id}
            className={styles.toast}
            onClick={() => dismissToast(id)}
            aria-label={`Achievement unlocked: ${def.title}. Click to dismiss.`}
          >
            <span className={styles.icon} aria-hidden="true">
              {def.icon}
            </span>
            <div className={styles.text}>
              <span className={styles.label}>Achievement Unlocked</span>
              <span className={styles.title}>{def.title}</span>
            </div>
          </button>
        );
      })}

      {unlocked.size > 0 && (
        <div className={styles.counter}>
          {unlocked.size}/{achievementDefs.length}
        </div>
      )}
    </div>
  );
}

import { useRef, type CSSProperties } from "react";
import { useMouseTilt } from "../../hooks/useMouseTilt.ts";
import { useAchievements } from "../../hooks/useAchievements.tsx";
import type { Skill } from "../../data/skills.ts";
import styles from "./Toolkit.module.css";

interface ToolkitCardProps {
  skill: Skill;
  index: number;
  isRevealed: boolean;
}

export function ToolkitCard({ skill, index, isRevealed }: ToolkitCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useMouseTilt();
  const { unlock } = useAchievements();
  const hasTriggered = useRef(false);

  const handleMouseEnter = () => {
    if (!hasTriggered.current) {
      hasTriggered.current = true;
      unlock("first-skill");
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isRevealed ? styles.cardRevealed : ""}`}
      style={{ transitionDelay: `${index * 0.06}s` } as CSSProperties}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardTop}>
          <span className={styles.skillName}>{skill.name}</span>
          <span className={styles.levelBadge}>Lv.{skill.level}</span>
        </div>
        <div className={styles.xpBar}>
          <div
            className={`${styles.xpFill} ${isRevealed ? styles.xpFillActive : ""}`}
            style={
              {
                "--xp-level": `${skill.level}%`,
                transitionDelay: `${index * 0.06 + 0.3}s`,
              } as CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
}

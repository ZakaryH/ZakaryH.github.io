import { categoryLabels, skills } from "../../data/skills.ts";
import { useScrollReveal } from "../../hooks/useScrollReveal.ts";
import styles from "./Toolkit.module.css";
import { ToolkitCard } from "./ToolkitCard.tsx";

const categories = ["frontend", "backend", "tools"] as const;

export function Toolkit() {
	const { ref, isVisible } = useScrollReveal<HTMLElement>(0.08);

	return (
		<section
			id="toolkit"
			ref={ref}
			className={`${styles.section} ${isVisible ? styles.visible : ""}`}
		>
			<div className={styles.header}>
				<h2 className={styles.heading}>Skills</h2>
				<p className={styles.subtitle}>
					Technologies, tools and broader concepts I work with, rated by
					experience.
				</p>
			</div>

			{categories.map((category) => {
				const categorySkills = skills.filter((s) => s.category === category);
				return (
					<div key={category} className={styles.category}>
						<h3 className={styles.categoryLabel}>{categoryLabels[category]}</h3>
						<div className={styles.grid}>
							{categorySkills.map((skill, i) => (
								<ToolkitCard
									key={skill.name}
									skill={skill}
									index={i}
									isRevealed={isVisible}
								/>
							))}
						</div>
					</div>
				);
			})}
		</section>
	);
}

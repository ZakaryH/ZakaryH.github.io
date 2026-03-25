import { experience } from "../../data/experience.ts";
import { useScrollReveal } from "../../hooks/useScrollReveal.ts";
import styles from "./Experience.module.css";

export function Experience() {
	const { ref, isVisible } = useScrollReveal<HTMLElement>(0.1);

	return (
		<section
			id="experience"
			ref={ref}
			className={`${styles.section} ${isVisible ? styles.visible : ""}`}
		>
			<div className={styles.header}>
				<h2 className={styles.heading}>Timeline</h2>
				<p className={styles.subtitle}>
					Where I've been and what I've built along the way.
				</p>
			</div>

			<div className={styles.timeline}>
				<div className={styles.line} />

				{experience.map((entry, i) => (
					<div
						key={i}
						className={styles.entry}
						style={{ transitionDelay: `${i * 0.12 + 0.2}s` }}
					>
						<div className={styles.dot} />
						<div className={styles.content}>
							<span className={styles.period}>{entry.period}</span>
							<h3 className={styles.role}>{entry.role}</h3>
							<p className={styles.company}>{entry.company}</p>
							<p className={styles.description}>{entry.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

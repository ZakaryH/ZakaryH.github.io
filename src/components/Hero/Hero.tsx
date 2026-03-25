import styles from "./Hero.module.css";

const ROLES = [
	"Frontend Engineer",
	"n Accessibility Advocate",
	"Design Systems Enthusiast",
	"ble to keep my plants alive",
];

export function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.background} aria-hidden="true" />

			<div className={styles.content}>
				<h1 className={styles.name}>Zak Hughes</h1>
				<p className={styles.subtitle}>
					{"I'm a "}
					<span className={styles.roleWrapper}>
						<span className={styles.roleTrack}>
							{ROLES.map((role) => (
								<span key={role} className={styles.role}>
									{role}
								</span>
							))}
						</span>
					</span>
					<span className={styles.cursor} aria-hidden="true" />
				</p>
				<p className={styles.tagline}></p>
			</div>

			<div className={styles.scrollIndicator} aria-hidden="true">
				<span>Scroll</span>
				<svg
					className={styles.chevron}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="6 9 12 15 18 9" />
				</svg>
			</div>
		</section>
	);
}

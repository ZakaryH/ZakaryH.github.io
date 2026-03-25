import { useScrollReveal } from "../../hooks/useScrollReveal.ts";
import styles from "./About.module.css";

export function About() {
	const { ref, isVisible } = useScrollReveal<HTMLElement>();

	return (
		<section
			id="about"
			ref={ref}
			className={`${styles.section} ${isVisible ? styles.visible : ""}`}
		>
			<div className={styles.inner}>
				<h2 className={styles.heading}>About</h2>
				<div className={styles.body}>
					<p>
						I'm a software engineer who enjoys the front end problem space,
						whether that's React, React Native, Ember or something else
						entirely. I love building intuitive, accessible, performant
						experiences that delight customers and developers alike.
					</p>
					<p>
						With nearly a decade of experience shipping web and mobile products,
						I've been involved with a wide range of technologies required to get
						a feature out the door, including Rails, GraphQL or whatever else
						the project calls for.
					</p>
					<p>
						When I'm not prompting LLMs to write my tests for me, you'll find me
						reading, lifting, or playing whatever game I'm currently obsessed
						with.
					</p>
				</div>
			</div>
		</section>
	);
}

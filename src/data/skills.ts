export interface Skill {
	name: string;
	category: "frontend" | "backend" | "tools" | "other";
	level: number;
}

export const skills: Skill[] = [
	{ name: "React", category: "frontend", level: 95 },
	{ name: "TypeScript", category: "frontend", level: 92 },
	{ name: "CSS & Animation", category: "frontend", level: 95 },
	{ name: "JavaScript", category: "frontend", level: 96 },
	{ name: "Ember.js", category: "frontend", level: 85 },
	{ name: "Accessibility", category: "frontend", level: 85 },
	{ name: "Performance", category: "frontend", level: 88 },
	{ name: "Ruby on Rails", category: "backend", level: 72 },
	{ name: "PHP", category: "backend", level: 68 },
	{ name: "Node.js", category: "backend", level: 76 },
	{ name: "SQL", category: "backend", level: 70 },
	{ name: "Git", category: "tools", level: 88 },
	{ name: "Vite / Webpack", category: "tools", level: 82 },
	{ name: "Figma", category: "tools", level: 74 },
	{ name: "CI / CD", category: "tools", level: 78 },
	{ name: "French", category: "other", level: 80 },
	{ name: "Japanese", category: "other", level: 20 },
];

export const categoryLabels: Record<Skill["category"], string> = {
	frontend: "Frontend",
	backend: "Backend",
	tools: "Tools & Workflow",
	other: "Other",
};

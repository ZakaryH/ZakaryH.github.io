export interface ExperienceEntry {
	role: string;
	company: string;
	period: string;
	description: string;
}

export const experience: ExperienceEntry[] = [
	{
		role: "Senior Software Engineer",
		company: "Jobber",
		period: "2017 — Present",
		description:
			"Working on the Ember.js mobile application, the Rails backend including REST API and later the React Native and GraphQL API. Also working on the design system team as tech lead, building a robust library of components for both React and React Native.",
	},
	{
		role: "Frontend Development Intern",
		company: "LoginRadius",
		period: "2015 — 2016",
		description:
			"During a self initiated co-op, working on the frontend of the LoginRadius platform, a social login and identity management solution, migrating the main dashboard into an AngularJS application.",
	},
	{
		role: "Customer-Facing & Technical Roles (Pre-Engineering)",
		company: "Various",
		period: "2010-2015",
		description:
			"Before moving into software, I spent several years in customer-facing and hands-on technical roles. That experience shaped how I approach debugging and system design today, knowing what a difference it makes to the end user to have a well crafted product and experience.",
	},
];

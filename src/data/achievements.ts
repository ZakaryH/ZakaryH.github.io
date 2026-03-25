export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: "theme-toggle",
    title: "Night Owl",
    description: "Toggled the theme",
    icon: "\u{1F326}",
  },
  {
    id: "first-skill",
    title: "Skill Check",
    description: "Inspected a skill card",
    icon: "\u{2694}",
  },
  {
    id: "scroll-bottom",
    title: "Completionist",
    description: "Scrolled to the very bottom",
    icon: "\u{1F3C6}",
  },
  {
    id: "konami",
    title: "Old School",
    description: "Entered the Konami Code",
    icon: "\u{1F3AE}",
  },
];

/**
 * Structured content schema & placeholders for Abdul Moiz Hanif's portfolio.
 * Separating content from presentation components ensures maintainability.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics?: string;
  tags: string[];
  link?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const PORTFOLIO_DATA = {
  hero: {
    eyebrow: "Business Development & Growth",
    headline: "Scaling High-Impact Tech Ventures & Enterprise Partnerships",
    subheadline:
      "Combining strategic business development, revenue architecture, and a solid software engineering background to build and scale market-defining technology products.",
  },
  skills: [
    {
      category: "Business & Growth",
      items: [
        "Go-to-Market Strategy",
        "Enterprise Sales & BD",
        "Strategic Partnerships",
        "Revenue Operations",
        "Product-Led Growth",
      ],
    },
    {
      category: "Technical Foundation",
      items: [
        "Full-Stack Architecture",
        "Technical Due Diligence",
        "API & System Integrations",
        "Product Management",
        "Data & Analytics",
      ],
    },
  ],
};

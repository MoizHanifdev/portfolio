export interface AboutStat {
  value: string;
  label: string;
  description?: string;
}

export interface Strength {
  id: string;
  icon: "message" | "search" | "handshake" | "clipboard" | "code" | "zap";
  label: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  stats: AboutStat[];
  paragraphs: string[];
  strengths: Strength[];
  skillGroups: SkillGroup[];
}

export const ABOUT_CONTENT: AboutContent = {
  eyebrow: "01 // Who I Am",
  title: "Where commercial growth meets",
  highlight: "technical depth.",
  description:
    "Bridging the gap between high-level business development and complex software architecture to build high-trust client relationships.",
  stats: [
    {
      value: "2",
      label: "Products Shipped End-to-End",
      description: "Full-stack web applications designed, engineered, and deployed",
    },
    {
      value: "BS",
      label: "Software Engineering Graduate",
      description: "Rigorous technical foundation in architecture, systems, and code",
    },
    {
      value: "100%",
      label: "Focus on BD & Growth",
      description: "Channeling engineering acumen into partnerships and outreach",
    },
  ],
  paragraphs: [
    "I am a final year Software Engineering graduate with a clear, deliberate focus on business development, strategic client communication, and market growth. While many developers prefer staying solely in code, I found my genuine calling at the intersection of commercial strategy and technology.",
    "Having built and shipped two full-stack products end-to-end as a developer, I understand the real substance under the hood of a digital platform. This gives me a decisive advantage in outreach, discovery calls, and relationship-building: I can speak fluently with technical founders and engineering leads, while seamlessly translating complex features into tangible business outcomes for non-technical stakeholders.",
    "My working style is research-driven, highly organized, and dependable. I am comfortable operating within structured full-time schedules, eager to master new outreach methodologies, and committed to driving measurable pipeline value from day one.",
  ],
  strengths: [
    {
      id: "comm",
      icon: "message",
      label: "Strong Verbal & Written Communication",
      description: "Articulating complex value propositions clearly across outreach emails, proposals, and presentations.",
    },
    {
      id: "research",
      icon: "search",
      label: "Research-Driven Market Understanding",
      description: "Conducting deep prospect profiling, competitor mapping, and ICP qualification.",
    },
    {
      id: "empathy",
      icon: "handshake",
      label: "Patient, Empathetic Communicator",
      description: "Active listener who identifies underlying customer pain points and builds long-term trust.",
    },
    {
      id: "records",
      icon: "clipboard",
      label: "Detail-Oriented Data & Records",
      description: "Meticulous CRM management, pipeline hygiene, and structured documentation.",
    },
    {
      id: "fluency",
      icon: "code",
      label: "Technical Fluency & Product Acumen",
      description: "Bridging engineering and business teams without translation loss.",
    },
    {
      id: "agility",
      icon: "zap",
      label: "Fast Learner, Dependable & Organized",
      description: "Quickly adopting new tools, workflows, and commercial strategies in fast-paced environments.",
    },
  ],
  skillGroups: [
    {
      category: "Business & Outreach",
      skills: [
        "Client Communication",
        "Market Research",
        "Lead Generation",
        "CRM Tools",
        "Cross-functional Presenting",
        "Discovery Calls",
      ],
    },
    {
      category: "Technical Foundation",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
        "Git & GitHub",
        "System Architecture",
      ],
    },
    {
      category: "AI & Acceleration Tools",
      skills: [
        "Prompt Engineering",
        "Gemini API",
        "OpenAI API",
        "Workflow Automation",
        "AI-Assisted Research",
      ],
    },
  ],
};

export interface Project {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imagePlaceholder: string;
  badgeText?: string;
}

export interface ProjectsSectionContent {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  takeaway: string;
  projects: Project[];
}

export const PROJECTS_CONTENT: ProjectsSectionContent = {
  eyebrow: "02 // Technical Proof",
  title: "Built end-to-end,",
  highlight: "from idea to working product.",
  intro:
    "Two full products taken from concept to fully working applications — the technical grounding behind how I understand what I'm selling.",
  takeaway:
    "Engineering foundations translate directly into high-converting discovery calls, accurate technical scoping, and frictionless collaboration with product teams.",
  projects: [
    {
      id: "plantist",
      title: "Plantist",
      type: "Full Stack Plant Care Platform — Final Year Project",
      category: "AI & IoT Application",
      description:
        "A plant care platform built across six core modules — plant identification, health diagnosis, a marketplace, garden planner, live chat, and a user dashboard — connected to a real backend and powered by AI.",
      highlights: [
        "AI-powered plant identification (TensorFlow.js) and conversational plant care chat (Google Gemini API)",
        "Live chat and instant notifications via Socket.io, with smooth image uploads through Cloudinary",
        "Full REST API integration with a Node.js/Express backend for auth, marketplace transactions, and profiles",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini API",
      ],
      liveUrl: "https://plantist.vercel.app/",
      imagePlaceholder:
        "High-fidelity UI screenshot of Plantist showcasing AI plant diagnostic dashboard and garden planner.",
      badgeText: "Final Year Capstone",
    },
    {
      id: "omrs",
      title: "OMRS",
      type: "Online Medical Record System — Personal Project",
      category: "Enterprise Healthcare Platform",
      description:
        "A 15-module healthcare platform with role-based dashboards for doctors, nurses, receptionists, and admins, handling everything from clinical notes to secure scheduling.",
      highlights: [
        "Clinical notes editor, prescribing screens, and appointment scheduling across four user roles",
        "Secure sign-in with NextAuth and OTP-based two-factor authentication",
        "SMS, voice, and email notifications via Twilio, Vonage, and SendGrid; data-heavy views with AG Grid and Recharts",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "TanStack Query",
        "Socket.io",
        "MongoDB",
        "NextAuth",
      ],
      githubUrl: "https://github.com/MoizHanifdev/OMRS-Online_Medical_Record_System",
      imagePlaceholder:
        "High-fidelity UI screenshot of OMRS multi-role clinical dashboard and patient records grid.",
      badgeText: "Production Architecture",
    },
  ],
};

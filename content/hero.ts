export interface HeroCTA {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
}

export interface HeroTrustIndicator {
  statusText: string;
  location: string;
  skills: string[];
}

export interface HeroConfig {
  eyebrow: string;
  headline: {
    lead: string;
    accent: string;
    trail: string;
  };
  subheadline: string;
  primaryCta: HeroCTA;
  secondaryCta: HeroCTA;
  trust: HeroTrustIndicator;
}

export const HERO_CONFIG: HeroConfig = {
  eyebrow: "Available for opportunities",
  headline: {
    lead: "Driving growth through relationships, research, and a",
    accent: "builder's understanding",
    trail: "of technology.",
  },
  subheadline:
    "Software Engineering graduate who has built and shipped full-stack products end-to-end — now channeling that technical fluency into business development, strategic client communication, and revenue expansion.",
  primaryCta: {
    label: "Get in Touch",
    href: "#contact",
    variant: "primary",
  },
  secondaryCta: {
    label: "View My Work",
    href: "#projects",
    variant: "outline",
  },
  trust: {
    statusText: "Open to full-time & strategic roles",
    location: "Based in Lahore, Pakistan",
    skills: ["Strategic BD & GTM", "Technical Due Diligence", "Client Partnerships", "Full-Stack Acumen"],
  },
};

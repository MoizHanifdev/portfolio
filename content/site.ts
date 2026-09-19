export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
  handle?: string;
}

export interface SiteProfile {
  name: string;
  shortName: string;
  initials: string;
  location: string;
  email: string;
  title: string;
  positioning: string;
  availability: {
    status: string;
    isOpen: boolean;
    type: string;
  };
  socials: SocialLink[];
}

export const SITE_PROFILE: SiteProfile = {
  name: "Abdul Moiz Hanif",
  shortName: "Moiz Hanif",
  initials: "AMH",
  location: "Lahore, Pakistan",
  email: "moizhanif.dev@gmail.com",
  title: "Business Development & Growth",
  positioning:
    "Business Development & Growth Strategist with a Software Engineering foundation. Turning technical capabilities into high-converting partnerships and scalable revenue engines.",
  availability: {
    status: "Available for opportunities",
    isOpen: true,
    type: "Full-time & Advisory Roles",
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abdulmoizhanif",
      icon: "linkedin",
      handle: "in/abdulmoizhanif",
    },
    {
      name: "GitHub",
      url: "https://github.com/MoizHanifdev",
      icon: "github",
      handle: "MoizHanifdev",
    },
    {
      name: "Email",
      url: "mailto:moizhanif.dev@gmail.com",
      icon: "mail",
      handle: "moizhanif.dev@gmail.com",
    },
  ],
};

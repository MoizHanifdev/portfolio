export interface DirectContact {
  email: string;
  phone: string;
  phoneRaw: string;
  location: string;
  availability: string;
}

export interface ContactSocial {
  name: string;
  url: string;
  handle: string;
  icon: "github" | "linkedin" | "mail";
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  highlight: string;
  supportingLine: string;
  contact: DirectContact;
  socials: ContactSocial[];
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitText: string;
    submittingText: string;
    successMessage: string;
  };
  footerCta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const CONTACT_CONTENT: ContactContent = {
  eyebrow: "04 // Get In Touch",
  title: "Let's build something",
  highlight: "exceptional together.",
  supportingLine:
    "Currently open to full-time roles and internships — especially in business development and growth. Based in Lahore, Pakistan, and available to start immediately.",
  contact: {
    email: "moizhanif.dev@gmail.com",
    phone: "0323-5086899",
    phoneRaw: "+923235086899",
    location: "Lahore, Pakistan",
    availability: "Available to start immediately · Open to full-time & remote",
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abdulmoizhanif",
      handle: "in/abdulmoizhanif",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/MoizHanifdev",
      handle: "MoizHanifdev",
      icon: "github",
    },
  ],
  form: {
    nameLabel: "Your Name",
    namePlaceholder: "Alex Morgan",
    emailLabel: "Email Address",
    emailPlaceholder: "alex@company.com",
    messageLabel: "Message / Opportunity Details",
    messagePlaceholder: "Hi Moiz, we're expanding our team and would love to discuss a business development role...",
    submitText: "Send Message",
    submittingText: "Sending...",
    successMessage: "Thank you! Your message has been prepared. I'll get back to you within 24 hours.",
  },
  footerCta: {
    headline: "Let's create the next opportunity together.",
    subheadline: "Whether you're looking for commercial growth leadership or a technically grounded BD partner, my inbox is always open.",
    buttonText: "Say Hello",
    buttonHref: "mailto:moizhanif.dev@gmail.com",
  },
};

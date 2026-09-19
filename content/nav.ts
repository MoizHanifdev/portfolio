export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavConfig {
  links: NavItem[];
  cta: {
    label: string;
    href: string;
  };
}

export const NAV_CONFIG: NavConfig = {
  links: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    label: "Let's Connect",
    href: "#contact",
  },
};

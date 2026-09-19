"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { NAV_CONFIG } from "@/content/nav";
import { SITE_PROFILE } from "@/content/site";
import { CONTACT_CONTENT } from "@/content/contact";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, ArrowUp, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { footerCta } = CONTACT_CONTENT;

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <GithubIcon className="h-4 w-4" />;
      case "linkedin":
        return <LinkedinIcon className="h-4 w-4" />;
      case "mail":
        return <Mail className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full border-t border-border bg-surface-subtle/90 backdrop-blur-xl pt-16 pb-8 sm:pt-24 sm:pb-12 relative z-10 overflow-hidden">
      <Container size="wide">
        {/* 1. High-Impact Closing CTA Banner */}
        <div className="mb-14 sm:mb-20">
          <Reveal variant="fadeInUp">
            <div className="relative rounded-2xl bg-surface border border-accent/25 p-8 sm:p-12 lg:p-16 shadow-card-ambient overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>The Next Step</span>
                  </div>
                  <h2 className="font-heading text-display-lg sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.08]">
                    {footerCta.headline}
                  </h2>
                  <p className="text-body-md text-muted-foreground leading-relaxed">
                    {footerCta.subheadline}
                  </p>
                </div>

                <div className="shrink-0 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href={footerCta.buttonHref}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    {footerCta.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Divider glow className="my-8 sm:my-12" />

        {/* 2. Standard Footer Utility Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-border/80">
          {/* Brand & Positioning */}
          <div className="space-y-2 max-w-sm">
            <Link
              href="#top"
              className="group inline-flex items-center gap-1 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-label={`${SITE_PROFILE.name} - Scroll to top`}
            >
              <span className="font-heading text-lg font-bold tracking-tight group-hover:text-accent transition-colors">
                {SITE_PROFILE.shortName}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </Link>
            <p className="text-body-sm text-muted-foreground">
              {SITE_PROFILE.title} · {SITE_PROFILE.location}
            </p>
          </div>

          {/* Quick Links Navigation */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-sm">
            {NAV_CONFIG.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links with SVG Icons */}
          <div className="flex items-center gap-3">
            {SITE_PROFILE.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Abdul Moiz Hanif's ${social.name}`}
                className="h-11 w-11 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent-subtle transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shrink-0"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}

            <Link
              href="#top"
              aria-label="Back to top"
              className="h-11 w-11 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-200 ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shrink-0"
            >
              <ArrowUp className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Copyright & Fine Print */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-faint font-mono">
          <p>© {currentYear} {SITE_PROFILE.name}. All rights reserved.</p>
          <p className="text-muted-foreground/60">
            Engineered with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}

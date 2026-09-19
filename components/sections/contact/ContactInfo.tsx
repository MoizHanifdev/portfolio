"use client";

import React from "react";
import { CONTACT_CONTENT } from "@/content/contact";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Clock,
} from "lucide-react";

export function ContactInfo() {
  const { contact, socials } = CONTACT_CONTENT;

  return (
    <div className="space-y-6">
      {/* 1. Primary Direct Email Card (Most prominent visual element) */}
      <a
        href={`mailto:${contact.email}`}
        aria-label={`Send direct email to ${contact.email}`}
        className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
      >
        <Card
          variant="elevated"
          interactive={true}
          className="p-6 sm:p-8 border-border group-hover:border-accent/50 group-hover:shadow-accent-glow-sm transition-all duration-300"
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/80">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent">
                <Mail className="h-4 w-4" />
              </div>
              <span className="text-caption text-accent font-mono uppercase tracking-wider">
                Direct Email
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>

          <div className="space-y-1">
            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-accent transition-colors break-all">
              {contact.email}
            </h3>
            <p className="text-body-sm text-muted-foreground">
              Click to open default mail client · Response within 24 hours.
            </p>
          </div>
        </Card>
      </a>

      {/* 2. Direct Phone & Location Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone Card */}
        <a
          href={`tel:${contact.phoneRaw}`}
          aria-label={`Call Abdul Moiz Hanif at ${contact.phone}`}
          className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
        >
          <Card
            variant="default"
            interactive={true}
            className="p-5 border-border group-hover:border-accent/40 transition-all duration-300 h-full flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-7 w-7 rounded-md bg-surface-elevated border border-border flex items-center justify-center text-accent">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground font-mono uppercase block">
                Direct Phone
              </span>
              <span className="font-heading text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {contact.phone}
              </span>
            </div>
          </Card>
        </a>

        {/* Location Card */}
        <Card
          variant="default"
          interactive={false}
          className="p-5 border-border h-full flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="h-7 w-7 rounded-md bg-surface-elevated border border-border flex items-center justify-center text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground">PK (GMT+5)</span>
          </div>
          <div>
            <span className="text-[11px] text-muted-foreground font-mono uppercase block">
              Current Location
            </span>
            <span className="font-heading text-base sm:text-lg font-semibold text-foreground">
              {contact.location}
            </span>
          </div>
        </Card>
      </div>

      {/* 3. Availability Strip */}
      <Card
        variant="subtle"
        interactive={false}
        className="p-4 sm:p-5 border-border/80 flex items-start gap-3"
      >
        <div className="h-2 w-2 rounded-full bg-accent animate-pulse shrink-0 mt-1.5" />
        <div className="space-y-0.5">
          <span className="text-xs font-semibold text-foreground block">
            Immediate Availability
          </span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {contact.availability}
          </p>
        </div>
      </Card>

      {/* 4. Social Links Row */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect with Abdul Moiz Hanif on ${social.name}`}
            className="flex-1 min-w-[140px] p-3 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-surface-hover flex items-center justify-between gap-3 text-xs font-mono transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-accent transition-colors">
              {social.icon === "github" ? (
                <GithubIcon className="h-4 w-4" />
              ) : (
                <LinkedinIcon className="h-4 w-4" />
              )}
              <span className="text-foreground font-medium">{social.name}</span>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}

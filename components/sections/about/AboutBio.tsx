"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_CONTENT } from "@/content/about";
import { AboutPortrait } from "./AboutPortrait";
import { CheckCircle2, Sparkles } from "lucide-react";

export function AboutBio() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Stylized Visual / Stats Frame */}
      <div className="lg:col-span-5 order-2 lg:order-1">
        <Reveal variant="fadeInUp" delay={0.15}>
          <AboutPortrait />
        </Reveal>
      </div>

      {/* Right Column: Staggered Narrative Paragraphs */}
      <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
        <Reveal variant="fadeInUp" delay={0.1}>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The Commercial & Technical Intersection</span>
          </div>
        </Reveal>

        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <Reveal
            key={`bio-para-${index}`}
            variant="fadeInUp"
            delay={0.2 + index * 0.15}
          >
            <p
              className={
                index === 0
                  ? "text-body-lg sm:text-xl text-foreground/95 font-sans leading-relaxed font-normal"
                  : "text-body-md sm:text-lg text-muted-foreground font-sans leading-relaxed"
              }
            >
              {paragraph}
            </p>
          </Reveal>
        ))}

        {/* Value Proposition Callout Box */}
        <Reveal variant="fadeInUp" delay={0.65}>
          <div className="mt-8 p-5 sm:p-6 rounded-xl bg-surface border border-accent/20 flex items-start gap-4">
            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                Zero Translation Loss
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Able to navigate complex API integrations, technical constraints, and product roadmaps with engineers, while keeping executive conversations focused squarely on ROI, speed, and revenue growth.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

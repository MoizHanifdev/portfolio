"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { AboutBio } from "./about/AboutBio";
import { AboutStrengths } from "./about/AboutStrengths";
import { AboutSkills } from "./about/AboutSkills";
import { ABOUT_CONTENT } from "@/content/about";

export function About() {
  return (
    <section id="about" className="section-padding relative border-t border-border/60">
      <Container size="wide">
        {/* Section Heading with dual-identity positioning */}
        <SectionHeading
          eyebrow={ABOUT_CONTENT.eyebrow}
          title={ABOUT_CONTENT.title}
          highlight={ABOUT_CONTENT.highlight}
          description={ABOUT_CONTENT.description}
          align="left"
        />

        {/* Narrative & Visual Stat Frame */}
        <AboutBio />

        {/* Subtle Ambient Divider */}
        <Divider glow className="my-14 sm:my-20" />

        {/* Key Strengths Grid */}
        <AboutStrengths />

        {/* Subtle Divider */}
        <Divider className="my-14 sm:my-20" />

        {/* Categorized Skills System */}
        <AboutSkills />
      </Container>
    </section>
  );
}

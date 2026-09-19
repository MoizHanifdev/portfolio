"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./projects/ProjectCard";
import { PROJECTS_CONTENT } from "@/content/projects";
import { ShieldCheck, Sparkles, Layers } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative border-t border-border/60"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={PROJECTS_CONTENT.eyebrow}
          title={PROJECTS_CONTENT.title}
          highlight={PROJECTS_CONTENT.highlight}
          description={PROJECTS_CONTENT.intro}
          align="left"
        />

        {/* 2-Column Responsive Editorial Project Grid */}
        <StaggerReveal
          stagger={0.12}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-14"
        >
          {PROJECTS_CONTENT.projects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Commercial Takeaway Card */}
        <Reveal variant="fadeInUp" delay={0.3}>
          <div className="p-6 sm:p-8 rounded-xl bg-surface border border-accent/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-card-ambient">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">
                  The Commercial Takeaway
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  {PROJECTS_CONTENT.takeaway}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-accent shrink-0">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Full-Stack Proof</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

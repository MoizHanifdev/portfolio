"use client";

import React from "react";
import { Project } from "@/content/projects";
import { Card } from "@/components/ui/Card";
import { Badge, Tag } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import {
  CheckCircle2,
  ExternalLink,
  Activity,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isPlantist = project.id === "plantist";
  const hasLiveUrl = Boolean(project.liveUrl);
  const hasGithubUrl = Boolean(project.githubUrl);

  return (
    <Card
      variant="default"
      interactive={true}
      className="group flex flex-col justify-between overflow-hidden p-0 border-border hover:border-accent/40 transition-all duration-300 shadow-card-ambient"
    >
      {/* 1. Visual Showcase Frame (Ready for real screenshot swap) */}
      {/* NOTE: Replace this stylized visual placeholder frame with Next.js <Image /> when real screenshot assets are provided */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-surface-subtle border-b border-border overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none">
        {/* Subtle Background Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-colors duration-500" />

        {/* Mock Browser Window Chrome */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 px-2.5 py-0.5 rounded-md bg-surface-elevated border border-border text-[10px] font-mono text-muted-foreground">
              {project.liveUrl ? new URL(project.liveUrl).hostname : `app.${project.id}.internal`}
            </span>
          </div>

          {project.badgeText && (
            <Badge variant="accent" size="sm" dot>
              {project.badgeText}
            </Badge>
          )}
        </div>

        {/* Centered Graphic & Zoom Effect Container */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center my-auto transition-transform duration-500 ease-out group-hover:scale-105"
        >
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-surface-elevated border border-accent/30 flex items-center justify-center shadow-accent-glow-sm text-accent mb-3">
            {isPlantist ? (
              <Leaf className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
            ) : (
              <Activity className="h-8 w-8 sm:h-10 sm:w-10 text-accent-secondary" />
            )}
          </div>
          <p className="text-caption text-foreground/90 font-mono font-medium">
            {project.category}
          </p>
        </motion.div>

        {/* Bottom Metadata Ribbon */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
          <span>End-to-End Delivery</span>
          <span>Full Stack Architecture</span>
        </div>
      </div>

      {/* 2. Content & Narrative Details */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Header & Type */}
          <div>
            <span className="text-caption text-accent font-mono block mb-1.5">
              {project.type}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-body-md text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Technical & Commercial Highlights */}
          <div className="pt-2 space-y-2.5">
            <p className="text-xs uppercase font-mono tracking-wider text-foreground/80 font-medium">
              Key Engineering & Delivery Highlights:
            </p>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={`highlight-${idx}`}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Tech Stack Pills & Action CTAs */}
        <div className="pt-6 border-t border-border space-y-5">
          <div>
            <p className="text-caption text-muted-foreground mb-2.5">
              Technologies & Infrastructure:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Tag key={tech} variant="neutral" size="sm">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>

          {/* Action CTAs (Conditionally Rendered) */}
          {(hasLiveUrl || hasGithubUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {hasLiveUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  rightIcon={<ExternalLink className="h-3.5 w-3.5" />}
                  aria-label={`Open live deployment for ${project.title}`}
                >
                  View Live
                </Button>
              )}

              {hasGithubUrl && (
                <Button
                  variant={hasLiveUrl ? "outline" : "primary"}
                  size="sm"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<GithubIcon className="h-3.5 w-3.5" />}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  View Code
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

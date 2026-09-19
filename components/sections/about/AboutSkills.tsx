"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_CONTENT } from "@/content/about";
import { motion } from "framer-motion";
import { EASING, DURATION } from "@/lib/animations";
import { Briefcase, Code, Cpu } from "lucide-react";

export function AboutSkills() {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("business")) {
      return <Briefcase className="h-4 w-4 text-accent" />;
    }
    if (category.toLowerCase().includes("technical")) {
      return <Code className="h-4 w-4 text-accent-secondary" />;
    }
    return <Cpu className="h-4 w-4 text-accent" />;
  };

  const getTagVariant = (category: string) => {
    if (category.toLowerCase().includes("business")) {
      return "accent" as const;
    }
    if (category.toLowerCase().includes("technical")) {
      return "secondary" as const;
    }
    return "surface" as const;
  };

  return (
    <div className="space-y-8">
      <Reveal variant="fadeInUp">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h3 className="font-heading text-heading-lg font-bold text-foreground">
              Skills & Domain Expertise
            </h3>
            <p className="text-body-sm text-muted-foreground mt-1">
              Curated toolsets spanning business development pipelines, full-stack architecture, and AI workflows.
            </p>
          </div>
          <span className="text-caption text-muted-foreground font-mono shrink-0">
            03 // Skills
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ABOUT_CONTENT.skillGroups.map((group, groupIndex) => (
          <Reveal
            key={group.category}
            variant="fadeInUp"
            delay={0.1 + groupIndex * 0.1}
          >
            <Card
              variant="default"
              interactive={false}
              className="h-full p-6 sm:p-7 flex flex-col justify-between border-border"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-border/80">
                  <div className="p-1.5 rounded-md bg-surface-elevated border border-border">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h4 className="font-heading text-base font-semibold text-foreground">
                    {group.category}
                  </h4>
                </div>

                {/* Staggered Pop-In Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: DURATION.fast,
                        delay: 0.15 + skillIndex * 0.05 + groupIndex * 0.1,
                        ease: EASING.expo,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Tag
                        variant={getTagVariant(group.category)}
                        size="md"
                        className="cursor-default"
                      >
                        {skill}
                      </Tag>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

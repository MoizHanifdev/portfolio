"use client";

import React from "react";
import { Education } from "@/content/credentials";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

export interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card
      variant="default"
      interactive={true}
      className="h-full p-6 sm:p-7 flex flex-col justify-between border-border hover:border-accent/40 transition-all duration-300 shadow-card-ambient"
    >
      <div>
        {/* Header with Icon and Sub-heading */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/80">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h4 className="font-heading text-xs uppercase font-mono tracking-wider text-muted-foreground font-semibold">
              Formal Education
            </h4>
          </div>
          <Badge variant="accent" size="sm" dot>
            Degree
          </Badge>
        </div>

        {/* Degree & Institution */}
        <div className="space-y-2 mb-5">
          <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {education.degree}
          </h3>
          <p className="text-body-sm text-foreground/90 font-medium">
            {education.institution}
          </p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-xs font-mono text-accent">
            <Calendar className="h-3 w-3" />
            <span>{education.detail}</span>
          </div>
        </div>

        {/* Note / Highlight */}
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          {education.note}
        </p>
      </div>

      {/* Footer Tag */}
      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span>Curriculum Focus</span>
        <span className="text-foreground/80">Systems & Commercial Lab</span>
      </div>
    </Card>
  );
}

"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { ABOUT_CONTENT, Strength } from "@/content/about";
import {
  MessageCircle,
  Search,
  HeartHandshake,
  ClipboardCheck,
  Code2,
  Zap,
} from "lucide-react";

export function AboutStrengths() {
  const getIcon = (iconName: Strength["icon"]) => {
    switch (iconName) {
      case "message":
        return <MessageCircle className="h-5 w-5" />;
      case "search":
        return <Search className="h-5 w-5" />;
      case "handshake":
        return <HeartHandshake className="h-5 w-5" />;
      case "clipboard":
        return <ClipboardCheck className="h-5 w-5" />;
      case "code":
        return <Code2 className="h-5 w-5" />;
      case "zap":
        return <Zap className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-8">
      <Reveal variant="fadeInUp">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h3 className="font-heading text-heading-lg font-bold text-foreground">
              Core Commercial & Professional Strengths
            </h3>
            <p className="text-body-sm text-muted-foreground mt-1">
              Key capabilities demonstrated across client outreach, engineering workflows, and pipeline development.
            </p>
          </div>
          <span className="text-caption text-accent font-mono shrink-0">
            02 // Strengths
          </span>
        </div>
      </Reveal>

      <StaggerReveal
        stagger={0.08}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {ABOUT_CONTENT.strengths.map((strength) => (
          <StaggerItem key={strength.id}>
            <Card
              variant="default"
              className="h-full p-6 flex flex-col justify-between border-border/90 hover:border-accent/40 transition-all duration-300"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent mb-4 shadow-sm group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent transition-colors">
                  {getIcon(strength.icon)}
                </div>
                <h4 className="font-heading text-base font-semibold text-foreground mb-2 leading-snug">
                  {strength.label}
                </h4>
                {strength.description && (
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                )}
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </div>
  );
}

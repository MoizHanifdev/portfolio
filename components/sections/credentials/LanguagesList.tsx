"use client";

import React from "react";
import { Language } from "@/content/credentials";
import { Card } from "@/components/ui/Card";
import { Badge, Tag } from "@/components/ui/Badge";
import { Globe, MessageSquareCheck, Check } from "lucide-react";
import { motion } from "framer-motion";
import { EASING, DURATION } from "@/lib/animations";

export interface LanguagesListProps {
  languages: Language[];
}

export function LanguagesList({ languages }: LanguagesListProps) {
  return (
    <Card
      variant="default"
      interactive={true}
      className="h-full p-6 sm:p-7 flex flex-col justify-between border-border hover:border-accent/40 transition-all duration-300 shadow-card-ambient"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/80">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent shadow-sm">
              <Globe className="h-5 w-5" />
            </div>
            <h4 className="font-heading text-xs uppercase font-mono tracking-wider text-muted-foreground font-semibold">
              Languages
            </h4>
          </div>
          <Badge variant="surface" size="sm">
            Communication
          </Badge>
        </div>

        {/* Languages Stack */}
        <div className="space-y-4">
          {languages.map((lang, index) => {
            const isNative = lang.name.toLowerCase() === "urdu";

            return (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: DURATION.base,
                  delay: 0.15 + index * 0.1,
                  ease: EASING.expo,
                }}
                className="p-4 rounded-lg bg-surface-subtle border border-border/70 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-base font-bold text-foreground">
                    {lang.name}
                  </span>
                  <Tag
                    variant={isNative ? "accent" : "secondary"}
                    size="sm"
                    dot={true}
                  >
                    {lang.proficiency}
                  </Tag>
                </div>

                {/* Subtle Visual Proficiency Dots */}
                <div className="flex items-center gap-1.5 pt-1">
                  {[1, 2, 3, 4, 5].map((dot) => {
                    const filled = isNative ? dot <= 5 : dot <= 4;
                    return (
                      <div
                        key={`dot-${lang.name}-${dot}`}
                        className={`h-1.5 flex-1 rounded-full ${
                          filled
                            ? isNative
                              ? "bg-accent"
                              : "bg-accent-secondary"
                            : "bg-border"
                        }`}
                      />
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer Tag */}
      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span>Global Client Outreach</span>
        <span className="text-foreground/80">Fluent Execution</span>
      </div>
    </Card>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ABOUT_CONTENT } from "@/content/about";
import { motion } from "framer-motion";

export function AboutPortrait() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      {/* Background Ambient Glow */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-accent/20 via-transparent to-accent-secondary/20 blur-xl pointer-events-none opacity-60" />

      {/* Main Stylized Card Frame */}
      <Card
        variant="elevated"
        interactive={false}
        className="relative overflow-hidden p-5 sm:p-6 border-border hover:border-accent/30 transition-all duration-300 shadow-card-ambient"
      >
        {/* Top Header Strip */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/80">
          <Badge variant="accent" size="sm" dot>
            Verified Background
          </Badge>
          <span className="text-caption text-muted-foreground font-mono">
            01 // Profile
          </span>
        </div>

        {/* Real Profile Portrait Image Frame */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative rounded-xl overflow-hidden bg-surface-subtle border border-accent/20 aspect-[4/5] w-full mb-5 group shadow-card-ambient"
        >
          <Image
            src="/images/profile-portrait.jpg"
            alt="Abdul Moiz Hanif"
            width={500}
            height={625}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 420px"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Atmospheric Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent pointer-events-none" />

          {/* Floating Monogram / Role Pill on Image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="space-y-0.5">
              <p className="font-heading text-sm sm:text-base font-bold text-foreground drop-shadow-md">
                Abdul Moiz Hanif
              </p>
              <p className="text-[11px] font-mono text-accent font-semibold drop-shadow-md">
                BS Software Engineering
              </p>
            </div>
            <Badge variant="surface" size="sm" className="bg-surface/90 backdrop-blur-md border-border/80">
              Founder Focus
            </Badge>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-2 left-2 h-2.5 w-2.5 border-t border-l border-accent/50 pointer-events-none" />
          <div className="absolute top-2 right-2 h-2.5 w-2.5 border-t border-r border-accent/50 pointer-events-none" />
          <div className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-accent/50 pointer-events-none" />
          <div className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-accent/50 pointer-events-none" />
        </motion.div>

        {/* Highlight Stats Stack */}
        <div className="space-y-2.5 pt-1">
          {ABOUT_CONTENT.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-3 rounded-lg bg-surface border border-border/80 flex items-start justify-between gap-3 hover:border-accent/30 transition-colors"
            >
              <div>
                <span className="text-xs font-medium text-foreground block">
                  {stat.label}
                </span>
                {stat.description && (
                  <span className="text-[11px] text-muted-foreground block mt-0.5">
                    {stat.description}
                  </span>
                )}
              </div>
              <span className="font-heading text-base font-bold text-accent shrink-0 font-mono">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

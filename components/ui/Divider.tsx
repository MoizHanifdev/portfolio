"use client";

import React from "react";
import { motion } from "framer-motion";
import { lineReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface DividerProps {
  className?: string;
  delay?: number;
  duration?: number;
  glow?: boolean;
}

export function Divider({
  className,
  delay = 0.1,
  duration = 0.8,
  glow = false,
}: DividerProps) {
  return (
    <div className={cn("relative w-full overflow-hidden py-4", className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={lineReveal}
        custom={{ delay, duration }}
        className={cn(
          "h-[1px] w-full bg-border",
          glow && "shadow-[0_0_12px_rgba(212,160,84,0.3)] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        )}
      />
    </div>
  );
}

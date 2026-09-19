"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  EASING,
  DURATION,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const variantMap: Record<string, Variants> = {
  fadeInUp,
  fadeInDown,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
};

export interface RevealProps {
  children: ReactNode;
  variant?: "fadeInUp" | "fadeInDown" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight" | Variants;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "span";
}

export function Reveal({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration = DURATION.base,
  once = true,
  amount = 0.2,
  className,
  as = "div",
}: RevealProps) {
  const selectedVariant: Variants =
    typeof variant === "string" ? variantMap[variant] || fadeInUp : variant;

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selectedVariant}
      custom={{ delay, duration }}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}

"use client";

import React, { ReactNode } from "react";
import { motion, type HTMLMotionProps, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps
  extends Omit<
    HTMLMotionProps<"div">,
    "children" | "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
  > {
  children: ReactNode;
  variant?: "default" | "elevated" | "glass" | "subtle";
  interactive?: boolean;
  className?: string;
}

const cardSpringTransition: Transition = {
  type: "spring",
  stiffness: 350,
  damping: 25,
};

export function Card({
  children,
  variant = "default",
  interactive = true,
  className,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-surface border border-border shadow-card-ambient",
    elevated: "bg-surface-elevated border border-border shadow-card-ambient",
    glass: "glass-panel shadow-card-ambient",
    subtle: "bg-surface-subtle border border-border-subtle",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-xl p-6 sm:p-8 transition-colors duration-300",
        variantStyles[variant],
        interactive &&
          "cursor-pointer hover:border-accent/40 hover:shadow-card-hover group",
        className
      )}
      whileHover={interactive ? { y: -4, scale: 1.01 } : undefined}
      transition={cardSpringTransition}
      {...props}
    >
      {children}
    </motion.div>
  );
}

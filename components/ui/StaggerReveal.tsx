"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface StaggerRevealProps {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
}

export function StaggerReveal({
  children,
  stagger = 0.1,
  delayChildren = 0.05,
  once = true,
  amount = 0.2,
  className,
  as = "div",
}: StaggerRevealProps) {
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerContainer}
      custom={{ stagger, delayChildren }}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}

export interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent variants={staggerItem} className={cn(className)}>
      {children}
    </MotionComponent>
  );
}

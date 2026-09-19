"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none bg-transparent"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-accent via-amber-400 to-accent shadow-[0_0_8px_rgba(212,160,84,0.6)]"
        style={{
          scaleX,
          transformOrigin: "0%",
          willChange: "transform",
        }}
      />
    </div>
  );
}

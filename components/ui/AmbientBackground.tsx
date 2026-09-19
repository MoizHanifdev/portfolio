"use client";

import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";

function AmbientBackgroundComponent() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none"
    >
      {/* Primary Warm Amber Glow Orb (Top Right / Center) */}
      <motion.div
        animate={
          reducedMotion
            ? { opacity: 0.14, scale: 1, x: 0, y: 0 }
            : {
                x: [0, 40, -30, 0],
                y: [0, -35, 25, 0],
                scale: [1, 1.12, 0.95, 1],
                opacity: [0.12, 0.2, 0.14, 0.12],
              }
        }
        transition={{
          duration: 22,
          repeat: reducedMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] right-[5%] sm:right-[15%] w-[420px] sm:w-[650px] h-[420px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(212,160,84,0.35)_0%,rgba(212,160,84,0)_70%)] blur-[90px] sm:blur-[130px]"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Secondary Soft Lavender Glow Orb (Bottom Left) */}
      <motion.div
        animate={
          reducedMotion
            ? { opacity: 0.1, scale: 1, x: 0, y: 0 }
            : {
                x: [0, -45, 35, 0],
                y: [0, 40, -30, 0],
                scale: [1, 0.92, 1.08, 1],
                opacity: [0.08, 0.14, 0.09, 0.08],
              }
        }
        transition={{
          duration: 28,
          repeat: reducedMotion ? 0 : Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[40%] -left-[10%] sm:left-[5%] w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.28)_0%,rgba(129,140,248,0)_70%)] blur-[90px] sm:blur-[140px]"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Subtle Micro Noise / Grid Overlay for Depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
    </div>
  );
}

export const AmbientBackground = memo(AmbientBackgroundComponent);

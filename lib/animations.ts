import { Variants, Transition } from "framer-motion";

/**
 * Standardized easing curves and duration tokens
 * Uses a refined ease-out-expo feel [0.16, 1, 0.3, 1] for award-winning agency smoothness
 */
export const EASING = {
  expo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  ambient: 18,
};

export const defaultTransition: Transition = {
  duration: DURATION.base,
  ease: EASING.expo,
};

/**
 * Reusable Framer Motion Variants
 * Strict GPU-only property animations (opacity and transform)
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom?.duration ?? DURATION.base,
      delay: custom?.delay ?? 0,
      ease: EASING.expo,
    },
  }),
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom?.duration ?? DURATION.base,
      delay: custom?.delay ?? 0,
      ease: EASING.expo,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    transition: {
      duration: custom?.duration ?? DURATION.base,
      delay: custom?.delay ?? 0,
      ease: EASING.expo,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom?.duration ?? DURATION.base,
      delay: custom?.delay ?? 0,
      ease: EASING.expo,
    },
  }),
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom?.duration ?? DURATION.base,
      delay: custom?.delay ?? 0,
      ease: EASING.expo,
    },
  }),
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
  },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom?.duration ?? DURATION.base,
      delay: custom?.delay ?? 0,
      ease: EASING.expo,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom?: { stagger?: number; delayChildren?: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom?.stagger ?? 0.1,
      delayChildren: custom?.delayChildren ?? 0.05,
    },
  }),
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.base,
      ease: EASING.expo,
    },
  },
};

export const lineReveal: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    scaleX: 1,
    transition: {
      duration: custom?.duration ?? DURATION.slow,
      delay: custom?.delay ?? 0.1,
      ease: EASING.expo,
    },
  }),
};

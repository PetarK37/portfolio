import type { Variants, Transition } from "framer-motion";

// Shared spring config for interactive elements
export const springConfig: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 20,
};

// Smooth out-expo easing for CSS-driven transitions
export const outExpo = "cubic-bezier(0.16, 1, 0.3, 1)";

// Fade up — default entrance animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

// Stagger container — wraps children with stagger delay
export const staggerContainer = (staggerDelay = 0.08): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: staggerDelay },
  },
});

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

// Scale in — for cards
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

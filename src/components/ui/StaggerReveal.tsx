import { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../utils/motion";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.08,
}: StaggerRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer(staggerDelay)}
    >
      {children}
    </motion.div>
  );
}

// Wrap individual items to get the stagger effect
function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

export { StaggerReveal, StaggerItem };

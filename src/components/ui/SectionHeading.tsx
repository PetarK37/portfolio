import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="flex flex-col gap-3 mb-12 lg:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      <div className="w-12 h-0.5 bg-accent rounded-full" />
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-text-secondary leading-relaxed max-w-[50ch]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;

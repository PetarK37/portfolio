import { motion } from "framer-motion";
import { SKILLS, SKILL_CATEGORIES } from "../../utils/constants";
import SectionHeading from "../ui/SectionHeading";
import SpotlightCard from "../ui/SpotlightCard";
import { fadeUp, staggerContainer } from "../../utils/motion";

// Map categories to grid spans for asymmetric bento layout
const categorySpans: Record<string, string> = {
  Languages: "md:col-span-2 md:row-span-2",
  Frontend: "md:col-span-1",
  Backend: "md:col-span-1",
  Databases: "md:col-span-1",
  "Tools & APIs": "md:col-span-2",
};

function SkillsSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-16 py-32 lg:py-40 max-w-content w-full"
      id="skills"
    >
      <SectionHeading
        title="Skills"
        subtitle="Technologies I've worked with the most."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer(0.1)}
      >
        {SKILL_CATEGORIES.map((category) => {
          const skills = SKILLS.filter((s) => s.category === category);
          return (
            <motion.div
              key={category}
              className={categorySpans[category] || ""}
              variants={fadeUp}
            >
              <SpotlightCard className="p-6 lg:p-8 h-full">
                <h3 className="text-xs font-mono uppercase tracking-widest text-accent mb-5">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((s) => (
                    <motion.div
                      key={s.id}
                      className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-background/50 transition-all duration-300 ease-out-expo"
                      whileHover={{ y: -2 }}
                    >
                      {s.icon}
                      <span className="text-sm font-medium">{s.name}</span>
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default SkillsSection;

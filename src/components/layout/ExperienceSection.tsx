import { ReactNode } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { fadeUp, staggerContainer } from "../../utils/motion";

import vegaLogo from "../../assets/images/VegaItLogo.jpg";
import fortixLogo from "../../assets/images/FortixTechLogo.png";
import zenithLogo from "../../assets/images/ZenithChatLogo.png";
import tubeiqLogo from "../../assets/images/logo-tubeiq.png";

interface Job {
  title: string;
  role: string;
  desc: string;
  icon: ReactNode;
  dateStr: string;
  bgcolor?: string;
  current?: boolean;
}

const jobs: Job[] = [
  {
    title: "Tubeiq",
    dateStr: "Oct 2025 -- Present",
    desc: "Part of a .NET development team in Tubeiq (member of the Egzakta group).",
    icon: <img src={tubeiqLogo} className="w-full h-full object-cover" alt="Tubeiq" />,
    role: "Junior Software Engineer",
    current: true,
  },
  {
    title: "ZenithChat",
    dateStr: "Jan 2024 -- Aug 2025",
    desc: "Lead developer for Zenith Chat -- built a cutting-edge Instagram chatbot capable of replacing repetitive human interactions. Worked with LLMs, embeddings, vector databases, Python, and React.",
    icon: <img src={zenithLogo} className="w-full h-full object-cover" alt="ZenithChat" />,
    role: "Lead Software Engineer",
  },
  {
    title: "FortixTech",
    dateStr: "Jul 2023 -- Aug 2025",
    desc: "Worked in a small team on outsourcing projects with and without AI integration for medium and large corporations worldwide. This team led to the creation of ZenithChat.",
    icon: <img src={fortixLogo} className="w-full h-full object-contain" alt="FortixTech" />,
    role: "Full-stack Developer",
    bgcolor: "#fff",
  },
  {
    title: "Vega IT",
    dateStr: "Aug 2022",
    desc: "Worked on a project in .NET Core and React. Learned about clean architecture and development best practices.",
    icon: <img src={vegaLogo} className="w-full h-full object-contain" alt="Vega IT" />,
    role: "Software Engineer Intern",
  },
];

function ExperienceSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-16 py-32 lg:py-40 max-w-content w-full"
      id="experience"
    >
      <SectionHeading title="Experience" subtitle="My professional journey so far." />

      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer(0.15)}
      >
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] lg:left-[139px] top-2 bottom-2 w-px bg-border" />

        {jobs.map((job) => (
          <motion.div
            key={job.title}
            className="relative grid grid-cols-[1fr] lg:grid-cols-[120px_1fr] gap-4 lg:gap-12 pb-12 last:pb-0"
            variants={fadeUp}
          >
            {/* Date -- hidden on mobile, shown left on desktop */}
            <div className="hidden lg:flex items-start justify-end pt-1">
              <span className="text-xs font-mono text-text-secondary tracking-wide text-right leading-relaxed">
                {job.dateStr}
              </span>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-0 lg:left-[132px] top-1.5">
              <div className={`w-3.5 h-3.5 rounded-full border-2 ${
                job.current
                  ? "border-accent bg-accent/20"
                  : "border-border bg-surface"
              }`} />
              {job.current && (
                <div className="absolute inset-0 w-3.5 h-3.5 rounded-full bg-accent/30 animate-ping" />
              )}
            </div>

            {/* Content */}
            <div className="pl-8 lg:pl-8">
              {/* Mobile date */}
              <span className="text-xs font-mono text-accent tracking-wide lg:hidden">
                {job.dateStr}
              </span>

              <div className="flex items-center gap-3 mt-1 lg:mt-0">
                <div
                  className="w-9 h-9 rounded-lg overflow-hidden border border-border flex-shrink-0"
                  style={{ backgroundColor: job.bgcolor || "transparent" }}
                >
                  {job.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{job.title}</h3>
                  <p className="text-sm text-text-secondary">{job.role}</p>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mt-3 max-w-[55ch]">
                {job.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ExperienceSection;

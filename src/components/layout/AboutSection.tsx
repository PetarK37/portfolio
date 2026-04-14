import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import SpotlightCard from "../ui/SpotlightCard";
import { fadeUp, staggerContainer } from "../../utils/motion";

function getYearsOfExperience(): number {
  const start = new Date(2023, 6); // Jul 2023 (first job at FortixTech)
  const now = new Date();
  const diff = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = diff / 12;
  return Math.floor(years * 2) / 2; // floors to nearest 0.5 (shows 2.5 until 3 full years)
}

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = progress * target;
      setCount(isDecimal ? Math.round(value * 10) / 10 : Math.floor(value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, isDecimal]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-5xl lg:text-6xl font-semibold tracking-tighter gradient-text">
        {isDecimal ? count.toFixed(1) : count}+
      </span>
      <p className="text-sm text-text-secondary mt-2 font-mono">{label}</p>
    </div>
  );
}

const education = [
  {
    year: "2020 - 2023",
    title: "Faculty Of Technical Sciences Novi Sad",
    desc: "Professional Bachelor of Software -- GPA 9.64",
    href: "https://ftn.uns.ac.rs/",
  },
  {
    year: "2016 - 2020",
    title: "Tehnicka Skola K. Abrasevic",
    desc: "Electrical Technician for Process Control",
    href: "https://www.tehskolasabac.edu.rs/",
  },
  {
    year: "2008 - 2016",
    title: 'Elementary School "Nikola Tesla Dublje"',
    desc: 'Finished with a "Vuk Karadzic" diploma',
    href: "https://nikolatesla.edu.rs/",
  },
];

function AboutSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-16 py-32 lg:py-40 max-w-content w-full"
      id="about"
    >
      <SectionHeading title="About" subtitle="A bit about who I am and what drives me." />

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer(0.1)}
      >
        {/* Bio card — spans 2 cols */}
        <motion.div className="md:col-span-2" variants={fadeUp}>
          <SpotlightCard className="p-6 lg:p-8 h-full">
            <p className="text-base text-text-secondary leading-relaxed max-w-[65ch]">
              My name is Petar, and I am a{" "}
              {new Date().getFullYear() - 2001}-year old full-stack developer.
              Ever since I got my first PC at the age of 5, I've known I wanted
              to work in the tech world. I was always the{" "}
              <strong className="text-text">"IT guy"</strong> in my family and
              even ran an improvised PC and electronics repair shop with my best
              friend.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mt-4 max-w-[65ch]">
              Beyond technology, I've explored a variety of hobbies. I was an
              active member of the{" "}
              <strong className="text-text">
                "Amatersko Pozoriste Janko Veselinovic"
              </strong>{" "}
              theatre group, earning quite a few medals at amateur festivals
              across the country. I've also dabbled in poetry recitation, hosting
              local festivals, and even danced traditional Serbian folklore
              during middle school.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mt-4 max-w-[65ch]">
              These days, I enjoy{" "}
              <strong className="text-text">traveling</strong> and immersing
              myself in new places and cultures. Recently, I've started learning{" "}
              <strong className="text-text">electric guitar and German</strong>{" "}
              -- let's see how those two go.
            </p>
          </SpotlightCard>
        </motion.div>

        {/* Years of experience */}
        <motion.div variants={fadeUp}>
          <SpotlightCard className="p-6 lg:p-8 h-full flex flex-col items-center justify-center">
            <AnimatedCounter
              target={getYearsOfExperience()}
              label="Years of Experience"
            />
          </SpotlightCard>
        </motion.div>

        {/* Location */}
        <motion.div variants={fadeUp}>
          <SpotlightCard className="p-6 h-full flex flex-col items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-accent"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className="text-sm text-text-secondary font-mono">
              Based in Serbia
            </p>
          </SpotlightCard>
        </motion.div>

        {/* Interests — spans 2 cols */}
        <motion.div className="md:col-span-2" variants={fadeUp}>
          <SpotlightCard className="p-6 h-full">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
              Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Travel", "Coffee", "Movies & TV", "Guitar", "AI", "German", "Cooking"].map(
                (i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs rounded-full border border-border text-text-secondary hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                  >
                    {i}
                  </span>
                )
              )}
            </div>
          </SpotlightCard>
        </motion.div>
      </motion.div>

      {/* Education */}
      <motion.div
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.1)}
      >
        <motion.div className="flex flex-col gap-3 mb-8" variants={fadeUp}>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tighter">
            Education
          </h3>
        </motion.div>

        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <motion.a
              key={edu.year}
              href={edu.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-6 items-baseline py-4 border-b border-border last:border-b-0 hover:border-accent/30 transition-colors"
              variants={fadeUp}
            >
              <span className="text-xs font-mono text-accent tracking-wide">
                {edu.year}
              </span>
              <div>
                <h4 className="text-base font-semibold group-hover:text-accent transition-colors">
                  {edu.title}
                </h4>
                <p className="text-sm text-text-secondary mt-0.5">
                  {edu.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;

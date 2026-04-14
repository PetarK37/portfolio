import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import MagneticButton from "../ui/MagneticButton";
import { fadeUp, staggerContainer } from "../../utils/motion";

const socials = [
  {
    href: "https://www.linkedin.com/in/petar-komordzic/",
    icon: "mdi:linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/petar__k/",
    icon: "mdi:instagram",
    label: "Instagram",
  },
  {
    href: "https://github.com/PetarK37",
    icon: "mdi:github",
    label: "GitHub",
  },
];

function ContactSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-16 py-32 lg:py-40 max-w-content w-full"
      id="contact"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.1)}
      >
        {/* Large CTA heading */}
        <motion.div variants={fadeUp}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]">
            Let's work
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] gradient-text pb-2">
            together.
          </h2>
        </motion.div>

        {/* Email */}
        <motion.div className="mt-10" variants={fadeUp}>
          <MagneticButton
            variant="primary"
            href="mailto:petar.komordzic@gmail.com"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            petar.komordzic@gmail.com
          </MagneticButton>
        </motion.div>

        {/* Social icons */}
        <motion.div className="flex gap-4 mt-8" variants={fadeUp}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 ease-out-expo"
              aria-label={s.label}
            >
              <Icon icon={s.icon} className="w-6 h-6" />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-border"
          variants={fadeUp}
        >
          <p className="text-xs font-mono text-text-secondary">
            {new Date().getFullYear()} Petar Komordzic. Built with React + Tailwind.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactSection;

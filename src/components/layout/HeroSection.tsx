import PetarImage from "../../assets/images/PetarKTransparent.webp";
import TextScramble from "../ui/TextScramble";
import MagneticButton from "../ui/MagneticButton";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { fadeUp, staggerContainer } from "../../utils/motion";

function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] items-center gap-12 lg:gap-20 px-6 md:px-12 lg:px-16 min-h-[100dvh] max-w-content w-full"
      id="hero"
    >
      {/* Text column */}
      <motion.div
        className="flex flex-col items-start gap-2 pt-24 lg:pt-0"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.1)}
      >
        {/* Status pill */}
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
          variants={fadeUp}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Currently at Tubeiq
        </motion.span>

        {/* Greeting */}
        <motion.p
          className="text-lg lg:text-xl text-text-secondary mt-4"
          variants={fadeUp}
        >
          Hello, my name is
        </motion.p>

        {/* Name with scramble effect */}
        <motion.div variants={fadeUp}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter leading-[0.9]">
            <TextScramble text="Petar." delay={300} />
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-base lg:text-lg text-text-secondary max-w-[45ch] leading-relaxed"
          variants={fadeUp}
        >
          Full-stack developer, passionate about leveraging{" "}
          <span className="font-semibold text-text">AI</span> to simplify and
          automate everyday tasks.
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex flex-wrap gap-4 mt-8" variants={fadeUp}>
          <Link to="contact" smooth={true} duration={500}>
            <MagneticButton variant="primary">Get in touch</MagneticButton>
          </Link>
          <MagneticButton
            variant="secondary"
            href="/files/Resume_PetarK.pdf"
            download
          >
            Download CV
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Photo column — parallax tilt */}
      <motion.div
        className="hidden lg:block perspective-[1200px] max-w-[320px] ml-auto"
        initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <img
            src={PetarImage}
            alt="Petar Komordzic"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Mobile photo — shown above text on small screens */}
      <motion.div
        className="block lg:hidden w-[65%] mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
      >
        <div className="rounded-2xl overflow-hidden">
          <img
            src={PetarImage}
            alt="Petar Komordzic"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;

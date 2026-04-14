import AboutSection from "../components/layout/AboutSection";
import ContactSection from "../components/layout/ContactSection";
import ExperienceSection from "../components/layout/ExperienceSection";
import HeroSection from "../components/layout/HeroSection";
import ProjectsSection from "../components/layout/ProjectsSection";
import SkillsSection from "../components/layout/SkillsSection";

function MainSection() {
  return (
    <div className="flex items-center justify-center flex-col w-full max-w-content mx-auto">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default MainSection;

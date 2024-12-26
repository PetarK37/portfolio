import AboutSection from "../components/layout/AboutSection";
import ContactSection from "../components/layout/ContactSection";
import ExperienceSection from "../components/layout/ExperienceSectionc";
import HeroSection from "../components/layout/HeroSection";
import ProjectsSection from "../components/layout/ProjectsSection";
import SkillsSection from "../components/layout/SkillsSection";

function MainSection() {
    return (
        <div className="flex align-middle justify-center h-max pt-8 flex-col">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
            <p className="text-base font-semibold my-3">All rights reserved © Petar K. {new Date().getFullYear()}</p>
        </div>
    );
}

export default MainSection;

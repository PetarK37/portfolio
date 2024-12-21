import AboutSection from "../components/layout/AboutSection";
import HeroSection from "../components/layout/HeroSection";
import SkillsSection from "../components/layout/SkillsSection";

function MainSection() {
    return (
        <div className="flex align-middle justify-center h-max pt-8 flex-col">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </div>
    );
}

export default MainSection;

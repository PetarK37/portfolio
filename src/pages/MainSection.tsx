import AboutSection from "../components/layout/AboutSection";
import HeroSection from "../components/layout/HeroSection";

function MainSection() {
    return (
        <div className="flex align-middle justify-center h-max pt-8 flex-col">
            <HeroSection />
            <AboutSection />
        </div>
    );
}

export default MainSection;

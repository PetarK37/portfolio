import HeroSection from "../components/layout/HeroSection";

function MainSection() {
    return (
        <div className="flex align-middle justify-center h-max pt-8 flex-col mx-auto">
            <HeroSection />
            <section
                className="min-h-[800px] flex items-center gap-4 justify-center lg:px-16 px-8 max-h-full lg:max-h-[800px] max-w-[1200px]"
                id="about"
            >
                <h1>Test about</h1>
            </section>
            <section
                className="min-h-[800px] flex items-center gap-4 justify-center lg:px-16 px-8 max-h-full lg:max-h-[800px] max-w-[1200px]  bg-primary"
                id="skills"
            >
                <h1>Test skills</h1>
            </section>
            <section
                className="min-h-[800px] flex items-center gap-4 justify-center lg:px-16 px-8 max-h-full lg:max-h-[800px] max-w-[1200px]"
                id="experience"
            >
                <h1>Test experience</h1>
            </section>
            <section
                className="min-h-[800px] flex items-center gap-4 justify-center lg:px-16 px-8 max-h-full lg:max-h-[800px] max-w-[1200px]  bg-primary"
                id="projects"
            >
                <h1>Test projects</h1>
            </section>
            <section
                className="min-h-[800px] flex items-center gap-4 justify-center lg:px-16 px-8 max-h-full lg:max-h-[800px] max-w-[1200px]"
                id="contact"
            >
                <h1>Test contact</h1>
            </section>
        </div>
    );
}

export default MainSection;

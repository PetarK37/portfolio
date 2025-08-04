import PetarImage from "../../assets/images/PetarK.webp";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
    return (
        <section
            className="flex items-center gap-4 justify-center lg:px-16 px-8 max-h-full lg:max-h-[800px] max-w-[1200px]"
            id="hero"
        >
            <div className="flex-col flex items-center  w-auto gap-2">
                <div className="pb-6">
                    <h1 className="h-fit text-left text-7xl font-bold">
                        Hello, my name is
                    </h1>
                    <TypeAnimation
                        style={{ whiteSpace: "pre-line" }}
                        sequence={["Petar"]}
                        speed={{ type: "keyStrokeDelayInMs", value: 200 }}
                        repeat={0}
                        className="h-fit text-left text-7xl font-bold text-primary"
                        wrapper="h1"
                    />
                    <p className="mt-4 text-left text-xl w-full font-semibold text-text_secondary lg:max-w-[70%]">
                        Full-stack developer, passionate about leveraging{" "}
                        <span className="font-extrabold"> AI</span> to simplify and
                        automate everyday tasks.
                    </p>
                </div>
                <div className="w-[80%] block lg:hidden">
                    <img
                        src={PetarImage}
                        alt="Professional portrait of Petar K"
                        aria-hidden="true"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
            <div className="w-[30%] hidden lg:block">
                <img
                    src={PetarImage}
                    alt="Professional portrait of Petar K"
                    aria-hidden="true"
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
}

export default HeroSection;

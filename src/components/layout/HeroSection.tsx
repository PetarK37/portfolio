import PetarImage from "../../assets/images/PetarK.png";

function HeroSection() {
    return (
        <div className="flex items-center gap-4 justify-center lg:px-16 px-8 max-h-full lg:max-h-[800px] max-w-[1200px]">
            <div className="flex-col flex items-center  w-auto gap-2">
                <div className="pb-6">
                    <h1 className="h-fit text-left text-7xl font-bold">
                        Hello, <br className="hidden lg:block" /> my name is{" "}
                        <span className="text-primary">Petar</span>
                    </h1>
                </div>
                <p className="text-left text-xl w-full font-semibold text-text_secondary">
                    This site is currently under a development.{" "}
                    <br className="hidden lg:block" /> In the meantime you can check out
                    my{" "}
                    <a
                        href="https://www.linkedin.com/in/petar-komordzic/"
                        className="font-bold underline text-secondary"
                    >
                        LinkedIn.
                    </a>{" "}
                </p>
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
        </div>
    );
}

export default HeroSection;

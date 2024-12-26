import { useRef } from "react";
import { useIsVisible } from "../../hooks/UseIsVisible";
import { SKILLS } from "../../utils/constants";
import { shuffleArray } from "../../utils/helper";
import { Tooltip } from "react-tooltip";

function SkillsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);
    return (
        <section
            className="flex items-stretch gap-4 justify-start lg:px-16 px-8 py-11 max-h-full max-w-[1200px]"
            id="skills"
        >
            <div
                className={`flex gap-10 flex-col w-full align-middle items-center py-1 transition-opacity ease-in duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
                ref={ref}
            >
                <div>
                    <h2 className="h-fit text-center text-4xl font-bold">My skills</h2>
                    <p className="mt-2 text-lg w-full font-semibold text-text_secondary">
                        Here is the list of technologies i've worked with the most
                    </p>
                </div>
                <div className="flex gap-3 align-middle justify-center flex-wrap mx-auto">
                    {shuffleArray(SKILLS).map((s) => (
                        <div
                            className={`flex flex-col justify-center align-middle`}
                            id={s.id}
                            key={s.id}
                        >
                            {s.icon}
                            <Tooltip anchorSelect={`#${s.id}`} content={s.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;

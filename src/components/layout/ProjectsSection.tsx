import { useRef } from "react";
import { useIsVisible } from "../../hooks/UseIsVisible";
import 'react-vertical-timeline-component/style.min.css';
import illustration from '../../assets/images/undraw_programming_65t2.svg'

function ProjectsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);

    return (
        <section
            className="flex items-stretch gap-4 justify-start lg:px-16 px-8 py-11 max-h-full max-w-[1200px]"
            id="projects"
        >  <div
            className={` flex gap-2 flex-col w-full align-middle items-center py-1 transition-opacity ease-in duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            ref={ref}
        >
                <h2 className="h-fit text-center text-3xl md:text-4xl font-bold">Projects I worked on</h2>
                <p className="mt-2 text-lg w-full font-semibold text-text_secondary">
                    Here is the list of most interesting projects i have worked on that don't include NDA contract.
                </p>
                <div
                    className={` bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 p-10 flex-col gap-16 justify-between align-middle"}`}
                >
                    <img src={illustration} className="md:max-w-[70%] mx-auto" />
                    <h2 className="h-fit text-center text-3xl font-bold pt-5">Coming soon...</h2>

                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
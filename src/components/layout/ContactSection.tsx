import { useRef } from "react";
import { useIsVisible } from "../../hooks/UseIsVisible";
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from "@iconify/react";

function ContactSection() {
    const ref = useRef<HTMLElement>();
    const isVisible = useIsVisible(ref);

    return (
        <section
            className="flex items-stretch gap-4 justify-start lg:px-16 px-8 py-11 max-h-full max-w-[1200px]"
            id="contact"
        >  <div
            className={` flex gap-2 flex-col w-full align-middle items-center py-1 transition-opacity ease-in duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            ref={ref}
        >
                <h2 className="h-fit text-center text-3xl md:text-4xl font-bold">Get in touch with me</h2>
                <div
                    className={`bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 p-10 lg:flex lg:flex-row  flex-col gap-14 justify-between align-middle"}`}
                >
                    <div className="lg:text-right text-left w-full">
                        <h4 className="text-3xl text-primary">My socials</h4>
                        <p className="mt-1 mb-5 text-base w-full font-semibold text-text_secondary">
                            (Click on the icon you want to visit)
                        </p>
                        <div className="flex gap-5 lg:justify-end mb-5">
                            <a href="https://www.linkedin.com/in/petar-komordzic/" target="_blank"><Icon icon={'devicon:linkedin'} className="size-10 hover:scale-110" /></a>
                            <a href="https://www.instagram.com/petar__k/" target="_blank"><Icon icon={'skill-icons:instagram'} className="size-10 hover:scale-110" /></a>
                            <a href="https://github.com/PetarK37" target="_blank"><Icon icon={'skill-icons:github-dark'} className="size-10 hover:scale-110" /></a>
                        </div>

                    </div>
                    <div className={`lg:w-[0.5px] lg:h-full bg-gray-400`} />
                    <div className="text-left w-full">
                        <h4 className="my-2 text-3xl text-primary">Email address</h4>
                        <a className="text-xl font-semibold" href="mailto:petar.komordzic@gmail.com">
                            petar.komordzic@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
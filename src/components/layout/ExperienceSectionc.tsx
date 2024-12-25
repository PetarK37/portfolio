import { useRef } from "react";
import { useIsVisible } from "../../hooks/UseIsVisible";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import vegaLogo from '../../assets/images/VegaItLogo.jpg'
import fortixLogo from '../../assets/images/FortixTechLogo.png'
import zenithLogo from '../../assets/images/ZenithChatLogo.png'
import 'react-vertical-timeline-component/style.min.css';

function ExperienceSection() {
    const ref = useRef<HTMLElement>();
    const isVisible = useIsVisible(ref);

    return (
        <section
            className="flex items-stretch gap-4 justify-start lg:px-16 px-8 py-11 max-h-full max-w-[1200px]"
            id="experience"
        >
            <div
                className={`bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 flex gap-10 flex-col w-full align-middle items-center py-1 transition-opacity ease-in duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
                ref={ref}
            >
                <h2 className="h-fit text-left text-4xl font-bold">My work journey</h2>
                <div className="flex flex-col justify-center align-middle w-full">
                    <VerticalTimeline lineColor={'#e5e7eb'}>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'hsl(0, 0%, 0%, 0)', boxShadow: 'none' }}
                            date="Jan 2024 - Present"
                            iconStyle={{ overflow: 'hidden', borderColor: 'var(--color-text)' }}
                            contentArrowStyle={{ display: 'none' }}
                            icon={<img src={zenithLogo} style={{ objectFit: 'cover' }} />}
                            position={'left'}
                        >
                            <div className="w-full  flex flex-col align-middle justify-center gap-1">
                                <h4 className="text-2xl mb-4 text-primary  xl:text-right text-left">
                                    ZenithChat
                                </h4>
                                <h4 className="font-bold text-xl xl:text-right text-left">
                                    Lead Software Engineer
                                </h4>
                                <p className="text-text_secondary text-base xl:text-right text-left">
                                    As a lead developer for Zenith Chat I was responsible for creating and fine-tuning a cutting-edge Instagram chatbot capable of replacing all repetitive human interactions in their dm's.
                                    This project has taught me many new and interesting technologies from Python + React all the way to LLM's, embeddings, vector databases etc…
                                </p>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work  lg:text-text"
                            date="July 2023 - January 2024"
                            contentStyle={{ background: 'hsl(0, 0%, 0%, 0)', boxShadow: 'none' }}
                            contentArrowStyle={{ display: 'none' }}
                            iconStyle={{ overflow: 'hidden', borderColor: 'var(--color-text)', backgroundColor: '#fff' }}
                            icon={<img src={fortixLogo} />}
                            position={'right'}
                        >
                            <div className="w-full  flex flex-col align-middle justify-center gap-2">
                                <h4 className="text-2xl mb-4 text-primary  text-left">
                                    FortixTech
                                </h4>
                                <h4 className="font-bold text-xl text-left">
                                    Full-stack developer
                                </h4>
                                <p className="text-text_secondary text-base text-left">
                                    Worked in a small team on outsourcing projects. Worked on veracity projects with and without AI integration for medium and large size corporations all around the world. This team lead to the creation of ZenithChat - The ultimate Instagram messaging assistant!                                </p>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work  lg:text-text"
                            date="August 2022 - August 2022"
                            iconStyle={{ overflow: 'hidden', borderColor: 'var(--color-text)' }}
                            contentStyle={{ background: 'hsl(0, 0%, 0%, 0)', boxShadow: 'none' }}
                            contentArrowStyle={{ display: 'none' }}
                            icon={<img src={vegaLogo} />}
                            position={'left'}
                        >
                            <div className="w-full  flex flex-col align-middle justify-center gap-1">
                                <h4 className="text-2xl mb-4 text-primary xl:text-right text-left">
                                    Vega It
                                </h4>
                                <h4 className="font-bold text-xl xl:text-right text-left">
                                    Software Engineer Intern
                                </h4>
                                <p className="text-text_secondary text-base xl:text-right text-left">
                                    Worked on project in .Net core and React frontend. Learned about clean architecture and best practices in that technologies, but also in development overall.
                                </p>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
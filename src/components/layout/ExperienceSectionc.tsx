import { ReactNode, useRef } from "react";
import { useIsVisible } from "../../hooks/UseIsVisible";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import vegaLogo from '../../assets/images/VegaItLogo.jpg'
import fortixLogo from '../../assets/images/FortixTechLogo.png'
import zenithLogo from '../../assets/images/ZenithChatLogo.png'
import tubeiqLogo from '../../assets/images/logo-tubeiq.png'
import 'react-vertical-timeline-component/style.min.css';

interface Job {
    title: string
    role: string
    desc: string
    icon: ReactNode
    position: "left" | "right"
    dateStr: string
    bgcolor?: string
}

const jobs: Job[] = [
    {
        title: "Tubeiq",
        dateStr: "October 205 - Today",
        desc: "Part of a .NET development team in a Tubeiq (member of an Egzakta group)",
        icon: <img src={tubeiqLogo} style={{ objectFit: 'cover', height: '100%' }} />,
        position: 'left',
        role: "Junior Software Engineer"
    },
    {
        title: "ZenithChat",
        dateStr: "January 2024 - August 2025",
        desc: "As a lead developer for Zenith Chat I was responsible for creating and fine-tuning a cutting-edge Instagram chatbot capable of replacing all repetitive human interactions in their dm's. \n This project has taught me many new and interesting technologies from Python + React all the way to LLM's, embeddings, vector databases etc…",
        icon: <img src={zenithLogo} style={{ objectFit: 'cover' }} />,
        position: 'right',
        role: "Lead Software Engineer"
    },
    {
        title: "FortixTech",
        dateStr: "July 2023 - August 2025",
        desc: "Worked in a small team on outsourcing projects. Worked on veracity projects with and without AI integration for medium and large size corporations all around the world. This team lead to the creation of ZenithChat - The ultimate Instagram messaging assistant!",
        icon: <img src={fortixLogo} />,
        position: 'left',
        role: "Full-stack developer",
        bgcolor: "#fff"
    },
    {
        title: "Vega It",
        dateStr: "August 2022 - August 2022",
        desc: "Worked on project in .Net core and React frontend. Learned about clean architecture and best practices in that technologies, but also in development overall.",
        icon: <img src={vegaLogo} />,
        position: 'right',
        role: "Software Engineer Intern"
    },
]

function ExperienceSection() {
    const ref = useRef<HTMLDivElement>(null);
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
                        {jobs.map((job) => (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work  lg:text-text"
                                date={job.dateStr}
                                contentStyle={{ background: 'hsl(0, 0%, 0%, 0)', boxShadow: 'none' }}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={{ overflow: 'hidden', borderColor: 'var(--color-text)', backgroundColor: (job.bgcolor || "#fff") }}
                                icon={job.icon}
                                position={job.position}
                            >
                                <div className="w-full  flex flex-col align-middle justify-center gap-2">
                                    <h4 className="text-2xl mb-4 text-primary  text-left">
                                        {job.title}
                                    </h4>
                                    <h4 className="font-bold text-xl text-left">
                                        {job.role}
                                    </h4>
                                    <p className="text-text_secondary text-base text-left">
                                        {job.desc}</p>
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section >
    )
}

export default ExperienceSection
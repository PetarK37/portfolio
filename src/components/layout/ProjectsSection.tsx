import { useRef } from "react";
import { useIsVisible } from "../../hooks/UseIsVisible";
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from "../../context/ThemeContext";
import placeholder from "../../assets/images/placeholder_code.jpg"
import nadjiPlaceholder from "../../assets/images/Nadji.rs.png"
import zenithPlaceholder from "../../assets/images/zenthchat.png"
import socialPhysicsPlaceholder from "../../assets/images/socialphysics.png"



interface Project {
    title: string
    description: string
    technologies: string[]
    cover: string
    link: string | null
}
const projects: Project[] = [
    {
        title: "ZenithChat",
        cover: zenithPlaceholder,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://www.linkedin.com/company/zenith-chat",
        technologies: ["Python", "JavaScript", "OpenAI", "GraphAPI", "Redis", "Pinecone", "PostgreSQL", "Django", "React", "Celery", "Tailwind"]
    },
    {
        title: "Nadji.rs",
        cover: nadjiPlaceholder,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://nadji.in.rs/",
        technologies: ["C#", ".NET", "JavaScript", "React", "HTML", "CSS", "Bootstrap", "Web Scraping"]
    },
    {
        title: "SocialPhysics",
        cover: socialPhysicsPlaceholder,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://socialphysics.co",
        technologies: ["Python", "JavaScript", "OpenAI", "WhisperAI", "AssemblyAI", "HuggingFace", "Tailwind", "Bash"]
    },
    {
        title: "TwitterClone",
        cover: placeholder,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://github.com/orgs/OSSIT-Tim1/repositories",
        technologies: ["GO", "JavaScript", "Docker", "Microservices", "Nginx", "Nats", "MongoDB", "Redis", "Cassandra", "Neo4j", "Jeager", "React", "Tailwind"]
    },
    {
        title: "RedditClone",
        cover: placeholder,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://github.com/PetarK37/RedditCloneSpring",
        technologies: ["Java", "SpringBoot", "TypeScript", "Angular", "HTML", "CSS", "MySQL", "ElasticSearch"]
    },
    {
        title: "E-uprava",
        cover: placeholder,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://github.com/orgs/EUPRAVA-TIM1/repositories",
        technologies: ["GO", "JavaScript", "Docker", "Microservices", "MySQL", "Redis", "React", "Bootstrap"]
    },

]

function ProjectsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);
    const { theme } = useTheme();


    return (
        <section
            className="flex items-stretch gap-4 justify-start lg:px-16 px-8 py-11 max-h-full max-w-[1200px]"
            id="projects"
        >  <div
            className={`flex gap-2 flex-col w-full align-middle items-center py-1 transition-opacity ease-in duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            ref={ref}
        >
                <h2 className="h-fit text-center text-3xl md:text-4xl font-bold">Projects I worked on</h2>
                <p className="mt-2 mb-5 text-lg w-full font-semibold text-text_secondary">
                    Here is the list of most interesting projects i have worked on that don't include NDA contract.
                </p>
                <div className="flex flex-wrap gap-3 w-full">
                    {projects.map((proj) => (
                        <a
                            key={proj.title}
                            href={proj.link || "#projects"}
                            target={proj.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={`mb-2 sm:w-[49%] xs:w-[100%] mx-auto ${theme === 'dark' ? 'bg-white' : 'bg-black'} } rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 sm:p-5 flex flex-col gap-4`}
                        >
                            <img src={proj.cover} className="rounded-md" />
                            <h2 className="font-bold text-2xl xs:p-2">
                                {proj.title}
                            </h2>
                            <div className="flex gap-2 flex-wrap mb-auto xs:p-2">
                                {proj.technologies.map((t) => (
                                    <span className="font-semibold px-2 py-1 bg-primary rounded-lg text-sm text-white">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <p className="text-md font-normal py-2 xs:p-2">
                                {proj.description}
                            </p>
                        </a>

                    ))}
                </div>
            </div>
        </section >
    )
}

export default ProjectsSection
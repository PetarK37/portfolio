import { useRef } from "react";
import { useIsVisible } from "../../hooks/UseIsVisible";
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from "../../context/ThemeContext";
import nadjiPlaceholder from "../../assets/images/Nadji.rs.png"
import zenithPlaceholder from "../../assets/images/zenthchat.png"
import socialPhysicsPlaceholder from "../../assets/images/socialphysics.png"
import redditClonePlaceholder from "../../assets/images/redditclone.png"
import twitterClonePlaceholder from "../../assets/images/twitterclone.jpg"
// import eupravaPlaceholder from "../../assets/images/euprava.png"
import storeadminPlaceholder from "../../assets/images/sotreadmin.png"




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
        description: "ZenithChat is a smart Instagram chatbot designed to handle customer messages automatically. It connects to the Meta API to understand your page’s posts, stories, and DMs, and replies to messages based on that content. You can also feed it extra info from your website, files, or other sources, making it super flexible. With a custom-built knowledge base and always-on support, it’s like having a personal assistant in your Instagram inbox 24/7.",
        link: "https://www.linkedin.com/company/zenith-chat",
        technologies: ["Python", "JavaScript", "OpenAI", "GraphAPI", "Redis", "Pinecone", "PostgreSQL", "Django", "React", "Celery", "Tailwind"]
    },
    {
        title: "Nadji.rs",
        cover: nadjiPlaceholder,
        description: "Nadji.rs is a real estate search platform that gathers listings from all major real estate websites in Serbia, bringing them together in one place for easy browsing. It automatically scans and updates listings, making sure users always see the latest offers. One of its key features is smart duplicate detection: if the same property is listed by different agencies or on different sites, Nadji.rs groups them together so users don’t have to scroll through repeats.",
        link: "https://nadji.in.rs/",
        technologies: ["C#", ".NET", "JavaScript", "React", "HTML", "CSS", "Bootstrap", "Web Scraping"]
    },
    {
        title: "SocialPhysics",
        cover: socialPhysicsPlaceholder,
        description: "SocialDynamicsAI is a multimodal AI system that analyzes real-time meeting behavior to uncover hidden patterns of power, influence, and engagement. Built with a custom rule engine and advanced video/audio processing, it tracks gaze, posture, tone, and speech to classify participant roles and generate live insights. I contributed to its design and behavioral logic, helping teams decode unspoken dynamics and improve collaboration instantly.",
        link: "https://socialphysics.co",
        technologies: ["Python", "JavaScript", "OpenAI", "WhisperAI", "AssemblyAI", "HuggingFace", "Tailwind", "Bash"]
    },
    {
        title: "TwitterClone",
        cover: twitterClonePlaceholder,
        description: "As part of a college team project, we built a social media platform for short posts, similar to Twitter, using a microservices architecture and various NoSQL databases. The system supports user registration (regular and business accounts), posting, liking, retweeting, and following other users, along with targeted ad posting and performance tracking for business users. We implemented modern backend concepts like event sourcing, CQRS, API gateways, Redis caching, Docker containerization, and Jaeger tracing, while also focusing on security through validation, RBAC, and secure communication. It was a great hands-on experience in building a scalable and secure distributed system from the ground up.",
        link: "https://github.com/orgs/OSSIT-Tim1/repositories",
        technologies: ["GO", "JavaScript", "Docker", "Microservices", "Nginx", "Nats", "MongoDB", "Redis", "Cassandra", "Neo4j", "Jaeger", "React", "Tailwind"]
    },
    {
        title: "RedditClone",
        cover: redditClonePlaceholder,
        description: "RedditClone is a solo-built social platform inspired by Reddit, featuring user authentication, multiple roles (User, Moderator, Admin), and full community management. Users can create and edit communities, make rich posts with text, images, and PDFs, add flairs, and engage through threaded comments with unlimited replies. The app includes features like post/comment reactions, reporting, and advanced moderation tools such as banning users or suspending communities. It also has a powerful yet easy-to-use search, letting users find posts and communities using filters, keywords, and flexible search options.",
        link: "https://github.com/PetarK37/RedditCloneSpring",
        technologies: ["Java", "SpringBoot", "TypeScript", "Angular", "HTML", "CSS", "MySQL", "ElasticSearch"]
    },
    {
        title: "Store Admin",
        cover: storeadminPlaceholder,
        description: "Store Admin is a full-stack web application for managing inventory and customer orders, designed for online shops operating through Instagram, Facebook, and similar networks. Built with .NET Core, React, Material-UI, and MS SQL, it provides an admin panel where store owners can manage products, categories, employees, and promo codes. Key features include inventory and sales analytics, customer order tracking with automated emails and shipping labels, supplier order reminders, and role-based access control, making it a comprehensive solution for social commerce management.",
        link: "https://github.com/PetarK37/OnlineStoreManagment",
        technologies: [".NET", "JavaScript", "React", "MsSQLServer", "React", "Material-UI", "MailKit"]
    },
    // {
    //     title: "E-uprava",
    //     cover: eupravaPlaceholder,
    //     description: "PolicePlatform is a demo microservice built as part of a student e-government project, where I was responsible for the entire police module. It allows officers to log in, verify people and vehicles, issue reports with attachments, generate PDFs, and forward cases to the court service. The app features role-based access, simple data validation, and integration with the court and vehicle registration services developed by teammates.",
    //     link: "https://github.com/orgs/EUPRAVA-TIM1/repositories",
    //     technologies: ["GO", "JavaScript", "Docker", "Microservices", "MySQL", "Redis", "React", "Bootstrap"]
    // },

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
                            className={`transition-transform duration-300 ease-in-out transform hover:-translate-y-1 mb-2 sm:w-[49%] xs:w-[100%] mx-auto ${theme === 'dark' ? 'bg-white' : 'bg-black'} } rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 sm:p-5 flex flex-col gap-4`}
                        >
                            <div className="aspect-[1024/768] flex justify-center align-middle h-max">
                                <img src={proj.cover} className="rounded-md" />
                            </div>
                            <h2 className="font-bold text-2xl xs:p-2">
                                {proj.title}
                            </h2>
                            <div className="flex gap-2 justify-center flex-wrap mb-auto xs:p-2 px-2">
                                {proj.technologies.map((t) => (
                                    <span className="font-semibold px-2 py-1 bg-primary rounded-lg text-sm text-white">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <p className="text-md font-normal py-2 xs:p-2 px-2">
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
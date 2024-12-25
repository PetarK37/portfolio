import { ReactElement } from 'react';
import { Icon } from "@iconify/react";

export interface Skill {
    id: string,
    name: string,
    icon: ReactElement,
    color: string
}

export const SKILLS: Array<Skill> = [
    {
        id: "python", name: "Python", icon: <Icon icon={'skill-icons:python-dark'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#ffdf58"
    },
    {
        id: "django", name: "Django", icon: <Icon icon={'skill-icons:django'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#ffdf58"
    },
    { id: "react", name: "React", icon: <Icon icon={'skill-icons:react-dark'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#60dbfc" },
    { id: "java", name: "Java", icon: <Icon icon={'skill-icons:java-light'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#db1d22" },
    { id: "javascript", name: "JavaScript", icon: <Icon icon={'skill-icons:javascript'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#f1dc4f" },
    { id: "docker", name: "Docker", icon: <Icon icon={'skill-icons:docker'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#2597ef" },
    { id: "github", name: "GitHub", icon: <Icon icon={'skill-icons:github-dark'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#1b1e23" },
    { id: "git", name: "Git", icon: <Icon icon={'skill-icons:git'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#1b1e23" },
    { id: "springboot", name: "Spring Boot", icon: <Icon icon={'skill-icons:spring-light'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#6db33f" },
    { id: "fastapi", name: "FastAPI", icon: <Icon icon={'skill-icons:fastapi'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#049689" },
    { id: "selenium", name: "Selenium", icon: <Icon icon={'skill-icons:selenium'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#01b400" },
    {
        id: "openai", name: "OpenAI API", icon:
            <Icon icon={'simple-icons:openai'} className="text-5xl md:text-6xl lg:text-7xl bg-[#0ea882] rounded-xl p-1 text-white" />, color: "#0ea882"
    },
    { id: "typescript", name: "TypeScript", icon: <Icon icon={'skill-icons:typescript'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#2d79c7" },
    { id: "dotnet", name: ".NET", icon: <Icon icon={'skill-icons:dotnet'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#43b5e7" },
    { id: "html", name: "HTML5", icon: <Icon icon={'skill-icons:html'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#e64d24" },
    { id: "css", name: "CSS3", icon: <Icon icon={'skill-icons:css'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#254ee1" },
    { id: "postgre", name: "PostgreSQL", icon: <Icon icon={'skill-icons:postgresql-dark'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#336791" },
    { id: "mysql", name: "MySQL", icon: <Icon icon={'skill-icons:mysql-light'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#f19111" },
    { id: "mongo", name: "MongoDB", icon: <Icon icon={'skill-icons:mongodb'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#53ac46" },
    { id: "redis", name: "Redis", icon: <Icon icon={'skill-icons:redis-dark'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#d82c20" },
    { id: "tailwind", name: "Tailwind", icon: <Icon icon={'skill-icons:tailwindcss-dark'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#14c6b7" },
    { id: "bootstrap", name: "Bootstrap", icon: <Icon icon={'skill-icons:bootstrap'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#6b11f4" },
    { id: "csharp", name: "C#", icon: <Icon icon={'devicon:csharp'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#6b11f4" },
    // { id: "golang", name: "Golang", icon: <Icon icon={'skill-icons:golang'} className="text-5xl md:text-6xl lg:text-7xl" />, color: "#00abd7" },
];





export const NAV_ITEMS = [
    // {id: "hero", label: "Hello", offset: -150 },
    { id: "about", label: "About", offset: 0 },
    { id: "skills", label: "Skills", offset: 0 },
    { id: "experience", label: "Experience", offset: 0 },
    { id: "projects", label: "Projects", offset: 0 },
    { id: "contact", label: "Contact", offset: 0 },
];

import { ReactElement } from 'react';
import { Icon } from "@iconify/react";

export interface Skill {
    id: string;
    name: string;
    icon: ReactElement;
    category: string;
}

export const SKILL_CATEGORIES = ["Languages", "Frontend", "Backend", "Databases", "Tools & APIs"] as const;

export const SKILLS: Array<Skill> = [
    // Languages
    { id: "python", name: "Python", icon: <Icon icon={'skill-icons:python-dark'} className="text-xl md:text-2xl" />, category: "Languages" },
    { id: "java", name: "Java", icon: <Icon icon={'skill-icons:java-light'} className="text-xl md:text-2xl" />, category: "Languages" },
    { id: "javascript", name: "JavaScript", icon: <Icon icon={'skill-icons:javascript'} className="text-xl md:text-2xl" />, category: "Languages" },
    { id: "typescript", name: "TypeScript", icon: <Icon icon={'skill-icons:typescript'} className="text-xl md:text-2xl" />, category: "Languages" },
    { id: "csharp", name: "C#", icon: <Icon icon={'devicon:csharp'} className="text-xl md:text-2xl" />, category: "Languages" },

    // Frontend
    { id: "react", name: "React", icon: <Icon icon={'skill-icons:react-dark'} className="text-xl md:text-2xl" />, category: "Frontend" },
    { id: "html", name: "HTML5", icon: <Icon icon={'skill-icons:html'} className="text-xl md:text-2xl" />, category: "Frontend" },
    { id: "css", name: "CSS3", icon: <Icon icon={'skill-icons:css'} className="text-xl md:text-2xl" />, category: "Frontend" },
    { id: "tailwind", name: "Tailwind", icon: <Icon icon={'skill-icons:tailwindcss-dark'} className="text-xl md:text-2xl" />, category: "Frontend" },
    { id: "angular", name: "Angular", icon: <Icon icon={'skill-icons:angular-dark'} className="text-xl md:text-2xl" />, category: "Frontend" },
    { id: "bootstrap", name: "Bootstrap", icon: <Icon icon={'skill-icons:bootstrap'} className="text-xl md:text-2xl" />, category: "Frontend" },

    // Backend
    { id: "django", name: "Django", icon: <Icon icon={'skill-icons:django'} className="text-xl md:text-2xl" />, category: "Backend" },
    { id: "springboot", name: "Spring Boot", icon: <Icon icon={'skill-icons:spring-light'} className="text-xl md:text-2xl" />, category: "Backend" },
    { id: "fastapi", name: "FastAPI", icon: <Icon icon={'skill-icons:fastapi'} className="text-xl md:text-2xl" />, category: "Backend" },
    { id: "dotnet", name: ".NET", icon: <Icon icon={'skill-icons:dotnet'} className="text-xl md:text-2xl" />, category: "Backend" },

    // Databases
    { id: "postgre", name: "PostgreSQL", icon: <Icon icon={'skill-icons:postgresql-dark'} className="text-xl md:text-2xl" />, category: "Databases" },
    { id: "mysql", name: "MySQL", icon: <Icon icon={'skill-icons:mysql-light'} className="text-xl md:text-2xl" />, category: "Databases" },
    { id: "mssql", name: "MS SQL Server", icon: <Icon icon={'devicon:microsoftsqlserver'} className="text-xl md:text-2xl" />, category: "Databases" },
    { id: "redis", name: "Redis", icon: <Icon icon={'skill-icons:redis-dark'} className="text-xl md:text-2xl" />, category: "Databases" },

    // Tools & APIs
    { id: "docker", name: "Docker", icon: <Icon icon={'skill-icons:docker'} className="text-xl md:text-2xl" />, category: "Tools & APIs" },
    { id: "github", name: "GitHub", icon: <Icon icon={'skill-icons:github-dark'} className="text-xl md:text-2xl" />, category: "Tools & APIs" },
    { id: "git", name: "Git", icon: <Icon icon={'skill-icons:git'} className="text-xl md:text-2xl" />, category: "Tools & APIs" },
    { id: "selenium", name: "Selenium", icon: <Icon icon={'skill-icons:selenium'} className="text-xl md:text-2xl" />, category: "Tools & APIs" },
    { id: "openai", name: "OpenAI API", icon: <Icon icon={'simple-icons:openai'} className="text-xl md:text-2xl bg-[#0ea882] rounded-md p-0.5 text-white" />, category: "Tools & APIs" },
    { id: "claude", name: "Claude Code", icon: <Icon icon={'simple-icons:anthropic'} className="text-xl md:text-2xl" />, category: "Tools & APIs" },
];

export const NAV_ITEMS = [
    { id: "about", label: "About", offset: 0 },
    { id: "skills", label: "Skills", offset: 0 },
    { id: "experience", label: "Experience", offset: 0 },
    { id: "projects", label: "Projects", offset: 0 },
    { id: "contact", label: "Contact", offset: 0 },
];

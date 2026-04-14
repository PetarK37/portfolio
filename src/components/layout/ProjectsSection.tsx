import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import SpotlightCard from "../ui/SpotlightCard";
import { fadeUp, staggerContainer } from "../../utils/motion";

import zenithPlaceholder from "../../assets/images/zenthchat.png";
import nadjiPlaceholder from "../../assets/images/Nadji.rs.png";
import socialPhysicsPlaceholder from "../../assets/images/socialphysics.png";
import redditClonePlaceholder from "../../assets/images/redditclone.png";
import twitterClonePlaceholder from "../../assets/images/twitterclone.jpg";
import storeadminPlaceholder from "../../assets/images/sotreadmin.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  cover: string;
  link: string | null;
}

const projects: Project[] = [
  {
    title: "ZenithChat",
    cover: zenithPlaceholder,
    description:
      "ZenithChat is a smart Instagram chatbot designed to handle customer messages automatically. It connects to the Meta API to understand your page's posts, stories, and DMs, and replies to messages based on that content. You can also feed it extra info from your website, files, or other sources.",
    link: "https://www.linkedin.com/company/zenith-chat",
    technologies: ["Python", "OpenAI", "GraphAPI", "Redis", "Pinecone", "PostgreSQL", "Django", "React", "Celery"],
  },
  {
    title: "Nadji.rs",
    cover: nadjiPlaceholder,
    description:
      "Nadji.rs is a real estate search platform that gathers listings from all major real estate websites in Serbia, bringing them together in one place. It features smart duplicate detection to group the same property listed across different sites.",
    link: "https://nadji.in.rs/",
    technologies: ["C#", ".NET", "React", "Bootstrap", "Web Scraping"],
  },
  {
    title: "SocialPhysics",
    cover: socialPhysicsPlaceholder,
    description:
      "A multimodal AI system that analyzes real-time meeting behavior to uncover hidden patterns of power, influence, and engagement using video/audio processing, gaze tracking, and speech analysis.",
    link: "https://socialphysics.co",
    technologies: ["Python", "OpenAI", "WhisperAI", "AssemblyAI", "HuggingFace", "Tailwind"],
  },
  {
    title: "TwitterClone",
    cover: twitterClonePlaceholder,
    description:
      "A microservices social platform using event sourcing, CQRS, API gateways, Redis caching, Docker, and Jaeger tracing. Built as a college team project focusing on scalable distributed systems.",
    link: "https://github.com/orgs/OSSIT-Tim1/repositories",
    technologies: ["GO", "Docker", "Microservices", "MongoDB", "Redis", "Cassandra", "Neo4j", "React"],
  },
  {
    title: "RedditClone",
    cover: redditClonePlaceholder,
    description:
      "Solo-built social platform featuring user authentication, multiple roles, community management, threaded comments, post reactions, reporting, and full-text search with ElasticSearch.",
    link: "https://github.com/PetarK37/RedditCloneSpring",
    technologies: ["Java", "SpringBoot", "TypeScript", "Angular", "MySQL", "ElasticSearch"],
  },
  {
    title: "Store Admin",
    cover: storeadminPlaceholder,
    description:
      "Full-stack e-commerce management app for social commerce. Features inventory analytics, order tracking with automated emails, supplier reminders, and role-based access control.",
    link: "https://github.com/PetarK37/OnlineStoreManagment",
    technologies: [".NET", "React", "Material-UI", "MsSQLServer", "MailKit"],
  },
];

function ProjectsSection() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section
      className="px-6 md:px-12 lg:px-16 py-32 lg:py-40 max-w-content w-full"
      id="projects"
    >
      <SectionHeading
        title="Projects"
        subtitle="Most interesting projects that don't include NDA contracts."
      />

      <motion.div
        className="flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer(0.12)}
      >
        {/* Featured project — large asymmetric card */}
        <motion.div variants={fadeUp}>
          <a
            href={featured.link || "#projects"}
            target={featured.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="block group"
          >
            <SpotlightCard className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                </div>
                <div className="p-6 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mt-3 max-w-[50ch]">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {featured.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-accent/10 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </a>
        </motion.div>

        {/* Remaining projects — zig-zag layout */}
        {rest.map((proj, i) => (
          <motion.div key={proj.title} variants={fadeUp}>
            <a
              href={proj.link || "#projects"}
              target={proj.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block group"
            >
              <SpotlightCard className="overflow-hidden">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                    i % 2 === 0 ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={proj.cover}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className={`p-6 lg:p-8 flex flex-col justify-center ${i % 2 === 0 ? "" : "lg:[direction:ltr]"}`}>
                    <h3 className="text-xl lg:text-2xl font-semibold tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mt-2 max-w-[50ch]">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-accent/10 text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectsSection;

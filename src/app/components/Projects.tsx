import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-4 items-center mt-52 ">
      <h2 className="text-4xl font-bold">Projects (3)</h2>
      <h3 className="text-2xl text-muted-foreground text-center">
        Projects that I&apos;m currently building and have built
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Self Dictionary",
    startDate: "Oct 2024",
    endDate: "Ongoing Development",
    description:
      "A web platform for language learners to connect, take customizable language notes, and practice through mini-games. It also includes social feeds and forums for interaction.",
    techStack:
      "TypeScript, React, Nodejs, Express, React Router, Tanstack Query, TailwindCSS, Prisma, PostgreSQL",
    imagePath: "/projects/self-dictionary/language_notes.png",
    isDeployed: false,
    deployedLink: undefined,
  },
  {
    title: "Ray's Blog",
    startDate: "Jul 2024",
    endDate: "Sep 2024",
    description:
      "A fullstack blog website with authentication, markdown support, image uploading, tag and category querying, responsive design and dark mode.",
    techStack:
      "TypeScript, React, ASP .NET Core Web API, React Router, Tanstack Query, TailwindCSS, Entity Framework, Microsoft SQL Server",
    imagePath: "/projects/rays-blog/main_page.png",
    isDeployed: true,
    deployedLink: "https://rays-blog-gold.vercel.app",
  },
  {
    title: "The Beat Stop",
    startDate: "Mar 2024",
    endDate: "Jun 2024",
    description:
      "This project aims to connect artists and music producers, ensuring that individuals can securely meet their instrumental needs. Includes; user authentication, file uploads, audio player, search etc.",
    techStack:
      "JavaScript, React, Nodejs, Express, React Router, CSS Modules, MongoDB",
    imagePath: "/projects/beat-stop/main_page.png",
    isDeployed: false,
    deployedLink: undefined,
  },
];

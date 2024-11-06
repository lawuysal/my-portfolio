import { ExternalLink } from "lucide-react";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className=" w-[22rem] md:w-[50rem]  text-wrap border  rounded-md"
    >
      <h4 className="border-b p-3 bg-primary/10 text-lg">Tech Stack</h4>
      <div className="p-4 flex flex-col justify-center gap-4 mt-2">
        <ul className="ml-4 list-disc space-y-5">
          {techStack.map((tech) => (
            <li key={tech.name}>
              <div>
                <a href={tech.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <h5 className="font-semibold">{tech.name}</h5>
                    <ExternalLink className="size-3 inline-block" />
                  </div>
                </a>
                <p className="text-sm text-muted-foreground italic">
                  <em>{tech.description}</em>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const techStack = [
  {
    name: "TypeScript",
    description: " JavaScript with compile-time type checking",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Nodejs",
    description: "A JavaScript runtime",
    link: "https://nodejs.org/",
  },
  {
    name: "Express",
    description: "A minimal and flexible Node.js web application framework",
    link: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    description: "A powerful, open source object-relational database system",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Prisma",
    description: "A modern database ORM for TypeScript",
    link: "https://prisma.io/",
  },
  {
    name: "React",
    description: "A JavaScript library for single page applications",
    link: "https://react.dev/",
  },
  {
    name: "Vite",
    description: "A modern build tool for libraries like React",
    link: "https://vite.dev/",
  },
  {
    name: "Redux Toolkit",
    description: "Global UI state management library",
    link: "https://redux-toolkit.js.org/",
  },
  {
    name: "Zod",
    description: "A runtime-safe schema declaration and validation library",
    link: "https://zod.dev/",
  },
  {
    name: "React Router",
    description: "A routing library for React from the creators of Remix",
    link: "https://reactrouter.com/",
  },
  {
    name: "Tanstack Query",
    description: "A remote state management library",
    link: "https://tanstack.com/query/latest",
  },
  {
    name: "Tailwind CSS",
    description: "A CSS framework",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Shadcn-ui",
    description: "A component library-ish based on RadixUI",
    link: "https://ui.shadcn.com/",
  },
  {
    name: "i18next",
    description: "An internationalization library",
    link: "https://www.i18next.com/",
  },
];

import TechStackImage from "./TechStackImage";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="flex flex-col gap-4 items-center mt-52 "
    >
      <h2 className="text-4xl font-bold ">My Tech Stack</h2>
      <h3 className="text-2xl text-muted-foreground text-center">
        Technologies that I&apos;m working with
      </h3>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-8 lg:gap-20 md:gap-16 mt-20">
        {images.map((image) => (
          <TechStackImage key={image.src} {...image} />
        ))}
      </div>
    </section>
  );
}

const images = [
  {
    src: "/tech-stack/logo-javascript.png",
    alt: "logo of javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: "/tech-stack/logo-typescript.png",
    alt: "logo of typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    src: "/tech-stack/logo-csharp.png",
    alt: "logo of c sharp",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    src: "/tech-stack/logo-react.webp",
    alt: "logo of react",
    link: "https://react.dev/",
  },
  {
    src: "/tech-stack/logo-nodejs.png",
    alt: "logo of nodejs",
    link: "https://nodejs.org/en",
  },
  {
    src: "/tech-stack/logo-aspnetcore.png",
    alt: "logo of asp .net core",
    link: "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0",
    bg: true,
  },
  {
    src: "/tech-stack/logo-expressjs.png",
    alt: "logo of expressjs",
    link: "https://expressjs.com/",
  },
  {
    src: "/tech-stack/logo-tanstackquery.png",
    alt: "logo of tanstack query",
    link: "https://tanstack.com/query/latest",
  },
  {
    src: "/tech-stack/logo-reactrouter.png",
    alt: "logo of react router",
    link: "https://reactrouter.com/en/main",
    bg: true,
  },
  {
    src: "/tech-stack/logo-redux.png",
    alt: "logo of redux",
    link: "https://redux-toolkit.js.org/",
  },
  {
    src: "/tech-stack/logo-prisma.png",
    alt: "logo of prisma ORM",
    link: "https://www.prisma.io/",
    bg: true,
  },
  {
    src: "/tech-stack/logo-tailwind.png",
    alt: "logo of tailwind css",
    link: "https://tailwindcss.com/",
  },
];

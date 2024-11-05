import TechStackImage from "./TechStackImage";

const images = [
  { src: "/tech-stack/logo-javascript.png", alt: "logo of javascript" },
  { src: "/tech-stack/logo-typescript.png", alt: "logo of typescript" },
  { src: "/tech-stack/logo-csharp.png", alt: "logo of c sharp" },
  { src: "/tech-stack/logo-react.webp", alt: "logo of react" },
  { src: "/tech-stack/logo-nodejs.png", alt: "logo of nodejs" },
  {
    src: "/tech-stack/logo-aspnetcore.png",
    alt: "logo of asp .net core",
    bg: true,
  },
  { src: "/tech-stack/logo-expressjs.png", alt: "logo of expressjs" },
  { src: "/tech-stack/logo-tanstackquery.png", alt: "logo of tanstack query" },
  {
    src: "/tech-stack/logo-reactrouter.png",
    alt: "logo of react router",
    bg: true,
  },
  { src: "/tech-stack/logo-redux.png", alt: "logo of redux" },
  { src: "/tech-stack/logo-prisma.png", alt: "logo of prisma ORM", bg: true },
  { src: "/tech-stack/logo-tailwind.png", alt: "logo of tailwind css" },
];

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

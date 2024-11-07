import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="w-full max-w-[100rem] mx-auto  px-8 flex-grow mb-40"
      >
        <section
          id="about"
          className="flex flex-col items-center mt-48 z-40 relative"
        >
          <header className="flex flex-col gap-7 md:gap-5 ">
            <h1 className="text-6xl font-bold mix-blend-multiply">
              Hi, I&apos;m Oğuzhan
            </h1>
            <h2 className="text-xl ">
              I help people with the software I develop. Especially
              <strong> web applications </strong>
              these days :)
            </h2>
            {/* <p className="text-sm text-primary cursor-pointer">
              See why it&apos;s <strong> lawuysal →</strong>
            </p> */}
          </header>
        </section>

        <div className="absolute z-0 size-[10rem] animate-blob blur-lg  bg-muted/40 top-[45%] left-[40%] md:top-[35%] md:left-[45%] rounded-full "></div>
        <div className="absolute z-0 size-[10rem] bg-primary/20 blur-lg animate-blob animation-delay-3000 top-[40%] left-[50%] md:top-[30%] md:left-[50%] rounded-full "></div>

        <TechStack />
        <Projects />

        {/* Contact */}
        <section
          id="contact"
          className="flex flex-col gap-4 items-center mt-52 "
        >
          <h2 className="text-4xl font-bold ">Contact Me</h2>
          <h3 className="text-2xl text-muted-foreground text-center">
            Feel free to reach out to me for any inquiries
          </h3>
          <div className="mt-20 flex flex-col gap-10 items-center justify-center">
            <p className="text-3xl lg:text-4xl bg-muted hover:bg-muted/70 py-4 px-8 rounded-3xl">
              lawuysal@outlook.com
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

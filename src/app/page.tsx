import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="w-full max-w-[100rem] mx-auto  px-8">
        <section id="about" className="flex flex-col items-center mt-48 ">
          <header className="flex flex-col gap-7 md:gap-5">
            <h1 className="text-6xl font-bold">Hi, I&apos;m Oğuzhan Uysal</h1>
            <h2 className="text-3xl">
              I help people with the software I develop. Especially{" "}
              <span className="underline decoration-primary">
                web applications
              </span>{" "}
              these days :)
            </h2>
          </header>
        </section>

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
            <div className="flex items-center justify-center gap-8">
              <div className="w-10 border-b"></div>
              <p>OR</p>
              <div className="w-10 border-b"></div>
            </div>
            <p className="text-3xl lg:text-4xl bg-muted hover:bg-muted/70 py-4 px-8 rounded-3xl">
              +90 545 225 90 68
            </p>
          </div>
        </section>

        {/*Footer */}
        <div className="footer mt-52 items-center justify-center flex mb-10">
          <div></div>
          <div>
            <p className="text-muted-foreground text-center">
              Made with ❤️ by Oğuzhan Uysal
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

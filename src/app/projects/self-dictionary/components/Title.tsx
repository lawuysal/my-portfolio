import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export default function Title() {
  return (
    <section className="text-center items-center justify-center flex flex-col gap-6 md:gap-8 px-4 relative">
      <div className="flex items-center justify-center gap-4 ">
        <h1 className="text-4xl md:text-6xl font-bold">Self Dictionary</h1>
      </div>
      <h3 className="text-xl md:text-2xl text-muted-foreground">
        A web platform to help language learning and to socialize with other
        learners.
      </h3>

      <div className="flex items-center justify-center gap-4">
        <a
          href="https://github.com/lawuysal/self-dictionary-client"
          target="_blank"
          rel="nonopener nonreferrer"
        >
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2"
          >
            <FaGithub />
            <p>Client Codes</p>
          </Button>
        </a>
        <a
          href="https://github.com/lawuysal/self-dictionary-server"
          target="_blank"
          rel="nonopener nonreferrer"
        >
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2"
          >
            <FaGithub />
            <p>Server Codes</p>
          </Button>
        </a>
      </div>
    </section>
  );
}

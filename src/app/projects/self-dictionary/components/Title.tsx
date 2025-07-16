import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Title() {
  return (
    <section className="text-center items-center justify-center flex flex-col gap-6 md:gap-8 px-4 relative">
      <a
        href="https://selfdictionary.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-4 "
      >
        <h1 className="text-4xl md:text-6xl underline font-bold">
          Self Dictionary
        </h1>
        <ExternalLink className="size-9 md:size-12" />
      </a>
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

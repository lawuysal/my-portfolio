import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Title() {
  return (
    <section className="text-center items-center justify-center flex flex-col gap-8 hover:text-foreground/90">
      <a
        href="https://rays-blog-gold.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-4 "
      >
        <h1 className="text-6xl underline font-bold">Ray&apos;s Blog</h1>
        <ExternalLink className="size-12" />
      </a>
      <h3 className="text-3xl text-muted-foreground">
        A personal blog for music producer and mixing engineer{" "}
        <strong className="font-semibold text-foreground/80 underline decoration-primary">
          Ray Maschine
        </strong>
        .
      </h3>

      <div className="flex items-center justify-center gap-4">
        <a
          href="https://github.com/lawuysal/music-blog-frontend"
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
          href="https://github.com/lawuysal/music-blog-server"
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

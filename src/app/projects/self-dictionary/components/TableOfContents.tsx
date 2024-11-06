"use client";

import { scrollToSection } from "@/lib/utils";

export default function TableOfContents() {
  return (
    <section className="w-[20rem] md:w-[50rem] gap-8 items-center justify-center text-lg text-wrap flex flex-col rounded-md ">
      <h4 className="text-3xl font-semibold">Content</h4>
      <div className="flex w-full items-center justify-center">
        <ol className="flex flex-col  gap-2 md:gap-0 md:flex-row w-fit md:w-full items-start  justify-between">
          {contents.map((content, index) => (
            <li
              key={content + index + "contentSection"}
              className="hover:underline hover:text-foreground text-muted-foreground"
            >
              <a
                href={`#${content.toLowerCase()}`}
                onClick={(e) =>
                  scrollToSection(e, content.split(" ").join("-").toLowerCase())
                }
              >
                {index + 1}. {content}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const contents = [
  "Overview",
  "Description",
  "Features",
  "Tech Stack",
  "Screenshots",
];

import { ExternalLink, TextSearch } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string;
  imagePath: string;
  startDate: string;
  endDate: string;
  isDeployed: boolean;
  deployedLink?: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  imagePath,
  startDate,
  endDate,
  isDeployed,
  deployedLink,
}: ProjectCardProps) {
  return (
    <div className="bg-primary/10 border rounded-3xl grid grid-rows-[3fr_5fr_1fr] max-w-[350px] relative  ">
      <Image
        className="rounded-t-3xl object-cover w-[350px] h-[200px] "
        src={imagePath}
        alt="project 1"
        width={350}
        height={150}
      />

      <div className="p-4 flex flex-col gap-8 ">
        {/* Header */}
        <div>
          {/* Title */}
          <RenderTitle
            isDeployed={isDeployed}
            deployedLink={deployedLink}
            title={title}
          />

          {/* Dates */}
          <p className="text-sm text-muted-foreground ">
            {startDate} - {endDate}
          </p>
        </div>

        {/* Content */}
        <p>{description}</p>
        <p>
          <span className="font-bold underline">Tech Stack:</span> {techStack}
        </p>
      </div>

      {/* Footer */}
      <div className="p-4 grid grid-cols-[5fr_1fr_5fr] items-center justify-center place-items-center bottom-0 absolute w-full rounded-b-3xl">
        <div className="flex items-center justify-center gap-2 cursor-pointer h-8">
          <TextSearch className="size-6" />
          <p>Details</p>
        </div>

        <div className="border-r h-8"></div>

        <div className="flex items-center justify-center gap-2 cursor-pointer h-8">
          <FaGithub className="size-6" />
          <p>Code</p>
        </div>
      </div>
    </div>
  );
}

function RenderTitle({
  isDeployed,
  deployedLink,
  title,
}: {
  isDeployed: boolean;
  deployedLink?: string;
  title: string;
}) {
  if (isDeployed && deployedLink) {
    return (
      <div className="flex items-center justify-between">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          <div
            className={`flex items-center gap-2 ${
              isDeployed ? "underline cursor-pointer" : ""
            }`}
          >
            <p className={`text-2xl font-semibold  `}>{title}</p>
            <ExternalLink className={`size-5 ${isDeployed ? "" : "hidden"}`} />
          </div>
        </a>
        <div
          className={`mx-auto bg-primary/40 px-6 py-1 rounded-full border text-xs ${
            isDeployed ? "" : "hidden"
          }`}
        >
          Deployed
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <div
        className={`flex items-center gap-2 ${
          isDeployed ? "underline cursor-pointer" : ""
        }`}
      >
        <p className={`text-2xl font-semibold  `}>{title}</p>
        <ExternalLink className={`size-5 ${isDeployed ? "" : "hidden"}`} />
      </div>
      <div
        className={`mx-auto bg-primary/40 px-6 py-1 rounded-full border text-xs ${
          isDeployed ? "" : "hidden"
        }`}
      >
        Deployed
      </div>
    </div>
  );
}

import TableOfContents from "./components/TableOfContents";
import Description from "./components/Description";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Title from "./components/Title";
import Overview from "./components/Overview";
import TechStack from "./components/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self Dictionary | lawuysal's Portfolio",
  description:
    "Self Dictionary is a web platform designed to support language learning and connect learners with each other. It allows users to keep and customize notes for each language and practice them through mini-games. Users can also interact with others on social feeds and forums.",
};

export default function page() {
  return (
    <main className="flex-grow flex-col flex w-full items-center gap-20 max-w-[100rem] mx-auto mt-20 mb-40">
      <Title />
      <TableOfContents />

      <div className="border-b w-[12rem] md:w-[25rem] blur-sm"></div>

      <Overview />
      <Description />
      <Features />
      <TechStack />
      <Screenshots />
    </main>
  );
}

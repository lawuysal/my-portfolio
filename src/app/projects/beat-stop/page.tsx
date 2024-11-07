import TableOfContents from "./components/TableOfContents";
import Description from "./components/Description";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Title from "./components/Title";
import Overview from "./components/Overview";
import TechStack from "./components/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Beat Stop | lawuysal's Portfolio",
  description:
    "This project aims to connect artists and music producers, ensuring that individuals can securely meet their instrumental needs.",
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

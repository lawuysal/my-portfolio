"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    setIsHomePage(pathname === "/");
    console.log(pathname);
  }, [pathname]);

  return (
    <nav className=" w-full flex items-center justify-between lg:px-0 px-6 lg:justify-around h-16 mx-auto max-w-[100rem] sticky top-1 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      {/* Logo */}
      <Link href="/">
        <h2 className="text-3xl">@lawuysal</h2>
      </Link>

      {/* Navigation */}
      <ul className=" gap-8 hidden lg:flex">
        <li>
          <a
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => scrollToSection(e, "home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href={isHomePage ? "#about" : "/"}
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </a>
        </li>
        <li>
          <Link
            href={isHomePage ? "#tech-stack" : "/"}
            onClick={(e) => scrollToSection(e, "tech-stack")}
          >
            Tech Stack
          </Link>
        </li>
        <li>
          <a
            href={isHomePage ? "#projects" : "/"}
            onClick={(e) => scrollToSection(e, "projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href={isHomePage ? "#contact" : "/"}
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Social Media */}
      <ul className="gap-8 hidden lg:flex">
        <li>
          <a
            href="https://github.com/lawuysal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="size-8" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/lawuysal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="size-8" />
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
}

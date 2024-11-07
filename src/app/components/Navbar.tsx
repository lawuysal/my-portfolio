"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setIsHomePage(pathname === "/");

    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        scrollToSection(
          { preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>,
          sectionId
        );
      }
    }
  }, [pathname]);

  function getLinkProps(section: string) {
    return {
      href: isHomePage ? `#${section}` : `/#${section}`,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHomePage) {
          scrollToSection(e, section);
        }
        setShowMobileMenu(false);
      },
    };
  }

  return (
    <nav className="w-full flex items-center justify-between lg:px-0 px-6 lg:justify-around h-16 mx-auto max-w-[100rem] sticky top-1 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      {/* Logo */}
      <Link href="/">
        <h2 className="text-2xl md:text-3xl font-bold">@lawuysal</h2>
      </Link>

      {/* Desktop Navigation */}
      <ul className="gap-8 hidden lg:flex">
        <li>
          <Link {...getLinkProps("home")}>Home</Link>
        </li>
        <li>
          <Link {...getLinkProps("about")}>About</Link>
        </li>
        <li>
          <Link {...getLinkProps("tech-stack")}>Tech Stack</Link>
        </li>
        <li>
          <Link {...getLinkProps("projects")}>Projects</Link>
        </li>
        <li>
          <Link {...getLinkProps("contact")}>Contact</Link>
        </li>
      </ul>

      {/* Social Media Links for Desktop */}
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

      {/* Mobile Menu */}
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <button className="lg:hidden">
            <span className="sr-only">menu button</span>
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
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <ul className="text-white text-2xl space-y-6 mt-20">
            <li>
              <Link {...getLinkProps("home")}>Home</Link>
            </li>
            <li>
              <Link {...getLinkProps("about")}>About</Link>
            </li>
            <li>
              <Link {...getLinkProps("tech-stack")}>Tech Stack</Link>
            </li>
            <li>
              <Link {...getLinkProps("projects")}>Projects</Link>
            </li>
            <li>
              <Link {...getLinkProps("contact")}>Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

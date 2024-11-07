import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();

  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // Adjust as needed for your navbar height
    const yPosition =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  } else {
    console.warn(`Element with ID '${id}' not found.`);
  }
};

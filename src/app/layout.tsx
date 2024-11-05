import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lawuysal's Portfolio",
  description: "Oğuzhan Uysal's (aka lawuysal) portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased dark `}
        style={{ colorScheme: "dark" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

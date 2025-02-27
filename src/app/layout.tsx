import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abdullatifnizamani.com"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "Abdullatif",
    "Nizamani",
    "latif",
    "LATIF",
    "abdullatif",
    "nizamani",
    "NIZAMANI",
    "IIUI",
    "Islamabad",
    "ISB",
    "isb",
    "bs cs",
    "latif nizamani",
    "latif khan",
    "web developer",
    "javascript",
    "portfolio",
    "software",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "app developer",
    "website",
    "@abdullatifnizamani",
    "mongodb",
    "latif developer",
    "Latif Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "Database Management",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio Website",
    "Freelance Web Developer",
    "Pakistan Developers",
    "IIUI Islamabad",
    "Islamabad Software Engineer",
    "Web Development Portfolio",
    "Open Source Contributor",
    "Tech Enthusiast",
    "Programming Projects",
    "Tailwind CSS",
    "Vite",
    "GraphQL",
    "REST APIs",
    "Cloud Computing",
    "Web Performance Optimization",
    "Code for Pakistan",
    "Abdullatif Code Projects",
  ],
  authors: [
    {
      name: "Abdullatif Nizamani",
      url: "https://github.com/latifniz",
    },
  ],
  creator: "Abdullatif Nizamani",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/og-image.png`],
  //   creator: "@abdullatif",
  // },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

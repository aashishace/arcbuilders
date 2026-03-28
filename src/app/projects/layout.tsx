import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Project Portfolio",
  description:
    "Browse ARC Builders project portfolio featuring custom homes and quality builds delivered across Brisbane, Logan, Rochedale, and South East Queensland.",
  path: "/projects",
  keywords: ["builder portfolio Brisbane", "custom home projects", "completed homes Queensland"],
  images: ["/projects/14-verona-st-pallara/hero.webp"],
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact ARC Builders",
  description:
    "Contact ARC Builders for custom homes, renovations, and commercial projects in Brisbane, Logan, Rochedale, and South East Queensland.",
  path: "/contact",
  keywords: ["contact home builder Brisbane", "get construction quote", "custom home consultation"],
  images: ["/projects/49-herbert-st/hero.webp"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

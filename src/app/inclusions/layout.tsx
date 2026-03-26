import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Build Inclusions and Pricing Clarity",
  description:
    "Review ARC Builders inclusion options, allowances, and upgrade selections for transparent project planning before construction starts.",
  path: "/inclusions",
  keywords: ["home build inclusions", "construction allowances", "transparent builder pricing"],
  images: ["/hero.webp"],
});

export default function InclusionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

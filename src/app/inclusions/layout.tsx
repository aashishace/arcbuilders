import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Client Project Selections",
  description:
    "Private ARC Builders project selections shared after enquiry review.",
  path: "/inclusions",
  keywords: ["private project selections", "client build selections", "arc builders client link"],
  images: ["/hero.webp"],
  noIndex: true,
});

export default function InclusionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

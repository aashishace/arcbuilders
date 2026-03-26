import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BlogListClient from "./BlogListClient";
import { getAllPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Building Blog and Insights",
  description:
    "Read ARC Builders insights on custom homes, Vastu design, NRI property planning, and construction guidance for Brisbane and South East Queensland.",
  path: "/blog",
  keywords: ["home building blog", "Vastu home Australia", "NRI property Queensland"],
  images: ["/projects/35-ayesha-place-calamvale/hero.webp"],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(/projects/35-ayesha-place-calamvale/hero.webp)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Insights & Education
          </p>
          <h1 className="mt-3 text-5xl font-light tracking-tight text-white md:text-6xl">
            Blog & <span className="text-accent">Insights</span>
          </h1>
          <p className="mt-4 max-w-xl font-sans text-base text-white/50">
            Expert advice on building, renovating, and making the most of your
            property investment in Queensland.
          </p>
        </div>
      </section>

      {/* Category filters + Posts */}
      <section className="bg-[#fafafa] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogListClient posts={posts} />
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}

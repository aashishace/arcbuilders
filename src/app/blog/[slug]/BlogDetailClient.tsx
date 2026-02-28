"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SocialShare from "@/components/SocialShare";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/lib/data";

export default function BlogDetailClient({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main>
        <Navbar />
        <section className="flex min-h-screen items-center justify-center bg-[#1a1a1a]">
          <div className="text-center">
            <h1 className="text-4xl font-light text-white">Article Not Found</h1>
            <Link
              href="/blog"
              className="mt-6 inline-block text-accent underline"
            >
              Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Build shareable URL
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://www.arcbuilders.com.au/blog/${post.slug}`;

  // Simple markdown-like rendering: convert ## headings, **bold**, paragraphs, and lists
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let listBuffer: string[] = [];

    const flushList = () => {
      if (listBuffer.length > 0) {
        elements.push(
          <ul
            key={`list-${elements.length}`}
            className="my-4 space-y-2 pl-4"
          >
            {listBuffer.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 font-sans text-base leading-relaxed text-[#1a1a1a]/60"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="font-semibold text-[#1a1a1a]">$1</strong>'
                    ).replace(
                      /\[(.*?)\]\((.*?)\)/g,
                      '<a href="$2" class="text-accent underline hover:text-accent/80">$1</a>'
                    ),
                  }}
                />
              </li>
            ))}
          </ul>
        );
        listBuffer = [];
      }
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      // List items
      if (trimmed.startsWith("- ")) {
        listBuffer.push(trimmed.slice(2));
        return;
      }

      flushList();

      if (trimmed === "") return;

      // H2
      if (trimmed.startsWith("## ")) {
        elements.push(
          <h2
            key={i}
            className="mt-10 mb-4 text-2xl font-light tracking-tight text-[#1a1a1a] md:text-3xl"
          >
            {trimmed.slice(3)}
          </h2>
        );
        return;
      }

      // H3
      if (trimmed.startsWith("### ")) {
        elements.push(
          <h3
            key={i}
            className="mt-8 mb-3 text-xl font-light tracking-tight text-[#1a1a1a]"
          >
            {trimmed.slice(4)}
          </h3>
        );
        return;
      }

      // Numbered list items
      if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <p
            key={i}
            className="my-2 flex items-start gap-2 font-sans text-base leading-relaxed text-[#1a1a1a]/60"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="font-semibold text-[#1a1a1a]">$1</strong>'
              ),
            }}
          />
        );
        return;
      }

      // Regular paragraph
      elements.push(
        <p
          key={i}
          className="my-4 font-sans text-base leading-relaxed text-[#1a1a1a]/60"
          dangerouslySetInnerHTML={{
            __html: trimmed
              .replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="font-semibold text-[#1a1a1a]">$1</strong>'
              )
              .replace(
                /\[(.*?)\]\((.*?)\)/g,
                '<a href="$2" class="text-accent underline hover:text-accent/80">$1</a>'
              ),
          }}
        />
      );
    });

    flushList();
    return elements;
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-4xl px-6 pb-12 lg:px-8">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 font-sans text-sm text-white/50 transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
            <span className="mb-3 block font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
              {post.category}
            </span>
            <h1 className="text-3xl font-light leading-tight tracking-tight text-white md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 font-sans text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Sidebar (sticky) */}
            <aside className="order-2 lg:order-1 lg:col-span-3">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Social share */}
                <SocialShare
                  url={shareUrl}
                  title={post.title}
                  excerpt={post.excerpt}
                />

                {/* Tags */}
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/40">
                    Tags
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 border border-[#1a1a1a]/5 px-3 py-1 font-sans text-[10px] text-[#1a1a1a]/40"
                      >
                        <Tag size={8} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <article className="order-1 lg:order-2 lg:col-span-9">
              <ScrollReveal>
                <div>{renderContent(post.content)}</div>
              </ScrollReveal>
            </article>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#fafafa] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-light tracking-tight text-[#1a1a1a]">
                Related <span className="text-accent">Articles</span>
              </h2>
              <div className="mt-2 h-[1px] w-12 bg-accent" />
            </ScrollReveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((related, i) => (
                <ScrollReveal key={related.id} delay={i * 0.1}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group block overflow-hidden bg-white transition-shadow duration-500 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={related.heroImage}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="50vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                        {related.category}
                      </span>
                      <h3 className="mt-2 text-lg font-light tracking-tight text-[#1a1a1a] transition-colors group-hover:text-accent">
                        {related.title}
                      </h3>
                      <span className="mt-3 font-sans text-xs text-[#1a1a1a]/30">
                        {related.readTime}
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
}

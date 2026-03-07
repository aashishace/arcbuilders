"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import type { BlogPost } from "@/lib/types";

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`border px-5 py-2 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === cat
                ? "border-accent bg-accent text-[#1a1a1a]"
                : "border-[#1a1a1a]/10 bg-white text-[#1a1a1a]/60 hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured post (first) */}
      {filtered.length > 0 && (
        <ScrollReveal className="mt-12">
          <Link
            href={`/blog/${filtered[0].slug}`}
            className="group grid overflow-hidden bg-white md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
              <Image
                src={filtered[0].heroImage}
                alt={filtered[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                {filtered[0].category}
              </span>
              <h2 className="mt-3 text-2xl font-light leading-tight tracking-tight text-[#1a1a1a] transition-colors group-hover:text-accent md:text-3xl">
                {filtered[0].title}
              </h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-[#1a1a1a]/50">
                {filtered[0].excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 font-sans text-xs text-[#1a1a1a]/30">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {new Date(filtered[0].date).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {filtered[0].readTime}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
                Read Article
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </ScrollReveal>
      )}

      {/* Post grid */}
      {filtered.length > 1 && (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(1).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden bg-white transition-shadow duration-500 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="bg-accent/90 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#1a1a1a]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 font-sans text-[10px] text-[#1a1a1a]/30">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {new Date(post.date).toLocaleDateString("en-AU", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-light leading-snug tracking-tight text-[#1a1a1a] transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-xs leading-relaxed text-[#1a1a1a]/40">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read More <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/lib/data";

const typeLabelMap: Record<string, string> = {
  "custom-home": "Custom",
  renovation: "Renovations",
  extension: "Extensions",
  duplex: "Duplex",
  commercial: "Commercial",
};

export default function ProjectsPage() {
  const projectTypes = Array.from(new Set(projects.map((project) => project.type)));
  const filters = [
    { label: "All Projects", value: "all" },
    ...projectTypes.map((type) => ({
      label: typeLabelMap[type] ?? type.replace(/-/g, " "),
      value: type,
    })),
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <main>
      <Navbar />

      {/* Hero banner */}
      <section className="relative flex h-[50vh] min-h-100 items-end overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(/projects/14-verona-st-pallara/hero.webp)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Portfolio
          </p>
          <h1 className="mt-3 text-5xl font-light tracking-tight text-white md:text-6xl">
            Our <span className="text-accent">Projects</span>
          </h1>
          <p className="mt-4 max-w-xl font-sans text-base text-white/50">
            Explore our portfolio of residential and commercial builds across
            Queensland.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-[#fafafa] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`rounded-full border px-5 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                  activeFilter === f.value
                    ? "border-accent bg-accent text-[#1a1a1a]"
                    : "border-[#1a1a1a]/15 bg-white text-[#1a1a1a]/65 hover:border-accent hover:text-accent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.08}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block overflow-hidden border border-[#1a1a1a]/8 bg-white"
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a]/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-lg font-light tracking-tight text-white">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-sans text-xs text-white/50">
                          {project.location}
                        </p>
                        <div className="mt-3 h-px w-0 bg-accent transition-all duration-500 group-hover:w-12" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 border border-[#1a1a1a]/10 bg-white p-10 text-center">
              <h3 className="text-2xl font-light tracking-tight text-[#1a1a1a]">No projects in this category yet</h3>
              <p className="mx-auto mt-3 max-w-lg font-sans text-sm text-[#1a1a1a]/60">
                We are currently curating projects in this segment. Reach out to discuss a similar build and we can share relevant case studies.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex border border-accent bg-accent px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#1a1a1a] transition-all duration-300 hover:bg-transparent hover:text-accent"
              >
                Discuss Your Project
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

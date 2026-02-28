"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Portfolio
              </p>
              <h2 className="mt-3 text-4xl font-light tracking-tight text-[#1a1a1a] md:text-5xl">
                Featured <span className="text-accent">Projects</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="group flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-wider text-[#1a1a1a] transition-colors hover:text-accent"
            >
              View All Projects
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Accent line */}
        <ScrollReveal delay={0.1}>
          <div className="mt-6 h-[1px] bg-gradient-to-r from-accent via-accent/20 to-transparent" />
        </ScrollReveal>

        {/* Project grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <Link href={`/projects/${project.slug}`} className="group relative block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Project info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <motion.div
                      className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0"
                    >
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                        {project.type.replace("-", " ")} · {project.location}
                      </p>
                      <h3 className="mt-2 text-2xl font-light tracking-tight text-white">
                        {project.title}
                      </h3>
                      <div className="mt-3 h-[1px] w-0 bg-accent transition-all duration-500 group-hover:w-16" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

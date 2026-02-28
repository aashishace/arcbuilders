"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Ruler, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/lib/data";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main>
        <Navbar />
        <section className="flex min-h-screen items-center justify-center bg-[#1a1a1a]">
          <div className="text-center">
            <h1 className="text-4xl font-light text-white">Project Not Found</h1>
            <Link href="/projects" className="mt-6 inline-block text-accent underline">
              Back to Projects
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
            <Link
              href="/projects"
              className="mb-6 inline-flex items-center gap-2 font-sans text-sm text-white/50 transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} />
              Back to Projects
            </Link>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {project.type.replace("-", " ")}
            </p>
            <h1 className="mt-3 text-4xl font-light tracking-tight text-white md:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project info + description */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Info sidebar */}
            <ScrollReveal variant="fadeLeft">
              <div className="border border-[#1a1a1a]/5 bg-[#fafafa] p-8">
                <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Project Details
                </h3>
                <ul className="space-y-5">
                  {[
                    { Icon: MapPin, label: "Location", value: project.location },
                    { Icon: Calendar, label: "Year", value: project.year },
                    {
                      Icon: Ruler,
                      label: "Scope",
                      value: project.scope || "Full build",
                    },
                    {
                      Icon: User,
                      label: "Architect",
                      value: project.architect || "ARC Design Studio",
                    },
                  ].map(({ Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <Icon size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                      <div>
                        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                          {label}
                        </p>
                        <p className="mt-0.5 font-sans text-sm text-[#1a1a1a]">
                          {value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-2">
              <h2 className="text-3xl font-light tracking-tight text-[#1a1a1a] md:text-4xl">
                About This <span className="text-accent">Project</span>
              </h2>
              <div className="mt-2 h-[1px] w-16 bg-accent" />
              <p className="mt-6 font-sans text-base leading-relaxed text-[#1a1a1a]/60">
                {project.description}
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#1a1a1a]/60">
                Every aspect of this project was carefully considered — from the initial
                consultation and transparent quoting through to construction and final
                handover. Our team ensured quality craftsmanship at every stage.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="bg-[#fafafa] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-light tracking-tight text-[#1a1a1a]">
              Project <span className="text-accent">Gallery</span>
            </h2>
            <div className="mt-2 h-[1px] w-16 bg-accent" />
          </ScrollReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {project.images.map((img, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} — Image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}

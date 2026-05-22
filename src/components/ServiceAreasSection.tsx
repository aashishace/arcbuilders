import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { localAreas } from "@/lib/local-areas";

const areaCards = localAreas.filter((area) =>
  ["brisbane-southside", "logan", "rochedale", "calamvale", "pallara", "greenbank", "eight-mile-plains", "mount-gravatt"].includes(area.slug)
);

export default function ServiceAreasSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Local Expertise
          </p>
          <h2 className="mt-3 text-4xl font-light tracking-tight text-[#1a1a1a] md:text-5xl">
            Custom Home Builder in <span className="text-accent">Brisbane & South East Queensland</span>
          </h2>
          <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-[#1a1a1a]/60">
            ARC Builders supports Indian-Australian and local families with custom homes, Vastu-aware planning,
            transparent pricing, and practical project delivery across South East Queensland.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areaCards.map((area, index) => (
            <ScrollReveal key={area.name} delay={index * 0.08}>
              <Link
                href={`/locations/${area.slug}`}
                className="block h-full border border-[#1a1a1a]/8 bg-[#fafafa] p-6 transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-lg"
              >
                <h3 className="font-sans text-lg font-semibold text-[#1a1a1a]">{area.name}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#1a1a1a]/60">{area.strengths[0]}</p>
                <span className="mt-5 inline-block font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  View Local Page
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex border border-accent bg-accent px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#1a1a1a] transition-all duration-300 hover:bg-transparent hover:text-accent"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex border border-[#1a1a1a]/20 px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/70 transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Book Consultation
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

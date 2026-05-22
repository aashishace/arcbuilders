import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { localAreas } from "@/lib/local-areas";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Service Areas for Custom Homes in Brisbane & South East Queensland",
  description:
    "Explore ARC Builders service areas for custom homes, renovations and premium family residences across Brisbane, Logan, Rochedale, Calamvale, Pallara, Greenbank and South East Queensland.",
  path: "/locations",
  keywords: [
    "custom home builder Brisbane Southside",
    "custom home builder Logan",
    "custom home builder Rochedale",
    "custom home builder Calamvale",
    "custom home builder South East Queensland",
  ],
  images: ["/projects/25-langford-st/hero.webp"],
});

export default function LocationsPage() {
  return (
    <main>
      <Navbar />

      <section className="relative flex h-[50vh] min-h-100 items-end overflow-hidden bg-[#f7f5ef]">
        <Image
          src="/projects/25-langford-st/hero.webp"
          alt="ARC Builders custom home service areas"
          fill
          className="object-cover opacity-18"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#f7f5ef] via-[#f7f5ef]/65 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Service Areas
          </p>
          <h1 className="mt-3 text-5xl font-light tracking-tight text-[#0a0a0a] md:text-6xl">
            Custom Homes Across <span className="text-accent">South East Queensland</span>
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#0a0a0a]/58">
            ARC Builders works with homeowners across Brisbane Southside, Logan and surrounding growth suburbs to plan and deliver clear, quality-first building projects.
          </p>
        </div>
      </section>

      <section className="bg-[#fafafa] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localAreas.map((area, index) => (
              <ScrollReveal key={area.slug} delay={index * 0.05}>
                <Link
                  href={`/locations/${area.slug}`}
                  className="group block h-full overflow-hidden border border-[#1a1a1a]/8 bg-white transition-all duration-300 hover:border-accent/40 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={area.heroImage}
                      alt={`${area.name} custom home builder`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                      {area.regionLabel}
                    </p>
                    <h2 className="mt-2 text-2xl font-light tracking-tight text-[#1a1a1a]">
                      {area.title}
                    </h2>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-[#1a1a1a]/58">
                      {area.intro}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection analyticsSource="locations_index_cta" />
      <Footer />
    </main>
  );
}

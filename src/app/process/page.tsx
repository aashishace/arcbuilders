import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { processSteps } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Building Process",
  description:
    "Understand ARC Builders' step-by-step process from consultation and design to construction and handover for projects in Brisbane and Logan.",
  path: "/process",
  keywords: ["home building process", "custom home timeline", "builder process Brisbane"],
  images: ["/projects/hi-def-project/hero.webp"],
});

export default function ProcessPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(/projects/hi-def-project/hero.webp)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            How We Work
          </p>
          <h1 className="mt-3 text-5xl font-light tracking-tight text-white md:text-6xl">
            Our <span className="text-accent">Process</span>
          </h1>
          <p className="mt-4 max-w-xl font-sans text-base text-white/50">
            Every ARC project follows a proven process that ensures transparency,
            quality, and your complete satisfaction.
          </p>
        </div>
      </section>

      {/* Detailed process */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 0.1}>
                <div
                  className={`grid gap-8 border-b border-[#1a1a1a]/5 py-16 lg:grid-cols-12 ${
                    i === 0 ? "pt-0" : ""
                  }`}
                >
                  {/* Step number */}
                  <div className="lg:col-span-2">
                    <span className="text-7xl font-light text-accent/20">
                      0{step.id}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-light tracking-tight text-[#1a1a1a]">
                      {step.title}
                    </h3>
                    <div className="mt-3 h-[1px] w-12 bg-accent" />
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-7">
                    <p className="font-sans text-base leading-relaxed text-[#1a1a1a]/60">
                      {step.description}
                    </p>

                    {/* Extra detail per step */}
                    {step.id === 1 && (
                      <ul className="mt-6 space-y-2">
                        {[
                          "Free initial consultation",
                          "Understanding your vision & requirements",
                          "Site assessment & feasibility",
                          "Budget discussion & guidance",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 font-sans text-sm text-[#1a1a1a]/50"
                          >
                            <span className="h-1 w-1 flex-shrink-0 bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.id === 2 && (
                      <ul className="mt-6 space-y-2">
                        {[
                          "Detailed architectural plans",
                          "Transparent upfront pricing — no hidden costs",
                          "Council approval management",
                          "Material selection & specifications",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 font-sans text-sm text-[#1a1a1a]/50"
                          >
                            <span className="h-1 w-1 flex-shrink-0 bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.id === 3 && (
                      <ul className="mt-6 space-y-2">
                        {[
                          "Experienced tradespeople & project management",
                          "Regular progress updates & site meetings",
                          "Quality assurance at every stage",
                          "On-time delivery commitment",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 font-sans text-sm text-[#1a1a1a]/50"
                          >
                            <span className="h-1 w-1 flex-shrink-0 bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.id === 4 && (
                      <ul className="mt-6 space-y-2">
                        {[
                          "Comprehensive quality inspection",
                          "Complete documentation and warranties",
                          "Full walkthrough and handover",
                          "Ongoing support & aftercare",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 font-sans text-sm text-[#1a1a1a]/50"
                          >
                            <span className="h-1 w-1 flex-shrink-0 bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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

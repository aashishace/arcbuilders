"use client";

import ScrollReveal from "./ScrollReveal";
import { processSteps } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              How We Work
            </p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-[#1a1a1a] md:text-5xl">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-[#1a1a1a]/50">
              From first conversation to final handover, every step is transparent,
              collaborative, and focused on your vision.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-accent/20 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, i) => (
              <ScrollReveal
                key={step.id}
                delay={i * 0.15}
                variant={i % 2 === 0 ? "fadeRight" : "fadeLeft"}
              >
                <div
                  className={`relative flex flex-col lg:flex-row ${
                    i % 2 === 0 ? "" : "lg:flex-row-reverse"
                  } items-center gap-8 lg:gap-0 ${i > 0 ? "lg:mt-16" : ""}`}
                >
                  {/* Content card */}
                  <div
                    className={`w-full lg:w-1/2 ${
                      i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <div className="border border-[#1a1a1a]/5 bg-[#fafafa] p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
                      <span className="font-sans text-5xl font-light text-accent/20">
                        0{step.id}
                      </span>
                      <h3 className="mt-2 font-sans text-xl font-semibold text-[#1a1a1a]">
                        {step.title}
                      </h3>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#1a1a1a]/50">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
                    <div className="flex h-12 w-12 items-center justify-center border-2 border-accent bg-white">
                      <span className="font-sans text-sm font-bold text-accent">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden w-1/2 lg:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

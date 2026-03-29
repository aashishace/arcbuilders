"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { companyInfo } from "@/lib/data";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#151515] py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,168,125,0.12),transparent_32%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal variant="fadeLeft">
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-[1.75rem]">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(/projects/3-stanley-st-mount-gravatt/hero.webp)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e]/55 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 right-4 rounded-[1.25rem] border border-accent/20 bg-[#111111] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:-right-8">
                <span className="text-5xl font-light text-accent">{companyInfo.experience}</span>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-white/40">
                  Years of<br />Excellence
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="relative z-10">
            <ScrollReveal variant="fadeRight">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                About ARC Builders
              </p>
              <h2 className="mt-4 text-4xl font-light leading-[1.2] tracking-tight text-white md:text-5xl">
                Custom Homes Built With
                <span className="block text-accent">Precision and Care</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <p className="mt-6 font-sans text-base leading-relaxed text-white/68">
                At ARC Builders, we bring over 18 years of experience delivering high-quality
                custom homes in Brisbane and South East Queensland. Our expert team is
                committed to exceptional customer service, offering a seamless and transparent
                building experience from design to completion.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-white/68">
                We specialise in custom home design, multi-generational homes, and
                Vastu-inspired home planning, creating functional, spacious homes tailored for
                modern families who value comfort, connection, and long-term living.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-white/68">
                With fixed pricing, transparent quotes, and no hidden costs, you can build
                with confidence knowing exactly what to expect. Unlike standard project
                builders, we offer fully customised home designs so your home reflects your
                lifestyle, preferences, and future needs.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.3}>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { label: "18+ Years", desc: "Experienced custom home delivery across Queensland" },
                  { label: "Transparent Quotes", desc: "Fixed pricing and clear scope without hidden costs" },
                  { label: "Custom Planning", desc: "Fully personalised homes for modern family living" },
                  { label: "Specialist Design", desc: "Multi-generational and Vastu-inspired home planning" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.25rem] border border-white/8 bg-white/3 p-5">
                    <h4 className="font-sans text-sm font-semibold text-white">
                      {item.label}
                    </h4>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-white/45">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.35}>
              <div className="mt-8 rounded-3xl border border-accent/20 bg-accent/10 p-5">
                <p className="font-sans text-sm leading-relaxed text-white/78">
                  ARC Builders - trusted custom home builders in Queensland, delivering
                  personalised homes with precision, quality, and a difference.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.4}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-3 font-sans text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-white"
              >
                Learn More About Us
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

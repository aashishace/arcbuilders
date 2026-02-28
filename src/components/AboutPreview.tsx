"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { companyInfo } from "@/lib/data";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] py-24 lg:py-32">
      {/* Gold accent decoration */}
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left image block */}
          <ScrollReveal variant="fadeLeft">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80)",
                  }}
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 border border-accent/20 bg-[#111111] p-8 md:-right-12">
                <span className="text-5xl font-light text-accent">{companyInfo.experience}</span>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-white/40">
                  Years of<br />Excellence
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right content */}
          <div>
            <ScrollReveal variant="fadeRight">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                About ARC Builders
              </p>
              <h2 className="mt-4 text-4xl font-light leading-[1.2] tracking-tight text-white md:text-5xl">
                Entrust Your Vision
                <span className="block text-accent">To Our Team</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <p className="mt-6 font-sans text-base leading-relaxed text-white/50">
                At ARC Builders we have been in the industry for over 10 years, with an
                experienced team driven to deliver excellence in customer service. We
                provide transparent upfront pricing with no hidden costs.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-white/50">
                Unlike others that only provide set design and build, we customise our
                plans to reflect your unique vision. Builders with a difference.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { label: "Transparent Pricing", desc: "No hidden costs, upfront quotes" },
                  { label: "Custom Design", desc: "Tailored to your unique vision" },
                  { label: "Quality Builds", desc: "Highest standards of craftsmanship" },
                  { label: "On-Time Delivery", desc: "Reliable project timelines" },
                ].map((item) => (
                  <div key={item.label} className="border-l border-accent/30 pl-4">
                    <h4 className="font-sans text-sm font-semibold text-white">
                      {item.label}
                    </h4>
                    <p className="mt-1 font-sans text-xs text-white/40">{item.desc}</p>
                  </div>
                ))}
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

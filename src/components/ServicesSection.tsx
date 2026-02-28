"use client";

import Link from "next/link";
import {
  Home,
  Hammer,
  Expand,
  Building2,
  Gem,
  Building,
  Store,
  HeartPulse,
  Baby,
  Factory,
  LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { residentialServices, commercialServices } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Hammer,
  Expand,
  Building2,
  Gem,
  Building,
  Store,
  HeartPulse,
  Baby,
  Factory,
};

export default function ServicesSection() {
  const topServices = [...residentialServices.slice(0, 3), ...commercialServices.slice(0, 1)];

  return (
    <section className="relative bg-[#fafafa] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              What We Do
            </p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-[#1a1a1a] md:text-5xl">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-[#1a1a1a]/50">
              We design and build stylish residential and commercial buildings that
              suit your style, budget, and requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* Service cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group relative block overflow-hidden border border-[#1a1a1a]/5 bg-white p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-xl"
                >
                  {/* Gold accent top line */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                  <div className="flex h-12 w-12 items-center justify-center border border-accent/20 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-[#1a1a1a]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 font-sans text-lg font-semibold text-[#1a1a1a]">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#1a1a1a]/50">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more →
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View all */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex justify-center gap-4">
            <Link
              href="/residential"
              className="border border-[#1a1a1a] px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all duration-300 hover:border-accent hover:bg-accent hover:text-[#1a1a1a]"
            >
              Residential Services
            </Link>
            <Link
              href="/commercial"
              className="border border-[#1a1a1a]/20 px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]/60 transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Commercial Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

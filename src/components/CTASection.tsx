"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-8 h-[1px] bg-accent"
          />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Let&apos;s Build Together
          </p>
          <h2 className="mt-4 text-4xl font-light leading-[1.2] tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to Build Your
            <span className="block text-accent">Dream Home?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base text-white/50">
            Whether it&apos;s a custom home, renovation, or commercial project, our team
            delivers quality builds with transparent pricing and no hidden surprises.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group relative overflow-hidden border border-accent bg-accent px-10 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all duration-500"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-accent">
                Start Your Project
              </span>
              <div className="absolute inset-0 -translate-x-full bg-[#1a1a1a] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
            <a
              href="tel:0411878438"
              className="border border-white/20 px-10 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-white/70 transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Call 0411 878 438
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

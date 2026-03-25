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
              "url(/projects/3-brooklyn-st-spring-mountain/hero.webp)",
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
            <Link
              href="/inclusions"
              className="border border-accent/40 px-10 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-accent transition-all duration-300 hover:border-accent hover:bg-accent hover:text-[#1a1a1a]"
            >
              Build Inclusion Sheet
            </Link>
            <a
              href="https://wa.me/61411878438?text=Hi%20ARC%20Builders%2C%20I%27m%20interested%20in%20discussing%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#25D366]/40 bg-[#25D366] px-10 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#25D366]/90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

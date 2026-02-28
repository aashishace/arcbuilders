"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-[#1a1a1a] py-24 lg:py-32">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(198,168,125,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Testimonials
            </p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-white md:text-5xl">
              What Our <span className="text-accent">Clients</span> Say
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial carousel */}
        <div className="relative mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <Quote size={40} className="mx-auto text-accent/30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <p className="font-serif text-xl leading-relaxed text-white/70 italic md:text-2xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="font-sans text-base font-semibold text-accent">
                    {testimonials[current].name}
                  </p>
                  <p className="mt-1 font-sans text-sm text-white/40">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-accent hover:text-accent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-accent"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-accent hover:text-accent"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        videoRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          ref={videoRef}
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.1)",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-[#1a1a1a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 h-[1px] bg-accent"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent"
          >
            Aesthetic Residential & Commercial
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-3xl text-5xl font-light leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Building
            <span className="block font-normal text-accent"> Exceptional </span>
            Homes with Precision
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 max-w-lg font-sans text-base font-light leading-relaxed text-white/60 md:text-lg"
          >
            Custom homes, renovations, and architectural builds. Transparent
            pricing, superior craftsmanship, and a team that delivers.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="group relative overflow-hidden border border-accent bg-accent px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all duration-500"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-accent">
                View Projects
              </span>
              <div className="absolute inset-0 -translate-x-full bg-[#1a1a1a] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
            <Link
              href="/contact"
              className="group relative overflow-hidden border border-white/30 px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-white transition-all duration-500 hover:border-accent"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1a1a1a]">
                Start Your Project
              </span>
              <div className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 flex gap-12"
          >
            {[
              { value: "10+", label: "Years Experience" },
              { value: "200+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <span className="text-2xl font-light text-accent md:text-3xl">
                  {stat.value}
                </span>
                <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll
          </span>
          <ChevronDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

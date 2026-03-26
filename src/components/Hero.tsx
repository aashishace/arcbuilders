"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { companyInfo } from "@/lib/data";

function shouldUseStaticHeroMode() {
  if (typeof window === "undefined") {
    return false;
  }

  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return Boolean(connection?.saveData) || prefersReducedMotion;
}

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [useStaticHero, setUseStaticHero] = useState(shouldUseStaticHeroMode);

  useEffect(() => {
    if (useStaticHero) {
      return;
    }

    // Parallax effect on scroll
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        videoRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [useStaticHero]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background media with overlay */}
      <div className="absolute inset-0">
        <div ref={videoRef} className="h-full w-full" style={{ transform: "scale(1.1)" }}>
          {useStaticHero ? (
            <div
              className="h-full w-full"
              style={{
                backgroundImage: "url(/hero.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/videos/hero-langford-poster.jpg"
              aria-hidden="true"
              onError={() => setUseStaticHero(true)}
              className="h-full w-full object-cover"
            >
              <source src="/videos/hero-langford.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-[#1a1a1a]/80" />
        <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 pt-20 pb-12 sm:pt-24 md:pt-28 lg:px-8 [@media(max-height:760px)]:justify-start [@media(max-height:760px)]:pt-24 [@media(max-height:760px)]:pb-6">
        <div className="mx-auto w-full max-w-7xl">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:mb-6"
          >
            Aesthetic Residential & Commercial
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-3xl text-3xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building
            <span className="block font-normal text-accent"> Bespoke Homes with Precision </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-3 max-w-xl font-sans text-sm font-light leading-relaxed text-white/60 sm:mt-6 sm:text-base md:text-lg"
          >
            <span className="hidden sm:inline">
              Serving Brisbane, Logan, Rochedale, and South East Queensland with
              thoughtfully designed homes, transparent pricing, and quality-first construction.
            </span>
            <span className="sm:hidden">
              Serving Brisbane and South East Queensland with transparent pricing and quality-first construction.
            </span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-7 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
          >
            <Link
              href="/projects"
              className="group relative overflow-hidden border border-accent bg-accent px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all duration-500 sm:px-8 sm:py-3.5 sm:text-sm"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-accent">
                View Projects
              </span>
              <div className="absolute inset-0 -translate-x-full bg-[#1a1a1a] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border-b border-white/30 pb-1 font-sans text-xs font-semibold uppercase tracking-wider text-white/80 transition-all duration-300 hover:border-accent hover:text-accent sm:text-sm"
            >
              Talk To Our Team
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-8 hidden gap-6 sm:mt-10 sm:flex sm:gap-10 lg:mt-14 [@media(max-height:760px)]:hidden"
          >
            {[
              { value: companyInfo.experience, label: "Years of Industry Experience" },
              { value: "100+", label: "Successful Projects" },
              { value: "100%", label: "Happy Handovers" },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <span className="text-xl font-light text-accent md:text-3xl">
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
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block [@media(max-height:760px)]:hidden"
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

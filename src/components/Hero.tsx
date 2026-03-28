"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [useStaticHero, setUseStaticHero] = useState(shouldUseStaticHeroMode);

  useEffect(() => {
    if (useStaticHero) {
      return;
    }

    // Parallax effect on scroll
    const handleScroll = () => {
      if (mediaRef.current) {
        const scrollY = window.scrollY;
        mediaRef.current.style.transform = `translateY(${scrollY * 0.28}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [useStaticHero]);

  useEffect(() => {
    if (useStaticHero || !videoElementRef.current) {
      return;
    }

    const videoElement = videoElementRef.current;
    const applyPlaybackRate = () => {
      videoElement.playbackRate = 0.85;
    };

    applyPlaybackRate();
    videoElement.addEventListener("loadedmetadata", applyPlaybackRate);

    return () => videoElement.removeEventListener("loadedmetadata", applyPlaybackRate);
  }, [useStaticHero]);

  return (
    <section className="relative overflow-hidden bg-[#211d17] pb-6 pt-20 sm:pb-8 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,225,105,0.16),transparent_38%),linear-gradient(180deg,#2b251d_0%,#1d1914_24%,#efe6d8_100%)]" />
      <div className="relative mx-auto max-w-385 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-[#f4ead7] shadow-[0_40px_120px_rgba(11,9,5,0.34)]">
          <div className="grid min-h-[calc(100vh-7.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="relative z-10 flex bg-[linear-gradient(90deg,#fffdf8_0%,#fffdf8_84%,rgba(255,253,248,0.95)_92%,rgba(255,253,248,0.82)_100%)] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
              <div className="my-auto max-w-xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#b88e2d] sm:mb-6"
                >
                  Aesthetic Residential & Commercial
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="max-w-3xl text-4xl font-light leading-[0.98] tracking-tight text-[#171511] sm:text-5xl md:text-6xl xl:text-7xl"
                >
                  Building
                  <span className="block text-[#c89f43]">Bespoke Homes with Precision</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  className="mt-5 max-w-lg font-sans text-base leading-relaxed text-[#3e382f] sm:mt-7 sm:text-lg"
                >
                  Serving Brisbane and South East Queensland with thoughtfully designed homes,
                  transparent pricing, and quality-first construction.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.85 }}
                  className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
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
                    className="inline-flex items-center border-b border-[#171511]/20 pb-1 font-sans text-xs font-semibold uppercase tracking-wider text-[#171511]/80 transition-all duration-300 hover:border-accent hover:text-[#171511] sm:text-sm"
                  >
                    Talk To Our Team
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-10 grid gap-5 border-t border-[#171511]/10 pt-6 sm:grid-cols-3 sm:gap-6 lg:mt-14"
                >
                  {[
                    { value: companyInfo.experience, label: "Years of Industry Experience" },
                    { value: "100+", label: "Successful Projects" },
                    { value: "100%", label: "Happy Handovers" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-left">
                      <span className="text-2xl font-light text-[#1a1a1a] md:text-3xl">
                        {stat.value}
                      </span>
                      <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#5d564a]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="relative min-h-90 overflow-hidden lg:min-h-full">
              <div className="absolute inset-y-0 left-0 z-10 hidden w-32 bg-[linear-gradient(90deg,rgba(255,253,248,0.98)_0%,rgba(255,253,248,0.84)_18%,rgba(255,253,248,0.36)_52%,rgba(255,253,248,0)_100%)] lg:block" />
              <div className="absolute inset-y-0 left-0 z-10 hidden w-px bg-white/45 lg:block" />
              <div ref={mediaRef} className="h-full w-full" style={{ transform: "scale(1.03)" }}>
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
                    ref={videoElementRef}
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
              <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a]/18 via-transparent to-[#1a1a1a]/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

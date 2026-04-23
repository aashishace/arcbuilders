"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { companyInfo } from "@/lib/data";

const heroFallbackImage = "/projects/25-langford-st/hero.webp";

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [useStaticHero, setUseStaticHero] = useState(false);

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
    const videoElement = videoElementRef.current;

    if (!videoElement) {
      return;
    }

    const applyPlaybackRate = () => {
      videoElement.muted = true;
      videoElement.defaultMuted = true;
      videoElement.playbackRate = 0.85;
    };

    const attemptPlayback = () => {
      applyPlaybackRate();
      const playPromise = videoElement.play();
      if (playPromise) {
        playPromise
          .then(() => setUseStaticHero(false))
          .catch(() => setUseStaticHero(true));
      }
    };

    applyPlaybackRate();
    if (videoElement.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      attemptPlayback();
    }

    videoElement.addEventListener("loadedmetadata", applyPlaybackRate);
    videoElement.addEventListener("canplay", attemptPlayback);

    return () => {
      videoElement.removeEventListener("loadedmetadata", applyPlaybackRate);
      videoElement.removeEventListener("canplay", attemptPlayback);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pb-6 pt-20 sm:pb-8 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,143,0,0.08),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fbfbf8_42%,#f4f1ea_100%)]" />
      <div className="relative mx-auto max-w-385 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-black/6 bg-[#fbfaf7] shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
          <div className="grid min-h-[calc(100vh-7.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="relative z-10 flex bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_84%,rgba(255,255,255,0.95)_92%,rgba(255,255,255,0.82)_100%)] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
              <div className="my-auto max-w-xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:mb-6"
                >
                  Aesthetic Residential & Commercial
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="max-w-3xl text-4xl font-light leading-[0.98] tracking-tight text-[#0a0a0a] sm:text-5xl md:text-6xl xl:text-7xl"
                >
                  Building
                  <span className="block text-accent">Bespoke Homes with Precision</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  className="mt-5 max-w-lg font-sans text-base leading-relaxed text-[#0a0a0a]/62 sm:mt-7 sm:text-lg"
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
                    className="group relative overflow-hidden border border-accent bg-white px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-accent transition-all duration-500 hover:bg-accent/8 sm:px-8 sm:py-3.5 sm:text-sm"
                  >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0a0a0a]">
                      View Projects
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center border-b border-accent/35 pb-1 font-sans text-xs font-semibold uppercase tracking-wider text-accent transition-all duration-300 hover:border-[#0a0a0a]/20 hover:text-[#0a0a0a] sm:text-sm"
                  >
                    Talk To Our Team
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-10 grid gap-5 border-t border-black/8 pt-6 sm:grid-cols-3 sm:gap-6 lg:mt-14"
                >
                  {[
                    { value: companyInfo.experience, label: "Years of Industry Experience" },
                    { value: "100+", label: "Successful Projects" },
                    { value: "100%", label: "Happy Handovers" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-left">
                      <span className="text-2xl font-light text-[#0a0a0a] md:text-3xl">
                        {stat.value}
                      </span>
                      <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#0a0a0a]/48">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="relative min-h-90 overflow-hidden lg:min-h-full">
              <div className="absolute inset-y-0 left-0 z-10 hidden w-32 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.84)_18%,rgba(255,255,255,0.36)_52%,rgba(255,255,255,0)_100%)] lg:block" />
              <div className="absolute inset-y-0 left-0 z-10 hidden w-px bg-white/45 lg:block" />
              <div ref={mediaRef} className="h-full w-full" style={{ transform: "scale(1.03)" }}>
                {useStaticHero ? (
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `url(${heroFallbackImage})`,
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
                    preload="auto"
                    poster={heroFallbackImage}
                    aria-hidden="true"
                    onError={() => setUseStaticHero(true)}
                    className="h-full w-full object-cover"
                  >
                    <source src="/videos/hero-langford.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-white/8 via-transparent to-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

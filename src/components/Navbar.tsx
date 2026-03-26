"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, companyInfo } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const topNavLinks = navLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#1a1a1a]/95 py-2 shadow-lg backdrop-blur-md"
            : "bg-transparent py-3"
        )}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex shrink-0 items-center">
            <Image
              src="/logo-tight.webp"
              alt="ARC Builders"
              width={373}
              height={238}
              className={cn(
                "w-auto transition-all duration-500",
                scrolled ? "h-12 md:h-14" : "h-14 md:h-16"
              )}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 xl:flex">
            {topNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative whitespace-nowrap text-[13px] font-semibold uppercase tracking-widest text-white transition-colors hover:text-accent"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 items-center gap-4 xl:flex">
            <a
              href={`tel:${companyInfo.phone}`}
              className="hidden items-center gap-2 text-sm text-white/90 transition-colors hover:text-accent 2xl:flex"
            >
              <Phone size={14} />
              {companyInfo.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-none border border-accent bg-accent px-6 py-2.5 text-sm font-semibold tracking-wider text-[#1a1a1a] transition-all duration-300 hover:bg-transparent hover:text-accent"
            >
              START PROJECT
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 text-white xl:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-[#1a1a1a]/98 backdrop-blur-lg xl:hidden"
          >
            {topNavLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-light tracking-wider text-white transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-block border border-accent bg-accent px-8 py-3 text-sm font-semibold tracking-wider text-[#1a1a1a] transition-all duration-300 hover:bg-transparent hover:text-accent"
              >
                START YOUR PROJECT
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

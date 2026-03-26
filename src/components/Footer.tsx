"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { companyInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const validSocialLinks = [
    { Icon: Facebook, href: companyInfo.socials.facebook },
    { Icon: Instagram, href: companyInfo.socials.instagram },
    { Icon: Linkedin, href: companyInfo.socials.linkedin },
    { Icon: Youtube, href: companyInfo.socials.youtube },
  ].filter(({ href }) => href && href !== "#");

  const footerServices = [
    { label: "Custom Homes" },
    { label: "Renovations" },
    { label: "Extensions" },
    { label: "Granny Flats" },
    { label: "Shop Fitouts" },
    { label: "Medical Centres" },
    { label: "Build Inclusion Sheet", href: "/inclusions" },
  ];

  return (
    <footer className="relative bg-[#111111] text-white">
      {/* Gold accent line */}
      <div className="h-px bg-linear-to-r from-transparent via-accent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-tight.webp"
                alt="ARC Builders"
                width={373}
                height={238}
                className="h-16 w-auto"
                unoptimized
              />
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/50">
              {companyInfo.tagline}
            </p>
            {validSocialLinks.length > 0 && (
              <div className="mt-6 flex gap-4">
                {validSocialLinks.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.label}>
                  {service.href ? (
                    <Link
                      href={service.href}
                      className="font-sans text-sm text-white/50 transition-colors hover:text-accent"
                    >
                      {service.label}
                    </Link>
                  ) : (
                    <span className="font-sans text-sm text-white/50">{service.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span className="font-sans text-sm text-white/50">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="font-sans text-sm text-white/50 transition-colors hover:text-accent"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-accent" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="font-sans text-sm text-white/50 transition-colors hover:text-accent"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>

            {/* QBCC Licence Badge */}
            <div className="mt-8 border border-accent/20 bg-accent/5 p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck size={24} className="shrink-0 text-accent" />
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    QBCC Licensed Builder
                  </p>
                  <p className="mt-1 font-sans text-lg font-bold tracking-wider text-white">
                    {companyInfo.qbccLicence}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <p className="font-sans text-xs text-white/30">
              © {new Date().getFullYear()} {companyInfo.fullName}. All rights reserved.
            </p>
            <span className="hidden text-white/10 md:inline">|</span>
            <p className="font-sans text-xs text-white/30">
              QBCC Licence: <span className="font-semibold text-accent/70">{companyInfo.qbccLicence}</span>
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/30 transition-all duration-300 hover:border-accent hover:text-accent"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

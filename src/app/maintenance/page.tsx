import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { maintenanceDetails } from "@/lib/site-state";

export const metadata: Metadata = {
  title: "Launching Soon",
  description:
    "ARC Builders is temporarily offline while a refined new digital experience is being finalised.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function MaintenancePage() {
  const phoneHref = `tel:${companyInfo.phone.replace(/\s+/g, "")}`;
  const serviceNotes = [
    "Custom homes",
    "Renovations and extensions",
    "Commercial construction",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#17130f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,168,125,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(163,127,82,0.18),transparent_32%),linear-gradient(135deg,#18130e_0%,#221b14_48%,#120f0c_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-white/14 to-transparent" />
      <div className="absolute inset-y-0 right-[10%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8 lg:py-10">
        <header className="flex items-center justify-between gap-4">
          <Link href="/maintenance" className="inline-flex items-center">
            <Image
              src="/logo-tight.webp"
              alt="ARC Builders"
              width={168}
              height={70}
              priority
              className="h-auto w-[132px] sm:w-[156px]"
            />
          </Link>
          <div className="rounded-full border border-white/12 bg-white/6 px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            {maintenanceDetails.badge}
          </div>
        </header>

        <section className="my-auto grid items-center gap-14 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-16">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-accent/90">
              {maintenanceDetails.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {maintenanceDetails.title}
            </h1>
            <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-white/74 sm:text-lg">
              {maintenanceDetails.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {serviceNotes.map((note) => (
                <span
                  key={note}
                  className="rounded-full border border-white/12 bg-white/6 px-4 py-2 font-sans text-xs uppercase tracking-[0.18em] text-white/78"
                >
                  {note}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {maintenanceDetails.highlightItems.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="h-1.5 w-10 rounded-full bg-accent" />
                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/72">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#17130f] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Phone size={16} />
                Call {companyInfo.phone}
              </Link>
              <Link
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/14 bg-white/5 px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <Mail size={16} />
                Email Us
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/18 p-5">
                <div className="flex items-center gap-3 text-accent">
                  <Clock3 size={18} />
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em]">Timeline</p>
                </div>
                <p className="mt-3 font-serif text-2xl text-white">{maintenanceDetails.availability}</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/62">{maintenanceDetails.statusNote}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/18 p-5">
                <div className="flex items-center gap-3 text-accent">
                  <MapPin size={18} />
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em]">Office</p>
                </div>
                <p className="mt-3 font-serif text-2xl text-white">Eight Mile Plains</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/62">{companyInfo.address}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 top-10 hidden h-32 w-32 rounded-full border border-accent/40 lg:block" />
            <div className="absolute -right-6 bottom-12 hidden h-24 w-24 rounded-[1.75rem] border border-white/14 bg-white/6 backdrop-blur-sm lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1b1611] shadow-[0_30px_120px_rgba(0,0,0,0.4)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={maintenanceDetails.showcaseImage}
                  alt="ARC Builders showcase project"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,15,11,0.08)_0%,rgba(19,15,11,0.18)_38%,rgba(19,15,11,0.82)_100%)]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-accent/90">
                  Aesthetic Residential & Commercial Builders
                </p>
                <p className="mt-4 max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Built with precision, presented with restraint.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/28 px-4 py-2 font-sans text-xs uppercase tracking-[0.22em] text-white/74">
                  New digital experience in progress
                  <ArrowRight size={14} className="text-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

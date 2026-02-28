import {
  Home,
  Hammer,
  Expand,
  Building2,
  Gem,
  Building,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { residentialServices, projects } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Hammer,
  Expand,
  Building2,
  Gem,
  Building,
};

export default function ResidentialPage() {
  const residentialProjects = projects.filter(
    (p) => p.type !== "commercial"
  ).slice(0, 3);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Residential
          </p>
          <h1 className="mt-3 text-5xl font-light tracking-tight text-white md:text-6xl">
            Residential <span className="text-accent">Services</span>
          </h1>
          <p className="mt-4 max-w-xl font-sans text-base text-white/50">
            From custom homes to renovations and extensions, we tailor every
            project to your unique vision and budget.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#fafafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {residentialServices.map((service, i) => {
              const Icon = iconMap[service.icon] || Home;
              return (
                <ScrollReveal key={service.id} delay={i * 0.1}>
                  <div
                    id={service.href.split("#")[1]}
                    className="group border border-[#1a1a1a]/5 bg-white p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center border border-accent/20 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-[#1a1a1a]">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-6 font-sans text-xl font-semibold text-[#1a1a1a]">
                      {service.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-[#1a1a1a]/50">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Recent Work
            </p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-[#1a1a1a] md:text-5xl">
              Residential <span className="text-accent">Projects</span>
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {residentialProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                        {project.type.replace("-", " ")}
                      </p>
                      <h3 className="mt-1 text-lg font-light text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}

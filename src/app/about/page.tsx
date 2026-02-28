import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { companyInfo } from "@/lib/data";
import { Shield, Eye, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Our Story
          </p>
          <h1 className="mt-3 text-5xl font-light tracking-tight text-white md:text-6xl">
            About <span className="text-accent">ARC Builders</span>
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal variant="fadeLeft">
              <div className="relative">
                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80)",
                  }}
                />
                {/* Gold border accent */}
                <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-accent/20 -z-10" />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal variant="fadeRight">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  {companyInfo.fullName}
                </p>
                <h2 className="mt-4 text-3xl font-light leading-[1.2] tracking-tight text-[#1a1a1a] md:text-4xl">
                  Builders with a <span className="text-accent">Difference</span>
                </h2>
                <div className="mt-3 h-[1px] w-16 bg-accent" />
              </ScrollReveal>

              <ScrollReveal variant="fadeRight" delay={0.2}>
                <p className="mt-6 font-sans text-base leading-relaxed text-[#1a1a1a]/60">
                  At ARC Builders, we have been in the building industry for over 10
                  years, with an experienced team driven to deliver excellence in
                  customer service. We provide transparent upfront pricing with no
                  hidden costs.
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-[#1a1a1a]/60">
                  Transforming your plans into quality residential or commercial
                  buildings. Unlike others that only provide set design and build, we
                  customise our plans to reflect your unique vision.
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-[#1a1a1a]/60">
                  We are driven by a passion to deliver superior customer service,
                  delivering on time, with a team that builds to the highest quality
                  and finest details.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fadeRight" delay={0.3}>
                <div className="mt-8 flex gap-12">
                  {[
                    { value: companyInfo.experience, label: "Years Experience" },
                    { value: "200+", label: "Projects" },
                    { value: "100%", label: "Satisfaction" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <span className="text-3xl font-light text-accent">
                        {stat.value}
                      </span>
                      <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.15em] text-[#1a1a1a]/40">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#1a1a1a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                What Drives Us
              </p>
              <h2 className="mt-3 text-4xl font-light tracking-tight text-white md:text-5xl">
                Our <span className="text-accent">Values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Shield,
                title: "Transparency",
                description:
                  "Upfront pricing with no hidden costs. You know exactly what you're investing from day one.",
              },
              {
                Icon: Eye,
                title: "Attention to Detail",
                description:
                  "The finest details matter. Our team builds to the highest quality standards on every project.",
              },
              {
                Icon: Users,
                title: "Client First",
                description:
                  "We listen first, advise second. Your vision and goals are always at the centre of what we do.",
              },
              {
                Icon: Award,
                title: "Excellence",
                description:
                  "Driven to deliver superior customer service and quality craftsmanship, every single time.",
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="group border border-white/5 p-8 text-center transition-all duration-500 hover:border-accent/30">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center border border-accent/20 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-[#1a1a1a]">
                    <value.Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-sans text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/40">
                    {value.description}
                  </p>
                </div>
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { localAreas, getLocalArea } from "@/lib/local-areas";
import { projects } from "@/lib/data";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo";

export function generateStaticParams() {
  return localAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getLocalArea(slug);

  if (!area) {
    return createPageMetadata({
      title: "Service Area Not Found",
      description: "The requested ARC Builders service area could not be found.",
      path: `/locations/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: area.title,
    description: area.metaDescription,
    path: `/locations/${area.slug}`,
    keywords: [
      `custom home builder ${area.name}`,
      `home builder ${area.name}`,
      `renovation builder ${area.name}`,
      "custom home builder South East Queensland",
    ],
    images: [area.heroImage],
  });
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getLocalArea(slug);

  if (!area) {
    notFound();
  }

  const relatedProjects = area.projectSlugs
    .map((projectSlug) => projects.find((project) => project.slug === projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.title,
    description: area.metaDescription,
    areaServed: area.name,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    url: absoluteUrl(`/locations/${area.slug}`),
  };

  const faqItems = [
    {
      question: `Does ARC Builders build custom homes in ${area.name}?`,
      answer: `Yes. ARC Builders works with clients in ${area.name} and nearby South East Queensland suburbs on custom homes, renovations, extensions and premium family residences.`,
    },
    {
      question: `What makes ARC Builders a strong choice for ${area.name} homeowners?`,
      answer:
        "ARC Builders focuses on clear scope, transparent pricing conversations, quality workmanship and practical communication from consultation through to handover.",
    },
    {
      question: "Can ARC Builders help before plans are final?",
      answer:
        "Yes. Early builder input can help with buildability, budget alignment, site considerations and the practical decisions that affect the finished result.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: absoluteUrl("/locations"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: absoluteUrl(`/locations/${area.slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, faqSchema, breadcrumbSchema]) }}
      />
      <main>
        <Navbar />

        <section className="relative h-[62vh] min-h-[480px] overflow-hidden">
          <Image
            src={area.heroImage}
            alt={`${area.name} custom home builder by ARC Builders`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/48 via-[#0a0a0a]/18 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
              <p className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                <MapPin size={14} />
                {area.regionLabel}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-light tracking-tight text-white md:text-6xl">
                {area.title}
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/66">
                {area.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-8">
            <ScrollReveal className="lg:col-span-2">
              <h2 className="text-3xl font-light tracking-tight text-[#1a1a1a] md:text-4xl">
                Building in <span className="text-accent">{area.name}</span>
              </h2>
              <div className="mt-2 h-px w-16 bg-accent" />
              <p className="mt-6 font-sans text-base leading-relaxed text-[#1a1a1a]/60">
                {area.intro} Our process is designed for clients who want early clarity on design, scope, budget and construction pathway before they commit to the next stage.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#1a1a1a]/60">
                Explore nearby completed work below, then speak with ARC Builders about your block, preferred style, project timing and budget range.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft">
              <div className="border border-[#1a1a1a]/6 bg-[#fafafa] p-8">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Local Strengths
                </h3>
                <ul className="mt-6 space-y-4">
                  {area.strengths.map((strength) => (
                    <li key={strength} className="flex gap-3 font-sans text-sm leading-relaxed text-[#1a1a1a]/62">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-accent" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="bg-[#fafafa] py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <ScrollReveal>
                <h2 className="text-3xl font-light tracking-tight text-[#1a1a1a] md:text-4xl">
                  Relevant <span className="text-accent">Projects</span>
                </h2>
                <div className="mt-2 h-px w-16 bg-accent" />
              </ScrollReveal>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {relatedProjects.map((project, index) => (
                  <ScrollReveal key={project.slug} delay={index * 0.08}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block overflow-hidden bg-white transition-shadow duration-500 hover:shadow-xl"
                    >
                      <div className="relative aspect-4/3 overflow-hidden">
                        <Image
                          src={project.heroImage}
                          alt={`${project.title} in ${project.location}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                          {project.location}
                        </p>
                        <h3 className="mt-2 text-xl font-light tracking-tight text-[#1a1a1a]">
                          {project.title}
                        </h3>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-light tracking-tight text-[#1a1a1a] md:text-4xl">
                {area.name} Builder <span className="text-accent">FAQs</span>
              </h2>
              <div className="mt-2 h-px w-16 bg-accent" />
            </ScrollReveal>
            <div className="mt-10 divide-y divide-[#1a1a1a]/8 border-y border-[#1a1a1a]/8">
              {faqItems.map((item) => (
                <ScrollReveal key={item.question}>
                  <div className="py-6">
                    <h3 className="font-sans text-lg font-semibold text-[#1a1a1a]">
                      {item.question}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-[#1a1a1a]/60">
                      {item.answer}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection analyticsSource={`${area.slug}_location_cta`} />
        <Footer />
      </main>
    </>
  );
}

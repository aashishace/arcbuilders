import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutPreview from "@/components/AboutPreview";
import ServicesSection from "@/components/ServicesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import { companyInfo } from "@/lib/data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Home Builder Brisbane & South East Queensland | ARC Builders",
  description:
    "ARC Builders designs and builds custom homes, renovations and premium family residences with clear pricing across Brisbane, Logan, Rochedale and South East Queensland.",
  path: "/",
  keywords: [
    "custom home builder Brisbane",
    "custom home builder Brisbane Southside",
    "builder Logan Queensland",
    "custom home builder Rochedale",
    "custom home builder Calamvale",
    "custom home builder Pallara",
    "custom home builder Greenbank",
    "custom home builder Eight Mile Plains",
    "custom home builder Mount Gravatt",
    "custom home builder Bahrs Scrub",
    "custom home builder South East Queensland",
    "multi-generational home builder",
    "transparent pricing home builder",
  ],
  images: ["/hero.webp", "/logo-tight.webp"],
});

export default function HomePage() {
  const homeServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Home Design and Construction",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: companyInfo.name,
      url: absoluteUrl("/"),
      telephone: companyInfo.phone,
      areaServed: ["Brisbane", "Logan", "Rochedale", "South East Queensland"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServiceSchema) }}
      />
      <main>
        <Navbar />
        <Hero />
        <FeaturedProjects />
        <AboutPreview />
        <ServicesSection />
        <ServiceAreasSection />
        <ProcessTimeline />
        <TestimonialsSection />
        <CTASection analyticsSource="homepage_cta" />
        <Footer />
      </main>
    </>
  );
}

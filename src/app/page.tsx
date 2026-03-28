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
import { companyInfo } from "@/lib/data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Home Builder in Brisbane, Logan and South East Queensland",
  description:
    "ARC Builders designs and builds custom homes, Vastu-aware layouts, renovations, and multi-generational residences with transparent pricing across Brisbane and Logan.",
  path: "/",
  keywords: [
    "custom home builder Brisbane",
    "builder Logan Queensland",
    "Vastu compliant home builder",
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
      areaServed: ["Brisbane", "Logan", "South East Queensland"],
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
        <ProcessTimeline />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}


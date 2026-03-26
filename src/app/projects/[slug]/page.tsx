import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${project.title} | ARC Builders Project`,
    description: project.description,
    path: `/projects/${project.slug}`,
    keywords: [
      project.location,
      "custom home project",
      "design and build Queensland",
      project.type,
    ],
    images: [project.heroImage, ...project.images.slice(0, 2)],
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const locality = project.location.split(",")[0]?.trim() || project.location;
  const projectUrl = absoluteUrl(`/projects/${project.slug}`);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "House",
    name: project.title,
    description: project.description,
    image: [absoluteUrl(project.heroImage)],
    url: projectUrl,
    dateCreated: project.year,
    address: {
      "@type": "PostalAddress",
      addressLocality: locality,
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
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
        name: "Projects",
        item: absoluteUrl("/projects"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([projectSchema, breadcrumbSchema]) }}
      />
      <ProjectDetailClient slug={slug} />
    </>
  );
}

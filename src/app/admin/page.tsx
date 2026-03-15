"use client";

import { useEffect } from "react";

const cmsRepo =
  process.env.NEXT_PUBLIC_CMS_GITHUB_REPO || "aashishace/arcbuilders";

export default function AdminPage() {
  useEffect(() => {
    // Prevent CMS from auto-loading config.yml (avoids 404 with App Router)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CMS_MANUAL_INIT = true;

    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const CMS = (window as any).CMS;
      CMS.init({
        config: {
          backend: {
            name: "github",
            repo: cmsRepo,
            branch: "main",
            base_url: "https://arcbuilders.com.au",
            auth_endpoint: "/api/auth",
          },
          publish_mode: "editorial_workflow",
          media_folder: "public/uploads",
          public_folder: "/uploads",
          site_url: "https://arcbuilders.com.au",
          collections: [
            {
              name: "blog",
              label: "Blog Posts",
              folder: "content/blog",
              create: true,
              slug: "{{slug}}",
              extension: "md",
              format: "frontmatter",
              editor: { preview: false },
              fields: [
                { label: "Title", name: "title", widget: "string" },
                {
                  label: "Slug",
                  name: "slug",
                  widget: "string",
                  pattern: [
                    "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                    "Must be lowercase with hyphens only",
                  ],
                },
                { label: "Excerpt", name: "excerpt", widget: "text" },
                {
                  label: "Category",
                  name: "category",
                  widget: "select",
                  options: [
                    "Vastu & Design",
                    "Family Living",
                    "Building Process",
                    "Investment",
                    "Industry Insights",
                    "Renovation Tips",
                    "Sustainability",
                  ],
                },
                {
                  label: "Author",
                  name: "author",
                  widget: "string",
                  default: "ARC Builders Team",
                },
                {
                  label: "Date",
                  name: "date",
                  widget: "datetime",
                  format: "YYYY-MM-DD",
                  date_format: "DD/MM/YYYY",
                  time_format: false,
                },
                {
                  label: "Read Time",
                  name: "readTime",
                  widget: "string",
                  default: "5 min read",
                },
                { label: "Hero Image", name: "heroImage", widget: "image" },
                {
                  label: "Tags",
                  name: "tags",
                  widget: "list",
                  allow_add: true,
                },
                { label: "Body", name: "body", widget: "markdown" },
              ],
            },
          ],
        },
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
      }}
    />
  );
}

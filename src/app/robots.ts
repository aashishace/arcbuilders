import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { maintenanceModeEnabled } from "@/lib/site-state";

export default function robots(): MetadataRoute.Robots {
  if (maintenanceModeEnabled) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      host: siteConfig.url,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/auth/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

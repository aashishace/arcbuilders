import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { companyInfo } from "@/lib/data";
import { absoluteUrl, defaultKeywords, siteConfig } from "@/lib/seo";
import { maintenanceModeEnabled } from "@/lib/site-state";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ARC Builders | Custom Home Builder in Brisbane & South East Queensland",
    template: "%s | ARC Builders",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: defaultKeywords,
  authors: [{ name: companyInfo.fullName }],
  creator: companyInfo.fullName,
  publisher: companyInfo.fullName,
  category: "Construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ARC Builders | Custom Home Builder in Brisbane & South East Queensland",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [absoluteUrl("/hero.webp")],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARC Builders | Custom Home Builder in Brisbane & South East Queensland",
    description: siteConfig.description,
    images: [absoluteUrl("/hero.webp")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socialProfiles = Object.values(companyInfo.socials).filter((url) => url && url !== "#");
  const basePhone = companyInfo.phone.replace(/\s+/g, "");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: companyInfo.fullName,
    url: siteConfig.url,
    telephone: `+61${basePhone.replace(/^0/, "")}`,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.streetAddress,
      addressLocality: companyInfo.suburb,
      addressRegion: "QLD",
      postalCode: companyInfo.postcode,
      addressCountry: "AU",
    },
    areaServed: siteConfig.serviceAreas,
    image: absoluteUrl("/hero.webp"),
    logo: absoluteUrl("/logo-tight.webp"),
    sameAs: socialProfiles,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} Website`,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${dmSerif.variable} font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-white`}>
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
        {!maintenanceModeEnabled && <WhatsAppButton />}
        {!maintenanceModeEnabled && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([organizationSchema, websiteSchema]),
            }}
          />
        )}
      </body>
    </html>
  );
}


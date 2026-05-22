import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { commercialServices, companyInfo, residentialServices } from "@/lib/data";
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const formattedPhone = `+61${basePhone.replace(/^0/, "")}`;
  const serviceOffers = [...residentialServices, ...commercialServices].map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: siteConfig.serviceAreas,
      url: absoluteUrl(service.href),
    },
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: companyInfo.fullName,
    url: siteConfig.url,
    telephone: formattedPhone,
    email: companyInfo.email,
    identifier: {
      "@type": "PropertyValue",
      name: "QBCC Licence",
      value: companyInfo.qbccLicence,
    },
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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: formattedPhone,
      email: companyInfo.email,
      areaServed: "AU",
      availableLanguage: ["en"],
    },
    knowsAbout: [
      "Custom homes",
      "Home renovations",
      "Home extensions",
      "Multi-generational homes",
      "Duplex projects",
      "Commercial fitouts",
      "Medical centre construction",
      "Transparent construction pricing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ARC Builders services",
      itemListElement: serviceOffers,
    },
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
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
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${dmSerif.variable} font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-white`}>
        {gtmId && (
          <>
            <Script id="gtm-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: 'gtm.js', 'gtm.start': new Date().getTime() });
                (function(w,d,s,l,i){var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
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

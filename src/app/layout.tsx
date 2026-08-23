import type { Metadata } from "next";
import "./globals.css";

import { PageTransition } from "@/components/layout/PageTransition";
import { JsonLd } from "@/components/shared/JsonLd";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iobytes | Every byte engineered for impact",
    template: "%s | iobytes",
  },
  description:
    "We design, build, and ship custom software for B2B enterprises then stay accountable to the metrics that move your business.",
  keywords: [
    "enterprise software",
    "B2B technology",
    "custom software development",
    "ROI engineering",
    "software engineering firm",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "iobytes",
    title: "iobytes | Every byte engineered for impact",
    description: "We design, build, and ship custom software for B2B enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "iobytes Every byte engineered for impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iobytes | Every byte engineered for impact",
    description: "We design, build, and ship custom software for B2B enterprises.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "iobytes",
  url: siteUrl,
  logo: `${siteUrl}/iobytes-logo.png`,
  description:
    "Every byte engineered for impact. We design, build, and ship custom software for B2B enterprises.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BD",
  },
  sameAs: ["https://www.linkedin.com/company/io-bytes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to font origins for faster loading */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={organizationData} />
      </head>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

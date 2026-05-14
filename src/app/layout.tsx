import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { PageTransition } from "@/components/layout/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iobytes.io"),
  title: {
    default: "iobytes — The Outcome Engineering Firm",
    template: "%s | iobytes",
  },
  description: "We design, build, and ship custom software for B2B enterprises—then stay accountable to the metrics that move your business.",
  keywords: ["enterprise software", "B2B technology", "custom software development", "ROI engineering"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "iobytes",
    title: "iobytes — The Outcome Engineering Firm",
    description: "We design, build, and ship custom software for B2B enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "iobytes — The Outcome Engineering Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iobytes — The Outcome Engineering Firm",
    description: "We design, build, and ship custom software for B2B enterprises.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <title>iobytes</title>
      </head>
      <body className="antialiased min-h-screen">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

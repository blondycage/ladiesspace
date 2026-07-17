import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Ladies’ Space | A Community for Women to Connect, Grow and Flourish",
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Ladies’ Space | A Community for Women to Connect, Grow and Flourish",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/brand/social-preview.svg",
        width: 1200,
        height: 630,
        alt: "Ladies’ Space brand preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ladies’ Space | A Community for Women to Connect, Grow and Flourish",
    description: siteConfig.description,
    images: ["/brand/social-preview.svg"]
  },
  icons: {
    icon: "/brand/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: siteConfig.location,
    description: siteConfig.description
  };

  return (
    <html lang="en-GB" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {children}
        <Script
          id="organisation-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

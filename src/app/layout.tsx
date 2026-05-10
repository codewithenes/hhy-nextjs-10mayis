import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollToTop } from "@/components/ScrollToTop";
import { JsonLd, organizationJsonLd, localBusinessJsonLd, websiteJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hhygroup.com"),
  title: {
    default: "HHY Group — Global Private Label Food Manufacturer",
    template: "%s — HHY Group",
  },
  description:
    "HHY Group is a vertically integrated food manufacturer based in Türkiye, specializing in private label chocolate, nuts, protein bars, and snack production for global B2B partners.",
  keywords: [
    "private label food manufacturer",
    "contract manufacturing food",
    "chocolate manufacturer",
    "protein bar manufacturer",
    "nut supplier",
    "OEM food production",
    "private label chocolate",
    "food production Turkey",
    "B2B food manufacturer",
  ],
  authors: [{ name: "HHY Group" }],
  creator: "HHY Group",
  publisher: "HHY Group",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hhygroup.com",
    siteName: "HHY Group",
    title: "HHY Group — Global Private Label Food Manufacturer",
    description:
      "Vertically integrated food manufacturer — agriculture to finished product. Private label & OEM for global partners.",
    images: [
      {
        url: "/images/hhy-group-building.png",
        width: 1200,
        height: 630,
        alt: "HHY Group — Food Manufacturing Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HHY Group — Global Private Label Food Manufacturer",
    description:
      "Vertically integrated food manufacturer — agriculture to finished product. Private label & OEM for global partners.",
    images: ["/images/hhy-group-building.png"],
  },
  alternates: {
    canonical: "https://hhygroup.com",
    languages: {
      "en-US": "https://hhygroup.com",
      "tr-TR": "https://hhygroup.com/tr",
    },
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    "facebook-domain-verification": "YOUR_FB_VERIFICATION_CODE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1117" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1" role="main">
            {children}
          </main>
          <SiteFooter />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

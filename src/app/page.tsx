import type { Metadata } from "next";
import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "HHY Group — Global Private Label Food Manufacturer",
  description:
    "HHY Group is a vertically integrated food manufacturer in Türkiye. Private label chocolate, nuts, protein bars & snack production for global B2B partners.",
  alternates: {
    canonical: "https://hhygroup.com",
  },
  openGraph: {
    title: "HHY Group — Global Private Label Food Manufacturer",
    description:
      "Vertically integrated food production — agriculture to finished product. Private label & OEM for global partners.",
    url: "https://hhygroup.com",
    images: [{ url: "/images/hero-facility.jpg", width: 1200, height: 630, alt: "HHY Group Production Facility" }],
  },
};

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Home", url: "https://hhygroup.com" },
]);

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <HomePageClient lang="en" />
    </>
  );
}

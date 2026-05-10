import type { Metadata } from "next";
import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "HHY Group: vertically integrated food manufacturer in Türkiye with 10M+ m² farmland, chocolate & nut factories, exporting to 50+ countries since 1998.",
  alternates: {
    canonical: "https://hhygroup.com/about-us",
  },
  openGraph: {
    title: "About Us — HHY Group",
    description: "Our story, facilities, and production capabilities.",
    url: "https://hhygroup.com/about-us",
    images: [{ url: "/images/ender-chocolate-factory.webp", width: 1200, height: 630, alt: "HHY Group Production Facility" }],
  },
};

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Home", url: "https://hhygroup.com" },
  { name: "About Us", url: "https://hhygroup.com/about-us" },
]);

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <AboutUsClient lang="en" />
    </>
  );
}

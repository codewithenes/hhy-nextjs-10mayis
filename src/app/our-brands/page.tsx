import type { Metadata } from "next";
import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import OurBrandsClient from "./OurBrandsClient";

export const metadata: Metadata = {
  title: "Our Brands",
  description: "Explore HHY Group brands: Ender Chocolate, Dedem Kuruyemiş, SN4CK, Çerezshop, and HHY Agro.",
  alternates: {
    canonical: "https://hhygroup.com/our-brands",
  },
  openGraph: {
    title: "Our Brands — HHY Group",
    description: "Explore HHY Group brands: Ender Chocolate, Dedem Kuruyemiş, SN4CK, Çerezshop, and HHY Agro.",
    url: "https://hhygroup.com/our-brands",
    images: [{ url: "/images/choc-factory-gorsel.webp", width: 1200, height: 630, alt: "HHY Group Brands" }],
  },
};

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Home", url: "https://hhygroup.com" },
  { name: "Our Brands", url: "https://hhygroup.com/our-brands" },
]);

export default function OurBrandsPage() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <OurBrandsClient lang="en" />
    </>
  );
}

import type { Metadata } from "next";
import { JsonLd, createBreadcrumbJsonLd, privateLabelServiceJsonLd } from "@/components/JsonLd";
import PrivateLabelClient from "./PrivateLabelClient";

export const metadata: Metadata = {
  title: "Private Label & OEM Food Manufacturing",
  description: "End-to-end private label food manufacturing: chocolate, nuts, protein bars, snack products. BRC, ISO, HACCP certified. From concept to shelf-ready delivery.",
  alternates: {
    canonical: "https://hhygroup.com/private-label",
  },
  openGraph: {
    title: "Private Label & OEM — HHY Group",
    description: "Your brand. Our production infrastructure. End-to-end OEM food manufacturing.",
    url: "https://hhygroup.com/private-label",
    images: [{ url: "/images/chocolate-production-oem-private-label.webp", width: 1200, height: 630, alt: "HHY Group Private Label Manufacturing" }],
  },
};

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Home", url: "https://hhygroup.com" },
  { name: "Private Label", url: "https://hhygroup.com/private-label" },
]);

export default function PrivateLabelPage() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <JsonLd data={privateLabelServiceJsonLd} />
      <PrivateLabelClient lang="en" />
    </>
  );
}

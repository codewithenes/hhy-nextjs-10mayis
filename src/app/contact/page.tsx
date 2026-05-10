import type { Metadata } from "next";
import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact HHY Group's export team. Schedule facility visits, request specifications, or start a private label project in chocolate, nuts, or protein bars.",
  alternates: {
    canonical: "https://hhygroup.com/contact",
  },
  openGraph: {
    title: "Contact — HHY Group",
    description: "Contact HHY Group's export team.",
    url: "https://hhygroup.com/contact",
  },
};

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Home", url: "https://hhygroup.com" },
  { name: "Contact", url: "https://hhygroup.com/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <ContactClient lang="en" />
    </>
  );
}

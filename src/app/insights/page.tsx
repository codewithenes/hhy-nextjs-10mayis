import type { Metadata } from "next";
import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights",
  description: "Market reports, harvest calendars and export intelligence from our trade desk.",
  alternates: {
    canonical: "https://hhygroup.com/insights",
  },
  openGraph: {
    title: "Insights — HHY Group",
    description: "Market reports, harvest calendars and export intelligence from our trade desk.",
    url: "https://hhygroup.com/insights",
  },
};

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Home", url: "https://hhygroup.com" },
  { name: "Insights", url: "https://hhygroup.com/insights" },
]);

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <InsightsClient lang="en" />
    </>
  );
}

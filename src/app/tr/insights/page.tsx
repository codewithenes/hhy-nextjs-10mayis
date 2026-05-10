import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import InsightsClient from "../../insights/InsightsClient";

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Anasayfa", url: "https://hhygroup.com/tr" },
  { name: "Insights", url: "https://hhygroup.com/tr/insights" },
]);

export default function InsightsTr() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <InsightsClient lang="tr" />
    </>
  );
}

import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import PrivateLabelClient from "../../private-label/PrivateLabelClient";

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Anasayfa", url: "https://hhygroup.com/tr" },
  { name: "Private Label", url: "https://hhygroup.com/tr/private-label" },
]);

export default function PrivateLabelTr() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <PrivateLabelClient lang="tr" />
    </>
  );
}

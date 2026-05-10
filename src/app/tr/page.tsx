import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import HomePageClient from "../HomePageClient";

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Anasayfa", url: "https://hhygroup.com/tr" },
]);

export default function HomePageTr() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <HomePageClient lang="tr" />
    </>
  );
}

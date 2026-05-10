import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import AboutUsClient from "../../about-us/AboutUsClient";

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Anasayfa", url: "https://hhygroup.com/tr" },
  { name: "Hakkımızda", url: "https://hhygroup.com/tr/about-us" },
]);

export default function AboutUsTr() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <AboutUsClient lang="tr" />
    </>
  );
}

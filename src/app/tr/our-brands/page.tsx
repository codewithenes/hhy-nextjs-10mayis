import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import OurBrandsClient from "../../our-brands/OurBrandsClient";

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Anasayfa", url: "https://hhygroup.com/tr" },
  { name: "Markalarımız", url: "https://hhygroup.com/tr/our-brands" },
]);

export default function OurBrandsTr() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <OurBrandsClient lang="tr" />
    </>
  );
}

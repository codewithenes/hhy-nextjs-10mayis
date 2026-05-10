import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import ContactClient from "../../contact/ContactClient";

const breadcrumbData = createBreadcrumbJsonLd([
  { name: "Anasayfa", url: "https://hhygroup.com/tr" },
  { name: "İletişim", url: "https://hhygroup.com/tr/contact" },
]);

export default function ContactTr() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <ContactClient lang="tr" />
    </>
  );
}

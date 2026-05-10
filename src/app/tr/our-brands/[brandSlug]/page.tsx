import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRANDS, getBrandBySlug } from "@/data/brands";
import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import BrandDetailClient from "../../../our-brands/[brandSlug]/BrandDetailClient";

interface Props {
  params: Promise<{ brandSlug: string }>;
}

export async function generateStaticParams() {
  return BRANDS.map((brand) => ({
    brandSlug: brand.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return { title: "Marka Bulunamadı" };

  return {
    title: `${brand.tr.name} | HHY Group`,
    description: brand.tr.description,
    alternates: {
      canonical: `https://hhygroup.com/tr/our-brands/${brand.slug}`,
      languages: {
        "en-US": `https://hhygroup.com/our-brands/${brand.slug}`,
        "tr-TR": `https://hhygroup.com/tr/our-brands/${brand.slug}`,
      },
    },
    openGraph: {
      title: `${brand.tr.name} | HHY Group`,
      description: brand.tr.description,
      images: [brand.banner],
    },
  };
}

export default async function BrandDetailTr({ params }: Props) {
  const { brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);

  if (!brand) {
    notFound();
  }

  const breadcrumbData = createBreadcrumbJsonLd([
    { name: "Anasayfa", url: "https://hhygroup.com/tr" },
    { name: "Markalarımız", url: "https://hhygroup.com/tr/our-brands" },
    { name: brand.tr.name, url: `https://hhygroup.com/tr/our-brands/${brand.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <BrandDetailClient brand={brand} lang="tr" />
    </>
  );
}

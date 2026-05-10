import { BRANDS, getBrandBySlug } from "@/data/brands";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { JsonLd, createBreadcrumbJsonLd } from "@/components/JsonLd";
import BrandDetailClient from "./BrandDetailClient";

export async function generateStaticParams() {
  return BRANDS.map((brand) => ({
    brandSlug: brand.slug,
  }));
}

type Props = {
  params: Promise<{ brandSlug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const brand = getBrandBySlug(params.brandSlug);

  if (!brand) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: `${brand.en.name} | HHY Group`,
    description: brand.en.description,
    alternates: {
      canonical: `https://hhygroup.com/our-brands/${brand.slug}`,
      languages: {
        "en-US": `https://hhygroup.com/our-brands/${brand.slug}`,
        "tr-TR": `https://hhygroup.com/tr/our-brands/${brand.slug}`,
      },
    },
    openGraph: {
      title: `${brand.en.name} | HHY Group`,
      description: brand.en.description,
      url: `https://hhygroup.com/our-brands/${brand.slug}`,
      images: [{ url: brand.banner, width: 1200, height: 630, alt: brand.en.name }],
    },
  };
}

export default async function BrandDetailPage(props: Props) {
  const params = await props.params;
  const brand = getBrandBySlug(params.brandSlug);

  if (!brand) {
    notFound();
  }

  const breadcrumbData = createBreadcrumbJsonLd([
    { name: "Home", url: "https://hhygroup.com" },
    { name: "Our Brands", url: "https://hhygroup.com/our-brands" },
    { name: brand.en.name, url: `https://hhygroup.com/our-brands/${brand.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <BrandDetailClient brand={brand} lang="en" />
    </>
  );
}

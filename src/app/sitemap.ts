import { MetadataRoute } from "next";
import { BRANDS } from "@/data/brands";
import { ARTICLES } from "@/data/articles";

const BASE_URL = "https://hhygroup.com";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about-us", "/our-brands", "/private-label", "/contact", "/insights"];
  const trRoutes = ["/tr", "/tr/about-us", "/tr/our-brands", "/tr/private-label", "/tr/contact", "/tr/insights"];

  const mainPages = [...routes, ...trRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" || route === "/tr" ? 1 : 0.8,
  }));

  const brandPages = BRANDS.flatMap((brand) => [
    {
      url: `${BASE_URL}/our-brands/${brand.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/tr/our-brands/${brand.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  const insightPages = ARTICLES.flatMap((article) => [
    {
      url: `${BASE_URL}/insights/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/tr/insights/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
  ]);

  return [...mainPages, ...brandPages, ...insightPages];
}

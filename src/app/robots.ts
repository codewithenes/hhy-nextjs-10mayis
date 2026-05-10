import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // OpenAI GPTBot
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        // Anthropic Claude
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        // Google Extended (Gemini)
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        // Perplexity
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        // Common Crawl (used by many AI trainings)
        userAgent: "CCBot",
        allow: "/",
      }
    ],
    sitemap: "https://hhygroup.com/sitemap.xml",
  };
}

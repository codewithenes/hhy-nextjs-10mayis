import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createBreadcrumbJsonLd, createArticleJsonLd } from "@/components/JsonLd";
import { ARTICLES, getArticleBySlug } from "@/data/articles";
import ArticleDetailClient from "./ArticleDetailClient";

interface Props {
  params: Promise<{ articleId: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    articleId: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleId } = await params;
  const article = getArticleBySlug(articleId);

  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.en.title} | HHY Group`,
    description: `Market intelligence and industrial analysis: ${article.en.title}`,
    alternates: {
      canonical: `https://hhygroup.com/insights/${article.slug}`,
      languages: {
        "en-US": `https://hhygroup.com/insights/${article.slug}`,
        "tr-TR": `https://hhygroup.com/tr/insights/${article.slug}`,
      },
    },
    openGraph: {
      title: `${article.en.title} | HHY Group`,
      description: article.en.title,
      url: `https://hhygroup.com/insights/${article.slug}`,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { articleId } = await params;
  const article = getArticleBySlug(articleId);

  if (!article) {
    notFound();
  }

  const breadcrumbData = createBreadcrumbJsonLd([
    { name: "Home", url: "https://hhygroup.com" },
    { name: "Insights", url: "https://hhygroup.com/insights" },
    { name: article.en.title, url: `https://hhygroup.com/insights/${article.slug}` },
  ]);

  const articleJsonLd = createArticleJsonLd({
    title: article.en.title,
    description: article.en.title,
    url: `https://hhygroup.com/insights/${article.slug}`,
    image: "https://hhygroup.com/images/hhy-logo-w.png",
    datePublished: article.en.date,
  });

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <JsonLd data={articleJsonLd} />
      <ArticleDetailClient articleId={articleId} title={article.en.title} lang="en" />
    </>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createBreadcrumbJsonLd, createArticleJsonLd } from "@/components/JsonLd";
import { ARTICLES, getArticleBySlug } from "@/data/articles";
import ArticleDetailClient from "../../../insights/[articleId]/ArticleDetailClient";

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

  if (!article) return { title: "Makale Bulunamadı" };

  return {
    title: `${article.tr.title} | HHY Group`,
    description: `Pazar istihbaratı ve endüstriyel analiz: ${article.tr.title}`,
    alternates: {
      canonical: `https://hhygroup.com/tr/insights/${article.slug}`,
      languages: {
        "en-US": `https://hhygroup.com/insights/${article.slug}`,
        "tr-TR": `https://hhygroup.com/tr/insights/${article.slug}`,
      },
    },
    openGraph: {
      title: `${article.tr.title} | HHY Group`,
      description: article.tr.title,
      url: `https://hhygroup.com/tr/insights/${article.slug}`,
    },
  };
}

export default async function ArticleDetailTrPage({ params }: Props) {
  const { articleId } = await params;
  const article = getArticleBySlug(articleId);

  if (!article) {
    notFound();
  }

  const breadcrumbData = createBreadcrumbJsonLd([
    { name: "Anasayfa", url: "https://hhygroup.com/tr" },
    { name: "Insights", url: "https://hhygroup.com/tr/insights" },
    { name: article.tr.title, url: `https://hhygroup.com/tr/insights/${article.slug}` },
  ]);

  const articleJsonLd = createArticleJsonLd({
    title: article.tr.title,
    description: article.tr.title,
    url: `https://hhygroup.com/tr/insights/${article.slug}`,
    image: "https://hhygroup.com/images/hhy-logo-w.png",
    datePublished: article.tr.date,
  });

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <JsonLd data={articleJsonLd} />
      <ArticleDetailClient articleId={articleId} title={article.tr.title} lang="tr" />
    </>
  );
}

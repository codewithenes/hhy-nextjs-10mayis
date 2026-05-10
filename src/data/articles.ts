export interface ArticleContent {
  tag: string;
  title: string;
  date: string;
  read: string;
}

export interface Article {
  slug: string;
  en: ArticleContent;
  tr: ArticleContent;
}

export const ARTICLES: Article[] = [
  {
    slug: "turkiye-hazelnut-outlook-2026",
    en: { tag: "Market Report · Q1 2026", title: "Türkiye Hazelnut Outlook: Yield, Frost Risk and Export Forecast", date: "March 2026", read: "8 min" },
    tr: { tag: "Pazar Raporu · Q1 2026", title: "Türkiye Fındık Görünümü: Verim, Don Riski ve İhracat Tahmini", date: "Mart 2026", read: "8 dk" },
  },
  {
    slug: "harvest-calendar-manisa-2026",
    en: { tag: "Harvest Calendar", title: "2026 Manisa Harvest Windows by Variety", date: "February 2026", read: "5 min" },
    tr: { tag: "Hasat Takvimi", title: "2026 Manisa Çeşitlerine Göre Hasat Dönemleri", date: "Şubat 2026", read: "5 dk" },
  },
  {
    slug: "eu-aflatoxin-compliance-brief",
    en: { tag: "Regulatory Brief", title: "EU Aflatoxin Limits & Compliance Pathways for Bulk Importers", date: "January 2026", read: "12 min" },
    tr: { tag: "Mevzuat Özeti", title: "AB Aflatoksin Limitleri ve Toplu İthalatçılar için Uyum Yolları", date: "Ocak 2026", read: "12 dk" },
  },
  {
    slug: "container-freight-rates-2025",
    en: { tag: "Export Insight", title: "Container Freight Rates Mersin–Hamburg: 2025 Retrospective", date: "December 2025", read: "6 min" },
    tr: { tag: "İhracat Öngörüsü", title: "Mersin–Hamburg Konteyner Navlun Oranları: 2025 Retrospektif", date: "Aralık 2025", read: "6 dk" },
  },
  {
    slug: "cocoa-price-volatility-trends",
    en: { tag: "Market Report · Q4 2025", title: "Cocoa Price Volatility and Compound Chocolate Substitution Trends", date: "November 2025", read: "10 min" },
    tr: { tag: "Pazar Raporu · Q4 2025", title: "Kakao Fiyat Volatilitesi ve Kokolin İkame Trendleri", date: "Kasım 2025", read: "10 dk" },
  },
  {
    slug: "private-label-growth-emea",
    en: { tag: "Industry Analysis", title: "Private Label Growth in EMEA Confectionery — A 5-Year Review", date: "October 2025", read: "9 min" },
    tr: { tag: "Sektör Analizi", title: "EMEA Şekerleme Sektöründe Private Label Büyümesi — 5 Yıllık İnceleme", date: "Ekim 2025", read: "9 dk" },
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

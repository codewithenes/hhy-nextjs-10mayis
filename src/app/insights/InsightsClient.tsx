"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { translations, Language } from "@/translations";

export default function InsightsClient({ lang }: { lang: Language }) {
  const containerRef = useScrollReveal();
  const t = translations[lang];

  const getLocalizedHref = (href: string) => {
    if (lang === "tr") return `/tr${href === "/" ? "" : href}`;
    return href;
  };

  const ARTICLES = [
    { 
      slug: "turkiye-hazelnut-outlook-2026", 
      tag: lang === "tr" ? "Pazar Raporu · Q1 2026" : "Market Report · Q1 2026", 
      title: lang === "tr" ? "Türkiye Fındık Görünümü: Verim, Don Riski ve İhracat Tahmini" : "Türkiye Hazelnut Outlook: Yield, Frost Risk and Export Forecast", 
      date: lang === "tr" ? "Mart 2026" : "March 2026", 
      read: lang === "tr" ? "8 dk" : "8 min" 
    },
    { 
      slug: "harvest-calendar-manisa-2026", 
      tag: lang === "tr" ? "Hasat Takvimi" : "Harvest Calendar", 
      title: lang === "tr" ? "Varyeteye Göre 2026 Manisa Hasat Dönemleri" : "2026 Manisa Harvest Windows by Variety", 
      date: lang === "tr" ? "Şubat 2026" : "February 2026", 
      read: lang === "tr" ? "5 dk" : "5 min" 
    },
    { 
      slug: "eu-aflatoxin-compliance-brief", 
      tag: lang === "tr" ? "Mevzuat Özeti" : "Regulatory Brief", 
      title: lang === "tr" ? "Dökme İthalatçılar İçin AB Aflatoksin Limitleri ve Uyumluluk Yolları" : "EU Aflatoxin Limits & Compliance Pathways for Bulk Importers", 
      date: lang === "tr" ? "Ocak 2026" : "January 2026", 
      read: lang === "tr" ? "12 dk" : "12 min" 
    },
    { 
      slug: "container-freight-rates-2025", 
      tag: lang === "tr" ? "İhracat İçgörüsü" : "Export Insight", 
      title: lang === "tr" ? "Mersin–Hamburg Konteyner Navlun Oranları: 2025 Retrospektifi" : "Container Freight Rates Mersin–Hamburg: 2025 Retrospective", 
      date: lang === "tr" ? "Aralık 2025" : "December 2025", 
      read: lang === "tr" ? "6 dk" : "6 min" 
    },
    { 
      slug: "cocoa-price-volatility-trends", 
      tag: lang === "tr" ? "Pazar Raporu · Q4 2025" : "Market Report · Q4 2025", 
      title: lang === "tr" ? "Kakao Fiyat Volatilitesi ve Kokolin İkame Trendleri" : "Cocoa Price Volatility and Compound Chocolate Substitution Trends", 
      date: lang === "tr" ? "Kasım 2025" : "November 2025", 
      read: lang === "tr" ? "10 dk" : "10 min" 
    },
    { 
      slug: "private-label-growth-emea", 
      tag: lang === "tr" ? "Sektör Analizi" : "Industry Analysis", 
      title: lang === "tr" ? "EMEA Şekerleme Sektöründe Private Label Büyümesi — 5 Yıllık İnceleme" : "Private Label Growth in EMEA Confectionery — A 5-Year Review", 
      date: lang === "tr" ? "Ekim 2025" : "October 2025", 
      read: lang === "tr" ? "9 dk" : "9 min" 
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-[var(--color-hhy-darker)] text-white pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-screen relative z-10">
          <div className="max-w-3xl fade-in-up">
            <span className="eyebrow">{lang === "tr" ? "İçgörüler" : "Insights"}</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tight leading-[1.05]">
              {lang === "tr" ? "Kaynağından" : "Market intelligence"}
              <br />
              <span className="text-[var(--color-hhy-on-dark-accent)]/90">{lang === "tr" ? "pazar istihbaratı." : "from the source."}</span>
            </h1>
            <p className="mt-5 text-white/50 max-w-xl text-base leading-relaxed">
              {lang === "tr" 
                ? "Üç aylık hasat tahminleri, ihracat kalitesinde fiyat analizi ve mevzuat özetleri — satın alma profesyonelleri için ticaret masamız tarafından yazıldı."
                : "Quarterly harvest forecasts, export-grade pricing analysis, and regulatory briefings — written by our trade desk for procurement professionals."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={getLocalizedHref(`/insights/${a.slug}`)}
                className="group bg-white rounded-2xl border border-[var(--color-hhy-border)] p-6 md:p-8 flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-[var(--color-hhy-accent)]/20 transition-all duration-400"
              >
                <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[var(--color-hhy-accent)]">
                  {a.tag}
                </span>
                <h2 className="font-display text-lg mt-4 tracking-tight leading-snug text-[var(--color-hhy-charcoal)] group-hover:text-[var(--color-hhy-accent)] transition-colors">
                  {a.title}
                </h2>
                <div className="mt-auto pt-8 border-t border-[var(--color-hhy-border)] flex justify-between items-center text-[11px] text-[var(--color-hhy-muted-text)]">
                  <span>{a.date}</span>
                  <span className="flex items-center gap-1">
                    {a.read} {lang === "tr" ? "okuma" : "read"}
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

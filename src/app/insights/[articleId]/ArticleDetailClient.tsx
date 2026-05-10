"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { translations, Language } from "@/translations";
import { ARTICLES } from "@/data/articles";

interface Props {
  articleId: string;
  title: string;
  lang: Language;
}

export default function ArticleDetailClient({ articleId, title, lang }: Props) {
  const containerRef = useScrollReveal();
  const t = translations[lang];

  const getLocalizedHref = (href: string) => {
    if (lang === "tr") return `/tr${href === "/" ? "" : href}`;
    return href;
  };

  return (
    <article className="bg-white min-h-screen" ref={containerRef}>
      <header className="bg-[var(--color-hhy-dark)] text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-screen">
          <Link href={getLocalizedHref("/insights")} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[var(--color-hhy-on-dark-accent)] hover:gap-3 transition-all mb-10 group font-bold">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            {lang === "tr" ? "İçeriklere Dön" : "Back to Insights"}
          </Link>
          <div className="max-w-4xl reveal">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/40 mb-6 font-bold">
              <span className="text-[var(--color-hhy-on-dark-accent)]">{lang === "tr" ? "Pazar Raporu" : "Market Report"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span>{lang === "tr" ? "20 Mart 2026" : "March 20, 2026"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span>{lang === "tr" ? "8 dk okuma" : "8 min read"}</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">{title}</h1>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-screen grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 reveal">
            <div className="prose prose-lg max-w-none prose-slate">
              <p className="text-xl md:text-2xl font-display leading-relaxed text-[var(--color-hhy-charcoal)] mb-10 font-medium">
                {lang === "tr" 
                  ? "Küresel pazarlar gelişen tedarik zinciri dinamiklerini takip ederken, Türkiye'deki tarım ve üretim sektörü esneklik ve stratejik büyüme göstermeye devam ediyor."
                  : "As global markets navigate evolving supply chain dynamics, the agricultural landscape in Türkiye continues to demonstrate resilience and strategic growth."}
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-hhy-charcoal)] mt-12 mb-6">
                {lang === "tr" ? "Pazar Dinamiklerine Giriş" : "Introduction to Market Dynamics"}
              </h2>
              <p className="text-[var(--color-hhy-tertiary)] leading-relaxed mb-8">
                {lang === "tr"
                  ? "2026'nın ilk çeyreği, gıda üretim sektörüne benzersiz zorluklar ve fırsatlar getirdi. Değişen iklim koşulları ve ticaret düzenlemeleriyle birlikte, endüstriyel alıcılar artık hem kalite hem de hacim garantisi verebilen, yüksek kapasiteli ortaklar arıyor."
                  : "The first quarter of 2026 has brought unique challenges and opportunities to the food production sector. With fluctuating climate conditions and shifting trade regulations, industrial buyers are increasingly looking for stable, high-capacity partners who can guarantee both quality and volume."}
              </p>

              <blockquote className="border-l-4 border-[var(--color-hhy-accent)] pl-8 py-4 my-10 text-xl italic text-[var(--color-hhy-charcoal)] font-medium bg-[var(--color-hhy-surface)] rounded-r-3xl">
                {lang === "tr"
                  ? '"Tedarik zinciri istikrarı artık bir lüks değil; küresel gıda güvenliği ve marka bütünlüğü için temel bir gerekliliktir."'
                  : '"Stability in supply chains is no longer a luxury; it\'s a fundamental requirement for global food security and brand integrity."'}
              </blockquote>

              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-hhy-charcoal)] mt-12 mb-6">
                {lang === "tr" ? "Teknik Özellikler ve Uyumluluk" : "Technical Specifications and Compliance"}
              </h2>
              <p className="text-[var(--color-hhy-tertiary)] leading-relaxed mb-8">
                {lang === "tr"
                  ? "HHY Group'un uluslararası standartlara bağlılığı sarsılmaz bir şekilde devam ediyor. Tesislerimiz BRC v9 gerekliliklerini aşmaya devam ederek, her bir çikolata ve işlenmiş kuruyemiş partisinin AB ve Kuzey Amerika pazarlarının titiz taleplerini karşılamasını sağlıyor."
                  : "HHY Group's commitment to international standards remains unwavering. Our facilities continue to exceed BRC v9 requirements, ensuring that every batch of chocolate and processed nuts meets the rigorous demands of the EU and North American markets."}
              </p>

              <ul className="space-y-4 text-[var(--color-hhy-tertiary)] mb-10 list-none p-0">
                {[
                  lang === "tr" ? "Tarladan fabrikaya ileri izlenebilirlik sistemleri." : "Advanced traceability systems from farm to factory.",
                  lang === "tr" ? "Besin yoğunluğunu korumak için iklim kontrollü depolama." : "Climate-controlled storage to preserve nutrient density.",
                  lang === "tr" ? "Maksimum hijyen için el değmeden otomatize paketleme hatları." : "Zero-touch automated packaging lines for maximum hygiene."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-hhy-accent)] mt-2.5 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-hhy-charcoal)] mt-12 mb-6">
                {lang === "tr" ? "Gelecek Öngörüsü: Q2 Tahmini" : "Looking Ahead: Q2 Forecast"}
              </h2>
              <p className="text-[var(--color-hhy-tertiary)] leading-relaxed text-lg">
                {lang === "tr"
                  ? "Yıl ortası hasat dönemine yaklaşırken, ilk göstergeler Manisa ve Ankara arazilerimizde fındık ve ceviz çeşitleri için güçlü bir verim sinyali veriyor. Ortaklarımıza, mevsimsel fiyat dalgalanmalarına karşı korunmak için hacim taahhütlerini erkenden netleştirmelerini öneriyoruz."
                  : "As we approach the mid-year harvest window, early indicators suggest a robust yield for hazelnut and walnut varieties across our Manisa and Ankara estates. We recommend our partners to finalize volume commitments early to hedge against seasonal price volatility."}
              </p>
            </div>

            <div className="mt-16 pt-10 border-t border-[var(--color-hhy-border)] flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-hhy-accent)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-hhy-accent)]">HHY</div>
              <div>
                <div className="text-base font-bold text-[var(--color-hhy-charcoal)]">HHY Group Trade Desk</div>
                <div className="text-sm text-[var(--color-hhy-tertiary)]">{lang === "tr" ? "İhracat İstihbarat Departmanı" : "Export Intelligence Division"}</div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8 reveal">
            <div className="p-8 rounded-3xl bg-[var(--color-hhy-surface)] border border-[var(--color-hhy-border)] hover:border-[var(--color-hhy-accent)]/30 transition-all duration-300">
              <h3 className="font-display text-xl font-bold mb-4 text-[var(--color-hhy-charcoal)]">{lang === "tr" ? "Veri Talebi" : "Request Data Sheet"}</h3>
              <p className="text-sm text-[var(--color-hhy-tertiary)] leading-relaxed mb-6">
                {lang === "tr" 
                  ? "Bu konuyla ilgili detaylı teknik özellikler veya uyumluluk raporları mı arıyorsunuz?" 
                  : "Looking for detailed technical specifications or compliance reports related to this topic?"}
              </p>
              <Link href={getLocalizedHref("/contact")} className="inline-flex items-center justify-center w-full px-6 py-4 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-xl hover:shadow-xl transition-all duration-300">
                {t.common.getInTouch}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="p-8 rounded-3xl border border-[var(--color-hhy-border)]">
              <h3 className="font-display text-xl font-bold mb-6 text-[var(--color-hhy-charcoal)]">{lang === "tr" ? "İlgili İçerikler" : "Related Insights"}</h3>
              <div className="space-y-6">
                {ARTICLES.filter(a => a.slug !== articleId).slice(0, 3).map((item) => (
                  <Link href={getLocalizedHref(`/insights/${item.slug}`)} key={item.slug} className="block group cursor-pointer border-b border-[var(--color-hhy-border)] last:border-0 pb-6 last:pb-0">
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-hhy-accent)] font-bold mb-2">{lang === "tr" ? "ANALİZ" : "ANALYSIS"}</div>
                    <h4 className="text-base font-bold text-[var(--color-hhy-charcoal)] group-hover:text-[var(--color-hhy-accent)] transition-colors leading-snug">{lang === "tr" ? item.tr.title : item.en.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}

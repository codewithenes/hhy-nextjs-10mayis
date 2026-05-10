"use client";

import Link from "next/link";
import Image from "next/image";
import { BRANDS } from "@/data/brands";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { translations, Language } from "@/translations";

const BRAND_COLORS: Record<string, string> = {
  "ender-chocolate": "#CD0004",
  "dedem-kuruyemis": "#000000",
  "sn4ck": "#4E62C9",
  "cerezshop": "#181850",
    "hhy-agro": "#276749",
};

export default function OurBrandsClient({ lang }: { lang: Language }) {
  const containerRef = useScrollReveal();
  const t = translations[lang];

  const getLocalizedHref = (href: string) => {
    if (lang === "tr") return `/tr${href === "/" ? "" : href}`;
    return href;
  };

  return (
    <div ref={containerRef}>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image 
            src="/images/choc-factory-gorsel.webp" 
            alt="" 
            fill 
            priority
            className="object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-hhy-dark)]/80 via-[var(--color-hhy-dark)]/70 to-[var(--color-hhy-dark)]/90" />
        </div>
        <div className="container-screen relative z-10">
          <div className="max-w-3xl fade-in-up">
            <span className="eyebrow">{t.brands.hero.label}</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tight leading-[1.05] text-white">
              {lang === "tr" ? "Çok markalı" : "Multi-brand"}
              <br />
              <span className="gradient-text-on-dark">{lang === "tr" ? "üretim ekosistemi." : "production ecosystem."}</span>
            </h1>
            <p className="mt-6 text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
              {lang === "tr" 
                ? "Her marka kendi pazar segmentinde faaliyet gösterir — birlikte HHY Group'un çikolata, kuruyemiş, atıştırmalık ve tarım alanındaki üretim kabiliyetinin genişliğini ve derinliğini sergilerler."
                : "Each brand operates in its own market segment — together, they showcase the breadth and depth of HHY Group's manufacturing capability across chocolate, nuts, snacks, and agriculture."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {BRANDS.map((brand) => {
              const color = BRAND_COLORS[brand.slug] || "#01d091";
              const brandData = lang === "tr" ? brand.tr : brand.en;
              
              return (
                <Link
                  key={brand.slug}
                  href={getLocalizedHref(`/our-brands/${brand.slug}`)}
                  className="group relative bg-white rounded-2xl border border-[var(--color-hhy-border)] overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-500"
                  style={{
                    '--brand-color': color,
                    '--brand-color-light': `${color}1a`
                  } as React.CSSProperties}
                >
                  {/* Banner */}
                  <div className="relative h-44 overflow-hidden">
                    <Image src={brand.banner} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${color}cc, ${color}33)` }} />
                    <div className="absolute bottom-4 left-5">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 inline-flex items-center justify-center">
                        <img src={brand.logo} alt={brandData.name} className="max-h-8 max-w-[120px] object-contain" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-[9px] uppercase tracking-[0.12em] font-bold text-white/80 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {brandData.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="font-display text-xl font-bold text-[var(--color-hhy-charcoal)]">{brandData.name}</h2>
                    <p className="mt-2 text-sm text-[var(--color-hhy-tertiary)] leading-relaxed line-clamp-3">{brandData.headline}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {brandData.capabilities.slice(0, 3).map(cap => (
                        <span key={cap} className="text-[10px] font-medium px-2 py-1 rounded-md bg-[var(--color-hhy-surface)] text-[var(--color-hhy-muted-text)]">{cap}</span>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-[var(--color-hhy-border)] flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--brand-color)]">
                        {t.common.exploreBrand}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[var(--brand-color-light)] flex items-center justify-center group-hover:bg-[var(--brand-color)] transition-colors duration-300">
                        <svg className="w-3 h-3 text-[var(--brand-color)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 rounded-2xl bg-white border border-[var(--color-hhy-border)]">
            <p className="text-sm text-[var(--color-hhy-tertiary)] max-w-xl">
              {lang === "tr" 
                ? "HHY Group markalarıyla private label, ihracat ortaklığı veya distribütörlük fırsatları mı arıyorsunuz?"
                : "Looking for private label, export partnership, or distribution opportunities with HHY Group brands?"}
            </p>
            <Link href={getLocalizedHref("/contact")} className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_16px_rgba(1,208,145,0.3)] transition-all shrink-0">
              {t.common.contactOurTeam}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brand, BRANDS } from "@/data/brands";
import { translations, Language } from "@/translations";

const BRAND_THEMES: Record<string, { color: string; gradient: string }> = {
  "ender-chocolate": {
    color: "#CD0004",
    gradient: "from-[#8B0003] via-[#CD0004] to-[#E01820]",
  },
  "dedem-kuruyemis": {
    color: "#000000",
    gradient: "from-[#000000] via-[#1A1A1A] to-[#2D2D2D]",
  },
  "sn4ck": {
    color: "#4E62C9",
    gradient: "from-[#3A4B9E] via-[#4E62C9] to-[#6E82D8]",
  },
  "cerezshop": {
    color: "#181850",
    gradient: "from-[#0C0C28] via-[#181850] to-[#242474]",
  },
  "hhy-agro": {
    color: "#276749",
    gradient: "from-[#1A4A33] via-[#276749] to-[#2F7D58]",
  },
};

export default function BrandDetailClient({ brand, lang }: { brand: Brand; lang: Language }) {
  const containerRef = useScrollReveal();
  const t = translations[lang];
  const brandData = lang === "tr" ? brand.tr : brand.en;
  const otherBrands = BRANDS.filter((b) => b.slug !== brand.slug);
  const theme = BRAND_THEMES[brand.slug] || {
    color: "#01d091",
    gradient: "from-[#01a070] via-[#01d091] to-[#30e0a0]",
  };

  const getLocalizedHref = (href: string) => {
    if (lang === "tr") return `/tr${href === "/" ? "" : href}`;
    return href;
  };

  return (
    <div ref={containerRef}>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-20 pb-0 overflow-hidden">
        {/* Background image + brand color overlay */}
        <div className="absolute inset-0">
          <Image
            src={brand.banner}
            alt=""
            fill
            priority
            className="object-cover scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${theme.color}e8 0%, ${theme.color}cc 50%, ${theme.color}f5 100%)`,
            }}
          />
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container-screen relative z-10">
          {/* Breadcrumb */}
          <Link
            href={getLocalizedHref("/our-brands")}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors mt-12 mb-16 group"
          >
            <svg
              className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {lang === "tr" ? "TÜM MARKALAR" : "ALL BRANDS"}
          </Link>

          {/* Brand identity block */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-16 pb-20">
            {/* Logo card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 flex items-center justify-center shadow-2xl shadow-black/20 shrink-0 relative h-32 w-48 md:h-40 md:w-64">
              <Image
                src={brand.logo}
                alt={brandData.name}
                fill
                className="object-contain p-6 md:p-8"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-[0.15em] font-semibold text-white/70 mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: theme.color }}
                />
                {brandData.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05]">
                {brandData.name}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed">
                {brandData.headline}
              </p>
            </div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            className="w-full h-8 md:h-12"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48h1440V0C1200 40 960 48 720 48S240 40 0 0v48z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ═══ OVERVIEW ═══ */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Main overview */}
            <div className="lg:col-span-3">
              <span className="eyebrow">{lang === "tr" ? "Genel Bakış" : "Overview"}</span>
              <h2 className="font-display text-2xl md:text-4xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)] leading-snug">
                {brandData.about}
              </h2>
              <div className="mt-8 space-y-5">
                {brandData.content.map((paragraph: string, i: number) => (
                  <p
                    key={i}
                    className="text-[var(--color-hhy-tertiary)] leading-[1.85] text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Capabilities card */}
              <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-hhy-surface)] border border-[var(--color-hhy-border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${theme.color}15` }}
                  >
                    <svg
                      className="w-4 h-4"
                      style={{ color: theme.color }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-[0.12em] font-bold text-[var(--color-hhy-charcoal)]">
                    {lang === "tr" ? "Ürün Yetenekleri" : "Product Capabilities"}
                  </span>
                </div>
                <div className="space-y-3">
                  {brandData.capabilities.map((cap: string) => (
                    <div
                      key={cap}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[var(--color-hhy-border)] group hover:border-transparent hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: theme.color }}
                      />
                      <span className="text-sm font-medium text-[var(--color-hhy-charcoal)]">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category badge */}
              <div className="p-6 md:p-8 rounded-2xl border border-[var(--color-hhy-border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${theme.color}15` }}
                  >
                    <svg
                      className="w-4 h-4"
                      style={{ color: theme.color }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-[0.12em] font-bold text-[var(--color-hhy-charcoal)]">
                    {lang === "tr" ? "Kategori" : "Category"}
                  </span>
                </div>
                <p className="text-[var(--color-hhy-tertiary)] text-sm leading-relaxed">
                  {brandData.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={getLocalizedHref("/contact")}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 text-sm font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-[1.02]"
                style={{
                  backgroundColor: theme.color,
                  color: "#fff",
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {lang === "tr" ? `${brandData.name} Hakkında Bilgi Alın` : `Inquire About ${brandData.name}`}
              </Link>
              <a
                href={brand.website || "#"}
                target={brand.website ? "_blank" : undefined}
                rel={brand.website ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 text-sm font-bold rounded-2xl border border-[var(--color-hhy-border)] bg-white text-[var(--color-hhy-charcoal)] hover:bg-[var(--color-hhy-surface)] transition-all duration-300"
              >
                {lang === "tr" ? "Web Sitesini Ziyaret Et" : "Visit Website"}
                <svg className="w-4 h-4 text-[var(--color-hhy-muted-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BRAND CTA BANNER ═══ */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ backgroundColor: theme.color }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-screen relative z-10 text-center">
          <div className="reveal max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-white leading-tight">
              {lang === "tr" ? "Ürününüzü oluşturmaya hazır mısınız?" : "Ready to build your product"}
              <br />
              <span className="text-white/60">{lang === "tr" ? `${brandData.name} ile?` : `with ${brandData.name}?`}</span>
            </h2>
            <p className="mt-5 text-white/50 max-w-xl mx-auto leading-relaxed">
              {lang === "tr"
                ? "İster private label üretimine, ister OEM üretimine veya özel bir formülasyona ihtiyacınız olsun — ekibimiz projenizi görüşmeye hazır."
                : "Whether you need private label production, OEM manufacturing, or a custom formulation — our team is ready to discuss your project."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href={getLocalizedHref("/contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sm font-bold rounded-full hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-all duration-300"
                style={{ color: theme.color }}
              >
                {lang === "tr" ? "Bir Görüşme Başlatın" : "Start a Conversation"}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href={getLocalizedHref("/private-label")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {lang === "tr" ? "Private Label Süreci" : "Private Label Process"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OTHER BRANDS ═══ */}
      <section className="bg-white section-padding">
        <div className="container-screen">
          <div className="reveal text-center mb-12">
            <span className="eyebrow">{lang === "tr" ? "Daha Fazlasını Keşfedin" : "Explore More"}</span>
            <h2 className="font-display text-2xl md:text-4xl mt-3 tracking-tight text-[var(--color-hhy-charcoal)]">
              {lang === "tr" ? "Diğer HHY Group Markaları" : "Other HHY Group Brands"}
            </h2>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {otherBrands.map((b) => {
              const bTheme = BRAND_THEMES[b.slug] || {
                color: "#01d091",
              };
              const bData = lang === "tr" ? b.tr : b.en;
              return (
                <Link
                  key={b.slug}
                  href={getLocalizedHref(`/our-brands/${b.slug}`)}
                  className="group bg-[var(--color-hhy-surface)] rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 border border-[var(--color-hhy-border)] hover:border-transparent hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
                >
                  <div className="h-12 flex items-center justify-center relative w-full">
                    <Image
                      src={b.logo}
                      alt={bData.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-semibold text-[var(--color-hhy-charcoal)] block">
                      {bData.name}
                    </span>
                    <span className="text-[10px] text-[var(--color-hhy-muted-text)] mt-0.5 block">
                      {bData.category}
                    </span>
                  </div>
                  <span
                    className="text-[9px] uppercase tracking-[0.12em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: bTheme.color }}
                  >
                    {lang === "tr" ? "Markayı Görüntüle" : "View Brand"} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

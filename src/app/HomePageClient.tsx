"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Counter } from "@/components/Counter";
import { BRANDS } from "@/data/brands";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CertLogos } from "@/components/CertLogos";
import { translations, Language } from "@/translations";

const PARTNERS = [
  { name: "Callebaut", logo: "/images/logos/partners/callebaut-chocolate-oem-private-label.png" },
  { name: "Tarim Kredi", logo: "/images/logos/partners/tarim-kredi-logo.png", scale: "scale-[1.1] md:scale-[1.4]" },
  { name: "Carrefour", logo: "/images/logos/partners/carrefour-logo.svg" },
  { name: "Migros", logo: "/images/logos/partners/migros-logo.jpg" },
  { name: "Lidl", logo: "/images/logos/partners/lidl-logo.webp" },
];

const CAPABILITIES = [
  { title: "Agriculture", desc: "10M+ m² of managed farmland — walnuts, olives, almonds, seedless grapes. Traceable from soil to supply.", img: "/images/agricultural-areas.webp" },
  { title: "Chocolate Manufacturing", desc: "Bars, filled chocolates, coated wafers, compound products. 42,000 m² facility with 11 active lines.", img: "/images/chocolate-factory-ender-chocolate.png" },
  { title: "Nut Processing", desc: "Raw, roasted, seasoned, coated, sauced nuts. Retail-ready packaging with full batch traceability.", img: "/images/sn4ck-seeds-product-factory.webp" },
  { title: "Protein & Functional Foods", desc: "Protein bars, snack bars, nut-based formats. Custom formulation for modern retail channels.", img: "/images/sn4ck-cashew-photo.webp" },
];

const PL_STEPS = [
  {
    n: "01",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    t: "Idea & Brief",
    d: "Product concept, target market, and initial specifications."
  },
  {
    n: "02",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 000 2.828l.596.596a2 2 0 002.828 0l2.387-2.387a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.158-.318a6 6 0 00.517-3.86L9.428 6.05a2 2 0 01.547-1.022l2.387-2.387a2 2 0 012.828 0l.596.596a2 2 0 010 2.828l-2.387 2.387a2 2 0 01-1.022.547l-2.387.477a6 6 0 01-3.86-.517l-.318-.158a6 6 0 00-3.86-.517L6.05 9.428a2 2 0 01-.547 1.022l-2.387 2.387" />
      </svg>
    ),
    t: "R&D Development",
    d: "Recipe formulation, sample iterations, shelf-life testing."
  },
  {
    n: "03",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    t: "Production",
    d: "Scaled manufacturing on dedicated, HACCP-controlled lines."
  },
  {
    n: "04",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    t: "Packaging",
    d: "Custom artwork integration, retail-ready formats."
  },
  {
    n: "05",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.654M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    t: "Distribution",
    d: "Export documentation, logistics coordination, global delivery."
  },
];

const CERTS = [
  { name: "BRC v9", Logo: CertLogos.BRC },
  { name: "ISO 22000", Logo: CertLogos.ISO22000 },
  { name: "ISO 9001", Logo: CertLogos.ISO9001 },
  { name: "HACCP", Logo: CertLogos.HACCP },
  { name: "Halal", Logo: CertLogos.Halal },
  { name: "Kosher", Logo: CertLogos.Kosher },
  { name: "IFS Food", Logo: CertLogos.IFS },
  { name: "SEDEX", Logo: CertLogos.SEDEX },
];

const BRAND_COLORS: Record<string, string> = {
  "ender-chocolate": "#CD0004",
  "dedem-kuruyemis": "#000000",
  "sn4ck": "#4E62C9",
  "cerezshop": "#181850",
  "hhy-agro": "#276749",
};

export default function HomePageClient({ lang }: { lang: Language }) {
  const containerRef = useScrollReveal();
  const [activeCap, setActiveCap] = React.useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const t = translations[lang];

  const CAPABILITIES = [
    { title: t.home.capabilities.items.agriculture.title, desc: t.home.capabilities.items.agriculture.desc, img: "/images/agricultural-areas.webp" },
    { title: t.home.capabilities.items.chocolate.title, desc: t.home.capabilities.items.chocolate.desc, img: "/images/chocolate-factory-ender-chocolate.png" },
    { title: t.home.capabilities.items.nuts.title, desc: t.home.capabilities.items.nuts.desc, img: "/images/sn4ck-seeds-product-factory.webp" },
    { title: t.home.capabilities.items.protein.title, desc: t.home.capabilities.items.protein.desc, img: "/images/sn4ck-cashew-photo.webp" },
  ];

  const getLocalizedHref = (href: string) => {
    if (lang === "tr") return `/tr${href === "/" ? "" : href}`;
    return href;
  };

  const CERTS = [
    { name: "BRC v9", Logo: CertLogos.BRC },
    { name: "ISO 22000", Logo: CertLogos.ISO22000 },
    { name: "ISO 9001", Logo: CertLogos.ISO9001 },
    { name: "HACCP", Logo: CertLogos.HACCP },
    { name: "Halal", Logo: CertLogos.Halal },
    { name: "Kosher", Logo: CertLogos.Kosher },
    { name: "IFS Food", Logo: CertLogos.IFS },
    { name: "SEDEX", Logo: CertLogos.SEDEX },
  ];

  return (
    <div ref={containerRef}>
      {/* ═══ HERO (IMAGE BASED) ═══ */}
      <section className="relative max-md:h-auto max-md:min-h-[max(70dvh,460px)] md:h-[80vh] md:min-h-[720px] flex items-start md:items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-facility.jpg" alt={t.home.heroTitle + " " + t.home.heroTitleAccent} fill priority className="w-full h-full object-cover scale-105 animate-[zoomOut_20s_linear_forwards]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-hhy-darker)]/90 via-[var(--color-hhy-dark)]/60 to-transparent" />
        </div>

        <div className="container-screen relative z-20 pt-28 md:pt-32 pb-44 md:pb-36">
          <div className="max-w-3xl fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-bold text-white">
              {t.home.heroTitle}
              <br />
              <span className="gradient-text-on-dark">{t.home.heroTitleAccent}</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              {t.home.heroDesc}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href={getLocalizedHref("/private-label")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-hhy-on-dark-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.4)] transition-all duration-300"
              >
                {t.common.explorePrivateLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link
                href={getLocalizedHref("/about-us")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-[var(--color-hhy-dark)] transition-all duration-300"
              >
                {t.common.visitOurFacilities}
              </Link>
            </div>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none border-t border-white/10 bg-[var(--color-hhy-darker)]/30 backdrop-blur-md">
          <div className="container-screen grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {[
              { v: 10, s: "M+ m²", l: t.home.metrics.farmland },
              { v: 100, s: "K+", l: t.home.metrics.tonsYear },
              { v: 50, s: "+", l: t.home.metrics.exportCountries },
              { v: 3, s: "", l: t.home.metrics.facilities },
            ].map((m: any, i: number) => (
              <div key={i} className="py-4 md:py-6 px-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-white">
                  <Counter to={m.v} /><span className="text-[var(--color-hhy-on-dark-accent)] text-lg ml-0.5">{m.s}</span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.1em] text-white/40 mt-0.5">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTRODUCTION (VIDEO SECTION) ═══ */}
      <section className="bg-white section-padding overflow-hidden">
        <div className="container-screen">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 reveal">
              <span className="eyebrow !text-[var(--color-hhy-muted-text)]">{t.home.whoWeAre.label}</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)] leading-[1.15]">
                {t.home.whoWeAre.title}
                <span className="text-[var(--color-hhy-muted-text)]">{t.home.whoWeAre.titleAccent}</span>
              </h2>
              <p className="mt-6 text-[var(--color-hhy-tertiary)] leading-relaxed max-w-lg">
                {t.home.whoWeAre.desc}
              </p>

              <div className="mt-8 space-y-4">
                {t.home.whoWeAre.features.map((item: string) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-[var(--color-hhy-charcoal)]">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[var(--color-hhy-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 reveal">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                <Image src="/images/video-thumb-image.png" fill alt={t.home.whoWeAre.title} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-500 ${isVideoPlaying ? 'opacity-0' : 'opacity-100 group-hover:bg-black/30'}`}>
                  <div className="w-20 h-20 rounded-full bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] flex items-center justify-center shadow-[0_0_50px_rgba(1,208,145,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z" /></svg>
                  </div>
                </div>

                {isVideoPlaying && (
                  <video
                    autoPlay
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                    onEnded={() => setIsVideoPlaying(false)}
                  >
                    <source src="/videos/eng-altyazili-hhy-group-tanitim-videosu.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal text-center mb-16">
            <span className="eyebrow">{t.home.partners.label}</span>
            <h2 className="text-[var(--color-hhy-muted-text)] mt-3">{t.home.partners.title}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-5 max-w-5xl mx-auto">
            {PARTNERS.map((p: any) => (
              <div
                key={p.name}
                className="reveal relative flex items-center justify-center w-[calc(33.33%-8px)] md:w-32 lg:w-40 p-4 md:p-6 bg-white rounded-xl border border-[var(--color-hhy-border)] hover:border-[var(--color-hhy-accent)]/30 hover:shadow-lg transition-all duration-500 h-16 md:h-20"
              >
                <Image src={p.logo} alt={p.name} fill className={`object-contain p-2 md:p-3 ${p.scale || ""}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="bg-[var(--color-hhy-dark)] section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-screen relative">
          <div className="reveal max-w-2xl mb-14">
            <span className="eyebrow">{t.home.capabilities.label}</span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-white">
              {t.home.capabilities.title}
              <br />
              <span className="gradient-text-on-dark">{t.home.capabilities.titleAccent}</span>
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed max-w-xl">
              {t.home.capabilities.desc}
            </p>
          </div>

          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 lg:items-stretch">
            {/* Left: tabs */}
            <div className="space-y-3 max-lg:order-2">
              {CAPABILITIES.map((cap, i) => (
                <button
                  key={cap.title}
                  onClick={() => setActiveCap(i)}
                  className={`w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-400 group border ${activeCap === i
                    ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-transparent"
                    : "bg-white/[0.03] border-white/10 hover:bg-white/[0.07] hover:border-white/20"
                    }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-1">
                      <h3 className={`font-display text-lg md:text-xl font-bold transition-colors ${activeCap === i ? "text-[var(--color-hhy-charcoal)]" : "text-white/80"
                        }`}>{cap.title}</h3>
                      {activeCap === i && (
                        <div className="fade-in-up">
                          <p className="mt-3 text-sm leading-relaxed text-[var(--color-hhy-tertiary)]">{cap.desc}</p>
                          
                          {/* Mobile-only image inside tab */}
                          <div className="mt-5 lg:hidden relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={cap.img}
                              alt={cap.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${activeCap === i ? "bg-[var(--color-hhy-on-dark-accent)] text-[var(--color-hhy-dark)] shadow-[0_0_20px_rgba(1,208,145,0.45)]" : "bg-white/10 text-white/40"
                      }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: image (Desktop only) */}
            <div className="hidden lg:block relative w-full shrink-0 overflow-hidden rounded-3xl shadow-2xl lg:min-h-[22rem] lg:h-full">
              {CAPABILITIES.map((cap, i) => (
                <Image
                  key={cap.title}
                  src={cap.img}
                  alt={cap.title}
                  fill
                  className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-700 ease-out ${activeCap === i ? "z-[1] opacity-100" : "z-0 opacity-0 pointer-events-none"
                    }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[var(--color-hhy-dark)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 z-[3]">
                <div className="glass-dark rounded-2xl px-6 py-4 inline-flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-hhy-on-dark-accent)] animate-pulse" />
                  <span className="text-sm font-bold tracking-wide text-white uppercase">{CAPABILITIES[activeCap].title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AGRO STRENGTH ═══ */}
      <section className="bg-[var(--color-hhy-surface)] py-16 md:py-20 lg:py-24">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col lg:max-w-xl xl:max-w-none order-2 lg:order-none">
              <span className="eyebrow">{t.home.agro.label}</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)] leading-[1.15]">
                {t.home.agro.title}
                <span className="text-[var(--color-hhy-muted-text)]">{t.home.agro.titleAccent}</span>
              </h2>
              <p className="mt-6 text-[15px] md:text-base text-[var(--color-hhy-tertiary)] leading-relaxed">
                {t.home.agro.desc}
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
                {t.home.agro.stats.map((s: any) => (
                  <div key={s.l} className="p-3.5 sm:p-4 rounded-xl bg-white border border-[var(--color-hhy-border)] shadow-sm">
                    <div className="text-lg sm:text-xl font-bold text-[var(--color-hhy-charcoal)]">{s.v}</div>
                    <div className="text-xs text-[var(--color-hhy-tertiary)] mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 w-full lg:pt-1 order-1 lg:order-none">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] ring-1 ring-black/[0.04]">
                  <Image src="/images/kalecik-farm.png" fill alt="Kalecik farmland" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] ring-1 ring-black/[0.04] sm:mt-10 lg:mt-12">
                  <Image src="/images/manisa-kula.png" fill alt="Kula Manisa farmland" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRIVATE LABEL (SOFT PITCH) ═══ */}
      <section className="bg-[var(--color-hhy-dark)] text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(1,208,145,0.3) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-screen relative">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow">{t.home.pl.label}</span>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4">
                {t.home.pl.title}
                <br />
                <span className="gradient-text-on-dark">{t.home.pl.titleAccent}</span>
              </h2>
              <p className="mt-5 text-white/55 leading-relaxed max-w-lg">
                {t.home.pl.desc}
              </p>
              <Link
                href={getLocalizedHref("/private-label")}
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-[var(--color-hhy-on-dark-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.4)] transition-all duration-300"
              >
                {t.common.explorePrivateLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="space-y-2">
              {t.home.pl.steps.map((s: any) => (
                <div key={s.n} className="group flex items-start gap-4 p-4 rounded-xl border border-white/6 hover:border-[var(--color-hhy-on-dark-accent)]/35 hover:bg-white/[0.03] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-hhy-on-dark-accent-soft)] flex items-center justify-center shrink-0 text-lg text-[var(--color-hhy-on-dark-accent)] group-hover:bg-[var(--color-hhy-on-dark-accent)]/20 transition-colors">
                    <span className="text-sm font-bold">{s.n}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[var(--color-hhy-on-dark-accent)] tracking-wider font-bold">{s.n}</span>
                      <h3 className="text-sm font-semibold text-white">{s.t}</h3>
                    </div>
                    <p className="text-xs text-white/40 mt-1 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">{t.home.quality.label}</span>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
                {t.home.quality.title}
                <br />
                <span className="text-[var(--color-hhy-muted-text)]">{t.home.quality.titleAccent}</span>
              </h2>
              <p className="mt-4 text-[var(--color-hhy-tertiary)] leading-relaxed max-w-lg">
                {t.home.quality.desc}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {CERTS.map((c) => (
                <div key={c.name} className="p-4 rounded-xl bg-white border border-[var(--color-hhy-border)] flex flex-col items-center justify-center aspect-square hover:border-[var(--color-hhy-accent)]/30 hover:scale-105 hover:shadow-[0_0_25px_rgba(1,208,145,0.2)] transition-all duration-400 group">
                  <div className="w-full h-full max-h-12 flex items-center justify-center">
                    <c.Logo />
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-[var(--color-hhy-tertiary)] mt-2 font-medium">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR BRANDS ═══ */}
      <section className="bg-[var(--color-hhy-dark)] section-padding">
        <div className="container-screen">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">{t.home.brands.label}</span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-white">
              {t.home.brands.title}
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              {t.home.brands.desc}
            </p>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
            {BRANDS.map((brand) => {
              const color = BRAND_COLORS[brand.slug] || "#01d091";
              const brandData = lang === "tr" ? brand.tr : brand.en;

              return (
                <Link
                  key={brand.slug}
                  href={getLocalizedHref(`/our-brands/${brand.slug}`)}
                  className="group relative p-4 md:p-6 rounded-2xl bg-white hover:scale-105 transition-all duration-500 overflow-hidden"
                  style={{
                    boxShadow: `0 10px 40px ${color}35`,
                    border: `1px solid ${color}25`,
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ boxShadow: `inset 0 0 30px ${color}15` }} />

                  <div className="relative z-10 flex flex-col items-center h-full">
                    <div className="relative h-12 md:h-16 flex items-center justify-center mb-4 md:mb-5 w-full">
                      <Image
                        src={brand.logo}
                        alt={brandData.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-display text-sm md:text-base font-bold text-center text-[var(--color-hhy-charcoal)]">{brandData.name}</h3>
                    <p className="text-[10px] md:text-[11px] text-center text-[var(--color-hhy-muted-text)] mt-1 mb-4 flex-grow">{brandData.category}</p>
                    <div className="mt-auto flex justify-center">
                      <span
                        className="text-[9px] md:text-[10px] uppercase tracking-[0.1em] font-semibold opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: color }}
                      >
                        {t.common.viewBrand} →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal max-w-4xl mx-auto text-center">
            <span className="eyebrow">{t.home.cta.label}</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
              {lang === "tr" ? (
                <>
                  Ölçek, tutarlılık ve tecrübe üzerine kurulu
                  <br />
                  bir üretim ortağıyla <span className="text-[var(--color-hhy-muted-text)]">iş birliği yapın.</span>
                </>
              ) : (
                <>
                  Collaborate with a manufacturing
                  <br />
                  partner built on <span className="text-[var(--color-hhy-muted-text)]">scale, consistency,</span>
                  <br />
                  <span className="text-[var(--color-hhy-muted-text)]">and experience.</span>
                </>
              )}
            </h2>
            <p className="mt-6 text-[var(--color-hhy-tertiary)] max-w-2xl mx-auto leading-relaxed">
              {t.home.cta.desc}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <Link href={getLocalizedHref("/contact")} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.35)] hover:scale-[1.02] transition-all duration-300">
                {t.home.cta.button}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href={getLocalizedHref("/about-us")} className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--color-hhy-border)] text-[var(--color-hhy-charcoal)] text-sm font-semibold rounded-full hover:bg-white hover:shadow-md transition-all duration-300">
                {t.common.visitOurFacilities}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

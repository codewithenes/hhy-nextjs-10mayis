"use client";

import Link from "next/link";
import Image from "next/image";
import { CertLogos } from "@/components/CertLogos";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { translations, Language } from "@/translations";

export default function PrivateLabelClient({ lang }: { lang: Language }) {
  const containerRef = useScrollReveal();
  const t = translations[lang];

  const getLocalizedHref = (href: string) => {
    if (lang === "tr") return `/tr${href === "/" ? "" : href}`;
    return href;
  };

  const STEPS = [
    { 
      n: "01", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ), 
      t: lang === "tr" ? "Brifing ve Gizlilik" : "Brief & NDA", 
      d: lang === "tr" ? "İlk kapsam belirleme, karşılıklı gizlilik sözleşmesi, ürün brifing alımı. Pazarınızı, hedef kitlenizi ve ürün vizyonunuzu anlıyoruz." : "Initial scoping, mutual NDA, product brief intake. We understand your market, target audience, and product vision." 
    },
    { 
      n: "02", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 000 2.828l.596.596a2 2 0 002.828 0l2.387-2.387a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.158-.318a6 6 0 00.517-3.86L9.428 6.05a2 2 0 01.547-1.022l2.387-2.387a2 2 0 012.828 0l.596.596a2 2 0 010 2.828l-2.387 2.387a2 2 0 01-1.022.547l-2.387.477a6 6 0 01-3.86-.517l-.318-.158a6 6 0 00-3.86-.517L6.05 9.428a2 2 0 01-.547 1.022l-2.387 2.387" />
        </svg>
      ), 
      t: lang === "tr" ? "Reçete Geliştirme" : "Recipe Development", 
      d: lang === "tr" ? "Ar-Ge ekibimiz tarafından numune formülasyonu, duyusal panel iterasyonu, beslenme profili ve raf ömrü doğrulaması." : "Sample formulation, sensory panel iteration, nutritional profiling, and shelf-life validation by our R&D team." 
    },
    { 
      n: "03", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ), 
      t: lang === "tr" ? "Pilot Deneme" : "Pilot Run", 
      d: lang === "tr" ? "Tam kalite dökümantasyonu, uyumluluk kontrolleri ve spesifikasyon finalizasyonu ile hedef hatta üretim öncesi parti." : "Pre-production batch on the target line with full quality documentation, compliance checks, and spec finalization." 
    },
    { 
      n: "04", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ), 
      t: lang === "tr" ? "Endüstriyel Üretim" : "Industrial Production", 
      d: lang === "tr" ? "HACCP kontrolü, parti izlenebilirliği ve ürününüz için özel hat tahsisi ile ölçekli üretim." : "Scaled production with HACCP control, batch traceability, and dedicated line allocation for your product." 
    },
    { 
      n: "05", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ), 
      t: lang === "tr" ? "Ambalaj ve Tasarım" : "Packaging & Artwork", 
      d: lang === "tr" ? "Hat spesifikasyonlarına entegre edilmiş şirket içi tasarım desteği veya sizin sağladığınız grafikler. Perakendeye hazır formatlar." : "In-house design support or your supplied artwork integrated to line specifications. Retail-ready formats." 
    },
    { 
      n: "06", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.654M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      t: lang === "tr" ? "Lojistik ve Teslimat" : "Logistics & Delivery", 
      d: lang === "tr" ? "Uluslararası siparişler için ihracat dökümantasyonu, gümrük koordinasyonu ve sevkiyat planlaması." : "Export documentation, customs coordination, and shipment planning for international orders." 
    },
  ];

  const CATEGORIES = [
    { 
      title: lang === "tr" ? "Çikolata ve Şekerleme" : "Chocolate & Confectionery", 
      desc: lang === "tr" ? "Üretim tesisimiz, ölçeklenebilir ve premium şekerleme üretimi için donatılmıştır. Markanızın benzersiz pazar konumlandırmasına uygun ürünler sunmak için özel reçete geliştirme, ileri kalıplama ve hassas kaplama teknolojileri sunuyoruz." : "Our manufacturing facility is equipped for scalable, premium confectionery production. We offer custom recipe development, advanced molding, and precise coating technologies to deliver products tailored to your brand's unique market positioning.", 
      img: "/images/chocolate-production-oem-private-label.webp", 
      items: lang === "tr" ? ["Tablet çikolatalar", "Dolgulu çikolatalar", "Kaplamalı gofretler", "Kokolin ürünler"] : ["Chocolate bars", "Filled chocolates", "Coated wafers", "Compound products"] 
    },
    { 
      title: lang === "tr" ? "Kuruyemiş ve Kuru Meyveler" : "Nuts & Dried Fruits", 
      desc: lang === "tr" ? "Doğrudan tarımsal tedarik ve işleme yeteneklerimizi kullanarak uçtan uca kuruyemiş ve kuru meyve imalatı sağlıyoruz. Tüm kavurma ve paketleme hatlarında tutarlı lezzet profilleri, optimum tazelik ve sıkı kalite kontrolü garanti ediyoruz." : "Leveraging our direct agricultural supply and processing capabilities, we provide end-to-end nut and dried fruit manufacturing. We ensure consistent flavor profiles, optimal freshness, and strict quality control across all roasting and packaging lines.", 
      img: "/images/nut-processing.png", 
      items: lang === "tr" ? ["Kavrulmuş kuruyemişler", "Soslu karışımlar", "Kaplamalı atıştırmalıklar", "Özel formülasyonlar"] : ["Roasted nuts", "Seasoned blends", "Coated snacks", "Mixed formulations"] 
    },
    { 
      title: lang === "tr" ? "Protein ve Atıştırmalık Barlar" : "Protein & Snack Bars", 
      desc: lang === "tr" ? "Modern tüketici yaşam tarzları için oluşturulmuş yenilikçi atıştırmalık formatları geliştiriyor ve üretiyoruz. Ar-Ge ekibimiz, tattan ödün vermeden tam diyet spesifikasyonlarını karşılayan fonksiyonel, beslenme odaklı barlar formüle etmek için sizinle yakın çalışır." : "We develop and manufacture innovative snack formats built for modern consumer lifestyles. Our R&D team works closely with you to formulate functional, nutrition-focused bars that meet exact dietary specifications without compromising on taste.", 
      img: "/images/sn4ck-box-hhy-logo-on-the-top.webp", 
      items: lang === "tr" ? ["Protein barları", "Atıştırmalık barlar", "Kuruyemiş bazlı barlar", "Fonksiyonel formatlar"] : ["Protein bars", "Snack bars", "Nut-based bars", "Functional formats"] 
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

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/hhy-personeller.webp" 
            alt="" 
            fill 
            priority
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-hhy-dark)]/80 via-[var(--color-hhy-dark)]/70 to-[var(--color-hhy-dark)]/90" />
        </div>
        <div className="container-screen relative z-10">
          <div className="max-w-3xl fade-in-up">
            <span className="eyebrow">{lang === "tr" ? "Private Label & OEM Üretimi" : "Private Label & OEM Manufacturing"}</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tight leading-[1.05] text-white">
              {lang === "tr" ? "Sizin Markanız." : "Your Brand."}
              <br />
              <span className="gradient-text-on-dark">{lang === "tr" ? "Bizim Üretim Gücümüz." : "Our Production Power."}</span>
            </h1>
            <p className="mt-6 text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
              {lang === "tr" 
                ? "HHY Group, dünya çapındaki perakendeciler, distribütörler ve markalar için çikolata, kuruyemiş, protein barları ve atıştırmalık ürünleri kapsayan, tam gizlilik koruması ve parti izlenebilirliği ile uçtan uca fason gıda üretimi sağlamaktadır."
                : "HHY Group provides end-to-end private label food manufacturing for retailers, distributors, and brands worldwide — covering chocolate, nuts, protein bars, and snack products with full NDA protection and batch traceability."}
            </p>
            <Link href={getLocalizedHref("/contact")} className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-[var(--color-hhy-on-dark-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.4)] transition-all">
              {t.pl.hero.button}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[var(--color-hhy-accent)]/5 pt-12 pb-20 md:pt-16 md:pb-28 border-y border-[var(--color-hhy-accent)]/10">
        <div className="container-screen">
          <div className="reveal max-w-2xl mb-14">
            <span className="eyebrow">{lang === "tr" ? "Süreç" : "The Process"}</span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
              {lang === "tr" ? "Altı aşamalı üretim ortaklığı." : "A six-stage production partnership."}
            </h2>
            <p className="mt-4 text-[var(--color-hhy-tertiary)] leading-relaxed">
              {lang === "tr" 
                ? "İlk brifingden küresel teslimata kadar her adım şeffaflık, kalite kontrolü ve marka spesifikasyonlarınız göz önünde bulundurularak yönetilir."
                : "From initial brief to global delivery — every step is managed with transparency, quality control, and your brand specifications in mind."}
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STEPS.map((s) => (
              <div key={s.n} className="group p-6 md:p-8 rounded-2xl border border-[var(--color-hhy-border)] hover:border-[var(--color-hhy-accent)]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] bg-white transition-all duration-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center text-lg group-hover:bg-[var(--color-hhy-accent)]/20 transition-colors">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-mono text-white bg-[var(--color-hhy-dark)] px-2 py-0.5 rounded-md tracking-wider font-bold">{s.n}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-hhy-charcoal)]">{s.t}</h3>
                <p className="mt-3 text-sm text-[var(--color-hhy-tertiary)] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">{lang === "tr" ? "Ürün Kategorileri" : "Product Categories"}</span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
              {lang === "tr" ? "Neler üretiyoruz?" : "What we manufacture."}
            </h2>
          </div>

          <div className="reveal space-y-6">
            {CATEGORIES.map((cat, i) => (
              <div key={cat.title} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[var(--color-hhy-border)] bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500">
                <div className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={cat.img} alt={cat.title} fill loading="lazy" className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-hhy-dark)]/40 to-transparent" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-mono text-[var(--color-hhy-accent)] tracking-wider font-bold">0{i + 1}</span>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-2 text-[var(--color-hhy-charcoal)]">{cat.title}</h3>
                  <p className="mt-3 text-[var(--color-hhy-tertiary)] leading-relaxed">{cat.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cat.items.map(item => (
                      <span key={item} className="px-3 py-1.5 text-[11px] font-semibold rounded-full bg-[var(--color-hhy-dark)] text-white/90 border border-white/5 hover:border-[var(--color-hhy-on-dark-accent)]/40 hover:shadow-[0_0_15px_rgba(1,208,145,0.12)] transition-all duration-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white section-padding">
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
                <div key={c.name} className="p-4 rounded-xl bg-[var(--color-hhy-surface)] border border-[var(--color-hhy-border)] flex flex-col items-center justify-center aspect-square hover:border-[var(--color-hhy-accent)]/30 hover:scale-105 hover:shadow-[0_0_25px_rgba(1,208,145,0.2)] transition-all duration-400 group">
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

      {/* CTA */}
      <section className="bg-[var(--color-hhy-dark)] text-white section-padding">
        <div className="container-screen text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight">
            {lang === "tr" ? (
              <>
                Ürün hattınızı oluşturmaya
                <br />
                <span className="gradient-text-on-dark">hazır mısınız?</span>
              </>
            ) : (
              <>
                Ready to build your
                <br />
                <span className="gradient-text-on-dark">product line?</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            {lang === "tr"
              ? "Ürün konseptinizi, hedef hacimlerinizi ve zaman çizelgenizi görüşmek için fason üretim ekibimizle iletişime geçin."
              : "Contact our private label team to discuss your product concept, target volumes, and timeline."}
          </p>
          <Link href={getLocalizedHref("/contact")} className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[var(--color-hhy-on-dark-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.4)] transition-all">
            {lang === "tr" ? "Private Label Projesini Başlat" : "Start Private Label Project"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

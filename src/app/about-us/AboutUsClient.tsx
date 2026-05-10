"use client";

import Link from "next/link";
import Image from "next/image";
import { Counter } from "@/components/Counter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { translations, Language } from "@/translations";

export default function AboutUsClient({ lang }: { lang: Language }) {
  const containerRef = useScrollReveal();
  const t = translations[lang];

  const getLocalizedHref = (href: string) => {
    if (lang === "tr") return `/tr${href === "/" ? "" : href}`;
    return href;
  };

  const TIMELINE = [
    { 
      year: "1998", 
      title: lang === "tr" ? "Stratejik Temel" : "Strategic Foundation", 
      desc: lang === "tr" ? "HHY Group, Ankara'da Türkiye'deki gıda tedarik zincirinde devrim yaratma vizyonuyla kuruldu. Temel emtia ticaretiyle başlayan şirket, küresel gıda sektöründe dikey olarak entegre bir güç haline gelecek olan yapının temellerini attı." : "HHY Group was established in Ankara with a vision to revolutionize the food supply chain in Türkiye. Starting with core commodity trading, the company laid the groundwork for what would become a vertically integrated powerhouse in the global food sector." 
    },
    { 
      year: "2005", 
      title: lang === "tr" ? "Endüstriyel Üretim Mükemmelliği" : "Industrial Manufacturing Excellence", 
      desc: lang === "tr" ? "Ender Çikolata fabrikasının açılışı, yüksek teknolojili üretime girişimizin işareti oldu. 42.000 m²'lik alan üzerine kurulu tesis, endüstriyel ölçekli şekerleme üretimi için yeni standartlar belirleyen 11 özel hat ile donatıldı." : "The launch of the Ender Chocolate factory marked our entry into high-tech manufacturing. Spanning 42,000 m², the facility was equipped with 11 specialized lines to produce premium chocolates and wafers, setting new standards for industrial-scale confectionery production." 
    },
    { 
      year: "2012", 
      title: lang === "tr" ? "Tarımsal Devrim" : "The Agricultural Revolution", 
      desc: lang === "tr" ? "Kalitenin kaynağında başladığının bilinciyle HHY Group, 10 milyon metrekareden fazla tarım arazisini bünyesine kattı. Kula ve Kalecik'teki bu stratejik adım, toprak sağlığından hasat tutarlılığına kadar ham madde kalitesi üzerinde tam kontrol sağladı." : "Recognizing that quality begins at the source, HHY Group acquired over 10 million square meters of managed farmland. This strategic move in Kula and Kalecik ensured total control over raw material quality, from soil health to harvest consistency." 
    },
    { 
      year: "2018", 
      title: lang === "tr" ? "İleri Kuruyemiş İşleme" : "Advanced Nut Processing", 
      desc: lang === "tr" ? "Kırıkkale'deki 10.000 m²'lik özel kuruyemiş işleme tesisimizle üretim ağımızı genişlettik. Bu tesis, ileri kavurma ve soslama teknolojilerini devreye alarak küresel premium atıştırmalık talebini karşılamamıza olanak sağladı." : "We expanded our manufacturing footprint with a dedicated 10,000 m² nut processing facility in Kırıkkale. This plant introduced advanced roasting and seasoned coating technologies, allowing us to serve the growing global demand for premium snack products." 
    },
    { 
      year: "2022", 
      title: lang === "tr" ? "Küresel İhracat Liderliği" : "Global Export Leadership", 
      desc: lang === "tr" ? "50'den fazla ülkedeki varlığıyla HHY Group, üst düzey bir küresel ihracatçı olarak konumunu sağlamlaştırdı. Dünyaca ünlü perakendecilerle ortaklık kurarak Türkiye'nin üretim mükemmelliğini küresel raflara taşıyan uçtan uca Private Label ve OEM çözümlerini hayata geçirdik." : "With a presence in over 50 countries, HHY Group solidified its position as a top-tier global exporter. We implemented end-to-end Private Label & OEM solutions, partnering with world-renowned retailers to bring Turkish production excellence to global shelves." 
    },
    { 
      year: "2024", 
      title: lang === "tr" ? "İnovasyon ve Fonksiyonel Gıdalar" : "Innovation & Functional Foods", 
      desc: lang === "tr" ? "SN4CK markasının lansmanı ve ABD pazarına girişimiz, fonksiyonel beslenmede yeni bir dönemi başlattı. Tarımsal mirasımızı modern Ar-Ge ile birleştirerek, protein barlar ve sağlık odaklı atıştırmalık inovasyonunda sektöre öncülük ediyoruz." : "The launch of the SN4CK brand and our entry into the US market marked a new era of functional nutrition. By combining our agricultural heritage with modern R&D, we are now leading the way in protein bars and health-conscious snack innovation." 
    },
  ];

  const SITES = [
    { 
      name: lang === "tr" ? "Çikolata Üretim Tesisi" : "Chocolate Manufacturing Facility", 
      role: lang === "tr" ? "Merkez ve Çikolata Üretimi" : "Headquarters & Chocolate Production", 
      size: "42,000 m²", 
      focus: lang === "tr" ? "Çikolata ve Gofretler" : "Chocolates & Wafers", 
      location: "Kahramankazan, Ankara", 
      img: "/images/ender-chocolate-factory.webp" 
    },
    { 
      name: lang === "tr" ? "Kuruyemiş İşleme Fabrikası" : "Nut Processing Factory", 
      role: lang === "tr" ? "Kavurma · Soslama · Paketleme" : "Roasting · Seasoning · Packaging", 
      size: "10,000 m²", 
      focus: lang === "tr" ? "Kuruyemiş ve Kuru Meyveler" : "Nuts & Dried Fruits", 
      location: "Balışeyh, Kırıkkale", 
      img: "/images/dedem-hhy-kirikkale.webp" 
    },
    { 
      name: lang === "tr" ? "Kula Tarımsal Operasyonlar" : "Kula Agricultural Operations", 
      role: lang === "tr" ? "Sürdürülebilir Tarım Arazileri ve Meyve Bahçeleri" : "Sustainable Farmland & Orchards", 
      size: "6,000,000 m²", 
      focus: lang === "tr" ? "Ceviz ve Zeytin" : "Walnuts & Olives", 
      location: "Kula, Manisa", 
      img: "/images/manisa-kula.png" 
    },
    { 
      name: lang === "tr" ? "Kalecik Tarımsal Operasyonlar" : "Kalecik Agricultural Operations", 
      role: lang === "tr" ? "Bağlar ve Tarım Arazileri" : "Vineyards & Farmland", 
      size: "4,200,000 m²", 
      focus: lang === "tr" ? "Badem ve Üzüm" : "Almonds & Grapes", 
      location: "Kalecik, Ankara", 
      img: "/images/kalecik-farm.png" 
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/hhy-group-building.png" 
            alt="HHY Group Building" 
            fill 
            priority
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-hhy-dark)]/80 via-[var(--color-hhy-dark)]/70 to-[var(--color-hhy-dark)]/90" />
        </div>
        <div className="container-screen relative z-10">
          <div className="max-w-3xl fade-in-up">
            <span className="eyebrow">{t.about.hero.label}</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tight leading-[1.05] text-white">
              {t.about.hero.title}
              <br />
              <span className="gradient-text-on-dark">{t.about.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
              {t.about.hero.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group p-8 md:p-10 rounded-2xl overflow-hidden border border-[var(--color-hhy-border)] bg-white">
              <Image 
                src="/images/ender-chocolate-factory.webp" 
                alt="" 
                fill 
                className="object-cover opacity-[0.07] group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="relative z-10">
                <span className="eyebrow text-[var(--color-hhy-accent)]">{t.about.mission.label}</span>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">{t.about.mission.title}</h3>
                <p className="mt-4 text-[var(--color-hhy-tertiary)] leading-relaxed">
                  {t.about.mission.desc}
                </p>
              </div>
            </div>
            <div className="relative group p-8 md:p-10 rounded-2xl overflow-hidden border border-[var(--color-hhy-border)] bg-white">
              <Image 
                src="/images/manisa-kula.png" 
                alt="" 
                fill 
                className="object-cover opacity-[0.07] group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="relative z-10">
                <span className="eyebrow text-[var(--color-hhy-tertiary)]">{t.about.vision.label}</span>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">{t.about.vision.title}</h3>
                <p className="mt-4 text-[var(--color-hhy-tertiary)] leading-relaxed">
                  {t.about.vision.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--color-hhy-surface)] pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container-screen">
          <div className="reveal text-center max-w-2xl mx-auto mb-20">
            <span className="eyebrow">{t.about.journey.label}</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
              {t.about.journey.title}
              <br />
              <span className="text-[var(--color-hhy-muted-text)]">{t.about.journey.titleAccent}</span>
            </h2>
          </div>
          <div className="reveal relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-hhy-border)]" />
            {TIMELINE.map((t, i) => (
              <div key={t.year} className={`relative flex items-start gap-8 mb-16 md:mb-24 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <div className="text-2xl font-display font-bold text-[var(--color-hhy-charcoal)]">{t.title}</div>
                  <p className="text-base text-[var(--color-hhy-tertiary)] mt-3 leading-relaxed">{t.desc}</p>
                </div>
                <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-[var(--color-hhy-muted-text)] flex items-center justify-center shrink-0 shadow-md group">
                  <span className="text-xs font-bold text-[var(--color-hhy-muted-text)] group-hover:scale-110 transition-transform">{t.year}</span>
                </div>
                <div className={`flex-1 md:${i % 2 === 0 ? "pl-12" : "pr-12"}`}>
                  <div className="md:hidden">
                    <div className="text-xl font-display font-bold text-[var(--color-hhy-charcoal)]">{t.title}</div>
                    <p className="text-sm text-[var(--color-hhy-tertiary)] mt-3 leading-relaxed">{t.desc}</p>
                  </div>
                  <div className="hidden md:block h-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-white pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="container-screen">
          <div className="reveal max-w-2xl mb-14">
            <span className="eyebrow">{t.about.operations.label}</span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
              {t.about.operations.title}
              <br />
              <span className="text-[var(--color-hhy-tertiary)]">{t.about.operations.titleAccent}</span>
            </h2>
          </div>

          <div className="space-y-6">
            {SITES.map((s, i) => (
              <div key={s.name} className="reveal group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[var(--color-hhy-border)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500">
                <div className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image 
                    src={s.img} 
                    alt={s.name} 
                    fill 
                    loading="lazy" 
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-hhy-dark)]/40 to-transparent" />
                  <div className="absolute left-5 bottom-5 flex items-center gap-3">
                    <span className="text-xs font-mono text-[var(--color-hhy-accent)] tracking-wider">0{i + 1}</span>
                    <span className="w-8 h-px bg-[var(--color-hhy-accent)]" />
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/70">{s.location}</span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="eyebrow">{s.role}</span>
                  <h3 className="font-display text-2xl md:text-3xl mt-3 tracking-tight text-[var(--color-hhy-charcoal)]">{s.name}</h3>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {[
                      { k: t.common.size || "Size", v: s.size }, 
                      { k: t.common.focus || "Focus", v: s.focus }, 
                      { k: t.common.location || "Location", v: s.location }
                    ].map((d) => (
                      <div key={d.k} className="p-4 rounded-xl bg-[var(--color-hhy-surface)]">
                        <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-hhy-tertiary)]">{d.k}</div>
                        <div className="text-sm font-bold text-[var(--color-hhy-charcoal)] mt-1">{d.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-hhy-dark)] text-white section-padding">
        <div className="container-screen text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight">{t.about.cta.title}</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">{t.about.cta.desc}</p>
          <Link href={getLocalizedHref("/contact")} className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[var(--color-hhy-on-dark-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.4)] transition-all duration-300">
            {t.about.cta.button}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

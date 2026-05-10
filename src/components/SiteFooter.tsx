"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { translations, Language } from "@/translations";
import { BRANDS } from "@/data/brands";
import { CertLogos } from "@/components/CertLogos";

export function SiteFooter() {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = React.useState(2024);
  const lang: Language = pathname.startsWith("/tr") ? "tr" : "en";
  const t = translations[lang];

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const getLocalizedHref = (href: string) => {
    if (lang === "tr") return `/tr${href === "/" ? "" : href}`;
    return href;
  };

  return (
    <footer suppressHydrationWarning className="bg-[var(--color-hhy-dark)] text-white/70">
      {/* Main footer content */}
      <div className="container-screen pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Column 1: Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/hhy-logo-w.png" alt="HHY Group Logo" width={120} height={40} className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-sm">
              {lang === "tr"
                ? "Türkiye merkezli, 50'den fazla ülkeye ihracat yapan; tarım, çikolata üretimi, kuruyemiş işleme ve private label çözümleri konusunda uzmanlaşmış küresel gıda üretim grubu."
                : "Global food production group specializing in agriculture, chocolate manufacturing, nut processing, and private label solutions — headquartered in Türkiye, exporting to 50+ countries."}
            </p>
            <div className="flex gap-3 mt-8">
              {[
                { name: "Facebook", href: "https://www.facebook.com/people/HHY-GROUP/100089685473504/", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                { name: "LinkedIn", href: "https://tr.linkedin.com/company/hhy-group-ofc", icon: "M4.98 3.5C4.98 4.882 3.87 6 2.5 6S.02 4.882.02 3.5C.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" },
                { name: "Instagram", href: "https://www.instagram.com/hhygrouptr/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              ].map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--color-hhy-on-dark-accent)] hover:bg-[var(--color-hhy-on-dark-accent)]/10 transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 text-white/40 group-hover:text-[var(--color-hhy-on-dark-accent)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.15em] text-white/30 font-semibold mb-5">{lang === "tr" ? "Kurumsal" : "Company"}</div>
            <ul className="space-y-3 text-sm">
              <li><Link href={getLocalizedHref("/")} className="text-white/55 hover:text-[var(--color-hhy-on-dark-accent)] transition-colors">{t.nav.home}</Link></li>
              <li><Link href={getLocalizedHref("/our-brands")} className="text-white/55 hover:text-[var(--color-hhy-on-dark-accent)] transition-colors">{t.nav.ourBrands}</Link></li>
              <li><Link href={getLocalizedHref("/about-us")} className="text-white/55 hover:text-[var(--color-hhy-on-dark-accent)] transition-colors">{t.nav.aboutUs}</Link></li>
              <li><Link href={getLocalizedHref("/private-label")} className="text-white/55 hover:text-[var(--color-hhy-on-dark-accent)] transition-colors">{t.nav.privateLabel}</Link></li>
              <li><Link href={getLocalizedHref("/contact")} className="text-white/55 hover:text-[var(--color-hhy-on-dark-accent)] transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Column 3: Brands */}
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.15em] text-white/30 font-semibold mb-5">{lang === "tr" ? "Markalarımız" : "Our Brands"}</div>
            <ul className="space-y-3 text-sm">
              {BRANDS.map(brand => (
                <li key={brand.slug}>
                  <Link
                    href={getLocalizedHref(`/our-brands/${brand.slug}`)}
                    className="text-white/55 hover:text-[var(--color-hhy-on-dark-accent)] transition-colors"
                  >
                    {lang === "tr" ? brand.tr.name : brand.en.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Certifications */}
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.15em] text-white/30 font-semibold mb-5">{lang === "tr" ? "İletişim" : "Contact"}</div>
            <address className="not-italic text-sm leading-relaxed text-white/55">
              {lang === "tr" ? "Adres: 106. Cadde No: 24" : "Address: 106th Street No: 24"}<br />
              {lang === "tr" ? "Saray Mahallesi, Kahramankazan / Ankara" : "Saray District, Kahramankazan / Ankara"}
            </address>
            <div className="mt-5 space-y-2">
              <a href="mailto:merhaba@hhygroup.com" className="block text-sm text-white/55 hover:text-[var(--color-hhy-on-dark-accent)] transition-colors">
                merhaba@hhygroup.com
              </a>
              <a href="tel:+905392311271" className="block text-sm text-white/55 hover:text-[var(--color-hhy-on-dark-accent)] transition-colors">
                +90 539 231 12 71
              </a>
            </div>

            {/* Certifications (Reverted to text-based with border, plus small icons) */}
            <div className="mt-8 pt-8 border-t border-white/8">
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-semibold mb-4">{lang === "tr" ? "Kalite Sertifikaları" : "Quality Certifications"}</div>
              <div className="flex flex-wrap gap-2 items-center">
                {/* Text based with border as in original */}
                {["BRC", "ISO 22000", "ISO 9001", "HACCP", "Halal", "Kosher", "IFS", "SEDEX"].map((c) => (
                  <span
                    key={c}
                    className="border border-white/10 text-[9px] uppercase tracking-[0.1em] text-white/50 px-2 py-0.5 rounded-md whitespace-nowrap"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="container-screen py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-white/30">
            © {currentYear} HHY Group A.Ş. · {lang === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
          </div>
          <div className="flex items-center gap-6 text-[11px] text-white/25">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-hhy-accent)] animate-pulse" />
              {lang === "tr" ? "Küresel Gıda Üreticisi" : "Global Food Producer"}
            </span>
            <span>Ankara, Türkiye</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

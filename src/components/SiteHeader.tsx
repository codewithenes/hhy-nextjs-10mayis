"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { translations, Language } from "@/translations";
import { BRANDS } from "@/data/brands";

const NAV_KEYS = [
  { href: "/", labelKey: "home" },
  { href: "/our-brands", labelKey: "ourBrands" },
  { href: "/about-us", labelKey: "aboutUs" },
  { href: "/private-label", labelKey: "privateLabel" },
  { href: "/contact", labelKey: "contact" },
] as const;

const BRAND_COLORS: Record<string, { bg: string; text: string; glow: string }> = {
  "ender-chocolate": { bg: "#CD0004", text: "#FFF", glow: "rgba(205, 0, 4, 0.35)" },
  "dedem-kuruyemis": { bg: "#000000", text: "#FFF", glow: "rgba(0, 0, 0, 0.35)" },
  "sn4ck": { bg: "#4E62C9", text: "#FFF", glow: "rgba(78, 98, 201, 0.35)" },
  "cerezshop": { bg: "#181850", text: "#FFF", glow: "rgba(24, 24, 80, 0.35)" },
  "hhy-agro": { bg: "#276749", text: "#FFF", glow: "rgba(56, 161, 105, 0.35)" },
};

export function SiteHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  
  const lang: Language = pathname.startsWith("/tr") ? "tr" : "en";
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/" || pathname === "/tr";
  const isScrolled = scrollY > 20;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    const localizedHref = lang === "tr" ? `/tr${href === "/" ? "" : href}` : href;
    if (href === "/") return pathname === localizedHref;
    return pathname.startsWith(localizedHref);
  };

  const getLocalizedHref = (href: string) => {
    if (lang === "tr") return `/tr${href === "/" ? "" : href}`;
    return href;
  };

  const switchLanguage = (newLang: Language) => {
    if (newLang === lang) return;
    
    let newPath = pathname;
    if (newLang === "tr") {
      newPath = `/tr${pathname === "/" ? "" : pathname}`;
    } else {
      newPath = pathname.replace(/^\/tr/, "") || "/";
    }
    window.location.href = newPath;
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/" || pathname === "/tr") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      ref={headerRef}
      suppressHydrationWarning
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-[var(--color-hhy-border)]"
          : "bg-transparent"
        }`}
    >
      <div className="container-screen flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <Link 
          href={getLocalizedHref("/")} 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group relative z-10" 
          aria-label="HHY Group Home"
        >
          <div className={`transition-all duration-500 ${isScrolled ? "brightness-0" : ""}`}>
            <Image 
              src="/images/hhy-logo-w.png" 
              alt="HHY Group Logo" 
              width={120} 
              height={40} 
              className="h-9 md:h-10 w-auto object-contain" 
              priority 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_KEYS.map((item) => {
            const label = t.nav[item.labelKey as keyof typeof t.nav];
            const href = getLocalizedHref(item.href);

            if (item.href === "/our-brands") {
              return (
                <div key={item.href} className="relative group/menu">
                  <Link
                    href={href}
                    className={`relative px-4 py-2.5 text-[13px] font-semibold tracking-[0.02em] transition-colors duration-300 flex items-center gap-1.5 rounded-lg ${isScrolled
                        ? "text-[var(--color-hhy-charcoal)] hover:text-[var(--color-hhy-accent)] hover:bg-[var(--color-hhy-accent-soft)]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                      } ${isActive(item.href) ? (isScrolled ? "text-[var(--color-hhy-accent)]" : "text-white") : ""}`}
                  >
                    {label}
                    <svg
                      className="w-3 h-3 opacity-50 group-hover/menu:opacity-100 group-hover/menu:rotate-180 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 translate-y-3 group-hover/menu:translate-y-0">
                    <div className="bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] p-3 min-w-[520px] overflow-hidden">
                      {/* Menu header */}
                      <div className="px-4 py-3 mb-1">
                        <div className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[var(--color-hhy-muted-text)]">
                          {label}
                        </div>
                      </div>

                      {/* Brand items */}
                      <div className="grid grid-cols-1 gap-0.5">
                        {BRANDS.map((brand) => {
                          const colors = BRAND_COLORS[brand.slug] || { bg: "#01d091", text: "#FFF", glow: "rgba(1,208,145,0.3)" };
                          const isHovered = hoveredBrand === brand.slug;
                          const brandData = lang === "tr" ? brand.tr : brand.en;

                          return (
                            <Link
                              key={brand.slug}
                              href={getLocalizedHref(`/our-brands/${brand.slug}`)}
                              onMouseEnter={() => setHoveredBrand(brand.slug)}
                              onMouseLeave={() => setHoveredBrand(null)}
                              className="flex items-center gap-5 px-4 py-3.5 rounded-xl transition-all duration-300 group/brand relative overflow-hidden"
                              style={{
                                background: isHovered ? colors.bg : "transparent",
                                boxShadow: isHovered ? `0 4px 20px ${colors.glow}` : "none",
                              }}
                            >
                              {/* Logo container */}
                              <div className={`h-10 w-20 flex items-center justify-center shrink-0 rounded-lg p-1.5 transition-all duration-300 ${
                                isHovered ? "bg-white shadow-sm scale-105" : "bg-[var(--color-hhy-surface)]"
                              }`}>
                                <Image
                                  src={brand.logo}
                                  alt={brandData.name}
                                  width={80}
                                  height={40}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </div>

                              {/* Brand info */}
                              <div className="flex-1 min-w-0">
                                <div className={`text-sm font-semibold transition-colors duration-300 ${isHovered ? "text-white" : "text-[var(--color-hhy-charcoal)]"
                                  }`}>
                                  {brandData.name}
                                </div>
                                <div className={`text-[11px] mt-0.5 transition-colors duration-300 ${isHovered ? "text-white/70" : "text-[var(--color-hhy-muted-text)]"
                                  }`}>
                                  {brandData.category}
                                </div>
                              </div>

                              {/* Arrow */}
                              <svg
                                className={`w-4 h-4 transition-all duration-300 ${isHovered ? "text-white/70 translate-x-0 opacity-100" : "text-transparent -translate-x-2 opacity-0"
                                  }`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer */}
                      <div className="mt-2 pt-3 border-t border-[var(--color-hhy-border)] px-4 pb-1">
                        <Link
                          href={getLocalizedHref("/our-brands")}
                          className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[var(--color-hhy-muted-text)] hover:text-[var(--color-hhy-accent)] transition-colors py-2 flex items-center gap-2"
                        >
                          {t.common.viewAllBrands}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={href}
                className={`px-4 py-2.5 text-[13px] font-semibold tracking-[0.02em] transition-colors duration-300 rounded-lg ${isScrolled
                    ? "text-[var(--color-hhy-charcoal)] hover:text-[var(--color-hhy-accent)] hover:bg-[var(--color-hhy-accent-soft)]"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                  } ${isActive(item.href) ? (isScrolled ? "text-[var(--color-hhy-accent)]" : "text-white") : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Language Switcher */}
        <div className="flex items-center gap-3 relative z-10">
          {/* Language Switcher */}
          <div className={`flex items-center rounded-full p-1 border transition-all duration-500 ${isScrolled ? "bg-black/5 border-black/10" : "bg-white/5 border-white/10"}`}>
            <button
              onClick={() => switchLanguage("en")}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-300 ${
                lang === "en" 
                  ? "bg-white text-[var(--color-hhy-dark)] shadow-sm" 
                  : isScrolled ? "text-[var(--color-hhy-charcoal)] hover:bg-black/5" : "text-white/60 hover:bg-white/10"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("tr")}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-300 ${
                lang === "tr" 
                  ? "bg-white text-[var(--color-hhy-dark)] shadow-sm" 
                  : isScrolled ? "text-[var(--color-hhy-charcoal)] hover:bg-black/5" : "text-white/60 hover:bg-white/10"
              }`}
            >
              TR
            </button>
          </div>

          <div className="hidden lg:block">
            <Link
              href={getLocalizedHref("/contact")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${isScrolled
                  ? "bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] hover:shadow-[0_4px_16px_rgba(1,208,145,0.3)] hover:scale-[1.02]"
                  : "bg-white/15 text-white border border-white/20 hover:bg-white hover:text-[var(--color-hhy-dark)]"
                }`}
            >
              {t.common.startAProject}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 ${open ? "rotate-45 translate-y-[4px] bg-white" : ""} ${isScrolled && !open ? "bg-[var(--color-hhy-charcoal)]" : "bg-white"}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4px] bg-white" : ""} ${isScrolled && !open ? "bg-[var(--color-hhy-charcoal)]" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[var(--color-hhy-dark)]/95" onClick={() => setOpen(false)} />

        <nav className="relative z-10 h-full overflow-y-auto pt-24 pb-8 px-6" aria-label="Mobile navigation">
          <div className="space-y-1">
            {NAV_KEYS.map((item) => {
              const label = t.nav[item.labelKey as keyof typeof t.nav];
              return (
              <div key={item.href}>
                <Link
                  href={getLocalizedHref(item.href)}
                  className={`block text-2xl font-semibold text-white py-3 hover:text-[var(--color-hhy-accent)] transition-colors ${isActive(item.href) ? "text-[var(--color-hhy-accent)]" : ""}`}
                >
                  {label}
                </Link>
                {item.href === "/our-brands" && (
                  <div className="pl-4 pb-3 space-y-2 border-l-2 border-white/10 ml-2 mt-2 mb-4">
                    {BRANDS.map((brand) => {
                      const colors = BRAND_COLORS[brand.slug] || { bg: "#01d091", text: "#FFF", glow: "rgba(1,208,145,0.3)" };
                      const brandData = lang === "tr" ? brand.tr : brand.en;
                      return (
                        <Link
                          key={brand.slug}
                          href={getLocalizedHref(`/our-brands/${brand.slug}`)}
                          className="flex items-center gap-4 p-3 rounded-xl transition-all"
                          style={{
                            background: colors.bg,
                            boxShadow: `0 4px 16px ${colors.glow}`,
                          }}
                        >
                          <div className="w-14 h-8 flex items-center justify-center shrink-0 rounded-lg p-1.5 bg-white shadow-sm">
                            <Image src={brand.logo} alt={brandData.name} width={56} height={32} className="max-h-full max-w-full object-contain" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold text-white block">
                              {brandData.name}
                            </span>
                            <span className="text-[10px] text-white/70">{brandData.category}</span>
                          </div>
                          <svg
                            className="w-4 h-4 text-white/70"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            )})}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <Link
              href={getLocalizedHref("/contact")}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[var(--color-hhy-on-dark-accent)] text-[var(--color-hhy-dark)] rounded-xl text-sm font-bold shadow-[0_4px_20px_rgba(1,208,145,0.25)]"
            >
              {t.common.startAProject}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

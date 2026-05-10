"use client";

import { useState } from "react";
import Image from "next/image";
import { translations, Language } from "@/translations";

export default function ContactClient({ lang }: { lang: Language }) {
  const [submitted, setSubmitted] = useState(false);
  const t = translations[lang];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <Image 
            src="/images/hhy-personeller.webp" 
            alt="" 
            fill 
            priority
            className="object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-hhy-dark)]/80 via-[var(--color-hhy-dark)]/70 to-[var(--color-hhy-dark)]/90" />
        </div>
        <div className="container-screen relative z-10">
          <div className="max-w-3xl fade-in-up">
            <span className="eyebrow">{t.contact.hero.label}</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tight leading-[1.05] text-white">
              {t.contact.hero.title}
              <br />
              <span className="gradient-text-on-dark">{t.contact.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 text-white/70 max-w-xl text-base leading-relaxed">
              {t.contact.hero.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-hhy-dark)] text-white">
                <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[var(--color-hhy-on-dark-accent)]">
                  {t.common.headquarters}
                </span>
                <address className="not-italic mt-4 leading-relaxed text-white/75 text-sm">
                  {lang === "tr" ? "Adres: 106. Cadde No: 24" : "Address: 106th Street No: 24"}<br />
                  {lang === "tr" ? "Saray Mahallesi, Kahramankazan / Ankara" : "Saray District, Kahramankazan / Ankara"}
                </address>

                <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                  {[
                    { label: "Email", value: "merhaba@hhygroup.com", href: "mailto:merhaba@hhygroup.com", icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
                    { label: t.common.phone, value: "+90 539 231 12 71", href: "tel:+905392311271", icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
                    { label: "WhatsApp", value: "+90 539 231 12 71", href: "https://wa.me/905392311271", icon: <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
                  ].map(c => (
                    <div key={c.label}>
                      <div className="text-[10px] uppercase tracking-[0.12em] text-white/30">{c.label}</div>
                      <a href={c.href} className="mt-1.5 w-fit inline-flex items-center gap-2 text-sm text-white/80 hover:text-[var(--color-hhy-on-dark-accent)] transition-colors bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg">
                        {c.icon}
                        {c.value}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-white/30 mb-2">
                    {t.common.operatingHours}
                  </div>
                  <div className="text-sm text-white/60">
                    {t.common.operatingHoursValue}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[var(--color-hhy-border)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--color-hhy-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-hhy-charcoal)]">{t.common.visitOurFactory}</span>
                </div>
                <p className="text-xs text-[var(--color-hhy-tertiary)] leading-relaxed">
                  {t.common.visitOurFactoryDesc}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=HHY+Group,+Kahramankazan,+Ankara"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-xs font-semibold text-[var(--color-hhy-accent)] hover:underline"
                >
                  {t.common.openInGoogleMaps}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-6 md:p-10 rounded-2xl bg-white border border-[var(--color-hhy-border)]">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-7 h-7 text-[var(--color-hhy-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="font-display text-2xl tracking-tight text-[var(--color-hhy-charcoal)]">
                      {lang === "tr" ? "Talep alındı." : "Inquiry received."}
                    </h2>
                    <p className="mt-3 text-sm text-[var(--color-hhy-tertiary)] max-w-md mx-auto">
                      {lang === "tr" 
                        ? "Ekibimiz bir iş günü içinde geri dönüş yapacaktır. HHY Group'a olan ilginiz için teşekkür ederiz."
                        : "Our team will respond within one business day. Thank you for your interest in HHY Group."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5" autoComplete="off">
                    <div>
                      <h2 className="font-display text-2xl tracking-tight text-[var(--color-hhy-charcoal)]">
                        {t.contact.form.title}
                      </h2>
                      <p className="text-sm text-[var(--color-hhy-tertiary)] mt-1">
                        {t.contact.form.desc}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field label={t.contact.form.name} name="fullName" required />
                      <Field label={lang === "tr" ? "Şirket" : "Company"} name="company" />
                      <Field label={t.contact.form.email} name="email" type="email" required />
                      <Field label={lang === "tr" ? "Ülke" : "Country"} name="country" required />
                    </div>
                    <div>
                      <label htmlFor="field-inquiry-type" className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--color-hhy-tertiary)] block mb-2">
                        {lang === "tr" ? "Talep Türü" : "Inquiry Type"}
                      </label>
                      <select id="field-inquiry-type" name="inquiryType" className="contact-field" autoComplete="off">
                        {lang === "tr" ? (
                          <>
                            <option>Private Label / OEM</option>
                            <option>Toptan / Toplu Satın Alma</option>
                            <option>Tesis Ziyareti Talebi</option>
                            <option>Spesifikasyon ve COA</option>
                            <option>Distribütörlük Ortaklığı</option>
                            <option>Diğer</option>
                          </>
                        ) : (
                          <>
                            <option>Private Label / OEM</option>
                            <option>Wholesale / Bulk Purchase</option>
                            <option>Facility Visit Request</option>
                            <option>Specifications & COA</option>
                            <option>Distribution Partnership</option>
                            <option>Other</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="field-message" className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--color-hhy-tertiary)] block mb-2">
                        {t.contact.form.message}
                      </label>
                      <textarea 
                        id="field-message" 
                        name="message" 
                        rows={6} 
                        required 
                        className="contact-field contact-field-textarea" 
                        autoComplete="off" 
                        spellCheck={false} 
                        placeholder={lang === "tr" ? "Projeniz, hedef hacimleriniz ve zaman çizelgeniz hakkında bize bilgi verin..." : "Tell us about your project, target volumes, and timeline..."} 
                      />
                    </div>
                    <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.35)] active:scale-[0.99] transition-[transform,box-shadow] duration-200">
                      {lang === "tr" ? "Talebi Gönder →" : "Submit Request →"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--color-hhy-tertiary)] block mb-2">{label}</label>
      <input id={id} name={name} type={type} required={required} className="contact-field" autoComplete="off" />
    </div>
  );
}

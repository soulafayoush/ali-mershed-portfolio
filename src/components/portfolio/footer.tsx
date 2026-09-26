"use client";

import { Facebook, Instagram, Linkedin, FolderOpen } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/language-provider";
import { CONTACT } from "@/lib/contact";

export default function Footer() {
  const { t, locale } = useLanguage();

  const quickLinks = [
    { id: "home", label: t.nav.home },
    { id: "work", label: t.nav.work },
    { id: "services", label: t.nav.services },
    { id: "process", label: t.nav.process },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  const socialLinks = [
    { id: "facebook", label: "Facebook", href: CONTACT.social.facebook, icon: Facebook },
    { id: "instagram", label: "Instagram", href: CONTACT.social.instagram, icon: Instagram },
    { id: "linkedin", label: "LinkedIn", href: CONTACT.social.linkedin, icon: Linkedin },
    { id: "portfolio", label: locale === "ar" ? "الأعمال" : "Portfolio", href: CONTACT.social.portfolio, icon: FolderOpen },
  ];

  return (
    <footer className="relative mt-auto border-t border-navy-line pt-12 pb-28 lg:pb-12">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="relative grid place-items-center w-14 h-14 rounded-lg overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(10,25,47,0.6))",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                  boxShadow: "0 0 16px -6px rgba(212, 175, 55, 0.5)" }}>
                <Image src="/assets/logo.webp" alt="Ali Mershed logo" fill sizes="56px" className="object-contain p-1" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-cream-text tracking-tight">
                  {locale === "ar" ? "علي مرشد محمد" : "Ali Mershed Mohamad"}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold-accent font-medium">
                  {locale === "ar" ? "مصمم · مونتير · AI" : "Designer · Editor · AI"}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-cream-dim leading-relaxed max-w-md">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-accent font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                    data-cursor="hover" className="text-sm text-cream-muted hover:text-gold-accent transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-accent font-semibold mb-4">{t.nav.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} data-cursor="hover" className="text-cream-muted hover:text-gold-accent transition-colors break-all">{CONTACT.email}</a>
              </li>
              <li className="text-cream-muted" dir="ltr">{CONTACT.whatsappDisplay}</li>
              <li className="text-cream-muted">{CONTACT.location[locale]}</li>
            </ul>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.id} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} data-cursor="hover"
                    className="grid place-items-center w-9 h-9 rounded-lg border border-navy-line bg-navy-base/40 text-cream-muted hover:text-gold-accent hover:border-gold-accent/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-dim">
          <div>
            © {new Date().getFullYear()} {locale === "ar" ? "علي مرشد محمد" : "Ali Mershed Mohamad"}. {t.footer.rights}
          </div>
          <div>{t.footer.builtWith}</div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/language-provider";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["home", "work", "services", "process", "about", "contact"] as const;

export default function Navbar() {
  const { t, locale, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "home";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "work", label: t.nav.work },
    { id: "services", label: t.nav.services },
    { id: "process", label: t.nav.process },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-500", scrolled ? "py-2" : "py-4")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "flex items-center justify-between rounded-2xl transition-all duration-500",
            scrolled ? "glass-card px-4 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]" : "px-2 py-2"
          )}>
            <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group" data-cursor="hover">
              <span className="relative grid place-items-center w-14 h-14 rounded-lg overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(10,25,47,0.6))",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                  boxShadow: "0 0 18px -4px rgba(212, 175, 55, 0.6)",
                }}>
                <Image src="/assets/logo.webp" alt="Ali Mershed logo" fill sizes="56px" className="object-contain p-1" />
              </span>
              <span className="hidden sm:flex flex-col leading-tight">
                <span className="text-base font-bold text-cream-text tracking-tight">
                  {locale === "ar" ? "علي مرشد محمد" : "Ali Mershed Mohamad"}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold-accent font-medium">
                  {locale === "ar" ? "مصمم · مونتير · AI" : "Designer · Editor · AI"}
                </span>
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)} data-cursor="hover"
                  className={cn(
                    "relative px-3 py-2 text-sm rounded-lg transition-colors duration-300",
                    activeSection === link.id ? "text-gold-accent" : "text-cream-muted hover:text-cream-text"
                  )}>
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-lg"
                      style={{ background: "rgba(212, 175, 55, 0.08)", border: "1px solid rgba(212, 175, 55, 0.3)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button onClick={toggle} data-cursor="hover" aria-label={t.nav.lang_label}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-cream-muted hover:text-gold-accent transition-colors border border-transparent hover:border-gold-accent/30">
                <Languages className="w-4 h-4" />
                <span className="hidden sm:inline">{t.nav.lang_label}</span>
              </button>
              <button onClick={() => scrollTo("contact")} data-cursor="hover"
                className="hidden md:inline-flex btn-gold px-4 py-2 rounded-lg text-sm font-semibold">
                {t.nav.cta}
              </button>
              <button onClick={() => setMobileOpen(v => !v)} aria-label="Menu"
                className="md:hidden p-2 rounded-lg text-cream-text hover:bg-navy-elevated/50">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }} className="fixed top-20 inset-x-4 z-50 md:hidden">
            <div className="glass-card rounded-2xl p-3 space-y-1">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)}
                  className={cn(
                    "w-full text-start px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    activeSection === link.id ? "bg-gold-accent/10 text-gold-accent" : "text-cream-muted hover:bg-navy-elevated/50 hover:text-cream-text"
                  )}>
                  {link.label}
                </button>
              ))}
              <button onClick={() => scrollTo("contact")} className="w-full btn-gold mt-2 px-4 py-3 rounded-xl font-semibold">
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

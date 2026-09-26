"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, BadgeCheck, ExternalLink, Lock, X, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/language-provider";

const CERT_COUNT = 8;
const CERT_ASSETS = Array.from({ length: CERT_COUNT }, (_, i) => ({
  thumb: `/assets/certs/cert-${String(i + 1).padStart(2, "0")}-thumb.webp`,
  full: `/assets/certs/cert-${String(i + 1).padStart(2, "0")}-full.webp`,
}));

export default function Certificates() {
  const { t, locale } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      else if (e.key === "ArrowRight") setActiveIndex(i => i === null ? i : (i + 1) % CERT_COUNT);
      else if (e.key === "ArrowLeft") setActiveIndex(i => i === null ? i : (i - 1 + CERT_COUNT) % CERT_COUNT);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  return (
    <section id="certificates" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-accent font-semibold">{t.certificates.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient-gold">{t.certificates.title}</span>
          </h2>
          <div className="gold-divider my-6 w-32" />
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">{t.certificates.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {t.certificates.items.slice(0, CERT_COUNT).map((cert, i) => (
            <motion.button key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }} onClick={() => setActiveIndex(i)} data-cursor="hover"
              className="group relative rounded-xl overflow-hidden glass-card glass-card-hover text-start">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={CERT_ASSETS[i].thumb} alt={cert.name} fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-[#0A192F]/30" />
                <div className="absolute inset-0 grid place-items-center">
                  <motion.div initial={false} whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full grid place-items-center bg-gold-accent/15 border border-gold-accent/50 backdrop-blur-sm group-hover:bg-gold-accent/25 transition-colors">
                    <Lock className="w-5 h-5 text-gold-accent" />
                  </motion.div>
                </div>
                <div className="absolute top-2 end-2 px-2 py-0.5 rounded-md text-[9px] font-medium bg-[#0A192F]/70 backdrop-blur text-gold-accent border border-gold-accent/30 uppercase tracking-wider">
                  {cert.issuer.split(" ")[0]}
                </div>
                <div className="absolute bottom-2 start-2 text-3xl font-bold text-cream-text/15">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-start gap-1.5">
                  <BadgeCheck className="w-3.5 h-3.5 text-electric-blue shrink-0 mt-0.5" />
                  <h3 className="text-xs sm:text-sm font-semibold text-cream-text leading-tight">{cert.name}</h3>
                </div>
                <div className="text-[10px] sm:text-xs text-cream-dim mt-1.5 leading-snug line-clamp-2">{cert.issuer}</div>
                <div className="mt-3 flex items-center gap-1 text-[10px] text-gold-accent uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.certificates.clickToReveal}
                  <ExternalLink className="w-3 h-3 rtl-flip" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="mt-10 rounded-xl p-4 sm:p-5 border border-dashed border-navy-line bg-navy-base/40 text-center text-xs sm:text-sm text-cream-dim">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Award className="w-3.5 h-3.5 text-gold-accent" />
            <span>{t.certificates.note}</span>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={() => setActiveIndex(null)}>
            <div className="absolute inset-0" style={{ background: "rgba(10, 25, 47, 0.92)", backdropFilter: "blur(10px)" }} />
            <button onClick={() => setActiveIndex(null)} data-cursor="hover" aria-label={t.works.close}
              className="absolute top-4 end-4 z-10 grid place-items-center w-10 h-10 rounded-full bg-navy-base/80 border border-gold-accent/30 text-cream-text hover:bg-gold-accent hover:text-navy-base transition-colors">
              <X className="w-5 h-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setActiveIndex(i => i === null ? i : (i - 1 + CERT_COUNT) % CERT_COUNT); }} aria-label="Previous"
              className="absolute start-2 sm:start-4 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-base/80 border border-gold-accent/30 text-cream-text hover:bg-gold-accent hover:text-navy-base transition-colors">
              <ChevronLeft className="w-5 h-5 rtl-flip" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setActiveIndex(i => i === null ? i : (i + 1) % CERT_COUNT); }} aria-label="Next"
              className="absolute end-2 sm:end-4 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-base/80 border border-gold-accent/30 text-cream-text hover:bg-gold-accent hover:text-navy-base transition-colors">
              <ChevronRight className="w-5 h-5 rtl-flip" />
            </button>

            <motion.div key={activeIndex} initial={{ y: 30, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()} className="relative w-full max-w-3xl">
              <div className="grid sm:grid-cols-5 gap-4 items-stretch">
                <div className="sm:col-span-3 relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold-accent/30 glow-gold">
                  <Image src={CERT_ASSETS[activeIndex].full} alt={t.certificates.items[activeIndex].name}
                    fill sizes="(max-width: 640px) 100vw, 60vw" className="object-contain bg-navy-base" />
                </div>
                <div className="sm:col-span-2 glass-card rounded-2xl p-6 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold-accent font-semibold mb-2">
                    {t.certificates.counterLabel} {String(activeIndex + 1).padStart(2, "0")} / {String(CERT_COUNT).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-cream-text leading-tight">
                    {t.certificates.items[activeIndex].name}
                  </h3>
                  <div className="mt-2 text-sm text-gold-accent font-medium">
                    {t.certificates.items[activeIndex].issuer}
                  </div>
                  <div className="mt-4 pt-4 border-t border-navy-line">
                    <div className="flex items-center gap-2 text-xs text-cream-muted">
                      <BadgeCheck className="w-4 h-4 text-electric-blue" />
                      <span>{t.certificates.verified}</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-6 text-[10px] text-cream-dim">{t.certificates.navHint}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

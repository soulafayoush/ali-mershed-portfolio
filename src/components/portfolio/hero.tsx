"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Play, Mail } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/language-provider";

export default function Hero() {
  const { t, locale } = useLanguage();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      <motion.div aria-hidden className="absolute -top-32 -end-32 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden className="absolute -bottom-32 -start-32 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(100,255,218,0.12), transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-gold-accent mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-[0.18em]">{t.hero.eyebrow}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.25] tracking-tight">
              <span className="block text-cream-text whitespace-nowrap">
                {locale === "ar" ? "علي مرشد محمد" : "Ali Mershed Mohamad"}
              </span>
              <span className="block mt-4 text-lg sm:text-xl lg:text-2xl text-gradient-gold text-glow-gold whitespace-nowrap">
                {t.hero.titleLine1}
              </span>
              <span className="block mt-2 text-sm sm:text-base lg:text-lg text-cream-muted font-medium whitespace-nowrap">
                {t.hero.titleLine2}
              </span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-2">
              {t.hero.roles.map((role, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs sm:text-sm border border-navy-line bg-navy-card/60 text-cream-muted">{role}</span>
              ))}
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-7 max-w-2xl text-base sm:text-lg text-cream-muted leading-relaxed">
              {t.hero.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4">
              <button onClick={() => scrollTo("work")} data-cursor="hover"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm">
                <Play className="w-4 h-4 rtl-flip" />
                {t.hero.primaryCta}
              </button>
              <button onClick={() => scrollTo("contact")} data-cursor="hover"
                className="btn-ghost-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm">
                <Mail className="w-4 h-4" />
                {t.hero.secondaryCta}
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {t.hero.stats.map((stat, i) => (
                <div key={i} className="glass-card glass-card-hover rounded-xl p-4 text-center sm:text-start">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient-gold">{stat.value}</div>
                  <div className="text-[11px] sm:text-xs text-cream-dim mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md aspect-[4/5]">
              <div className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
                style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.5), rgba(100,255,218,0.2))" }} />
              <motion.div aria-hidden animate={{ rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-3xl border border-gold-accent/20" />
              <motion.div aria-hidden animate={{ rotate: [360, 0] }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-3xl border border-electric-blue/15" />

              <div className="relative h-full w-full rounded-3xl overflow-hidden glass-card">
                <Image src="/assets/profile.webp" alt={locale === "ar" ? "علي مرشد محمد" : "Ali Mershed Mohamad"}
                  fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent" />

                {/* Logo (top-left, ALWAYS — even in RTL) + city below it */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 items-start z-10">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden grid place-items-center bg-[#0A192F]/70 backdrop-blur-md p-1 border border-gold-accent/40 glow-gold-sm">
                    <Image src="/assets/logo.webp" alt="Ali Mershed logo" fill sizes="96px" className="object-contain p-1" />
                  </div>
                  <div className="px-2.5 py-1 rounded-full text-[10px] font-semibold border backdrop-blur bg-gold-accent/15 text-gold-accent border-gold-accent/40 uppercase tracking-wider whitespace-nowrap" dir="ltr">
                    Latakia · Syria
                  </div>
                </div>

                {/* Name overlay at bottom — show name in current language only, with proper spacing */}
                <div className="absolute bottom-4 start-4 end-4">
                  <div className="text-cream-text font-bold text-sm sm:text-base leading-tight whitespace-nowrap drop-shadow-lg">
                    {locale === "ar" ? "علي مرشد محمد" : "Ali Mershed Mohamad"}
                  </div>
                  <div className="text-gold-accent text-[10px] uppercase tracking-[0.2em] mt-2 drop-shadow">
                    {locale === "ar" ? "مصمم · مونتير · صانع محتوى بالذكاء الاصطناعي" : "Designer · Editor · AI Creator"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden lg:flex flex-col items-center justify-center gap-2 mt-16 text-cream-dim w-full">
          <span className="text-[10px] uppercase tracking-[0.3em] text-center">{t.hero.scrollHint}</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center">
            <ArrowDown className="w-4 h-4 text-gold-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

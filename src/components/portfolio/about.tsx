"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap, CheckCircle2, Languages as LanguagesIcon, Briefcase, Sparkles, Layers,
} from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";

export default function About() {
  const { t, locale } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-accent font-semibold">{t.about.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient-gold">{t.about.title}</span>
          </h2>
          <div className="gold-divider my-6 w-32" />
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">{t.about.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            {/* Real portrait photo */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }} className="relative rounded-2xl overflow-hidden glass-card aspect-[16/10]">
              <Image src="/assets/profile.webp" alt={locale === "ar" ? "علي مرشد محمد" : "Ali Mershed Mohamad"}
                fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
              <div className="absolute bottom-4 start-4 end-4 flex items-end justify-between">
                <div>
                  <div className="text-lg font-semibold text-cream-text drop-shadow">
                    {locale === "ar" ? "علي مرشد محمد" : "Ali Mershed Mohamad"}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold-accent mt-1">{t.about.subtitle}</div>
                </div>
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#0A192F]/80 backdrop-blur p-1 border border-gold-accent/30">
                  <Image src="/assets/logo.webp" alt="logo" fill sizes="48px" className="object-contain p-1" />
                </div>
              </div>
            </motion.div>

            {t.about.intro.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }} className="text-base sm:text-lg leading-relaxed text-cream-muted">
                {p}
              </motion.p>
            ))}

            {/* What distinguishes my approach */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} className="mt-8 rounded-2xl p-6 glass-card">
              <div className="flex items-center gap-2 text-gold-accent mb-4">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-base font-semibold uppercase tracking-[0.18em]">{t.about.whatDistinguishesTitle}</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {t.about.whatDistinguishes.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.35 }} className="flex items-start gap-2.5 text-sm text-cream-muted">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-gold-accent shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} className="rounded-2xl p-6 glass-card">
              <div className="flex items-center gap-2 text-gold-accent mb-4">
                <Briefcase className="w-5 h-5" />
                <h3 className="text-base font-semibold uppercase tracking-[0.18em]">{t.about.experienceTitle}</h3>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-gold-accent/15 text-gold-accent">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-cream-text">{t.about.experienceRole}</div>
                  <div className="text-xs text-cream-dim mt-1">{t.about.experienceOrg}</div>
                  <div className="inline-block mt-2 px-2 py-0.5 rounded-md text-[10px] font-medium bg-electric-blue/10 text-electric-blue border border-electric-blue/30">
                    {t.about.experiencePeriod}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {t.about.experiencePoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-cream-muted">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-gold-accent shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }} className="rounded-2xl p-6 glass-card">
              <div className="flex items-center gap-2 text-gold-accent mb-4">
                <Layers className="w-5 h-5" />
                <h3 className="text-base font-semibold uppercase tracking-[0.18em]">{t.about.expertiseTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.about.expertise.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-navy-base/60 text-cream-text border border-navy-line hover:border-gold-accent/40 hover:text-gold-accent transition-colors">{item}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column: education, languages, skills */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }} className="rounded-2xl p-6 glass-card">
              <div className="flex items-center gap-2 text-gold-accent mb-4">
                <GraduationCap className="w-5 h-5" />
                <h3 className="text-base font-semibold uppercase tracking-[0.18em]">{t.about.educationTitle}</h3>
              </div>
              <div className="space-y-4">
                {t.about.education.map((edu, i) => (
                  <div key={i} className="border-s-2 border-gold-accent/40 ps-4">
                    <div className="text-sm font-semibold text-cream-text">{edu.degree}</div>
                    <div className="text-xs text-gold-accent mt-1">{edu.year}</div>
                    <div className="text-xs text-cream-dim mt-0.5">{edu.source}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }} className="rounded-2xl p-6 glass-card">
              <div className="flex items-center gap-2 text-gold-accent mb-4">
                <LanguagesIcon className="w-5 h-5" />
                <h3 className="text-base font-semibold uppercase tracking-[0.18em]">{t.about.languagesTitle}</h3>
              </div>
              <div className="space-y-3">
                {t.about.languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-cream-text font-medium">{lang.name}</span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-electric-blue/10 text-electric-blue border border-electric-blue/30">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }} className="rounded-2xl p-6 glass-card">
              <h3 className="text-base font-semibold uppercase tracking-[0.18em] text-gold-accent mb-5">{t.about.skillsTitle}</h3>
              <div className="space-y-5">
                {t.about.skillGroups.map((group, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}>
                    <div className="text-xs font-semibold text-cream-text mb-2 uppercase tracking-wider">{group.title}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-navy-base/60 text-cream-muted border border-navy-line hover:border-gold-accent/40 hover:text-gold-accent transition-colors cursor-default">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-navy-line">
                <div className="text-xs font-semibold text-cream-text mb-2 uppercase tracking-wider">{t.about.otherSkillsTitle}</div>
                <div className="flex flex-wrap gap-1.5">
                  {t.about.otherSkills.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-navy-base/60 text-cream-dim border border-navy-line hover:border-electric-blue/40 hover:text-electric-blue transition-colors cursor-default">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

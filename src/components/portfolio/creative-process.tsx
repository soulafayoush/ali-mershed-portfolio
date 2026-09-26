"use client";

import { motion } from "framer-motion";
import { Brain, ClipboardList, Lightbulb, Camera, Cpu, Scissors, Send } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";

const STEP_ICONS = [ClipboardList, Lightbulb, Camera, Cpu, Scissors, Send];

export default function CreativeProcess() {
  const { t, locale } = useLanguage();

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(100,255,218,0.18) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-accent font-semibold">{t.process.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-gradient-gold">{t.process.title}</h2>
          <div className="gold-divider my-6 w-32" />
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">{t.process.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.process.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} className="group relative rounded-2xl p-6 glass-card glass-card-hover">
                <span className="absolute top-4 end-4 text-5xl font-bold text-navy-line group-hover:text-gold-accent/20 transition-colors">{step.num}</span>
                <div className="relative w-12 h-12 rounded-xl grid place-items-center mb-5 transition-all duration-500 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(100,255,218,0.08))", border: "1px solid rgba(212,175,55,0.3)" }}>
                  <Icon className="w-5 h-5 text-gold-accent" />
                </div>
                <h3 className="text-lg font-semibold text-cream-text leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm text-cream-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }} className="mt-16 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-50"
            style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(100,255,218,0.04) 100%)" }} />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative grid lg:grid-cols-12 gap-8 p-8 sm:p-12 items-center">
            <div className="lg:col-span-3 flex lg:justify-center">
              <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl grid place-items-center"
                style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(100,255,218,0.1))",
                  border: "1px solid rgba(212,175,55,0.4)",
                  boxShadow: "0 0 60px -10px rgba(212,175,55,0.4), inset 0 0 30px -10px rgba(212,175,55,0.2)" }}>
                <Brain className="w-12 h-12 text-gold-accent" />
              </motion.div>
            </div>
            <div className="lg:col-span-9">
              <div className="text-xs uppercase tracking-[0.3em] text-electric-blue font-semibold mb-3">{t.process.philosophyTitle}</div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-cream-text text-glow-gold">
                "{t.process.philosophyQuote}"
              </p>
              <p className="mt-4 text-sm sm:text-base text-cream-muted leading-relaxed">{t.process.philosophyText}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {t.process.philosophyPoints.map((pt) => (
                  <span key={pt} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-navy-base/60 text-cream-muted border border-navy-line">{pt}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

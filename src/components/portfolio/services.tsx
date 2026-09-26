"use client";

import { motion } from "framer-motion";
import { PenTool, Film, Sparkles, Lightbulb, Package, Check } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  graphic: PenTool, video: Film, ai: Sparkles, "creative-ads": Lightbulb, "ai-product": Package,
};

export default function Services() {
  const { t, locale } = useLanguage();

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-accent font-semibold">{t.services.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient-gold">{t.services.title}</span>
          </h2>
          <div className="gold-divider my-6 w-32" />
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">{t.services.subtitle}</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((service, i) => {
            const Icon = SERVICE_ICONS[service.id] ?? PenTool;
            return (
              <motion.div key={service.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-2xl p-6 glass-card glass-card-hover">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl grid place-items-center transition-transform duration-500 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(100,255,218,0.08))",
                      border: "1px solid rgba(212,175,55,0.3)" }}>
                    <Icon className="w-5 h-5 text-gold-accent" />
                  </div>
                  <span className="text-3xl font-bold text-navy-line group-hover:text-gold-accent/20 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-cream-text leading-tight">{service.title}</h3>
                <p className="mt-2 text-sm text-cream-muted leading-relaxed">{service.tagline}</p>
                <ul className="mt-5 space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-cream-dim">
                      <Check className="w-3.5 h-3.5 mt-0.5 text-gold-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="mt-12 rounded-2xl p-6 sm:p-8 glass-card text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold-accent font-semibold mb-3">{t.services.flowLabel}</div>
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">
            <span className="text-gradient-gold font-semibold">{t.services.flowValue}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

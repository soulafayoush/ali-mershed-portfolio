"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)",
  "linear-gradient(135deg, #64FFDA 0%, #4FD1B4 100%)",
  "linear-gradient(135deg, #F5D77E 0%, #D4AF37 50%, #AA7C11 100%)",
];

export default function Testimonials() {
  const { t, locale } = useLanguage();

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[80%] h-[60%] opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.4) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-accent font-semibold">{t.testimonials.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient-gold">{t.testimonials.title}</span>
          </h2>
          <div className="gold-divider my-6 w-32" />
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {t.testimonials.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-2xl p-6 glass-card glass-card-hover flex flex-col">
              <Quote className="w-10 h-10 text-gold-accent/30 mb-4 fill-gold-accent/20"
                style={{ transform: locale === "ar" ? "scaleX(-1)" : "none" }} />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold-accent text-gold-accent"
                    style={{ filter: "drop-shadow(0 0 4px rgba(212, 175, 55, 0.4))" }} />
                ))}
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-cream-text flex-1">"{item.quote}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-navy-line">
                <div className="relative grid place-items-center w-12 h-12 rounded-full font-bold text-base shadow-lg"
                  style={{ background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length], color: "#0A192F",
                    boxShadow: "0 4px 12px -4px rgba(212, 175, 55, 0.5)" }}>
                  {item.author.charAt(0)}
                  <span className="absolute -bottom-0.5 -end-0.5 w-4 h-4 rounded-full grid place-items-center" style={{ background: "#0A192F" }}>
                    <Star className="w-2.5 h-2.5 fill-electric-blue text-electric-blue" />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-cream-text truncate">{item.author}</div>
                  <div className="text-[11px] text-cream-dim flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gold-accent" />
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

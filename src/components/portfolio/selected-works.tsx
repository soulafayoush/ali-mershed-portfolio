"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight, ArrowLeft, X, Wrench, Sparkles,
  Target, Lightbulb, TrendingUp, User, Workflow, Play,
} from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { works, type Work, type WorkCategory } from "./works-data";
import { cn } from "@/lib/utils";

type Filter = "all" | WorkCategory;

export default function SelectedWorks() {
  const { t, dir } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Work | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const filtered = filter === "all" ? works : works.filter((w) => w.category === filter);
  const xTarget = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t.works.filters.all },
    { id: "graphic", label: t.works.filters.graphic },
    { id: "video", label: t.works.filters.video },
    { id: "ai", label: t.works.filters.ai },
    { id: "selected", label: t.works.filters.selected },
  ];

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const categoryColor = (c: WorkCategory) =>
    c === "graphic" ? "text-gold-accent border-gold-accent/40 bg-gold-accent/5"
    : c === "video" ? "text-electric-blue border-electric-blue/40 bg-electric-blue/5"
    : c === "ai" ? "text-gold-bright border-gold-bright/40 bg-gold-bright/5"
    : "text-cream-text border-cream-text/40 bg-cream-text/5";

  return (
    <section ref={sectionRef} id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-accent font-semibold">{t.works.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient-gold">{t.works.title}</span>
          </h2>
          <div className="gold-divider my-6 w-32" />
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">{t.works.subtitle}</p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f.id} onClick={() => setFilter(f.id)} data-cursor="hover"
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300",
                filter === f.id ? "btn-gold border-transparent" : "border-navy-line text-cream-muted hover:text-gold-accent hover:border-gold-accent/40"
              )}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop horizontal scroll */}
      <div className="relative mt-12 hidden md:block h-[460px] overflow-hidden">
        <motion.div ref={trackRef} style={{ x: xTarget, direction: dir === "rtl" ? "rtl" : "ltr" }}
          className="flex gap-6 ps-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pe-[20vw] h-full">
          {filtered.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} onOpen={() => setActive(work)} />
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 start-0 w-32 bg-gradient-to-r from-[#0A192F] to-transparent rtl-flip" />
        <div className="pointer-events-none absolute inset-y-0 end-0 w-32 bg-gradient-to-l from-[#0A192F] to-transparent rtl-flip" />
      </div>

      <MobileCarousel works={filtered} onOpen={(w) => setActive(w)} categoryColor={categoryColor} />

      <CaseStudyModal key={active?.id ?? "none"} work={active} onClose={() => setActive(null)} />
    </section>
  );
}

function WorkCard({ work, index, onOpen }: { work: Work; index: number; onOpen: () => void }) {
  const { locale, t } = useLanguage();
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video on hover (desktop only, video only)
  useEffect(() => {
    if (!work.video || !videoRef.current) return;
    if (hovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered, work.video]);

  const categoryColor =
    work.category === "graphic" ? "text-gold-accent border-gold-accent/40 bg-gold-accent/5"
    : work.category === "video" ? "text-electric-blue border-electric-blue/40 bg-electric-blue/5"
    : work.category === "ai" ? "text-gold-bright border-gold-bright/40 bg-gold-bright/5"
    : "text-cream-text border-cream-text/40 bg-cream-text/5";

  const categoryLabel =
    work.category === "graphic" ? t.works.filters.graphic
    : work.category === "video" ? t.works.filters.video
    : work.category === "ai" ? t.works.filters.ai
    : t.works.filters.selected;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
      onClick={onOpen} data-cursor="hover"
      className="group relative shrink-0 w-[360px] lg:w-[420px] h-full rounded-2xl overflow-hidden glass-card glass-card-hover cursor-pointer">
      <div className="relative h-[58%] overflow-hidden" style={{ background: work.accent }}>
        {work.video ? (
          <>
            <Image src={work.imageThumb} alt={work.title[locale]} fill sizes="(max-width: 768px) 80vw, 420px"
              className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <video ref={videoRef} src={work.video} muted loop playsInline preload="none"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold-accent/90 grid place-items-center opacity-100 group-hover:opacity-0 transition-opacity">
              <Play className="w-5 h-5 text-navy-base fill-navy-base" />
            </div>
          </>
        ) : (
          <Image src={work.imageThumb} alt={work.title[locale]} fill sizes="(max-width: 768px) 80vw, 420px"
            className="object-cover transition-transform duration-700 group-hover:scale-110" />
        )}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{ background: work.accent }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
        <div className="absolute top-4 start-4 text-[10px] uppercase tracking-[0.2em] text-white/90 font-semibold drop-shadow">{work.year}</div>
        <div className={cn("absolute top-4 end-4 px-2.5 py-1 rounded-full text-[10px] font-semibold border backdrop-blur", categoryColor)}>{categoryLabel}</div>
        {work.isAi && (
          <div className="absolute bottom-4 start-4 px-2 py-1 rounded-full bg-gold-bright/20 border border-gold-bright/40 text-[9px] uppercase tracking-wider text-gold-bright backdrop-blur">
            AI · Creative Directed
          </div>
        )}
        {work.hasBeforeAfter && (
          <div className="absolute bottom-4 end-4 px-2 py-1 rounded-full bg-electric-blue/20 border border-electric-blue/40 text-[9px] uppercase tracking-wider text-electric-blue backdrop-blur">
            Before / After
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="text-xs text-cream-dim uppercase tracking-wider">{work.client[locale]}</div>
        <h3 className="mt-1 text-xl font-semibold text-cream-text leading-tight">{work.title[locale]}</h3>
        <motion.div initial={false} animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
          <div className="flex flex-wrap gap-1 pt-3">
            {work.tools.slice(0, 4).map((tool) => (
              <span key={tool} className="px-2 py-0.5 rounded-md text-[10px] bg-navy-elevated/60 text-cream-muted border border-navy-line">{tool}</span>
            ))}
          </div>
        </motion.div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-cream-dim">{work.tools.length} {locale === "ar" ? "أدوات" : "tools"}</span>
          <span className={cn("inline-flex items-center gap-1.5 text-xs font-semibold transition-all", hovered ? "text-gold-accent" : "text-cream-muted")}>
            {t.works.openCase}
            <ArrowRight className="w-3.5 h-3.5 rtl-flip" />
          </span>
        </div>
      </div>

      <motion.div className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.4)" }}
        animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }} />
    </motion.div>
  );
}

function MobileCarousel({ works, onOpen, categoryColor }: {
  works: Work[]; onOpen: (w: Work) => void; categoryColor: (c: WorkCategory) => string;
}) {
  const { locale, t } = useLanguage();
  return (
    <div className="md:hidden mt-8">
      <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x-mandatory px-4 pb-6 -mx-4">
        {works.map((work, i) => {
          const categoryLabel =
            work.category === "graphic" ? t.works.filters.graphic
            : work.category === "video" ? t.works.filters.video
            : work.category === "ai" ? t.works.filters.ai
            : t.works.filters.selected;
          return (
            <button key={work.id} onClick={() => onOpen(work)}
              className="snap-center-item shrink-0 w-[80vw] max-w-[340px] text-start rounded-2xl overflow-hidden glass-card glass-card-hover active:scale-[0.98] transition-transform">
              <div className="relative h-44" style={{ background: work.accent }}>
                <Image src={work.imageThumb} alt={work.title[locale]} fill sizes="80vw" className="object-cover" />
                <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{ background: work.accent }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
                <div className="absolute top-3 start-3 text-[10px] uppercase tracking-[0.2em] text-white/90 font-semibold drop-shadow">{work.year}</div>
                <div className={cn("absolute top-3 end-3 px-2 py-0.5 rounded-full text-[10px] font-semibold border backdrop-blur", categoryColor(work.category))}>{categoryLabel}</div>
                {work.video && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold-accent/90 grid place-items-center">
                    <Play className="w-4 h-4 text-navy-base fill-navy-base" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="text-[10px] text-cream-dim uppercase tracking-wider">{work.client[locale]}</div>
                <div className="mt-1 text-base font-semibold text-cream-text leading-tight">{work.title[locale]}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-accent">
                  {t.works.openCase}
                  <ArrowRight className="w-3.5 h-3.5 rtl-flip" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="text-center text-[10px] text-cream-dim uppercase tracking-wider mt-1">
        ← {locale === "ar" ? "اسحب" : "Swipe"} →
      </div>
    </div>
  );
}

function CaseStudyModal({ work, onClose }: { work: Work | null; onClose: () => void }) {
  const { t, locale } = useLanguage();
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);

  const caseRows = work ? [
    { icon: <Target className="w-4 h-4" />, label: t.works.caseLabels.brief, text: work.brief[locale] },
    { icon: <Lightbulb className="w-4 h-4" />, label: t.works.caseLabels.concept, text: work.concept[locale] },
    { icon: <User className="w-4 h-4" />, label: t.works.caseLabels.role, text: work.role[locale] },
    { icon: <Workflow className="w-4 h-4" />, label: t.works.caseLabels.process, text: work.process[locale] },
    { icon: <TrendingUp className="w-4 h-4" />, label: t.works.caseLabels.result, text: work.result[locale] },
  ] : [];

  return (
    <AnimatePresence>
      {work && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6" onClick={onClose}>
          <div className="absolute inset-0" style={{ background: "rgba(10, 25, 47, 0.88)", backdropFilter: "blur(8px)" }} />
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto no-scrollbar rounded-t-3xl sm:rounded-3xl glass-card border border-gold-accent/20">
            <div className="relative h-44 sm:h-56" style={{ background: work.accent }}>
              <Image src={work.image} alt={work.title[locale]} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
              <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{ background: work.accent }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent" />
              <button onClick={onClose} data-cursor="hover"
                className="absolute top-4 end-4 grid place-items-center w-9 h-9 rounded-full bg-[#0A192F]/70 text-cream-text hover:bg-gold-accent hover:text-navy-base transition-colors"
                aria-label={t.works.close}>
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 start-4 sm:start-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-cream-muted">{work.client[locale]} · {work.year}</div>
                <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-cream-text drop-shadow">{work.title[locale]}</h3>
              </div>
            </div>

            <div className="p-5 sm:p-8 space-y-6">
              <div className="rounded-xl p-3 sm:p-4 bg-navy-base/40 border border-navy-line text-xs text-cream-muted text-center font-medium">
                {work.isAi ? t.works.aiCaseFlow : t.works.caseFlow}
              </div>

              {/* Video player for video works */}
              {work.video && (
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-accent font-semibold mb-3">
                    {locale === "ar" ? "الفيديو" : "Video"}
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-navy-line bg-navy-base">
                    <video src={work.video} controls playsInline preload="metadata" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}

              {work.hasBeforeAfter && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-gold-accent font-semibold">
                      {locale === "ar" ? "قبل / بعد" : "Before / After"}
                    </span>
                    <span className="text-[10px] text-cream-dim">{t.works.swipeHint}</span>
                  </div>
                  <BeforeAfterSlider color={work.accent} afterImage={work.image} value={beforeAfterPos} onChange={setBeforeAfterPos} />
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                {caseRows.map((row, i) => (
                  <motion.div key={row.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    className="rounded-xl p-4 bg-navy-base/40 border border-navy-line">
                    <div className="flex items-center gap-2 text-gold-accent mb-2">
                      {row.icon}
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">{row.label}</span>
                    </div>
                    <p className="text-sm text-cream-muted leading-relaxed">{row.text}</p>
                  </motion.div>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-2 text-gold-accent mb-3">
                  <Wrench className="w-4 h-4" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">{t.works.caseLabels.tools}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-navy-elevated/60 text-cream-text border border-navy-line">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a href="#contact" onClick={(e) => {
                  e.preventDefault(); onClose();
                  setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 200);
                }} data-cursor="hover"
                  className="btn-gold flex-1 text-center px-5 py-3 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {t.nav.cta}
                </a>
                <button onClick={onClose} data-cursor="hover" className="btn-ghost-gold px-5 py-3 rounded-xl text-sm font-semibold">{t.works.close}</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BeforeAfterSlider({ color, afterImage, value, onChange }: {
  color: string; afterImage: string; value: number; onChange: (v: number) => void;
}) {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    onChange(Math.max(0, Math.min(100, pct)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) updateFromClientX(e.clientX); };
    const onUp = () => { dragging.current = false; };
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) updateFromClientX(e.touches[0].clientX); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div ref={ref} className="relative h-40 sm:h-52 rounded-xl overflow-hidden select-none cursor-ew-resize touch-none"
      onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; updateFromClientX(e.touches[0].clientX); }}>
      <div className="absolute inset-0" style={{ background: color }}>
        <Image src={afterImage} alt="After" fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent" />
      </div>
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0A192F 0%, #172A45 100%)", clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-xs uppercase tracking-[0.3em] text-cream-dim font-semibold">
            {locale === "ar" ? "قبل التوجيه" : "Before direction"}
          </span>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-gold-accent" style={{ left: `${value}%`, transform: "translateX(-50%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full grid place-items-center bg-gold-accent text-navy-base shadow-lg">
          <ArrowLeft className="w-3 h-3" />
          <ArrowRight className="w-3 h-3 -ms-1" />
        </div>
      </div>
      <div className="absolute top-3 start-3 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#0A192F]/80 text-cream-text">{t.works.before}</div>
      <div className="absolute top-3 end-3 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#0A192F]/80 text-cream-text">{t.works.after}</div>
    </div>
  );
}

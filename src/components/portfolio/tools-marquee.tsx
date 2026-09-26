"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";

export default function ToolsMarquee() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  const tools = [
    "Adobe Photoshop", "Adobe Premiere Pro", "Adobe After Effects", "Canva", "CapCut", "InShot",
    "Gemini", "Nano Banana", "Google Flow", "Kling", "Veo", "Runway", "Pika", "Flash / Omni Flash",
    "Claude", "Manus", "ElevenLabs", "Lahajati", "Figma", "DaVinci Resolve",
  ];

  const loop = [...tools, ...tools];

  return (
    <section aria-label={locale === "ar" ? "الأدوات" : "Tools"} className="relative py-10 border-y border-navy-line bg-navy-base/40 overflow-hidden">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-card/80 backdrop-blur border border-gold-accent/30 text-[10px] uppercase tracking-[0.25em] text-gold-accent font-semibold">
          <Sparkles className="w-3 h-3" />
          {locale === "ar" ? "الأدوات اللي بشتغل فيها" : "Tools I work with"}
        </div>
      </div>

      <div className="relative flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
        <motion.div animate={{ x: isRtl ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-8 pe-8 pt-12">
          {loop.map((tool, i) => (
            <span key={`${tool}-${i}`} className="inline-flex items-center gap-2 text-sm sm:text-base text-cream-muted font-medium whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: i % 3 === 0 ? "#D4AF37" : i % 3 === 1 ? "#64FFDA" : "#F5D77E" }} />
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { CONTACT } from "@/lib/contact";

export default function StickyConversionFooter() {
  const { locale, t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const viewport = window.innerHeight;
      setVisible(y > viewport * 0.7 && y < document.body.scrollHeight - viewport * 1.1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    locale === "ar" ? "مرحباً علي، أود مناقشة مشروع." : "Hi Ali, I'd love to discuss a project."
  )}`;
  const emailUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    locale === "ar" ? "استفسار مشروع" : "Project Inquiry"
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="lg:hidden fixed bottom-24 inset-x-4 z-30" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
          <div className="flex items-center gap-2 rounded-2xl p-2"
            style={{ background: "rgba(10, 25, 47, 0.8)", backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(212, 175, 55, 0.35)",
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.7)" }}>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-electric-blue/15 text-electric-blue active:scale-95 transition-transform">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs font-semibold">{t.contact.whatsapp}</span>
            </a>
            <a href={emailUrl} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl btn-gold active:scale-95 transition-transform">
              <Mail className="w-4 h-4" />
              <span className="text-xs font-semibold">{t.contact.email}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

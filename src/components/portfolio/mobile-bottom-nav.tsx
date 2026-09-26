"use client";

import { useEffect, useState } from "react";
import { Home, Briefcase, Sparkles, Mail } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { cn } from "@/lib/utils";

export default function MobileBottomNav() {
  const { t } = useLanguage();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "work", "services", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 180) {
          current = id; break;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { id: "home", label: t.mobileNav.home, icon: Home },
    { id: "work", label: t.mobileNav.work, icon: Briefcase },
    { id: "services", label: t.mobileNav.services, icon: Sparkles },
    { id: "contact", label: t.mobileNav.contact, icon: Mail },
  ];

  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-40" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="relative rounded-2xl overflow-hidden"
        style={{ background: "rgba(10, 25, 47, 0.65)", backdropFilter: "blur(18px) saturate(140%)",
          WebkitBackdropFilter: "blur(18px) saturate(140%)", border: "1px solid rgba(212, 175, 55, 0.3)",
          boxShadow: "0 12px 40px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.08) inset" }}>
        <ul className="grid grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={cn("w-full flex flex-col items-center gap-1 py-3 transition-all active:scale-95",
                    isActive ? "text-gold-accent" : "text-cream-dim")} aria-label={item.label}>
                  <span className={cn("grid place-items-center w-9 h-9 rounded-xl transition-all", isActive ? "bg-gold-accent/15 glow-gold-sm" : "bg-transparent")}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

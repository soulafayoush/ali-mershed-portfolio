"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="hidden lg:flex fixed bottom-8 end-8 z-40 w-10 h-10 items-center justify-center text-gold-accent hover:text-gold-bright transition-colors"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

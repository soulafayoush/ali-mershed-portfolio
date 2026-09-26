"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const dotPos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    const target = { x: -100, y: -100 };
    let raf = 0;
    let hidden = false;

    const applyRingStyle = () => {
      if (!ringRef.current) return;
      const h = hoveringRef.current;
      const size = h ? 56 : 36;
      ringRef.current.style.width = `${size}px`;
      ringRef.current.style.height = `${size}px`;
      ringRef.current.style.borderColor = h ? "#64FFDA" : "rgba(212, 175, 55, 0.7)";
      ringRef.current.style.background = h ? "rgba(100, 255, 218, 0.08)" : "transparent";
      ringRef.current.style.mixBlendMode = h ? "difference" : "normal";
      ringRef.current.style.opacity = hidden ? "0" : "1";
      ringRef.current.style.transform = `translate3d(${ringPos.x - size / 2}px, ${ringPos.y - size / 2}px, 0)`;
    };

    const applyDotStyle = () => {
      if (!dotRef.current) return;
      dotRef.current.style.opacity = hidden ? "0" : "1";
      dotRef.current.style.transform = `translate3d(${dotPos.x - 4}px, ${dotPos.y - 4}px, 0)`;
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX; target.y = e.clientY;
      dotPos.x = e.clientX; dotPos.y = e.clientY;
      applyDotStyle();
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('a, button, input, textarea, [data-cursor="hover"], .glass-card-hover, [role="button"]');
      const next = Boolean(el);
      if (next !== hoveringRef.current) {
        hoveringRef.current = next;
        applyRingStyle();
      }
    };

    const onLeave = () => { hidden = true; applyRingStyle(); applyDotStyle(); };
    const onEnter = () => { hidden = false; applyRingStyle(); applyDotStyle(); };

    const animate = () => {
      ringPos.x += (target.x - ringPos.x) * 0.18;
      ringPos.y += (target.y - ringPos.y) * 0.18;
      applyRingStyle();
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} aria-hidden="true" className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D4AF37",
          boxShadow: "0 0 12px rgba(212, 175, 55, 0.8)", opacity: 0,
          transition: "opacity 0.2s ease", mixBlendMode: "screen", willChange: "transform" }} />
      <div ref={ringRef} aria-hidden="true" className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ width: "36px", height: "36px", borderRadius: "50%",
          border: "1.5px solid rgba(212, 175, 55, 0.7)", background: "transparent", opacity: 0,
          transition: "opacity 0.2s ease, background 0.25s ease, border-color 0.25s ease, width 0.25s ease, height 0.25s ease",
          mixBlendMode: "normal", willChange: "transform, width, height" }} />
    </>
  );
}

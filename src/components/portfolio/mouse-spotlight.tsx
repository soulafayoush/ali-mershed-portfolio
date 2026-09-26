"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const isFinePointer = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    const handleLeave = () => { target.current = { x: -500, y: -500 }; };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x - 300}px, ${current.current.y - 300}px, 0)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[5] hidden md:block"
      style={{
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212, 175, 55, 0.10) 0%, rgba(100, 255, 218, 0.05) 35%, transparent 70%)",
        filter: "blur(20px)", willChange: "transform",
      }}
    />
  );
}

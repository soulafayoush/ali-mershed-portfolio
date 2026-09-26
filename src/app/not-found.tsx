"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen grid place-items-center bg-[#0A192F] text-[#F4F4F4] px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)" }} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="relative z-10 text-center max-w-md">
        <div className="text-7xl sm:text-9xl font-bold text-gradient-gold text-glow-gold mb-4">404</div>
        <h1 className="text-xl sm:text-2xl font-semibold text-cream-text mb-3">Page not found</h1>
        <p className="text-sm text-cream-muted mb-8">
          The page you're looking for doesn't exist, or has been moved.
        </p>
        <Link href="/" data-cursor="hover"
          className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {visible && (
        <motion.button onClick={scrollTop} data-cursor="hover" aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="hidden lg:flex fixed bottom-8 end-8 z-40 w-12 h-12 rounded-full grid place-items-center"
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)",
            color: "#0A192F",
            border: "1px solid rgba(245, 215, 126, 0.5)",
            boxShadow: "0 8px 24px -8px rgba(212, 175, 55, 0.7), 0 0 0 1px rgba(212, 175, 55, 0.2)",
          }}>
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

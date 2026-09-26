"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left">
      <div className="w-full h-full"
        style={{
          background: "linear-gradient(90deg, #AA7C11 0%, #D4AF37 30%, #F5D77E 50%, #D4AF37 70%, #64FFDA 100%)",
          boxShadow: "0 0 12px rgba(212, 175, 55, 0.6)",
        }} />
    </motion.div>
  );
}

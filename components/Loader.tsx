"use client";

import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h1
        className="font-heading font-bold text-3xl md:text-5xl tracking-tighter text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        CryptoKnights
      </motion.h1>
      <div className="w-64 h-[2px] bg-border overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-white"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          onAnimationComplete={onComplete}
        />
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function TextAnimation() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="fixed top-0 left-0 bg-slate-600 w-full h-full z-0" />
      <div className="fixed bottom-0 left-0 bg-slate-800 w-full h-2/6 z-20" />

      <motion.span
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-6xl text-slate-50 font-mono z-10"
      >
        The happiness of your life depends upon the quality of your thoughts.
      </motion.span>
    </main>
  );
}

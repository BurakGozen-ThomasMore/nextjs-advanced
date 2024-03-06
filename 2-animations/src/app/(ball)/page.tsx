"use client";

import { motion } from "framer-motion";

export default function BallAnimation() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-800">
      <motion.div
        animate={{ y: [100, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeOut" }}
        className="bg-sky-500 size-80 rounded-full"
      />
    </main>
  );
}

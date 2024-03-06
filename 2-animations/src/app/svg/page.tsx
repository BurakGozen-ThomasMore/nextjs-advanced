"use client";

import { motion } from "framer-motion";

export default function SVGAnimation() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-800">
      <motion.svg
        viewBox="0 0 24 24"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-sky-500 size-40 fill-none"
      >
        <motion.path
          d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.svg>
    </main>
  );
}

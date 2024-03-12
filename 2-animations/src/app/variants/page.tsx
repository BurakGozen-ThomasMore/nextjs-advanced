"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MotionChevronDown = motion(ChevronDown);

export default function BallAnimation() {
  const container = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const item = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <main className="bg-slate-800 font-mono flex flex-col">
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl text-white">Scroll naar beneden</h1>
        <MotionChevronDown
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="w-12 h-12 text-white"
        />
      </div>

      <motion.ul
        className="flex flex-col items-center bg-white/40 p-10 rounded-3xl m-24"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.li
            key={index}
            variants={item}
            className="bg-white/50 w-full h-20 mb-4 rounded-xl"
          />
        ))}
      </motion.ul>
    </main>
  );
}

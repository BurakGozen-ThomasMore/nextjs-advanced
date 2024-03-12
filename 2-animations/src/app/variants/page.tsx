"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MotionChevronDown = motion(ChevronDown);

export default function VariantsAnimation() {
  return (
    <main className="bg-slate-800 font-mono flex flex-col">
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl text-white">Scroll naar beneden</h1>
        <MotionChevronDown className="w-12 h-12 text-white" />
      </div>

      <ul className="flex flex-col items-center bg-white/40 p-10 rounded-3xl m-24">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="bg-white/50 w-full h-20 mb-4 rounded-xl" />
        ))}
      </ul>
    </main>
  );
}

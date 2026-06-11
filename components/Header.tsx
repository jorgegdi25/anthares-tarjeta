"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section-shell relative z-20 pt-5"
    >
      <div className="flex items-center justify-center rounded-full border border-white/5 bg-white/5 px-6 py-3 backdrop-blur">
        <Image
          src="/tarjeta/images/logo-anthares.png"
          alt="Logo ANTHARES"
          width={105}
          height={61}
          priority
          className="h-auto w-[95px] sm:w-[105px]"
        />
      </div>
    </motion.header>
  );
}

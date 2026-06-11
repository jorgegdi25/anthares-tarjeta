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
      <div className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
        <Image
          src="/images/logo-anthares.png"
          alt="Logo ANTHARES"
          width={125}
          height={73}
          priority
          className="h-auto w-[112px] sm:w-[125px]"
        />
      </div>
    </motion.header>
  );
}

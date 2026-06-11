"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 pt-6"
    >
      <div className="flex-1" />
      <div className="flex justify-center flex-1">
        <Image
          src="/tarjeta/images/logo-anthares.png"
          alt="Logo ANTHARES"
          width={140}
          height={82}
          priority
          className="h-auto w-[120px]"
        />
      </div>
      <div className="flex justify-end flex-1">
        <button className="flex flex-col gap-[5px] p-2">
          <div className="w-6 h-[1.5px] bg-white" />
          <div className="w-6 h-[1.5px] bg-white" />
          <div className="w-6 h-[1.5px] bg-white" />
        </button>
      </div>
    </motion.header>
  );
}

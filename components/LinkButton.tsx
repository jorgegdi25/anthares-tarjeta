"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";

type LinkButtonProps = {
  href: string;
  label: string;
  icon: ReactNode;
  caption?: string;
  prominent?: boolean;
};

export function LinkButton({ href, label, icon, caption, prominent = false }: LinkButtonProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }}>
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`group flex items-center gap-4 rounded-[1.55rem] border px-4 py-4 transition-all duration-300 ${
          prominent
            ? "border-anthares-amber/40 bg-gradient-to-r from-anthares-ember/30 to-anthares-amber/15 shadow-glow"
            : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]"
        }`}
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full border ${
            prominent
              ? "border-anthares-amber/50 bg-black/35 text-anthares-sand"
              : "border-white/10 bg-white/5 text-white/88"
          }`}
        >
          <span className="h-5 w-5">{icon}</span>
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold tracking-[0.02em] text-white">{label}</p>
          {caption ? <p className="mt-1 text-xs tracking-[0.08em] text-white/48">{caption}</p> : null}
        </div>
        <ArrowIcon className="h-4 w-4 text-white/65 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, type ReactNode } from "react";

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
  caption?: string;
}

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  links: SocialLink[];
}

export function SocialBottomSheet({ isOpen, onClose, links }: BottomSheetProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 flex max-h-[85vh] flex-col items-center rounded-t-[2rem] bg-[#121212] px-6 pb-12 pt-5 shadow-2xl overflow-hidden"
          >
            {/* Drag Handle */}
            <div className="mb-8 h-1.5 w-12 shrink-0 rounded-full bg-[#D86A20]" />

            <h3 className="mb-6 font-serif text-[1.35rem] tracking-wide text-white shrink-0">
              Nuestras Redes
            </h3>

            <div className="flex w-full max-w-md flex-col overflow-y-auto scrollbar-hide pb-4">
              {links.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className={`group flex items-center justify-between py-4 ${
                    idx === 0 ? "border-t" : "border-t"
                  } ${
                    idx === links.length - 1 ? "border-b" : ""
                  } border-white/5 transition-colors hover:bg-white/5`}
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <span className="h-5 w-5 text-white flex items-center justify-center">{link.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[1.05rem] font-medium tracking-wide text-white">{link.label}</span>
                      {link.caption && (
                        <span className="mt-0.5 text-[0.8rem] tracking-[0.05em] text-white/50">{link.caption}</span>
                      )}
                    </div>
                  </div>
                  <svg className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              ))}
              
              <button
                onClick={onClose}
                className="mt-8 shrink-0 w-full py-2 text-[1rem] tracking-wide text-white/60 transition-colors hover:text-white"
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

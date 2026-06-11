"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactBottomSheet({ isOpen, onClose }: BottomSheetProps) {
  // Prevent scrolling when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
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
            className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center rounded-t-[2rem] border-t border-white/10 bg-[#0a0a0a] px-6 pb-12 pt-8 shadow-2xl"
          >
            {/* Drag Handle */}
            <div className="mb-6 h-1.5 w-12 rounded-full bg-white/20" />

            <h3 className="mb-8 font-serif text-2xl tracking-wide text-white">
              ¿En qué podemos ayudarte?
            </h3>

            <div className="flex w-full max-w-md flex-col gap-3">
              <a
                href="https://wa.me/573176612660?text=Hola,%20me%20gustaría%20obtener%20información%20general%20sobre%20las%20piezas%20de%20Anthares."
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full rounded-2xl bg-white/10 py-4 text-center text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/20"
              >
                Información General
              </a>
              <a
                href="https://wa.me/573229061033?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20o%20consultar%20sobre%20ventas%20en%20Anthares."
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full rounded-2xl border border-anthares-amber/30 bg-anthares-amber/10 py-4 text-center text-sm font-medium tracking-wide text-anthares-amber transition-colors hover:bg-anthares-amber/20"
              >
                Ventas y Pedidos
              </a>
              
              <button
                onClick={onClose}
                className="mt-4 w-full py-3 text-sm tracking-wide text-white/50 transition-colors hover:text-white"
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

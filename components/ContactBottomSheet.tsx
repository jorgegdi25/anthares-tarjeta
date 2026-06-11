"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { WhatsAppIcon } from "./icons";

// We need a simple ShoppingBagIcon for Ventas y Pedidos
function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  );
}

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactBottomSheet({ isOpen, onClose }: BottomSheetProps) {
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
            className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center rounded-t-[2rem] bg-[#121212] px-6 pb-12 pt-5 shadow-2xl"
          >
            {/* Drag Handle */}
            <div className="mb-8 h-1.5 w-12 rounded-full bg-[#D86A20]" />

            <h3 className="mb-8 font-serif text-[1.35rem] tracking-wide text-white">
              ¿En qué podemos ayudarte?
            </h3>

            <div className="flex w-full max-w-md flex-col">
              {/* Option 1 */}
              <a
                href="https://wa.me/573024493972?text=Hola,%20me%20gustaría%20obtener%20información%20general%20sobre%20las%20piezas%20de%20Anthares."
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group flex items-center justify-between py-5 border-t border-white/5 transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D86A20]/40 bg-black/30">
                    <WhatsAppIcon className="h-[1.1rem] w-[1.1rem] text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[1.05rem] font-medium tracking-wide text-white">Información General</span>
                    <span className="mt-1 text-[0.85rem] tracking-[0.05em] text-[#D86A20]">302 449 3972</span>
                  </div>
                </div>
                <svg className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path></svg>
              </a>

              {/* Option 2 */}
              <a
                href="https://wa.me/573128043330?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20o%20consultar%20sobre%20ventas%20en%20Anthares."
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group flex items-center justify-between py-5 border-t border-b border-white/5 transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D86A20]/40 bg-black/30">
                    <ShoppingBagIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[1.05rem] font-medium tracking-wide text-white">Ventas y Pedidos</span>
                    <span className="mt-1 text-[0.85rem] tracking-[0.05em] text-[#D86A20]">312 804 3330</span>
                  </div>
                </div>
                <svg className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path></svg>
              </a>
              
              <button
                onClick={onClose}
                className="mt-8 w-full py-2 text-[1rem] tracking-wide text-white/60 transition-colors hover:text-white"
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

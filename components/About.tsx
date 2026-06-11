"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="section-shell mt-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="card-surface rounded-[1.8rem] px-6 py-8">
          <p className="soft-label">Mas de nosotros</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[1.95rem] leading-[1.02] text-white">
            Piezas unicas, viajes remotos y una mirada profundamente artesanal.
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70">
            ANTHARES mezcla joyeria etnica, cristales antiguos, accesorios y textiles seleccionados
            con sensibilidad, memoria cultural y pasion por lo extraordinario.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

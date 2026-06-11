"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const stories = [
  {
    id: "origen",
    label: "Origen",
    title: "Antares, la estrella que da nombre a la marca.",
    body:
      "Tomamos nuestro nombre de Antares, la estrella mas brillante de la constelacion de Escorpio: inmensa, visible y dificil de olvidar."
  },
  {
    id: "taller",
    label: "Taller",
    title: "Un pequeno gran taller en Pereira, Colombia.",
    body:
      "Disenamos y fabricamos joyeria etnica unica, trabajando con pedreria y cristales antiguos que recorrieron Europa, Asia y Africa."
  },
  {
    id: "universo",
    label: "Universo",
    title: "Piedras africanas, textiles y objetos con historia.",
    body:
      "Anthares tambien comparte munecas africanas, textiles, artefactos y accesorios traidos por nosotros mismos desde estas tierras."
  },
  {
    id: "creemos",
    label: "Creemos",
    title: "El exito es una pasion bien administrada.",
    body:
      "Creemos en la actitud, en entregar felicidad a nuestros clientes y en vivir cada dia con pasion, determinacion y una sonrisa frente al nuevo sol."
  }
] as const;

export function StoryPills() {
  const [active, setActive] = useState<(typeof stories)[number]["id"]>("origen");
  const current = stories.find((story) => story.id === active) ?? stories[0];

  return (
    <section className="section-shell mt-14">
      <p className="soft-label">Descubre Anthares</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stories.map((story) => {
          const isActive = story.id === active;

          return (
            <button
              key={story.id}
              type="button"
              onClick={() => setActive(story.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-anthares-amber/45 bg-anthares-ember/18 text-white"
                  : "border-white/10 bg-white/[0.03] text-white/66"
              }`}
            >
              {story.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="px-6 py-7"
          >
            <h2 className="font-[family-name:var(--font-display)] text-[1.9rem] leading-[1.02] text-white">
              {current.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">{current.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Cristales",
    image: "/tarjeta/images/collections/joyeria2.jpg",
  },
  {
    title: "Cuentas Africanas",
    image: "/tarjeta/images/collections/munecas1.jpg",
  },
  {
    title: "Joyería Étnica",
    image: "/tarjeta/images/collections/marroco1.jpg",
  },
  {
    title: "Piezas Antiguas",
    image: "/tarjeta/images/collections/textiles2.jpg",
  },
];

export function CollectionsGallery() {
  return (
    <div className="mx-auto w-full max-w-md px-5 pb-12 pt-8">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center font-serif text-2xl tracking-widest text-white/90"
      >
        COLECCIONES
      </motion.h2>

      <div className="flex flex-col gap-6">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.title}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-white/5"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-serif text-xl tracking-wider text-white">
                {collection.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

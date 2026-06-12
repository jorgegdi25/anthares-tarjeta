"use client";

import Image from "next/image";

const collections = [
  {
    title: "PIEDRAS AFRICANAS",
    image: "/tarjeta/images/collections/marroco1.jpg",
  },
  {
    title: "JOYERÍA ÉTNICA",
    image: "/tarjeta/images/collections/joyeria2.jpg",
  },
  {
    title: "MUÑECAS AFRICANAS",
    image: "/tarjeta/images/collections/munecas1.jpg",
  },
  {
    title: "TEXTILES AFRICANOS",
    image: "/tarjeta/images/collections/textiles2.jpg",
  },
];

export function CollectionsGallery() {
  return (
    <div className="w-full mt-12 pb-12">
      <div className="flex flex-col items-center mb-10 mt-6">
        <div className="w-1.5 h-1.5 rotate-45 border border-[#D86A20] mb-3"></div>
        <h2 className="font-sans text-[0.85rem] font-medium tracking-[0.35em] text-white/90">
          NUESTRAS COLECCIONES
        </h2>
      </div>

      {/* Horizontal scrolling container for mobile, or grid for larger screens */}
      <div className="flex overflow-x-auto gap-4 px-6 pb-6 snap-x snap-mandatory scrollbar-hide">
        {collections.map((collection) => (
          <div
            key={collection.title}
            className="group relative flex-none w-[180px] h-[260px] snap-center overflow-hidden rounded-[1.2rem] border border-white/5 bg-[#0A0A0A]"
          >
            <div className="absolute inset-x-0 top-0 bottom-[4.5rem]">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-[5rem] bg-[#0A0A0A] flex flex-col items-center justify-center px-2">
              <h3 className="font-sans text-[0.75rem] tracking-[0.2em] text-center text-white mb-2.5 leading-tight">
                {collection.title}
              </h3>
              <div className="flex items-center gap-1">
                <div className="h-px w-6 bg-[#D86A20]/60"></div>
                <div className="w-1 h-1 rotate-45 border border-[#D86A20]"></div>
                <div className="h-px w-6 bg-[#D86A20]/60"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContactBottomSheet } from "@/components/ContactBottomSheet";
import { CollectionsGallery } from "@/components/CollectionsGallery";
import { LinkButton } from "@/components/LinkButton";
import {
  InstagramIcon,
  MapPinIcon,
  TikTokIcon,
} from "@/components/icons";

const secondaryLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/antharesgemas?igsh=eWg0eDkwZDlqN3lz&utm_source=qr",
    icon: <InstagramIcon className="h-5 w-5" />
  },
  {
    label: "TikTok",
    href: "http://www.tiktok.com/@rickygo1",
    icon: <TikTokIcon className="h-5 w-5" />
  },
  {
    label: "Visítanos",
    caption: "Pereira, Colombia",
    href: "https://www.google.com/maps/search/?api=1&query=Anthares+Gemas+y+Cristales",
    icon: <MapPinIcon className="h-5 w-5" />
  }
];

export default function Home() {
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

  return (
    <main className="relative overflow-x-hidden pb-4">
      <Header />
      
      {/* Hero with absolute full coverage and embedded CTA */}
      <Hero onOpenContact={() => setIsContactSheetOpen(true)} />

      {/* Secondary Links - matching LinkTree style from ant1.png */}
      <section className="mx-auto mt-6 w-full max-w-md px-5">
        <div className="flex flex-col gap-3">
          {secondaryLinks.map((link) => (
            <LinkButton
              key={link.label}
              href={link.href}
              label={link.label}
              caption={link.caption}
              icon={link.icon}
              prominent={false}
            />
          ))}
        </div>
      </section>

      {/* Collections section */}
      <CollectionsGallery />

      {/* Footer matching ant1.png */}
      <footer className="mt-8 pb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1 h-1 rotate-45 bg-[#D86A20]"></div>
        </div>
        <p className="font-serif text-[1.2rem] text-white">
          Joyería étnica <span className="text-[#D86A20] mx-1">•</span> Cristales antiguos <span className="text-[#D86A20] mx-1">•</span> África
        </p>
        <p className="mt-4 text-[0.65rem] tracking-[0.3em] text-[#D86A20] font-medium">
          DESDE 1990
        </p>
      </footer>

      <ContactBottomSheet 
        isOpen={isContactSheetOpen} 
        onClose={() => setIsContactSheetOpen(false)} 
      />
    </main>
  );
}

"use client";

import { useState } from "react";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StoryPills } from "@/components/StoryPills";
import { ContactBottomSheet } from "@/components/ContactBottomSheet";
import { CollectionsGallery } from "@/components/CollectionsGallery";
import {
  InstagramIcon,
  MapPinIcon,
  TikTokIcon,
} from "@/components/icons";

const secondaryLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/antharesgemas?igsh=eWg0eDkwZDlqN3lz&utm_source=qr",
    icon: <InstagramIcon className="h-4 w-4" />
  },
  {
    label: "TikTok",
    href: "http://www.tiktok.com/@rickygo1",
    icon: <TikTokIcon className="h-4 w-4" />
  },
  {
    label: "Visítanos",
    href: "https://www.google.com/maps/search/?api=1&query=Anthares+Gemas+y+Cristales",
    icon: <MapPinIcon className="h-4 w-4" />
  }
];

export default function Home() {
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

  return (
    <main className="relative overflow-x-hidden pb-4">
      <Header />
      <Hero />

      {/* Primary CTA */}
      <section className="mx-auto mt-10 w-full max-w-md px-5">
        <button
          onClick={() => setIsContactSheetOpen(true)}
          className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-anthares-amber to-[#D86A20] px-6 py-4 text-sm font-medium tracking-wide text-black transition-transform duration-300 active:scale-95"
        >
          Contactar Anthares
        </button>
      </section>

      {/* Narrative Section */}
      <div className="mt-8">
        <StoryPills />
        <About />
      </div>

      {/* Collections */}
      <CollectionsGallery />

      {/* Secondary Links (Minimalist) */}
      <section className="mx-auto mt-4 mb-16 w-full max-w-md px-5">
        <div className="flex flex-col items-center gap-4">
          {secondaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm tracking-wide text-white/50 transition-colors hover:text-white"
            >
              {link.icon}
              <span className="uppercase">{link.label}</span>
            </a>
          ))}
        </div>
      </section>

      <Footer />

      <ContactBottomSheet 
        isOpen={isContactSheetOpen} 
        onClose={() => setIsContactSheetOpen(false)} 
      />
    </main>
  );
}

"use client";

import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LinkButton } from "@/components/LinkButton";
import { StoryPills } from "@/components/StoryPills";
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  MapPinIcon,
  TikTokIcon,
  WhatsAppIcon
} from "@/components/icons";

const contactLinks = [
  {
    label: "WhatsApp",
    caption: "302 449 3972",
    href: "https://wa.me/573024493972?text=Hola%20Anthares,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20piezas.",
    icon: <WhatsAppIcon className="h-5 w-5" />,
    prominent: true
  },
  {
    label: "WhatsApp",
    caption: "312 804 3330",
    href: "https://wa.me/573128043330?text=Hola%20Anthares,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20piezas.",
    icon: <WhatsAppIcon className="h-5 w-5" />
  },
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
    label: "Facebook",
    href: "https://www.facebook.com/share/1CiGuMiuYS/?mibextid=wwXIfr",
    icon: <FacebookIcon className="h-5 w-5" />
  },
  {
    label: "Sitio Web",
    href: "https://antharesgemas.com",
    icon: <GlobeIcon className="h-5 w-5" />
  },
  {
    label: "Visitanos",
    caption: "Pereira, Colombia",
    href: "https://www.google.com/maps/search/?api=1&query=Anthares+Gemas+y+Cristales",
    icon: <MapPinIcon className="h-5 w-5" />
  }
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden pb-4">
      <Header />
      <Hero />

      <section className="section-shell mt-14">
        <p className="soft-label">Conecta con Anthares</p>
        <div className="mt-5 space-y-3">
          {contactLinks.map((link) => (
            <LinkButton
              key={link.href}
              href={link.href}
              label={link.label}
              caption={link.caption}
              icon={link.icon}
              prominent={link.prominent}
            />
          ))}
        </div>
      </section>

      <StoryPills />
      <About />

      <Footer />
    </main>
  );
}

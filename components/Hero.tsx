"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";

const heroVideoSrc = "/tarjeta/media/anthares-hero.mp4";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      void video.play().catch(() => {});
    };

    const handleVisibility = () => {
      if (!document.hidden) playVideo();
    };

    const handlePause = () => {
      if (!document.hidden) window.setTimeout(playVideo, 250);
    };

    const timeout = window.setTimeout(playVideo, 250);

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("focus", playVideo);
    video.addEventListener("pause", handlePause);

    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("focus", playVideo);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[650px] flex flex-col justify-end pb-8">
      {/* Background Media */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/tarjeta/images/marroco2-2.jpg"
          alt="Composición de gemas y cristales de ANTHARES"
          fill
          priority
          className={`object-cover ${!hasVideoError ? "animate-pulse" : ""}`}
        />
        {!hasVideoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/tarjeta/images/marroco2-2.jpg"
            onLoadedMetadata={(event) => {
              try { event.currentTarget.currentTime = 3.2; } catch {}
            }}
            onLoadedData={(event) => {
              void event.currentTarget.play().catch(() => {});
            }}
            onCanPlay={async () => {
              try { await videoRef.current?.play(); } catch {}
            }}
            onError={() => setHasVideoError(true)}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        )}
        {/* Gradient overlays to blend into black bottom */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#050505]" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 px-8 mx-auto w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[0.8rem] tracking-[0.2em] text-white/95 mb-3 uppercase font-medium">
            Pereira, Colombia • Desde 1990
          </p>
          <h1 className="font-serif text-[3.2rem] leading-[1.05] text-white mb-0">
            Piezas con
          </h1>
          <h1 className="font-serif text-[3.2rem] leading-[1.05] text-[#D86A20] mb-6">
            historia.
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-16 bg-white/30"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#D86A20]"></div>
            <div className="h-px w-16 bg-white/30"></div>
          </div>
          
          <p className="text-white/90 text-[1.05rem] leading-relaxed mb-10 pr-4">
            Cristales, joyería étnica y objetos únicos seleccionados de todo el mundo.
          </p>

          <button
            onClick={onOpenContact}
            className="group relative flex w-full max-w-[320px] items-center justify-between rounded-[2rem] border border-[#D86A20]/60 px-1.5 py-1.5 pr-6 transition-all hover:bg-[#D86A20]/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#D86A20]/50 bg-black/20">
                <WhatsAppIcon className="h-5 w-5 text-[#D86A20]" />
              </div>
              <span className="font-medium text-white text-[1.05rem]">Habla con Anthares</span>
            </div>
            <svg className="h-5 w-5 text-[#D86A20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <div className="mt-5 flex items-center justify-center gap-2 text-white/90 text-[0.9rem] font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Atención personalizada</span>
          </div>

          {/* Scroll Down Indicator (in normal flow to prevent overlap) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 flex flex-col items-center justify-center gap-1.5"
          >
            <span className="text-[0.75rem] uppercase tracking-[0.25em] text-white/80 font-medium">Descubre más</span>
            <motion.svg 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

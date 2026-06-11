"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const heroVideoSrc = "/media/anthares-hero.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const playVideo = () => {
      void video.play().catch(() => {});
    };

    const handleVisibility = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    const handlePause = () => {
      if (!document.hidden) {
        window.setTimeout(playVideo, 250);
      }
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
    <section className="section-shell relative mt-4">
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black shadow-glow">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-fallback.svg"
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
              poster="/images/hero-fallback.svg"
              onLoadedMetadata={(event) => {
                try {
                  event.currentTarget.currentTime = 3.2;
                } catch {
                  // Some mobile browsers delay seeking until the video is ready.
                }
              }}
              onLoadedData={(event) => {
                void event.currentTarget.play().catch(() => {});
              }}
              onCanPlay={async () => {
                try {
                  await videoRef.current?.play();
                } catch {
                  // Fallback image stays visible if autoplay is blocked.
                }
              }}
              onError={() => setHasVideoError(true)}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-black/58" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/22 to-black/90" />
        </div>

        <div className="relative flex min-h-[28rem] flex-col justify-end px-6 pb-9 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-auto max-w-[19rem] text-center"
          >
            <p className="soft-label mb-4 text-anthares-sand/80">Pereira, Colombia • Desde 1990</p>
            <h1 className="font-[family-name:var(--font-display)] text-[2.45rem] leading-[0.96] text-white">
              Joyeria etnica, cristales antiguos y piezas con historia.
            </h1>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Un pequeno gran taller inspirado por Africa, la belleza de las cuentas antiguas y la
              pasion por crear articulos unicos en su genero.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

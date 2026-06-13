import Image from "next/image";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-16 text-center">
      <div className="border-t border-white/10 pt-6 flex flex-col items-center">
        <Image
          src="/logo-antne.png"
          alt="Anthares Logo"
          width={180}
          height={80}
          className="mb-6 object-contain"
        />
        <p className="font-[family-name:var(--font-display)] text-xl text-white/92">
          Joyeria etnica • Cristales antiguos • Africa
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.34em] text-anthares-stone">Desde 1990</p>
      </div>
    </footer>
  );
}

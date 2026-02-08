import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {/* Şəkil */}
      <Image
        src="/images/home/hero-bg.jpg"
        alt="Zest Construction Building"
        fill
        priority
        sizes="(max-width: 1440px) 100vw, 1400px"
        className="object-cover object-center scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2E]/40 via-[#0B1A2E]/20 to-[#0B1A2E]/10" />
    </div>
  );
}
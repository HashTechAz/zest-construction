import Image from "next/image";

export function AboutImage() {
  return (
    <div className="relative w-full flex justify-center lg:justify-start">
      <div className="relative w-full max-w-[600px] h-[280px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-black/10 dark:border-white/10 ring-2 ring-primary/10">
        <Image
          src="/images/home/home-about-pt.jpg"
          alt="About Zest Construction"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
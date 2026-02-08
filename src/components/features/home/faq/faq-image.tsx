import Image from "next/image";

export function FaqImage() {
  return (
    <div className="relative w-full pl-0 sm:pl-8 flex justify-center lg:justify-start min-h-[280px] sm:min-h-[320px]">
      <div className="relative w-full max-w-[550px] aspect-[500/620] bg-slate-100 dark:bg-slate-800/50 rounded-2xl overflow-hidden">
        <div className="relative w-full h-full min-h-[260px]">
          <Image
            src="/images/home/faq-illustration.png"
            alt="Zest Construction FAQs"
            fill
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
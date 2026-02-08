import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export function ServicesHero() {
  return (
    <Container className="relative z-0 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-4">
      <div className="relative w-full min-h-[380px] sm:min-h-[400px] md:h-[450px] rounded-2xl sm:rounded-[30px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-[#0B1A2E]">
          <div className="relative w-full h-full">
            <Image
              src="/images/home/hero-bg.jpg"
              alt="Our Services - Zest Construction"
              fill
              sizes="(max-width: 1440px) 100vw, 1400px"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-[#0B1A2E]/70" />
        </div>
        <div className="relative z-[1] text-center space-y-4 sm:space-y-4 animate-fadeIn py-16 sm:py-20 md:pt-24 md:pb-24 px-5 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Our Services
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-medium bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/10 flex-wrap">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#E4B040]">Our Services</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

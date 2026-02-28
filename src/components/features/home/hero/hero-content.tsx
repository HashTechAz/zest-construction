"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { Container } from "@/components/ui/container";

const scrollToNextSection = () => {
  document.getElementById("hero-next-section")?.scrollIntoView({ behavior: "smooth" });
};

export function HeroContent() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
    );
  }, { scope: containerRef });

  return (
    <Container className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6">
      <div ref={containerRef} className="max-w-4xl space-y-4 sm:space-y-6 text-center mx-auto w-full py-8 sm:py-0">
        <h1 className="hero-text text-xl leading-tight font-bold text-white sm:text-2xl sm:leading-snug md:text-[32px] md:leading-[1.35]">
          Building Dreams, <br className="hidden sm:block" />
          One Brick at a Time
        </h1>

        <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-2 sm:pt-4">
          <Button
            onClick={scrollToNextSection}
            className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto max-w-[280px] sm:max-w-none gap-2"
          >
            Get Started <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto max-w-[280px] sm:max-w-none gap-2 font-medium transition-all duration-300"
          >
            View Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </Container>
  );
}
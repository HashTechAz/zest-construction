"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { Container } from "@/components/ui/container";

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
        
        <h2 className="hero-text text-xs font-bold tracking-[0.2em] text-primary uppercase sm:text-sm">
          Welcome to Zest Development
        </h2>

        <h1 className="hero-text text-[1.75rem] leading-tight font-bold text-white sm:text-3xl sm:leading-snug md:text-[48px] md:leading-[1.35]">
          Building Dreams, <br className="hidden sm:block" />
          One Brick at a Time
        </h1>

        <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-2 sm:pt-4">
          <Button className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto max-w-[280px] sm:max-w-none gap-2">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto max-w-[280px] sm:max-w-none gap-2">
            View Projects <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </Container>
  );
}
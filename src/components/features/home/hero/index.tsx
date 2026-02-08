import { Container } from "@/components/ui/container";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";

export function HeroSection() {
  return (
    <Container className="relative z-10 h-full mt-6 sm:mt-8 md:mt-10 px-3 sm:px-4">
      <section className="relative min-h-[520px] sm:min-h-[580px] md:h-[700px] w-full flex items-center overflow-hidden rounded-2xl sm:rounded-3xl">
        <HeroBackground />
        <HeroContent />
      </section>
    </Container>
  );
}
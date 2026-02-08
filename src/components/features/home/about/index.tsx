import { Container } from "@/components/ui/container";
import { AboutImage } from "./about-image";
import { AboutContent } from "./about-content";

export function AboutSection() {
  return (
    <section className="w-full py-8 sm:py-10 lg:py-16 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </Container>
    </section>
  );
}
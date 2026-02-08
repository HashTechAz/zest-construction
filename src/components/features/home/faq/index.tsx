import { Container } from "@/components/ui/container";
import { FaqImage } from "./faq-image";
import { FaqAccordion } from "./faq-accordion";

export function FaqSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-28 bg-background overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <FaqImage />
          </div>
          
          <div className="order-1 lg:order-2 w-full">
             <FaqAccordion />
          </div>

        </div>
      </Container>
    </section>
  );
}
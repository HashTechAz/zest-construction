import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "./service-card";

const services = [
  {
    title: "Building Construction",
    description: "Expert building construction services ensuring durability, safety, and modern aesthetics. We bring your vision to life with precision.",
    image: "/images/services/service-1.jpg",
    href: "/services/building-construction",
  },
  {
    title: "Architecture Design",
    description: "Innovative architectural designs that blend functionality with artistic vision. Creating spaces that inspire and endure.",
    image: "/images/services/service-2.jpg",
    href: "/services/architecture-design",
  },
  {
    title: "Building Renovation",
    description: "Transform your existing space with our renovation experts. We upgrade structures to meet modern standards and comfort.",
    image: "/images/services/service-1.jpg",
    href: "/services/building-renovation",
  },
];

export function ServicesSection() {
  return (
    <section className="relative w-full bg-[#F2F7FB] dark:bg-background py-12 sm:py-16 md:py-24 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 dark:opacity-5 pointer-events-none">
        <Image 
          src="/images/home/blueprint-bg.png" 
          alt="Blueprint pattern"
          fill
          sizes="600px"
          className="object-contain object-top-right dark:invert"
        />
      </div>

      <Container className="relative z-10">
        
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-3">
          <h4 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base">
            Our Services
          </h4>
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-5xl font-bold px-2">
            Our Construction Services
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto pt-2 px-2">
            Lorem ipsum dolor sit amet consectetur. Etiam neque sit lacinia odio integer. 
            Turpis ut quam enim tortor non neque est.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
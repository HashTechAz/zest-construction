import Image from "next/image";
import { Container } from "@/components/ui/container";

export function AboutStory() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 mt-6 sm:mt-10 lg:py-28 bg-[#F2F7FB] dark:bg-background transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-[30px] overflow-hidden shadow-2xl">
              <Image
                src="/images/services/service-1.jpg"
                alt="Our History Construction"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 sm:bottom-0 sm:right-6 md:-bottom-10 md:-right-10 bg-white dark:bg-[#161B22] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[30px] shadow-xl border border-slate-100 dark:border-white/5 transition-colors duration-300 text-center min-w-[140px] sm:min-w-[180px] md:min-w-[200px]">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">
                12+
              </span>
              <span className="text-primary font-medium text-sm sm:text-base md:text-lg leading-tight block">
                Years Of <br /> Experience
              </span>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10 lg:pt-0">
            <h4 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm">
              Our History
            </h4>
            
            <div className="space-y-3 sm:space-y-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed transition-colors">
              <p>
                ZEST Development founded in 2024 and the dedicated to building excellence with precision, innovation, and integrity. With years of industry expertise, company deliver high-quality construction solutions that stand the test of time. Whether it’s residential, commercial, or industrial projects, company's skilled team ensures every detail is executed flawlessly.
                ZEST Development creates timeless, high-quality structures that combine innovative design, sustainable practices, and unmatched craftsmanship, shaping spaces built to last.
                ZEST Development prioritize safety, efficiency, and sustainability, transforming visions into reality with.

              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
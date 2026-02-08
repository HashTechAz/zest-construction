import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button/button";

export function AboutContent() {
  return (
    <div className="flex flex-col gap-6 text-center lg:text-left">

      {/* Balaca Qırmızı Başlıq */}
      <h3 className="text-lg font-bold uppercase tracking-wide text-red-700">
        About Us
      </h3>

      {/* Paraqraf */}
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
        ZEST Development founded in 2024 and the dedicated to building excellence with precision, innovation, and integrity. With years of industry expertise, company deliver high-quality construction solutions that stand the test of time. Whether it’s residential, commercial, or industrial projects, company's skilled team ensures every detail is executed flawlessly.
        ZEST Development creates timeless, high-quality structures that combine innovative design, sustainable practices, and unmatched craftsmanship, shaping spaces built to last.
        ZEST Development prioritize safety, efficiency, and sustainability, transforming visions into reality with

      </p>

      {/* Button */}
      <div className="pt-2 flex justify-center lg:justify-start">
        <Button className="h-12 px-8 text-base gap-2 shadow-xl shadow-orange-500/20">
          Get started <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>

    </div>
  );
}
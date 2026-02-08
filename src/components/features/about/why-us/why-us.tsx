"use client";

import { Container } from "@/components/ui/container";
import { Award, Clock, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Expert Craftsmanship",
    description: "Our skilled team delivers precise, high-quality workmanship in every project, ensuring durable, beautiful results that reflect our commitment to excellence and detail.",
    icon: Award,
  },
  {
    title: "Reliable & On-Time",
    description: "We consistently meet project deadlines without compromising on quality, ensuring smooth execution and dependable results every step of the way.",
    icon: Clock,
  },
  {
    title: "Innovative Solutions",
    description: "We bring modern designs and smart construction techniques together to deliver creative, efficient, and future-ready solutions tailored to every project.",
    icon: Lightbulb,
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0B1525] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E4B040]/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#11223B] dark:text-white mb-6 leading-tight">
              Why We&apos;re <br />
              <span className="text-[#E4B040]">Your Best Choice</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
              We specialize in general construction and framing & forming, delivering high-quality, on-time, and budget-friendly results. 
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              With a focus on craftsmanship, safety, and long-term value, we build lasting relationships and spaces that strengthen communities.
            </p>
            <div className="mt-8 h-1.5 w-24 bg-[#E4B040] rounded-full" />
          </div>
          <div className="flex flex-col gap-6 relative z-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white dark:bg-[#11223B]/50 border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:border-[#E4B040]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#E4B040]/10 flex gap-5"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#E4B040]/10 text-[#E4B040] flex items-center justify-center group-hover:bg-[#E4B040] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#11223B] dark:text-white mb-2 group-hover:text-[#E4B040] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
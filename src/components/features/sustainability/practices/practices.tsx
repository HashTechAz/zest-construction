import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";

const practices = [
  {
    title: "Sustainable materials",
    description: "Locally sourced and low-impact materials where possible.",
  },
  {
    title: "Energy efficiency",
    description: "Efficient design and systems for lower long-term impact.",
  },
  {
    title: "Waste & recycling",
    description: "Reduction and recycling on site with clear procedures.",
  },
  {
    title: "Water efficiency",
    description: "Responsible water use in construction and operation.",
  },
  {
    title: "Safe worksites",
    description: "Healthy sites and fair labour practices for everyone.",
  },
  {
    title: "Transparency",
    description: "Clear reporting and continuous improvement.",
  },
];

export function SustainabilityPractices() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#F8F9FA] dark:bg-[#0B1525] transition-colors duration-300">
      <Container>
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <h2 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            What we do
          </h2>
          <h3 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Our sustainability practices
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We integrate these practices into every project from planning to handover.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 overflow-hidden bg-white/60 dark:bg-[#161B22]/80 backdrop-blur-sm shadow-sm">
            {practices.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 sm:p-5 border-b border-slate-100 dark:border-white/5 last:border-b-0 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-2 ring-primary/20">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[#1E1E1E] dark:text-white font-semibold text-sm sm:text-base mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

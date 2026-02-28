import { ClipboardList, PencilRuler, Hammer, Key } from "lucide-react";
import { Container } from "@/components/ui/container";

const steps = [
  { icon: ClipboardList },
  { icon: PencilRuler },
  { icon: Hammer },
  { icon: Key },
];

export function ServiceProcess() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0c0f12] transition-colors duration-300 overflow-hidden">
      <Container>
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
          <h2 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl md:text-5xl font-bold transition-colors">
            How We Work
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 dark:border-white/10 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="group relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white dark:bg-[#1E1E1E] border-4 border-[#F8F9FA] dark:border-white/5 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:border-[#E4B040] group-hover:scale-110">
                <step.icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-[#E4B040]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
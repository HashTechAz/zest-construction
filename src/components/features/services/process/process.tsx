import { ClipboardList, PencilRuler, Hammer, Key } from "lucide-react";
import { Container } from "@/components/ui/container";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Consultation",
    description: "We meet to discuss your vision, requirements, and budget to ensure a solid foundation.",
  },
  {
    icon: PencilRuler,
    number: "02",
    title: "Planning & Design",
    description: "Our architects create detailed blueprints and 3D models tailored to your specific needs.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Construction",
    description: "Our skilled team brings the design to life using high-quality materials and precise techniques.",
  },
  {
    icon: Key,
    number: "04",
    title: "Project Handover",
    description: "Final inspections, finishing touches, and handing over the keys to your new space.",
  },
];

export function ServiceProcess() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0c0f12] transition-colors duration-300 overflow-hidden">
      <Container>
        
        {/* Başlıq */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-3 px-2">
          <h4 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm">
            How We Work
          </h4>
          <h2 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl md:text-5xl font-bold transition-colors">
            Our Working Process
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 dark:border-white/10 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="group relative z-10 flex flex-col items-center text-center">
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white dark:bg-[#1E1E1E] border-4 border-[#F8F9FA] dark:border-white/5 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg transition-all duration-500 group-hover:border-[#E4B040] group-hover:scale-110">
                <step.icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-[#E4B040]" />
              </div>

              {/* Nömrə (Arxa fonda solğun) */}
              <div className="absolute top-0 right-10 lg:right-4 -z-10 text-6xl font-black text-slate-100 dark:text-white/5 opacity-0 lg:opacity-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#E4B040]/10">
                {step.number}
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1E1E1E] dark:text-white mb-2 sm:mb-3 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-[280px] mx-auto transition-colors">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
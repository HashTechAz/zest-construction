import { Leaf, Recycle, Users } from "lucide-react";
import { Container } from "@/components/ui/container";

const pillars = [
  {
    icon: Leaf,
    title: "Environmental responsibility",
    description:
      "We minimise our environmental footprint through efficient resource use, reduced waste, and support for green building standards where applicable.",
  },
  {
    icon: Recycle,
    title: "Resource efficiency",
    description:
      "From design to handover, we prioritise sustainable materials, energy-efficient systems, and responsible sourcing in our supply chain.",
  },
  {
    icon: Users,
    title: "Community & safety",
    description:
      "We invest in local communities and ensure safe, healthy worksites. Our projects are delivered with respect for people and place.",
  },
];

export function SustainabilityCommitment() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white dark:bg-background transition-colors duration-300">
      <Container>
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <h2 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Our commitment
          </h2>
          <h3 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Building for the future
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Sustainability is at the core of how we plan, build, and deliver. We aim to create lasting value for our clients and the environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-[#F8F9FA] dark:bg-[#161B22] border border-slate-200 dark:border-white/5 rounded-2xl sm:rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 text-primary bg-primary/10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#1E1E1E] dark:text-white mb-3">
                {item.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

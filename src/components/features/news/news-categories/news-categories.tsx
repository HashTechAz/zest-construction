import { Container } from "@/components/ui/container";
import { FolderOpen, Leaf, Building2, Shield } from "lucide-react";

const categories = [
  { name: "Projects", icon: Building2, description: "New projects and handovers" },
  { name: "Sustainability", icon: Leaf, description: "Green practices and initiatives" },
  { name: "Company", icon: FolderOpen, description: "Partnerships and milestones" },
  { name: "Safety", icon: Shield, description: "Safety and quality updates" },
];

export function NewsCategories() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white dark:bg-background transition-colors duration-300">
      <Container>
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">
            Topics
          </h2>
          <h3 className="text-[#1E1E1E] dark:text-white text-xl sm:text-2xl font-bold">
            What we cover
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center text-center p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-[#F8F9FA] dark:bg-[#161B22] hover:border-primary/20 dark:hover:border-primary/20 transition-colors"
            >
              <item.icon className="w-8 h-8 sm:w-9 sm:h-9 text-primary mb-2" />
              <span className="text-[#1E1E1E] dark:text-white font-semibold text-sm sm:text-base">
                {item.name}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

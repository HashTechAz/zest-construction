import { Target, Eye, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To design, build and deliver safe, high-quality and cost-effective construction projects on schedule for our customers while providing quality employment and career growth opportunities for ZEST Development’s Employees.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be one of the leading innovative engineering & construction companies. Our vision based on integrity, innovative acumen and stewardshi.",
  },
  {
    icon: Handshake, // "Values" üçün əl sıxma ikonu
    title: "Our Values",
    description: "Our values based on sustainability, commitment and transparency. We believe that sustainability, commitment and transparency make our world better place to live.",
  },
];

export function AboutValues() {
  return (
    // Light: bg-white | Dark: bg-background (#1E1E1E)
    <section className="w-full py-12 sm:py-16 md:py-20 bg-white dark:bg-background transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {values.map((item, index) => (
            <div 
              key={index}
              className="group p-5 sm:p-7 md:p-10 bg-white dark:bg-[#161B22] border border-slate-100 dark:border-white/5 rounded-2xl sm:rounded-[30px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 text-primary bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] dark:text-white mb-3 sm:mb-4 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
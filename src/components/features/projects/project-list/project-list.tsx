import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

const projects = [
  {
    title: "Modern City Center",
    category: "Commercial",
    image: "/images/projects/project-1.jpg",
    location: "Baku, Azerbaijan",
  },
  {
    title: "Skyline Residence",
    category: "Residential",
    image: "/images/projects/project-2.jpg",
    location: "Sumqayit, Azerbaijan",
  },
  {
    title: "Eco Green Villa",
    category: "Architecture",
    image: "/images/projects/project-3.jpg",
    location: "Ganja, Azerbaijan",
  },
];

export function ProjectList() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-28 bg-[#F8F9FA] dark:bg-background transition-colors duration-300">
      <Container>
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2">
          <h4 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Portfolio
          </h4>
          <h2 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl md:text-5xl font-bold transition-colors">
            Our Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Explore our latest construction and design projects across Azerbaijan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((item, index) => (
            <article
              key={index}
              className="group w-full max-w-[440px] mx-auto md:mx-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-[#161B22] border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  {item.category}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#1E1E1E] dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-4">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  {item.location}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View Project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
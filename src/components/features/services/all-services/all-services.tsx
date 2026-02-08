"use client";

import { Container } from "@/components/ui/container";
import { 
  Pickaxe, 
  Sofa, 
  Building2, 
  Paintbrush, 
  Cuboid, 
  Trees, 
  BrickWall, 
  Zap, 
  PencilRuler 
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Foundation works",
    description: "Mechanical site preparation, excavation, leveling, ground preparations, horizontal and vertical waterproofing, backfilling and other works.",
    icon: Pickaxe,
  },
  {
    id: "02",
    title: "Interior works",
    description: "Installation of interior works inside the building - interior doors, sanitary units, any kind of furniture, bringing interior lighting systems to full readiness for use and other similar works.",
    icon: Sofa,
  },
  {
    id: "03",
    title: "Facade works",
    description: "Facade thermal insulation with stone wool. Facade cladding aglay, alkapon, stoneware, marble, granite stones and other materials. Performance of painting work on the facade.",
    icon: Building2,
  },
  {
    id: "04",
    title: "Interior works",
    description: "Making ceilings of different materials, painting ceilings, interior walls and floors, wallpapering and other aesthetic finishing works.",
    icon: Paintbrush,
  },
  {
    id: "05",
    title: "Reinforced concrete",
    description: "Installation of monolithic reinforced concrete slabs, walls and diaphragms, columns, beams, supports, bottom chords, staircases, elevator shafts and floor slabs.",
    icon: Cuboid,
  },
  {
    id: "06",
    title: "Renovation works",
    description: "Construction includes asphalting and landscaping of adjacent areas, landscaping works, provision of lighting, installation of playgrounds, etc.",
    icon: Trees,
  },
  {
    id: "07",
    title: "Masonry & Flooring",
    description: "Masonry work on walls with cobblestone, hollow brick, Gobustan stone and other types of stone. Plastering the walls with cement-sand mortar, putty (spike) and slaked lime.",
    icon: BrickWall,
  },
  {
    id: "08",
    title: "Communication works",
    description: "Complete preparation of electric, communication, water and sewerage, gas and other utility lines and necessary infrastructure within the area and the site.",
    icon: Zap,
  },
  {
    id: "09",
    title: "Design & Projection",
    description: "Designing, which is considered the initial stage of the construction process, includes the process of developing a preliminary design, plan, facade and perspective drawings.",
    icon: PencilRuler,
  },
];

export type ServiceItem = (typeof services)[number];

export function ServiceIconCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  return (
    <div className="group relative bg-slate-50/80 dark:bg-[#11223B]/50 border border-slate-200 dark:border-white/5 p-8 rounded-2xl overflow-hidden hover:border-[#E4B040]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E4B040]/10 hover:-translate-y-1 backdrop-blur-sm">
      <span className="absolute -right-4 -top-6 text-[120px] font-black text-slate-200/50 dark:text-white/5 select-none transition-all duration-500 group-hover:text-[#E4B040]/10 group-hover:scale-110">
        {service.id}
      </span>
      <div className="relative w-14 h-14 bg-[#E4B040]/10 text-[#E4B040] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E4B040] group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-[#11223B] dark:text-white mb-3 relative group-hover:text-[#E4B040] transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative">
        {service.description}
      </p>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E4B040] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export { services as allServicesList };

export function AllServices() {
  return (
    <section className="py-20 bg-white dark:bg-[#0B1525] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#11223B] dark:text-white mb-6">
            Our <span className="text-[#E4B040]">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            We provide comprehensive construction solutions tailored to your specific needs, ensuring quality and durability in every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((service) => (
            <ServiceIconCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
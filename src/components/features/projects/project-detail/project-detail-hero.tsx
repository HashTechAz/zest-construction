import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Project } from "@/data/projects";

interface ProjectDetailHeroProps {
  project: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <Container className="relative z-10 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-4">
      <div className="relative w-full min-h-[520px] sm:min-h-[580px] md:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-end">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1400px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B1A2E]/60" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
          <div className="relative z-10 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-medium mb-4">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
              Projects
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#E4B040]">{project.title}</span>
          </div>
          <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            {project.title}
          </h1>
          <p className="relative z-10 mt-2 text-white/90 text-sm sm:text-base">
            {project.category} · {project.location}
          </p>
        </div>
      </div>
    </Container>
  );
}

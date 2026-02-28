import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MapPin, Calendar, Ruler, User, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectDetailContentProps {
  project: Project;
}

const specItems = [
  { key: "year" as const, label: "Year", icon: Calendar },
  { key: "area" as const, label: "Area", icon: Ruler },
  { key: "client" as const, label: "Client", icon: User },
  { key: "duration" as const, label: "Duration", icon: Clock },
];

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <>
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-background transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm">
                Overview
              </h2>
              <p className="text-[#1E1E1E] dark:text-white text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                {project.location}
              </div>
            </div>
            <div className="rounded-2xl sm:rounded-[30px] border border-slate-200 dark:border-white/10 bg-[#F8F9FA] dark:bg-[#161B22] p-6 sm:p-8 h-fit">
              <h3 className="text-[#1E1E1E] dark:text-white font-bold text-lg mb-6">Key details</h3>
              <ul className="space-y-4">
                {specItems.map(({ key, label, icon: Icon }) => (
                  <li key={key} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</p>
                      <p className="text-[#1E1E1E] dark:text-white font-medium">{project[key]}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {project.highlights.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-[#F8F9FA] dark:bg-[#0B1525] transition-colors duration-300">
          <Container>
            <h2 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl font-bold mb-8">
              Project highlights
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {project.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {project.gallery.length > 0 && (
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-background transition-colors duration-300">
          <Container>
            <h2 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl font-bold mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {project.gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800"
                >
                  <Image
                    src={src}
                    alt={`${project.title} - ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="w-full py-12 sm:py-16 bg-[#F8F9FA] dark:bg-[#0B1525] transition-colors duration-300">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl sm:rounded-[30px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161B22] p-6 sm:p-8 md:p-10">
            <div>
              <h2 className="text-[#1E1E1E] dark:text-white text-xl sm:text-2xl font-bold mb-2">
                Interested in a similar project?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                Get in touch for a consultation and a tailored proposal.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

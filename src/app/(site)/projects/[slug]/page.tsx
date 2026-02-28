import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { ProjectDetailHero, ProjectDetailContent } from "@/components/features/projects/project-detail";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project | Zest Development" };
  return {
    title: `${project.title} | Projects | Zest Development`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      <ProjectDetailHero project={project} />
      <ProjectDetailContent project={project} />
      <Footer />
    </main>
  );
}

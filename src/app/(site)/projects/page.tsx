import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { ProjectsHero, ProjectList } from "@/components/features/projects";

export default function ProjectsPage() {
  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      <ProjectsHero />
      <ProjectList />
      <Footer />
    </main>
  );
}
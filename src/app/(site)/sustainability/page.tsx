import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { SustainabilityHero } from "@/components/features/sustainability/hero/hero";
import { SustainabilityCommitment } from "@/components/features/sustainability/commitment/commitment";
import { SustainabilityPractices } from "@/components/features/sustainability/practices/practices";

export const metadata = {
  title: "Sustainability | Zest Development",
  description:
    "ZEST Development is committed to sustainable construction: environmental responsibility, resource efficiency, and community-focused building.",
};

export default function SustainabilityPage() {
  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      <SustainabilityHero />
      <SustainabilityCommitment />
      <SustainabilityPractices />
      <Footer />
    </main>
  );
}

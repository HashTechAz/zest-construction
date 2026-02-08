import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { SuspenseFallback } from "@/components/ui/suspense-fallback";

const AboutHero = dynamic(
  () => import("@/components/features/about/hero/hero").then((mod) => mod.AboutHero),
  {
    loading: () => <SuspenseFallback className="w-full h-[500px] rounded-[30px]" />,
  }
);

const AboutStory = dynamic(
  () => import("@/components/features/about/story/story").then((mod) => mod.AboutStory),
  {
    loading: () => <SuspenseFallback className="w-full h-[400px] rounded-[30px]" />,
  }
);

const AboutValues = dynamic(
  () => import("@/components/features/about/values/values").then((mod) => mod.AboutValues),
  {
    loading: () => <SuspenseFallback className="w-full h-[400px] rounded-[30px]" />,
  }
);

const AboutTeam = dynamic(
  () => import("@/components/features/about/team/team").then((mod) => mod.AboutTeam),
  {
    loading: () => <SuspenseFallback className="w-full h-[400px] rounded-[30px]" />,
  }
);

const WhyUs = dynamic(
  () => import("@/components/features/about/why-us/why-us").then((mod) => mod.WhyUs),
  {
    loading: () => <SuspenseFallback className="w-full h-[400px] rounded-[30px]" />,
  }
);

export default function AboutPage() {
  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <WhyUs />
      <AboutTeam />
      <Footer />
    </main>
  );
}
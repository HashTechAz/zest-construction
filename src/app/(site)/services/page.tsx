import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { SuspenseFallback } from "@/components/ui/suspense-fallback";

const ServicesHero = dynamic(
  () => import("@/components/features/services/hero/hero").then((mod) => mod.ServicesHero),
  {
    loading: () => <SuspenseFallback className="w-full min-h-[380px] rounded-2xl mx-auto max-w-[1400px] px-4" />,
  }
);

const AllServices = dynamic(
  () => import("@/components/features/services/all-services/all-services").then((mod) => mod.AllServices),
  {
    loading: () => <SuspenseFallback className="w-full h-[400px] rounded-2xl" />,
  }
);

const ServiceProcess = dynamic(
  () => import("@/components/features/services/process/process").then((mod) => mod.ServiceProcess),
  {
    loading: () => <SuspenseFallback className="w-full h-[350px] rounded-2xl" />,
  }
);

export const metadata = {
  title: "Services | Zest Construction",
  description: "Explore our comprehensive construction services",
};

export default function ServicesPage() {
  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      <ServicesHero />
      <AllServices />
      <ServiceProcess />
      <Footer />
    </main>
  );
}
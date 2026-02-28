import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";

export const metadata = {
  title: "Sustainability | Zest Development",
  description: "Zest Development - Sustainability",
};

export default function SustainabilityPage() {
  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
           <h1 className="text-3xl font-bold mt-10">Sustainability</h1>
        </div>
      </div>
      <Footer />
    </main>
  );
}
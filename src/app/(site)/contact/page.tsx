import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { SuspenseFallback } from "@/components/ui/suspense-fallback";

const ContactHero = dynamic(
  () => import("@/components/features/contact/hero/hero").then((mod) => mod.ContactHero),
  {
    loading: () => <SuspenseFallback className="w-full h-[450px] rounded-[30px]" />,
  }
);

const ContactSection = dynamic(
  () => import("@/components/features/home/contact").then((mod) => mod.ContactSection),
  {
    loading: () => <SuspenseFallback className="w-full h-[600px] rounded-[30px]" />,
  }
);

const ContactCards = dynamic(
  () => import("@/components/features/contact/contact-cards/contact-cards").then((mod) => mod.ContactCards),
  {
    loading: () => <SuspenseFallback className="w-full h-[400px] rounded-[30px]" />,
  }
);

export default function ContactPage() {
  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      
      <div className="pb-0 space-y-0"> 
        <ContactHero />
        <ContactCards />
           <ContactSection compact />
      </div>
      <Footer />
    </main>
  );
}
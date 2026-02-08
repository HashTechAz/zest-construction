import { Header } from "@/components/layout/header/header";
import { HeroSection } from "@/components/features/home/hero";
import { AboutSection } from "@/components/features/home/about";
import { ServicesSection } from "@/components/features/home/services";
import { FaqSection } from "@/components/features/home/faq";
import { BlogSection } from "@/components/features/home/blog";
import { ContactSection } from "@/components/features/home/contact";
import { Footer } from "@/components/layout/footer/footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
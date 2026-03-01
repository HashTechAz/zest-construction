import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { NewsHero } from "@/components/features/news/hero/hero";
import { NewsList } from "@/components/features/news/news-list/news-list";
import { NewsCategories } from "@/components/features/news/news-categories/news-categories";
import { StayUpdated } from "@/components/features/news/stay-updated/stay-updated";

export const metadata = {
  title: "News | Zest Development",
  description:
    "Latest news, project updates, and insights from ZEST Development. Stay informed about our construction projects and company updates.",
};

export default function NewsPage() {
  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      <NewsHero />
      <NewsList />
      <NewsCategories />
      <StayUpdated />
      <Footer />
    </main>
  );
}

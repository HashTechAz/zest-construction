import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";

export const metadata = {
  title: "News | Zest Development",
  description: "Zest Development - Latest News",
};

export default function NewsPage() {
  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      {/* Səhifənin məzmunu */}
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
           <h1 className="text-3xl font-bold mt-10">News</h1>
           {/* Gələcəkdə bura məzmun əlavə ediləcək */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
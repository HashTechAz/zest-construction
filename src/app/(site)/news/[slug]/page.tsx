import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { Container } from "@/components/ui/container";
import { getNewsBySlug, newsItems } from "@/data/news";
import type { Metadata } from "next";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return { title: "News | Zest Development" };
  return {
    title: `${item.title} | News | Zest Development`,
    description: item.excerpt.slice(0, 160),
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) notFound();

  return (
    <main className="relative bg-background transition-colors duration-300">
      <Header />
      <section className="w-full pt-8 sm:pt-12 pb-12 sm:pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
              <Link href="/" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <Link href="/news" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                News
              </Link>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <span className="text-primary font-medium">{item.title}</span>
            </div>
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
              {item.date}
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">{item.category}</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] dark:text-white mt-2 mb-6">
              {item.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              {item.excerpt}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-6">
              For more information about this update, please contact us. We are happy to provide further details on our projects and company news.
            </p>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary font-semibold mt-8 hover:underline"
            >
              ← Back to News
            </Link>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

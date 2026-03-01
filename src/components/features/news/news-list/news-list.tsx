import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { newsItems } from "@/data/news";

export function NewsList() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white dark:bg-background transition-colors duration-300">
      <Container>
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <h2 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Latest updates
          </h2>
          <h3 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            News & insights
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Stay up to date with our projects, company updates, and industry insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {newsItems.map((item) => (
            <article
              key={item.slug}
              className="group relative w-full min-h-[220px] sm:min-h-[240px] bg-[#F8F9FA] dark:bg-[#161B22] border border-slate-200 dark:border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/20 overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.date}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.category}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1E1E1E] dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
              <Link
                href={`/news/${item.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1E1E1E] dark:text-white transition-all duration-300 group-hover:text-primary group-hover:gap-3 mt-3"
              >
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="absolute bottom-0 right-0 p-2 opacity-20 group-hover:opacity-30 transition-opacity">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

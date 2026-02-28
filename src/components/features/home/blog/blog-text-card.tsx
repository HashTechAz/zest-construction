import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

interface BlogTextCardProps {
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

export function BlogTextCard({ date, title, excerpt, href }: BlogTextCardProps) {
  return (
    <div className="group relative w-full min-h-[240px] sm:min-h-[260px] bg-white dark:bg-[#161B22] border border-slate-200 dark:border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-primary/30 overflow-hidden">
      <div>
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {date}
          </span>
          <div className="p-1.5 bg-slate-100 dark:bg-white/5 rounded-full text-slate-500 dark:text-slate-400 transition-all duration-300 group-hover:text-primary group-hover:bg-primary/10">
            <FileText className="w-4 h-4" />
          </div>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-[#1E1E1E] dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
          {excerpt}
        </p>
      </div>
      <Link 
        href={href} 
        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1E1E1E] dark:text-white transition-all duration-300 group-hover:text-primary group-hover:gap-3"
      >
        Read More <ArrowRight className="w-4 h-4" />
      </Link>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl transition-all duration-500 group-hover:bg-primary/10" />
    </div>
  );
}
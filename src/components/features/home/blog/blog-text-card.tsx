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
    <div className="group relative w-full max-w-[410px] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] bg-white dark:bg-[#161B22] border border-slate-200 dark:border-white/10 rounded-2xl sm:rounded-[30px] p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-primary/30 overflow-hidden">
      <div>
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <span className="inline-block bg-primary/10 text-primary text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full uppercase tracking-wider">
            {date}
          </span>
          <div className="p-2 sm:p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-500 dark:text-slate-400 transition-all duration-500 group-hover:text-primary group-hover:bg-primary/10 group-hover:rotate-[360deg]">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white mb-3 sm:mb-4 leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-4">
          {excerpt}
        </p>
      </div>
      <Link 
        href={href} 
        className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#1E1E1E] dark:text-white transition-all duration-300 group-hover:text-primary group-hover:gap-4"
      >
        Read More <ArrowRight className="w-5 h-5" />
      </Link>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl transition-all duration-500 group-hover:bg-primary/10" />
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface BlogImageCardProps {
  image: string;
  date: string;
  title: string;
  href: string;
}

export function BlogImageCard({ image, date, title, href }: BlogImageCardProps) {
  return (
    <div className="group relative w-full aspect-[3/4] max-h-[280px] sm:max-h-[300px] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer bg-muted">
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 410px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[30deg] blur-sm transition-all duration-700 group-hover:left-[100%]" />
      <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 flex flex-col items-start">
        <span className="inline-block bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5 sm:mb-2">
          {date}
        </span>
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
          {title}
        </h3>
        <Link 
          href={href} 
          className="inline-flex items-center gap-1.5 text-sm font-bold text-white transition-all duration-300 group-hover:gap-3 hover:text-primary"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
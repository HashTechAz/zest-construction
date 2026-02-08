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
    <div className="group relative w-full max-w-[410px] aspect-[3/4] md:aspect-auto md:h-[560px] rounded-2xl sm:rounded-[30px] overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer bg-muted">
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
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 flex flex-col items-start">
        <span className="inline-block bg-primary text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full uppercase tracking-wider mb-2 sm:mb-4">
          {date}
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-6 leading-tight">
          {title}
        </h3>
        <Link 
          href={href} 
          className="inline-flex items-center gap-2 text-lg font-bold text-white transition-all duration-300 group-hover:gap-4 hover:text-primary"
        >
          Read More <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
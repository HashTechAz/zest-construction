"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative w-full max-w-[410px] min-h-[280px] h-[280px] sm:h-[320px] md:h-[380px] overflow-hidden rounded-2xl sm:rounded-[30px] cursor-pointer bg-muted">
      {/* Şəkil konteyneri - Next/Image fill üçün position:relative və ölçü lazımdır */}
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">
        {!imgError ? (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 410px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          </div>
        ) : null}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-colors duration-500 group-hover:bg-black/70" />
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 transition-transform duration-500 md:translate-y-[80px] group-hover:translate-y-0">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
          {title}
        </h3>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3">
            {description}
          </p>
          <Link 
            href={href} 
            className="inline-flex items-center gap-2 text-[#E4B040] font-semibold tracking-wide hover:text-[#ffc95c] transition-colors"
          >
            View More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
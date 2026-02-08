"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      setShow(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setTimeout(() => setShow(false), 500);
      }, 800); // Bir az artırdım ki, loqo tam görünsün (800ms)
      return () => clearTimeout(timer);
    };

    handleStart();
  }, [pathname]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fafafa] transition-opacity duration-500 ease-out ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Arxa fon naxışı (Grid dots) */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e5e5e5 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Logo və Spinner Konteyneri */}
        <div className="relative w-28 h-28 animate-scaleIn">
          
          {/* Sabit xarici halqa */}
          <div className="absolute inset-[-12px] rounded-full border-2 border-slate-200" />
          
          {/* Fırlanan aktiv halqa (Rəngi senin qızılı rənginə uyğunlaşdırdım) */}
          <div className="absolute inset-[-12px] rounded-full border-2 border-slate-100 border-t-[#E4B040] animate-spinSlow" />
          
          {/* Mərkəzi ağ dairə */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white shadow-lg shadow-slate-200/50">
            
            {/* Şəkil Wrapperi - Xətanı həll edən hissə budur */}
            <div className="relative w-20 h-20">
                <Image
                  src="/images/global/logo.png"
                  alt="Zest Logo"
                  fill
                  priority
                  sizes="80px"
                  className="object-contain drop-shadow-sm"
                />
            </div>

          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 w-48 h-0.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full w-full origin-left rounded-full bg-[#E4B040] animate-progress" />
        </div>

        {/* Loading Text */}
        <p className="mt-5 text-[11px] font-bold tracking-[0.3em] uppercase text-slate-400">
          Loading
        </p>
      </div>
    </div>
  );
}
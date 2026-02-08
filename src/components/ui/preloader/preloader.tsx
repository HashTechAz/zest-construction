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
      }, 500);
      return () => clearTimeout(timer);
    };

    handleStart();
  }, [pathname]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fafafa] transition-all duration-500 ease-out ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e5e5e5 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative flex flex-col items-center">
        <div className="relative w-28 h-28 animate-scaleIn">
          <div className="absolute inset-[-12px] rounded-full border-2 border-slate-200" />
          <div className="absolute inset-[-12px] rounded-full border-2 border-slate-100 border-t-primary animate-spinSlow" />
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white shadow-sm">
            <Image
              src="/images/global/logo.png"
              alt="Zest Logo"
              width={80}
              height={80}
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
        </div>
        <div className="mt-10 w-48 h-0.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full w-full origin-left rounded-full bg-primary animate-progress" />
        </div>
        <p className="mt-5 text-[11px] font-medium tracking-[0.3em] uppercase text-slate-400">
          Loading
        </p>
      </div>
    </div>
  );
}

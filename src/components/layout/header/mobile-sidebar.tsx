"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/nav-data";
import { X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle/theme-toggle";
import { Button } from "@/components/ui/button/button";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      if (open) onClose();
    }
  }, [pathname, open, onClose]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-[min(320px,85vw)] max-w-[320px] z-[70]",
          "bg-[#0B1A2E] dark:bg-[#0B0F15] border-r border-white/10 shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-5">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block py-3 px-4 rounded-xl text-base font-medium transition-colors",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-white/85 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-5 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">Theme</span>
            <ThemeToggle />
          </div>
          <Link href="/contact" onClick={onClose}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </aside>
    </>
  );
}

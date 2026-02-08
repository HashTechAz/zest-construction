
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/nav-data";
import { ChevronDown } from "lucide-react";

export function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors duration-200 flex items-center gap-1",
              isActive ? "text-primary" : "text-white/80 hover:text-white"
            )}
          >
            {link.name}
            {link.hasDropdown && (
              <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
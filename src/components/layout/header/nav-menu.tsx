
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/nav-data";
import { ChevronDown } from "lucide-react";

type NavLink = (typeof navLinks)[number];

export function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => {
        const hasDropdown = "subLinks" in link && link.subLinks?.length;
        const isActive = pathname === link.href;

        if (hasDropdown) {
          return (
            <div
              key={link.name}
              className="relative group"
            >
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 flex items-center gap-1 py-2",
                  isActive ? "text-primary" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#0B1A2E]/95 backdrop-blur-md border border-white/10 rounded-xl min-w-[200px] py-2 shadow-xl">
                  {(link as NavLink & { subLinks: { name: string; href: string }[] }).subLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors duration-200 flex items-center gap-1 py-2",
              isActive ? "text-primary" : "text-white/80 hover:text-white"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
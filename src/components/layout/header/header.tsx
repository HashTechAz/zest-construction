"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button/button";
import { NavMenu } from "./nav-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle/theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { Menu } from "lucide-react";

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="absolute top-4 sm:top-6 md:top-10 left-0 right-0 z-50">
        <Container>
          <div className="mx-3 sm:mx-4 md:mx-12 relative flex items-center justify-between rounded-full bg-[#0B1A2E]/60 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xl transition-all duration-300 hover:bg-[#0B1A2E]/70">
            <Link href="/" className="relative block w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 shrink-0">
              <Image
                src="/images/global/logo.png"
                alt="Zest Logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </Link>
            <NavMenu />
            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggle />
              <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white shadow-lg shadow-orange-500/20">
                Contact Us
              </Button>
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

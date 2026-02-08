import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowRight, Hash } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full pb-6 pt-10">
      <Container>
        <div className="bg-[#0b1525] rounded-2xl sm:rounded-[30px] overflow-hidden text-white px-5 sm:px-6 md:px-8 py-10 sm:py-12 md:p-16 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-16">
            <div className="space-y-4 sm:space-y-6">
              <Link href="/" className="relative block w-12 h-14 sm:w-14 sm:h-16">
                <Image
                  src="/images/global/logo.png"
                  alt="Zest Logo"
                  width={56}
                  height={64}
                  sizes="64px"
                  className="w-full h-full object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
              <p className="text-white/70 leading-relaxed text-sm max-w-sm">
                Lorem ipsum dolor sit amet consectetur. Ac ut bibendum a suscipit. At molestie non pretium dictum felis arcu.
              </p>
            </div>
            <div>
              <h3 className="text-[#E4B040] font-bold text-base sm:text-lg mb-4 sm:mb-6">Our Services</h3>
              <ul className="space-y-3 sm:space-y-4">
                {["Building Construction", "Architecture Design", "Building Maintenance", "Flooring & Roofing", "Building Renovation"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="group flex items-center gap-2 text-white/80 hover:text-[#E4B040] transition-colors">
                      <span className="w-5 h-5 rounded-full border border-[#E4B040]/30 flex items-center justify-center group-hover:bg-[#E4B040] group-hover:border-[#E4B040] transition-all">
                        <ArrowRight className="w-3 h-3 text-[#E4B040] group-hover:text-[#11223B]" />
                      </span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#E4B040] font-bold text-base sm:text-lg mb-4 sm:mb-6">Company</h3>
              <ul className="space-y-3 sm:space-y-4">
                {["About Us", "Services", "Blog", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="group flex items-center gap-2 text-white/80 hover:text-[#E4B040] transition-colors">
                      <span className="w-5 h-5 rounded-full border border-[#E4B040]/30 flex items-center justify-center group-hover:bg-[#E4B040] group-hover:border-[#E4B040] transition-all">
                        <ArrowRight className="w-3 h-3 text-[#E4B040] group-hover:text-[#11223B]" />
                      </span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#E4B040] font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h3>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start gap-3 text-white/80">
                  <Phone className="w-5 h-5 text-[#E4B040] shrink-0 mt-1" />
                  <span>055 560 60 60</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Mail className="w-5 h-5 text-[#E4B040] shrink-0 mt-1" />
                  <span>zest@gmail.com</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-[#E4B040] shrink-0 mt-1" />
                  <span>Samad Vurgun St., 9</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 bg-[#fceecf] rounded-full flex items-center justify-center text-[#11223B] hover:bg-[#E4B040] transition-colors"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
          <div className="w-full h-px bg-white/10 mb-6 sm:mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-white/60 text-center md:text-left">
            <p>© 2025 All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
              <span className="text-xs">Developed by</span>
              <div className="flex items-center gap-1 font-bold text-white group-hover:text-[#E4B040] transition-colors">
                <div className="w-5 h-5 bg-[#E4B040] text-[#11223B] rounded flex items-center justify-center font-black text-xs">
                  #
                </div>
                HashTech.az
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
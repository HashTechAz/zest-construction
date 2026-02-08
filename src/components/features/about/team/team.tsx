import Image from "next/image";
import { Linkedin, Twitter, Mail, Plus } from "lucide-react";
import { Container } from "@/components/ui/container";

const team = [
  {
    name: "Michael Scott",
    role: "CEO & Founder",
    image: "/images/team/team-1.jpg", 
  },
  {
    name: "Sarah Johnson",
    role: "Lead Architect",
    image: "/images/team/team-1.jpg",
  },
  {
    name: "David Brown",
    role: "Head of Construction",
    image: "/images/team/team-1.jpg",
  },
  {
    name: "Emily Davis",
    role: "Interior Designer",
    image: "/images/team/team-1.jpg",
  },
];

export function AboutTeam() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-28 bg-[#F8F9FA] dark:bg-background transition-colors duration-300">
      <Container>
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 max-w-3xl mx-auto px-2">
          <h4 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Our Experts
          </h4>
          <h2 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl md:text-5xl font-bold transition-colors">
            Meet Our Dedicated Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group relative h-[320px] sm:h-[380px] md:h-[450px] w-full rounded-2xl sm:rounded-[30px] overflow-hidden cursor-pointer [mask-image:radial-gradient(white,black)]"
            >
              
              {/* 1. ARXA FON ŞƏKİLİ */}
              <div
                className="absolute inset-0 bg-slate-200 dark:bg-[#161B22] [contain:paint]"
                style={{ clipPath: "inset(0 round 30px)" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover rounded-[30px] transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 2. GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80 pointer-events-none" />

              {/* 3. SOCIAL MEDIA */}
              <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-[200%] transition-transform duration-500 group-hover:translate-x-0">
                {[Linkedin, Twitter, Mail].map((Icon, i) => (
                    <button 
                      key={i}
                      // DÜZƏLİŞ 2: bg-white/10 -> bg-black/40 (Daha tünd və oxunaqlı)
                      className="w-10 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#E4B040] hover:border-[#E4B040] hover:text-white transition-all duration-300 shadow-lg"
                      style={{ transitionDelay: `${i * 100}ms` }} 
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                ))}
              </div>

              {/* 4. MƏLUMAT QUTUSU */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 group-hover:bg-[#E4B040] group-hover:border-[#E4B040]">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-wide group-hover:text-white/90">
                    {member.role}
                  </p>
                  
                  {/* Dekorativ ikon */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Plus className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
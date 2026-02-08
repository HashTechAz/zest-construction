import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";

const contactData = [
  {
    icon: Phone,
    title: "Call Support Center 24/7",
    lines: ["+ 994 (55) 560 60 60", "+ 994 (55) 560 60 60"],
  },
  {
    icon: Mail,
    title: "Write To Us",
    lines: ["support@gmail.com", "zest@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Samad Vurgun street 9"],
  },
];

export function ContactCards() {
  return (
    // Light: Ağ fon | Dark: Background (#1E1E1E)
    <section className="w-full py-10 sm:py-14 md:py-20 bg-white dark:bg-background transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {contactData.map((item, index) => (
            <div 
              key={index}
              className="group p-5 sm:p-7 md:p-10 bg-white dark:bg-[#161B22] border border-slate-100 dark:border-white/5 rounded-2xl sm:rounded-[30px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* İkon */}
              <div className="mb-4 sm:mb-6">
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#E4B040] stroke-[1.5]" />
              </div>

              {/* Başlıq */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1E1E1E] dark:text-white mb-3 sm:mb-4 transition-colors">
                {item.title}
              </h3>

              {/* Mətni sətir-sətir yazırıq */}
              <div className="space-y-1">
                {item.lines.map((line, i) => (
                  <p key={i} className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium transition-colors">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
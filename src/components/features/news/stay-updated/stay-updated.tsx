import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Mail } from "lucide-react";

export function StayUpdated() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#F8F9FA] dark:bg-[#0B1525] transition-colors duration-300">
      <Container>
        <div className="rounded-2xl sm:rounded-[30px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161B22] p-6 sm:p-8 md:p-10 text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h3 className="text-[#1E1E1E] dark:text-white text-xl sm:text-2xl font-bold mb-2">
            Stay updated
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mb-6">
            For press enquiries or to receive our latest news and project updates, get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}

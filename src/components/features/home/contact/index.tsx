import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button/button";
import { ContactInfo } from "./contact-info";

interface ContactSectionProps {
  /** Contact səhifəsində daha az boşluq üçün */
  compact?: boolean;
}

export function ContactSection({ compact }: ContactSectionProps = {}) {
  return (
    <section
      className={`w-full bg-white dark:bg-background overflow-hidden transition-colors duration-300 ${compact ? "py-8 sm:py-12 lg:py-16" : "py-12 sm:py-16 lg:py-28"}`}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-stretch gap-8 sm:gap-12 lg:gap-20">
          <div className="w-full lg:w-[520px] shrink-0">
             <ContactInfo />
          </div>
          <div className="w-full flex-1 h-full flex flex-col justify-center dark:bg-[#161B22] dark:p-5 sm:p-8 md:p-10 dark:rounded-2xl sm:dark:rounded-[30px] transition-all duration-300">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-[#1E1E1E] dark:text-white text-2xl sm:text-3xl md:text-5xl font-bold transition-colors">
                Send us a Message
              </h2>
              <p className="text-slate-500 dark:text-slate-400 transition-colors">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <form className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-[#F8F9FA] dark:bg-[#0B0F15] text-[#1E1E1E] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-[#F8F9FA] dark:bg-[#0B0F15] text-[#1E1E1E] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-[#F8F9FA] dark:bg-[#0B0F15] text-[#1E1E1E] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us about your project..." 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-[#F8F9FA] dark:bg-[#0B0F15] text-[#1E1E1E] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors resize-none" 
                  />
                </div>
                <Button className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-orange-500/20">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
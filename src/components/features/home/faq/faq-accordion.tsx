"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does Zest Construction offer?",
    answer: "We offer a wide range of services including residential and commercial construction, architectural design, project management, and specialized renovations. Our team handles everything from initial concept to final handover.",
  },
  {
    question: "How do I get a quote for my project?",
    answer: "Getting a quote is easy! Simply contact us through our website form or give us a call. We'll schedule a consultation to discuss your project needs and provide a detailed estimate.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, absolutely. Zest Construction is fully licensed and carries comprehensive liability and workers' compensation insurance for your peace of mind and protection.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary significantly depending on the scope and complexity. During our initial consultation, we provide a realistic timeline based on your specific project requirements.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      
      <div className="mb-6 sm:mb-8 space-y-2">
        <h4 className="text-red-700 font-bold uppercase tracking-widest text-xs sm:text-sm">
          Common Questions
        </h4>
        <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
              key={index}
              className={cn(
                "border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300",
                "bg-white dark:bg-[#14171a]",
                
                isOpen 
                  ? "border-primary shadow-md" 
                  : "border-slate-200 hover:border-primary/50 dark:border-white/5 dark:hover:border-primary/50"
              )}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none gap-3"
              >
                <span className={cn(
                  "text-base sm:text-lg font-semibold transition-colors duration-300 flex-1 min-w-0",
                  isOpen ? "text-primary" : "text-[#1E1E1E] dark:text-white"
                )}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 transition-all duration-300",
                    isOpen ? "rotate-180 text-primary" : "text-slate-400 dark:text-slate-500"
                  )}
                />
              </button>

              <div 
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
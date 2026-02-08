"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="relative w-full lg:w-[520px] h-full min-h-[420px] sm:min-h-[500px] md:min-h-[600px] bg-[#11223B] rounded-2xl sm:rounded-[30px] p-5 sm:p-7 md:p-10 overflow-hidden flex flex-col justify-between text-white shadow-2xl shrink-0">
      <div className="absolute -bottom-20 -right-20 w-64 h-64 border-[30px] border-white/5 rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[20px] border-white/10 rounded-full" />
      <div className="relative z-10 space-y-2">
        <h4 className="text-[#E4B040] font-bold uppercase tracking-widest text-xs sm:text-sm">
          Contact Us
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Contact Information
        </h2>
        <p className="text-white/70 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
          Have a project in mind? We would love to hear from you. Let's build something amazing together.
        </p>
      </div>
      <div className="relative z-10 space-y-5 sm:space-y-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-[#E4B040] shrink-0">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm text-white/60">Phone Number</p>
            <p className="text-base sm:text-lg font-semibold truncate">+994 50 324 60 38</p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-[#E4B040] shrink-0">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm text-white/60">Email Address</p>
            <p className="text-base sm:text-lg font-semibold truncate">Info@zestdevelopment.az</p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-[#E4B040] shrink-0">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm text-white/60">Location</p>
            <p className="text-base sm:text-lg font-semibold">8th November str 4, Knightsbridge Residence, AZ1025, Baku</p>
          </div>
        </div>
      </div>
    </div>
  );
}
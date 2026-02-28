"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="relative w-full lg:w-[440px] h-full min-h-[200px] sm:min-h-[240px] bg-[#11223B] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 overflow-hidden flex flex-col justify-between text-white shadow-xl shrink-0">
      <div className="relative z-10 space-y-1.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
          Contact Information
        </h2>
        <p className="text-white/70 mt-2 sm:mt-3 text-sm leading-relaxed">
          Have a project in mind? We would love to hear from you. Let&apos;s build something amazing together.
        </p>
      </div>
      <div className="relative z-10 space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-[#E4B040] shrink-0">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-white/60">Phone Number</p>
            <p className="text-sm sm:text-base font-semibold truncate">+994 50 324 60 38</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-[#E4B040] shrink-0">
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-white/60">Email Address</p>
            <p className="text-sm sm:text-base font-semibold truncate">Info@zestdevelopment.az</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-[#E4B040] shrink-0">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-white/60">Location</p>
            <p className="text-sm sm:text-base font-semibold">8th November str 4, Knightsbridge Residence, AZ1025, Baku</p>
          </div>
        </div>
      </div>
    </div>
  );
}
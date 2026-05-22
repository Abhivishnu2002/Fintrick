"use client";

import React from "react";
import { 
  Cloud, 
  CreditCard, 
  Smartphone, 
  FileCheck, 
  Sparkles,
  Building,
  DollarSign
} from "lucide-react";

interface LogoItem {
  name: string;
  icon: React.ComponentType<any>;
  color: string; // Color on hover
  tag: string;
}

const PARTNERS: LogoItem[] = [
  { name: "AWS", icon: Cloud, color: "#ff9900", tag: "Cloud Infrastructure" },
  { name: "Google Cloud", icon: Cloud, color: "#4285f4", tag: "AI Cluster Compute" },
  { name: "Razorpay", icon: CreditCard, color: "#0052cc", tag: "PG Layer Gateway" },
  { name: "UPI", icon: Smartphone, color: "#097969", tag: "Instant Clearing" },
  { name: "Credgenics", icon: FileCheck, color: "#9c27b0", tag: "Smart Collection" },
  { name: "Visa", icon: CreditCard, color: "#1a1f71", tag: "Settlement Rails" },
  { name: "Mastercard", icon: CreditCard, color: "#eb001b", tag: "Settlement Rails" },
  { name: "NPCI", icon: Smartphone, color: "#1f4e79", tag: "Sovereign Switch" },
  { name: "RBI", icon: Building, color: "#c5a059", tag: "Regulatory Compliance" },
  { name: "Cashfree", icon: DollarSign, color: "#2ea354", tag: "Merchant Ledgers" },
  { name: "PhonePe", icon: Smartphone, color: "#5f259f", tag: "Consumer Gateway" },
];

export default function LogoMarquee() {
  // Duplicate partners array to ensure seamless infinite looping animation
  const doublePartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className="w-full py-10 bg-slate-950/20 border-y border-slate-900 overflow-hidden relative">
      {/* Visual gradients on sides to hide marquee edges seamlessly */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      {/* Marquee Row */}
      <div className="animate-marquee hover:[animation-play-state:paused] flex gap-6">
        {doublePartners.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-slate-900 bg-slate-950/60 hover:bg-slate-900/40 hover:border-slate-800 transition-all duration-300 group cursor-pointer"
            >
              {/* Partner Icon */}
              <div 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-white transition-colors duration-300"
                style={{
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.05)"
                }}
              >
                <IconComponent 
                  className="w-4 h-4 transition-colors duration-300"
                  style={{
                    color: "inherit"
                  }}
                />
              </div>

              {/* Partner Text Details */}
              <div className="flex flex-col">
                <span 
                  className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors duration-300 tracking-wide"
                  style={{
                    color: "" // Default grayscale, controlled by class
                  }}
                >
                  {item.name}
                </span>
                <span className="text-[9px] font-medium text-slate-600 group-hover:text-slate-400 transition-colors duration-300 tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Small glowing hover dot */}
              <div 
                className="w-1.5 h-1.5 rounded-full bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" 
                style={{ backgroundColor: item.color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

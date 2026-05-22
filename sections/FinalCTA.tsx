"use client";

import { motion } from "framer-motion";
import { Calendar, Handshake, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function FinalCTA() {
  const triggerConfetti = () => {
    // Beautiful massive multi-burst celebration
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#3b82f6", "#06b6d4"],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#6366f1", "#a855f7"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section id="cta" className="relative w-full py-32 overflow-hidden bg-slate-950/20 border-t border-slate-900 z-10">
      {/* Background massive glowing mesh spheres */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Dot overlay */}
      <div className="absolute inset-0 dots-overlay opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col items-center text-center gap-8 relative z-10">
        
        {/* Caption badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/20 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[10px] font-bold text-blue-300 tracking-wider uppercase">
            Initiate Engagement
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          Let's Build The Future <br />
          <span className="text-gradient-blue">Together.</span>
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
          Whether you represent an enterprise scaling transaction volume, a creator platform building payments, or want to integrate our secure HSM hardware vaults—we are ready.
        </p>

        {/* Action Buttons with high fidelity hovers & triggers */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
          <button
            onClick={triggerConfetti}
            className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 border border-blue-500/30"
          >
            <Calendar className="w-4 h-4 text-blue-200" />
            Schedule A Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>

          <button
            onClick={triggerConfetti}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-800 bg-slate-950/50 hover:border-slate-700 hover:bg-slate-900/50 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm font-bold text-slate-300 hover:text-white"
          >
            <Handshake className="w-4 h-4 text-slate-500" />
            Become A Partner
          </button>
        </div>

        {/* Small footer text */}
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-6">
          RESILIENT ARCHITECTURES // PCI-DSS AUDITED // SOC2 APPROVED
        </span>

      </div>
    </section>
  );
}

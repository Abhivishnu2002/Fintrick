"use client";

import { motion } from "framer-motion";
import { Hammer, Sparkles, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface JobOpening {
  title: string;
  dept: string;
  loc: string;
  salary: string;
}

const JOBS: JobOpening[] = [
  {
    title: "Staff Distributed Ledger Engineer",
    dept: "ENGINEERING (RUST/TS)",
    loc: "Mangalore HQ / Hybrid",
    salary: "Competitive Equity + Base",
  },
  {
    title: "Staff UI/UX Motion Architect",
    dept: "PRODUCT & FRONTEND",
    loc: "Remote ok",
    salary: "Competitive Equity + Base",
  },
  {
    title: "Neural Risk Applied Scientist",
    dept: "FINTRICK LABS // AI",
    loc: "Mangalore HQ",
    salary: "Competitive Equity + Base",
  },
];

export default function Careers() {
  const triggerConfetti = () => {
    // Elegant gold/blue celebratory blast
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#3b82f6", "#60a5fa", "#6366f1", "#a855f7"],
    });
  };

  return (
    <section id="careers" className="relative w-full py-24 overflow-hidden bg-[#020617] z-10">
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-16">
        
        {/* Header Block */}
        <div className="flex flex-col items-start gap-3 max-w-2xl text-left">
          <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase">
            JOIN THE ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Build Future Infrastructure. <br />
            <span className="text-gradient-blue">From the coast to the world.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We are hiring elite builders, researchers, and engineers who want to solve hard architectural problems and scale massive technology systems.
          </p>
        </div>

        {/* Culture & Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          
          {/* Culture Glass Card */}
          <div 
            className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden"
            style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)" }}
          >
            <div className="flex flex-col gap-4">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 w-fit">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Builder Culture</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                We believe in extreme engineering ownership, zero bureaucracy, and absolute focus on elegant product design. We iterate fast, ship secure, and support bold ideas.
              </p>
              
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Flat org with direct lines to founders</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Continuous delivery model (deploying daily)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Deep focus on architectural research</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-900 pt-6">
              <span className="text-[10px] font-bold text-slate-500 tracking-wider">
                HEADQUARTERS: MANGALORE, INDIA
              </span>
            </div>
          </div>

          {/* Opportunities Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" /> Open Opportunities
              </h3>
              <span className="text-[10px] font-mono text-slate-500">
                ACTIVE PIPELINE // APPLY
              </span>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {JOBS.map((job, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  onClick={triggerConfetti}
                  className="p-5 rounded-2xl border border-slate-900 bg-slate-950/60 hover:bg-slate-900/40 hover:border-slate-800 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer text-left group"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-blue-400 tracking-widest uppercase">
                      {job.dept}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h4>
                    <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold tracking-wider mt-1">
                      <span>📌 {job.loc}</span>
                      <span>💰 {job.salary}</span>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto flex items-center justify-center py-2.5 px-5 rounded-full border border-blue-500/10 bg-blue-950/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all text-xs font-semibold text-blue-300 group-hover:text-white gap-1.5 self-stretch sm:self-center">
                    Submit Resume <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

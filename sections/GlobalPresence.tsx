"use client";

import InteractiveMap from "../components/shared/InteractiveMap";
import { Globe2 } from "lucide-react";

export default function GlobalPresence() {
  return (
    <section id="presence" className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-[#020617] to-[#071126]/20 z-10">
      <div className="absolute inset-0 dots-overlay opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col items-center gap-12 text-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/20 w-fit">
            <Globe2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-bold text-blue-300 tracking-wider uppercase">
              Operational Footprint
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
            Global Settlement Network. <br />
            <span className="text-gradient-cyan">Routing transactions instantly.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Connecting our central development hub in Mangalore to high-velocity nodes in San Francisco, London, Singapore, Tokyo, and Sydney.
          </p>
        </div>

        {/* Global Interactive Vector Map */}
        <div className="w-full">
          <InteractiveMap />
        </div>

      </div>
    </section>
  );
}

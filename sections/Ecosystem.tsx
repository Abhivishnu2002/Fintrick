"use client";

import EcosystemOrbit from "../components/three/EcosystemOrbit";
import { Sparkles, Compass } from "lucide-react";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden z-10 bg-gradient-to-b from-[#020617] to-[#071126]/30">
      {/* Background glowing blob */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col items-center gap-12 z-10 text-center">
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/20 w-fit">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-bold text-blue-300 tracking-wider uppercase">
              Interactive Product Universe
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] text-gradient-cyan">
            The Fintrick Technology Ecosystem.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Interact with the orbits below. Hover over any glowing product node to pause rotation and reveal the developer APIs, deep metrics, and sovereign security vaults powering each sector.
          </p>
        </div>

        {/* Orbit Visualization */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible pb-8 flex items-center justify-center">
          <div className="min-w-[640px] lg:min-w-0 w-full">
            <EcosystemOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}

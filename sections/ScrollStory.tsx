"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Smartphone, Cpu, Globe, Layers, ArrowUpRight } from "lucide-react";

interface StoryStep {
  title: string;
  subtitle: string;
  tagline: string;
  icon: React.ComponentType<any>;
  desc: string;
  visualTitle: string;
  color: string;
}

const STEPS: StoryStep[] = [
  {
    title: "Started Local",
    subtitle: "Coastal Roots, Global Aspirations",
    tagline: "MANGALORE HQ",
    icon: MapPin,
    desc: "Fintrick was founded on the coast of Mangalore with a simple vision: build elite digital ledger pipelines that rival global developer tools, right next to the Arabian Sea.",
    visualTitle: "HQ CLUSTER // 12.9141° N, 74.8560° E",
    color: "from-blue-600/30 to-indigo-900/10",
  },
  {
    title: "Built For Bharat",
    subtitle: "High-Frequency Ledger Architecture",
    tagline: "NATIVE SOVEREIGN SWITCH",
    icon: Smartphone,
    desc: "Scaling transactional technology that handles hundreds of thousands of concurrent merchant queries, adapting perfectly to local sub-dollar networks and UPI clears.",
    visualTitle: "BHARAT RAILS // high-frequency API core",
    color: "from-cyan-600/30 to-blue-900/10",
  },
  {
    title: "Scaled Through Innovation",
    subtitle: "Enterprise APIs & Level 1 Vaults",
    tagline: "PCI-DSS SECURE VAULTS",
    icon: Layers,
    desc: "Deploying high-throughput merchant pipelines, distributed bank routing databases, and fully audited hardware security systems built for critical uptime.",
    visualTitle: "FINTECH SECURE // Tier-4 level modules",
    color: "from-indigo-600/30 to-purple-900/10",
  },
  {
    title: "Creating Global Impact",
    subtitle: "Borderless Infrastructure Systems",
    tagline: "CROSS-BORDER CHANNEL",
    icon: Globe,
    desc: "Establishing global edge hubs in Singapore, Tokyo, London, and San Francisco to route cross-border commercial settlements in fractions of a second.",
    visualTitle: "EDGE MIRRORS // sub-30ms global router",
    color: "from-blue-600/30 to-teal-900/10",
  },
  {
    title: "Building The Future",
    subtitle: "Sovereign AI & Quantum Ledgers",
    tagline: "FINTRICK LABS",
    icon: Cpu,
    desc: "Integrating predictive financial models, automated risk escrow analytics, and decentralized sovereign databases designed for the next digital decade.",
    visualTitle: "AI NEURAL CORE // decentralized ledger r&d",
    color: "from-indigo-600/30 to-emerald-900/10",
  },
];

export default function ScrollStory() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only execute client side
    gsap.registerPlugin(ScrollTrigger);

    const scrollContainer = scrollContainerRef.current;
    const scrollSection = scrollSectionRef.current;

    if (!scrollContainer || !scrollSection) return;

    // Horizontally scroll the slides container as the user scrolls vertically
    const pin = gsap.to(scrollContainer, {
      x: () => -(scrollContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: scrollSection,
        pin: true,
        scrub: 0.8,
        start: "top top",
        end: () => `+=${scrollContainer.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div id="story" ref={scrollSectionRef} className="relative h-screen w-full overflow-hidden bg-[#020617] z-20">
      {/* Header static top left */}
      <div className="absolute top-8 left-8 z-30 flex flex-col gap-1 pointer-events-none md:top-12 md:left-16">
        <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase">
          OUR MISSION PATHWAY
        </span>
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          The Fintrick Story
        </h2>
      </div>

      {/* Horizontal scrollable slides wrapper */}
      <div 
        ref={scrollContainerRef} 
        className="h-full flex items-center"
        style={{ width: `${STEPS.length * 100}vw`, willChange: "transform" }}
      >
        {STEPS.map((step, index) => {
          const IconComp = step.icon;
          return (
            <div
              key={index}
              className="w-screen h-full flex items-center justify-center px-6 sm:px-12 md:px-24 pt-24 pb-16 flex-shrink-0"
            >
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Left Col: Narrative Details */}
                <div className="lg:col-span-6 flex flex-col gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-blue-400 tracking-[0.2em] uppercase bg-blue-950/20 px-2 py-0.5 rounded">
                      {step.tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <h4 className="text-base sm:text-lg font-bold text-slate-300">
                    {step.subtitle}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-normal mt-2">
                    {step.desc}
                  </p>
                </div>

                {/* Right Col: High-Tech Glass Visual Card */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div 
                    className="relative w-full max-w-md aspect-[4/3] rounded-3xl border border-slate-800/80 bg-slate-950/60 overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col justify-between group"
                    style={{
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)"
                    }}
                  >
                    {/* Layer 1: Colored Mesh Blob */}
                    <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br ${step.color} blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-700`} />

                    {/* Layer 2: Glowing grid lines */}
                    <div className="absolute inset-0 dots-overlay opacity-20" />

                    {/* Top Content */}
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[9px] font-mono text-slate-500 tracking-wider">
                        {step.visualTitle}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:rotate-45 transition-all duration-300" />
                    </div>

                    {/* Middle: Abstract Wireframe Graphic Mockup */}
                    <div className="h-28 w-full flex items-center justify-center relative z-10 my-4">
                      {/* Generates high-tech geometric overlays based on step */}
                      {index === 0 && (
                        <div className="relative w-24 h-24 rounded-full border border-blue-500/20 bg-blue-950/10 flex items-center justify-center animate-pulse">
                          <MapPin className="w-8 h-8 text-blue-400" />
                          <div className="absolute inset-[-8px] rounded-full border border-dashed border-blue-500/10 animate-spin" style={{ animationDuration: "12s" }} />
                        </div>
                      )}
                      {index === 1 && (
                        <div className="relative w-40 h-16 rounded-xl border border-cyan-500/20 bg-cyan-950/10 flex items-center justify-around px-4">
                          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                          <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
                          <Smartphone className="w-6 h-6 text-cyan-400" />
                          <div className="h-[1px] w-12 bg-gradient-to-l from-cyan-400 to-transparent" />
                        </div>
                      )}
                      {index === 2 && (
                        <div className="grid grid-cols-3 gap-3 w-36 h-20 items-center justify-center">
                          <div className="h-10 rounded-lg border border-indigo-500/20 bg-indigo-950/10 animate-bounce" style={{ animationDelay: "0.1s" }} />
                          <div className="h-16 rounded-lg border border-blue-500/20 bg-blue-950/10 animate-bounce" style={{ animationDelay: "0.3s" }} />
                          <div className="h-12 rounded-lg border border-purple-500/20 bg-purple-950/10 animate-bounce" style={{ animationDelay: "0.5s" }} />
                        </div>
                      )}
                      {index === 3 && (
                        <div className="relative w-24 h-24 rounded-full border border-blue-500/30 flex items-center justify-center">
                          <Globe className="w-10 h-10 text-blue-400 animate-pulse" />
                          <div className="absolute w-2 h-2 rounded-full bg-cyan-400 top-2 left-6" />
                          <div className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400 bottom-4 right-2 animate-ping" />
                        </div>
                      )}
                      {index === 4 && (
                        <div className="relative w-24 h-24 flex items-center justify-center">
                          <Cpu className="w-10 h-10 text-emerald-400 animate-spin" style={{ animationDuration: "16s" }} />
                          <div className="absolute inset-0 border border-dashed border-emerald-500/10 rounded-lg animate-ping" style={{ animationDuration: "6s" }} />
                        </div>
                      )}
                    </div>

                    {/* Bottom: Label */}
                    <div className="flex items-end justify-between z-10 border-t border-slate-900 pt-4">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                        STATUS // OPERATIONAL
                      </span>
                      <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">
                        PHASE 0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { CreditCard, CircleUser, Zap, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

interface ProductShowcaseItem {
  id: string;
  name: string;
  tagline: string;
  icon: React.ComponentType<any>;
  description: string;
  features: string[];
  mockupTitle: string;
  mockupDetails: { label: string; val: string }[];
  color: string;
}

const ITEMS: ProductShowcaseItem[] = [
  {
    id: "orbitpay",
    name: "OrbitPay",
    tagline: "GLOBAL PAYMENTS LAYER",
    icon: CreditCard,
    description: "Accept, split, and route card, bank, and ledger transactions globally with a single integration. Built on highly optimized credit pipelines for enterprise throughput.",
    features: [
      "Sub-150ms payment clearing and settlements",
      "Dynamic ledger ledger-balancing controls",
      "Integrated regional compliance & tax switches",
      "Sovereign multi-currency card vaults"
    ],
    mockupTitle: "OrbitPay Dashboard // Global Ledger",
    mockupDetails: [
      { label: "Active Gateways", val: "5 Regions" },
      { label: "High Throughput", val: "10,240 tx/s" },
      { label: "Secured Nodes", val: "100% Verified" }
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "paylio",
    name: "Paylio",
    tagline: "CREATOR ECONOMY BILLING",
    icon: CircleUser,
    description: "Automate sub-dollar payouts, automated tax deductions, and flexible credit lines tailored specifically to the creator platforms and agencies.",
    features: [
      "Smart contracts automated payout triggers",
      "Sub-cent transaction ledger scaling",
      "Platform splitting with multi-tiered structures",
      "Predictive creator credit profiling models"
    ],
    mockupTitle: "Paylio Invoicing Hub // Splitting Ledger",
    mockupDetails: [
      { label: "Payout Frequency", val: "Real-time" },
      { label: "Smart Splitting", val: "Instant Clear" },
      { label: "Creator Database", val: "2.1M Active" }
    ],
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "rechargic",
    name: "Rechargic",
    tagline: "HIGH-SPEED UTILITY NETWORKS",
    icon: Zap,
    description: "Powering utility networks, digital voucher transactions, and massive telecommunications clearing APIs with resilient system-wide fallbacks.",
    features: [
      "Direct carrier ledger integrations",
      "Automated system-wide retry cascades",
      "Localized state settlement databases",
      "Microsecond ledger query APIs"
    ],
    mockupTitle: "Rechargic Ledgers // Resilient Nodes",
    mockupDetails: [
      { label: "Daily Queries", val: "1.6 Million" },
      { label: "Sync Latency", val: "1.8ms max" },
      { label: "Resilience Node", val: "Multi-backup" }
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "fintrick-ai",
    name: "Fintrick AI",
    tagline: "PREDICTIVE ANOMALY NEURAL GATE",
    icon: Cpu,
    description: "Safeguard transactions using advanced financial deep learning layers. Instantly flags suspicious routing patterns and manages real-time merchant escrow protections.",
    features: [
      "Sub-millisecond ledger anomaly screening",
      "Automated transaction routing optimizers",
      "Real-time escrow smart locking filters",
      "Smart chargeback predictive resolution"
    ],
    mockupTitle: "Fintrick Neural Gate // Active Risk Analyser",
    mockupDetails: [
      { label: "AI Screening", val: "0.4ms avg" },
      { label: "Chargeback Lock", val: "Automated" },
      { label: "Fraud Precision", val: "99.999%" }
    ],
    color: "from-blue-600 to-cyan-500",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative w-full py-24 overflow-hidden bg-[#020617] z-10">
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-24">
        
        {/* Header Block */}
        <div className="flex flex-col items-start gap-3 max-w-2xl text-left">
          <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase">
            ENTERPRISE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            High-Performance Products. <br />
            <span className="text-gradient-blue">Engineered for absolute trust.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our products stack together to construct a fully cohesive sovereign infrastructure layer, serving developers and massive corporations.
          </p>
        </div>

        {/* Dynamic Alternating Showcase Row */}
        <div className="flex flex-col gap-32">
          {ITEMS.map((item, index) => {
            const IconComp = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Left Side: Mockup (Moves to right on odd items for beautiful flow) */}
                <div className={`lg:col-span-6 flex justify-center ${!isEven ? "lg:order-2" : ""}`}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-lg aspect-[4/3] rounded-3xl border border-slate-800/80 bg-slate-950/60 overflow-hidden shadow-2xl p-6 flex flex-col justify-between group"
                    style={{
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)"
                    }}
                  >
                    {/* Top gradient glow matching product color theme */}
                    <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${item.color}/10 to-transparent blur-[30px] opacity-70`} />
                    
                    {/* Tech dots */}
                    <div className="absolute inset-0 dots-overlay opacity-25" />

                    {/* Mockup Header */}
                    <div className="flex items-center justify-between border-b border-slate-900 pb-3 z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                        {item.mockupTitle}
                      </span>
                    </div>

                    {/* Mockup Center Content (Simulated data graphs/ledger boxes) */}
                    <div className="flex-1 flex flex-col justify-center gap-4 py-6 z-10">
                      {/* Metric Card */}
                      <div className="p-4 rounded-xl border border-slate-900 bg-slate-950/70 shadow-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                            <IconComp className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">LEDGER SYNC STATUS</span>
                            <span className="text-xs font-bold text-white uppercase tracking-wider">Operational // Active</span>
                          </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      </div>

                      {/* Small visual bar chart simulation */}
                      <div className="flex gap-1.5 h-16 items-end justify-center px-4 border-b border-slate-900/60 pb-3">
                        <div className="w-full bg-slate-800/80 rounded-t h-[40%] group-hover:bg-blue-500/40 transition-colors" />
                        <div className="w-full bg-slate-800/80 rounded-t h-[60%] group-hover:bg-blue-500/60 transition-colors" />
                        <div className="w-full bg-slate-800/80 rounded-t h-[30%] group-hover:bg-blue-500/40 transition-colors" />
                        <div className="w-full bg-slate-800/80 rounded-t h-[90%] group-hover:bg-blue-500/90 transition-colors duration-500" />
                        <div className="w-full bg-slate-800/80 rounded-t h-[50%] group-hover:bg-blue-500/60 transition-colors" />
                        <div className="w-full bg-slate-800/80 rounded-t h-[75%] group-hover:bg-blue-500/80 transition-colors" />
                      </div>
                    </div>

                    {/* Mockup Footer Details */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-900 z-10 text-left">
                      {item.mockupDetails.map((det, i) => (
                        <div key={i} className="flex flex-col gap-0.5">
                          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{det.label}</span>
                          <span className="text-[11px] font-bold text-white">{det.val}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Side: Copy & Info */}
                <div className={`lg:col-span-6 flex flex-col gap-5 text-left ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold text-blue-400 tracking-[0.2em] uppercase bg-blue-950/20 px-2.5 py-1 rounded">
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="flex flex-col gap-3 mt-2">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <a
                      href="#cta"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector("#cta");
                        if (target) {
                          const lenis = (window as any).lenis;
                          if (lenis) lenis.scrollTo(target);
                          else target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors group"
                    >
                      Request API Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

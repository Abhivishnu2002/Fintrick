"use client";

import { motion } from "framer-motion";
import { Cpu, CreditCard, Users, Zap, Server, ArrowUpRight, Sparkles } from "lucide-react";

interface LabItem {
  id: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<any>;
  status: "ACTIVE R&D" | "BETA PHASING" | "PROTOTYPING";
  desc: string;
  color: string;
  pipeline: string[];
}

const ITEMS: LabItem[] = [
  {
    id: "ai",
    title: "Neural Commerce",
    tagline: "FINTRICK LABS // AI",
    icon: Cpu,
    status: "ACTIVE R&D",
    desc: "Deploying high-performance predictive layers to route multi-node ledger splits and manage real-time escrow locking variables.",
    color: "from-blue-600/20 to-indigo-900/10 border-blue-500/20 text-blue-400",
    pipeline: ["Smart Anomaly Screener", "Escrow Contract Automation", "Autonomous Routing Gate"],
  },
  {
    id: "fintech",
    title: "Quantum Ledgers",
    tagline: "FINTRICK LABS // FINTECH",
    icon: CreditCard,
    status: "PROTOTYPING",
    desc: "Designing resilient high-frequency clearing ledgers that settle credit and card rails in microseconds across clusters.",
    color: "from-indigo-600/20 to-purple-900/10 border-indigo-500/20 text-indigo-400",
    pipeline: ["Sub-microsecond Ledgers", "Concentric Clearing Vaults", "Smart Settlement Node"],
  },
  {
    id: "creator",
    title: "Creator Splitting",
    tagline: "FINTRICK LABS // CREATOR",
    icon: Users,
    status: "BETA PHASING",
    desc: "Platform sub-dollar routing solutions allowing seamless programmatic splits and instant micro-credits.",
    color: "from-purple-600/20 to-pink-900/10 border-purple-500/20 text-purple-400",
    pipeline: ["Programmatic Sub-splits", "Micro-credit Profiling", "Creator Ledger Rails"],
  },
  {
    id: "commerce",
    title: "Resilient Switches",
    tagline: "FINTRICK LABS // COMMERCE",
    icon: Zap,
    status: "ACTIVE R&D",
    desc: "Resilient carrier and utility databases that leverage cascading retry triggers for absolute payment clearance.",
    color: "from-cyan-600/20 to-blue-900/10 border-cyan-500/20 text-cyan-400",
    pipeline: ["Carrier Cascading Retries", "Instant Utility Ledger", "Sovereign State Mirror"],
  },
  {
    id: "infra",
    title: "Sovereign HSM Vaults",
    tagline: "FINTRICK LABS // INFRA",
    icon: Server,
    status: "BETA PHASING",
    desc: "Highly-isolated developer hardware security vaults complying with localized regional databases.",
    color: "from-blue-600/20 to-teal-900/10 border-blue-500/20 text-teal-400",
    pipeline: ["PCI-DSS Level 1 HSM", "Isolated Local Mirrors", "Sovereign Key Switch"],
  },
];

export default function InnovationLab() {
  return (
    <section id="lab" className="relative w-full py-24 overflow-hidden bg-[#020617] z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[10%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-900 pb-10">
          <div className="flex flex-col items-start gap-3 max-w-2xl text-left">
            <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> INNOVATION PIPELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Fintrick Innovation Lab. <br />
              <span className="text-gradient-indigo">Architecting the future state.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-1">
              A deep look at our active research pipelines and enterprise protocols preparing the infrastructure of the next decade.
            </p>
          </div>
          <span className="text-[11px] font-bold text-slate-500 bg-slate-950/60 border border-slate-900 px-3 py-1 rounded-full whitespace-nowrap">
            LAST DEPLOY: ACTIVE SYNC
          </span>
        </div>

        {/* Cards Row (Horizontal or flexible grid layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {ITEMS.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className={`glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden bg-gradient-to-br ${item.color} border`}
              >
                {/* Top: Header, Icon & Status */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[9px] font-bold tracking-widest bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-white uppercase">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex flex-col mt-2">
                    <span className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">
                      {item.tagline}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-0.5 flex items-center justify-between">
                      {item.title} <ArrowUpRight className="w-4 h-4 text-slate-600" />
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal mt-2">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom: Internal Pipelines Checklist */}
                <div className="flex flex-col gap-2 border-t border-slate-900/60 pt-4 mt-6">
                  <span className="text-[9px] font-bold text-slate-500 tracking-wider">
                    RESEARCH NODES
                  </span>
                  <div className="flex flex-col gap-1.5 mt-1">
                    {item.pipeline.map((pipe, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                        <span>{pipe}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Box, Globe2 } from "lucide-react";

interface MetricItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<any>;
  description: string;
}

const METRICS: MetricItem[] = [
  {
    id: "tx",
    target: 10,
    suffix: "M+",
    label: "Transactions Routed",
    icon: TrendingUp,
    description: "Highly concurrent transactions clearing seamlessly through unified sovereign switches.",
  },
  {
    id: "users",
    target: 100,
    suffix: "K+",
    label: "Active Platform Users",
    icon: Users,
    description: "Merchants, digital platforms, and creator agencies building dynamic commercial nodes daily.",
  },
  {
    id: "products",
    target: 15,
    suffix: "+",
    label: "Resilient Products",
    icon: Box,
    description: "Integrated digital cards, utility ledgers, risk APIs and developer pipelines.",
  },
  {
    id: "countries",
    target: 5,
    suffix: "+",
    label: "Operational Countries",
    icon: Globe2,
    description: "Facilitating borderless settlements and complying with localized regional regulations.",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds count up duration

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Power-4 out easing for organic deceleration near target
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={elementRef} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
      {count}
      <span className="text-blue-500 font-bold">{suffix}</span>
    </span>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="relative w-full py-24 overflow-hidden bg-slate-950/40 border-y border-slate-900/50 z-10">
      {/* Background visual beams */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-16 text-center items-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-3 max-w-2xl">
          <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase">
            SCALE & TRACTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proven Infrastructure. <br />
            <span className="text-gradient-blue">Scaling with velocity.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our API ledger architectures process immense volumes with absolute stability, laying down the groundwork for high-growth digital sectors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
          {METRICS.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col items-start gap-4 text-left relative overflow-hidden"
              >
                {/* Visual border beam glow indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                {/* Card Icon */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 text-blue-400">
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Animated Count-up Indicator */}
                <div className="flex flex-col gap-1 mt-2">
                  <CountUp target={item.target} suffix={item.suffix} />
                  <span className="text-sm font-bold text-slate-300 tracking-wide uppercase mt-1">
                    {item.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-normal border-t border-slate-900 pt-4 mt-2">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

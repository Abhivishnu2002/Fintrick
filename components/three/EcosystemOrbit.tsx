"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard, 
  CircleUser, 
  Zap, 
  Cpu, 
  Server, 
  Rocket,
  ShieldCheck,
  Globe
} from "lucide-react";

interface ProductNode {
  id: string;
  name: string;
  category: "fintech" | "creator" | "commerce" | "ai" | "infra";
  icon: React.ComponentType<any>;
  orbitIndex: number; // 1, 2, 3
  baseSpeed: number; // Duration of one full orbit in seconds
  description: string;
  metrics: string;
  color: string;
  positionOffset: number; // In degrees
}

const PRODUCTS: ProductNode[] = [
  {
    id: "orbitpay",
    name: "OrbitPay",
    category: "fintech",
    icon: CreditCard,
    orbitIndex: 1,
    baseSpeed: 16,
    description: "Borderless ledger, credit routing and unified card rails processing 10k tx/sec locally.",
    metrics: "99.999% Uptime",
    color: "#3b82f6",
    positionOffset: 0,
  },
  {
    id: "paylio",
    name: "Paylio",
    category: "creator",
    icon: CircleUser,
    orbitIndex: 1,
    baseSpeed: 16,
    description: "Automated merchant splitting, creator micro-credits and sub-dollar API ledgers.",
    metrics: "2.1M Active Creators",
    color: "#a855f7",
    positionOffset: 180,
  },
  {
    id: "rechargic",
    name: "Rechargic",
    category: "commerce",
    icon: Zap,
    orbitIndex: 2,
    baseSpeed: 24,
    description: "Instant utility network and digital voucher API routing with sub-second clearing.",
    metrics: "50M+ API Queries/mo",
    color: "#06b6d4",
    positionOffset: 45,
  },
  {
    id: "fintrick-ai",
    name: "Fintrick AI",
    category: "ai",
    icon: Cpu,
    orbitIndex: 2,
    baseSpeed: 24,
    description: "Real-time risk ledger anomaly monitoring, predictive routing, and smart escrow pipelines.",
    metrics: "0.001% Fraud Rate",
    color: "#6366f1",
    positionOffset: 225,
  },
  {
    id: "infra",
    name: "Sovereign Infra",
    category: "infra",
    icon: Server,
    orbitIndex: 3,
    baseSpeed: 32,
    description: "Enterprise sovereign clouds, localized digital databases, and PCI-DSS Level 1 HSM vaults.",
    metrics: "Tier 4 Security",
    color: "#f59e0b",
    positionOffset: 90,
  },
  {
    id: "future",
    name: "Future Labs",
    category: "infra",
    icon: Rocket,
    orbitIndex: 3,
    baseSpeed: 32,
    description: "Next-gen distributed ledger modules, decentralized identity cards, and tokenization protocols.",
    metrics: "R&D Active",
    color: "#10b981",
    positionOffset: 270,
  },
];

export default function EcosystemOrbit() {
  const [activeProduct, setActiveProduct] = useState<ProductNode | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Group products by orbit index
  const orbit1Products = PRODUCTS.filter((p) => p.orbitIndex === 1);
  const orbit2Products = PRODUCTS.filter((p) => p.orbitIndex === 2);
  const orbit3Products = PRODUCTS.filter((p) => p.orbitIndex === 3);

  const renderOrbitNodes = (nodes: ProductNode[], orbitRadius: number, diameter: number) => {
    const centerOffset = diameter / 2;

    return nodes.map((prod) => {
      // Calculate static initial Cartesian Coordinates based on starting offset angle
      const angleRad = prod.positionOffset * (Math.PI / 180);
      const x = Math.cos(angleRad) * orbitRadius;
      const y = Math.sin(angleRad) * orbitRadius;

      const IconComponent = prod.icon;
      const isActive = activeProduct?.id === prod.id;

      return (
        <React.Fragment key={prod.id}>
          {/* Static connection line from node to center when hovered */}
          {isActive && (
            <svg className="absolute inset-0 pointer-events-none overflow-visible w-full h-full z-10">
              <line
                x1={centerOffset}
                y1={centerOffset}
                x2={centerOffset + x}
                y2={centerOffset + y}
                stroke={prod.color}
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-70"
              />
            </svg>
          )}

          <div
            className={`absolute z-20 cursor-pointer orbit-spin-counterclockwise-${prod.orbitIndex} ${
              isPaused ? "paused" : ""
            }`}
            style={{
              left: centerOffset + x,
              top: centerOffset + y,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => {
              setIsPaused(true);
              setActiveProduct(prod);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
              setActiveProduct(null);
            }}
          >
            <motion.div
              animate={{
                scale: isActive ? 1.25 : 1,
                borderColor: isActive ? prod.color : "rgba(255, 255, 255, 0.05)",
                boxShadow: isActive 
                  ? `0 0 25px ${prod.color}50, inset 0 0 10px ${prod.color}30` 
                  : "0 4px 12px rgba(0, 0, 0, 0.5)",
              }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 rounded-xl bg-slate-900 border flex items-center justify-center group"
              style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}
            >
              <IconComponent 
                className="w-5 h-5 transition-colors duration-300 animate-none"
                style={{ color: isActive ? "#ffffff" : prod.color }} 
              />
              
              {/* Dynamic ring around the node */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: `1px solid ${prod.color}` }}
              />
            </motion.div>

            {/* Label floating above node */}
            <motion.span
              animate={{
                opacity: isActive ? 1 : 0.65,
                y: isActive ? -32 : -26,
                color: isActive ? "#ffffff" : "#94a3b8"
              }}
              className="absolute left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-wider uppercase bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800 whitespace-nowrap"
            >
              {prod.name}
            </motion.span>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="relative w-full max-w-4xl aspect-square mx-auto flex items-center justify-center select-none overflow-visible">
      
      {/* Dynamic Keyframe Injection for Compositor Orbit Spins */}
      <style>{`
        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-counterclockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        .orbit-spin-clockwise-1 {
          animation: spin-clockwise 16s linear infinite;
        }
        .orbit-spin-counterclockwise-1 {
          animation: spin-counterclockwise 16s linear infinite;
        }
        
        .orbit-spin-clockwise-2 {
          animation: spin-clockwise 24s linear infinite;
        }
        .orbit-spin-counterclockwise-2 {
          animation: spin-counterclockwise 24s linear infinite;
        }
        
        .orbit-spin-clockwise-3 {
          animation: spin-clockwise 32s linear infinite;
        }
        .orbit-spin-counterclockwise-3 {
          animation: spin-counterclockwise 32s linear infinite;
        }
        
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Central Core: Fintrick Core */}
      <div className="absolute z-10 flex flex-col items-center justify-center">
        {/* Deep Ambient Glow behind the Core */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-blue-500/10 blur-[50px] animate-pulse" />
        
        {/* Core Ring Structure */}
        <div className="relative w-36 h-36 rounded-full border border-blue-500/20 bg-slate-950/80 flex items-center justify-center shadow-2xl shadow-blue-500/10">
          <div className="absolute inset-2.5 rounded-full border border-blue-500/10 bg-slate-900 flex flex-col items-center justify-center text-center p-2">
            <Cpu className="w-6 h-6 text-blue-400 mb-1 animate-spin" style={{ animationDuration: "10s" }} />
            <span className="text-[11px] font-bold text-white tracking-widest uppercase">FINTRICK</span>
            <span className="text-[9px] font-medium text-blue-400 tracking-wider">CORE</span>
          </div>

          {/* Glowing particle rays */}
          <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-ping opacity-30" style={{ animationDuration: "4s" }} />
        </div>
      </div>

      {/* Orbit 1 Container (260x260px) */}
      <div 
        className={`absolute rounded-full border border-dashed border-slate-800/80 flex items-center justify-center orbit-spin-clockwise-1 ${
          isPaused ? "paused" : ""
        }`}
        style={{ width: "260px", height: "260px" }}
      >
        {/* Light pulsing background line */}
        <div className="absolute inset-0 rounded-full border border-blue-500/5" />
        {renderOrbitNodes(orbit1Products, 130, 260)}
      </div>

      {/* Orbit 2 Container (440x440px) */}
      <div 
        className={`absolute rounded-full border border-dashed border-slate-800/50 flex items-center justify-center orbit-spin-clockwise-2 ${
          isPaused ? "paused" : ""
        }`}
        style={{ width: "440px", height: "440px" }}
      >
        <div className="absolute inset-0 rounded-full border border-cyan-500/5" />
        {renderOrbitNodes(orbit2Products, 220, 440)}
      </div>

      {/* Orbit 3 Container (620x620px) */}
      <div 
        className={`absolute rounded-full border border-dashed border-slate-800/30 flex items-center justify-center orbit-spin-clockwise-3 ${
          isPaused ? "paused" : ""
        }`}
        style={{ width: "620px", height: "620px" }}
      >
        <div className="absolute inset-0 rounded-full border border-indigo-500/3" />
        {renderOrbitNodes(orbit3Products, 310, 620)}
      </div>

      {/* Floating Detailed Product Information Card Overlay (Fades in beautifully) */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute z-30 w-80 p-5 rounded-2xl glass-panel border bg-slate-950/90 shadow-2xl overflow-hidden"
            style={{ 
              borderColor: `${activeProduct.color}30`,
              boxShadow: `0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px ${activeProduct.color}15`
            }}
          >
            {/* Top Border beam matching product color */}
            <div 
              className="absolute top-0 inset-x-0 h-[2px]" 
              style={{ background: `linear-gradient(to right, transparent, ${activeProduct.color}, transparent)` }} 
            />

            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${activeProduct.color}15`, color: activeProduct.color }}
              >
                {React.createElement(activeProduct.icon, { className: "w-4 h-4" })}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">{activeProduct.name}</h4>
                <span 
                  className="text-[9px] font-bold uppercase tracking-widest"
                  style={{ color: activeProduct.color }}
                >
                  {activeProduct.category}
                </span>
              </div>
              <span className="ml-auto text-[10px] font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                {activeProduct.metrics}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal mb-4">
              {activeProduct.description}
            </p>

            <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 border-t border-slate-900 pt-3">
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-slate-500" /> INSTANT DEPLOY
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-slate-500" /> SOC2 COMPLIANT
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

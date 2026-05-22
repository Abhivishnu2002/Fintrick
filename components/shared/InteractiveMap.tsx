"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Sparkles } from "lucide-react";

interface MapNode {
  id: string;
  name: string;
  coords: { x: number; y: number }; // SVG layout coords (relative to 800x400 canvas)
  region: string;
  status: string;
  volume: string;
  latency: string;
}

const NODES: MapNode[] = [
  {
    id: "mangalore",
    name: "Mangalore (HQ)",
    coords: { x: 535, y: 215 },
    region: "Asia South",
    status: "Core Cluster Active",
    volume: "10B+ Transactions",
    latency: "1.2ms local cluster",
  },
  {
    id: "sf",
    name: "San Francisco",
    coords: { x: 140, y: 150 },
    region: "US West",
    status: "Edge Router Operational",
    volume: "2.4B tx/mo",
    latency: "28ms global routing",
  },
  {
    id: "london",
    name: "London",
    coords: { x: 390, y: 125 },
    region: "EU West",
    status: "Financial Gateway Live",
    volume: "3.1B tx/mo",
    latency: "14ms global routing",
  },
  {
    id: "singapore",
    name: "Singapore",
    coords: { x: 575, y: 245 },
    region: "APAC South",
    status: "Edge Router Operational",
    volume: "1.8B tx/mo",
    latency: "9ms global routing",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    coords: { x: 645, y: 165 },
    region: "APAC East",
    status: "Database Mirror Sync",
    volume: "1.5B tx/mo",
    latency: "18ms global routing",
  },
  {
    id: "sydney",
    name: "Sydney",
    coords: { x: 690, y: 320 },
    region: "Australia East",
    status: "Edge Router Operational",
    volume: "0.8B tx/mo",
    latency: "34ms global routing",
  },
];

export default function InteractiveMap() {
  const [hoveredNode, setHoveredNode] = useState<MapNode | null>(null);

  // Return quadratic bezier path string from Mangalore coordinates to destination
  const getBezierPath = (startX: number, startY: number, endX: number, endY: number) => {
    // Pull the control point upwards to form an elegant arc
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2 - Math.abs(startX - endX) * 0.2;
    return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-slate-950/20 rounded-3xl border border-slate-900 overflow-hidden shadow-2xl p-4 sm:p-8 flex items-center justify-center">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent pointer-events-none" />
      
      {/* Subtle Grid backdrop */}
      <div className="absolute inset-0 dots-overlay opacity-30" />

      {/* SVG Canvas Map */}
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full select-none overflow-visible z-10"
      >
        {/* Mock World Map Dots (minimalistic, ultra-modern SVG path representing landmasses) */}
        <g className="text-slate-800 opacity-20">
          {/* Extremely simplified, sleek vector lands */}
          {/* North America */}
          <path d="M 100 120 Q 150 100 200 130 T 260 180 T 220 220 T 170 190 Z" fill="currentColor" />
          {/* South America */}
          <path d="M 210 220 Q 240 250 250 300 T 220 370 T 200 320 T 200 240 Z" fill="currentColor" />
          {/* Greenland */}
          <path d="M 270 50 Q 300 40 330 60 T 300 90 Z" fill="currentColor" />
          {/* Africa */}
          <path d="M 370 200 Q 420 180 440 230 T 460 300 T 420 330 T 380 270 T 360 220 Z" fill="currentColor" />
          {/* Europe */}
          <path d="M 360 120 Q 400 90 440 110 T 450 160 T 390 170 Z" fill="currentColor" />
          {/* Asia */}
          <path d="M 450 110 Q 550 70 700 110 T 670 200 T 580 260 T 470 220 Z" fill="currentColor" />
          {/* India Peninsula */}
          <path d="M 520 210 Q 535 240 545 220 Z" fill="currentColor" />
          {/* Australia */}
          <path d="M 640 300 Q 690 280 720 320 T 670 360 T 630 320 Z" fill="currentColor" />
        </g>

        {/* Glow Filters */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Connection Arcs from Mangalore to Dest Cities */}
        {NODES.filter(n => n.id !== "mangalore").map((node) => (
          <g key={`arc-${node.id}`}>
            {/* Background glowing static arc */}
            <path
              d={getBezierPath(NODES[0].coords.x, NODES[0].coords.y, node.coords.x, node.coords.y)}
              fill="none"
              stroke="#2563eb"
              strokeWidth="1"
              className="opacity-25"
            />
            {/* Animated glowing pulsing dashes */}
            <path
              d={getBezierPath(NODES[0].coords.x, NODES[0].coords.y, node.coords.x, node.coords.y)}
              fill="none"
              stroke="#60a5fa"
              strokeWidth="1.5"
              strokeDasharray="8 30"
              className="opacity-80"
              filter="url(#glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="200;0"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}

        {/* Interactive Pins */}
        {NODES.map((node) => {
          const isHQ = node.id === "mangalore";
          const isHovered = hoveredNode?.id === node.id;

          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Pulse Outer Ring */}
              <circle
                cx={node.coords.x}
                cy={node.coords.y}
                r={isHQ ? (isHovered ? 14 : 9) : (isHovered ? 10 : 6)}
                fill="none"
                stroke={isHQ ? "#3b82f6" : "#06b6d4"}
                strokeWidth="1.5"
                className="opacity-60"
              >
                <animate
                  attributeName="r"
                  values={`${isHQ ? 6 : 4};${isHQ ? 20 : 14}`}
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.8;0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Pin Core */}
              <circle
                cx={node.coords.x}
                cy={node.coords.y}
                r={isHQ ? 5 : 3.5}
                fill={isHQ ? "#60a5fa" : "#22d3ee"}
                filter="url(#glow)"
              />
            </g>
          );
        })}
      </svg>

      {/* Floating Info Box on node hover */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 pointer-events-none sm:top-8 sm:left-8">
        <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold tracking-widest uppercase bg-slate-950/70 border border-slate-900 px-2 py-0.5 rounded">
          <Globe className="w-3 h-3 text-blue-500" /> GLOBAL TRANSACTION ROUTER
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredNode ? hoveredNode.id : "default"}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="w-64 p-4 rounded-xl glass-panel bg-slate-950/90 border-slate-900 shadow-2xl flex flex-col gap-1"
          >
            {hoveredNode ? (
              <>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" /> {hoveredNode.name}
                </h4>
                <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">
                  {hoveredNode.region}
                </span>
                <p className="text-[11px] text-slate-400 leading-normal mt-1 border-t border-slate-900 pt-2 flex flex-col gap-0.5">
                  <span className="text-white font-medium">{hoveredNode.status}</span>
                  <span>Volume: {hoveredNode.volume}</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" /> Latency: {hoveredNode.latency}
                  </span>
                </p>
              </>
            ) : (
              <>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" /> Fintrick Global Network
                </h4>
                <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">
                  Active Routing Nodes
                </span>
                <p className="text-[11px] text-slate-400 leading-normal mt-1 border-t border-slate-900 pt-2">
                  Hover over any active nodes to inspect transaction volumes, edge status, and localized latencies.
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

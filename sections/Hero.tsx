"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck } from "lucide-react";

// Dynamic import of Three.js Globe to keep initial page bundle extremely lightweight
const Globe3D = dynamic(() => import("../components/three/Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center rounded-full border border-slate-800/40 bg-slate-950/40 aspect-square animate-pulse">
      <div className="flex flex-col items-center gap-2 text-slate-500">
        <div className="w-8 h-8 rounded-full border-2 border-t-blue-500 border-r-transparent border-slate-800 animate-spin" />
        <span className="text-[10px] font-bold tracking-widest uppercase">Initializing 3D Mesh...</span>
      </div>
    </div>
  ),
});

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Visual background beam lights */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Side: Editorial Typography & Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6 text-left"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/20 w-fit"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-bold text-blue-300 tracking-wider uppercase">
              Next-Gen Sovereignty Layer
            </span>
          </motion.div>

          {/* Heading Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-gradient-blue"
          >
            Building the Future. Empowering Bharath. <br />
            <span className="text-blue-400" style={{ WebkitTextFillColor: 'currentColor' }}>From Mangalore</span> <span className="text-white" style={{ WebkitTextFillColor: 'currentColor' }}>to the World</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-normal"
          >
            Creating world-class, premium technology ecosystems across <span className="text-white font-medium">Fintech, Creator Economy, Commerce, and Sovereign AI.</span> Built locally in Mangalore, scaled globally for enterprise trust.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <button
              onClick={() => handleScrollTo("#ecosystem")}
              className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-bold text-white shadow-lg shadow-blue-500/20 border border-blue-500/30"
            >
              Explore Ecosystem
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              {/* Highlight sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>

            <button
              onClick={() => handleScrollTo("#cta")}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-800 bg-slate-950/50 hover:border-slate-700 hover:bg-slate-900/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-bold text-slate-300 hover:text-white"
            >
              Partner With Us
            </button>
          </motion.div>

          {/* Tiny metrics callout */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6 mt-8 border-t border-slate-900 pt-6 text-slate-500 text-[11px] font-bold tracking-wider"
          >
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> PCI-DSS LEVEL 1 CERTIFIED</span>
            <span className="flex items-center gap-1.5">⚡ SUB-MILLISECOND LATENCY</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive 3D Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center relative"
        >
          {/* Sphere border highlight */}
          <div className="absolute w-[80%] aspect-square rounded-full border border-blue-500/10 pointer-events-none z-0" />
          <div className="absolute w-[60%] aspect-square rounded-full border border-cyan-500/5 pointer-events-none z-0" />
          
          <div className="w-full h-full z-10">
            <Globe3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

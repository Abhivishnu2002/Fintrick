"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundMesh() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for buttery smooth "liquid mercury" drag
  const springConfig = { damping: 40, stiffness: 200, mass: 1 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Check if device is touch-only or has mobile viewport width
    const touchCheck = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    setIsMobile(touchCheck);

    if (touchCheck) return; // Skip mouse listeners entirely on mobile/touch screens

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor position relative to viewport (offset by half of dimensions)
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
      {/* Layer 1: Ambient Mesh Gradients (Static HSL deep glow blobs) */}
      <div className="absolute inset-0 opacity-30">
        {/* Blob 1: Deep Blue (Top Right) */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-blue-600/30 to-indigo-900/10 blur-[140px]" />
        
        {/* Blob 2: Deep Cyan/Teal (Bottom Left) */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-cyan-600/20 to-blue-900/15 blur-[120px]" />
        
        {/* Blob 3: Center Indigo/Purple (Static to prevent repaint performance drops) */}
        <div className="absolute top-[30%] left-[25%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      {/* Layer 2: Subtle 3D Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Layer 3: Interactive Mouse Reactive Glow (Desktop only to conserve mobile CPU/GPU cycles) */}
      {!isMobile && (
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 blur-[80px] mix-blend-screen"
          style={{
            x: glowX,
            y: glowY,
          }}
        />
      )}

      {/* Layer 4: Static noise texture for organic paper-grain feeling */}
      <div className="absolute inset-0 noise-overlay opacity-80" />

      {/* Layer 5: Ambient dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50" />
    </div>
  );
}

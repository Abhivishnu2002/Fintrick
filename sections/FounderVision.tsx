"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

export default function FounderVision() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textEl = textRef.current;
    if (!textEl) return;

    // Split text into words dynamically
    const textContent = textEl.textContent || "";
    const words = textContent.split(" ");
    textEl.innerHTML = words
      .map((word) => `<span class="vision-word inline-block mr-[0.25em] text-slate-800 transition-colors duration-300">${word}</span>`)
      .join("");

    const spans = textEl.querySelectorAll(".vision-word");

    // Animate span colors from muted to white as you scroll past
    const trigger = gsap.to(spans, {
      color: "#ffffff",
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 0.6,
      },
    });

    return () => {
      trigger.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 sm:py-48 overflow-hidden bg-[#020617] flex items-center justify-center z-10"
    >
      {/* Background glowing light mesh */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full px-6 flex flex-col gap-6 text-center items-center">
        
        {/* Caption */}
        <div className="inline-flex items-center gap-1.5 text-slate-500 text-[10px] font-bold tracking-[0.25em] uppercase border border-slate-900 bg-slate-950/60 px-3 py-1 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" /> THE FOUNDATION DIRECTIVE
        </div>

        {/* Vision Statement (will be split by JS client side) */}
        <p 
          ref={textRef}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 leading-[1.2] max-w-4xl"
        >
          We are not building applications. We are building sovereign digital infrastructure designed for the next decade.
        </p>

        {/* Small founder footer */}
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-8">
          FINTRICK FOUNDING DIRECTORS // MANGALORE HQ
        </span>

      </div>
    </section>
  );
}

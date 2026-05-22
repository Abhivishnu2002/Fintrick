"use client";

import LogoMarquee from "../components/shared/LogoMarquee";

export default function TrustBar() {
  return (
    <section className="relative w-full overflow-hidden py-12 flex flex-col items-center gap-6 z-10">
      <div className="text-center flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">
          Ecosystem Integrations
        </span>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Trusted by Industry Standards & Regulatory Rails
        </h3>
      </div>
      <LogoMarquee />
    </section>
  );
}

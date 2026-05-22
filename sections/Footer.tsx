"use client";

import { ArrowUp, Layers } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#020617] border-t border-slate-900 z-10 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-12">
        
        {/* Top half: Sitemap columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden">
                <Layers className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                FINTRICK
              </span>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed font-normal max-w-sm">
              Fintrick Innovations is a technology ecosystem building premium commercial rails across Fintech, Creator Economy, Commerce, AI, and Digital Infrastructure.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3.5 mt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-700 transition-all flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-700 transition-all flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-700 transition-all flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Category Columns */}
          {/* Col 1: Products */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
              Products
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="#products" className="text-xs text-slate-400 hover:text-white transition-colors">OrbitPay</a>
              <a href="#products" className="text-xs text-slate-400 hover:text-white transition-colors">Paylio</a>
              <a href="#products" className="text-xs text-slate-400 hover:text-white transition-colors">Rechargic</a>
              <a href="#products" className="text-xs text-slate-400 hover:text-white transition-colors">Fintrick AI</a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
              Company
            </span>
            <div className="flex flex-col gap-2.5">
              <a href="#story" className="text-xs text-slate-400 hover:text-white transition-colors">Our Story</a>
              <a href="#metrics" className="text-xs text-slate-400 hover:text-white transition-colors">Platform Scale</a>
              <a href="#cta" className="text-xs text-slate-400 hover:text-white transition-colors">Partner With Us</a>
            </div>
          </div>

          {/* Col 3: Research */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
              Developer & Security
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> API Gateway: Operational
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Global Edge: Operational
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Compliance Sync: Active
              </div>
            </div>
          </div>

        </div>

        {/* Bottom half: Copyright & Legal */}
        <div className="border-t border-slate-900 pt-8 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-slate-500">
              © {currentYear} Fintrick Innovations Pvt. Ltd. All rights reserved.
            </span>
            <span className="text-[9px] font-bold text-slate-600 tracking-widest uppercase">
              DEVELOPED AND DESIGNED IN MANGALORE FOR THE NEXT BILLION USERS
            </span>
          </div>

          {/* Legal Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Cookies</a>
            </div>
            
            {/* Scroll to Top */}
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-850 transition-all flex items-center justify-center shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

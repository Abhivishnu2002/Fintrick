import Hero from "../sections/Hero";
import TrustBar from "../sections/TrustBar";
import ScrollStory from "../sections/ScrollStory";
import Ecosystem from "../sections/Ecosystem";
import ProductShowcase from "../sections/ProductShowcase";
import Metrics from "../sections/Metrics";
import InnovationLab from "../sections/InnovationLab";
import GlobalPresence from "../sections/GlobalPresence";
import FounderVision from "../sections/FounderVision";
import FinalCTA from "../sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative overflow-visible">
      {/* 1. Hero Experience (Includes dynamic 3D Globe R3F Canvas) */}
      <Hero />

      {/* 2. Trust Bar (Infinite Partner/Logo Marquee) */}
      <TrustBar />

      {/* 3. Pinned Scroll Storytelling (GSAP Horizontal Scroll Slides) */}
      <ScrollStory />

      {/* 4. Ecosystem Orbital Experience (Interactive Orbit Model) */}
      <Ecosystem />

      {/* 5. Flagship Products Sticky/Alternating Showcase */}
      <ProductShowcase />

      {/* 6. Company Tractions & Numerical Counter Metrics */}
      <Metrics />

      {/* 7. Innovation Lab Pipeline Cards */}
      <InnovationLab />

      {/* 8. Global Vector Settlements Map Presence */}
      <GlobalPresence />

      {/* 10. Apple-style Scroll Reveal Founder Statement */}
      <FounderVision />

      {/* 11. Final Energetic Radial CTA Grid */}
      <FinalCTA />
    </div>
  );
}

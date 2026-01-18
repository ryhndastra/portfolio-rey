"use client";

import SkillCategories from "@/app/components/ui/skill-categories";
import TechGrid from "@/app/components/ui/tech-grid";
import { Cpu } from "lucide-react";

export default function SkillsSection({ isVisible }) {
  return (
    <section id="skills" className="relative px-4 py-24 bg-[#050505] font-mono selection:bg-green-500 selection:text-black overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_3px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Cpu className="w-8 h-8 text-green-500 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              SYSTEM_CAPABILITIES
            </h2>
          </div>
          <div className="w-24 h-1 mx-auto mb-6 bg-green-900/50 relative overflow-hidden">
             <div className="absolute inset-0 bg-green-500 w-1/2 animate-slide-scan"></div>
          </div>
          <p className="text-gray-400 text-sm md:text-lg tracking-wide font-mono">
            {">"} Listing installed modules and architecture...
          </p>
        </div>

        {/* CONTENT COMPONENTS */}
        <div className="space-y-20">
            <TechGrid isVisible={isVisible} />
            <SkillCategories isVisible={isVisible} />
        </div>

      </div>

      <style jsx>{`
        @keyframes slide-scan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
        }
        .animate-slide-scan {
            animation: slide-scan 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
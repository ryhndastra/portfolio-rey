"use client";

import { ArrowUp, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000); 

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-[#222] text-white font-mono text-xs overflow-hidden selection:bg-green-500 selection:text-black">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_3px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* LEFT*/}
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2 bg-[#0a0a0a] border-2 border-[#333] px-3 py-1 shadow-[4px_4px_0px_0px_#111]">
                    <Terminal className="w-4 h-4 text-green-500" />
                    <span className="font-bold tracking-widest text-green-500">SYSTEM_ID: REYHAND</span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                    LOCATION: BANDUNG, ID // {time || "INITIALIZING..."}
                </p>
            </div>

            {/* CENTER */}
            <div className="text-center">
                <p className="font-bold tracking-wide mb-1">
                    &copy; {year} REYHAND ASTRA
                </p>
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500">
                    <span>BUILT_WITH</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>NEXT.JS</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>COFFEE_V.2.0</span>
                </div>
            </div>

            {/* RIGHT */}
            <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-5 py-3 bg-[#111] text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-black transition-all shadow-[4px_4px_0px_0px_#333] hover:shadow-[4px_4px_0px_0px_#ffffff] active:translate-y-1 active:shadow-none"
            >
                <span className="font-black uppercase tracking-widest">RETURN_TO_TOP</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 pt-4 border-t border-[#222] flex justify-between text-[10px] text-gray-700 font-bold uppercase">
             <span>MEM_USAGE: LOW</span>
             <span className="animate-pulse">_END_OF_STREAM</span>
        </div>

      </div>
    </footer>
  );
}
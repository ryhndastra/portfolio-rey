"use client";

import { Briefcase, Code, Home, MessageCircle, User, Terminal } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "/ROOT" },
  { id: "about", icon: User, label: "/IDENTITY" },
  { id: "skills", icon: Code, label: "/SYSTEM" },
  { id: "projects", icon: Briefcase, label: "/DATA" },
  { id: "contact", icon: MessageCircle, label: "/COMM" },
];

export default function Navigation({ activeSection, scrollToSection }) {
  return (
    <>
      {/* --- DESKTOP SIDEBAR --- */}
      <nav className="fixed z-50 hidden transform -translate-y-1/2 left-6 top-1/2 lg:block">
        
        {/* Header Label */}
        <div className="absolute -top-8 left-0 w-full text-center">
            <span className="text-[10px] text-gray-600 font-mono font-bold tracking-widest">MENU</span>
        </div>

        {/* Container */}
        <div className="flex flex-col gap-3 p-3 bg-[#0a0a0a] border-2 border-[#333] shadow-[4px_4px_0px_0px_#111]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group w-12 h-12 flex items-center justify-center transition-all duration-200
                  ${
                    isActive
                      ? "bg-green-600 text-black border-2 border-green-600 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                      : "text-gray-500 bg-transparent border-2 border-[#222] hover:border-green-500 hover:text-green-500"
                  }`}
              >
                <item.icon className="w-5 h-5" />

                <div className="absolute left-full ml-5 px-3 py-1 bg-black text-green-500 text-[10px] font-bold font-mono border border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-[4px_4px_0px_0px_#111] z-50">
                  {item.label}
                  <div className="absolute top-1/2 -left-5 w-5 h-[1px] bg-green-500"></div>
                  <div className="absolute top-1/2 -left-1 w-1 h-1 bg-green-500"></div>
                </div>
              </button>
            );
          })}
        </div>
        
        
        <div className="absolute -bottom-8 left-0 w-full flex justify-center">
            <div className="w-1 h-4 bg-gray-800"></div>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM NAV  --- */}
      <nav className="fixed z-50 transform -translate-x-1/2 bottom-6 left-1/2 lg:hidden w-[90%] max-w-sm">
        <div className="flex justify-between items-center px-2 py-2 bg-[#0a0a0a] border-2 border-[#333] shadow-[0px_10px_30px_rgba(0,0,0,0.9)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative w-full h-12 flex flex-col items-center justify-center gap-1 transition-all duration-200 group
                  ${
                    isActive
                      ? "text-green-500"
                      : "text-gray-600 hover:text-gray-300"
                  }`}
              >
                {/* Active Indicator  */}
                {isActive && (
                    <div className="absolute top-0 w-8 h-[2px] bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                )}
                
                <item.icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                
                <span className={`text-[8px] font-mono uppercase ${isActive ? 'block' : 'hidden'}`}>
                    {item.label.replace('/', '')}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
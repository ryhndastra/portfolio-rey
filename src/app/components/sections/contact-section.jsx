"use client";

import { Button } from "@/app/components/ui/button";
import { Mail, Github, Linkedin, Wifi, ArrowUpRight, Signal } from "lucide-react";

export default function ContactSection({ isVisible }) {
  return (
    <section
      id="contact"
      className="relative px-4 py-24 bg-[#050505] font-mono selection:bg-green-500 selection:text-black overflow-hidden"
    >
        {/* BACKGROUND FX */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_3px] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            
            {/* SECTION HEADER */}
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                    <Signal className="w-8 h-8 text-green-500 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                        CONNECT
                    </h2>
                </div>
                {/* Animated Bar */}
                <div className="w-24 h-1 mx-auto mb-6 bg-green-900/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500 w-1/2 animate-slide-scan"></div>
                </div>
                <p className="text-gray-400 text-sm md:text-lg tracking-wide font-mono">
                    {">"} Initializing secure handshake protocols...
                </p>
            </div>


            {/* MAIN TERMINAL BOX */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
                <div className="bg-[#0a0a0a] border-4 border-white p-8 md:p-12 shadow-[12px_12px_0px_0px_#22c55e] relative">
                    
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-white"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-white"></div>

                    {/* BOX HEADER */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 border-b-4 border-green-500 pb-2 mb-4">
                            <Wifi className="w-6 h-6 text-green-500" />
                            <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-widest">
                                ESTABLISH_UPLINK
                            </h3>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm font-bold tracking-widest uppercase">
                            STATUS: READY_TO_CONNECT
                        </p>
                    </div>

                    {/* CONTENT */}
                    <div className="text-center space-y-10">
                        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed font-bold border-l-4 border-[#222] pl-4 md:border-none md:pl-0">
                            I am currently available for freelance projects and open to full-time opportunities. 
                            If you have a concept that needs to be compiled into reality, execute the command below.
                        </p>

                        {/* CTA BUTTON */}
                        <a href="mailto:ryhndastra@gmail.com" className="inline-block group">
                            <Button
                                size="lg"
                                className="bg-green-600 text-black border-4 border-green-600 hover:bg-white hover:text-black hover:border-white hover:shadow-[8px_8px_0px_0px_#22c55e] transition-all duration-200 rounded-none h-16 px-10 text-xl font-black uppercase tracking-widest flex items-center gap-3"
                            >
                                <Mail className="w-6 h-6 group-hover:animate-bounce" />
                                SEND_TRANSMISSION
                            </Button>
                        </a>

                        {/* SOCIAL NODES */}
                        <div className="pt-8 border-t-4 border-[#1a1a1a]">
                            <p className="text-xs text-gray-600 font-bold uppercase mb-6 tracking-widest">OTHER_COMM_CHANNELS:</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { name: "GITHUB_REPO", icon: Github, url: "https://github.com/ryhndastra" },
                                    { name: "LINKEDIN_PROFILE", icon: Linkedin, url: "https://www.linkedin.com/in/reyhand-astra-377264356/" },
                                ].map((social, i) => (
                                    <a 
                                        key={i}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-[#111] border-2 border-gray-700 text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all shadow-[4px_4px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#22c55e] active:translate-y-1 active:shadow-none"
                                    >
                                        <social.icon className="w-4 h-4" />
                                        <span className="text-xs font-black tracking-wider">{social.name}</span>
                                        <ArrowUpRight className="w-3 h-3 opacity-50" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Status inside Box */}
                    <div className="absolute bottom-0 left-0 w-full bg-[#111] border-t-2 border-white/10 p-2 flex justify-between text-[10px] text-gray-600 font-mono uppercase">
                        <span>SYSTEM_STATUS: ONLINE</span>
                        <span className="animate-pulse">_CURSOR_ACTIVE</span>
                    </div>

                </div>
            </div>

        </div>
    </section>
  );
}
"use client";

import { FolderOpen, Mail, Github, Instagram, Linkedin, Volume2, VolumeX, Music } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function HeroSection({ isVisible, scrollToSection }) {
  const [gamePhase, setGamePhase] = useState("welcome"); 
  const [text, setText] = useState("");
  const fullText = "INITIALIZING_SYSTEM...";
  const [invaderFrame, setInvaderFrame] = useState(0);
  
  // -- AUDIO STATES --
  const [isMuted, setIsMuted] = useState(false);
  const audioBgmRef = useRef(null);
  const audioSfxRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setInvaderFrame((prev) => (prev === 0 ? 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // --- LOGIC AUDIO PLAYER ---
  useEffect(() => {
    audioBgmRef.current = new Audio("/audio/bgm.mp3");
    audioBgmRef.current.loop = true;
    audioBgmRef.current.volume = 0.3; 

    audioSfxRef.current = new Audio("/audio/start.wav");
    audioSfxRef.current.volume = 0.5;

    return () => {
      if (audioBgmRef.current) {
        audioBgmRef.current.pause();
        audioBgmRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioBgmRef.current) {
      audioBgmRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleStartGame = () => {
    if (audioSfxRef.current) {
      audioSfxRef.current.currentTime = 0;
      audioSfxRef.current.play().catch(e => console.log("Audio play failed", e));
    }

    if (audioBgmRef.current) {
      audioBgmRef.current.play().catch(e => console.log("Audio play failed", e));
    }

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    if (scrollToSection) scrollToSection("home");
    
    setGamePhase("transition");

    setTimeout(() => {
      setGamePhase("portfolio");
    }, 1000);
  };

  useEffect(() => {
    if (gamePhase === "portfolio") {
      let index = 0;
      const timer = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(timer);
      }, 50);
      return () => clearInterval(timer);
    }
  }, [gamePhase]);

  const invaderMap = [
    [0,0,1,0,0,0,0,0,1,0,0],
    [0,0,0,1,1,0,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0],
    [0,1,1,0,1,1,1,0,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,1,0,1],
    invaderFrame === 0 ? [0,0,0,1,1,0,1,1,0,0,0] : [0,0,1,0,0,0,0,0,1,0,0]
  ];

  const techStack = [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", anim: "animate-float-fast" },
    { name: "Laravel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", anim: "animate-float-slow" },
    { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", anim: "animate-float-medium" },
  ];

  const socialLinks = [
  { Icon: Github, href: "https://github.com/ryhndastra" },
  { Icon: Linkedin, href: "https://linkedin.com/in/reyhand-astra-377264356/" },
  { Icon: Instagram, href: "https://instagram.com/ryhndastra" },
];

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden bg-[#050505] font-mono selection:bg-green-500 selection:text-black">
      
      {/* --- STEALTH AUDIO CONTROLLER --- */}
      {gamePhase === 'portfolio' && (
        <button 
            onClick={toggleMute}
            className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-[#333] hover:border-green-500 hover:bg-black transition-all group"
        >
            {isMuted ? (
                <>
                    <VolumeX className="w-3 h-3 text-gray-500 group-hover:text-red-500" />
                    <span className="text-[10px] text-gray-500 group-hover:text-red-500 font-bold hidden sm:block">AUDIO: OFF</span>
                </>
            ) : (
                <>
                    {/* Visualizer Effect */}
                    <div className="flex gap-[2px] items-end h-3">
                        <div className="w-[2px] h-2 bg-green-500 animate-[bounce_1s_infinite]"></div>
                        <div className="w-[2px] h-3 bg-green-500 animate-[bounce_1.2s_infinite]"></div>
                        <div className="w-[2px] h-1 bg-green-500 animate-[bounce_0.8s_infinite]"></div>
                    </div>
                    <span className="text-[10px] text-green-500 font-bold hidden sm:block">AUDIO: ON</span>
                </>
            )}
        </button>
      )}

          {/* --- HERO SECTION  */}
      <div className={`relative z-10 w-full max-w-7xl transition-all duration-1000 ease-out ${gamePhase === 'portfolio' ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-sm'}`}>
        
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_3px] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full py-12 lg:py-0">
          
          {/* RIGHT: AVATAR */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] lg:w-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-emerald-600 translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 border-2 border-white"></div>
              <div className="absolute inset-0 bg-black translate-x-1.5 translate-y-1.5 lg:translate-x-2 lg:translate-y-2 border-2 border-white"></div>
              <div className="absolute inset-0 bg-zinc-900 border-2 border-white flex flex-col shadow-2xl overflow-hidden">
                 <div className="h-8 bg-white flex items-center px-2 justify-between border-b-2 border-black">
                    <span className="text-xs font-bold text-black">PLAYER_1</span>
                    <div className="flex gap-1"><div className="w-3 h-3 border border-black bg-black"></div></div>
                 </div>
                 <div className="flex-1 bg-black relative">
                    <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" style={{imageRendering: 'pixelated'}} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                 </div>
              </div>
              
              <div className="absolute flex flex-row gap-4 -bottom-5 left-1/2 -translate-x-1/2 lg:flex-col lg:gap-5 lg:bottom-auto lg:top-12 lg:left-auto lg:-right-8 lg:translate-x-0 z-20 w-max">
                  {techStack.map((tech, index) => (
                      <div key={index} className={`bg-white p-2 lg:p-2.5 border-2 border-black shadow-[4px_4px_0px_0px_#000] ${tech.anim} hover:pause`}>
                          <img src={tech.url} className="w-6 h-6 lg:w-9 lg:h-9" alt={tech.name} style={{imageRendering: 'pixelated'}} />
                      </div>
                  ))}
              </div>
            </div>
          </div>

          {/* LEFT TEXT */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <div className="flex items-center gap-2 text-xs font-bold text-green-500 tracking-widest">
               <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
               <span>SYSTEM_READY: {text}<span className="animate-pulse">_</span></span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] drop-shadow-[4px_4px_0_rgba(255,255,255,0.2)]">
                REYHAND<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">ASTRA</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
                 <div className="h-[2px] w-12 bg-green-500"></div>
                 <p className="text-xl font-bold text-gray-300 tracking-wide">WEB <span className="bg-white text-black px-1">DEVELOPER</span></p>
              </div>
            </div>

            <div className="relative group max-w-lg w-full text-left"> 
              <div className="absolute -inset-1 bg-green-500 opacity-20 blur"></div>
              <div className="relative p-5 bg-black border-2 border-white shadow-[6px_6px_0px_0px_#333]">
                <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full opacity-50"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-50"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full opacity-50"></div>
                   </div>
                   <span className="text-xs text-gray-500">main.exe</span>
                </div>
                <div className="font-mono text-sm leading-relaxed text-gray-300">
                  <p className="mb-4 text-green-400">
                    {`> Initiating connection...`} <br/>
                    {`> Success!`}
                  </p>
                  <p className="text-gray-400 italic">// "Code is like humor. When you have to explain it, it’s bad."</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 pt-4 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => scrollToSection("projects")} className="px-6 py-4 bg-yellow-400 text-black font-black text-lg border-2 border-white shadow-[4px_4px_0px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 group">
                  <FolderOpen className="w-5 h-5 transition-transform group-hover:-rotate-12" /> SELECT LEVEL
                </button>
                <button onClick={() => scrollToSection("contact")} className="px-6 py-4 bg-transparent text-white font-bold text-lg border-2 border-white shadow-[4px_4px_0px_0px_#444] hover:bg-white hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" /> MULTIPLAYER
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                 <div className="h-[2px] w-8 bg-gray-800 hidden lg:block"></div>
                 <div className="flex gap-3">
                    {socialLinks.map((link, i) => (
                      <a key={i} href={link.href} className="w-12 h-12 flex items-center justify-center border-2 border-gray-700 text-gray-400 hover:border-white hover:text-white hover:bg-gray-900 transition-all hover:-translate-y-1">
                        <link.Icon className="w-5 h-5" />
                      </a>
                    ))}
                 </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

          {/* WELCOME SCREEN */}
      {gamePhase !== 'portfolio' && (
        <div 
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black font-mono overflow-hidden select-none
            ${gamePhase === 'transition' ? 'animate-warp-out' : ''}
          `}
        >
          <div className={`absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 ${gamePhase === 'transition' ? 'animate-hyper-speed' : ''}`}></div>
          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

          <div className={`relative z-20 flex flex-col items-center gap-8 ${gamePhase === 'transition' ? 'opacity-0 scale-[5] blur-xl transition-all duration-500' : ''}`}>
              <div className="flex flex-col gap-1 p-4 transition-all duration-300 hover:scale-110">
                  {invaderMap.map((row, rowIndex) => (
                      <div key={rowIndex} className="flex gap-1">
                          {row.map((pixel, colIndex) => (
                              <div key={colIndex} className={`w-3 h-3 sm:w-4 sm:h-4 ${pixel ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-transparent'}`}></div>
                          ))}
                      </div>
                  ))}
              </div>

              <div className="text-center space-y-2 relative group cursor-default">
                  <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase drop-shadow-[4px_4px_0_#333] relative">
                      <span className="relative z-10">REYHAND</span>
                      <span className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-75 select-none z-0">REYHAND</span>
                      <span className="absolute inset-0 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-75 select-none z-0">REYHAND</span>
                  </h1>
                  <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 tracking-widest uppercase drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)]">
                      ASTRA
                  </h2>
              </div>

              <div className="mt-8">
                  <button 
                    onClick={handleStartGame}
                    className="relative px-8 py-3 bg-transparent text-white font-bold text-xl tracking-[0.2em] group overflow-hidden transition-all hover:scale-105 active:scale-95 animate-pulse cursor-pointer z-50"
                  >
                    <span className="relative z-10 drop-shadow-md">PRESS START</span>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-white"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-white transform -scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <div className="absolute right-0 top-0 h-full w-[2px] bg-white transform -scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  </button>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-4">© 2026 . INSERT COIN</p>
          </div>
          
          <div className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-300 ease-out ${gamePhase === 'transition' ? 'opacity-30' : 'opacity-0'}`}></div>
        </div>
      )}
    </section>
  );
}
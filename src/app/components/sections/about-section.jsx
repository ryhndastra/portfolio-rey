"use client";

import { Terminal, Cpu, Gamepad2, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Play, RefreshCcw, Trophy, User, Code } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

// --- CONFIG GAME ---
const GRID_SIZE = 20;
const SPEED = 120; 

const FACTS = [
  "ROLE: Fullstack Engineer",
  "STACK: React, Next.js, Laravel",
  "FOCUS: Clean Architecture",
  "MOBILE: Flutter Developer",
  "STATUS: Ready to Learn", 
  "HOBBY: Gaming & Coding",
  "EXP: Building Projects", 
  "STYLE: Pixel Perfect"
];

export default function AboutSection({ isVisible }) {
  const [activeTab, setActiveTab] = useState("bio");
  
  // --- STATE ANIMASI KARAKTER 
  const [invaderFrame, setInvaderFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInvaderFrame((prev) => (prev === 0 ? 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Map Pixel Invader 
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
  
  // --- GAME STATES ---
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 5 });
  const [dir, setDir] = useState("RIGHT");
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [unlockedFacts, setUnlockedFacts] = useState([]);
  const gameLoopRef = useRef();

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }, []);

  const changeDir = useCallback((newDir) => {
    setDir((prev) => {
      if (newDir === "UP" && prev !== "DOWN") return "UP";
      if (newDir === "DOWN" && prev !== "UP") return "DOWN";
      if (newDir === "LEFT" && prev !== "RIGHT") return "LEFT";
      if (newDir === "RIGHT" && prev !== "LEFT") return "RIGHT";
      return prev;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPlaying || activeTab !== "game") return;
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(e.code) > -1) {
        e.preventDefault();
      }
      switch (e.key.toLowerCase()) {
        case "w": case "arrowup": changeDir("UP"); break;
        case "s": case "arrowdown": changeDir("DOWN"); break;
        case "a": case "arrowleft": changeDir("LEFT"); break;
        case "d": case "arrowright": changeDir("RIGHT"); break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, activeTab, changeDir]);

  useEffect(() => {
    if (isPlaying && !gameOver && activeTab === "game") {
      gameLoopRef.current = setInterval(() => {
        setSnake((prev) => {
          const newSnake = [...prev];
          const head = { ...newSnake[0] };

          if (dir === "UP") head.y -= 1;
          if (dir === "DOWN") head.y += 1;
          if (dir === "LEFT") head.x -= 1;
          if (dir === "RIGHT") head.x += 1;

          if (head.x >= GRID_SIZE) head.x = 0;
          if (head.x < 0) head.x = GRID_SIZE - 1;
          if (head.y >= GRID_SIZE) head.y = 0;
          if (head.y < 0) head.y = GRID_SIZE - 1;

          if (newSnake.some(s => s.x === head.x && s.y === head.y)) {
            setGameOver(true);
            setIsPlaying(false);
            return prev;
          }

          newSnake.unshift(head);

          if (head.x === food.x && head.y === food.y) {
            setScore(s => s + 1);
            setFood(generateFood());
            const fact = FACTS[score % FACTS.length];
            setUnlockedFacts(prev => prev.includes(fact) ? prev : [fact, ...prev]);
          } else {
            newSnake.pop();
          }
          return newSnake;
        });
      }, SPEED);
    } else {
      clearInterval(gameLoopRef.current);
    }
    return () => clearInterval(gameLoopRef.current);
  }, [isPlaying, gameOver, dir, food, score, activeTab, generateFood]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDir("RIGHT");
    setGameOver(false);
    setScore(0);
    setUnlockedFacts([]);
    setIsPlaying(true);
  };

  return (
    <section id="about" className="relative px-4 py-24 bg-[#050505] font-mono text-gray-300 selection:bg-green-500 selection:text-black flex justify-center overflow-hidden">
      
      {/* Background FX */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_3px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>

      <div className={`relative z-10 w-full max-w-6xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* TABS HEADER */}
        <div className="flex flex-wrap gap-2 mb-6 border-b-2 border-white/20 pb-1">
           {[
             { id: "bio", label: "/BIO_DATA", icon: User },
             { id: "game", label: "/MINIGAME.EXE", icon: Gamepad2 },
             { id: "skills", label: "/SKILL_TREE", icon: Code },
           ].map((tab) => (
             <button
               key={tab.id}
               onClick={() => { setActiveTab(tab.id); setIsPlaying(false); }} 
               className={`flex items-center gap-2 px-6 py-3 text-sm font-bold border-t-2 border-x-2 transition-all rounded-t-lg
                 ${activeTab === tab.id 
                   ? "bg-black text-green-400 border-green-500 shadow-[0_-5px_15px_rgba(34,197,94,0.1)] translate-y-[2px] z-10" 
                   : "bg-[#111] text-gray-500 border-gray-800 hover:text-white hover:bg-gray-900"
                 }
               `}
             >
               <tab.icon className="w-4 h-4" />
               {tab.label}
             </button>
           ))}
        </div>

        {/* CONTENT BOX */}
        <div className="bg-black border-2 border-green-900/50 p-6 lg:p-8 min-h-[500px] relative shadow-[0_0_30px_rgba(0,0,0,0.5)]">
           
           {/* --- TAB 1 --- */}
           {activeTab === "bio" && (
             <div className="animate-in fade-in slide-in-from-left-4 duration-500 grid lg:grid-cols-2 gap-12 items-center h-full">
                <div className="space-y-6">
                   <h3 className="text-3xl font-black text-white uppercase tracking-widest flex items-center gap-2">
                      <Terminal className="w-8 h-8 text-green-500" />
                      IDENTITY_CORE
                   </h3>
                   <div className="text-gray-400 leading-relaxed space-y-4 border-l-2 border-green-900 pl-4">
                      <p>
                        <span className="text-green-500 font-bold">{">>"}</span> Hello! I'm <strong className="text-white">Reyhand Astra</strong>, a Fullstack Engineer passionate about turning logic into pixel-perfect reality.
                      </p>
                      <p>
                        <span className="text-green-500 font-bold">{">>"}</span> Currently focusing on the <span className="text-white">Next.js Ecosystem</span> and <span className="text-white">Flutter</span>. I may be new to the industry, but my dedication to <strong>Clean Architecture</strong> is senior-level.
                      </p>
                      <p>
                        <span className="text-green-500 font-bold">{">>"}</span> Always debugging, always learning. Ready to build scalable solutions.
                      </p>
                   </div>
                   
                   {/* Stat Bars */}
                   <div className="space-y-3 pt-4">
                      {[
                        { label: "Frontend", val: "95%", color: "bg-green-500" },
                        { label: "Backend", val: "88%", color: "bg-blue-500" },
                        { label: "Mobile", val: "80%", color: "bg-yellow-500" }
                      ].map((stat, i) => (
                        <div key={i}>
                           <div className="flex justify-between text-xs mb-1 font-bold text-gray-500"><span>{stat.label}</span><span>{stat.val}</span></div>
                           <div className="w-full h-2 bg-gray-900"><div className={`h-full ${stat.color}`} style={{width: stat.val}}></div></div>
                        </div>
                      ))}
                   </div>
                </div>
                
                {/* RIGHT SIDE */}
                <div className="relative h-64 lg:h-full bg-[#0a0a0a] border border-gray-800 flex flex-col items-center justify-center overflow-hidden">
                   
                   {/* Pixel Grid Invader */}
                   <div className="flex flex-col gap-1 p-4 scale-150 filter drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                      {invaderMap.map((row, rowIndex) => (
                          <div key={rowIndex} className="flex gap-1">
                              {row.map((pixel, colIndex) => (
                                  <div key={colIndex} className={`w-3 h-3 ${pixel ? 'bg-green-500' : 'bg-transparent'}`}></div>
                              ))}
                          </div>
                      ))}
                   </div>

                   <div className="text-center mt-6">
                      <div className="text-sm font-black text-green-500 animate-pulse tracking-widest">AVATAR_ONLINE</div>
                      <div className="text-[10px] text-gray-600 mt-1">SYSTEM_ID: REYHAND</div>
                   </div>
                   
                   {/* Scanline & Vignette */}
                   <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
                </div>
             </div>
           )}

           {/* --- TAB 2 --- */}
           {activeTab === "game" && (
             <div className="animate-in zoom-in-95 duration-500 flex flex-col lg:flex-row gap-8 h-full">
                {/* GAME BOY AREA */}
                <div className="flex-1 flex flex-col items-center justify-center">
                   <div className="relative p-2 bg-gray-800 border-4 border-gray-600 rounded-xl shadow-2xl">
                      {/* SCREEN */}
                      <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] bg-[#0f1510] border-2 border-black grid relative overflow-hidden"
                           style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)` }}>
                         
                         {!isPlaying && !gameOver && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/90">
                               <p className="text-green-500 font-bold text-lg mb-4 animate-pulse">PRESS START</p>
                               <button onClick={resetGame} className="px-6 py-2 bg-green-600 text-black font-bold hover:bg-green-500 flex items-center gap-2">
                                  <Play className="w-4 h-4" /> PLAY
                               </button>
                               <p className="text-[10px] text-gray-500 mt-4">Desktop: WASD / Arrows</p>
                            </div>
                         )}

                         {gameOver && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-red-900/90">
                               <p className="text-white font-bold text-xl mb-2">GAME OVER</p>
                               <p className="text-sm mb-4">Score: {score}</p>
                               <button onClick={resetGame} className="px-4 py-2 bg-white text-black font-bold hover:bg-gray-200 flex items-center gap-2">
                                  <RefreshCcw className="w-4 h-4" /> RETRY
                               </button>
                            </div>
                         )}

                         {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                            const x = i % GRID_SIZE;
                            const y = Math.floor(i / GRID_SIZE);
                            const isSnake = snake.some(s => s.x === x && s.y === y);
                            const isFood = food.x === x && food.y === y;
                            return (
                               <div key={i} className={`${isSnake ? 'bg-green-500 rounded-sm' : isFood ? 'bg-yellow-400 animate-pulse rounded-full' : 'bg-transparent border-[0.5px] border-[#1a2e1e]'}`}></div>
                            )
                         })}
                      </div>
                   </div>

                   {/* MOBILE CONTROLS */}
                   <div className="mt-6 grid grid-cols-3 gap-2 lg:hidden w-40 select-none">
                      <div></div>
                      <button onPointerDown={(e) => {e.preventDefault(); changeDir("UP")}} className="h-12 bg-gray-700 rounded active:bg-green-600 flex items-center justify-center text-white shadow-lg"><ChevronUp /></button>
                      <div></div>
                      <button onPointerDown={(e) => {e.preventDefault(); changeDir("LEFT")}} className="h-12 bg-gray-700 rounded active:bg-green-600 flex items-center justify-center text-white shadow-lg"><ChevronLeft /></button>
                      <div className="h-12 bg-[#111] rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div></div>
                      <button onPointerDown={(e) => {e.preventDefault(); changeDir("RIGHT")}} className="h-12 bg-gray-700 rounded active:bg-green-600 flex items-center justify-center text-white shadow-lg"><ChevronRight /></button>
                      <div></div>
                      <button onPointerDown={(e) => {e.preventDefault(); changeDir("DOWN")}} className="h-12 bg-gray-700 rounded active:bg-green-600 flex items-center justify-center text-white shadow-lg"><ChevronDown /></button>
                      <div></div>
                   </div>
                </div>

                {/* GAME LOGS */}
                <div className="w-full lg:w-64 h-64 lg:h-auto bg-[#111] border border-green-900 p-4 overflow-y-auto font-mono text-xs">
                   <div className="border-b border-green-800 pb-2 mb-2 text-green-500 font-bold flex justify-between">
                      <span>DATA_LOGS</span>
                      <span>SCORE: {score}</span>
                   </div>
                   <div className="space-y-2">
                      {unlockedFacts.length === 0 ? (
                         <span className="text-gray-600 animate-pulse">{">"} Collect yellow packets to download data...</span>
                      ) : (
                         unlockedFacts.map((f, i) => (
                            <div key={i} className="text-gray-300 animate-slide-in-left">
                               <span className="text-green-600 mr-2">✓</span>{f}
                            </div>
                         ))
                      )}
                   </div>
                </div>
             </div>
           )}

           {/* --- TAB 3 --- */}
           {activeTab === "skills" && (
             <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                   <Cpu className="w-6 h-6 text-blue-500" /> INSTALLED MODULES
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {[
                     { name: "React", type: "Core", color: "text-blue-400" },
                     { name: "Next.js", type: "Framework", color: "text-white" },
                     { name: "Laravel", type: "Backend", color: "text-red-500" },
                     { name: "Flutter", type: "Mobile", color: "text-cyan-400" },
                     { name: "Tailwind", type: "UI", color: "text-teal-400" },
                     { name: "Git", type: "Version Control", color: "text-orange-500" },
                   ].map((tech, i) => (
                     <div key={i} className="p-4 border border-gray-800 bg-[#0a0a0a] hover:bg-gray-900 hover:border-gray-600 transition-all group">
                        <div className="text-[10px] text-gray-500 uppercase mb-1">{tech.type}</div>
                        <div className={`text-lg font-bold ${tech.color} group-hover:scale-105 transition-transform inline-block`}>{tech.name}</div>
                     </div>
                   ))}
                </div>
                <div className="mt-8 p-4 bg-[#111] border-l-4 border-yellow-500 text-sm text-gray-400">
                   <p className="text-yellow-500 font-bold mb-1">LEARNING PATH:</p>
                   currently expanding knowledge in <span className="text-white">System Design</span> and <span className="text-white">Microservices Architecture</span>.
                </div>
             </div>
           )}

        </div>
      </div>
    </section>
  );
}
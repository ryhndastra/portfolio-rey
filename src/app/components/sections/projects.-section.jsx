"use client";

import ProjectCard from "@/app/components/ui/project-card";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "BANDUNG_MERCH",
    subtitle: "E-Commerce Ecosystem",
    description: "A comprehensive marketplace solution featuring vendor management, secure payment processing via Midtrans, and real-time inventory tracking.",
    image: "/images/projects/bandung_merch.png",
    tech: ["Laravel", "MySQL", "Tailwind"],
    github: "https://github.com/ryhndastra/bandungmerch-store.git",
    status: "PROTOTYPE",
    year: "2024"
  },
  {
    id: "02",
    title: "VILLA_NA_KEY",
    subtitle: "Reservation Mobile App",
    description: "Cross-platform mobile application designed for seamless property booking. Integrates cloud-based calendar sync and push notifications.",
    image: "/images/projects/villa.png",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/ryhndastra/villaNaKey.git",
    status: "PROTOTYPE",
    year: "2024"
  },
  {
    id: "03",
    title: "VILLA_NA_KEY_WEB",
    subtitle: "Marketing Frontend",
    description: "High-performance landing page optimized for conversion. Features smooth scroll animations and responsive gallery layouts.",
    image: "/images/projects/villanakey.png",
    tech: ["Next.js", "React", "Framer Motion"],
    github: "https://github.com/ryhndastra/villanakey-web.git",
    status: "LIVE",
    year: "2025"
  },
  {
    id: "04",
    title: "GARUDA_PS_WEB",
    subtitle: "Gaming Community Hub",
    description: "Centralized dashboard for game server players. Provides account management, server status monitoring, and news aggregation.",
    image: "/images/projects/garudaps.jpeg",
    tech: ["Next.js", "Tailwind", "React Query"],
    github: "https://github.com/ryhndastra/garudaps.git",
    status: "LIVE",
    year: "2025"
  },
];

export default function ProjectsSection({ isVisible }) {
  return (
    <section id="projects" className="relative px-4 py-24 bg-[#050505] font-mono selection:bg-green-500 selection:text-black overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_3px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FolderGit2 className="w-8 h-8 text-green-500 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              PROJECT_ARCHIVE
            </h2>
          </div>
          {/* Animated Bar */}
          <div className="w-24 h-1 mx-auto mb-6 bg-green-900/50 relative overflow-hidden">
             <div className="absolute inset-0 bg-green-500 w-1/2 animate-slide-scan"></div>
          </div>
          <p className="text-gray-400 text-sm md:text-lg tracking-wide font-mono">
            {">"} Accessing secure database...
          </p>
        </div>

        {/* PROJECTS LIST  */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
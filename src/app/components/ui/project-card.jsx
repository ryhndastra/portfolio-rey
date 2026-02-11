"use client";

import { Button } from "@/app/components/ui/button";
import { Github } from "lucide-react";

export default function ProjectCard({ project, index, isVisible }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group relative flex flex-col lg:flex-row bg-[#050505] border-4 border-[#333] hover:border-green-500 transition-all duration-300 shadow-[8px_8px_0px_0px_#111] hover:shadow-[12px_12px_0px_0px_#ffffff] hover:-translate-y-1 hover:-translate-x-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${!isEven ? "lg:flex-row-reverse" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      
      {/* IMAGE AREA */}
      <div className="w-full lg:w-[45%] relative border-b-4 lg:border-b-0 lg:border-r-4 border-[#333] group-hover:border-green-500 transition-colors min-h-[250px] overflow-hidden bg-[#111]">
        
        {/* Pixel Image Effect */}
        <div className="absolute inset-0 w-full h-full">
            <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                style={{ imageRendering: "pixelated" }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px] opacity-40 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
        </div>

        {/* Status Tag  */}
        <div className="absolute top-4 left-4 bg-black border-2 border-white px-2 py-1 shadow-[4px_4px_0px_0px_#000]">
            <span className="text-xs font-bold text-green-500 uppercase tracking-widest flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
               {project.status}
            </span>
        </div>
      </div>

      {/*  CONTENT AREA  */}
      <div className="w-full lg:w-[55%] p-6 lg:p-8 flex flex-col justify-between relative bg-[#050505]">
         
         {/* Background ID Number */}
         <div className="absolute top-2 right-4 text-6xl font-black text-[#1a1a1a] select-none pointer-events-none font-mono">
            0{index + 1}
         </div>

         <div className="relative z-10">
            {/* Title Header */}
            <div className="mb-4 pr-12">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2 group-hover:text-green-400 transition-colors">
                    {project.title.replace(/_/g, ' ')}
                </h3>
                <div className="h-1 w-12 bg-green-500 mb-4"></div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm font-bold leading-relaxed mb-6 font-mono border-l-4 border-[#222] pl-4 group-hover:border-green-500 transition-colors">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
                <p className="text-[10px] text-gray-500 uppercase font-bold mb-2 tracking-widest">MODULES:</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <div key={i} className="px-2 py-1 bg-[#111] border-2 border-gray-700 text-[10px] text-gray-300 font-bold uppercase hover:bg-white hover:text-black hover:border-white transition-colors cursor-default shadow-[2px_2px_0px_0px_#222]">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
         </div>

         {/* Footer Actions */}
         <div className="mt-auto pt-6 border-t-4 border-[#1a1a1a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-gray-600 font-bold uppercase tracking-widest">YEAR: {project.year}</span>
            
            <Button
                className="bg-white text-black border-2 border-white hover:bg-green-500 hover:border-green-500 hover:text-black font-black uppercase tracking-widest text-xs h-10 px-6 shadow-[4px_4px_0px_0px_#333] hover:shadow-[4px_4px_0px_0px_#fff] active:translate-y-1 active:shadow-none transition-all rounded-none"
                onClick={() => window.open(project.github, "_blank")}
            >
                <Github className="w-4 h-4 mr-2" />
                SOURCE_CODE
            </Button>
         </div>

      </div>
    </div>
  );
}
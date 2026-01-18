"use client";

import { Monitor, Server, Smartphone, TerminalSquare } from "lucide-react";

const categories = [
  {
    title: "INTERFACE_LAYER",
    subtitle: "Frontend Development",
    desc: "Rendering pixel-perfect UI/UX constructs using modern reactive frameworks.",
    icon: Monitor,
    specs: ["Responsive", "Interactive", "High Performance"],
    color: "text-blue-400",
    border: "group-hover:border-blue-500"
  },
  {
    title: "CORE_PROCESSING",
    subtitle: "Backend Development",
    desc: "Architecting secure server-side logic, API gateways, and database schemas.",
    icon: Server,
    specs: ["Scalable", "Secure", "RESTful / GraphQL"],
    color: "text-purple-400",
    border: "group-hover:border-purple-500"
  },
  {
    title: "PORTABLE_UNIT",
    subtitle: "Mobile Development",
    desc: "Compiling native-performance applications for cross-platform deployment.",
    icon: Smartphone,
    specs: ["iOS & Android", "Native Feel", "Offline First"],
    color: "text-green-400",
    border: "group-hover:border-green-500"
  },
];

export default function SkillCategories({ isVisible }) {
  return (
    <div className="relative mt-12">
       <div className="absolute -top-6 right-0 text-xs text-green-500 font-bold tracking-widest bg-[#050505] px-2 border border-green-900">
         ARCHITECTURE_DIAGRAM
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`group bg-black border-2 border-gray-800 p-0 transition-all duration-500 hover:-translate-y-2 ${category.border} ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* WINDOW HEADER */}
            <div className="bg-[#111] border-b border-gray-800 p-2 flex items-center justify-between group-hover:bg-gray-900 transition-colors">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-red-500 transition-colors"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-yellow-500 transition-colors"></div>
                </div>
                <span className="text-[10px] text-gray-500 font-mono tracking-wider">{category.title}</span>
            </div>

            {/* CONTENT */}
            <div className="p-6 relative overflow-hidden">
                {/* Background Icon Watermark */}
                <category.icon className={`absolute -right-4 -bottom-4 w-24 h-24 opacity-5 ${category.color} rotate-12`} />

                <div className={`w-12 h-12 mb-4 flex items-center justify-center border border-gray-700 bg-gray-900/50 rounded-sm ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                </div>

                <h3 className={`text-lg font-bold text-white mb-1 group-hover:${category.color} transition-colors`}>
                    {category.subtitle}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-gray-800 pl-3">
                    {category.desc}
                </p>

                {/* Specs List */}
                <div className="space-y-2">
                    {category.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-gray-500">
                            <TerminalSquare className="w-3 h-3 text-gray-700" />
                            <span>{spec}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
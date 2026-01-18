"use client";

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "FRONTEND", ver: "v18.2" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "FRAMEWORK", ver: "v14.0" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "LANGUAGE", ver: "ES6+" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "UI LIB", ver: "v3.4" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "LANGUAGE", ver: "v8.2" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", category: "BACKEND", ver: "v10.0" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "DATABASE", ver: "v8.0" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "BAAS", ver: "LATEST" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "MOBILE", ver: "v3.19" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", category: "CORE", ver: "v3.0" },
];

export default function TechGrid({ isVisible }) {
  return (
    <div className="relative">
      <div className="absolute -top-6 left-0 text-xs text-green-500 font-bold tracking-widest bg-[#050505] px-2 border border-green-900">
         INSTALLED_MODULES (10)
      </div>
      
      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`group relative bg-[#0a0a0a] border border-gray-800 p-4 transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:-translate-y-1 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {/* Corner Decor */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-600 group-hover:border-green-500 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-600 group-hover:border-green-500 transition-colors"></div>

            <div className="flex flex-col items-center">
              {/* Icon Container */}
              <div className="w-12 h-12 mb-3 relative grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="object-contain w-full h-full"
                />
              </div>
              
              {/* Text Info */}
              <div className="text-center w-full">
                <h3 className="text-white font-bold text-sm tracking-wide group-hover:text-green-400 transition-colors">
                  {tech.name}
                </h3>
                <div className="flex justify-between items-center mt-2 border-t border-gray-800 pt-1 w-full">
                    <span className="text-[9px] text-gray-500 font-bold">{tech.category}</span>
                    <span className="text-[9px] text-gray-600 font-mono group-hover:text-green-600">{tech.ver}</span>
                </div>
              </div>
            </div>
            
            {/* Scanline on hover */}
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
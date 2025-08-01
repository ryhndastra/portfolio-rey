"use client";

import { Briefcase, Code, Home, MessageCircle, User } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "contact", icon: MessageCircle, label: "Contact" },
];

export default function Navigation({ activeSection, scrollToSection }) {
  return (
    <>
      {/* Side Navigation - moved further left and made smaller */}
      <nav className="fixed z-50 hidden transform -translate-y-1/2 left-4 top-1/2 lg:block">
        <div className="p-3 space-y-3 border shadow-xl bg-white/95 backdrop-blur-md rounded-2xl border-white/20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group relative transform hover:scale-110 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <div className="absolute px-3 py-1 text-sm text-white transition-all duration-300 transform translate-x-2 bg-gray-800 rounded-lg opacity-0 left-14 group-hover:opacity-100 whitespace-nowrap group-hover:translate-x-0">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed z-50 transform -translate-x-1/2 bottom-6 left-1/2 lg:hidden">
        <div className="flex p-2 space-x-2 border shadow-xl bg-white/90 backdrop-blur-md rounded-2xl border-white/20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <item.icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}

"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";

export default function HeroSection({ isVisible, scrollToSection }) {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-4 overflow-hidden lg:px-8 lg:pl-24"
    >
      <div className="grid items-center w-full gap-12 mx-auto max-w-7xl lg:grid-cols-2">
        <div
          className={`space-y-8 ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 animate-bounce-slow">
              <div className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-ping"></div>
              Available for work
            </div>
            <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
              <span className="block text-gray-900 animate-fade-in-up">
                Hello, I'm
              </span>
              <span className="block text-transparent delay-200 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text animate-gradient-x animate-fade-in-up">
                Reyhand Astra
              </span>
            </h1>
            <p className="text-xl font-medium text-gray-600 lg:text-2xl animate-fade-in-up delay-400">
              Web & Mobile Developer
            </p>
            <p className="max-w-lg text-lg leading-relaxed text-gray-600 animate-fade-in-up delay-600">
              I create modern web applications with Laravel & React, and build
              beautiful mobile apps with Flutter. Passionate about turning ideas
              into digital reality.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up delay-800">
            <Button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 text-lg text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group hover:scale-105 hover:shadow-lg"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 text-lg transition-all duration-300 transform border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:scale-105 hover:shadow-lg"
            >
              Let's Connect
            </Button>
          </div>

          <div className="flex space-x-4 delay-1000 animate-fade-in-up">
            <a
              href="https://github.com/ryhndastra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 transition-all duration-300 transform hover:bg-blue-100 hover:text-blue-600 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-6 h-6" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/reyhand-astra-377264356/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 transition-all duration-300 transform hover:bg-blue-100 hover:text-blue-600 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </a>

            <a
              href="https://www.instagram.com/ryhndastra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 transition-all duration-300 transform hover:bg-blue-100 hover:text-blue-600 hover:scale-110 hover:-translate-y-1"
              >
                <Instagram className="w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>

        {/* Photo Section - Fixed positioning to prevent overflow */}
        <div
          className={`relative ${
            isVisible ? "animate-slide-in-right" : "opacity-0"
          }`}
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Animated Background Elements - contained within bounds */}
            <div className="absolute w-20 h-20 top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl animate-float opacity-20 blur-xl"></div>
            <div className="absolute w-24 h-24 bottom-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl animate-float-delayed opacity-20 blur-xl"></div>
            <div className="absolute w-12 h-12 top-1/2 right-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl animate-bounce opacity-30 blur-sm"></div>

            {/* Main Photo Container */}
            <div className="relative p-1 transition-all duration-500 transform bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl hover:scale-105 hover:rotate-2 animate-gradient-rotate">
              <div className="p-2 bg-white rounded-3xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Reyhand Astra"
                    className="object-cover object-top w-full h-[500px] transition-transform duration-500 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute text-center bottom-4 left-4 right-4">
                    <div className="p-3 transition-transform duration-300 transform bg-white/90 backdrop-blur-sm rounded-xl hover:scale-105">
                      <div className="text-lg font-bold text-gray-800">
                        Web & Mobile Developer
                      </div>
                      <div className="text-sm text-gray-600">
                        Building amazing digital experiences
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Icons - positioned within container bounds */}
            <div className="absolute flex items-center justify-center w-12 h-12 bg-white shadow-lg top-8 left-2 rounded-xl animate-float-slow">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-8 h-8"
              />
            </div>
            <div className="absolute flex items-center justify-center w-12 h-12 delay-1000 bg-white shadow-lg bottom-8 right-2 rounded-xl animate-float-slow">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                alt="Laravel"
                className="w-8 h-8"
              />
            </div>
            <div className="absolute right-0 flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-lg top-1/3 animate-bounce-slow">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                alt="Flutter"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

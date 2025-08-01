"use client";

import { BookOpen, Code2, Heart, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

const passions = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "I love writing code that's not just functional, but also readable and maintainable",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Every bug is a puzzle waiting to be solved, and I enjoy the challenge",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "User Experience",
    desc: "Creating interfaces that users actually enjoy using is what drives me",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Technology evolves fast, and I love staying updated with new trends",
    color: "from-green-500 to-emerald-500",
  },
];

const currentFocus = [
  "Mastering React & Next.js ecosystem",
  "Building full-stack applications with Laravel",
  "Creating mobile apps with Flutter",
  "Learning best practices in web development",
];

export default function AboutSection({ isVisible }) {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section id="about" className="px-4 py-20 bg-white lg:px-8 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="mt-6 text-xl text-gray-600">
            Get to know the person behind the code
          </p>
        </div>

        {/* Interactive Tabs */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 rounded-2xl">
            {[
              { id: "story", label: "My Story", icon: "📖" },
              { id: "passions", label: "What I Love", icon: "❤️" },
              { id: "focus", label: "Current Focus", icon: "🎯" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-lg scale-105"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* Story Tab */}
          {activeTab === "story" && (
            <div
              className={`space-y-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6 text-center">
                <h3 className="text-3xl font-bold text-gray-900">
                  Passionate Developer & Lifelong Learner
                </h3>
                <div className="grid gap-8 text-left md:grid-cols-2">
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-600">
                      Hi! I'm a passionate developer who loves turning ideas
                      into reality through code. My journey started with
                      curiosity about how websites work, and it has grown into a
                      genuine passion for creating digital solutions.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      I specialize in web development with Laravel and React,
                      and I'm also exploring mobile development with Flutter.
                      Every project is a new learning opportunity for me.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-600">
                      What I love most about programming is the problem-solving
                      aspect. There's something incredibly satisfying about
                      breaking down complex problems into smaller, manageable
                      pieces and then building elegant solutions.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      I believe in writing clean, maintainable code and always
                      strive to follow best practices. I'm constantly learning
                      new technologies and improving my skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Passions Tab */}
          {activeTab === "passions" && (
            <div
              className={`space-y-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-8 text-center">
                <h3 className="mb-4 text-3xl font-bold text-gray-900">
                  What Drives Me
                </h3>
                <p className="text-lg text-gray-600">
                  The things that make me excited about development
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {passions.map((passion, index) => (
                  <Card
                    key={index}
                    className="transition-all duration-500 transform cursor-pointer group hover:shadow-xl hover:-translate-y-2 hover:scale-105"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${passion.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 flex-shrink-0`}
                        >
                          <passion.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                            {passion.title}
                          </h4>
                          <p className="leading-relaxed text-gray-600">
                            {passion.desc}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Focus Tab */}
          {activeTab === "focus" && (
            <div
              className={`space-y-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-8 text-center">
                <h3 className="mb-4 text-3xl font-bold text-gray-900">
                  What I'm Working On
                </h3>
                <p className="text-lg text-gray-600">
                  My current learning goals and areas of focus
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
                <div className="space-y-6">
                  {currentFocus.map((focus, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 space-x-4 transition-all duration-300 transform cursor-pointer group hover:bg-white/50 rounded-2xl hover:scale-105"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition-transform duration-500 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:rotate-180">
                        <span className="text-sm font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-gray-700 transition-colors group-hover:text-blue-600">
                        {focus}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center px-6 py-3 shadow-sm bg-white/80 backdrop-blur-sm rounded-2xl">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="font-medium text-gray-700">
                      Always learning, always growing! 🚀
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

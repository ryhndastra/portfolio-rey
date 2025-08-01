"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Github } from "lucide-react";

export default function ProjectCard({ project, index, isVisible }) {
  return (
    <Card
      className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="object-contain w-full h-64 transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}
        >
          <div className="transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
            <Button
              size="lg"
              className="text-white bg-white/20 border-white/30 hover:bg-white/30 backdrop-blur-sm"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              View Repository
            </Button>
          </div>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl transition-colors duration-300 group-hover:text-blue-600">
          {project.title}
        </CardTitle>
        <CardDescription className="leading-relaxed text-gray-600">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="transition-transform duration-300 cursor-pointer hover:scale-110 hover:bg-blue-50 hover:border-blue-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <Button
          variant="outline"
          className="w-full transition-colors duration-300 transform bg-transparent group-hover:border-blue-600 group-hover:text-blue-600 hover:scale-105"
          onClick={() => window.open(project.github, "_blank")}
        >
          <Github className="w-4 h-4 mr-2" />
          View Code
        </Button>
      </CardContent>
    </Card>
  );
}

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    category: "Backend",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Backend",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "Backend",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    category: "Mobile",
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    category: "Mobile",
  },
];

export default function TechGrid({ isVisible }) {
  return (
    <div className="grid grid-cols-2 gap-8 mb-16 md:grid-cols-3 lg:grid-cols-5">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-3 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-center">
            <div className="w-16 h-16 p-2 mx-auto mb-4 transition-all duration-300 bg-gray-50 rounded-xl group-hover:bg-blue-50 group-hover:scale-110 group-hover:rotate-12">
              <img
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 transition-colors duration-300 transform group-hover:text-blue-600 group-hover:scale-105">
              {tech.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

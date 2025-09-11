import ProjectCard from "@/app/components/ui/project-card";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A simple e-commerce app built with Laravel and Tailwind CSS. Includes authentication, product management, and checkout functionality.",
    image: "/images/projects/bandung_merch.png",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/ryhndastra/bandungmerch-store.git",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Villa Booking App",
    description:
      "A mobile app built with Flutter and Firebase for villa reservation. Includes calendar booking, payment integration, and user login.",
    image: "/images/projects/villa.png",
    tech: ["Flutter", "Dart", "Firebase", "Firestore"],
    github: "https://github.com/ryhndastra/villaNaKey.git",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Villa Na Key Website",
    description:
      "CA responsive website built with Next.js and Tailwind CSS for promoting a tropical villa. Features include smooth navigation, modern UI, and mobile-friendly layout.",
    image: "/images/projects/villanakey.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ryhndastra/villanakey-web.git",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Pratama Memories",
    description:
      "A memory site for Group 3 of Pratama 2025 — with photos, messages, quizzes, and a mentor letter.",
    image: "/images/projects/pratama.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ryhndastra/pratama-memories.git",
    color: "from-pink-500 to-violet-600",
  },
];

export default function ProjectsSection({ isVisible }) {
  return (
    <section id="projects" className="px-4 py-20 bg-white lg:px-8 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Featured Projects
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
          <p className="text-xl text-gray-600">
            Some of my recent work that I'm proud of
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
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

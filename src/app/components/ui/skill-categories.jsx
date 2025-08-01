const categories = [
  {
    title: "Frontend Development",
    desc: "Creating beautiful and responsive user interfaces with modern frameworks",
    icon: "🌐",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    desc: "Building robust server-side applications and APIs with secure architecture",
    icon: "⚙️",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile Development",
    desc: "Developing cross-platform mobile applications with native performance",
    icon: "📱",
    color: "from-green-500 to-emerald-500",
  },
];

export default function SkillCategories({ isVisible }) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
            isVisible ? "animate-slide-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
        >
          <div
            className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300`}
          >
            <span className="text-2xl">{category.icon}</span>
          </div>
          <h3 className="mb-4 text-xl font-bold text-gray-900">
            {category.title}
          </h3>
          <p className="text-gray-600">{category.desc}</p>
        </div>
      ))}
    </div>
  );
}

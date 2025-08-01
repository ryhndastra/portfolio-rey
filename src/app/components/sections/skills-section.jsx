import SkillCategories from "@/app/components/ui/skill-categories";
import TechGrid from "@/app/components/ui/tech-grid";

export default function SkillsSection({ isVisible }) {
  return (
    <section id="skills" className="px-4 py-20 lg:px-8 lg:pl-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
          <p className="text-xl text-gray-600">
            Technologies I use to bring ideas to life
          </p>
        </div>

        <TechGrid isVisible={isVisible} />
        <SkillCategories isVisible={isVisible} />
      </div>
    </section>
  );
}

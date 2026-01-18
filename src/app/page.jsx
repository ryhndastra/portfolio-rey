"use client";

import Footer from "@/app/components/layout/footer";
import Navigation from "@/app/components/layout/navigation";
import AboutSection from "@/app/components/sections/about-section";
import ContactSection from "@/app/components/sections/contact-section";
import HeroSection from "@/app/components/sections/hero-section";
import ProjectsSection from "@/app/components/sections/projects.-section";
import SkillsSection from "@/app/components/sections/skills-section";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 200 &&
            scrollPosition < offsetTop + offsetHeight - 200
          ) {
            currentSection = section;
          }

          if (section === "contact" && rect.top <= window.innerHeight / 2) {
            currentSection = "contact";
          }

          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          setIsVisible((prev) => ({ ...prev, [section]: isInViewport }));
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <HeroSection
        isVisible={isVisible.home}
        scrollToSection={scrollToSection}
      />
      <AboutSection isVisible={isVisible.about} />
      <SkillsSection isVisible={isVisible.skills} />
      <ProjectsSection isVisible={isVisible.projects} />
      <ContactSection isVisible={isVisible.contact} />
      <Footer />
    </div>
  );
}

import { Button } from "@/app/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactSection({ isVisible }) {
  return (
    <section
      id="contact"
      className="px-4 py-20 lg:px-8 lg:pl-24 bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div
        className={`max-w-4xl mx-auto text-center text-white ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="mb-6 text-4xl font-bold lg:text-5xl animate-bounce-slow">
          Let's Create Something Amazing Together
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-xl delay-200 opacity-90 animate-fade-in-up">
          Ready to bring your ideas to life? I'm always excited to work on new
          projects and challenges. Let's discuss how we can turn your vision
          into reality.
        </p>
        <a href="mailto:ryhndastra@gmail.com">
          <Button
            size="lg"
            className="px-8 py-4 text-lg text-blue-600 transition-all duration-300 transform bg-white hover:bg-gray-100 hover:scale-110 hover:shadow-xl animate-fade-in-up delay-400"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </a>
      </div>
    </section>
  );
}

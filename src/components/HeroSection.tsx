import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const roles = ["Front-End Developer"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <p className="text-xl text-muted-foreground mb-4">Hi There! 👋🏻</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              I am <span className="text-gradient">Mahalakshmi S</span>
            </h1>
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <span className="text-2xl md:text-3xl font-semibold text-accent typing-cursor pr-1">
                {displayText}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/mahalakshmi110305"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:shadow-glow"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/maha-lakshmi-77478829a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:shadow-glow"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mahalakshmisubramniyam@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:shadow-glow"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-2xl scale-110 animate-pulse-slow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={profileImage}
                  alt="Mahalakshmi S"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

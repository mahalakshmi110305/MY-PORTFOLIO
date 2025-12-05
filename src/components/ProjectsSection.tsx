import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Rare Beauty Clone",
    description:
      "Recreated the Rare Beauty homepage with pixel-perfect accuracy, ensuring full static website through desktop. Built interactive UI elements including navigation menu, carousel, and hover effects.",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    type: "Front-End",
  },
  {
    title: "Food Munch",
    description:
      "Built a responsive food-ordering interface with intuitive navigation, menu filtering, and prominent call-to-action buttons. Used Bootstrap grid and components for seamless performance across all devices.",
    tech: ["HTML", "CSS", "Bootstrap"],
    type: "Front-End",
  },
  {
    title: "AI-Driven Light Pollution Control",
    description:
      "Designed an AI-based system to analyze urban light pollution using real-time IoT sensor data and predictive ML models. Built a framework to map pollution hotspots and optimize lighting usage.",
    tech: ["Python", "Machine Learning", "IoT"],
    type: "AI/ML + IoT",
  },
  {
    title: "Decoding EMF AI",
    description:
      "Developed an AI-driven system to analyze electromagnetic field pollution and assess potential health impacts using exposure data. Implemented statistical and ML models for EMF level evaluation.",
    tech: ["Python", "Pandas", "TensorFlow", "Scikit-learn"],
    type: "AI & ML",
  },
  {
    title: "AI Chatbot",
    description:
      "Developed an AI-powered conversational chatbot using n8n workflows integrated with LangChain and Google Gemini. Implemented context-aware conversations with memory buffer and built-in tools.",
    tech: ["n8n", "LangChain", "Google Gemini", "JavaScript"],
    type: "Artificial Intelligence",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                  {project.type}
                </span>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/mahalakshmi110305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <Github size={18} className="text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

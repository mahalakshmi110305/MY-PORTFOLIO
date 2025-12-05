import { Code2, Palette, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-4">
          LET ME <span className="text-gradient">INTRODUCE</span> MYSELF
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-4xl mx-auto">
          <div className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border/50">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm <span className="text-primary font-semibold">S. Mahalakshmi</span>, a 
              Final-year Computer Science Engineering student at{" "}
              <span className="text-accent">Renganayagi Varatharaj College of Engineering</span>. 
              I'm passionate about coding and currently learning full-stack development with 
              specialization at NxtWave's CCBP 4.0 Academy.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As a Front-end developer fresher, I have hands-on experience creating{" "}
              <span className="text-foreground font-medium">clean, responsive layouts</span> using{" "}
              <span className="text-primary font-mono">HTML, CSS, JavaScript, and Bootstrap</span>. 
              I'm known for strong visual clarity, organized coding practices, and the ability to 
              learn and adapt quickly.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300">
                <div className="p-4 rounded-full bg-primary/20 mb-4">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable and organized code
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300">
                <div className="p-4 rounded-full bg-accent/20 mb-4">
                  <Palette className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Responsive Design</h3>
                <p className="text-sm text-muted-foreground">
                  Creating beautiful layouts for all devices
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300">
                <div className="p-4 rounded-full bg-primary/20 mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Quick Learner</h3>
                <p className="text-sm text-muted-foreground">
                  Always eager to learn new technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-2xl mx-auto">
          <p className="text-center text-muted-foreground mb-10">
            I'm currently looking for opportunities to kickstart my career. 
            Feel free to reach out if you'd like to connect!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <a
              href="mailto:mahalakshmisubramniyam@gmail.com"
              className="flex items-center gap-4 bg-card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-sm break-words">mahalakshmisubramniyam@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919345124357"
              className="flex items-center gap-4 bg-card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91 9345124357</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-card-gradient rounded-xl p-6 border border-border/50 md:col-span-2">
              <div className="p-3 rounded-full bg-primary/20">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Rajapalayam, Virudhunagar District, Tamil Nadu</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/mahalakshmi110305"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/maha-lakshmi-77478829a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mahalakshmisubramani@gmail.com"
              className="p-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <Send size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

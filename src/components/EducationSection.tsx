import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.E (Computer Science & Engineering)",
    institution: "Renganayagi Varatharaj College of Engineering",
    year: "2022 – 2026",
    score: "CGPA: 8.2",
    icon: GraduationCap,
  },
  {
    degree: "HSC (Higher Secondary)",
    institution: "Govt. Girls Hr. Sec. School",
    year: "2021 – 2022",
    score: "Percentage: 74%",
    icon: Award,
  },
  {
    degree: "SSLC",
    institution: "Govt. Girls Hr. Sec. School",
    year: "2019 – 2020",
    score: "Percentage: 75%",
    icon: Award,
  },
];

const certificates = [
  "Build Your Own Static Website - NxtWave CCBP 4.0",
  "Build Your Own Responsive Website - NxtWave CCBP 4.0",
  "Introduction to Databases - NxtWave CCBP 4.0",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Education</span> & Certificates
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
            
            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex items-start gap-6 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card-gradient rounded-xl p-6 border border-border/50 shadow-card ml-16 md:ml-0">
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                    <h3 className="text-lg font-bold mt-1">{item.degree}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                    <p className="text-accent font-medium mt-2">{item.score}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-glow">
                  <item.icon size={16} className="text-primary-foreground" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-accent">Certificates</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certificates.map((cert) => (
                <div
                  key={cert}
                  className="bg-card-gradient rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

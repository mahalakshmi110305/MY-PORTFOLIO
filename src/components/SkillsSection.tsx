const skills = [
  { name: "HTML5", level: 90, color: "primary" },
  { name: "CSS3", level: 85, color: "primary" },
  { name: "JavaScript", level: 75, color: "accent" },
  { name: "Bootstrap", level: 85, color: "primary" },
  { name: "Python", level: 70, color: "accent" },
  { name: "SQL", level: 65, color: "primary" },
  { name: "Git & GitHub", level: 80, color: "accent" },
  { name: "Responsive Design", level: 90, color: "primary" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto grid gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    skill.color === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

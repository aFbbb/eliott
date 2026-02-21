import SectionReveal from "./SectionReveal";

const skillCategories = [
  {
    title: "Compétences BUT GMP",
    items: [
      { name: "Spécifier", desc: "Détermination des exigences industrielles" },
      { name: "Développer", desc: "Proposition de la solution technique optimale" },
      { name: "Réaliser", desc: "Mise en œuvre concrète des solutions" },
      { name: "Exploiter", desc: "Évaluation des performances et amélioration continue" },
    ],
  },
  {
    title: "Compétences techniques",
    items: [
      { name: "Catia V5 / 3DX", desc: "Conception et modélisation 3D" },
      { name: "RDM7", desc: "Calculs de structures" },
      { name: "CES Edupack", desc: "Choix et optimisation matériaux" },
      { name: "FlexSim", desc: "Gestion de projet et planification" },
      { name: "Suite Office", desc: "Documentation technique" },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Communication", desc: "Claire et synthétique en réunions" },
      { name: "Esprit d'équipe", desc: "Collaboration et coordination" },
      { name: "Autonomie", desc: "Initiative dans la résolution de problèmes" },
      { name: "Organisation", desc: "Gestion du temps et respect des délais" },
      { name: "Adaptabilité", desc: "Face aux contraintes techniques" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-center">
            Savoir-faire
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
            Compétences
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <SectionReveal key={ci} delay={ci * 0.15}>
              <div className="bg-card rounded-xl p-6 card-shadow h-full">
                <h3 className="font-display font-bold text-foreground text-lg mb-6 pb-3 border-b border-border">
                  {cat.title}
                </h3>
                <ul className="space-y-4">
                  {cat.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <p className="font-display font-semibold text-sm text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

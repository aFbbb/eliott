import SectionReveal from "./SectionReveal";
import { Briefcase, GraduationCap, Anchor } from "lucide-react";

const experiences = [
  {
    icon: Anchor,
    title: "Naval Group",
    subtitle: "Apprenti Intégrateur-Projeteur",
    period: "Sept. 2024 – Présent",
    description:
      "Modélisation 3D de structures navales, calculs de dimensionnement, coordination interservices, revues de conception et suivi documentaire pour la construction de navires de guerre et sous-marins.",
    confidential: true,
  },
  {
    icon: Briefcase,
    title: "Fountaine Pajot",
    subtitle: "Stage de 1ère année",
    period: "2023 · 3 semaines",
    description:
      "Découverte de la fabrication de catamarans de luxe : composite (drapage, infusion), avant-pontage, après-pontage. Exploration des métiers de stratification et d'accastillage.",
  },
  {
    icon: GraduationCap,
    title: "BUT GMP – IUT de Brest",
    subtitle: "Génie Mécanique et Productique",
    period: "2022 – 2025",
    description:
      "Formation bac+3 en conception mécanique, simulation, matériaux, procédés de fabrication et gestion de production. 3ème année en alternance chez Naval Group.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-center">
            Parcours
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
            Expérience & Formation
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const isLeft = i % 2 === 0;
            return (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className={`relative flex items-start mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:mr-auto" : "md:pl-8 md:ml-auto"}`}>
                    <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-xs text-primary font-semibold tracking-wide uppercase mb-3">{exp.period}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                      {exp.confidential && (
                        <p className="mt-3 text-xs font-semibold text-destructive">
                          NB : Informations confidentielles – aucune donnée Naval Group ne sera divulguée.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

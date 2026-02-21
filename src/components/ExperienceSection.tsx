import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, GraduationCap, Anchor } from "lucide-react";
import SectionReveal from "./SectionReveal";

interface Experience {
  icon: typeof Anchor;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  details: string;
  confidential?: boolean;
}

const experiences: Experience[] = [
  {
    icon: Anchor,
    title: "Naval Group",
    subtitle: "Apprenti Intégrateur-Projeteur",
    period: "Sept. 2024 – Présent",
    description:
      "Modélisation 3D de structures navales, calculs de dimensionnement, coordination interservices, revues de conception et suivi documentaire pour la construction de navires de guerre et sous-marins.",
    details:
      "Au sein de Naval Group, je travaille sur la modélisation 3D de structures navales complexes en utilisant 3DExperience. Mon rôle d'intégrateur-projeteur consiste à coordonner les interfaces entre les différents services (structure, tuyauterie, ventilation) afin de garantir la cohérence du modèle numérique global. Je participe activement aux revues de conception, au suivi documentaire et aux calculs de dimensionnement des structures. Cette expérience m'a permis de développer une forte capacité d'adaptation et de rigueur dans un environnement industriel exigeant.",
    confidential: true,
  },
  {
    icon: Briefcase,
    title: "Fountaine Pajot",
    subtitle: "Stage de 1ère année",
    period: "2023 · 3 semaines",
    description:
      "Découverte de la fabrication de catamarans de luxe : composite (drapage, infusion), avant-pontage, après-pontage. Exploration des métiers de stratification et d'accastillage.",
    details:
      "Stage immersif chez Fountaine Pajot, l'un des leaders mondiaux de la construction de catamarans. J'ai pu observer et participer aux différentes étapes de fabrication : drapage et infusion des pièces composites, assemblage de l'avant-pontage et de l'après-pontage, travaux d'accastillage et de finition. Cette expérience m'a offert une vision concrète de la production industrielle nautique haut de gamme et m'a conforté dans mon attrait pour le secteur naval.",
  },
  {
    icon: GraduationCap,
    title: "BUT GMP – IUT de Brest",
    subtitle: "Génie Mécanique et Productique",
    period: "2022 – 2025",
    description:
      "Formation bac+3 en conception mécanique, simulation, matériaux, procédés de fabrication et gestion de production. 3ème année en alternance chez Naval Group.",
    details:
      "Le BUT Génie Mécanique et Productique de l'IUT de Brest offre une formation complète couvrant la conception mécanique (CATIA V5, 3DExperience), la simulation par éléments finis (RDM7), le choix des matériaux (CES Edupack), les procédés de fabrication (usinage, fonderie, composite) et la gestion de production (FlexSim). La 3ème année en alternance chez Naval Group me permet d'appliquer directement mes compétences théoriques dans un contexte industriel de pointe.",
  },
];

const ExperienceSection = () => {
  const [selected, setSelected] = useState<Experience | null>(null);

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
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const isLeft = i % 2 === 0;
            return (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className={`relative flex items-start mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:mr-auto" : "md:pl-8 md:ml-auto"}`}>
                    <button
                      onClick={() => setSelected(exp)}
                      className="w-full text-left bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
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
                      <span className="inline-block mt-3 text-xs text-primary font-semibold">Cliquer pour en savoir plus →</span>
                    </button>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto card-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <selected.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">{selected.title}</h3>
                    <p className="text-sm text-muted-foreground">{selected.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <p className="text-xs text-primary font-semibold tracking-wide uppercase mb-4">{selected.period}</p>
              <p className="text-muted-foreground leading-relaxed">{selected.details}</p>
              {selected.confidential && (
                <p className="mt-4 text-xs font-semibold text-destructive">
                  NB : Informations confidentielles – aucune donnée Naval Group ne sera divulguée.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;

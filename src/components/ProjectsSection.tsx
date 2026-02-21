import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionReveal from "./SectionReveal";

interface Project {
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Conception d'un navire de recherche",
    category: "Scolaire",
    summary: "Conception collaboratif sur 3DExperience d'un navire de recherche océanographique.",
    description:
      "Projet en groupe de 4 : conception des locaux d'un navire à partir du dossier de conception et du GA. Analyse documentaire, répartition du travail, modélisation des varangues sous le bottom deck, puis aménagement du pont (IPN, Té, tôle). Vision concrète de la gestion de projet sur 3DExperience en collaboration.",
    tags: ["3DExperience", "Conception navale", "Travail collaboratif"],
  },
  {
    title: "Dimensionnement d'une pièce de sécurité",
    category: "Scolaire",
    summary: "Dimensionnement par éléments finis d'une pièce de sécurité pour fabrication additive.",
    description:
      "Conception en binôme d'un basculeur transmettant 3 000 N de traction avec minimisation de masse. Fabrication additive SLS en polyamide 12. Analyse des propriétés matériau, simulations par éléments finis, optimisation géométrique itérative sous CATIA. Pièce finale ~85 g, rupture validée à plus de 8 500 N.",
    tags: ["CATIA V5", "Éléments finis", "Fabrication additive"],
  },
  {
    title: "Réparation d'une épée de voltige",
    category: "Scolaire",
    summary: "Analyse, Conception et Réalisation pour la réparation complète d'une épée médiévale.",
    description:
      "Remise en service d'une épée : modélisation numérique, usinage de la tige de renfort et rivets en acier, emmanchement au dixième de mm. Confection du manche : noyau mousse Airex, résine chargée, stratification composite verre/polyester, ponçage et peinture finale.",
    tags: ["Usinage", "Composite", "Modélisation"],
  },
  {
    title: "nutr. – Application nutrition sportive",
    category: "Extra-scolaire",
    summary: "Projet entrepreneurial d'application mobile pour optimiser la nutrition chez les sportifs.",
    description:
      "Application née d'un constat vécu : aucun outil ne propose un accompagnement nutritionnel personnalisé et connecté à la pratique sportive. Cahier des charges fonctionnel, étude de marché, Design System. Collaboration avec des étudiants de GEA.",
    tags: ["Entrepreneuriat", "UX/UI", "Nutrition"],
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-center">
            Réalisations
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
            Projets
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <button
                onClick={() => setSelected(project)}
                className="w-full text-left bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
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
                <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                  {selected.category}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                {selected.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selected.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

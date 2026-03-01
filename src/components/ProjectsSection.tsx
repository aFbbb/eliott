import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import SectionReveal from "./SectionReveal";
import ImageCarousel from "./ImageCarousel";
import placeholderPhoto from "@/assets/placeholder-photo.jpg";

interface Project {
  title: string;
  category: string;
  summary: string;
  description: ReactNode ;
  tags: string[];
  images: { src: string; alt?: string }[];
}

const projects: Project[] = [
  {
    title: "Conception d'un navire de recherche",
    category: "Scolaire",
    summary: "Conception collaboratif sur 3DExperience d'un navire de recherche océanographique.",
    description:
      `Dans le cadre d'un projet réalisé à l'IUT, nous avons eu pour mission par groupe de 4 de réaliser la conception des locaux d'un navire. À partir du dossier de conception du bateau et du GA (General Arrangement), nous avons été chargés de mettre en place une démarche afin de concevoir le bateau au stade le plus avancé possible dans un délai limité.<br /><br />` +
      `Pour cela, nous avons analysé en détail le dossier fourni et avons pris connaissance de notre zone de conception.<br /><br />` +
      `Nous nous sommes ensuite répartis le travail de manière équitable et adaptée à la vitesse de chacun.<br /><br />` +
      `Personnellement, je me suis occupé en priorité de mettre en forme la structure (varangues) en-dessous du bottom deck. Ensuite, l'enjeu a été d'aménager le pont en concevant les murs (sous forme d'IPN, de Té, de tôle...) en respectant précisément les plans donnés.<br /><br />` +
      `<strong>Retour d'expérience :</strong><br />` +
      `• Points forts : démarche collaborative d'analyse des documents, organisation générale...<br />` +
      `• Axes d'amélioration : connaissances plus approfondies en architecture navale.<br /><br />` +
      `Ce projet m'a offert une vision concrète de la gestion d'un projet sur 3DExperience en collaboration, la façon dont il faut s'organiser pour aboutir à une solution concrète, depuis l'étude documentaire jusqu'à la conception détaillée.`,
    tags: ["3DExperience", "Conception navale", "Travail collaboratif"],
    images: [
      { src: placeholderPhoto, alt: "Navire de recherche 1" },
      { src: placeholderPhoto, alt: "Navire de recherche 2" },
      { src: placeholderPhoto, alt: "Navire de recherche 3" },
    ],
  },
  {
    title: "Dimensionnement d'une pièce de sécurité",
    category: "Scolaire",
    summary: "Dimensionnement par éléments finis d'une pièce de sécurité pour fabrication additive.",
    description:
      `Dans le cadre de la SAE 5.01, nous avons conçu en binôme un basculeur destiné à transmettre un effort de traction de 3 000 N, avec pour objectif principal la minimisation de la masse. La pièce a été pensée pour une fabrication additive SLS en polyamide 12 et pour une intégration sur un montage d'essai imposé.<br /><br />` +
      `Le projet s'est appuyé sur une démarche complète de conception mécanique : analyse des propriétés du matériau à partir d'essais de traction, dimensionnement et simulations par éléments finis, puis optimisation géométrique itérative sous CATIA. Les zones fortement sollicitées ont été renforcées, tandis que les zones peu contraintes ont été évidées afin d'optimiser le rapport masse/résistance.<br /><br />` +
      `La pièce finale, d'une masse d'environ 85 g, a été validée expérimentalement par un essai de traction. Elle respecte la charge nominale et présente une rupture à plus de 8 500 N, confirmant la pertinence des choix de conception et de dimensionnement.`,
    tags: ["CATIA V5", "Éléments finis", "Fabrication additive"],
    images: [
      { src: placeholderPhoto, alt: "Pièce de sécurité 1" },
      { src: placeholderPhoto, alt: "Pièce de sécurité 2" },
    ],
  },
  {
    title: "Réparation d'une épée de voltige",
    category: "Scolaire",
    summary: "Analyse, Conception et Réalisation pour la réparation complète d'une épée médiévale.",
    description:
      `En janvier, nous avons réceptionné une épée nécessitant une remise en service complète : la garde présentait un jeu important et la lame était cassée au niveau du pommeau, la rendant inutilisable. Nous avons d'abord réalisé une modélisation numérique de l'ensemble, afin de simuler plusieurs options de renfort et de sélectionner la solution la plus stable.<br /><br />` +
      `Une fois le plan validé, nous avons rédigé les documents de fabrication, précisant les opérations, les tolérances, les outillages et les mises en position nécessaires sur machines conventionnelles. Sur tour et fraiseuse, nous avons usiné la tige de renfort interne et les rivets en acier, destinés à solidariser la soie de la lame, la garde et le pommeau. La mise sous presse de la tige dans le pommeau a exigé un ajustement au dixième de millimètre, pour garantir un emmanchement parfait. Nous avons également riveté les rivets en les chauffant au rouge puis en les martelant une fois dans leur emplacement afin de les immobiliser.<br /><br />` +
      `Ensuite, nous avons confectionné le manche :<br /><br />` +
      `• Taillage d'un noyau en mousse Airex pour redonner du volume et préformer l'ergonomie.<br />` +
      `• Bouchage des cavités à la résine chargée, éliminant tout jeu et assurant une surface plane.<br />` +
      `• Stratification composite : application successive de tissus de verre imprégnés de résine polyester, polymérisation.<br />` +
      `• Ponçage jusqu'à obtention de la forme définitive puis peinture.<br /><br />` +
      `L'épée, désormais parfaitement rigide et équilibrée, a retrouvé sa pleine fonctionnalité, tout en conservant un aspect esthétique fidèle à son style médiéval.`,
    tags: ["Usinage", "Composite", "Modélisation"],
    images: [
      { src: placeholderPhoto, alt: "Épée 1" },
      { src: placeholderPhoto, alt: "Épée 2" },
    ],
  },
  {
    title: "nutr. – Application nutrition sportive",
  category: "Extra-scolaire",
  summary: "Projet entrepreneurial d'application mobile pour optimiser la nutrition chez les sportifs.",
  description: (
    <>
      <strong>Contexte :</strong><br />
      <a
        href="https://www.nutr.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-semibold hover:underline"
      >
        nutr.
      </a>{" "}
      est un projet personnel d'application mobile que je développe depuis 2024. Il est né d'un constat vécu en tant
      que sportif : malgré une multitude d'applications existantes, aucune ne propose un accompagnement nutritionnel
      personnalisé, pédagogique et réellement connecté à la pratique sportive.
      <br /><br />

      <strong>Objectif du projet :</strong><br />
      Créer un outil intelligent, bienveillant et structurant pour aider les sportifs (de tous niveaux) à :
      <br /><br />
      • Adapter leur alimentation à leur activité, leurs objectifs et leur rythme de vie<br />
      • Comprendre les effets de la nutrition sur leurs performances, leur récupération et leurs sensations
      <br /><br />

      <strong>Avancement :</strong><br /><br />
      • Rédaction du cahier des charges fonctionnel<br />
      • Collaboration avec des étudiants de GEA<br />
      • Réalisation d'une étude de marché<br />
      • Création d'un Design System
    </>
  ),
  tags: ["Entrepreneuriat", "UX/UI", "Nutrition"],
  images: [
    { src: placeholderPhoto, alt: "nutr. app 1" },
    { src: placeholderPhoto, alt: "nutr. app 2" },
    ],
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

      {/* Modal with Carousel + Text */}
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
              className="bg-card rounded-2xl overflow-hidden max-w-4xl w-full max-h-[85vh] overflow-y-auto card-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                {/* Carousel left */}
                <div className="md:w-1/2">
                  <ImageCarousel
                    images={selected.images}
                    className="h-64 md:h-full md:min-h-[400px]"
                  />
                </div>

                {/* Text right */}
                <div className="md:w-1/2 p-8">
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
                  <div
                    className="text-muted-foreground leading-relaxed mb-6 text-sm"
                    dangerouslySetInnerHTML={{ __html: selected.description }}
                  />
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
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

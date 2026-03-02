import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

// ====== Types ======
type ProjectImage = {
  src: string;
  alt: string;
};

type Project = {
  title: string;
  category: string;
  summary: string;
  description: ReactNode;
  tags: string[];
  images?: ProjectImage[];
};

import placeholderPhoto from "../assets/placeholder-photo.jpg";
import GA1 from "../assets/p1/GA1.png";
import bateau from "../assets/p1/bateau.png";
import coupe from "../assets/p1/coupe.png"
import exp from "../assets/p1/img3dx.png";

import opti from "../assets/p2/opt1.png";
import pb1 from "../assets/p2/pb1.png";
import pb2 from "../assets/p2/pb2.png";
import pb3 from "../assets/p2/pb3.png";
import analyse from "../assets/p2/pb3_analyse.png";

import ph1 from "../assets/p3/ph1sae31.jpg";
import ph2 from "../assets/p3/ph2sae31.jpg";
import ph3 from "../assets/p3/ph3sae31.jpg";
import ph4 from "../assets/p3/ph4sae31.jpg";
import ph5 from "../assets/p3/ph5sae31.jpg";
import ph6 from "../assets/p3/ph6sae31.jpg";
import ph7 from "../assets/p3/ph7sae31.jpg";

import logo_nutr from "../assets/p4/logo_nutr1.png";

const projects: Project[] = [
  {
    title: "Conception d'un navire de recherche",
    category: "Projet universitaire",
    summary: "Conception des locaux d'un navire à partir du GA et du dossier de conception, en équipe de 4.",
    description: (
      <>
        Dans le cadre d'un projet réalisé à l'IUT, nous avons eu pour mission par groupe de 4 de réaliser la conception des locaux d'un navire. À partir du dossier de conception du bateau et du GA (General Arrangement), nous avons été chargés de mettre en place une démarche afin de concevoir le bateau au stade le plus avancé possible dans un délai limité.
        <br /><br />
        Pour cela, nous avons analysé en détail le dossier fourni et avons pris connaissance de notre zone de conception. Nous nous sommes ensuite répartis le travail de manière équitable et adaptée à la vitesse de chacun.
        <br /><br />
        Personnellement, je me suis occupé en priorité de mettre en forme la structure (varangues) en-dessous du bottom deck. Ensuite, l'enjeu a été d'aménager le pont en concevant les murs (sous forme d'IPN, de Té, de tôle...) en respectant précisément les plans donnés.
        <br /><br />
        <strong>Retour d'expérience :</strong>
        <br />
        – Points forts : démarche collaborative d'analyse des documents, organisation générale...
        <br />
        – Axes d'amélioration : Connaissances plus approfondies en architecture navale.
        <br /><br />
        Ce projet m'a offert une vision concrète de la gestion d'un projet sur 3DExperience en collaboration, la façon dont il faut s'organiser pour aboutir à une solution concrète, depuis l'étude documentaire jusqu'à la conception détaillée.
      </>
    ),
    tags: ["Conception", "3DExperience", "Naval"],
    images: [
      { src: bateau, alt: "Navire de recherche" },
      { src: exp, alt: "Navire de recherche" },
      { src: GA1, alt: "Navire de recherche" },
      { src: coupe, alt: "Vue en Coupe de la structure" },
    ],
  },
  {
    title: "Dimensionnement d'une pièce de sécurité",
    category: "Projet universitaire",
    summary: "Conception et optimisation d'un basculeur en fabrication additive SLS, validé par essai de traction.",
    description: (
      <>
        Dans le cadre de la SAE 5.01, nous avons conçu en binôme un basculeur destiné à transmettre un effort de traction de 3 000 N, avec pour objectif principal la minimisation de la masse. La pièce a été pensée pour une fabrication additive SLS en polyamide 12 et pour une intégration sur un montage d'essai imposé.
        <br /><br />
        Le projet s'est appuyé sur une démarche complète de conception mécanique : analyse des propriétés du matériau à partir d'essais de traction, dimensionnement et simulations par éléments finis, puis optimisation géométrique itérative sous CATIA. Les zones fortement sollicitées ont été renforcées, tandis que les zones peu contraintes ont été évidées afin d'optimiser le rapport masse/résistance.
        <br /><br />
        La pièce finale, d'une masse d'environ 85 g, a été validée expérimentalement par un essai de traction. Elle respecte la charge nominale et présente une rupture à plus de 8 500 N, confirmant la pertinence des choix de conception et de dimensionnement.
      </>
    ),
    tags: ["Dimensionnement", "CATIA", "Fabrication additive"],
    images: [
      { src: pb1, alt: "Pièce de sécurité" },
      { src: pb2, alt: "Pièce de sécurité" },
      { src: pb3, alt: "Pièce de sécurité" },
      { src: analyse, alt: "Pièce de sécurité" },
      { src: opti, alt: "Pièce de sécurité" },
    ],
  },
  {
    title: "Réparation d'une épée de voltige",
    category: "Projet universitaire",
    summary: "Remise en service complète d'une épée : modélisation, usinage, stratification composite et finitions.",
    description: (
      <>
        En janvier, nous avons réceptionné une épée nécessitant une remise en service complète : la garde présentait un jeu important et la lame était cassée au niveau du pommeau, la rendant inutilisable. Nous avons d'abord réalisé une modélisation numérique de l'ensemble, afin de simuler plusieurs options de renfort et de sélectionner la solution la plus stable.
        <br /><br />
        Une fois le plan validé, nous avons rédigé les documents de fabrication, précisant les opérations, les tolérances, les outillages et les mises en position nécessaires sur machines conventionnelles. Sur tour et fraiseuse, nous avons usiné la tige de renfort interne et les rivets en acier, destinés à solidariser la soie de la lame, la garde et le pommeau. La mise sous presse de la tige dans le pommeau a exigé un ajustement au dixième de millimètre, pour garantir un emmanchement parfait. Nous avons également riveté les rivets en les chauffant au rouge puis en les martelant une fois dans leur emplacement afin de les immobiliser.
        <br /><br />
        Ensuite, nous avons confectionné le manche :
        <br />
        • Taillage d'un noyau en mousse Airex pour redonner du volume et préformer l'ergonomie.
        <br />
        • Bouchage des cavités à la résine chargée, éliminant tout jeu et assurant une surface plane.
        <br />
        • Stratification composite : application successive de tissus de verre imprégnés de résine polyester, polymérisation.
        <br />
        • Ponçage jusqu'à obtention de la forme définitive puis peinture.
        <br /><br />
        L'épée, désormais parfaitement rigide et équilibrée, a retrouvé sa pleine fonctionnalité, tout en conservant un aspect esthétique fidèle à son style médiéval.
      </>
    ),
    tags: ["Usinage", "Composite", "Fabrication"],
    images: [
      { src: ph1, alt: "Modélisation CATIA de la réparation" },
      { src: ph2, alt: "Fraisage de la pièce" },
      { src: ph3, alt: "Assemblage à la presse hydraulique" },
      { src: ph4, alt: "Rivetage à chaud" },
      { src: ph5, alt: "Préparation composite" },
      { src: ph6, alt: "Drapage et polymérisation" },
      { src: ph7, alt: "Rendu final" },
    ],
  },
  {
    title: "nutr. – Application nutrition sportive",
    category: "Extra-scolaire",
    summary: "Projet entrepreneurial d'application mobile pour optimiser la nutrition chez les sportifs.",
    description: (
      <>
        <strong>Contexte :</strong>
        <br />
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
        <strong>Objectif du projet :</strong>
        <br />
        Créer un outil intelligent, bienveillant et structurant pour aider les sportifs (de tous niveaux) à :
        <br /><br />
        • Adapter leur alimentation à leur activité, leurs objectifs et leur rythme de vie
        <br />
        • Comprendre les effets de la nutrition sur leurs performances, leur récupération et leurs sensations
        <br /><br />
        <strong>Avancement :</strong>
        <br /><br />
        • Rédaction du cahier des charges fonctionnel
        <br />
        • Collaboration avec des étudiants de GEA
        <br />
        • Réalisation d'une étude de marché
        <br />
        • Création d'un Design System
        <br /><br />
        <strong>Site internet :</strong>{" "}
        <a
          href="https://www.nutr.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline"
        >
          nutr.
        </a>
      </>
    ),
    tags: ["Entrepreneuriat", "UX/UI", "Nutrition"],
    images: [
      { src: logo_nutr, alt: "nutr. app 1" },
      { src: placeholderPhoto, alt: "nutr. app 2" },
    ],
  },
];

// ====== Carousel ======
function ImageCarousel({ images = [] }: { images?: ProjectImage[] }) {
  const [index, setIndex] = useState(0);

  const hasMany = images.length > 1;
  const safeIndex = images.length ? Math.min(index, images.length - 1) : 0;

  const prev = () => setIndex((v) => (images.length ? (v - 1 + images.length) % images.length : 0));
  const next = () => setIndex((v) => (images.length ? (v + 1) % images.length : 0));

  if (!images.length) {
    return (
      <div className="h-full w-full bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
        Aucune image
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-none md:rounded-l-3xl">
      <img
        src={images[safeIndex].src}
        alt={images[safeIndex].alt}
        className="h-full w-full object-cover"
        draggable={false}
      />

      {hasMany && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur flex items-center justify-center hover:bg-foreground/15 transition"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur flex items-center justify-center hover:bg-foreground/15 transition"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === safeIndex ? "bg-foreground/80" : "bg-foreground/30"
                }`}
                aria-label={`Aller à l'image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ====== Section principale ======
export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  const orderedProjects = useMemo(() => projects, []);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-center">
            Projets
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Réalisations & initiatives
          </h2>
        </SectionReveal>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orderedProjects.map((p, i) => (
            <SectionReveal key={`${p.title}-${i}`} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setSelected(p)}
                className="text-left bg-card rounded-2xl p-6 w-full card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-xs text-primary font-semibold tracking-wide uppercase mb-2">{p.category}</p>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="inline-block mt-4 text-xs text-primary font-semibold">Cliquer pour en savoir plus →</span>
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-card rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden card-shadow"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row max-h-[90vh]">
                {/* Left: images – fills height */}
                <div className="md:w-1/2 shrink-0">
                  <div className="h-64 md:h-full">
                    <ImageCarousel images={selected.images} />
                  </div>
                </div>

                {/* Right: content – scrolls independently */}
                <div className="md:w-1/2 p-6 md:p-8 relative overflow-y-auto max-h-[90vh]">
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="absolute right-5 top-5 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>

                  <p className="text-xs text-primary font-semibold tracking-wide uppercase mb-3">
                    {selected.category}
                  </p>

                  <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                    {selected.title}
                  </h3>

                  <div className="text-muted-foreground leading-relaxed text-sm">
                    {selected.description}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {selected.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        {t}
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
}

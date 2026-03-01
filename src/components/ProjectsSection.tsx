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
  description: ReactNode; // ✅ ReactNode inclut string, JSX, etc.
  tags: string[];
  images?: ProjectImage[];
};

// ====== Exemple data (remplace placeholderPhoto par tes imports) ======
import placeholderPhoto from "../assets/img/placeholder.jpg"; // adapte le chemin

const projects: Project[] = [
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
        <br />
        <br />
        <strong>Objectif du projet :</strong>
        <br />
        Créer un outil intelligent, bienveillant et structurant pour aider les sportifs (de tous niveaux) à :
        <br />
        <br />
        • Adapter leur alimentation à leur activité, leurs objectifs et leur rythme de vie
        <br />
        • Comprendre les effets de la nutrition sur leurs performances, leur récupération et leurs sensations
        <br />
        <br />
        <strong>Avancement :</strong>
        <br />
        <br />
        • Rédaction du cahier des charges fonctionnel
        <br />
        • Collaboration avec des étudiants de GEA
        <br />
        • Réalisation d'une étude de marché
        <br />
        • Création d'un Design System
      </>
    ),
    tags: ["Entrepreneuriat", "UX/UI", "Nutrition"],
    images: [
      { src: placeholderPhoto, alt: "nutr. app 1" },
      { src: placeholderPhoto, alt: "nutr. app 2" },
    ],
  },

  // Ajoute d'autres projets ici...
];

// ====== Carousel (simple, sans dépendance) ======
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
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
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
              className="bg-card rounded-3xl w-full max-w-5xl overflow-hidden card-shadow"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: images */}
                <div className="p-5 md:p-6">
                  <div className="aspect-[4/3] md:aspect-[5/4]">
                    <ImageCarousel images={selected.images} />
                  </div>
                </div>

                {/* Right: content */}
                <div className="p-6 md:p-8 relative">
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

                  {/* ✅ IMPORTANT : pas de template string, pas de concat => rendu React direct */}
                  <div className="text-muted-foreground leading-relaxed">
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
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

import placeholderPhoto from "@/assets/placeholder-photo.jpg";
import auv from "@/assets/carousel/auvergne.jpg";
import brut from "@/assets/carousel/brut.jpg";
import bateau from "@/assets/carousel/imgbateau.JPG";
import loctudy from "@/assets/carousel/loctudy.jpg";
import podium from "@/assets/carousel/podium.JPG";
import rando from "@/assets/carousel/rando.jpg";
import worlds from "@/assets/carousel/worlds.jpg";

type CarouselImage = {
  src: string ;
  alt: string ; 
};

type Slide {
  images?: CarouselImage[];
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    title: "Championnats du Monde – Barcelone",
    subtitle: "Nacra 15 · Compétition internationale en catamaran",
    images: [
      { src: worlds, alt:"Championnats du Monde à Barcelone" },
      ],
  },
  {
    src: podium,
    title: "National Jeunes – La Rochelle",
    subtitle: "3ème place · Une fierté après des mois de préparation",
  },
  {
    src: placeholderPhoto,
    title: "Aventures en Vanuatu",
    subtitle: "Découverte du Pacifique Sud et de ses paysages incroyables",
  },
  {
    src: placeholderPhoto,
    title: "BRUT 2025 – Trail 20 km",
    subtitle: "Finisher · Dépassement de soi en pleine nature",
  },
  {
    src: placeholderPhoto,
    title: "Boucle du Sancy",
    subtitle: "Randonnée solo dans les volcans d'Auvergne",
  },
];
function PhotoCarouselSection({ images = [] }: { images?: ProjectImage[] }) {
  const [index, setIndex] = useState(0);

  const hasMany = images.length > 1;
  const safeIndex = images.length ? Math.min(index, images.length - 1) : 0;
  
  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  
  if (!images.length) {
    return (
      <div className="h-full w-full bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
        Aucune image
      </div>
    );
  }
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-center">
            Galerie
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Moments forts
          </h2>
        </SectionReveal>

        <div className="relative rounded-2xl overflow-hidden card-shadow">
          {/* Main image */}
          <div className="relative aspect-[16/7] bg-muted">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].src}
                alt={slides[current].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

            {/* Text overlay */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
              >
                <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-2">
                  {slides[current].title}
                </h3>
                <p className="text-primary-foreground/80 text-sm md:text-base max-w-xl">
                  {slides[current].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/30 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/30 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 right-8 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current
                    ? "bg-primary-foreground w-6"
                    : "bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarouselSection;

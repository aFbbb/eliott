import { useState } from "react";
import { Sailboat, Bike, Plane, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionReveal from "./SectionReveal";
import ImageCarousel from "./ImageCarousel";
import placeholderPhoto from "@/assets/placeholder-photo.jpg";

const interests = [
  {
    icon: Sailboat,
    title: "Voile",
    description:
      "10 ans de voile dont 3 ans de Nacra 15 au niveau international. 3ème au National Jeunes de La Rochelle, participation aux Championnats du Monde à Barcelone.",
    images: [
      { src: placeholderPhoto, alt: "Voile 1" },
      { src: placeholderPhoto, alt: "Voile 2" },
      { src: placeholderPhoto, alt: "Voile 3" },
    ],
  },
  {
    icon: Plane,
    title: "Voyage & Photo",
    description:
      "Europe, Antilles, Vanuatu… Depuis petit, je voyage et capture les meilleurs moments à travers l'objectif.",
    images: [
      { src: placeholderPhoto, alt: "Voyage 1" },
      { src: placeholderPhoto, alt: "Voyage 2" },
      { src: placeholderPhoto, alt: "Voyage 3" },
    ],
  },
  {
    icon: Bike,
    title: "Sport & Nature",
    description:
      "Vélo, trail, randonnée — j'explore les plus beaux endroits à pied ou à vélo. Finisher du BRUT 2025 (20 km), boucle du Sancy en solo.",
    images: [
      { src: placeholderPhoto, alt: "Sport 1" },
      { src: placeholderPhoto, alt: "Sport 2" },
    ],
  },
  {
    icon: Camera,
    title: "Photographie",
    description:
      "Passionné de photographie, je capture les paysages, la mer et les moments de vie à travers mon objectif. Chaque cliché raconte une histoire.",
    images: [
      { src: placeholderPhoto, alt: "Photo 1" },
      { src: placeholderPhoto, alt: "Photo 2" },
      { src: placeholderPhoto, alt: "Photo 3" },
    ],
  },
];

const InterestsSection = () => {
  const [selected, setSelected] = useState<(typeof interests)[0] | null>(null);

  return (
    <section id="interests" className="py-24 bg-muted/50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-center">
            En dehors du travail
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
            Centres d'intérêts
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((item, i) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={i} delay={i * 0.1}>
                <button
                  onClick={() => setSelected(item)}
                  className="w-full bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group text-left"
                >
                  {/* Preview image */}
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.images[0].src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </button>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      {/* Photo Gallery Modal */}
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
              className="bg-card rounded-2xl overflow-hidden max-w-3xl w-full max-h-[85vh] overflow-y-auto card-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageCarousel
                images={selected.images}
                className="h-64 md:h-96"
              />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <selected.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {selected.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InterestsSection;

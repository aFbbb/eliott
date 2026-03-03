import { useEffect, useState } from "react";
import { Sailboat, Bike, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import SectionReveal from "./SectionReveal";

interface InterestItem {
  icon: typeof Sailboat;
  title: string;
  description: string;
  teaser: string; // image for the card
  video?: string; // optional portrait video for modal
}

import bateauImg from "../assets/CI/bateau.jpg";
import veloImg from "../assets/CI/velo.jpg";
import voyageImg from "../assets/CI/voyage.jpg";
import vid1 from "../assets/vid1.mov";
import vid2 from "../assets/vid2.mov";
import vid3 from "../assets/vid3.mov";

const interests: InterestItem[] = [
  {
    icon: Sailboat,
    title: "Voile",
    description:
      "10 ans de voile dont 3 ans de Nacra 15 au niveau international. 3ème au National Jeunes de La Rochelle, participation aux Championnats du Monde à Barcelone.",
    teaser: bateauImg,
    video: vid1,
  },
  {
    icon: Plane,
    title: "Voyage & Photo",
    description:
      "Europe, Antilles, Vanuatu… Depuis petit, je voyage et capture les meilleurs moments à travers l'objectif.",
    teaser: voyageImg,
    video: vid2,
  },
  {
    icon: Bike,
    title: "Sport & Nature",
    description:
      "Vélo, trail, randonnée — j'explore les plus beaux endroits à pied ou à vélo. Finisher du BRUT 2025 (20 km), boucle du Sancy en solo.",
    teaser: veloImg,
    video: vid3,
  },
];

const InterestsSection = () => {
  const [selected, setSelected] = useState<InterestItem | null>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setVideoError(false);
  }, [selected]);

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {interests.map((item, i) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={i} delay={i * 0.1}>
                <button
                  onClick={() => setSelected(item)}
                  className="w-full bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group text-left"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.teaser}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                          <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                        </div>
                      </div>
                    )}
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
              className="bg-card rounded-2xl overflow-hidden max-w-md w-full max-h-[90vh] flex flex-col card-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: "9/16", maxHeight: "65vh" }}>
                {selected.video && !videoError ? (
                  <video
                    src={selected.video}
                    autoPlay
                    loop
                    muted
                    controls
                    preload="metadata"
                    playsInline
                    poster={selected.teaser}
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                ) : (
                  <img
                    src={selected.teaser}
                    alt={selected.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-foreground/30 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/50 transition-colors"
                >
                  <X className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <selected.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {selected.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
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

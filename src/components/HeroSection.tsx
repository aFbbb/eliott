import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary-foreground/70 font-body text-sm tracking-[0.25em] uppercase mb-4"
        >
          Portfolio numérique
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
        >
          Eliott Legru
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-primary-foreground/80 font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4"
        >
          Étudiant en BUT Génie Mécanique et Productique — Apprenti Intégrateur-Projeteur chez{" "}
          <span className="font-semibold text-primary-foreground">Naval Group</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-primary-foreground/60 font-body text-base max-w-xl mx-auto mb-10"
        >
          Curieux et pragmatique, passionné de sport et de mer. Je relève chaque défi avec motivation, détermination et rigueur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-display font-semibold text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

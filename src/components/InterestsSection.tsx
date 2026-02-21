import { Sailboat, Bike, Plane } from "lucide-react";
import SectionReveal from "./SectionReveal";

const interests = [
  {
    icon: Sailboat,
    title: "Voile",
    description:
      "10 ans de voile dont 3 ans de Nacra 15 au niveau international. 3ème au National Jeunes de La Rochelle, participation aux Championnats du Monde à Barcelone.",
  },
  {
    icon: Plane,
    title: "Voyage & Photo",
    description:
      "Europe, Antilles, Vanuatu… Depuis petit, je voyage et capture les meilleurs moments à travers l'objectif.",
  },
  {
    icon: Bike,
    title: "Sport & Nature",
    description:
      "Vélo, trail, randonnée — j'explore les plus beaux endroits à pied ou à vélo. Finisher du BRUT 2025 (20 km), boucle du Sancy en solo.",
  },
];

const InterestsSection = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((item, i) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;

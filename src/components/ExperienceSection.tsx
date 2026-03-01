import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, GraduationCap, Anchor } from "lucide-react";
import SectionReveal from "./SectionReveal";

interface Experience {
  icon: typeof Anchor;
  logo?: string;
  url?: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  details?: string;
  confidential?: boolean;
  noDetails?: boolean;
}

const experiences: Experience[] = [
  {
    icon: Anchor,
    logo: "/logos/naval-group.png",
    url: "https://www.naval-group.com/",
    title: "Naval Group",
    subtitle: "Apprenti Intégrateur-Projeteur",
    period: "Sept. 2024 – Présent",
    description:
      "Modélisation 3D de structures navales, calculs de dimensionnement, coordination interservices, revues de conception et suivi documentaire pour la construction de navires de guerre et sous-marins.",
    details:
      `Naval Group est le spécialiste français de la construction et de la maintenance de navires de guerre et de sous-marins depuis plus de trois siècles. Forte d'une expertise reconnue à l'international, l'entreprise s'inscrit parmi les leaders mondiaux alliant rigueur technique et exigence qualité.<br /><br />` +
      `Depuis septembre 2024, j'évolue chez Naval Group en tant qu'Intégrateur-Projeteur en alternance. Mon rôle :<br /><br />` +
      `<strong>• Modélisation 3D :</strong><br />Créer et mettre à jour les maquettes numériques des structures navales en respectant les spécifications techniques.<br /><br />` +
      `<strong>• Analyse de résistance :</strong><br />Réaliser des calculs de dimensionnement pour vérifier le comportement des pièces et anticiper les contraintes en conditions réelles.<br /><br />` +
      `<strong>• Coordination interservices :</strong><br />Travailler avec les experts métiers pour garantir la cohérence et la robustesse de l'ensemble des systèmes.<br /><br />` +
      `<strong>• Veille technique et innovation :</strong><br />Surveiller les évolutions des matériaux et des procédés de fabrication, et proposer des améliorations concrètes pour optimiser les performances et la sécurité des navires.<br /><br />` +
      `<strong>• Revues de conception :</strong><br />Présenter des maquettes et des résultats d'analyse, recueillir les retours de l'équipe et ajuster les dossiers de définition pour aboutir à une solution validée.<br /><br />` +
      `<strong>• Suivi documentaire et conformité :</strong><br />Mettre à jour les plans et les rapports d'analyse, en assurant la traçabilité et la qualité des livrables destinés aux phases de fabrication et de maintenance.<br /><br />` +
      `Chacune de ces missions me permet de renforcer ma rigueur, d'enrichir mes compétences techniques et de contribuer de façon concrète aux projets de Naval Group.`,
    confidential: true,
  },
  {
    icon: Briefcase,
    logo: "/logos/fountaine-pajot.png",
    url: "https://www.fountaine-pajot.com/",
    title: "Fountaine Pajot",
    subtitle: "Stage de 1ère année",
    period: "2023 · 3 semaines",
    description:
      "Découverte de la fabrication de catamarans de luxe : composite (drapage, infusion), avant-pontage, après-pontage. Exploration des différents métiers acteurs de la fabrication de ces bateaux.",
    details:
      `Fountaine Pajot est une entreprise française, fondée en 1976, spécialisée dans la construction de catamarans de luxe, employant plus de 800 personnes sur trois sites de production (Aigrefeuille-d'Aunis, La Rochelle, Le Thou) et réalisant 277 M€ de chiffre d'affaires en 2023 (croissance de 26 % vs 2022).<br /><br />` +
      `Durant trois semaines au sein de l'atelier d'Aigrefeuille-d'Aunis, j'ai découvert les principales étapes de fabrication d'un catamaran :<br /><br />` +
      `<strong>• Composite</strong> (drapage, infusion/injection, entretien de moules)<br />` +
      `<strong>• Avant-pontage</strong> (assemblage de modules, passage de câbles et tuyaux)<br />` +
      `<strong>• Après-pontage</strong> (connexions finales, installation des aménagements)<br /><br />` +
      `J'ai particulièrement exploré les métiers de stratification et d'accastillage, alternant entre drapage, collage de bandes structurelles et pose d'équipements de sécurité et de confort.<br /><br />` +
      `L'accueil et le tutorat ont grandement facilité mon intégration aux deux équipes (matin et après-midi) : j'ai pu poser toutes mes questions, gagner en autonomie et comprendre rapidement les exigences de chaque poste. J'ai apprécié l'esprit d'équipe, la propreté rigoureuse des lieux et la sensibilisation aux normes (zone ATEX, EPI obligatoires).<br /><br />` +
      `Ce stage m'a permis :<br /><br />` +
      `• D'appliquer des gestes techniques concrets et de maîtriser de nouveaux procédés métiers,<br />` +
      `• De développer mon sens de l'organisation et du travail collaboratif,<br />` +
      `• Et de confirmer mon intérêt pour l'industrie navale, même si la distance géographique ne m'oriente pas vers une alternance ultérieure chez Fountaine Pajot.`,
  },
  {
    icon: GraduationCap,
    logo: "/logos/iut-brest.png",
    url: "https://www.univ-brest.fr/iut/",
    title: "BUT GMP – IUT de Brest",
    subtitle: "Génie Mécanique et Productique",
    period: "2022 – 2025",
    description:
      "Formation bac+3 en conception mécanique, simulation, matériaux, procédés de fabrication et gestion de production. 3ème année en alternance chez Naval Group.",
    details:
      `À l'IUT de Brest, il est possible de suivre le Bachelor Universitaire de Technologie (BUT) en Génie Mécanique et Productique, une formation bac+3 accessible après le baccalauréat. Son objectif est de former des techniciens supérieurs polyvalents, capables de concevoir, fabriquer et industrialiser des produits mécaniques, tout en maîtrisant les procédés de production. Plusieurs IUT offrent la possibilité de suivre cette formation en alternance, via un contrat d'apprentissage ou de professionnalisation.<br /><br />` +
      `<strong>1. Objectifs de la formation</strong><br /><br />` +
      `• Vision globale du cycle de vie d'un produit mécanique : de l'étude de faisabilité à la production en série.<br />` +
      `• Compétences techniques en conception, simulation, choix des matériaux et procédés de fabrication.<br />` +
      `• Maîtrise de la gestion de production, de la planification à l'optimisation des lignes.<br />` +
      `• Développement des soft skills : gestion de projet, travail en équipe, communication technique.<br /><br />` +
      `<strong>2. Parcours & Matières enseignées</strong><br /><br />` +
      `Durée : 3 ans (6 semestres)<br />` +
      `Parcours classique ou en alternance (contrat d'apprentissage/professionnalisation) : l'alternance permet de consolider les acquis en entreprise dès la deuxième année.<br /><br />` +
      `Matières enseignées :<br />` +
      `Mathématiques · Mécanique · Dimensionnement des Structures · Science des Matériaux · Conception Mécanique · Organisation de la Production Industrielle · Production et Méthodes · Métrologie · Cyber-physique · Communication · Anglais<br /><br />` +
      `<strong>3. Modalités pédagogiques</strong><br /><br />` +
      `• Projets tutorés en petits groupes.<br />` +
      `• Travaux pratiques en atelier et en salle informatique.<br />` +
      `• Stages et/ou alternance : chaque année de formation inclut soit un stage en entreprise, soit un dispositif d'alternance, garantissant une immersion progressive dans le monde professionnel.<br />` +
      `• 3ème année en alternance obligatoire.<br /><br />` +
      `<strong>4. Compétences et débouchés</strong><br /><br />` +
      `À l'issue du BUT GMP, les diplômés sont capables de :<br />` +
      `• Concevoir et dimensionner des pièces et ensembles mécaniques.<br />` +
      `• Sélectionner et optimiser les procédés de fabrication.<br />` +
      `• Piloter l'industrialisation et la maintenance préventive.<br />` +
      `• Diriger un projet de production et coordonner une équipe pluridisciplinaire.<br /><br />` +
      `Secteurs d'activité : aéronautique, automobile, naval, ferroviaire, énergies renouvelables, biens d'équipement, industries de pointe, bureaux d'études.<br /><br />` +
      `<a href="https://www.univ-brest.fr/iut/" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: underline;">Pour en savoir plus → IUT de Brest</a>`,
  },
  {
    icon: GraduationCap,
    logo: "/logos/iae-brest.png",
    url: "https://iae.univ-brest.fr/",
    title: "DUE – IAE de Brest",
    subtitle: "Diplôme Universitaire d'Entrepreneuriat",
    period: "2025 – 2026",
    description:
      "Formation post-bac en marketing, finances, gestion d'entreprises afin d'acquérir des connaissances & compétences basiques pour la création ou la reprise d'entreprise.",
    noDetails: true,
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
            const isClickable = !exp.noDetails;

            const cardContent = (
              <>
                <div className="flex items-center gap-3 mb-3">
                  {exp.logo ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="h-10 flex items-center shrink-0"
                    >
                      <img
                        src={exp.logo}
                        alt={exp.title}
                        className="h-10 w-auto object-contain"
                      />
                    </a>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                  </div>
                </div>
                <p className="text-xs text-primary font-semibold tracking-wide uppercase mb-3">
                  {exp.period}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                {exp.confidential && (
                  <p className="mt-3 text-xs font-semibold text-destructive">
                    NB : Informations confidentielles – aucune donnée Naval Group ne sera divulguée.
                  </p>
                )}
                {isClickable && (
                  <span className="inline-block mt-3 text-xs text-primary font-semibold">
                    Cliquer pour en savoir plus →
                  </span>
                )}
              </>
            );

            return (
              <SectionReveal key={i} delay={i * 0.15}>
                <div
                  className={`relative flex items-start mb-12 md:mb-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8 md:mr-auto" : "md:pl-8 md:ml-auto"
                    }`}
                  >
                    {isClickable ? (
                      <button
                        onClick={() => setSelected(exp)}
                        className="w-full text-left bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                      >
                        {cardContent}
                      </button>
                    ) : (
                      <div className="w-full text-left bg-card rounded-xl p-6 card-shadow group">
                        {cardContent}
                      </div>
                    )}
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
                  {selected.logo ? (
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 flex items-center shrink-0"
                    >
                      <img
                        src={selected.logo}
                        alt={selected.title}
                        className="h-12 w-auto object-contain"
                      />
                    </a>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <selected.icon className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {selected.title}
                    </h3>
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
              <p className="text-xs text-primary font-semibold tracking-wide uppercase mb-4">
                {selected.period}
              </p>
              {selected.details ? (
                <div
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selected.details }}
                />
              ) : (
                <p className="text-muted-foreground leading-relaxed">
                  {selected.description}
                </p>
              )}
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

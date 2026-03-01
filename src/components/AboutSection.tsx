import SectionReveal from "./SectionReveal";

const AboutSection = () => (
  <section id="about" className="py-24 bg-muted/50">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <SectionReveal>
        <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2">
          Bienvenue
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8">
          À propos de moi
        </h2>
      </SectionReveal>
      <SectionReveal delay={0.15}>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Je m'appelle{" "}
          <a
            href="https://www.linkedin.com/in/eliott-legru-60b75b2b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Eliott Legru
          </a>
          , étudiant en troisième année de BUT Génie Mécanique et Productique et apprenti chez Naval Group
          depuis septembre 2024. Curieux et pragmatique, j'aime comprendre comment fonctionnent les systèmes
          pour mieux les faire évoluer. En dehors de mes études et de mon apprentissage, je suis passionné de
          sport : que ce soit sur l'eau, à pied ou à vélo, en équipe ou seul, je relève chaque défi avec
          motivation, détermination et rigueur. <br></br><br></br>
          Parcourez ce site pour découvrir mes projets, mes réalisations et les expériences qui façonnent mon profil. 
        </p>
      </SectionReveal>
    </div>
  </section>
);

export default AboutSection;

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import SectionReveal from "./SectionReveal";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xanodoqo", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-xl mx-auto px-6">
        <SectionReveal>
          <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-center">
            Parlons ensemble
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Contactez-moi
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-8 card-shadow space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nom</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Prénom</label>
                <input
                  type="text"
                  name="firstname"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="Votre prénom"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder="exemple@domaine.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Sujet</label>
              <select
                name="subject"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="projet">Projet</option>
                <option value="professionnel">Professionnel</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Envoyer
            </button>

            {submitted && (
              <p className="text-center text-sm text-accent font-medium">
                Message envoyé avec succès ! ✓
              </p>
            )}
          </form>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ContactSection;

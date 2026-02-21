import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-primary-foreground/60 font-body">
        © 2025–2026 Eliott Legru. Tous droits réservés.
      </p>
      <a
        href="https://www.linkedin.com/in/eliott-legru-60b75b2b8/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </a>
    </div>
  </footer>
);

export default Footer;

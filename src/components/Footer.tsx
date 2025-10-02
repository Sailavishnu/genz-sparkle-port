import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">
              Gen Z <span className="text-accent">Developers</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Building the future, one line at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:neon-glow"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:neon-glow"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:neon-glow"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@genzdevs.com"
              className="p-2 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:neon-glow"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Gen Z Developers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

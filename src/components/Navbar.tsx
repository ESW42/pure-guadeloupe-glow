import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#processus" },
  { label: "Devis", href: "#devis" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl shadow-ambient border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
          <a href="#accueil" className="font-display text-xl font-bold tracking-tight text-foreground">
            Clean<span className="text-primary">Pro</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#devis"
            className="hidden md:inline-flex h-10 px-6 items-center rounded-full bg-primary text-primary-foreground text-sm font-medium relative overflow-hidden group transition-shadow hover:shadow-hover-glow"
          >
            <span className="relative z-10">Demander un devis</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-foreground"
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            <div className="container mx-auto flex items-center justify-between h-16">
              <span className="font-display text-xl font-bold text-foreground">
                Clean<span className="text-primary">Pro</span>
              </span>
              <button onClick={() => setMenuOpen(false)} className="p-2" aria-label="Fermer le menu">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl font-display font-bold text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#devis"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.08 }}
                className="mt-4 h-14 px-10 inline-flex items-center rounded-full bg-primary text-primary-foreground font-medium text-lg"
              >
                Demander un devis
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

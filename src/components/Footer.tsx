import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground pt-16 pb-8">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-xl font-bold text-background mb-3">
            Clean<span className="text-primary">Pro</span>
          </h3>
          <p className="text-sm text-background/50 leading-relaxed max-w-[30ch]">
            Le spécialiste du nettoyage à domicile en Guadeloupe.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-background/20 transition">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-background/20 transition">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-sm text-background/80 mb-4 uppercase tracking-wider">Liens rapides</h4>
          <div className="flex flex-col gap-2">
            {["Accueil", "Services", "Processus", "Devis", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-background/50 hover:text-background transition">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-sm text-background/80 mb-4 uppercase tracking-wider">Contact</h4>
          <p className="text-sm text-background/50 mb-3">0690 XX XX XX</p>
          <a
            href="https://wa.me/590690000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-green-600 text-background text-sm font-medium hover:bg-green-700 transition"
            aria-label="Contacter sur WhatsApp"
          >
            <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp
          </a>
        </div>
      </div>

      <div className="section-divider mb-6" style={{ opacity: 0.15 }} />
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-background/30">
        <span>© 2025 CleanPro Guadeloupe</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-background/50 transition">Mentions légales</a>
          <a href="#" className="hover:text-background/50 transition">Politique de confidentialité</a>
          <a href="#" className="hover:text-background/50 transition">CGV</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

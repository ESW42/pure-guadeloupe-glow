import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const FinalCTA = () => (
  <section id="contact" className="relative py-20 md:py-28 bg-foreground overflow-hidden">
    {/* Subtle light beams */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
    </div>

    <div className="container mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl md:text-5xl tracking-[-0.03em] text-background mb-4">
          Prêt à redonner vie{" "}
          <span className="font-bold">à vos meubles ?</span>
        </h2>
        <p className="text-primary/60 text-lg mb-10">
          Devis gratuit · Réponse sous 2h · Satisfaction garantie
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#devis"
            className="h-14 px-8 inline-flex items-center justify-center rounded-full bg-background text-foreground font-medium text-base relative overflow-hidden group transition-shadow hover:shadow-hover-glow"
          >
            <span className="relative z-10">Demander un devis gratuit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </a>
          <a
            href="tel:+590690000000"
            className="h-14 px-8 inline-flex items-center justify-center gap-2 rounded-full border border-background/20 text-background font-medium text-base hover:bg-background/10 transition-colors duration-200"
            aria-label="Nous appeler"
          >
            <PhoneCall size={18} strokeWidth={1.5} />
            Nous appeler
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;

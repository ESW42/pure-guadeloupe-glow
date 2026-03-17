import { motion } from "framer-motion";
import { Shield, Leaf, Star, MapPin } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const trustItems = [
  { icon: Star, line1: "5/5", line2: "Avis clients" },
  { icon: Shield, line1: "RC Pro", line2: "Assurés" },
  { icon: Leaf, line1: "Produits", line2: "Écologiques" },
  { icon: MapPin, line1: "Toute la", line2: "Guadeloupe" },
];

const Hero = () => (
  <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden dot-grid">
    {/* Background blobs */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"
        style={{ animation: "float-blob 20s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/[0.03] blur-[100px]"
        style={{ animation: "float-blob 25s ease-in-out infinite reverse" }}
      />
    </div>

    <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-0">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.span {...fadeUp} transition={{ duration: 0.5 }} className="label-tag mb-4 block">
          Services Premium à Domicile
        </motion.span>
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-[clamp(40px,6vw,80px)] leading-[1.08] tracking-[-0.03em] text-foreground mb-6"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Vos meubles{" "}
          <span className="font-bold">retrouvent leur éclat.</span>
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
        >
          Nettoyage professionnel à domicile en Guadeloupe. Canapés, matelas, tapis, vitres — des résultats visibles dès la première intervention.
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#devis"
            className="h-14 px-8 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium text-base relative overflow-hidden group transition-shadow hover:shadow-hover-glow"
          >
            <span className="relative z-10">Obtenir un devis gratuit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </a>
          <a
            href="#services"
            className="h-14 px-8 inline-flex items-center justify-center rounded-full border border-border font-medium text-base text-foreground hover:bg-secondary transition-colors duration-200"
          >
            Voir nos services
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {trustItems.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 ${
                i > 0 ? "lg:border-l lg:border-border/50 lg:pl-4" : ""
              }`}
            >
              <item.icon size={18} strokeWidth={1.5} className="text-primary flex-shrink-0" />
              <div className="text-sm">
                <span className="font-bold text-foreground">{item.line1}</span>
                <br />
                <span className="text-muted-foreground">{item.line2}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl hidden sm:block"
      >
        <img
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
          alt="Intérieur moderne avec canapé propre"
          className="object-cover w-full h-full"
          loading="eager"
        />
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
      <div className="w-px h-8 bg-border relative overflow-hidden">
        <div className="w-full h-2 bg-primary rounded-full" style={{ animation: "scroll-line 2s ease-in-out infinite" }} />
      </div>
    </div>
  </section>
);

export default Hero;

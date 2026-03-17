import { motion } from "framer-motion";
import { Sofa, Layers, BedDouble, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Canapé & fauteuil",
    desc: "Tissu, cuir, microfibre : nettoyage en profondeur et traitement anti-taches.",
  },
  {
    icon: Layers,
    title: "Tapis & moquettes",
    desc: "Extraction de la saleté incrustée, neutralisation des odeurs, séchage rapide.",
  },
  {
    icon: BedDouble,
    title: "Matelas",
    desc: "Élimination des acariens, bactéries et taches. Pour un sommeil sain.",
  },
  {
    icon: Sparkles,
    title: "Vitres & baies vitrées",
    desc: "Nettoyage sans traces, intérieur et extérieur. Résultat impeccable.",
  },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 dot-grid">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="label-tag mb-3 block">Nos Prestations</span>
        <h2 className="font-display text-3xl md:text-5xl tracking-[-0.03em] text-foreground">
          Un service complet,{" "}
          <span className="font-bold">des résultats garantis</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative bg-card rounded-2xl p-8 shadow-ambient hover:shadow-hover-glow hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            <s.icon size={32} strokeWidth={1.5} className="text-primary mb-5" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-[65ch]">{s.desc}</p>
            <a href="#devis" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-200">
              Inclus dans votre devis <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

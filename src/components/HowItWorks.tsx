import { motion } from "framer-motion";
import { Phone, Home, CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Vous nous contactez",
    desc: "Formulaire en ligne ou appel, réponse sous 2h.",
  },
  {
    num: "02",
    icon: Home,
    title: "On intervient chez vous",
    desc: "À domicile, à l'heure convenue, sans contrainte.",
  },
  {
    num: "03",
    icon: CheckCircle,
    title: "Résultat garanti",
    desc: "Satisfait ou on revient sans frais supplémentaires.",
  },
];

const HowItWorks = () => (
  <section id="processus" className="py-20 md:py-28 dot-grid">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="label-tag mb-3 block">Processus</span>
        <h2 className="font-display text-3xl md:text-5xl tracking-[-0.03em] text-foreground">
          Simple, rapide,{" "}
          <span className="font-bold">efficace</span>
        </h2>
      </motion.div>

      {/* Desktop horizontal */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
        {/* Connecting line */}
        <div className="absolute top-16 left-[16.66%] right-[16.66%] h-px">
          <motion.div
            className="h-full bg-primary/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="font-display text-6xl font-bold text-primary/10 mb-2">{s.num}</div>
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
              <s.icon size={24} strokeWidth={1.5} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm max-w-[30ch] mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile vertical */}
      <div className="md:hidden relative pl-10">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20" />
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">{s.num}</span>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

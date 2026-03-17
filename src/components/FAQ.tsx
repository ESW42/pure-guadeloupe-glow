import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Combien de temps dure une intervention ?", a: "Entre 1h et 3h selon la prestation et la surface." },
  { q: "Vous vous déplacez dans toute la Guadeloupe ?", a: "Oui, nous intervenons dans tous les secteurs de Guadeloupe." },
  { q: "Quels produits utilisez-vous ?", a: "Des produits professionnels certifiés, sans danger pour les enfants et animaux." },
  { q: "Mes meubles sont-ils en sécurité ?", a: "Nous sommes assurés en RC Pro. Chaque intervention est réalisée avec soin." },
  { q: "Comment prendre rendez-vous ?", a: "Via le formulaire de devis, par téléphone ou WhatsApp." },
  { q: "Quel délai pour une intervention ?", a: "Nous intervenons généralement sous 48 à 72h après confirmation." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left min-h-[48px] gap-4"
        aria-expanded={open}
      >
        <span className="font-display font-bold text-foreground text-base">{q}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[65ch]">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="label-tag mb-3 block">FAQ</span>
        <h2 className="font-display text-3xl md:text-5xl tracking-[-0.03em] text-foreground">
          Questions{" "}
          <span className="font-bold">fréquentes</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto md:columns-2 md:gap-8">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="break-inside-avoid"
          >
            <FAQItem q={f.q} a={f.a} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;

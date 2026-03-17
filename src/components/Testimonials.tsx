import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reviews = [
  { name: "Marie-Claire D.", city: "Pointe-à-Pitre", text: "Résultat bluffant sur mon canapé en tissu. Je ne pensais pas qu'il pouvait retrouver cet aspect neuf. Je recommande sans hésiter." },
  { name: "Jean-Luc M.", city: "Basse-Terre", text: "Très professionnel, ponctuel et soigneux. Mon tapis de salon est méconnaissable. Merci !" },
  { name: "Sandrine B.", city: "Le Gosier", text: "J'avais des doutes mais le résultat est là. Matelas impeccable, produits sans odeur forte. Parfait." },
  { name: "Franck T.", city: "Sainte-Anne", text: "Intervention rapide, équipe sérieuse. Je fais appel à eux régulièrement maintenant." },
  { name: "Nathalie R.", city: "Baie-Mahault", text: "Vitres et baies vitrées comme neufs. Prix honnête, travail sérieux. Je recommande." },
];

const ReviewCard = ({ r }: { r: typeof reviews[0] }) => (
  <div className="bg-card rounded-2xl p-6 shadow-ambient min-w-[300px] md:min-w-[340px] flex-shrink-0">
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
    <p className="text-foreground text-sm leading-relaxed mb-4 max-w-[65ch]">"{r.text}"</p>
    <div>
      <span className="font-bold text-foreground text-sm">{r.name}</span>
      <span className="text-muted-foreground text-sm ml-1">· {r.city}</span>
    </div>
  </div>
);

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    const scroll = () => {
      if (!paused && el) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(scroll);
    };
    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [paused]);

  return (
    <section className="py-20 md:py-28 dot-grid">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="label-tag mb-3 block">Avis Clients</span>
          <h2 className="font-display text-3xl md:text-5xl tracking-[-0.03em] text-foreground">
            Ils nous font{" "}
            <span className="font-bold">confiance</span>
          </h2>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-12"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Duplicate for infinite scroll */}
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} r={r} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

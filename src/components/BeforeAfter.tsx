import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { label: "Canapé 3 places" },
  { label: "Tapis salon" },
  { label: "Matelas double" },
];

const Slider = ({ label }: { label: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        role="slider"
        aria-label={`Avant/Après - ${label}`}
        aria-valuenow={Math.round(position)}
      >
        {/* "After" - clean side (right, full background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-primary/5" />
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-primary/40 tracking-widest uppercase">Après</div>

        {/* "Before" - dirty side (left, clipped) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-muted-foreground/30 via-muted-foreground/20 to-muted-foreground/40"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center text-sm font-medium text-foreground/30 tracking-widest uppercase"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          Avant
        </div>

        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-background shadow-lg" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground flex items-center justify-center shadow-lg">
            <ChevronLeft size={14} className="text-background -mr-0.5" />
            <ChevronRight size={14} className="text-background -ml-0.5" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
    </div>
  );
};

const BeforeAfter = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="label-tag mb-3 block">Nos Résultats</span>
        <h2 className="font-display text-3xl md:text-5xl tracking-[-0.03em] text-foreground">
          Des transformations qui{" "}
          <span className="font-bold">parlent d'elles-mêmes</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Slider label={item.label} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfter;

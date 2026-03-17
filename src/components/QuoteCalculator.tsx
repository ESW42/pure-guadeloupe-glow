import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sofa, Layers, BedDouble, Sparkles, ArrowRight, ArrowLeft, Send } from "lucide-react";

type ServiceKey = "canape" | "tapis" | "matelas" | "vitres";

const serviceCards: { key: ServiceKey; icon: typeof Sofa; label: string }[] = [
  { key: "canape", icon: Sofa, label: "Canapé" },
  { key: "tapis", icon: Layers, label: "Tapis" },
  { key: "matelas", icon: BedDouble, label: "Matelas" },
  { key: "vitres", icon: Sparkles, label: "Vitres" },
];

const detailOptions: Record<ServiceKey, { value: string; label: string }[]> = {
  canape: [
    { value: "2p", label: "2 places" },
    { value: "3p", label: "3 places" },
    { value: "4p", label: "4 places et +" },
  ],
  tapis: [
    { value: "small", label: "Moins de 5m²" },
    { value: "medium", label: "5 à 15m²" },
    { value: "large", label: "Plus de 15m²" },
  ],
  matelas: [
    { value: "1p", label: "1 personne" },
    { value: "2p", label: "2 personnes" },
  ],
  vitres: [
    { value: "few", label: "1 à 5 vitres" },
    { value: "medium", label: "6 à 15 vitres" },
    { value: "many", label: "Plus de 15 vitres" },
  ],
};

const pricing: Record<ServiceKey, Record<string, [number, number]>> = {
  canape: { "2p": [40, 60], "3p": [55, 80], "4p": [70, 100] },
  tapis: { small: [30, 50], medium: [50, 80], large: [80, 130] },
  matelas: { "1p": [40, 60], "2p": [55, 80] },
  vitres: { few: [30, 50], medium: [50, 90], many: [90, 150] },
};

const serviceLabels: Record<ServiceKey, string> = {
  canape: "Canapé & fauteuil",
  tapis: "Tapis & moquettes",
  matelas: "Matelas",
  vitres: "Vitres & baies vitrées",
};

const QuoteCalculator = () => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceKey | null>(null);
  const [detail, setDetail] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const getPrice = (): [number, number] | null => {
    if (!service || !detail) return null;
    return pricing[service]?.[detail] ?? null;
  };

  const canNext = () => {
    if (step === 1) return !!service;
    if (step === 2) return !!detail;
    if (step === 3) return name.trim().length > 0 && phone.trim().length > 0 && postal.trim().length > 0;
    return true;
  };

  const next = () => { if (canNext() && step < 4) setStep(step + 1); };
  const prev = () => { if (step > 1) setStep(step - 1); };

  const price = getPrice();

  const slideVariants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  if (submitted) {
    return (
      <section id="devis" className="py-20 md:py-28">
        <div className="container mx-auto flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-3xl shadow-ambient p-10 max-w-lg w-full text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Send size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Merci !</h3>
            <p className="text-muted-foreground">On vous rappelle sous 2h pour confirmer votre rendez-vous.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="devis" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="label-tag mb-3 block">Devis en Ligne</span>
          <h2 className="font-display text-3xl md:text-5xl tracking-[-0.03em] text-foreground">
            Estimez votre prestation{" "}
            <span className="font-bold">en 60 secondes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[680px] mx-auto bg-card rounded-3xl shadow-ambient p-6 md:p-10"
        >
          {/* Progress bar */}
          <div className="h-1 bg-muted rounded-full mb-8 overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display text-lg font-bold text-foreground mb-6">Quel service vous intéresse ?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {serviceCards.map((s) => (
                    <button
                      key={s.key}
                      onClick={() => { setService(s.key); setDetail(null); }}
                      className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 min-h-[100px] ${
                        service === s.key
                          ? "border-primary bg-secondary"
                          : "border-border hover:border-primary/30"
                      }`}
                      aria-label={`Sélectionner ${s.label}`}
                    >
                      <s.icon size={28} strokeWidth={1.5} className="text-primary" />
                      <span className="font-medium text-foreground text-sm">{s.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && service && (
              <motion.div key="s2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display text-lg font-bold text-foreground mb-6">Précisez votre besoin</h3>
                <div className="flex flex-col gap-3">
                  {detailOptions[service].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setDetail(opt.value)}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 min-h-[48px] ${
                        detail === opt.value
                          ? "border-primary bg-secondary"
                          : "border-border hover:border-primary/30"
                      }`}
                      aria-label={opt.label}
                    >
                      <span className="font-medium text-foreground">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display text-lg font-bold text-foreground mb-6">Vos coordonnées</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Prénom</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Téléphone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      placeholder="0690 XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Code postal</label>
                    <input
                      type="text"
                      value={postal}
                      onChange={(e) => setPostal(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      placeholder="97100"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && service && detail && (
              <motion.div key="s4" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="font-display text-lg font-bold text-foreground mb-6">Récapitulatif</h3>
                <div className="bg-secondary rounded-2xl p-6 mb-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-medium text-foreground">{serviceLabels[service]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Détail</span>
                    <span className="font-medium text-foreground">
                      {detailOptions[service].find((o) => o.value === detail)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contact</span>
                    <span className="font-medium text-foreground">{name}</span>
                  </div>
                  <div className="section-divider" />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Estimation</span>
                    <span className="font-display text-2xl font-bold text-primary">
                      {price ? `${price[0]}€ – ${price[1]}€` : "—"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full h-14 rounded-full bg-primary text-primary-foreground font-medium text-base relative overflow-hidden group transition-shadow hover:shadow-hover-glow"
                  aria-label="Envoyer ma demande"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send size={18} strokeWidth={1.5} /> Envoyer ma demande
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {step < 4 && (
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prev}
                disabled={step === 1}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition min-h-[48px] px-2"
                aria-label="Étape précédente"
              >
                <ArrowLeft size={16} /> Retour
              </button>
              <button
                onClick={next}
                disabled={!canNext()}
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 disabled:opacity-30 transition min-h-[48px] px-2"
                aria-label="Étape suivante"
              >
                Suivant <ArrowRight size={16} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteCalculator;

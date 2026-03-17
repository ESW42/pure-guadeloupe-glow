import { useState, useCallback } from "react";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import HowItWorks from "@/components/HowItWorks";
import QuoteCalculator from "@/components/QuoteCalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <PageLoader onComplete={onComplete} />}
      <CustomCursor />
      <div className={loaded ? "animate-[fade-in_0.5s_ease-out]" : "opacity-0"}>
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <StatsBar />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <BeforeAfter />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <QuoteCalculator />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;

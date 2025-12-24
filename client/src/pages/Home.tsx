import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section1_1, Section1_2, Section1_3, Section1_4 } from "@/components/Page1Components";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section (Non-spécifiée mais nécessaire pour le design) */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.jpg" alt="L2I Hero" className="w-full h-full object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">L'Avenir de <br /><span className="text-primary italic">l'Ingénierie</span></h1>
            <p className="text-xl text-muted-foreground mb-8 font-sans leading-relaxed">Licence 2 Ingénierie Informatique (L2I) - UASZ</p>
          </motion.div>
        </div>
      </section>

      {/* Les 4 sections demandées */}
      <Section1_1 />
      <Section1_2 />
      <Section1_3 />
      <Section1_4 />
    </Layout>
  );
}

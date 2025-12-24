import React from "react";
import { motion } from "framer-motion";
import Section1_1 from "./Section1_1.jsx";
import Section1_2 from "./Section1_2.jsx";
import Section1_3 from "./Section1_3.jsx";
import Section1_4 from "./Section1_4.jsx";
import Menu from "../components/Menu.jsx";
import Footer from "./Footer.jsx";

const Page1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-grow pt-20">
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
        <Section1_1 />
        <Section1_2 />
        <Section1_3 />
        <Section1_4 />
      </main>
      <Footer />
    </div>
  );
};

export default Page1;

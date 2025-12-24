import React from "react";
import { motion } from "framer-motion";

const Section1_1 = () => (
  <section className="py-20 bg-card/30">
    <div className="container grid md:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold mb-8 border-l-4 border-primary pl-6">Présentation de la L2I</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          La Licence 2 Ingénierie Informatique est une année charnière conçue pour approfondir les bases théoriques 
          et pratiques de l'informatique. Nous formons des étudiants capables de concevoir, développer et maintenir 
          des systèmes complexes.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-background border border-primary/20">
            <span className="text-3xl font-bold text-primary block mb-2">100%</span>
            <span className="text-sm font-mono uppercase">Pratique</span>
          </div>
          <div className="p-4 bg-background border border-primary/20">
            <span className="text-3xl font-bold text-primary block mb-2">Expert</span>
            <span className="text-sm font-mono uppercase">Encadrement</span>
          </div>
        </div>
      </motion.div>
      <div className="relative">
        <div className="absolute -inset-4 border-2 border-primary/20 translate-x-4 translate-y-4 -z-10" />
        <img src="/images/admission.jpg" alt="L2I Presentation" className="w-full h-auto grayscale hover:grayscale-0 transition-all" />
      </div>
    </div>
  </section>
);

export default Section1_1;

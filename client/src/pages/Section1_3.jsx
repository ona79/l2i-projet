import React from "react";
import { motion } from "framer-motion";

const Section1_3 = () => (
  <section className="py-20 bg-primary/5">
    <div className="container grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1">
        <img src="/images/career.jpg" alt="Carrières" className="w-full h-auto neo-card" />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-4xl font-bold mb-8">Débouchés Professionnels</h2>
        <ul className="space-y-6">
          {[
            "Développeur Full-Stack & Mobile",
            "Administrateur Systèmes et Réseaux",
            "Analyste de Données (Data Analyst)",
            "Consultant en Cybersécurité",
            "Chef de Projet Digital"
          ].map((job, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 text-lg font-mono">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{i + 1}</span>
              {job}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Section1_3;

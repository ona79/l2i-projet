import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const Section3_1 = () => (
  <section className="py-20 bg-primary/5">
    <div className="container grid md:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h1 className="text-5xl font-bold mb-8">Le Département Informatique</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Le département d'informatique de l'UASZ est un pôle d'excellence dédié à la formation de cadres 
          hautement qualifiés. Nous combinons recherche de pointe et enseignement pratique pour répondre 
          aux défis numériques du Sénégal et de l'Afrique.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 p-4 bg-card border-l-4 border-primary">
            <MapPin className="text-primary" />
            <span className="font-mono text-sm">Campus de Ziguinchor, Sénégal</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-card border-l-4 border-primary">
            <Phone className="text-primary" />
            <span className="font-mono text-sm">+221 78 190 14 24</span>
          </div>
        </div>
      </motion.div>
      <div className="relative">
        <img src="/images/department.jpg" alt="Département" className="w-full h-auto neo-card grayscale" />
        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 font-serif text-2xl font-bold">
          Excellence <br /> Numérique
        </div>
      </div>
    </div>
  </section>
);

export default Section3_1;

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Zap } from "lucide-react";

const Section1_2 = () => (
  <section className="py-20">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4">Conditions d'Admission</h2>
        <p className="text-muted-foreground font-mono uppercase tracking-widest">Rejoignez l'élite technologique</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Niveau Requis", desc: "Avoir validé la Licence 1 en Informatique ou équivalent.", icon: <CheckCircle className="text-primary" /> },
          { title: "Dossier Académique", desc: "Examen rigoureux des relevés de notes et du parcours.", icon: <Target className="text-primary" /> },
          { title: "Motivation", desc: "Entretien ou lettre de motivation démontrant votre passion.", icon: <Zap className="text-primary" /> }
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="neo-card p-8">
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Section1_2;

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Target, Zap } from "lucide-react";

export const Section1_1 = () => (
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

export const Section1_2 = () => (
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

export const Section1_3 = () => (
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

export const Section1_4 = () => (
  <section className="py-20">
    <div className="container">
      <div className="bg-card border-2 border-primary p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl -mr-32 -mt-32" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-8">Pourquoi choisir cette filière ?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choisir la L2I à l'UASZ, c'est opter pour une formation qui allie rigueur académique et innovation. 
              Nos programmes sont constamment mis à jour pour répondre aux exigences du marché mondial.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-primary"><CheckCircle size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1">Infrastructures Modernes</h4>
                  <p className="text-sm text-muted-foreground">Laboratoires équipés des dernières technologies.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-primary"><CheckCircle size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1">Réseau Professionnel</h4>
                  <p className="text-sm text-muted-foreground">Partenariats avec des entreprises leaders du secteur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

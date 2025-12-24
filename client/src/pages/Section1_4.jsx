import React from "react";
import { CheckCircle } from "lucide-react";

const Section1_4 = () => (
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

export default Section1_4;

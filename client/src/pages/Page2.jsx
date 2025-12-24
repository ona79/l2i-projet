import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import Menu from "../components/Menu.jsx";
import Footer from "./Footer.jsx";
import TableEnseignement from "./TableEnseignement.jsx";
import FormulaireEnseignement from "../components/FormulaireEnseignement.jsx";
import { toast } from "sonner";

const Page2 = () => {
  const [showForm, setShowForm] = useState(false);
  const [enseignements, setEnseignements] = useState([
    { id: "1", niveau: "L1", nom: "Algorithmique", description: "Introduction aux concepts fondamentaux de la programmation et de la logique algorithmique pour résoudre des problèmes complexes." },
    { id: "2", niveau: "L2", nom: "Architecture des Ordinateurs", description: "Étude approfondie des composants matériels, du fonctionnement du processeur et de la gestion de la mémoire dans les systèmes modernes." },
    { id: "3", niveau: "L3", nom: "Génie Logiciel", description: "Méthodologies de conception, de développement et de maintenance de logiciels de grande envergure en utilisant des cycles de vie structurés." },
  ]);

  const handleAdd = (data) => {
    const newEntry = {
      id: Math.random().toString(36).substr(2, 9),
      ...data
    };
    setEnseignements([...enseignements, newEntry]);
    toast.success("Enseignement ajouté !");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setEnseignements(enseignements.filter(e => e.id !== id));
    toast.info("Enseignement supprimé.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-grow pt-20">
        <section className="py-20">
          <div className="container">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h1 className="text-5xl font-bold mb-4">Les Niveaux</h1>
                <p className="text-muted-foreground font-mono uppercase tracking-widest">Aperçu des enseignements par cycle</p>
              </div>
              <button onClick={() => setShowForm(!showForm)} className="neo-button flex items-center gap-2">
                {showForm ? <X size={20} /> : <Plus size={20} />}
                {showForm ? "Cacher le formulaire" : "Ajouter un enseignement"}
              </button>
            </div>

            <AnimatePresence>
              {showForm && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mb-12 overflow-hidden">
                  <FormulaireEnseignement onAdd={handleAdd} onCancel={() => setShowForm(false)} />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-12">
              {["L1", "L2", "L3"].map((niv) => (
                <div key={niv}>
                  <h2 className="text-2xl font-bold mb-6 text-primary">{niv === "L1" ? "Licence 1" : niv === "L2" ? "Licence 2" : "Licence 3"}</h2>
                  <TableEnseignement 
                    data={enseignements.filter(e => e.niveau === niv)} 
                    col1="Nom" 
                    col2="Description" 
                    onDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page2;

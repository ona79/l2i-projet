import { motion, AnimatePresence } from "framer-motion";
import { Trash2, BookOpen } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Validation Schema for Formulaire 1
const formSchema = z.object({
  niveau: z.string().min(1, "Le niveau est requis"),
  nom: z.string().min(8, "8 lettres minimum").max(30, "30 lettres maximum"),
  description: z.string().min(50, "50 lettres minimum"),
});

type FormValues = z.infer<typeof formSchema>;

export interface Enseignement {
  id: string;
  niveau: string;
  nom: string;
  description: string;
}

// Composant PROS pour le tableau
export const TableEnseignement = ({ data, col1, col2, onDelete }: { data: Enseignement[], col1: string, col2: string, onDelete: (id: string) => void }) => (
  <div className="overflow-x-auto neo-card">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-primary text-primary-foreground font-mono uppercase text-sm">
          <th className="p-4 border-r border-primary-foreground/20">Niveau</th>
          <th className="p-4 border-r border-primary-foreground/20">{col1}</th>
          <th className="p-4">{col2}</th>
          <th className="p-4 w-20">Action</th>
        </tr>
      </thead>
      <tbody>
        <AnimatePresence>
          {data.map((item) => (
            <motion.tr 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
            >
              <td className="p-4 font-bold text-primary border-r border-primary/10">{item.niveau}</td>
              <td className="p-4 font-mono border-r border-primary/10">{item.nom}</td>
              <td className="p-4 text-muted-foreground text-sm leading-relaxed">{item.description}</td>
              <td className="p-4">
                <button onClick={() => onDelete(item.id)} className="text-destructive hover:scale-110 transition-transform">
                  <Trash2 size={18} />
                </button>
              </td>
            </motion.tr>
          ))}
        </AnimatePresence>
      </tbody>
    </table>
  </div>
);

// Composant pour le formulaire
export const FormulaireEnseignement = ({ onAdd, onCancel }: { onAdd: (data: FormValues) => void, onCancel: () => void }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    onAdd(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="neo-card p-8 bg-card/50 backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <BookOpen className="text-primary" /> Nouvel Enseignement
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-widest text-primary">Niveau</label>
          <select {...register("niveau")} className="w-full bg-background border-2 border-primary/20 p-3 focus:border-primary outline-none transition-colors">
            <option value="">Sélectionner un niveau</option>
            <option value="L1">Licence 1</option>
            <option value="L2">Licence 2</option>
            <option value="L3">Licence 3</option>
            <option value="Master">Master</option>
          </select>
          {errors.niveau && <p className="text-destructive text-xs mt-1">{errors.niveau.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-widest text-primary">Nom de l'enseignement</label>
          <input {...register("nom")} placeholder="Ex: Programmation Web" className="w-full bg-background border-2 border-primary/20 p-3 focus:border-primary outline-none transition-colors" />
          {errors.nom && <p className="text-destructive text-xs mt-1">{errors.nom.message}</p>}
        </div>
      </div>
      <div className="space-y-2 mb-8">
        <label className="font-mono text-xs uppercase tracking-widest text-primary">Description (50 caractères min.)</label>
        <textarea {...register("description")} rows={4} placeholder="Décrivez le contenu de cet enseignement..." className="w-full bg-background border-2 border-primary/20 p-3 focus:border-primary outline-none transition-colors" />
        {errors.description && <p className="text-destructive text-xs mt-1">{errors.description.message}</p>}
      </div>
      <div className="flex gap-4">
        <button type="submit" className="neo-button flex-1">Enregistrer</button>
        <button type="button" onClick={onCancel} className="border-2 border-primary/20 px-6 py-3 font-bold hover:bg-primary/10 transition-colors">Annuler</button>
      </div>
    </form>
  );
};

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BookOpen } from "lucide-react";

const formSchema = z.object({
  niveau: z.string().min(1, "Le niveau est requis"),
  nom: z.string().min(8, "8 lettres minimum").max(30, "30 lettres maximum"),
  description: z.string().min(50, "50 lettres minimum"),
});

const FormulaireEnseignement = ({ onAdd, onCancel }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
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

export default FormulaireEnseignement;

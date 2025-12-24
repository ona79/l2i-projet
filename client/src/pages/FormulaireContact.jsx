import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const contactSchema = z.object({
  prenom: z.string().min(2, "2 lettres min.").max(30, "30 lettres max."),
  nom: z.string().min(2, "2 lettres min.").max(30, "30 lettres max."),
  email: z.string().email("Format email invalide"),
  telephone: z.string().regex(/^(\+221|00221)?[7][0678][0-9]{7}$/, "Format Sénégalais requis (ex: 77 867 34 44)"),
  message: z.string().min(1, "Requis").max(10, "10 lettres maximum"),
});

const FormulaireContact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    toast.success("Message envoyé avec succès !");
    reset();
  };

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="neo-card p-8 bg-card">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Send className="text-primary" /> Formulaire de Contact
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-primary">Prénom</label>
            <input {...register("prenom")} className="w-full bg-background border-2 border-primary/20 p-3 focus:border-primary outline-none transition-colors" />
            {errors.prenom && <p className="text-destructive text-xs mt-1">{errors.prenom.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-primary">Nom</label>
            <input {...register("nom")} className="w-full bg-background border-2 border-primary/20 p-3 focus:border-primary outline-none transition-colors" />
            {errors.nom && <p className="text-destructive text-xs mt-1">{errors.nom.message}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-widest text-primary">Email</label>
          <input {...register("email")} className="w-full bg-background border-2 border-primary/20 p-3 focus:border-primary outline-none transition-colors" />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-widest text-primary">Téléphone (Sénégal)</label>
          <input {...register("telephone")} placeholder="77 867 34 44" className="w-full bg-background border-2 border-primary/20 p-3 focus:border-primary outline-none transition-colors" />
          {errors.telephone && <p className="text-destructive text-xs mt-1">{errors.telephone.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-widest text-primary">Message (10 lettres max.)</label>
          <textarea {...register("message")} rows={3} className="w-full bg-background border-2 border-primary/20 p-3 focus:border-primary outline-none transition-colors" />
          {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
        </div>
        <button type="submit" className="neo-button w-full">Envoyer le message</button>
      </form>
    </motion.div>
  );
};

export default FormulaireContact;

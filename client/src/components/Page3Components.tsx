import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, MessageSquare, Send, MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

// Validation Schema for Formulaire 2
const contactSchema = z.object({
  prenom: z.string().min(2, "2 lettres min.").max(30, "30 lettres max."),
  nom: z.string().min(2, "2 lettres min.").max(30, "30 lettres max."),
  email: z.string().email("Format email invalide"),
  telephone: z.string().regex(/^(\+221|00221)?[7][0678][0-9]{7}$/, "Format Sénégalais requis (ex: 77 867 34 44)"),
  message: z.string().min(1, "Requis").max(10, "10 lettres maximum"),
});

type ContactValues = z.infer<typeof contactSchema>;

export const Section3_1 = () => (
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

export const Section3_2 = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="text-3xl font-bold mb-8">Contact & Réseaux Sociaux</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: "Facebook", icon: <Facebook />, color: "hover:bg-[#1877F2]" },
            { name: "Instagram", icon: <Instagram />, color: "hover:bg-[#E4405F]" },
            { name: "Twitter", icon: <Twitter />, color: "hover:bg-[#1DA1F2]" },
            { name: "WhatsApp", icon: <MessageSquare />, color: "hover:bg-[#25D366]" }
          ].map((social) => (
            <a key={social.name} href="#" className={`flex items-center gap-4 p-4 border-2 border-primary/20 transition-all hover:border-primary hover:text-white ${social.color}`}>
              {social.icon}
              <span className="font-mono text-xs uppercase tracking-widest">{social.name}</span>
            </a>
          ))}
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-6 bg-card border-2 border-primary/10">
            <Mail className="text-primary" />
            <div>
              <p className="font-mono text-xs uppercase text-primary">Email</p>
              <p className="font-bold">i.d140@zig.univ.sn</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-card border-2 border-primary/10">
            <Phone className="text-primary" />
            <div>
              <p className="font-mono text-xs uppercase text-primary">Téléphone</p>
              <p className="font-bold">+221 78 190 14 24 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Section3_4 = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactValues) => {
    console.log("Contact Form Data:", data);
    toast.success("Message envoyé avec succès !");
    reset();
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container max-w-3xl">
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
      </div>
    </section>
  );
};

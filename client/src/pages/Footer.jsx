import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-primary/20 py-12 mt-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">L2I.UASZ</h3>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Licence 2 Ingénierie Informatique de l'Université Assane Seck de Ziguinchor. 
            Former les innovateurs de demain.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-sm uppercase tracking-widest text-primary mb-6">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+221 78 190 14 24" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <Phone size={18} /> +221 78 190 14 24

            </a>
            <a href="mailto:i.d140@zig.univ.sn" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <Mail size={18} /> contact@l2i.sn
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-sm uppercase tracking-widest text-primary mb-6">Suivez-nous</h4>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/share/1BmDD5f99E/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
            className="text-foreground/80 hover:text-primary transition-transform hover:scale-110">
              <Facebook />
            </a>
            <a href="" className="text-foreground/80 hover:text-primary transition-transform hover:scale-110"><Instagram /></a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-transform hover:scale-110"><Twitter /></a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-transform hover:scale-110"><MessageSquare /></a>
          </div>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-primary/10 text-center text-muted-foreground text-sm font-mono">
        © 2025 L2I UASZ. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;

import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Facebook, Instagram, Twitter, Phone, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Menue() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Présentation", path: "/" },
    { name: "Niveaux", path: "/niveaux" },
    { name: "Département", path: "/departement" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b-2 border-primary/20">
      <div className="container flex justify-between items-center h-20">
        <Link href="/">
          <a className="font-serif text-2xl font-bold text-primary tracking-tighter">
            L2I<span className="text-foreground">.UASZ</span>
          </a>
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className={`font-mono text-sm uppercase tracking-widest transition-colors hover:text-primary ${location === item.path ? 'text-primary font-bold' : 'text-foreground/70'}`}>
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-background border-b-2 border-primary p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className={`font-mono text-lg uppercase tracking-widest ${location === item.path ? 'text-primary' : 'text-foreground'}`} onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
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
            <a href="tel:+221778673444" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <Phone size={18} /> +221 78 190 14 24
            </a>
            <a href="mailto:contact@uasz.sn" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <Mail size={18} /> contact@uasz.sn
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
            <a href="#" className="text-foreground/80 hover:text-primary transition-transform hover:scale-110"><Instagram /></a>
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
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Menue />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";

const Menu = () => {
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
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
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
};

export default Menu;

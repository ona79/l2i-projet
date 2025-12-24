import React from "react";
import { Facebook, Instagram, Twitter, MessageSquare, Mail, Phone } from "lucide-react";

const Section3_2 = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="text-3xl font-bold mb-8">Contact & Réseaux Sociaux</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: "Facebook", icon: <Facebook />, color: "hover:bg-[#1877F2]", href : "https://www.facebook.com/share/1BmDD5f99E/?mibextid=wwXIfr"},
            { name: "Instagram", icon: <Instagram />, color: "hover:bg-[#E4405F]" },
            { name: "Twitter", icon: <Twitter />, color: "hover:bg-[#1DA1F2]" },
            { name: "WhatsApp", icon: <MessageSquare />, color: "hover:bg-[#25D366]" }
          ].map((social) => (
            <a key={social.name} href={social.href} target="_blank" className={`flex items-center gap-4 p-4 border-2 border-primary/20 transition-all hover:border-primary hover:text-white ${social.color}`}>
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
              <p className="font-bold"> <a href="mailto:i.d140@zig.univ.sn">i.d140@zig.univ.sn</a></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-card border-2 border-primary/10">
            <Phone className="text-primary" />
            <div>
              <p className="font-mono text-xs uppercase text-primary">Téléphone</p>
              <p className="font-bold"><a href="tel:+221 78 190 14 24">+221 78 190 14 24</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Section3_2;
